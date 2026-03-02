import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { authClient } from "@/shared/lib/auth-client";
import clientEnv from "@/shared/lib/clientEnv";
import { ArrowRight } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [socialError, setSocialError] = useQueryState("error");
  const [loading, setLoading] = useState(false);

  if (socialError) {
    toast.error("Google sign-in failed.");
    // setSocialError(null, { history: "replace" });
  }

  const handleSignIn = async () => {
    setLoading(!loading);
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
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue playing
            </p>
          </div>

          <Button
            onClick={handleSignIn}
            className="space-y-4 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In With Google"}
            {!loading && <ArrowRight size={18} />}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primary font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
