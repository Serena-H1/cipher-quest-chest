# Vercel Deployment Guide for Cipher Quest Chest

This guide provides step-by-step instructions for deploying the Cipher Quest Chest application to Vercel.

## Prerequisites

- GitHub repository: `https://github.com/Serena-H1/cipher-quest-chest`
- Vercel account (free tier available)
- Environment variables ready

## Step-by-Step Deployment

### 1. Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" on the dashboard

### 2. Import GitHub Repository

1. In the "Import Git Repository" section, search for `Serena-H1/cipher-quest-chest`
2. Click "Import" next to the repository
3. Vercel will automatically detect it as a Vite project

### 3. Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

#### Environment Variables
Add the following environment variables in the Vercel dashboard:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint_here

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key_here
NEXT_PUBLIC_RPC_URL=your_alternative_rpc_here
```

### 4. Deploy Configuration

#### Step 4.1: Add Environment Variables
1. In the project settings, go to "Environment Variables"
2. Add each variable one by one:
   - `NEXT_PUBLIC_CHAIN_ID` = `11155111`
   - `NEXT_PUBLIC_RPC_URL` = `your_rpc_endpoint_here`
   - `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` = `your_project_id_here`
   - `NEXT_PUBLIC_INFURA_API_KEY` = `your_infura_key_here`

#### Step 4.2: Configure Build Settings
1. Go to "Settings" → "General"
2. Set the following:
   - **Framework**: Vite
   - **Node.js Version**: 18.x (recommended)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 5. Deploy the Application

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Vercel will provide a deployment URL (e.g., `https://cipher-quest-chest.vercel.app`)

### 6. Post-Deployment Configuration

#### Step 6.1: Verify Deployment
1. Visit the provided URL
2. Test wallet connection functionality
3. Verify all features are working correctly

#### Step 6.2: Custom Domain (Optional)
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel

### 7. Continuous Deployment Setup

#### Automatic Deployments
- **Production**: Deploys automatically on pushes to `main` branch
- **Preview**: Deploys automatically on pull requests

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel --prod
```

## Environment Variables Reference

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Sepolia testnet chain ID |
| `NEXT_PUBLIC_RPC_URL` | `your_rpc_endpoint_here` | Ethereum RPC endpoint |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `your_project_id_here` | WalletConnect project ID |
| `NEXT_PUBLIC_INFURA_API_KEY` | `your_infura_key_here` | Infura API key |

## Troubleshooting

### Common Issues

#### Build Failures
- **Issue**: Build fails due to missing dependencies
- **Solution**: Ensure `package-lock.json` is committed and dependencies are properly installed

#### Environment Variables Not Working
- **Issue**: Environment variables not accessible in the app
- **Solution**: Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access

#### Wallet Connection Issues
- **Issue**: WalletConnect not working
- **Solution**: Verify `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` is correctly set

#### RPC Connection Issues
- **Issue**: Cannot connect to Ethereum network
- **Solution**: Check RPC URL and ensure it's accessible from Vercel's servers

### Performance Optimization

#### Build Optimization
1. Enable Vercel's automatic optimizations
2. Use Vercel's Edge Functions for API routes
3. Configure proper caching headers

#### Monitoring
1. Set up Vercel Analytics
2. Monitor Core Web Vitals
3. Track deployment performance

## Security Considerations

### Environment Variables
- Never commit sensitive keys to the repository
- Use Vercel's environment variable encryption
- Rotate keys regularly

### Network Security
- Use HTTPS for all connections
- Implement proper CORS policies
- Validate all user inputs

## Maintenance

### Regular Updates
1. Monitor for dependency updates
2. Update environment variables as needed
3. Test deployments in preview mode first

### Monitoring
1. Set up alerts for deployment failures
2. Monitor application performance
3. Track user engagement metrics

## Support

For deployment issues:
- Check Vercel's [documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Contact support through Vercel's help center

---

**Deployment completed successfully!** 🚀

Your Cipher Quest Chest application is now live and ready for users to start their cryptographic treasure hunt journey.
