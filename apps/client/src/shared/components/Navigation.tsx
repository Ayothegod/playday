import { Button } from "@/shared/components/ui/button";
import {
  Home,
  LogOut,
  Map,
  MessageSquare,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function AppNavigation() {
  const pathname = useLocation().pathname;
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Friends", href: "/friends", icon: Users },
    { label: "Messages", href: "/messages", icon: MessageSquare },
    { label: "Courts", href: "/courts", icon: Map },
    { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { label: "Achievements", href: "/achievements", icon: Zap },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/dashboard"
            className="shrink-0 font-bold text-lg bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            PLAYDAY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <item.icon size={16} />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-2">
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                Profile
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <LogOut size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setShowMobileMenu(false)}
              >
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start gap-2"
                >
                  <item.icon size={16} />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
