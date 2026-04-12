import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { BookOpen, Calendar, AlertCircle, Loader, Eye } from "lucide-react";

function Telechargements() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [achats, setAchats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingId, setReadingId] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchAchats = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/client/achats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Erreur chargement des achats");
        const data = await response.json();
        setAchats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAchats();
  }, [token, navigate]);

  const handleRead = (livreId) => {
    setReadingId(livreId);
    window.open(`http://localhost:8080/api/achat/${livreId}/download`, "_blank");
    setReadingId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-500">
          <AlertCircle size={48} />
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (achats.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen size={64} className="mx-auto text-gray-400" />
          <h2 className="text-2xl font-bold mt-4">Aucun achat</h2>
          <p className="text-gray-600 mt-2">Vous n'avez encore acheté aucun livre.</p>
          <button
            onClick={() => navigate("/boutique")}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Découvrir la boutique
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mes livres</h1>
        <p className="text-gray-600 mb-8">Cliquez sur "Lire en ligne" pour consulter votre livre.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achats.map((achat) => (
            <div
              key={achat.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img
                src={achat.livre_image || "/images/default-book.jpg"}
                alt={achat.livre_titre}
                className="w-full h-56 object-cover"
                onError={(e) => (e.target.src = "/images/default-book.jpg")}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {achat.livre_titre}
                </h3>
                <p className="text-sm text-gray-600">{achat.livre_auteur}</p>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Calendar size={12} /> Acheté le {new Date(achat.date_achat).toLocaleDateString("fr-FR")}
                </p>
                <p className="text-xs text-gray-500">Quantité : {achat.quantite}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-bold text-blue-600">{achat.montant.toLocaleString("fr-FR")} FCFA</span>
                  <button
                    onClick={() => handleRead(achat.livre_id)}
                    disabled={readingId === achat.livre_id}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {readingId === achat.livre_id ? (
                      <Loader size={16} className="animate-spin" />
                    ) : (
                      <Eye size={16} />
                    )}
                    Lire en ligne
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Telechargements;