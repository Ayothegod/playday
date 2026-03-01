type Sport =
  | "basketball"
  | "tennis"
  | "football"
  | "volleyball"
  | "badminton"
  | "ping-pong"
  | "soccer";

const sportIcons: Record<Sport, string> = {
  basketball: "🏀",
  tennis: "🎾",
  football: "🏈",
  volleyball: "🏐",
  badminton: "🏸",
  "ping-pong": "🏓",
  soccer: "⚽",
};

interface SportsIconProps {
  sport: Sport;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SportsIcon({
  sport,
  size = "md",
  className = "",
}: SportsIconProps) {
  const sizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <span
      className={`${sizeMap[size]} ${className}`}
      role="img"
      aria-label={sport}
    >
      {sportIcons[sport]}
    </span>
  );
}
