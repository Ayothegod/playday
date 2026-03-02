import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-7xl font-bold text-primary mb-4">404</div>
          <div className="text-6xl mb-6">🏀</div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Game Not Found
        </h1>
        <p className="text-foreground/70 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. Maybe it got
          cancelled or moved to a different court.
        </p>

        {/* Actions */}
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/">
            <Button className="gap-2">
              <Home size={18} />
              Back to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="gap-2">
              Find Games
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Fun Message */}
        <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            While you're here, why not browse some available sessions instead?
            There are players waiting for you!
          </p>
        </div>
      </div>
    </main>
  );
}
