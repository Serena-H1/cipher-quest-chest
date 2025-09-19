import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Key, Coins, Users, Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: 1,
    title: "Connect Your Wallet",
    description: "Connect your Web3 wallet to access encrypted treasure hunts and secure your rewards.",
    icon: <Shield className="w-8 h-8 text-mystical" />,
    color: "mystical"
  },
  {
    step: 2,
    title: "Choose Your Hunt",
    description: "Browse available treasure hunts with different difficulty levels and encrypted rewards.",
    icon: <Lock className="w-8 h-8 text-treasure" />,
    color: "treasure"
  },
  {
    step: 3,
    title: "Solve Puzzles On-Chain",
    description: "Use FHE technology to solve encrypted puzzles without revealing solutions to others.",
    icon: <Key className="w-8 h-8 text-mystical-purple" />,
    color: "purple"
  },
  {
    step: 4,
    title: "Claim Your Rewards",
    description: "Successfully solve puzzles to decrypt and claim your GOLD tokens and exclusive NFTs.",
    icon: <Coins className="w-8 h-8 text-treasure" />,
    color: "treasure"
  }
];

const features = [
  {
    title: "Fully Homomorphic Encryption",
    description: "Compute on encrypted data without revealing the underlying information to anyone.",
    icon: <Zap className="w-6 h-6 text-mystical" />
  },
  {
    title: "Privacy-Preserving Puzzles",
    description: "Solve puzzles while keeping your solutions completely private until you choose to reveal them.",
    icon: <Lock className="w-6 h-6 text-mystical-purple" />
  },
  {
    title: "Decentralized Rewards",
    description: "All rewards are distributed on-chain with transparent and verifiable smart contracts.",
    icon: <Coins className="w-6 h-6 text-treasure" />
  },
  {
    title: "Community Driven",
    description: "Join a global community of treasure hunters and puzzle solvers from around the world.",
    icon: <Users className="w-6 h-6 text-enchanted-green" />
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-treasure font-bold text-xl hover:opacity-80 transition-opacity">
                FHE Treasure Hunts
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/hunts" className="text-foreground hover:text-treasure transition-colors">Hunts</Link>
                <Link to="/leaderboard" className="text-foreground hover:text-treasure transition-colors">Leaderboard</Link>
                <Link to="/how-it-works" className="text-treasure font-medium">How It Works</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Badge className="gradient-mystical text-white px-4 py-2 text-sm floating mb-4">
            Powered by FHE Technology
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How It </span>
            <span className="text-treasure">Works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Fully Homomorphic Encryption enables private, secure treasure hunting on the blockchain.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Getting Started in </span>
            <span className="text-treasure">4 Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={step.step} className="relative overflow-hidden transition-all duration-500 hover:scale-105 treasure-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card to-muted/40" />
                <div className="relative p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mystical/20 to-treasure/20 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge className="bg-treasure text-white">
                      Step {step.step}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-2xl text-treasure/50">
                    →
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Key </span>
            <span className="text-treasure">Features</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-mystical/10 to-treasure/10">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FHE Explanation */}
        <Card className="max-w-4xl mx-auto p-8 mb-16 gradient-mystical text-white">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">What is Fully Homomorphic Encryption?</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              FHE allows computations to be performed on encrypted data without decrypting it first. 
              This means puzzle solutions can be verified while keeping them completely private until you choose to reveal them.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Lock className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Encrypted Input</h4>
                <p className="text-sm opacity-80">Your puzzle solutions stay encrypted</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Private Computation</h4>
                <p className="text-sm opacity-80">Smart contracts verify without seeing data</p>
              </div>
              <div className="text-center">
                <Coins className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Secure Rewards</h4>
                <p className="text-sm opacity-80">Claim rewards with proven solutions</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-foreground">Ready to Start </span>
            <span className="text-treasure">Hunting?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of treasure hunters exploring encrypted puzzles and claiming valuable rewards.
          </p>
          <Button asChild size="lg" className="gradient-treasure text-shadow-deep hover:shadow-lg transition-all">
            <Link to="/hunts">
              <Key className="w-5 h-5 mr-2" />
              Explore Treasure Hunts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;