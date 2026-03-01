"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulate auth - in a real app this would call an API
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Mock successful login
      await new Promise((resolve) => setTimeout(resolve, 500));
      localStorage.setItem(
        "user",
        JSON.stringify({ email, name: email.split("@")[0] }),
      );
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🎾</div>
          <h1 className="text-2xl font-bold text-foreground">Playday</h1>
        </div>

        {/* Card */}
        <Card className="bg-card border-border/50 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue playing
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full gap-2">
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-border/30" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border/30" />
          </div>

          {/* Demo Credentials */}
          <div className="p-3 bg-secondary/50 rounded-lg text-sm text-muted-foreground mb-6">
            <p className="font-semibold text-foreground mb-2">
              Demo Credentials:
            </p>
            <p>
              Email:{" "}
              <span className="text-primary font-mono">demo@playday.com</span>
            </p>
            <p>
              Password: <span className="text-primary font-mono">demo123</span>
            </p>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
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
