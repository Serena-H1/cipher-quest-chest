import { CompassFooter } from "@/components/CompassFooter";
import { WalletConnect } from "@/components/WalletConnect";
import { TreasureStats } from "@/components/TreasureStats";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import treasureMapBg from "@/assets/treasure-map-bg.jpg";
import treasureChestLogo from "@/assets/treasure-chest-logo.png";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Map Background */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${treasureMapBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
        
        {/* Header */}
        <header className="relative z-10 p-6">
          <nav className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={treasureChestLogo} 
                alt="FHE Treasure Hunts" 
                className="w-12 h-12 treasure-glow floating"
              />
              <div>
                <h1 className="text-xl font-bold text-treasure">FHE Treasure Hunts</h1>
                <p className="text-xs text-mystical">Encrypted Adventures</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/hunts" className="text-foreground hover:text-treasure transition-colors">Hunts</Link>
              <Link to="/leaderboard" className="text-foreground hover:text-treasure transition-colors">Leaderboard</Link>
              <Link to="/how-it-works" className="text-foreground hover:text-treasure transition-colors">How It Works</Link>
            </div>

            {/* Wallet Connect */}
            <WalletConnect />
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="gradient-mystical text-white px-4 py-2 text-sm floating">
              Powered by Fully Homomorphic Encryption
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Discover Hidden</span>
              <br />
              <span className="text-treasure treasure-glow">Rewards with FHE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Embark on encrypted treasure hunts where clues and rewards remain hidden until you solve puzzles on-chain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="gradient-treasure text-shadow-deep hover:shadow-lg transition-all">
                <Link to="/hunts">
                  <Map className="w-5 h-5 mr-2" />
                  Start Hunting
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-mystical text-mystical hover:bg-mystical/10">
                <Link to="/how-it-works">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Floating mystical elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-6xl text-mystical/20 floating select-none">⟐</div>
            <div className="absolute top-1/3 right-1/4 text-4xl text-treasure/20 floating select-none" style={{animationDelay: '1s'}}>⟢</div>
            <div className="absolute bottom-1/3 left-1/3 text-5xl text-mystical-purple/20 floating select-none" style={{animationDelay: '2s'}}>⟡</div>
            <div className="absolute bottom-1/4 right-1/3 text-3xl text-enchanted-green/20 floating select-none" style={{animationDelay: '0.5s'}}>⟢</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <TreasureStats />
        </div>
      </section>

      {/* Featured Hunts Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-treasure">Adventures</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get a taste of what awaits you in our encrypted treasure hunts.
            </p>
            <Button asChild size="lg" className="gradient-treasure text-shadow-deep hover:shadow-lg transition-all">
              <Link to="/hunts">
                <Map className="w-5 h-5 mr-2" />
                View All Hunts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <CompassFooter />
    </div>
  );
};

export default Index;
