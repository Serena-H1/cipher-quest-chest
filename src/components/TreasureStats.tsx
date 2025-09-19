import { Card } from "@/components/ui/card";
import { Trophy, Users, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    label: "Active Hunts",
    value: "47",
    change: "+12",
    color: "text-treasure"
  },
  {
    icon: Users,
    label: "Hunters",
    value: "2,341",
    change: "+89",
    color: "text-mystical"
  },
  {
    icon: Zap,
    label: "Rewards Claimed",
    value: "1,826",
    change: "+156",
    color: "text-mystical-purple"
  },
  {
    icon: Shield,
    label: "Encrypted Clues",
    value: "12,467",
    change: "+234",
    color: "text-enchanted-green"
  }
];

export const TreasureStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 treasure-glow group hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-card/50 ${stat.color} floating`} style={{animationDelay: `${index * 0.5}s`}}>
              <stat.icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground truncate">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <span className={`text-xs font-medium ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};