import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Menu, X } from "lucide-react";
import React from "react";

interface TopBarProps {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
  onBackClick?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
  rightAction?: React.ReactNode;
  className?: string;
}

export function TopBar({
  title,
  subtitle,
  onMenuClick,
  onBackClick,
  showBack = false,
  showMenu = false,
  rightAction,
  className = "",
}: TopBarProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border/50",
        className,
      )}
    >
      <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBackClick}
              className="shrink-0"
            >
              <X size={20} />
            </Button>
          )}
          <div className="min-w-0">
            <h1 className="font-bold text-lg md:text-xl text-foreground truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs md:text-sm text-muted-foreground truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-3">
          {rightAction}
          {showMenu && (
            <Button variant="ghost" size="icon" onClick={onMenuClick}>
              <Menu size={20} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
