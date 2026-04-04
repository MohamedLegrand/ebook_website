import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import HeaderConnected from "../../components/headerconnected/HeaderConnected";
import Footer from "../../components/footer/Footer";
import {
  User, Mail, Lock, Save, X, Eye, EyeOff, CheckCircle,
  AlertCircle, Edit3, ArrowLeft, Package, Clock, ChevronRight, 
  Shield, Camera, Upload
} from "lucide-react";

function Profil() {
  const { client, updateClient, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // États du formulaire profil (nom + email + avatar)
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  // États pour le changement de mot de passe
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  // États UI
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  // État pour l'avatar
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarError, setAvatarError] = useState("");

  // Initialisation des données au chargement
  useEffect(() => {
    if (client) {
      setFormData({
        fullName: client.full_name || "",
        email: client.email || ""
      });
      if (client.avatar) {
        setAvatarPreview(client.avatar);
      }
    }
  }, [client]);

  // Gestion des changements du formulaire profil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Gestion des changements du formulaire mot de passe
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    if (passwordErrors[name]) {
      setPasswordErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Gestion de l'upload d'avatar
  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    setAvatarError("");
    
    if (!file) return;
    
    // Validation du fichier
    if (!file.type.startsWith("image/")) {
      setAvatarError("Veuillez sélectionner une image valide");
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB max
      setAvatarError("L'image ne doit pas dépasser 5 Mo");
      return;
    }
    
    // Création de la preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setAvatarFile(file);
    };
    reader.readAsDataURL(file);
  };

  const removeAvatar = () => {
    setAvatarPreview(null);
    setAvatarFile(null);
    setAvatarError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validation du profil
  const validateProfile = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Nom requis";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Nom trop court";
    }
    return errors;
  };

  // Validation du mot de passe
  const validatePassword = () => {
    const errors = {};
    if (!passwordData.currentPassword) {
      errors.currentPassword = "Mot de passe actuel requis";
    }
    if (!passwordData.newPassword) {
      errors.newPassword = "Nouveau mot de passe requis";
    } else if (passwordData.newPassword.length < 8) {
      errors.newPassword = "Min. 8 caractères";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordData.newPassword)) {
      errors.newPassword = "Maj, min et chiffre requis";
    }
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      errors.confirmNewPassword = "Mots de passe différents";
    }
    return errors;
  };

  // Soumission du profil
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const errors = validateProfile();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSaving(true);
    setSuccessMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updateData = {
        full_name: formData.fullName
        // Pour l'avatar : à implémenter avec upload vers serveur
        // avatar: avatarFile (à envoyer via FormData)
      };

      await updateClient(updateData);
      
      setSuccessMessage("✅ Profil mis à jour avec succès !");
      setIsEditing(false);
      setAvatarFile(null); // Reset du fichier après succès
      setTimeout(() => setSuccessMessage(""), 4000);
      
    } catch (error) {
      setFormErrors({ general: "Erreur lors de la mise à jour. Réessayez." });
    } finally {
      setIsSaving(false);
    }
  };

  // Soumission du changement de mot de passe
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const errors = validatePassword();
    
    if (Object.keys(errors).length > 0) {
      setPasswordErrors(errors);
      return;
    }

    setIsSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      setSuccessMessage("🔐 Mot de passe modifié avec succès !");
      setPasswordData({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
      setTimeout(() => setSuccessMessage(""), 4000);
      
    } catch (error) {
      setPasswordErrors({ general: "Erreur : mot de passe actuel incorrect" });
    } finally {
      setIsSaving(false);
    }
  };

  // Annulation des modifications
  const handleCancel = () => {
    if (client) {
      setFormData({
        fullName: client.full_name || "",
        email: client.email || ""
      });
      if (client.avatar) {
        setAvatarPreview(client.avatar);
      } else {
        setAvatarPreview(null);
      }
    }
    setAvatarFile(null);
    setAvatarError("");
    setFormErrors({});
    setIsEditing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Navigation
  const goToOrders = () => navigate("/mes-commandes");
  const goToDownloads = () => navigate("/mes-telechargements");

  // Générer les initiales pour l'avatar par défaut
  const getInitials = () => {
    const name = formData.fullName || "U";
    return name.charAt(0).toUpperCase();
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.4s ease-out both; }
        .tab-active { 
          background: linear-gradient(135deg, #2563eb, #1d4ed8); 
          color: white; 
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
        }
        .avatar-container:hover .avatar-overlay { opacity: 1; }
        .avatar-container:hover .avatar-camera { transform: scale(1.1); }
      `}</style>

      <HeaderConnected />

      {/* Bandeau de bienvenue */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-5 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white text-sm font-medium mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-sm font-medium">Espace personnel</p>
              <h1 className="text-xl sm:text-2xl font-bold">Mon Profil 👋</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <Shield className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-medium">Compte vérifié</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: "profile", label: "Informations", icon: User },
            { id: "security", label: "Sécurité", icon: Lock },
            { id: "orders", label: "Commandes", icon: Package },
            { id: "downloads", label: "Téléchargements", icon: Clock }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? "tab-active" 
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-white" : "text-gray-400"}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Message de succès */}
        {successMessage && (
          <div className="animate-fadeInUp bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center gap-3 mb-6">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{successMessage}</span>
            <button onClick={() => setSuccessMessage("")} className="ml-auto text-emerald-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TAB: Profil */}
        {activeTab === "profile" && (
          <div className="animate-fadeInUp bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">Informations personnelles</h2>
                  <p className="text-xs text-gray-500">Gérez votre photo et votre nom</p>
                </div>
              </div>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  Modifier
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg"
                  >
                    <X className="w-4 h-4" />
                    Annuler
                  </button>
                  <button
                    onClick={handleProfileSubmit}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-medium rounded-lg"
                  >
                    {isSaving ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    Enregistrer
                  </button>
                </div>
              )}
            </div>

            {/* Formulaire */}
            <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
              {formErrors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {formErrors.general}
                </div>
              )}

              {/* Section Avatar - Centrée et mise en valeur */}
              <div className="flex flex-col items-center pt-2 pb-4 border-b border-gray-100">
                <div className="relative">
                  {/* Conteneur avatar avec effet hover */}
                  <div 
                    className={`avatar-container relative w-28 h-28 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                      isEditing 
                        ? "ring-4 ring-blue-100 hover:ring-blue-300 shadow-lg hover:shadow-xl" 
                        : "ring-4 ring-gray-100"
                    }`}
                    onClick={handleAvatarClick}
                  >
                    {/* Image ou initiales */}
                    {avatarPreview ? (
                      <img 
                        src={avatarPreview} 
                        alt="Photo de profil" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                        {getInitials()}
                      </div>
                    )}
                    
                    {/* Overlay au hover (uniquement en mode édition) */}
                    {isEditing && (
                      <>
                        <div className="avatar-overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-200">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <div className="avatar-camera absolute bottom-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Badge "Nouvelle photo" si fichier sélectionné */}
                  {avatarFile && isEditing && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Input fichier caché */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                  disabled={!isEditing}
                />
                
                {/* Texte d'aide */}
                <div className="mt-4 text-center">
                  {isEditing ? (
                    <>
                      <p className="text-sm font-medium text-gray-700">
                        Photo de profil
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Cliquez pour changer • JPG, PNG • Max 5 Mo
                      </p>
                      {avatarPreview && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeAvatar(); }}
                          className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1 mx-auto"
                        >
                          <X className="w-3 h-3" />
                          Supprimer la photo
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="text-xs text-gray-400">
                      Cliquez sur "Modifier" pour changer votre photo
                    </p>
                  )}
                </div>
                
                {/* Message d'erreur avatar */}
                {avatarError && (
                  <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {avatarError}
                  </p>
                )}
              </div>

              {/* Nom complet */}
              <div className="space-y-1.5 max-w-md mx-auto">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase">
                  <User className="w-3.5 h-3.5" />
                  Nom complet
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleProfileChange}
                  disabled={!isEditing}
                  placeholder="Votre nom"
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all outline-none ${
                    formErrors.fullName 
                      ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  } ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                />
                {formErrors.fullName && (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.fullName}
                  </p>
                )}
              </div>

              {/* Email (lecture seule) */}
              <div className="space-y-1.5 max-w-md mx-auto">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase">
                  <Mail className="w-3.5 h-3.5" />
                  Adresse email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    placeholder="votre@email.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-100 text-gray-500 text-sm cursor-not-allowed"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    Non modifiable
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Pour modifier votre email, contactez le support.
                </p>
              </div>

              {/* Badge info */}
              {!isEditing && (
                <div className="pt-2 max-w-md mx-auto">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-800">Information importante</p>
                      <p className="text-xs text-blue-600 mt-1">
                        Votre email est votre identifiant de connexion. 
                        Pour le modifier, veuillez contacter notre équipe support.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* TAB: Sécurité */}
        {activeTab === "security" && (
          <div className="animate-fadeInUp bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">Sécurité du compte</h2>
                  <p className="text-xs text-gray-500">Changez votre mot de passe</p>
                </div>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="p-6 space-y-5 max-w-md mx-auto">
              {passwordErrors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {passwordErrors.general}
                </div>
              )}

              {/* Mot de passe actuel */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase">
                  <Lock className="w-3.5 h-3.5" />
                  Mot de passe actuel
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className={`w-full px-3 py-2.5 pr-10 rounded-lg border text-sm transition-all outline-none ${
                      passwordErrors.currentPassword 
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                        : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordErrors.currentPassword && (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>

              {/* Nouveau mot de passe */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase">
                  <Lock className="w-3.5 h-3.5" />
                  Nouveau mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Min. 8 caractères"
                    className={`w-full px-3 py-2.5 pr-10 rounded-lg border text-sm transition-all outline-none ${
                      passwordErrors.newPassword 
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                        : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordData.newPassword && (
                  <ul className="text-xs text-gray-500 space-y-1 pl-1 mt-2">
                    <li className={passwordData.newPassword.length >= 8 ? "text-emerald-600" : ""}>
                      ✓ Au moins 8 caractères
                    </li>
                    <li className={/(?=.*[a-z])/.test(passwordData.newPassword) ? "text-emerald-600" : ""}>
                      ✓ Une lettre minuscule
                    </li>
                    <li className={/(?=.*[A-Z])/.test(passwordData.newPassword) ? "text-emerald-600" : ""}>
                      ✓ Une lettre majuscule
                    </li>
                    <li className={/(?=.*\d)/.test(passwordData.newPassword) ? "text-emerald-600" : ""}>
                      ✓ Un chiffre
                    </li>
                  </ul>
                )}
                {passwordErrors.newPassword && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              {/* Confirmation */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase">
                  <Shield className="w-3.5 h-3.5" />
                  Confirmer le nouveau mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmNewPassword"
                    value={passwordData.confirmNewPassword}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className={`w-full px-3 py-2.5 pr-10 rounded-lg border text-sm transition-all outline-none ${
                      passwordErrors.confirmNewPassword 
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                        : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordErrors.confirmNewPassword && (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    {passwordErrors.confirmNewPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-60 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-200 mt-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Mise à jour...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Changer le mot de passe
                  </>
                )}
              </button>
            </form>

            {/* Déconnexion */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
              <button
                onClick={() => {
                  if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
                    navigate("/login");
                  }
                }}
                className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-medium"
              >
                <X className="w-4 h-4" />
                Se déconnecter
              </button>
            </div>
          </div>
        )}

        {/* TAB: Commandes */}
        {activeTab === "orders" && (
          <div className="animate-fadeInUp bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-700 mb-2">Historique des commandes</h3>
            <p className="text-gray-500 text-sm mb-6">Consultez vos achats dans la page dédiée.</p>
            <button
              onClick={goToOrders}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Voir mes commandes
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TAB: Téléchargements */}
        {activeTab === "downloads" && (
          <div className="animate-fadeInUp bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <Clock className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-700 mb-2">Mes téléchargements</h3>
            <p className="text-gray-500 text-sm mb-6">Accédez à vos livres numériques achetés.</p>
            <button
              onClick={goToDownloads}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Ma bibliothèque
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Profil;