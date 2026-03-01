import { cn } from "@/shared/lib/utils";

interface SpotIndicatorProps {
  available: number;
  total: number;
  className?: string;
  showLabel?: boolean;
}

export function SpotIndicator({
  available,
  total,
  className = "",
  showLabel = true,
}: SpotIndicatorProps) {
  const percentage = (available / total) * 100;
  const isFull = available === 0;
  const isAlmostFull = available <= 2;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={cn("h-full transition-all", {
            "bg-success": !isAlmostFull && !isFull,
            "bg-warning": isAlmostFull && !isFull,
            "bg-destructive": isFull,
          })}
          style={{ width: `${100 - percentage}%` }}
          role="progressbar"
          aria-valuenow={total - available}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-muted-foreground">
          {available} of {total} spots available
        </span>
      )}
    </div>
  );
}
