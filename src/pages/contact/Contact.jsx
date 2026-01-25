import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Smartphone, Globe, Shield, ArrowRight } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "support@ebookpro.fr",
      description: "Réponse sous 2 heures",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "01 23 45 67 89",
      description: "Du lundi au vendredi",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chat en direct",
      details: "Disponible 24/7",
      description: "Sur notre application",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "123 Avenue du Livre",
      description: "75001 Paris, France",
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportHours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 19h00" },
    { day: "Samedi", hours: "10h00 - 18h00" },
    { day: "Dimanche", hours: "Support par email uniquement" }
  ];

  const departments = [
    {
      title: "Support technique",
      description: "Problèmes de téléchargement, compatibilité, application",
      email: "tech@ebookpro.fr"
    },
    {
      title: "Service client",
      description: "Questions sur les commandes, factures, remboursements",
      email: "client@ebookpro.fr"
    },
    {
      title: "Relations éditeurs",
      description: "Partenariats, soumission de manuscrits",
      email: "editeurs@ebookpro.fr"
    },
    {
      title: "Service commercial",
      description: "Solutions entreprises, licences institutionnelles",
      email: "commercial@ebookpro.fr"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section Professionnelle */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white overflow-hidden">
          {/* Fond décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-300 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Texte et informations */}
              <div className="lg:w-1/2">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">Contactez-nous</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    Nous sommes
                    <span className="block text-cyan-200">à votre écoute</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl lg:max-w-none">
                    Notre équipe de support est disponible pour répondre à toutes vos questions 
                    et vous accompagner dans votre expérience eBookPro.
                  </p>
                  
                  {/* Statistiques rapides */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">2h</div>
                      <div className="text-sm text-cyan-100">Réponse moyenne</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">98%</div>
                      <div className="text-sm text-cyan-100">Satisfaction</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">24/7</div>
                      <div className="text-sm text-cyan-100">Support chat</div>
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+33123456789"
                      className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      Appelez-nous
                    </a>
                    <a
                      href="#contact-form"
                      className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer un message
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Professionnelle */}
              <div className="lg:w-1/2">
                <div className="relative mx-auto max-w-lg lg:max-w-full">
                  <div className="relative group">
                    {/* Effet de fond */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                    
                    {/* Image principale */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 transform lg:rotate-1 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/images/contact.jpg" // CORRIGÉ : /src/assets/images/contact.jpg → /images/contact.jpg
                        alt="Support client eBookPro - Équipe à votre écoute"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                        }}
                      />
                      
                      {/* Overlay dégradé */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                      
                      {/* Badge flottant */}
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl transform -rotate-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <MessageSquare className="w-5 h-5" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div>
                            <div className="font-bold">Chat actif</div>
                            <div className="text-xs opacity-90">En ligne maintenant</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Élément décoratif supplémentaire */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-2xl hidden lg:block animate-pulse-slow">
                      <div className="text-center">
                        <div className="text-2xl font-bold">🎯</div>
                        <div className="text-xs font-medium mt-1">Priorité client</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicateurs de support */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Clock className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Réponse rapide</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Shield className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Sécurisé</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".1"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".3"></path>
            </svg>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-16 lg:py-20 -mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1 text-lg">{method.details}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2">
                <div id="contact-form" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl text-white shadow-lg">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Envoyez-nous un message</h2>
                      <p className="text-gray-600 mt-1">Remplissez le formulaire ci-dessous</p>
                    </div>
                  </div>

                  {/* Success Message */}
                  {formStatus.submitted && (
                    <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-fadeIn">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-green-800 text-lg">Message envoyé avec succès !</p>
                          <p className="text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {formStatus.error && (
                    <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <p className="font-bold text-red-800 text-lg">Erreur lors de l'envoi</p>
                          <p className="text-red-700">Veuillez réessayer ou nous contacter par téléphone.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline w-4 h-4 mr-2" />
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline w-4 h-4 mr-2" />
                          Adresse email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="exemple@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Smartphone className="inline w-4 h-4 mr-2" />
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="technical">Support technique</option>
                          <option value="billing">Facturation et paiement</option>
                          <option value="refund">Demande de remboursement</option>
                          <option value="account">Problème de compte</option>
                          <option value="content">Question sur un livre</option>
                          <option value="partnership">Partenariat</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="inline w-4 h-4 mr-2" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                        placeholder="Décrivez-nous votre demande en détail..."
                      />
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        <Shield className="inline w-4 h-4 mr-2 mb-1" />
                        J'accepte que mes données personnelles soient traitées conformément à la{' '}
                        <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                          politique de confidentialité
                        </a>
                        . *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg ${
                        formStatus.submitting ? 'animate-pulse' : ''
                      }`}
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 mt-6 text-center">
                    * Champs obligatoires. Réponse garantie sous 24h.
                  </p>
                </div>
              </div>

              {/* Right Column - Info & Departments */}
              <div className="space-y-8">
                {/* Support Hours */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl text-white shadow-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Horaires d'ouverture</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-300">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Urgence technique :</strong> Disponible 24h/24 via le chat de l'application.
                    </p>
                  </div>
                </div>

                {/* Departments */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white shadow-lg">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Services spécialisés</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-300">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {dept.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                        <a 
                          href={`mailto:${dept.email}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <Mail className="w-4 h-4" />
                          {dept.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Quick Link */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-300 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Questions fréquentes</h3>
                  <p className="text-gray-600 mb-4">
                    Consultez notre FAQ pour des réponses rapides aux questions les plus courantes.
                  </p>
                  <a 
                    href="/faq"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border border-blue-400 text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all hover:shadow-md"
                  >
                    Voir la FAQ complète
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section améliorée */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Notre siège social</h3>
                    <p className="text-gray-600">Venez nous rencontrer à Paris</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  {/* Placeholder pour Google Maps avec effet */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        📍
                      </div>
                    </div>
                    <p className="font-bold text-gray-800 text-lg mb-2">eBookPro Headquarters</p>
                    <p className="text-gray-600 max-w-md">
                      123 Avenue du Livre, 75001 Paris
                      <br />
                      Métro : Louvre-Rivoli (Ligne 1)
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Accès & Transports
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>🚇 Métro : Louvre-Rivoli (L1)</li>
                      <li>🚌 Bus : 21, 27, 39, 67, 68</li>
                      <li>🅿️ Parking : Q-Park Louvre</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Visite & Rendez-vous
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>📅 Sur rendez-vous uniquement</li>
                      <li>👥 Visite guidée disponible</li>
                      <li>💼 Espace meeting</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Entreprises
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>💼 Solutions entreprises</li>
                      <li>🏢 Espace coworking</li>
                      <li>📚 Bibliothèque numérique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Contact;