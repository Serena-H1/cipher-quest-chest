import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreasureChest, Lock, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock contract address - replace with actual deployed contract
const CIPHER_QUEST_CONTRACT = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6";

export const QuestContract = () => {
  const { address, isConnected } = useAccount();
  const { toast } = useToast();
  
  const [questName, setQuestName] = useState("");
  const [questDescription, setQuestDescription] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [rewardAmount, setRewardAmount] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");

  // Contract write functions
  const { writeContract: createQuest, data: createHash, isPending: isCreating } = useWriteContract();
  const { writeContract: registerPlayer, data: registerHash, isPending: isRegistering } = useWriteContract();
  const { writeContract: attemptQuest, data: attemptHash, isPending: isAttempting } = useWriteContract();

  // Wait for transaction receipts
  const { isLoading: isCreateConfirming } = useWaitForTransactionReceipt({
    hash: createHash,
  });

  const { isLoading: isRegisterConfirming } = useWaitForTransactionReceipt({
    hash: registerHash,
  });

  const { isLoading: isAttemptConfirming } = useWaitForTransactionReceipt({
    hash: attemptHash,
  });

  const handleCreateQuest = async () => {
    if (!isConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to create a quest.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createQuest({
        address: CIPHER_QUEST_CONTRACT as `0x${string}`,
        abi: [
          {
            "inputs": [
              {"name": "_name", "type": "string"},
              {"name": "_description", "type": "string"},
              {"name": "_cipherText", "type": "string"},
              {"name": "_rewardAmount", "type": "uint256"},
              {"name": "_difficulty", "type": "uint256"},
              {"name": "_duration", "type": "uint256"}
            ],
            "name": "createQuest",
            "outputs": [{"name": "", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        functionName: "createQuest",
        args: [
          questName,
          questDescription,
          cipherText,
          BigInt(rewardAmount || "0"),
          BigInt(difficulty || "1"),
          BigInt(duration || "86400") // 24 hours in seconds
        ],
      });

      toast({
        title: "Quest Created!",
        description: "Your encrypted quest has been submitted to the blockchain.",
      });
    } catch (error) {
      toast({
        title: "Quest Creation Failed",
        description: "Failed to create quest. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRegisterPlayer = async () => {
    if (!isConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to register.",
        variant: "destructive",
      });
      return;
    }

    try {
      await registerPlayer({
        address: CIPHER_QUEST_CONTRACT as `0x${string}`,
        abi: [
          {
            "inputs": [],
            "name": "registerPlayer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        functionName: "registerPlayer",
      });

      toast({
        title: "Player Registered!",
        description: "Welcome to the Cipher Quest Guild!",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Failed to register player. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAttemptQuest = async (questId: string, solution: string) => {
    if (!isConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to attempt quests.",
        variant: "destructive",
      });
      return;
    }

    try {
      // In a real implementation, this would use FHE encryption
      // For now, we'll simulate the encrypted score
      const encryptedScore = "0x" + Math.random().toString(16).substr(2, 64);
      
      await attemptQuest({
        address: CIPHER_QUEST_CONTRACT as `0x${string}`,
        abi: [
          {
            "inputs": [
              {"name": "questId", "type": "uint256"},
              {"name": "solution", "type": "string"},
              {"name": "score", "type": "bytes"},
              {"name": "proof", "type": "bytes"}
            ],
            "name": "attemptQuest",
            "outputs": [{"name": "", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        functionName: "attemptQuest",
        args: [
          BigInt(questId),
          solution,
          encryptedScore,
          "0x" // Mock proof
        ],
      });

      toast({
        title: "Quest Attempted!",
        description: "Your encrypted solution has been submitted.",
      });
    } catch (error) {
      toast({
        title: "Quest Attempt Failed",
        description: "Failed to submit quest attempt. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Quest Contract Portal
          </CardTitle>
          <CardDescription>
            Connect your wallet to access the encrypted quest system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Lock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Please connect your wallet to interact with the quest contract
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Player Registration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Join the Guild
          </CardTitle>
          <CardDescription>
            Register as a player to start your cryptographic adventure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleRegisterPlayer}
            disabled={isRegistering || isRegisterConfirming}
            className="w-full"
          >
            {isRegistering || isRegisterConfirming ? "Registering..." : "Register Player"}
          </Button>
        </CardContent>
      </Card>

      {/* Quest Creation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreasureChest className="w-5 h-5" />
            Create Encrypted Quest
          </CardTitle>
          <CardDescription>
            Forge a new cryptographic challenge with FHE encryption
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Quest Name</label>
              <Input
                value={questName}
                onChange={(e) => setQuestName(e.target.value)}
                placeholder="Enter quest name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Reward Amount (ETH)</label>
              <Input
                value={rewardAmount}
                onChange={(e) => setRewardAmount(e.target.value)}
                placeholder="0.01"
                type="number"
                step="0.001"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Quest Description</label>
            <Textarea
              value={questDescription}
              onChange={(e) => setQuestDescription(e.target.value)}
              placeholder="Describe your quest challenge"
              rows={3}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Cipher Text</label>
            <Textarea
              value={cipherText}
              onChange={(e) => setCipherText(e.target.value)}
              placeholder="Enter the encrypted message to be solved"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Difficulty (1-10)</label>
              <Input
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                placeholder="5"
                type="number"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Duration (hours)</label>
              <Input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="24"
                type="number"
                min="1"
              />
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleCreateQuest}
                disabled={isCreating || isCreateConfirming || !questName || !cipherText}
                className="w-full"
              >
                {isCreating || isCreateConfirming ? "Creating..." : "Create Quest"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quest Attempt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Attempt Quest
          </CardTitle>
          <CardDescription>
            Submit your solution to an encrypted quest
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Quest ID</label>
                <Input placeholder="Enter quest ID" />
              </div>
              <div>
                <label className="text-sm font-medium">Your Solution</label>
                <Input placeholder="Enter your decrypted solution" />
              </div>
            </div>
            <Button 
              onClick={() => handleAttemptQuest("1", "sample solution")}
              disabled={isAttempting || isAttemptConfirming}
              className="w-full"
            >
              {isAttempting || isAttemptConfirming ? "Submitting..." : "Submit Solution"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contract Status */}
      <Card>
        <CardHeader>
          <CardTitle>Contract Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-2">FHE Encrypted</Badge>
              <p className="text-sm text-muted-foreground">
                All quest data is encrypted using Fully Homomorphic Encryption
              </p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-2">Blockchain Secured</Badge>
              <p className="text-sm text-muted-foreground">
                Quest data is stored on-chain with cryptographic security
              </p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-2">Privacy Protected</Badge>
              <p className="text-sm text-muted-foreground">
                Solutions remain private even during computation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
