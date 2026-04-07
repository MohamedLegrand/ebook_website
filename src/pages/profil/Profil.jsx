import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  User, Mail, Package, Clock, ChevronRight, Shield, LogOut
} from "lucide-react";

function Profil() {
  const { client, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Navigation
  const goToOrders = () => navigate("/mes-commandes");
  const goToDownloads = () => navigate("/mes-telechargements");
  const handleLogout = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
      // Appeler la fonction logout du contexte si disponible, sinon navigation simple
      // Exemple : localStorage.removeItem("token"); 
      navigate("/login");
    }
  };

  // Générer les initiales pour l'avatar par défaut
  const getInitials = () => {
    const name = client?.full_name || "U";
    return name.charAt(0).toUpperCase();
  };

  // État de chargement
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Utilisateur non trouvé. Veuillez vous reconnecter.</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Bandeau de bienvenue */}
      

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Carte principale du profil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* En-tête avec avatar et nom */}
          <div className="relative bg-gradient-to-r from-blue-50 to-white px-6 pt-8 pb-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  {client.avatar ? (
                    <img
                      src={client.avatar}
                      alt="Photo de profil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                      {getInitials()}
                    </div>
                  )}
                </div>
              </div>

              {/* Infos utilisateur */}
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-gray-800">{client.full_name || "Nom non défini"}</h2>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-gray-500">
                  <Mail className="w-4 h-4" />
                  <span>{client.email}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    <Shield className="w-3 h-3" /> Compte actif
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Détails du compte */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <User className="w-4 h-4" /> Informations personnelles
                </h3>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Nom complet</p>
                    <p className="text-gray-800 font-medium">{client.full_name || "—"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Adresse email</p>
                    <p className="text-gray-800 font-medium">{client.email}</p>
                    <p className="text-xs text-gray-400 mt-1">Identifiant de connexion (non modifiable)</p>
                  </div>
                </div>
              </div>

              {/* Activité récente (exemple) */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Activité
                </h3>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Membre depuis</p>
                    <p className="text-gray-800 font-medium">
                      {client.created_at
                        ? new Date(client.created_at).toLocaleDateString("fr-FR")
                        : "Non disponible"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Dernière connexion</p>
                    <p className="text-gray-800 font-medium">
                      {client.last_login
                        ? new Date(client.last_login).toLocaleDateString("fr-FR")
                        : "Aujourd'hui"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="flex gap-3">
                <button
                  onClick={goToOrders}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <Package className="w-4 h-4" />
                  Mes commandes
                </button>
                <button
                  onClick={goToDownloads}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  Mes téléchargements
                </button>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                Se déconnecter
              </button>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires (optionnel) */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Besoin d’aide ? Contactez notre <button className="text-blue-600 hover:underline">support</button>
        </div>
      </div>
    </div>
  );
}

export default Profil;