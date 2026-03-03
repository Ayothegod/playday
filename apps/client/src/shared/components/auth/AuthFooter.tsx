import { Link, useLocation } from "react-router-dom";

export default function AuthFooter() {
  const location = useLocation();

  return (
    <p className="text-center text-xs text-muted-foreground mt-6">
      By signing in, you agree to our{" "}
      <Link
        to={`/terms?from=${location.pathname}`}
        className="hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link to={`/privacy/${location.pathname}`} className="hover:text-primary">
        Privacy Policy
      </Link>
    </p>
  );
}
