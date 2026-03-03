import React from "react";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
  className?: string;
  variant?: "default" | "secondary";
}

export function FloatingActionButton({
  icon,
  label,
  onClick,
  className = "",
  variant = "default",
}: FloatingActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        "rounded-full fixed bottom-6 right-6 md:bottom-8 md:right-8 shadow-lg hover:shadow-xl transition-shadow",
        variant === "default" &&
          "bg-primary hover:bg-primary/90 text-primary-foreground",
        variant === "secondary" &&
          "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        {label && (
          <span className="hidden sm:inline text-sm font-semibold">
            {label}
          </span>
        )}
      </div>
    </Button>
  );
}
