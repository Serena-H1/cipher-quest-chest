import { Navigation, Compass } from "lucide-react";

export const CompassFooter = () => {
  return (
    <footer className="relative bg-card/80 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Animated Compass */}
          <div className="relative">
            <div className="w-24 h-24 relative animate-spin-slow">
              <Compass className="w-full h-full text-treasure treasure-glow" />
              <div className="absolute inset-0 rounded-full border-2 border-mystical/30 animate-glow-pulse" />
            </div>
            
            {/* Floating Runes around compass */}
            <div className="absolute -top-8 -left-8 text-mystical/50 text-2xl floating select-none">
              ᚱ
            </div>
            <div className="absolute -top-6 -right-6 text-treasure/50 text-xl floating select-none" style={{animationDelay: '1s'}}>
              ᚦ
            </div>
            <div className="absolute -bottom-6 -left-6 text-mystical-purple/50 text-lg floating select-none" style={{animationDelay: '2s'}}>
              ᚼ
            </div>
            <div className="absolute -bottom-8 -right-8 text-enchanted-green/50 text-xl floating select-none" style={{animationDelay: '0.5s'}}>
              ᚾ
            </div>
            
            {/* Mystical Symbols in Corners */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-mystical/30 text-3xl floating select-none" style={{animationDelay: '1.5s'}}>
              ⟐
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-treasure/30 text-2xl floating select-none" style={{animationDelay: '2.5s'}}>
              ⟢
            </div>
          </div>

          {/* Encrypted Message */}
          <div className="text-center space-y-2">
            <p className="text-mystical text-sm font-medium">
              "The compass points to hidden treasures"
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="blur-[1px] select-none">01001000 01101001 01100100 01100100 01100101 01101110</span>
              <span className="text-treasure">•</span>
              <span className="blur-[1px] select-none">01010010 01100101 01110111 01100001 01110010 01100100 01110011</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-treasure transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-treasure transition-colors">
              How It Works
            </a>
            <a href="#" className="text-muted-foreground hover:text-treasure transition-colors">
              Leaderboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-treasure transition-colors">
              Support
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/30 w-full text-center">
            <p className="text-xs text-muted-foreground">
              © 2024 FHE Treasure Hunts. All mysteries reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-4 w-2 h-2 bg-mystical/20 rounded-full animate-glow-pulse"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-treasure/30 rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-mystical-purple/20 rounded-full animate-glow-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-4 right-6 w-1 h-1 bg-enchanted-green/25 rounded-full animate-glow-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </footer>
  );
};