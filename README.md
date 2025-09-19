# Cipher Quest Chest 🔐

A revolutionary cryptographic treasure hunt platform powered by Fully Homomorphic Encryption (FHE) and blockchain technology. Decrypt ciphers, earn rewards, and climb the leaderboard in the ultimate quest for digital treasure.

## 🌟 Features

- **FHE-Powered Encryption**: All quest data is encrypted using Fully Homomorphic Encryption for maximum privacy
- **Blockchain Integration**: Secure, transparent, and decentralized quest management
- **Real Wallet Connection**: Connect with Rainbow, MetaMask, and other popular wallets
- **Dynamic Leaderboards**: Compete with other cryptographers worldwide
- **Quest Creation**: Create and manage your own cryptographic challenges
- **Reputation System**: Build your reputation as a master cryptographer

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/Serena-H1/cipher-quest-chest.git

# Navigate to the project directory
cd cipher-quest-chest

# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Start the development server
npm run dev
```

### Environment Setup

Create a `.env` file with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **RainbowKit** for wallet connection
- **Wagmi** for Ethereum interactions

### Smart Contracts
- **Solidity** with FHE support
- **Zama Network** for FHE operations
- **Sepolia Testnet** for deployment

### Key Components
- `CipherQuest.sol` - Main smart contract with FHE encryption
- `WalletConnect.tsx` - Wallet connection component
- Quest management and leaderboard systems

## 🔐 FHE Integration

This project leverages Fully Homomorphic Encryption to ensure:
- **Privacy**: Quest data remains encrypted even during computation
- **Security**: Cryptographic operations are performed on encrypted data
- **Transparency**: All operations are verifiable on-chain

## 🎮 How to Play

1. **Connect Your Wallet**: Use Rainbow, MetaMask, or other supported wallets
2. **Register**: Create your cryptographer profile
3. **Browse Quests**: Explore available cryptographic challenges
4. **Decrypt**: Solve ciphers and submit your solutions
5. **Earn Rewards**: Collect tokens and climb the leaderboard
6. **Create Quests**: Design your own challenges for others to solve

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```
src/
├── components/       # React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── assets/         # Static assets
└── contracts/      # Smart contracts
```

## 🌐 Deployment

### Vercel Deployment

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add all required environment variables
3. **Deploy**: Automatic deployment on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred hosting service
# (Vercel, Netlify, AWS, etc.)
```

## 🔧 Configuration

### Wallet Connect Setup

1. Get a WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Update the `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` in your environment variables

### RPC Configuration

Configure your preferred RPC endpoints:
- **Infura**: Professional Ethereum infrastructure
- **1RPC**: Free, privacy-focused RPC service
- **Alchemy**: Developer-friendly blockchain APIs

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our [Wiki](https://github.com/Serena-H1/cipher-quest-chest/wiki)
- **Issues**: Report bugs and request features on [GitHub Issues](https://github.com/Serena-H1/cipher-quest-chest/issues)
- **Discord**: Join our community [Discord Server](https://discord.gg/cipherquest)

## 🎯 Roadmap

- [ ] Mobile app development
- [ ] Advanced FHE operations
- [ ] Cross-chain support
- [ ] NFT rewards system
- [ ] AI-powered quest generation
- [ ] Multi-language support

---

**Built with ❤️ by the Cipher Quest Team**

*Decrypt the future, one cipher at a time.*
