import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Crown, Medal, Star } from "lucide-react";
import { Link } from "react-router-dom";

const leaderboardData = [
  {
    rank: 1,
    username: "CryptoExplorer",
    treasuresFound: 47,
    totalRewards: "12,500 GOLD",
    badge: "Legendary Hunter",
    avatar: "⚡"
  },
  {
    rank: 2,
    username: "MysticalSeeker",
    treasuresFound: 39,
    totalRewards: "9,800 GOLD",
    badge: "Master Explorer",
    avatar: "🔮"
  },
  {
    rank: 3,
    username: "RuneDecoder",
    treasuresFound: 34,
    totalRewards: "8,200 GOLD",
    badge: "Expert Solver",
    avatar: "📜"
  },
  {
    rank: 4,
    username: "DigitalNomad",
    treasuresFound: 28,
    totalRewards: "6,750 GOLD",
    badge: "Skilled Hunter",
    avatar: "🗝️"
  },
  {
    rank: 5,
    username: "QuestMaster",
    treasuresFound: 25,
    totalRewards: "5,900 GOLD",
    badge: "Skilled Hunter",
    avatar: "⚔️"
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-treasure" />;
    case 2:
      return <Trophy className="w-6 h-6 text-mystical" />;
    case 3:
      return <Medal className="w-6 h-6 text-enchanted-green" />;
    default:
      return <Star className="w-5 h-5 text-muted-foreground" />;
  }
};

const Leaderboard = () => {
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
                <Link to="/leaderboard" className="text-treasure font-medium">Leaderboard</Link>
                <Link to="/how-it-works" className="text-foreground hover:text-treasure transition-colors">How It Works</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="gradient-mystical text-white px-4 py-2 text-sm floating mb-4">
            Top Treasure Hunters
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Global </span>
            <span className="text-treasure">Leaderboard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See who's leading the hunt for encrypted treasures across all realms.
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {leaderboardData.slice(0, 3).map((hunter, index) => (
            <Card key={hunter.rank} className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
              hunter.rank === 1 ? 'treasure-glow ring-2 ring-treasure/50' : 
              hunter.rank === 2 ? 'mystical-glow ring-2 ring-mystical/50' : 
              'ring-2 ring-enchanted-green/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card to-muted/40" />
              <div className="relative p-6 text-center space-y-4">
                <div className="flex justify-center items-center gap-2">
                  {getRankIcon(hunter.rank)}
                  <span className="text-2xl font-bold">#{hunter.rank}</span>
                </div>
                <div className="text-4xl">{hunter.avatar}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{hunter.username}</h3>
                  <Badge className={
                    hunter.rank === 1 ? "bg-treasure text-white" :
                    hunter.rank === 2 ? "bg-mystical text-white" :
                    "bg-enchanted-green text-white"
                  }>
                    {hunter.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-treasure">{hunter.treasuresFound}</span> treasures found
                  </div>
                  <div className="text-lg font-bold text-treasure">
                    {hunter.totalRewards}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="max-w-4xl mx-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="text-foreground">Complete </span>
              <span className="text-treasure">Rankings</span>
            </h2>
            
            <div className="space-y-4">
              {leaderboardData.map((hunter) => (
                <div key={hunter.rank} className="flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 min-w-[60px]">
                      {getRankIcon(hunter.rank)}
                      <span className="font-bold text-lg">#{hunter.rank}</span>
                    </div>
                    
                    <div className="text-2xl">{hunter.avatar}</div>
                    
                    <div>
                      <h3 className="font-bold text-foreground">{hunter.username}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {hunter.badge}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-treasure">{hunter.totalRewards}</div>
                    <div className="text-sm text-muted-foreground">
                      {hunter.treasuresFound} treasures
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gradient-treasure text-shadow-deep hover:shadow-lg transition-all">
            <Link to="/hunts">
              <Trophy className="w-5 h-5 mr-2" />
              Join the Hunt
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;