import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// protege rutas privadas. ademas obliga a tener perfil: si entraste pero aun no
// lo creaste, te mando al onboarding antes de dejarte usar la app.
export default function ProtectedRoute({ children, requireProfile = true }) {
  const { user, profile, initializing } = useAuthStore();
  const location = useLocation();

  if (initializing) return null;

  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  if (requireProfile && !profile && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
}
