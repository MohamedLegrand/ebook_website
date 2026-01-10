import React, { useState, useEffect, useRef } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [hoverElement, setHoverElement] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [circlePositions, setCirclePositions] = useState([]);
  const [starPositions, setStarPositions] = useState([]);

  // Générer les positions des éléments décoratifs une seule fois
  useEffect(() => {
    // Positions prédéfinies pour les cercles flottants
    const circles = Array.from({ length: 8 }, (_, i) => ({
      left: (10 + i * 12) % 95,
      top: (15 + i * 10) % 90,
      size: 10 + (i % 4) * 8,
      delay: i * 0.5,
      duration: 15 + (i % 3) * 5
    }));
    
    // Positions prédéfinies pour les étoiles
    const stars = Array.from({ length: 12 }, (_, i) => ({
      left: (5 + i * 8) % 95,
      top: (10 + i * 7) % 85,
      delay: i * 0.2,
      duration: 2 + (i % 3)
    }));
    
    setCirclePositions(circles);
    setStarPositions(stars);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Nom requis";
    if (!formData.email) errors.email = "Email requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email invalide";
    if (!formData.password) errors.password = "Mot de passe requis";
    else if (formData.password.length < 8) errors.password = "Min. 8 caractères";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Mots de passe différents";
    if (!formData.agreeTerms) errors.agreeTerms = "Acceptez les conditions";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("Inscription avec:", formData);
      setIsLoading(false);
      alert("Inscription réussie ! (simulation)");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating circles with pre-calculated positions */}
        {circlePositions.map((circle, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
              animationDelay: `${circle.delay}s`,
              animationDuration: `${circle.duration}s`,
              borderRadius: '50%'
            }}
          />
        ))}
        
        {/* Twinkling stars with pre-calculated positions */}
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
        
        {/* Pulse waves - positions fixes */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 border border-blue-200/20 rounded-full animate-pulse-wave"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-indigo-200/20 rounded-full animate-pulse-wave" 
             style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-sm relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 rounded-xl blur opacity-20 animate-glow-border"></div>
        
        {/* Corner dots */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-400 rounded-full blur-sm animate-ping-slow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-indigo-400 rounded-full blur-sm animate-ping-slow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Main card - compact */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100/50 p-5 animate-slideUp">
          
          {/* Header with animated icon */}
          <div className="text-center mb-5 animate-fadeInDown">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-blue-200/50 animate-float-icon">
              <svg className="w-6 h-6 text-white animate-rotate-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-0.5">
              Créer un compte
            </h2>
            <p className="text-xs text-gray-500">
              Rejoignez notre bibliothèque numérique
            </p>
          </div>

          {/* Compact form with field animations */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <div className="relative group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => {
                    setActiveField('fullName');
                    setHoverElement('fullName');
                  }}
                  onBlur={() => {
                    setActiveField(null);
                    setHoverElement(null);
                  }}
                  placeholder="Nom complet"
                  className={`w-full px-3 py-2 pl-9 text-sm border rounded-lg transition-all duration-300 ${
                    formErrors.fullName 
                      ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : activeField === 'fullName'
                        ? "border-blue-400 bg-blue-50 ring-2 ring-blue-200"
                        : "border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  activeField === 'fullName' || formData.fullName ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              {formErrors.fullName && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => {
                    setActiveField('email');
                    setHoverElement('email');
                  }}
                  onBlur={() => {
                    setActiveField(null);
                    setHoverElement(null);
                  }}
                  placeholder="exemple@email.com"
                  className={`w-full px-3 py-2 pl-9 text-sm border rounded-lg transition-all duration-300 ${
                    formErrors.email 
                      ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : activeField === 'email'
                        ? "border-blue-400 bg-blue-50 ring-2 ring-blue-200"
                        : "border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  activeField === 'email' || formData.email ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => {
                    setActiveField('password');
                    setHoverElement('password');
                  }}
                  onBlur={() => {
                    setActiveField(null);
                    setHoverElement(null);
                  }}
                  placeholder="Mot de passe"
                  className={`w-full px-3 py-2 pl-9 text-sm border rounded-lg transition-all duration-300 ${
                    formErrors.password 
                      ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : activeField === 'password'
                        ? "border-blue-400 bg-blue-50 ring-2 ring-blue-200"
                        : "border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  activeField === 'password' || formData.password ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => {
                    setActiveField('confirmPassword');
                    setHoverElement('confirmPassword');
                  }}
                  onBlur={() => {
                    setActiveField(null);
                    setHoverElement(null);
                  }}
                  placeholder="Confirmer mot de passe"
                  className={`w-full px-3 py-2 pl-9 text-sm border rounded-lg transition-all duration-300 ${
                    formErrors.confirmPassword 
                      ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : activeField === 'confirmPassword'
                        ? "border-blue-400 bg-blue-50 ring-2 ring-blue-200"
                        : "border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  activeField === 'confirmPassword' || formData.confirmPassword ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              {formErrors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                <div className="relative mt-0.5">
                  <input 
                    type="checkbox" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center transition-all duration-200 ${
                    formData.agreeTerms 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-gray-300'
                  }`}>
                    {formData.agreeTerms && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="flex-1">
                  J'accepte les{" "}
                  <a href="#" className="text-blue-500 hover:underline">conditions</a>
                </span>
              </label>
              {formErrors.agreeTerms && (
                <p className="mt-1 text-xs text-red-500">{formErrors.agreeTerms}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Inscription...
                </span>
              ) : (
                "S'inscrire"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-100"></div>
            </div>
          </div>

          {/* Login link */}
          <div className="text-center pt-3 border-t border-blue-50">
            <p className="text-xs text-gray-500">
              Déjà un compte ?{" "}
              <a 
                href="/login" 
                className="text-blue-500 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                Se connecter
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400 mt-3">
          © 2024 Bibliothèque Numérique
        </p>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        @keyframes glow-border {
          0%, 100% { 
            opacity: 0.15;
            transform: scale(1);
          }
          50% { 
            opacity: 0.25;
            transform: scale(1.02);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-icon {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-5px);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes pulse-wave {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          80%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.4s ease-out;
        }
        
        .animate-glow-border {
          animation: glow-border 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-pulse-wave {
          animation: pulse-wave 4s ease-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Register;