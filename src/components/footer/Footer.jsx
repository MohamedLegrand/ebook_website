import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, AlertTriangle, HelpCircle, FileText, Shield } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState('fr');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Traductions
  const t = {
    fr: {
      about: {
        title: "À Propos du Centre MTHS",
        description: "La Médecine Traditionnelle des Handicapés Spirituels unit la sagesse ancestrale africaine, la spiritualité chrétienne et les thérapies naturelles pour guérir ce que l'œil humain ne voit pas.",
        links: [
          { label: "Notre Histoire", href: "/histoire" },
          { label: "Jean Paul Sylvain SIDA ABENA", href: "/fondateur" },
          { label: "Apparition de la Vierge Marie", href: "/apparition" },
          { label: "Mission Divine", href: "/mission" },
          { label: "Reconnaissance Ecclésiale", href: "/reconnaissance" }
        ]
      },
      care: {
        title: "Soins & Accompagnement",
        links: [
          { label: "Approche Thérapeutique", href: "/approche" },
          { label: "Les 5 Piliers de la MTHS", href: "/piliers" },
          { label: "Parcours d'Accompagnement", href: "/parcours" },
          { label: "Rite SO'O Inculturé", href: "/rite-soo" },
          { label: "Pathologies Traitées", href: "/pathologies" },
          { label: "Témoignages", href: "/temoignages" }
        ]
      },
      resources: {
        title: "Ressources & Publications",
        links: [
          { label: "Boutique du Centre", href: "/boutique" },
          { label: "Livres Doctrinaux", href: "/livres" },
          { label: 'Revue "Le Monde Parallèle"', href: "/revue" },
          { label: "Remèdes Traditionnels Améliorés", href: "/rta" },
          { label: "Supports Audio", href: "/audio" },
          { label: "Actualités & Veillées", href: "/actualites" }
        ]
      },
      legal: {
        title: "Légal & Contact",
        links: [
          { label: "FAQ - Questions Fréquentes", href: "/faq", icon: "❓" },
          { label: "Conditions d'Utilisation", href: "/conditions", icon: "📝" },
          { label: "Politique de Confidentialité", href: "/confidentialite", icon: "🛡️" },
          { label: "Mentions Légales", href: "/mentions-legales", icon: "⚖️" },
          { label: "Charte Éthique", href: "/ethique", icon: "✨" },
          { label: "Protection des Données (RGPD)", href: "/rgpd", icon: "🔒" },
          { label: "Loi Camerounaise 2024", href: "/loi-2024", icon: "📜" },
          { label: "Contact & Orientation", href: "/contact", icon: "📞" },
          { label: "Urgence Spirituelle", href: "/urgence", icon: "🚨" }
        ]
      },
      contact: {
        title: "Contact Rapide",
        address: "Abili, 27 km de Yaoundé",
        country: "Cameroun",
        center: "Centre Marie Reine de la Miséricorde",
        emergency: "Urgence 24/7"
      },
      payment: {
        title: "Moyens de Paiement Acceptés",
        secure: "Paiement 100% Sécurisé SSL"
      },
      newsletter: {
        title: "Newsletter Spirituelle",
        subtitle: "Recevez nos enseignements et messages",
        placeholder: "Votre email",
        button: "S'abonner",
        success: "Merci pour votre inscription !"
      },
      disclaimer: {
        title: "Avertissement Médical Important",
        text: "La MTHS complète la médecine moderne et ne la remplace en aucun cas. Consultez toujours un médecin pour tout problème de santé. Les témoignages ne constituent pas des promesses de guérison.",
        law: "Conforme à la Loi Camerounaise N° 2068/PJL/AN de 2024 sur la Médecine Traditionnelle"
      },
      footer: {
        copyright: "Association Mariale d'Abili (ASMAB) — Tous droits réservés.",
        tagline: "Guérir l'Invisible, Restaurer l'Homme",
        developer: "Développé par Monsieur ZOA Stéphane",
        watermark: "La paix et la guérison pour tous"
      },
      schedule: {
        title: "Horaires d'Ouverture",
        weekdays: "Lun - Ven : 8h - 17h",
        saturday: "Samedi : 8h - 13h",
        sunday: "Dimanche : Sur rendez-vous"
      }
    },
    en: {
      about: {
        title: "About TMSH Center",
        description: "Traditional Medicine for the Spiritually Handicapped unites African ancestral wisdom, Christian spirituality and natural therapies to heal what the human eye cannot see.",
        links: [
          { label: "Our History", href: "/histoire" },
          { label: "Jean Paul Sylvain SIDA ABENA", href: "/fondateur" },
          { label: "Apparition of the Virgin Mary", href: "/apparition" },
          { label: "Divine Mission", href: "/mission" },
          { label: "Ecclesiastical Recognition", href: "/reconnaissance" }
        ]
      },
      care: {
        title: "Care & Support",
        links: [
          { label: "Therapeutic Approach", href: "/approche" },
          { label: "The 5 Pillars of TMSH", href: "/piliers" },
          { label: "Support Journey", href: "/parcours" },
          { label: "SO'O Inculturated Ritual", href: "/rite-soo" },
          { label: "Treated Pathologies", href: "/pathologies" },
          { label: "Testimonies", href: "/temoignages" }
        ]
      },
      resources: {
        title: "Resources & Publications",
        links: [
          { label: "Center Shop", href: "/boutique" },
          { label: "Doctrinal Books", href: "/livres" },
          { label: '"The Parallel World" Review', href: "/revue" },
          { label: "Improved Traditional Remedies", href: "/rta" },
          { label: "Audio Supports", href: "/audio" },
          { label: "News & Vigils", href: "/actualites" }
        ]
      },
      legal: {
        title: "Legal & Contact",
        links: [
          { label: "FAQ - Frequently Asked Questions", href: "/faq", icon: "❓" },
          { label: "Terms of Use", href: "/conditions", icon: "📝" },
          { label: "Privacy Policy", href: "/confidentialite", icon: "🛡️" },
          { label: "Legal Notice", href: "/mentions-legales", icon: "⚖️" },    
          { label: "Ethical Charter", href: "/ethique", icon: "✨" },
          { label: "Data Protection (GDPR)", href: "/rgpd", icon: "🔒" },
          { label: "Cameroonian Law 2024", href: "/loi-2024", icon: "📜" },
          { label: "Contact & Guidance", href: "/contact", icon: "📞" },
          { label: "Spiritual Emergency", href: "/urgence", icon: "🚨" }
        ]
      },
      contact: {
        title: "Quick Contact",
        address: "Abili, 27 km from Yaoundé",
        country: "Cameroon",
        center: "Mary Queen of Mercy Center",
        emergency: "Emergency 24/7"
      },
      payment: {
        title: "Accepted Payment Methods",
        secure: "100% Secure SSL Payment"
      },
      newsletter: {
        title: "Spiritual Newsletter",
        subtitle: "Receive our teachings and messages",
        placeholder: "Your email",
        button: "Subscribe",
        success: "Thank you for subscribing!"
      },
      disclaimer: {
        title: "Important Medical Warning",
        text: "TMSH complements modern medicine and does not replace it in any way. Always consult a doctor for any health problem. Testimonials do not constitute promises of healing.",
        law: "Compliant with Cameroonian Law N° 2068/PJL/AN of 2024 on Traditional Medicine"
      },
      footer: {
        copyright: "Abili Marian Association (ASMAB) — All rights reserved.",
        tagline: "Healing the Invisible, Restoring Humanity",
        developer: "Developed by Mr. ZOA Stéphane",
        watermark: "Peace and healing for all"
      },
      schedule: {
        title: "Opening Hours",
        weekdays: "Mon - Fri: 8am - 5pm",
        saturday: "Saturday: 8am - 1pm",
        sunday: "Sunday: By appointment"
      }
    }
  };

  const currentLang = t[language];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      alert(currentLang.newsletter.success);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950 border-t-4 border-amber-500 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Disclaimer Médical - OBLIGATOIRE */}
        <div className="bg-gradient-to-r from-yellow-900/30 to-red-900/30 border-l-4 border-yellow-500 p-4 sm:p-6 mb-8 sm:mb-12 rounded-lg backdrop-blur-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-yellow-300 font-bold text-base sm:text-lg mb-2">
                ⚠️ {currentLang.disclaimer.title}
              </h4>
              <p className="text-yellow-100 text-xs sm:text-sm leading-relaxed mb-2">
                {currentLang.disclaimer.text}
              </p>
              <p className="text-yellow-300 text-xs font-medium italic">
                📜 {currentLang.disclaimer.law}
              </p>
            </div>
          </div>
        </div>

        {/* Contenu Principal Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Colonne 1 : À Propos */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-blue-700 p-3 rounded-xl shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L12 22M5 12L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl">
                  MTHS<span className="text-amber-400">/TMSH</span>
                </h3>
                <p className="text-blue-200 text-xs">
                  {currentLang.contact.center}
                </p>
              </div>
            </div>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4">
              {currentLang.about.description}
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="flex gap-2 sm:gap-3 mb-4">
              <a href="https://facebook.com/mths" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/mths_abili" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@mths-abili" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://wa.me/237693215431" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            {/* Horaires */}
            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-700">
              <h5 className="text-amber-400 font-semibold text-xs sm:text-sm mb-2 flex items-center gap-2">
                <Clock size={16} />
                {currentLang.schedule.title}
              </h5>
              <div className="text-blue-200 text-xs space-y-1">
                <p>📅 {currentLang.schedule.weekdays}</p>
                <p>📅 {currentLang.schedule.saturday}</p>
                <p>📅 {currentLang.schedule.sunday}</p>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Soins & Accompagnement */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 pb-2 border-b border-amber-500">
              {currentLang.care.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {currentLang.care.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-amber-400 text-xs sm:text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 group-hover:bg-amber-400"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 pb-2 border-b border-amber-500">
              {currentLang.resources.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {currentLang.resources.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-emerald-400 text-xs sm:text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 group-hover:bg-emerald-400"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Légal & Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 pb-2 border-b border-amber-500">
              {currentLang.legal.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {currentLang.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white text-xs sm:text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center group"
                  >
                    <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barre Séparatrice */}
        <div className="border-t border-blue-700 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
            
            {/* Contact Rapide */}
            <div>
              <h5 className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">
                <MapPin size={16} />
                {currentLang.contact.title}
              </h5>
              <div className="space-y-2 text-blue-100 text-xs sm:text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span>
                    {currentLang.contact.address}<br/>
                    <span className="text-amber-300">{currentLang.contact.country}</span>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-emerald-400" />
                  <a href="tel:+237693215431" className="hover:text-white transition-colors">+237 693 21 54 31</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-emerald-400" />
                  <a href="tel:+237677314412" className="hover:text-white transition-colors">+237 677 31 44 12</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0 text-emerald-400" />
                  <a href="mailto:contact@mths-abili.org" className="hover:text-white break-all transition-colors">contact@mths-abili.org</a>
                </p>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-2 rounded mt-3">
                  <p className="flex items-center gap-2 text-red-300 font-bold text-xs">
                    <AlertTriangle size={14} />
                    {currentLang.contact.emergency}
                  </p>
                </div>
              </div>
            </div>

            {/* Moyens de Paiement */}
            <div>
              <h5 className="text-amber-400 font-semibold text-sm mb-3">
                {currentLang.payment.title}
              </h5>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white p-2 rounded-lg shadow flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">ORANGE MONEY</span>
                </div>
                <div className="bg-yellow-400 p-2 rounded-lg shadow flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xs">MTN MOMO</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">MASTERCARD</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <span className="font-semibold">{currentLang.payment.secure}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-amber-400 font-semibold text-sm mb-1">
                {currentLang.newsletter.title}
              </h5>
              <p className="text-blue-300 text-xs mb-3">{currentLang.newsletter.subtitle}</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentLang.newsletter.placeholder}
                  required
                  className="w-full px-3 py-2 text-sm border-2 border-blue-600 bg-white/10 text-white placeholder-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-blue-800 transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Inscription confirmée
                    </>
                  ) : (
                    <>
                      ✨ {currentLang.newsletter.button}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Barre Copyright */}
          <div className="border-t border-blue-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              {/* Copyright */}
              <div>
                <p className="text-blue-200 text-xs sm:text-sm">
                  © {currentYear} <span className="font-bold text-white">MTHS/TMSH</span> — {currentLang.footer.copyright}
                </p>
                <p className="text-amber-400 text-xs mt-1 font-medium">
                  {currentLang.footer.tagline}
                </p>
                <p className="text-blue-400 text-[0.65rem] mt-1">
                  {currentLang.footer.developer}
                </p>
              </div>

              {/* Liens Légaux */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center text-xs">
                <a href="/faq" className="text-blue-300 hover:text-white transition-colors flex items-center gap-1">
                  <HelpCircle size={12} />
                  FAQ
                </a>
                <span className="text-blue-500">•</span>
                <a href="/conditions" className="text-blue-300 hover:text-white transition-colors flex items-center gap-1">
                  <FileText size={12} />
                  Conditions
                </a>
                <span className="text-blue-500">•</span>
                <a href="/confidentialite" className="text-blue-300 hover:text-white transition-colors flex items-center gap-1">
                  <Shield size={12} />
                  Confidentialité
                </a>
                <span className="text-blue-500">•</span>
                <a href="/mentions-legales" className="text-blue-300 hover:text-white transition-colors">
                  Mentions Légales
                </a>
                <span className="text-blue-500">•</span>
                <a href="/rgpd" className="text-blue-300 hover:text-white transition-colors">
                  RGPD
                </a>
              </div>

              {/* Sécurité */}
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-semibold">Site Sécurisé SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Final */}
      <div className="bg-blue-950 py-3 text-center border-t border-blue-800">
        <p className="text-blue-400 text-xs">
          {currentLang.footer.watermark} 🕊️ ✨ 🙏
        </p>
      </div>
    </footer>
  );
}

export default Footer;