# Cipher Quest Chest 🏴‍☠️

Embark on the ultimate cryptographic adventure where ancient treasure maps meet cutting-edge FHE technology. Decode encrypted messages, unlock digital chests, and claim your place among the legendary codebreakers of the blockchain realm.

## ⚔️ Quest Features

- **Mystical Encryption**: Harness the power of Fully Homomorphic Encryption to protect your quest secrets
- **Treasure Vaults**: Secure your digital treasures with blockchain-powered chests
- **Guild Connections**: Join forces with fellow adventurers through integrated wallet systems
- **Legend Rankings**: Climb the leaderboard and earn your place in the Hall of Cryptographers
- **Quest Forging**: Craft your own cryptographic challenges for other adventurers
- **Honor System**: Build your reputation as a master of the cryptographic arts

## 🗺️ Adventure Setup

### Quest Requirements

- Node.js 18+ (The ancient scrolls require modern tools)
- npm or yarn (Your treasure hunting toolkit)
- A Web3 wallet (Your digital keyring for the blockchain realm)

### Installation Ritual

```bash
# Summon the repository from the digital realm
git clone https://github.com/Serena-H1/cipher-quest-chest.git

# Enter the quest chamber
cd cipher-quest-chest

# Gather your magical components
npm install

# Prepare your environment scroll
cp env.example .env

# Begin your adventure
npm run dev
```

### Environment Configuration

Create your `.env` scroll with these sacred variables:

```env
# Realm Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint_here

# Guild Connection
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Optional: Additional RPC endpoints
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key_here
```

## 🏰 Quest Architecture

### Frontend Arsenal
- **React 18** with TypeScript (The modern mage's toolkit)
- **Vite** for lightning-fast spell casting
- **Tailwind CSS** for mystical styling
- **shadcn/ui** for enchanted components
- **RainbowKit** for guild connections
- **Wagmi** for blockchain incantations

### Smart Contract Spells
- **Solidity** with FHE support (Ancient cryptographic magic)
- **Zama Network** for FHE operations (The realm of encrypted computation)
- **Sepolia Testnet** for quest deployment (The training grounds)

### Core Quest Components
- `CipherQuest.sol` - The master contract containing all quest spells
- `WalletConnect.tsx` - The guild connection portal
- Quest management and legend ranking systems

## 🔮 Mystical FHE Integration

This quest harnesses the ancient art of Fully Homomorphic Encryption to ensure:
- **Secrecy**: Your quest data remains shrouded in mystery even during magical computations
- **Protection**: All cryptographic operations are performed on encrypted scrolls
- **Verification**: Every spell cast is recorded and verifiable in the blockchain ledger

## ⚔️ Quest Gameplay

1. **Join the Guild**: Connect your digital keyring (Rainbow, MetaMask, or other enchanted wallets)
2. **Register Your Legend**: Create your cryptographer's profile in the Hall of Fame
3. **Explore the Vault**: Discover available cryptographic challenges in the treasure chamber
4. **Decode the Runes**: Solve ancient ciphers and submit your solutions
5. **Claim Your Treasure**: Collect mystical tokens and ascend the legend rankings
6. **Forge New Quests**: Craft your own cryptographic challenges for fellow adventurers

## 🔧 Quest Development

### Magical Commands

```bash
npm run dev          # Begin your development quest
npm run build        # Forge the production artifacts
npm run preview      # Preview your crafted creation
npm run lint         # Check for mystical code inconsistencies
```

### Quest Structure

```
src/
├── components/       # Enchanted React components
├── pages/          # Quest page chambers
├── hooks/          # Custom magical hooks
├── lib/            # Utility spells and configurations
├── assets/         # Treasure chest assets
└── contracts/      # Smart contract scrolls
```

## 🌐 Quest Deployment

### Vercel Portal Deployment

1. **Summon Repository**: Link your GitHub repository to the Vercel realm
2. **Configure Sacred Variables**: Add all required environment variables
3. **Cast Deployment Spell**: Automatic deployment on every push to main branch

### Manual Quest Deployment

```bash
# Forge the production artifacts
npm run build

# Deploy to your chosen hosting realm
# (Vercel, Netlify, AWS, etc.)
```

## 🔧 Quest Configuration

### Guild Connection Setup

1. Obtain a WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Update the `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` in your environment scroll

### RPC Portal Configuration

Configure your preferred RPC gateways:
- **Infura**: Professional Ethereum infrastructure
- **1RPC**: Free, privacy-focused RPC service
- **Alchemy**: Developer-friendly blockchain APIs

## 🤝 Join the Guild

We welcome fellow adventurers! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quest Development Workflow

1. Fork the repository to your personal realm
2. Create a feature branch for your quest
3. Craft your magical changes
4. Add tests if your quest requires verification
5. Submit a pull request to the guild

## 📜 Quest License

This quest is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Guild Support

- **Ancient Scrolls**: Check our [Wiki](https://github.com/Serena-H1/cipher-quest-chest/wiki)
- **Quest Reports**: Report bugs and request features on [GitHub Issues](https://github.com/Serena-H1/cipher-quest-chest/issues)
- **Guild Hall**: Join our community [Discord Server](https://discord.gg/cipherquest)

## 🎯 Quest Roadmap

- [ ] Mobile quest companion app
- [ ] Advanced FHE spell casting
- [ ] Cross-realm support
- [ ] NFT treasure rewards system
- [ ] AI-powered quest generation
- [ ] Multi-language scroll support

---

**Forged with ⚔️ by the Cipher Quest Guild**

*Embark on the ultimate cryptographic adventure, one cipher at a time.*
