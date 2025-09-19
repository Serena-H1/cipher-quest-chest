import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Coins, MapPin, Clock } from "lucide-react";

interface TreasureHuntCardProps {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  reward: string;
  status: "active" | "encrypted" | "completed";
  participants: number;
  timeLeft?: string;
  location: string;
}

const difficultyColors = {
  Easy: "bg-enchanted-green text-white",
  Medium: "bg-mystical-blue text-white", 
  Hard: "bg-mystical-purple text-white",
  Legendary: "gradient-treasure text-shadow-deep"
};

export const TreasureHuntCard = ({
  title,
  difficulty,
  reward,
  status,
  participants,
  timeLeft,
  location
}: TreasureHuntCardProps) => {
  const isEncrypted = status === "encrypted";
  const isCompleted = status === "completed";

  return (
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${
      isEncrypted ? 'mystical-glow' : 'treasure-glow'
    } ${isCompleted ? 'opacity-75' : ''}`}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card to-muted/40" />
      
      {/* Encrypted overlay */}
      {isEncrypted && (
        <div className="absolute inset-0 bg-gradient-to-br from-mystical-blue/20 to-mystical-purple/20 backdrop-blur-sm" />
      )}

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className={`text-lg font-bold ${isEncrypted ? 'text-mystical blur-sm select-none' : 'text-foreground'}`}>
              {isEncrypted ? "█████ ███████" : title}
            </h3>
            <Badge className={difficultyColors[difficulty]} variant="secondary">
              {difficulty}
            </Badge>
          </div>
          
          {isEncrypted && (
            <div className="floating">
              <Lock className="w-6 h-6 text-mystical" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className={isEncrypted ? 'blur-sm select-none' : ''}>
              {isEncrypted ? "████████" : location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-treasure" />
            <span className={`font-semibold text-treasure ${isEncrypted ? 'blur-sm select-none' : ''}`}>
              {isEncrypted ? "█████" : reward}
            </span>
          </div>

          {timeLeft && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-mystical" />
              <span className="text-mystical font-medium">{timeLeft}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {participants} hunters joined
            </span>
            
            <Button 
              variant={isEncrypted ? "outline" : "default"}
              size="sm"
              className={isEncrypted ? 
                "border-mystical text-mystical hover:bg-mystical/10" : 
                "gradient-treasure text-shadow-deep hover:shadow-lg transition-all"
              }
              disabled={isCompleted}
            >
              {isCompleted ? "Completed" : isEncrypted ? "Decrypt" : "Join Hunt"}
            </Button>
          </div>
        </div>

        {/* Mystical symbols for encrypted cards */}
        {isEncrypted && (
          <>
            <div className="absolute top-2 right-2 text-mystical/30 text-2xl select-none floating">
              ⟐
            </div>
            <div className="absolute bottom-2 left-2 text-mystical-purple/30 text-xl select-none floating" style={{animationDelay: '1s'}}>
              ⟢
            </div>
            <div className="absolute top-1/2 right-6 text-mystical/20 text-lg select-none floating" style={{animationDelay: '2s'}}>
              ⟡
            </div>
          </>
        )}
      </div>
    </Card>
  );
};