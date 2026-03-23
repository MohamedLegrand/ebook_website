import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // On initialise depuis localStorage pour que la session survive
  // au rechargement de la page
  const [client, setClient] = useState(() => {
    const stored = localStorage.getItem("client");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  // Appelé après une connexion réussie
  // Reçoit le token JWT et les infos du client depuis l'API
  const login = (tokenValue, clientData) => {
    setToken(tokenValue);
    setClient(clientData);
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("client", JSON.stringify(clientData));
  };

  // Appelé à la déconnexion
  const logout = () => {
    setToken(null);
    setClient(null);
    localStorage.removeItem("token");
    localStorage.removeItem("client");
  };

  // Vérifie si le client est connecté
  const isAuthenticated = !!token && !!client;

  return (
    <AuthContext.Provider value={{ client, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte facilement
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}