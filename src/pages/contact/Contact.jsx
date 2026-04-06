import React, { useState } from "react";

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
      title: "Téléphone",
      details: "(+237) 693 21 54 31",
      description: "Disponible aux heures d'ouverture",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Téléphone alternatif",
      details: "(+237) 677 31 44 12",
      description: "Ligne secondaire",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Email",
      details: "contact@mths-abili.org",
      description: "Réponse sous 48h",
      color: "from-green-500 to-emerald-500"
    },
    {
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
      description: "Premier contact, écoute, discernement spirituel"
    },
    {
      title: "Accompagnement Thérapeutique",
      description: "Parcours de guérison spirituelle en 6 étapes"
    },
    {
      title: "Rite SO'O & Délivrance",
      description: "Rituels de purification et désenvoûtement"
    },
    {
      title: "Boutique du Centre",
      description: "Livres, RTA, produits naturels certifiés"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section avec image de fond */}
        <section 
          className="relative bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-cyan-800/90 text-white overflow-hidden"
          style={{
            backgroundImage: `url('/images/temoignages/contact.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay dégradé pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-cyan-800/95"></div>
          
          {/* Effet de particules animées */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-400/30 blur-3xl animate-pulse-slow animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-purple-400/20 blur-2xl animate-float"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Texte et informations */}
              <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm font-medium">Centre MTHS</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight animate-slide-in-left">
                  Contactez-nous
                  <span className="block text-cyan-200 mt-2">pour un accompagnement</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-blue-100 mb-5 max-w-2xl lg:max-w-none animate-fade-in animation-delay-300">
                  Notre équipe du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est disponible 
                  pour vous accueillir, vous écouter et vous orienter sur le chemin de la guérison spirituelle.
                </p>

                <p className="text-base text-blue-200 mb-10 italic animate-fade-in animation-delay-500">
                  « Vous n'êtes pas seul face à ce que vous vivez. »
                </p>
                
                {/* Statistiques rapides */}
                <div className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start animate-fade-in animation-delay-700">
                  <div className="text-center lg:text-left group">
                    <div className="text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">1979</div>
                    <div className="text-sm text-cyan-100/80">Année de fondation</div>
                  </div>
                  <div className="text-center lg:text-left group">
                    <div className="text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">45+</div>
                    <div className="text-sm text-cyan-100/80">Ans d'expérience</div>
                  </div>
                  <div className="text-center lg:text-left group">
                    <div className="text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">100%</div>
                    <div className="text-sm text-cyan-100/80">Confidentialité</div>
                  </div>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
                  <a
                    href="tel:+237693215431"
                    className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                  >
                    Appelez-nous
                  </a>
                  
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                  >
                    Demander une orientation
                  </a>
                </div>
              </div>

              {/* Carte d'information flottante */}
              <div className="lg:w-1/2 animate-float-slow">
                <div className="relative mx-auto max-w-lg lg:max-w-full">
                  <div className="relative group">
                    {/* Carte principale */}
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 transform transition-all duration-500 hover:scale-[1.02]">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl"></div>
                      
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">M</span>
                          </div>
                          <div>
                            <div className="font-bold text-white text-lg">Accueil bienveillant</div>
                            <div className="text-sm text-cyan-100/90">Dignité & respect garantis</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-white/90">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm">Équipe disponible pour vous écouter</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/90">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300"></span>
                            <span className="text-sm">Confidentialité absolue assurée</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/90">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-600"></span>
                            <span className="text-sm">Accompagnement personnalisé</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge décoratif */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-2xl animate-bounce-slow hidden lg:block">
                      <div className="text-center">
                        <div className="text-lg font-bold">MTHS</div>
                        <div className="text-xs font-medium">Depuis 1979</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cartes secondaires */}
                  <div className="mt-8 grid grid-cols-2 gap-4 animate-fade-in animation-delay-1000">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                      <div className="text-2xl mb-2 font-bold text-white">🔐</div>
                      <div className="text-sm font-medium text-white">Confidentialité</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                      <div className="text-2xl mb-2 font-bold text-white">💬</div>
                      <div className="text-sm font-medium text-white">Sans jugement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-20 text-white/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-20 lg:py-24 -mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl font-bold">{method.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{method.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1.5 text-lg">{method.details}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Message pastoral */}
            <div className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 border-l-4 border-blue-500 animate-fade-in">
              <div className="flex items-start gap-5">
                <div className="text-4xl font-bold text-blue-500">❝</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Notre engagement</h3>
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
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2">
                <div id="contact-form" className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 animate-fade-in-up">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl text-white shadow-lg">
                      <span className="text-xl font-bold">✉</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Formulaire d'orientation</h2>
                      <p className="text-gray-600 mt-1">Demandez un accompagnement spirituel</p>
                    </div>
                  </div>

                  {/* Success Message */}
                  {formStatus.submitted && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl animate-fade-in">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-green-600">✓</span>
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
                    <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl animate-fade-in">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-red-600">!</span>
                        </div>
                        <div>
                          <p className="font-bold text-red-800 text-lg">Erreur lors de l'envoi</p>
                          <p className="text-red-700">Veuillez réessayer ou nous contacter par téléphone.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div className="animate-fade-in animation-delay-100">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div className="animate-fade-in animation-delay-200">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Adresse email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="exemple@email.com (optionnel)"
                        />
                      </div>
                    </div>

                    <div className="animate-fade-in animation-delay-300">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                        placeholder="+237 6XX XX XX XX"
                      />
                    </div>

                    <div className="animate-fade-in animation-delay-400">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Décrivez votre situation *
                      </label>
                      <textarea
                        name="situation"
                        value={formData.situation}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 resize-none"
                        placeholder="Parlez-nous de vos épreuves, vos souffrances invisibles, vos cauchemars, blocages spirituels..."
                      />
                    </div>

                    <div className="animate-fade-in animation-delay-500">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Type de demande *
                      </label>
                      <select
                        name="demande"
                        value={formData.demande}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 bg-white"
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

                    <div className="flex items-start gap-4 p-5 bg-red-50 rounded-2xl border border-red-100 animate-fade-in animation-delay-600">
                      <input
                        type="checkbox"
                        id="urgence"
                        name="urgence"
                        checked={formData.urgence}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-red-300 text-red-600 focus:ring-red-500"
                      />
                      <label htmlFor="urgence" className="text-sm text-gray-700">
                        <span className="text-red-600 font-bold mr-1">!</span>
                        <strong>Urgence spirituelle :</strong> Cochez cette case si vous êtes dans une situation d'oppression invisible critique 
                        ou de perturbations spirituelles graves nécessitant une attention immédiate.
                      </label>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl animate-fade-in animation-delay-700">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mr-1">🔒</span>
                        J'accepte que mes données personnelles soient traitées dans le respect de la confidentialité et de la 
                        charte éthique du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-5 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-4 text-lg transform hover:-translate-y-1 active:translate-y-0 ${
                        formStatus.submitting ? 'animate-pulse' : ''
                      }`}
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="w-7 h-7 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <span className="text-xl">→</span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 mt-8 text-center">
                    * Champs obligatoires. Votre demande sera traitée avec confidentialité et bienveillance.
                  </p>
                </div>
              </div>

              {/* Right Column - Info & Services */}
              <div className="space-y-8">
                {/* Support Hours */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-in-up animation-delay-200">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-2xl text-white shadow-lg">
                      <span className="text-xl font-bold">🕐</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Horaires d'accueil</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center pb-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors duration-200">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="font-bold text-gray-900 bg-gray-100 px-4 py-2 rounded-xl text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>⚠️ Urgences spirituelles :</strong> Pour les cas critiques, utilisez l'option "Urgence" dans le formulaire.
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl text-white shadow-lg">
                      <span className="text-xl font-bold">★</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Nos services</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="p-5 border border-gray-100 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                        <h4 className="font-bold text-gray-800 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adresse postale */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-in-up animation-delay-600">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-2xl text-white shadow-lg">
                      <span className="text-xl font-bold">📍</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Adresse postale</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">
                      <strong>Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</strong>
                    </p>
                    <p className="text-gray-600">Village Abili, Préfecture du Ngoumou</p>
                    <p className="text-gray-600">27 km de Yaoundé</p>
                    <p className="text-gray-600">BP : 12561 Yaoundé, Cameroun</p>
                  </div>

                  <div className="mt-5 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600">
                      <strong>Récépissé :</strong> N°030/RDA/J12/SAAJP du 14 Décembre 2010
                    </p>
                  </div>
                </div>

                {/* FAQ Quick Link */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 p-7 shadow-lg animate-fade-in-up animation-delay-800">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Questions fréquentes</h3>
                  <p className="text-gray-600 mb-5">
                    Consultez notre FAQ pour des réponses sur la MTHS, le parcours d'accompagnement et le rite SO'O.
                  </p>
                  <a 
                    href="/faq"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 bg-white border-2 border-blue-300 text-blue-700 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    Voir la FAQ complète
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-20 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
              <div className="p-8 md:p-10 border-b border-gray-100">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-2xl text-white">
                    <span className="text-xl font-bold">🗺</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Localisation du Centre</h3>
                    <p className="text-gray-600">Village Abili, à 27 km de Yaoundé</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-2xl flex items-center justify-center mb-8 overflow-hidden relative group">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl font-bold text-white">MTHS</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce-slow">
                        📍
                      </div>
                    </div>
                    <p className="font-bold text-gray-800 text-xl mb-3">Centre MARIE REINE DE LA MISÉRICORDE</p>
                    <p className="text-gray-600 max-w-md">
                      Village Abili, Préfecture du Ngoumou
                      <br />
                      27 kilomètres de Yaoundé, Cameroun
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      Accès routier
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-3">
                      <li>Depuis Yaoundé : 27 km</li>
                      <li>Route de Ngoumou</li>
                      <li>Village d'Abili bien indiqué</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      Infrastructure
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-3">
                      <li>Salles d'accueil</li>
                      <li>Hébergement disponible</li>
                      <li>Espace de prière</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      Visite
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-3">
                      <li>Sur rendez-vous</li>
                      <li>Accueil personnalisé</li>
                      <li>Accompagnement spirituel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2.5s ease-in-out infinite;
        }
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        
        .animate-fade-in,
        .animate-fade-in-up,
        .animate-slide-in-left {
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}

export default Contact;