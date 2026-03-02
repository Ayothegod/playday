export default function Loading() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <span className="text-4xl animate-bounce">🎾</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Playday</h1>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          {/* Skeleton Card 1 */}
          <div className="bg-card border border-border/30 rounded-xl p-6 animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4" />
            <div className="h-3 bg-muted rounded w-full mb-2" />
            <div className="h-3 bg-muted rounded w-5/6" />
          </div>

          {/* Skeleton Card 2 */}
          <div className="bg-card border border-border/30 rounded-xl p-6 animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4" />
            <div className="h-3 bg-muted rounded w-full mb-2" />
            <div className="h-3 bg-muted rounded w-5/6" />
          </div>

          {/* Skeleton Card 3 */}
          <div className="bg-card border border-border/30 rounded-xl p-6 animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4" />
            <div className="h-3 bg-muted rounded w-full mb-2" />
            <div className="h-3 bg-muted rounded w-5/6" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Finding your next game...
        </p>
      </div>
    </main>
  );
}
