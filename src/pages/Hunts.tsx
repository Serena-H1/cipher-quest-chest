import { TreasureHuntCard } from "@/components/TreasureHuntCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const treasureHunts = [
  {
    title: "The Lost Pirate's Gold",
    difficulty: "Medium" as const,
    reward: "500 GOLD",
    status: "active" as const,
    participants: 89,
    timeLeft: "2d 14h",
    location: "Caribbean Islands"
  },
  {
    title: "Encrypted Vault Mystery",
    difficulty: "Hard" as const,
    reward: "1,200 GOLD",
    status: "encrypted" as const,
    participants: 156,
    timeLeft: "5d 8h",
    location: "Hidden Location"
  },
  {
    title: "Ancient Rune Quest",
    difficulty: "Legendary" as const,
    reward: "2,500 GOLD + NFT",
    status: "active" as const,
    participants: 203,
    timeLeft: "7d 12h",
    location: "Norse Ruins"
  },
  {
    title: "Temple of Secrets",
    difficulty: "Easy" as const,
    reward: "250 GOLD",
    status: "completed" as const,
    participants: 67,
    location: "Maya Temple"
  },
  {
    title: "Cyber Fortress Challenge",
    difficulty: "Hard" as const,
    reward: "1,000 GOLD",
    status: "encrypted" as const,
    participants: 134,
    timeLeft: "3d 6h",
    location: "Digital Realm"
  },
  {
    title: "Moonlight Treasure",
    difficulty: "Medium" as const,
    reward: "750 GOLD",
    status: "active" as const,
    participants: 98,
    timeLeft: "1d 18h",
    location: "Midnight Forest"
  }
];

const Hunts = () => {
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
                <Link to="/hunts" className="text-treasure font-medium">Hunts</Link>
                <Link to="/leaderboard" className="text-foreground hover:text-treasure transition-colors">Leaderboard</Link>
                <Link to="/how-it-works" className="text-foreground hover:text-treasure transition-colors">How It Works</Link>
              </nav>
            </div>
            <Button className="gradient-treasure text-shadow-deep">
              <Plus className="w-4 h-4 mr-2" />
              Create Hunt
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="gradient-mystical text-white px-4 py-2 text-sm floating mb-4">
            Active Treasure Hunts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Discover </span>
            <span className="text-treasure">Hidden Treasures</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your adventure and uncover encrypted rewards. Some treasures require special keys to decrypt.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="outline" size="sm" className="border-mystical text-mystical">
            <Filter className="w-4 h-4 mr-2" />
            All Hunts
          </Button>
          <Button variant="ghost" size="sm">Active</Button>
          <Button variant="ghost" size="sm">Encrypted</Button>
          <Button variant="ghost" size="sm">Completed</Button>
        </div>

        {/* Treasure Hunt Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {treasureHunts.map((hunt, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <TreasureHuntCard {...hunt} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-treasure text-treasure hover:bg-treasure/10">
            <Search className="w-5 h-5 mr-2" />
            Load More Hunts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hunts;