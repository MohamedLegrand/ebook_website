// src/components/smartheader/SmartHeader.jsx
import { useAuth } from "../../context/AuthContext";
import HeaderConnected from "../headerconnected/HeaderConnected";
import Header from "../header/Header"; // ⚠️ vérifiez que ce chemin existe

function SmartHeader() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <HeaderConnected /> : <Header />;
}

export default SmartHeader;