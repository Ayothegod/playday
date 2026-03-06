// import { useAuth } from "@/shared/hooks/useAuthContext";
import { authClient } from "@/shared/lib/auth-client";
import Loading from "./loading";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: session,
    isPending,
    error,
    // refetch,
  } = authClient.useSession();
  // console.log({ session });

  if (isPending) return <Loading />;

  if (error) return <Navigate to="/auth/login" replace />;

  if (!session) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
}
