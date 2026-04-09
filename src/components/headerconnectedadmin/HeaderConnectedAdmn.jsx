import React, { useState, useRef, useEffect } from "react";

/**
 * Header pour l'interface administrateur connecté.
 * @param {Object} props
 * @param {string} props.title - Titre de la page (ex: "Dashboard")
 * @param {Function} props.onMenuToggle - Callback appelé lors du clic sur le bouton menu
 * @param {number} props.notificationCount - Nombre de notifications (badge)
 */
const HeaderConnectedAdmin = ({ title = "Dashboard", onMenuToggle, notificationCount = 3 }) => {
  // État pour le dropdown utilisateur
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Récupération des infos utilisateur depuis localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || user.email || "Administrateur";
  const userEmail = user.email || "";

  // Fermeture du dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gestion de la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Partie gauche : bouton menu + titre */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Menu"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>

        {/* Partie droite : notifications + utilisateur + logout */}
        <div className="flex items-center gap-4">
          {/* Icône notification avec badge */}
          <div className="relative">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
              🔔
            </button>
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </div>

          {/* Dropdown utilisateur */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {/* Avatar simple */}
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                {userName}
              </span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Menu déroulant */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>

          {/* Bouton déconnexion simple (optionnel, peut être retiré si dropdown suffit) */}
          <button
            onClick={handleLogout}
            className="hidden md:block px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderConnectedAdmin;