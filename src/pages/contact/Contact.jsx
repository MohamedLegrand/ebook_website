import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    situation: "",
    demande: "",
    urgence: false,
    consent: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        consent: false,
      });
    }, 1500);
  };

  const contactMethods = [
    { title: "Téléphone", details: "(+237) 693 21 54 31", description: "Disponible aux heures d'ouverture" },
    { title: "Téléphone alternatif", details: "(+237) 677 31 44 12", description: "Ligne secondaire" },
    { title: "Email", details: "contact@mths-abili.org", description: "Réponse sous 48h" },
    { title: "Localisation", details: "Abili, Ngoumou", description: "27 km de Yaoundé" },
  ];

  const supportHours = [
    { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
    { day: "Samedi", hours: "9h00 - 15h00" },
    { day: "Dimanche", hours: "Sur rendez-vous uniquement" },
  ];

  const services = [
    { title: "Accueil et Orientation", description: "Premier contact, écoute, discernement spirituel" },
    { title: "Accompagnement Thérapeutique", description: "Parcours de guérison spirituelle en 6 étapes" },
    { title: "Rite SO'O et Délivrance", description: "Rituels de purification et désenvoûtement" },
    { title: "Boutique du Centre", description: "Livres, RTA, produits naturels certifiés" },
  ];

  const centrePosition = [3.784, 11.456];

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-1">
        {/* Hero Section avec image de fond */}
        <section 
          className="relative text-white py-16 md:py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/temoignages/contact.jpg')" }}
        >
          {/* Overlay sombre pour la lisibilité */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Texte à gauche */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                  Contactez-nous
                  <span className="block text-cyan-200 mt-2">pour un accompagnement</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 mb-5">
                  Notre équipe du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est disponible
                  pour vous accueillir, vous écouter et vous orienter sur le chemin de la guérison spirituelle.
                </p>
                <p className="text-base text-blue-200 mb-10 italic">
                  « Vous n'êtes pas seul face à ce que vous vivez. »
                </p>
                <div className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start">
                  <div>
                    <div className="text-3xl font-bold">1979</div>
                    <div className="text-sm text-cyan-100">Année de fondation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">45+</div>
                    <div className="text-sm text-cyan-100">Ans d'expérience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-cyan-100">Confidentialité</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:+237693215431" className="bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50">
                    Appelez-nous
                  </a>
                  <a href="#contact-form" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/15">
                    Demander une orientation
                  </a>
                </div>
              </div>

              {/* Bloc d'informations à droite (inchangé) */}
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                  <div>
                    <div className="font-bold text-white text-lg mb-2">Accueil bienveillant</div>
                    <div className="text-sm text-cyan-100 mb-4">Dignité et respect garantis</div>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <div>Équipe disponible pour vous écouter</div>
                    <div>Confidentialité absolue assurée</div>
                    <div>Accompagnement personnalisé</div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3 text-center rounded-2xl text-white text-sm">Confidentialité</div>
                    <div className="bg-white/10 p-3 text-center rounded-2xl text-white text-sm">Sans jugement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le reste du contenu (contact, formulaire, carte) est strictement identique */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h3>
                  <p className="text-gray-900 font-semibold text-lg">{method.details}</p>
                  <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Message pastoral */}
            <div className="mb-16 bg-blue-50 rounded-3xl p-8 md:p-10 border-l-4 border-blue-500">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Notre engagement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tout ce que vous partagez est accueilli avec <strong>confidentialité, respect et absence totale de jugement</strong>.
                  Au Centre, nous ne voyons pas seulement un trouble ou un problème à résoudre ; nous voyons une âme qui cherche
                  la lumière et la réconciliation, et nous nous engageons à marcher à vos côtés sur ce chemin.
                </p>
                <p className="text-blue-700 font-medium">— Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                <div id="contact-form" className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Formulaire d'orientation</h2>
                  <p className="text-gray-600 mb-6">Demandez un accompagnement spirituel</p>

                  {formStatus.submitted && (
                    <div className="mb-6 p-5 bg-green-50 border border-green-200 rounded-2xl">
                      <p className="font-bold text-green-800">Demande envoyée avec succès !</p>
                      <p className="text-green-700">Notre équipe vous contactera dans les plus brefs délais. Que Dieu vous bénisse.</p>
                    </div>
                  )}
                  {formStatus.error && (
                    <div className="mb-6 p-5 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="font-bold text-red-800">Erreur lors de l'envoi</p>
                      <p className="text-red-700">Veuillez réessayer ou nous contacter par téléphone.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                          placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                          placeholder="exemple@email.com (optionnel)" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="+237 6XX XX XX XX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre situation *</label>
                      <textarea name="situation" value={formData.situation} onChange={handleChange} required rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Parlez-nous de vos épreuves, vos souffrances invisibles, vos cauchemars, blocages spirituels..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de demande *</label>
                      <select name="demande" value={formData.demande} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white">
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
                    <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl">
                      <input type="checkbox" id="urgence" name="urgence" checked={formData.urgence} onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-red-300" />
                      <label htmlFor="urgence" className="text-sm text-gray-700">
                        <strong>Urgence spirituelle :</strong> Cochez cette case si vous êtes dans une situation d'oppression invisible critique.
                      </label>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl">
                      <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required
                        className="mt-1 w-5 h-5 rounded border-blue-300" />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        J'accepte que mes données personnelles soient traitées dans le respect de la confidentialité et de la charte éthique du Centre. *
                      </label>
                    </div>
                    <button type="submit" disabled={formStatus.submitting}
                      className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 disabled:opacity-70">
                      {formStatus.submitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-6 text-center">* Champs obligatoires. Confidentialité assurée.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Horaires d'accueil</h3>
                  <div className="space-y-3">
                    {supportHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-gray-100 py-2">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="font-bold bg-gray-100 px-3 py-1 rounded-xl text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 bg-blue-50 rounded-2xl">
                    <p className="text-sm text-blue-800"><strong>Urgences spirituelles :</strong> Utilisez l'option "Urgence" dans le formulaire.</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Nos services</h3>
                  <div className="space-y-3">
                    {services.map((service, idx) => (
                      <div key={idx} className="p-4 border border-gray-100 rounded-2xl">
                        <h4 className="font-bold text-gray-800">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Adresse postale</h3>
                  <p className="font-medium">Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</p>
                  <p className="text-gray-600">Village Abili, Préfecture du Ngoumou</p>
                  <p className="text-gray-600">27 km de Yaoundé</p>
                  <p className="text-gray-600">BP : 12561 Yaoundé, Cameroun</p>
                  <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600"><strong>Récépissé :</strong> N°030/RDA/J12/SAAJP du 14 Décembre 2010</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-3xl border border-blue-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Questions fréquentes</h3>
                  <p className="text-gray-600 mb-4">Consultez notre FAQ pour des réponses sur la MTHS, le parcours d'accompagnement et le rite SO'O.</p>
                  <a href="/faq" className="block w-full text-center px-5 py-3 bg-white border-2 border-blue-300 text-blue-700 rounded-2xl font-bold hover:bg-blue-50">
                    Voir la FAQ complète
                  </a>
                </div>
              </div>
            </div>

            {/* Carte Leaflet */}
            <div className="mt-20 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Localisation du Centre MTHS</h3>
                <p className="text-gray-600">Village Abili, à 27 km de Yaoundé — Cameroun</p>
              </div>
              <div style={{ height: "450px" }}>
                <MapContainer center={centrePosition} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                  <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={centrePosition}>
                    <Popup>
                      <strong>Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</strong><br />
                      Village Abili, Ngoumou<br />
                      Cameroun<br />
                      <a href="https://www.google.com/maps/search/?api=1&query=3.784,11.456" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                        Voir sur Google Maps
                      </a>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2">Accès routier</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Depuis Yaoundé : 27 km</li>
                    <li>Route de Ngoumou</li>
                    <li>Village d'Abili bien indiqué</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2">Infrastructure</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Salles d'accueil</li>
                    <li>Hébergement disponible</li>
                    <li>Espace de prière</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2">Visite</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Sur rendez-vous</li>
                    <li>Accueil personnalisé</li>
                    <li>Accompagnement spirituel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;