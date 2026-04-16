import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from "recharts";
import { 
  BookOpen, Users, Settings, LayoutDashboard, Trash2, Edit, 
  Plus, LogOut, Bell, Menu, X, CheckCircle, AlertCircle 
} from "lucide-react";

// Sidebar
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { id: "books", label: "Livres", icon: BookOpen },
    { id: "users", label: "Utilisateurs", icon: Users },
    { id: "settings", label: "Paramètres", icon: Settings },
  ];

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside className={`
        fixed top-0 left-0 z-30 h-screen w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-blue-100">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Admin E-Book
            </h1>
            <p className="text-xs text-gray-400 mt-1">Panel de contrôle</p>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-6 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

// Carte statistique
const StatCard = ({ title, value, icon: Icon, color, change }) => (
  <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        {change && (
          <p className={`text-xs mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% depuis mois dernier
          </p>
        )}
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

// Composant principal
const Admin = () => {
  const { token, admin, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0
  });
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({
    siteName: "E-Book Store",
    contactEmail: "contact@ebook.com",
    allowRegistration: true
  });
  
  const [newBook, setNewBook] = useState({ titre: "", auteur: "", prix_fcfa: "", description: "", image: "", type: "", pages: "", stock: "" });
  const [showBookModal, setShowBookModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [salesData, setSalesData] = useState([
    { month: "Jan", ventes: 42 },
    { month: "Fév", ventes: 58 },
    { month: "Mar", ventes: 67 },
    { month: "Avr", ventes: 89 },
    { month: "Mai", ventes: 112 },
    { month: "Juin", ventes: 145 },
  ]);
  
  const [categoryData, setCategoryData] = useState([
    { name: "Romans", value: 35 },
    { name: "Science", value: 25 },
    { name: "Histoire", value: 20 },
    { name: "Jeunesse", value: 20 },
  ]);
  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

  useEffect(() => {
    if (!token || !admin) {
      navigate("/login");
    }
  }, [token, admin, navigate]);

  useEffect(() => {
    if (!token) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Chargement des livres
        const booksRes = await fetch("http://localhost:8080/api/admin/books", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!booksRes.ok) throw new Error("Erreur chargement livres");
        const booksData = await booksRes.json();
        setBooks(booksData);
        setStats(prev => ({ ...prev, totalBooks: booksData.length }));

        // Chargement des clients (utilisateurs) depuis l'API
        const usersRes = await fetch("http://localhost:8080/api/admin/clients", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!usersRes.ok) throw new Error("Erreur chargement utilisateurs");
        const usersData = await usersRes.json();
        setUsers(usersData);
        setStats(prev => ({ ...prev, totalUsers: usersData.length }));

        // Autres données (simulées pour l'instant)
        setStats(prev => ({ ...prev, totalOrders: 342, revenue: 12580 }));
        setNotifications([{ id: 1, message: "Bienvenue sur l'admin", read: false, time: "à l'instant" }]);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les données. Vérifiez votre connexion au backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const handleAddBook = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!newBook.titre) errors.titre = "Titre requis";
    if (!newBook.auteur) errors.auteur = "Auteur requis";
    if (!newBook.prix_fcfa || newBook.prix_fcfa <= 0) errors.prix_fcfa = "Prix invalide";
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/admin/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre: newBook.titre,
          auteur: newBook.auteur,
          description: newBook.description,
          prix_fcfa: parseInt(newBook.prix_fcfa),
          image: newBook.image || "",
          type: newBook.type || "",
          pages: parseInt(newBook.pages) || 0,
          stock: parseInt(newBook.stock) || 0,
        }),
      });
      if (!response.ok) throw new Error("Erreur lors de l'ajout");
      const addedBook = await response.json();
      setBooks([addedBook, ...books]);
      setStats(prev => ({ ...prev, totalBooks: prev.totalBooks + 1 }));
      setShowBookModal(false);
      setNewBook({ titre: "", auteur: "", prix_fcfa: "", description: "", image: "", type: "", pages: "", stock: "" });
      setNotifications([{ id: Date.now(), message: `Livre "${addedBook.titre}" ajouté`, read: false, time: "à l'instant" }, ...notifications]);
    } catch (err) {
      alert("Erreur lors de l'ajout du livre");
    }
  };
  
  const handleDeleteBook = async (id) => {
    if (!window.confirm("Supprimer définitivement ce livre ?")) return;
    try {
      const response = await fetch(`http://localhost:8080/api/admin/books/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Erreur suppression");
      setBooks(books.filter(b => b.id !== id));
      setStats(prev => ({ ...prev, totalBooks: prev.totalBooks - 1 }));
      setNotifications([{ id: Date.now(), message: "Livre supprimé", read: false, time: "à l'instant" }, ...notifications]);
    } catch (err) {
      alert("Erreur lors de la suppression");
    }
  };
  
  // Suppression locale (en attendant l'endpoint backend)
  const handleDeleteUser = async (id) => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      // TODO: appeler DELETE /api/admin/clients/:id quand l'endpoint sera disponible
      setUsers(users.filter(u => u.id !== id));
      setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
      setNotifications([{ id: Date.now(), message: "Utilisateur supprimé (localement)", read: false, time: "à l'instant" }, ...notifications]);
    }
  };
  
  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Réessayer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800 capitalize">
              {activeTab}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => {
                  const dropdown = document.getElementById('notifDropdown');
                  dropdown.classList.toggle('hidden');
                }}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <Bell size={20} />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <div id="notifDropdown" className="hidden absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-50">
                <div className="p-3 border-b font-semibold">Notifications</div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <p className="p-4 text-gray-500 text-center">Aucune notification</p>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}`} onClick={() => markNotificationAsRead(notif.id)}>
                        <p className="text-sm">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            
            {/* Profil admin */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {admin?.full_name?.charAt(0) || 'A'}
              </div>
              <span className="text-sm font-medium hidden sm:block">{admin?.full_name}</span>
            </div>
          </div>
        </div>
      </header>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main content */}
      <main className="pt-20 md:ml-64 p-6">
        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Bonjour, {admin?.full_name} </h1>
              <p className="text-gray-500">Voici les performances de votre plateforme</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard title="Livres" value={stats.totalBooks} icon={BookOpen} color="bg-blue-500" change={12} />
              <StatCard title="Utilisateurs" value={stats.totalUsers} icon={Users} color="bg-green-500" change={8} />
              <StatCard title="Commandes" value={stats.totalOrders} icon={BookOpen} color="bg-purple-500" change={-3} />
              <StatCard title="Chiffre d'affaires" value={`${stats.revenue} €`} icon={Settings} color="bg-orange-500" change={15} />
            </div>
            
            {/* Graphiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h3 className="font-semibold text-gray-700 mb-4">Ventes mensuelles</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ventes" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h3 className="font-semibold text-gray-700 mb-4">Répartition par catégorie</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Derniers livres ajoutés */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-700">Derniers livres ajoutés</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Auteur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix (FCFA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {books.slice(0, 3).map(book => (
                      <tr key={book.id}>
                        <td className="px-6 py-4">{book.titre}</td>
                        <td className="px-6 py-4">{book.auteur}</td>
                        <td className="px-6 py-4">{book.prix_fcfa} FCFA</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* GESTION LIVRES */}
        {activeTab === "books" && (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Gestion des livres</h2>
              <button 
                onClick={() => setShowBookModal(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Plus size={18} /> Ajouter un livre
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Auteur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix (FCFA)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {books.map(book => (
                      <tr key={book.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{book.titre}</td>
                        <td className="px-6 py-4">{book.auteur}</td>
                        <td className="px-6 py-4">{book.prix_fcfa} FCFA</td>
                        <td className="px-6 py-4">{book.stock}</td>
                        <td className="px-6 py-4">{book.type || "-"}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-3">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Edit size={18} />
                            </button>
                            <button onClick={() => handleDeleteBook(book.id)} className="text-red-600 hover:text-red-800">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Modal ajout livre */}
            {showBookModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-fadeInUp">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Ajouter un livre</h3>
                    <button onClick={() => setShowBookModal(false)} className="p-1 rounded-full hover:bg-gray-100">
                      <X size={20} />
                    </button>
                  </div>
                  <form onSubmit={handleAddBook}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Titre *</label>
                        <input 
                          type="text" 
                          value={newBook.titre}
                          onChange={(e) => setNewBook({...newBook, titre: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {formErrors.titre && <p className="text-red-500 text-xs mt-1">{formErrors.titre}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Auteur *</label>
                        <input 
                          type="text" 
                          value={newBook.auteur}
                          onChange={(e) => setNewBook({...newBook, auteur: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {formErrors.auteur && <p className="text-red-500 text-xs mt-1">{formErrors.auteur}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prix (FCFA) *</label>
                        <input 
                          type="number" 
                          step="1"
                          value={newBook.prix_fcfa}
                          onChange={(e) => setNewBook({...newBook, prix_fcfa: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {formErrors.prix_fcfa && <p className="text-red-500 text-xs mt-1">{formErrors.prix_fcfa}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                        <input 
                          type="number" 
                          value={newBook.stock}
                          onChange={(e) => setNewBook({...newBook, stock: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <input 
                          type="text" 
                          value={newBook.type}
                          onChange={(e) => setNewBook({...newBook, type: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image (URL)</label>
                        <input 
                          type="text" 
                          value={newBook.image}
                          onChange={(e) => setNewBook({...newBook, image: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea 
                          rows="3"
                          value={newBook.description}
                          onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Ajouter</button>
                      <button type="button" onClick={() => setShowBookModal(false)} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">Annuler</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* GESTION UTILISATEURS - Version avec appel API réel */}
        {activeTab === "users" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Utilisateurs</h2>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inscrit le</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map(user => (
                      <tr key={user.id}>
                        <td className="px-6 py-4">{user.full_name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                            client
                          </span>
                        </td>
                        <td className="px-6 py-4">{new Date(user.created_at).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-800">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* PARAMÈTRES */}
        {activeTab === "settings" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Paramètres généraux</h2>
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Paramètres sauvegardés (simulation)");
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom du site</label>
                    <input 
                      type="text" 
                      value={settings.siteName}
                      onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email de contact</label>
                    <input 
                      type="email" 
                      value={settings.contactEmail}
                      onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="allowReg" 
                      checked={settings.allowRegistration}
                      onChange={(e) => setSettings({...settings, allowRegistration: e.target.checked})}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="allowReg" className="text-gray-700">Autoriser les nouvelles inscriptions</label>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Sauvegarder
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Admin;