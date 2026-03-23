import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Ce composant enveloppe les routes qui nécessitent d'être connecté
// Si le client n'est pas connecté, il est redirigé vers /login
// Si le client est connecté, la page demandée s'affiche normalement
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;