// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract CipherQuest is SepoliaConfig {
    using FHE for *;
    
    struct Quest {
        euint32 questId;
        euint32 rewardAmount;
        euint32 difficulty;
        euint32 completionCount;
        bool isActive;
        bool isVerified;
        string name;
        string description;
        string cipherText;
        address creator;
        uint256 startTime;
        uint256 endTime;
    }
    
    struct QuestAttempt {
        euint32 attemptId;
        euint32 questId;
        euint32 score;
        bool isCompleted;
        address player;
        uint256 timestamp;
        string solution;
    }
    
    struct PlayerProfile {
        euint32 totalScore;
        euint32 completedQuests;
        euint32 level;
        bool isVerified;
        address player;
        uint256 joinTime;
    }
    
    mapping(uint256 => Quest) public quests;
    mapping(uint256 => QuestAttempt) public attempts;
    mapping(address => PlayerProfile) public players;
    mapping(address => euint32) public playerReputation;
    
    uint256 public questCounter;
    uint256 public attemptCounter;
    
    address public owner;
    address public verifier;
    
    event QuestCreated(uint256 indexed questId, address indexed creator, string name);
    event QuestAttempted(uint256 indexed attemptId, uint256 indexed questId, address indexed player);
    event QuestCompleted(uint256 indexed questId, address indexed player, uint32 score);
    event PlayerRegistered(address indexed player);
    event ReputationUpdated(address indexed player, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createQuest(
        string memory _name,
        string memory _description,
        string memory _cipherText,
        uint256 _rewardAmount,
        uint256 _difficulty,
        uint256 _duration
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Quest name cannot be empty");
        require(bytes(_cipherText).length > 0, "Cipher text cannot be empty");
        require(_duration > 0, "Duration must be positive");
        
        uint256 questId = questCounter++;
        
        quests[questId] = Quest({
            questId: FHE.asEuint32(0), // Will be set properly later
            rewardAmount: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            difficulty: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            completionCount: FHE.asEuint32(0),
            isActive: true,
            isVerified: false,
            name: _name,
            description: _description,
            cipherText: _cipherText,
            creator: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration
        });
        
        emit QuestCreated(questId, msg.sender, _name);
        return questId;
    }
    
    function registerPlayer() public {
        require(players[msg.sender].player == address(0), "Player already registered");
        
        players[msg.sender] = PlayerProfile({
            totalScore: FHE.asEuint32(0),
            completedQuests: FHE.asEuint32(0),
            level: FHE.asEuint32(1),
            isVerified: false,
            player: msg.sender,
            joinTime: block.timestamp
        });
        
        emit PlayerRegistered(msg.sender);
    }
    
    function attemptQuest(
        uint256 questId,
        string memory solution,
        externalEuint32 score,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(quests[questId].creator != address(0), "Quest does not exist");
        require(quests[questId].isActive, "Quest is not active");
        require(block.timestamp <= quests[questId].endTime, "Quest has ended");
        require(players[msg.sender].player != address(0), "Player not registered");
        
        uint256 attemptId = attemptCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalScore = FHE.fromExternal(score, inputProof);
        
        attempts[attemptId] = QuestAttempt({
            attemptId: FHE.asEuint32(0), // Will be set properly later
            questId: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            score: internalScore,
            isCompleted: false, // Will be determined by off-chain verification
            player: msg.sender,
            timestamp: block.timestamp,
            solution: solution
        });
        
        emit QuestAttempted(attemptId, questId, msg.sender);
        return attemptId;
    }
    
    function completeQuest(
        uint256 questId,
        uint256 attemptId,
        bool isCompleted
    ) public {
        require(msg.sender == verifier, "Only verifier can complete quests");
        require(quests[questId].creator != address(0), "Quest does not exist");
        require(attempts[attemptId].player != address(0), "Attempt does not exist");
        
        if (isCompleted) {
            // Update quest completion count
            quests[questId].completionCount = FHE.add(quests[questId].completionCount, FHE.asEuint32(1));
            
            // Update player stats
            address player = attempts[attemptId].player;
            players[player].completedQuests = FHE.add(players[player].completedQuests, FHE.asEuint32(1));
            players[player].totalScore = FHE.add(players[player].totalScore, attempts[attemptId].score);
            
            // Update player level based on score (simplified logic)
            euint32 newLevel = FHE.add(players[player].level, FHE.asEuint32(1));
            players[player].level = newLevel;
            
            attempts[attemptId].isCompleted = true;
            
            emit QuestCompleted(questId, player, 0); // Score will be decrypted off-chain
        }
    }
    
    function verifyQuest(uint256 questId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify quests");
        require(quests[questId].creator != address(0), "Quest does not exist");
        
        quests[questId].isVerified = isVerified;
    }
    
    function updatePlayerReputation(address player, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(player != address(0), "Invalid player address");
        
        playerReputation[player] = reputation;
        emit ReputationUpdated(player, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function getQuestInfo(uint256 questId) public view returns (
        string memory name,
        string memory description,
        string memory cipherText,
        uint8 rewardAmount,
        uint8 difficulty,
        uint8 completionCount,
        bool isActive,
        bool isVerified,
        address creator,
        uint256 startTime,
        uint256 endTime
    ) {
        Quest storage quest = quests[questId];
        return (
            quest.name,
            quest.description,
            quest.cipherText,
            0, // FHE.decrypt(quest.rewardAmount) - will be decrypted off-chain
            0, // FHE.decrypt(quest.difficulty) - will be decrypted off-chain
            0, // FHE.decrypt(quest.completionCount) - will be decrypted off-chain
            quest.isActive,
            quest.isVerified,
            quest.creator,
            quest.startTime,
            quest.endTime
        );
    }
    
    function getPlayerInfo(address player) public view returns (
        uint8 totalScore,
        uint8 completedQuests,
        uint8 level,
        bool isVerified,
        uint256 joinTime
    ) {
        PlayerProfile storage profile = players[player];
        return (
            0, // FHE.decrypt(profile.totalScore) - will be decrypted off-chain
            0, // FHE.decrypt(profile.completedQuests) - will be decrypted off-chain
            0, // FHE.decrypt(profile.level) - will be decrypted off-chain
            profile.isVerified,
            profile.joinTime
        );
    }
    
    function getAttemptInfo(uint256 attemptId) public view returns (
        uint8 questId,
        uint8 score,
        bool isCompleted,
        address player,
        uint256 timestamp,
        string memory solution
    ) {
        QuestAttempt storage attempt = attempts[attemptId];
        return (
            0, // FHE.decrypt(attempt.questId) - will be decrypted off-chain
            0, // FHE.decrypt(attempt.score) - will be decrypted off-chain
            attempt.isCompleted,
            attempt.player,
            attempt.timestamp,
            attempt.solution
        );
    }
    
    function getPlayerReputation(address player) public view returns (uint8) {
        return 0; // FHE.decrypt(playerReputation[player]) - will be decrypted off-chain
    }
    
    function withdrawReward(uint256 questId) public {
        require(quests[questId].creator == msg.sender, "Only creator can withdraw");
        require(quests[questId].isVerified, "Quest must be verified");
        require(block.timestamp > quests[questId].endTime, "Quest must be ended");
        
        // Transfer reward to creator
        // Note: In a real implementation, rewards would be transferred based on decrypted amount
        quests[questId].isActive = false;
        
        // For now, we'll transfer a placeholder amount
        // payable(msg.sender).transfer(amount);
    }
}
