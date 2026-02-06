import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Smartphone, Heart, Shield, ArrowRight, Cross, AlertTriangle } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    situation: "",
    demande: "",
    urgence: false,
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
        situation: "",
        demande: "",
        urgence: false,
        consent: false
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "(+237) 693 21 54 31",
      description: "Disponible aux heures d'ouverture",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone alternatif",
      details: "(+237) 677 31 44 12",
      description: "Ligne secondaire",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@mths-abili.org",
      description: "Réponse sous 48h",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      details: "Abili, Ngoumou",
      description: "27 km de Yaoundé",
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportHours = [
    { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
    { day: "Samedi", hours: "9h00 - 15h00" },
    { day: "Dimanche", hours: "Sur rendez-vous uniquement" }
  ];

  const services = [
    {
      title: "Accueil et Orientation",
      description: "Premier contact, écoute, discernement spirituel",
      icon: "🤝"
    },
    {
      title: "Accompagnement Thérapeutique",
      description: "Parcours de guérison spirituelle en 6 étapes",
      icon: "🛤️"
    },
    {
      title: "Rite SO'O & Délivrance",
      description: "Rituels de purification et désenvoûtement",
      icon: "✝️"
    },
    {
      title: "Boutique du Centre",
      description: "Livres, RTA, produits naturels certifiés",
      icon: "📚"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 text-white overflow-hidden">
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
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">Centre MTHS</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    Contactez-nous
                    <span className="block text-cyan-200">pour un accompagnement</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl lg:max-w-none">
                    Notre équipe du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est disponible 
                    pour vous accueillir, vous écouter et vous orienter sur le chemin de la guérison spirituelle.
                  </p>

                  <p className="text-base text-blue-200 mb-8 italic">
                    « Vous n'êtes pas seul face à ce que vous vivez. »
                  </p>
                  
                  {/* Statistiques rapides */}
                  <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">1979</div>
                      <div className="text-sm text-cyan-100">Année de fondation</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">45+</div>
                      <div className="text-sm text-cyan-100">Ans d'expérience</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-cyan-100">Confidentialité</div>
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="tel:+237693215431"
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
                      Demander une orientation
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative mx-auto max-w-lg lg:max-w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 transform lg:rotate-1 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/images/contact-mths.jpg"
                        alt="Centre MARIE REINE DE LA MISÉRICORDE D'ABILI"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                        }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl transform -rotate-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <Heart className="w-5 h-5" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div>
                            <div className="font-bold">Accueil ouvert</div>
                            <div className="text-xs opacity-90">Dignité & respect</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-2xl hidden lg:block">
                      <div className="text-center">
                        <Cross className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs font-medium">Depuis 1979</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Shield className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Confidentialité</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Heart className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Sans jugement</div>
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

            {/* Message pastoral */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Notre engagement</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    « Tout ce que vous partagez est accueilli avec <strong>confidentialité, respect et absence totale de jugement</strong>. 
                    Au Centre, nous ne voyons pas seulement un trouble ou un problème à résoudre ; nous voyons une âme qui cherche 
                    la lumière et la réconciliation, et nous nous engageons à marcher à vos côtés sur ce chemin. »
                  </p>
                  <p className="text-blue-700 font-medium">
                    — Centre MARIE REINE DE LA MISÉRICORDE D'ABILI
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2">
                <div id="contact-form" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl text-white shadow-lg">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Formulaire d'orientation</h2>
                      <p className="text-gray-600 mt-1">Demandez un accompagnement spirituel</p>
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
                          <p className="font-bold text-green-800 text-lg">Demande envoyée avec succès !</p>
                          <p className="text-green-700">Notre équipe vous contactera dans les plus brefs délais. Que Dieu vous bénisse.</p>
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
                          Adresse email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="exemple@email.com (optionnel)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Smartphone className="inline w-4 h-4 mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="+237 6XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Décrivez votre situation *
                      </label>
                      <textarea
                        name="situation"
                        value={formData.situation}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                        placeholder="Parlez-nous de vos épreuves, vos souffrances invisibles, vos cauchemars, blocages spirituels..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="inline w-4 h-4 mr-2" />
                        Type de demande *
                      </label>
                      <select
                        name="demande"
                        value={formData.demande}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Sélectionnez le type de demande</option>
                        <option value="orientation">Demander une orientation spirituelle</option>
                        <option value="rendez-vous">Prendre rendez-vous</option>
                        <option value="delivrance">Délivrance et désenvoûtement</option>
                        <option value="rite-soo">Rite SO'O et purification</option>
                        <option value="accompagnement">Parcours d'accompagnement complet</option>
                        <option value="boutique">Questions sur la boutique</option>
                        <option value="temoignage">Partager un témoignage</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                      <input
                        type="checkbox"
                        id="urgence"
                        name="urgence"
                        checked={formData.urgence}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5"
                      />
                      <label htmlFor="urgence" className="text-sm text-gray-700">
                        <AlertTriangle className="inline w-4 h-4 mr-2 mb-1 text-red-600" />
                        <strong>Urgence spirituelle :</strong> Cochez cette case si vous êtes dans une situation d'oppression invisible critique 
                        ou de perturbations spirituelles graves nécessitant une attention immédiate.
                      </label>
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
                        J'accepte que mes données personnelles soient traitées dans le respect de la confidentialité et de la 
                        charte éthique du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg ${
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
                          Envoyer ma demande
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 mt-6 text-center">
                    * Champs obligatoires. Votre demande sera traitée avec confidentialité et bienveillance.
                  </p>
                </div>
              </div>

              {/* Right Column - Info & Services */}
              <div className="space-y-8">
                {/* Support Hours */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl text-white shadow-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Horaires d'accueil</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-300">
                    <p className="text-sm text-blue-800">
                      <strong>⚠️ Urgences spirituelles :</strong> Pour les cas critiques, utilisez l'option "Urgence" dans le formulaire.
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white shadow-lg">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Nos services</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-300">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="text-2xl">{service.icon}</span>
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adresse postale */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl text-white shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Adresse postale</h3>
                  </div>
                  
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">
                      <strong>Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</strong>
                    </p>
                    <p>Village Abili, Préfecture du Ngoumou</p>
                    <p>27 km de Yaoundé</p>
                    <p>BP : 12561 Yaoundé, Cameroun</p>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Récépissé :</strong> N°030/RDA/J12/SAAJP du 14 Décembre 2010
                    </p>
                  </div>
                </div>

                {/* FAQ Quick Link */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-300 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Questions fréquentes</h3>
                  <p className="text-gray-600 mb-4">
                    Consultez notre FAQ pour des réponses sur la MTHS, le parcours d'accompagnement et le rite SO'O.
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

            {/* Map Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Localisation du Centre</h3>
                    <p className="text-gray-600">Village Abili, à 27 km de Yaoundé</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        📍
                      </div>
                    </div>
                    <p className="font-bold text-gray-800 text-lg mb-2">Centre MARIE REINE DE LA MISÉRICORDE</p>
                    <p className="text-gray-600 max-w-md">
                      Village Abili, Préfecture du Ngoumou
                      <br />
                      27 kilomètres de Yaoundé, Cameroun
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Accès routier
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>🚗 Depuis Yaoundé : 27 km</li>
                      <li>🛣️ Route de Ngoumou</li>
                      <li>📍 Village d'Abili bien indiqué</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Infrastructure
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>🏠 Salles d'accueil</li>
                      <li>🛏️ Hébergement disponible</li>
                      <li>✝️ Espace de prière</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Visite
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>📅 Sur rendez-vous</li>
                      <li>🤝 Accueil personnalisé</li>
                      <li>🙏 Accompagnement spirituel</li>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Contact;