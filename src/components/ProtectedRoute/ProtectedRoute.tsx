import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
export default function ProtectedRoute({ children }: { children: React.ReactNode }) { const { user, loading } = useAppSelector((state) => state.auth); if (loading) return <div className="flex min-h-screen items-center justify-center text-muted-foreground">Loading...</div>; if (!user) return <Navigate to="/auth" replace />; return <>{children}</>; }
