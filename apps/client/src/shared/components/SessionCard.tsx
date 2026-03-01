import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { SportsIcon } from "./SportIcon";
import { SpotIndicator } from "./SpotIndicator";
import { cn } from "@/shared/lib/utils";
import { MapPin, Clock, Users } from "lucide-react";

export interface SessionData {
  id: string;
  sport:
    | "basketball"
    | "tennis"
    | "football"
    | "volleyball"
    | "badminton"
    | "ping-pong"
    | "soccer";
  title: string;
  location: string;
  date: string;
  time: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  totalSpots: number;
  availableSpots: number;
  attendees: { name: string; image?: string }[];
  organizer: string;
  description?: string;
  status?: "open" | "full" | "cancelled";
}

interface SessionCardProps {
  session: SessionData;
  onClick?: () => void;
  onJoin?: () => void;
  showActions?: boolean;
  compact?: boolean;
}

const skillBadgeColor: Record<string, string> = {
  beginner: "bg-blue-500/20 text-blue-200 border-blue-500/30",
  intermediate: "bg-purple-500/20 text-purple-200 border-purple-500/30",
  advanced: "bg-red-500/20 text-red-200 border-red-500/30",
};

export function SessionCard({
  session,
  onClick,
  onJoin,
  showActions = true,
  compact = false,
}: SessionCardProps) {
  const status = session.availableSpots === 0 ? "full" : "open";

  if (compact) {
    return (
      <Card
        className="bg-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
        onClick={onClick}
      >
        <div className="p-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-1">
              <SportsIcon sport={session.sport} size="md" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-foreground truncate">
                  {session.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {session.location}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-xs shrink-0",
                status === "full"
                  ? "border-destructive/50 text-destructive"
                  : "border-success/50 text-success",
              )}
            >
              {status === "full" ? "Full" : `${session.availableSpots} spots`}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock size={14} />
              <span>{session.time}</span>
            </div>
            <SpotIndicator
              available={session.availableSpots}
              total={session.totalSpots}
              showLabel={false}
            />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="bg-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="mt-1">
              <SportsIcon sport={session.sport} size="lg" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-foreground mb-1">
                {session.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={skillBadgeColor[session.skillLevel]}
                >
                  {session.skillLevel.charAt(0).toUpperCase() +
                    session.skillLevel.slice(1)}
                </Badge>
                {session.status === "cancelled" && (
                  <Badge variant="destructive" className="text-xs">
                    Cancelled
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Badge
            className={cn(
              "text-xs font-semibold shrink-0",
              status === "full"
                ? "bg-destructive/10 text-destructive border border-destructive/30"
                : "bg-success/10 text-success border border-success/30",
            )}
          >
            {status === "full"
              ? "FULL"
              : `${session.availableSpots}/${session.totalSpots} spots`}
          </Badge>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary/60" />
            <span>{session.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-primary/60" />
            <span>
              {session.date} at {session.time}
            </span>
          </div>
        </div>

        {/* Spot Indicator */}
        <div className="mb-4">
          <SpotIndicator
            available={session.availableSpots}
            total={session.totalSpots}
          />
        </div>

        {/* Description */}
        {session.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {session.description}
          </p>
        )}

        {/* Attendees Preview */}
        <div className="flex items-center gap-2 mb-4">
          <Users size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {session.attendees.length} going • Organized by {session.organizer}
          </span>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
            >
              View Details
            </Button>
            {session.availableSpots > 0 && (
              <Button
                size="sm"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onJoin?.();
                }}
              >
                Join
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
