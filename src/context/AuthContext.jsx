// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Initialisation depuis localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || null;
  });

  // Connexion : stocke token, données utilisateur et rôle
  const login = (tokenValue, userData, userRole) => {
    setToken(tokenValue);
    setUser(userData);
    setRole(userRole);
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", userRole);
  };

  // Déconnexion
  const logout = () => {
    setToken(null);
    setUser(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  const isAuthenticated = !!token && !!user;

  // Compatibilité : si l'utilisateur est client, on expose `client`
  // Sinon, `client` vaut null. De même pour `admin`.
  const client = role === "client" ? user : null;
  const admin = role === "admin" ? user : null;

  return (
    <AuthContext.Provider value={{
      user,      // données génériques (client ou admin)
      client,    // non null si rôle = client
      admin,     // non null si rôle = admin
      token,
      role,
      login,
      logout,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}