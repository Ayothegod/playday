import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { authClient } from "@/shared/lib/auth-client";
import clientEnv from "@/shared/lib/clientEnv";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const handleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: `${clientEnv.VITE_FRONTEND_URL}/dashboard`,
      errorCallbackURL: `${clientEnv.VITE_FRONTEND_URL}/auth/login`,
      newUserCallbackURL: `${clientEnv.VITE_FRONTEND_URL}/welcome`,
    });
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🎾</div>
          <h1 className="text-2xl font-bold text-foreground">Playday</h1>
        </div>

        <Card className="bg-card border-border/50 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Create Account
            </h2>
            <p className="text-muted-foreground">
              Join Playday and start finding games today
            </p>
          </div>

          <Button onClick={handleSignUp} className="space-y-4 cursor-pointer">
            Register with google
          </Button>
          {/* <Button type="submit" disabled={loading} className="w-full gap-2">
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight size={18} />}
            </Button> */}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
