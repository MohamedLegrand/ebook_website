import React, { useState, useEffect } from "react";
import HeaderConnectedAdmin from "../../components/headerconnectedadmin/HeaderConnectedAdmn";

// Composant Sidebar (menu de navigation)
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen }) => {
  const menuItems = [
    { id: "dashboard", label: "Tableau de bord", icon: "📊" },
    { id: "books", label: "Livres", icon: "📚" },
    { id: "users", label: "Utilisateurs", icon: "👥" },
    { id: "settings", label: "Paramètres", icon: "⚙️" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-gray-800 text-white md:translate-x-0`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center p-2 rounded-lg w-full text-left ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

// Composant principal Admin
const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notificationCount, setNotificationCount] = useState(3);

  // Données simulées pour les livres
  const [books, setBooks] = useState([
    { id: 1, title: "React Moderne", author: "Jean Dupont", price: 29.99, status: "publié" },
    { id: 2, title: "Node.js Avancé", author: "Marie Curie", price: 34.99, status: "brouillon" },
    { id: 3, title: "CSS Mastery", author: "John Doe", price: 24.99, status: "publié" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });

  // Données simulées pour les utilisateurs
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Martin", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob Durand", email: "bob@example.com", role: "user" },
    { id: 3, name: "Charlie Ngoumou", email: "charlie@example.com", role: "user" },
  ]);

  // Formulaire paramètres
  const [settings, setSettings] = useState({
    siteName: "Ebook Admin",
    contactEmail: "admin@example.com",
    allowRegistration: true,
  });

  // Statistiques dashboard
  const stats = {
    totalBooks: books.length,
    publishedBooks: books.filter((b) => b.status === "publié").length,
    totalUsers: users.length,
    admins: users.filter((u) => u.role === "admin").length,
  };

  // Gestion livre : ajout
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.price) {
      const newId = books.length + 1;
      setBooks([
        ...books,
        {
          id: newId,
          title: newBook.title,
          author: newBook.author,
          price: parseFloat(newBook.price),
          status: "brouillon",
        },
      ]);
      setNewBook({ title: "", author: "", price: "" });
      // Simuler une notification
      setNotificationCount((prev) => prev + 1);
    }
  };

  const handleDeleteBook = (id) => {
    if (window.confirm("Supprimer ce livre ?")) {
      setBooks(books.filter((book) => book.id !== id));
      setNotificationCount((prev) => prev + 1);
    }
  };

  // Gestion utilisateur : suppression
  const handleDeleteUser = (id) => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Graphique simple (courbe SVG) pour le dashboard
  const Chart = () => (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-gray-700 mb-2">Ventes mensuelles (simulées)</h3>
      <svg width="100%" height="150" viewBox="0 0 300 100" preserveAspectRatio="none">
        <polyline
          points="0,80 30,60 60,70 90,40 120,50 150,30 180,45 210,20 240,35 270,25 300,10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <circle cx="0" cy="80" r="2" fill="#3b82f6" />
        <circle cx="30" cy="60" r="2" fill="#3b82f6" />
        <circle cx="60" cy="70" r="2" fill="#3b82f6" />
        <circle cx="90" cy="40" r="2" fill="#3b82f6" />
        <circle cx="120" cy="50" r="2" fill="#3b82f6" />
        <circle cx="150" cy="30" r="2" fill="#3b82f6" />
        <circle cx="180" cy="45" r="2" fill="#3b82f6" />
        <circle cx="210" cy="20" r="2" fill="#3b82f6" />
        <circle cx="240" cy="35" r="2" fill="#3b82f6" />
        <circle cx="270" cy="25" r="2" fill="#3b82f6" />
        <circle cx="300" cy="10" r="2" fill="#3b82f6" />
      </svg>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header avec gestion de la sidebar et notifications */}
      <HeaderConnectedAdmin
        title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        notificationCount={notificationCount}
      />

      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} />

      {/* Overlay pour mobile quand sidebar ouverte */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Contenu principal */}
      <div className="p-4 md:ml-64 pt-20">
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
                <p className="text-gray-500">Total livres</p>
                <p className="text-3xl font-bold">{stats.totalBooks}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
                <p className="text-gray-500">Livres publiés</p>
                <p className="text-3xl font-bold">{stats.publishedBooks}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
                <p className="text-gray-500">Utilisateurs</p>
                <p className="text-3xl font-bold">{stats.totalUsers}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
                <p className="text-gray-500">Administrateurs</p>
                <p className="text-3xl font-bold">{stats.admins}</p>
              </div>
            </div>
            <Chart />
          </div>
        )}

        {/* Gestion des livres */}
        {activeTab === "books" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestion des livres</h2>

            {/* Formulaire d'ajout */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">Ajouter un nouveau livre</h3>
              <form onSubmit={handleAddBook} className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Auteur"
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Prix (€)"
                  value={newBook.price}
                  onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </form>
            </div>

            {/* Liste des livres */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Auteur</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {books.map((book) => (
                    <tr key={book.id}>
                      <td className="px-6 py-4">{book.title}</td>
                      <td className="px-6 py-4">{book.author}</td>
                      <td className="px-6 py-4">{book.price} €</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            book.status === "publié"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {book.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteBook(book.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gestion des utilisateurs */}
        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Utilisateurs</h2>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.role === "admin"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Paramètres */}
        {activeTab === "settings" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Paramètres généraux</h2>
            <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Paramètres sauvegardés (simulation)");
                  setNotificationCount((prev) => prev + 1);
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Nom du site</label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email de contact</label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="allowRegistration"
                    checked={settings.allowRegistration}
                    onChange={(e) => setSettings({ ...settings, allowRegistration: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <label htmlFor="allowRegistration" className="text-gray-700">
                    Autoriser les nouvelles inscriptions
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;