import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [hoverElement, setHoverElement] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});
    
    // Validation simple
    const errors = {};
    if (!email) errors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email invalide";
    if (!password) errors.password = "Le mot de passe est requis";
    else if (password.length < 6) errors.password = "Minimum 6 caractères";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }
    
    // Simulation d'une requête API
    setTimeout(() => {
      console.log("Login attempt with:", { email, password, rememberMe });
      setIsLoading(false);
      // Ici vous ajouteriez votre logique d'authentification réelle
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    console.log(`Login avec ${provider}`);
    
    // Simulation de login social
    setTimeout(() => {
      setIsLoading(false);
      alert(`Redirection vers ${provider}... (simulation)`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/90 via-white to-blue-50/90 p-3 overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Bulles flottantes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-blue-200/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
        
        {/* Particules scintillantes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/50 rounded-full animate-twinkle"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-300/10 rounded-full blur-xl animate-pulse-slow" 
             style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="w-full max-w-sm relative">
        {/* Effet de glow animé */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-3xl blur opacity-30 animate-glow"></div>
        
        {/* Carte principale avec animation d'entrée */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-5 animate-slideUp">
          
          {/* Points lumineux sur les coins */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow" 
               style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow" 
               style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping-slow" 
               style={{animationDelay: '1.5s'}}></div>
          
          {/* En-tête avec animation */}
          <div className="text-center mb-5 animate-fadeInDown">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-blue-200 animate-float-icon">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-0.5 animate-text-glow">Connexion</h2>
            <p className="text-xs text-gray-500">Accédez à votre compte</p>
          </div>

          {/* Formulaire avec animations séquentielles */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Champ Email avec effet de vague */}
            <div className="animate-fadeInLeft" style={{animationDelay: '0.1s'}}>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onMouseEnter={() => setHoverElement('email')}
                  onMouseLeave={() => setHoverElement(null)}
                  placeholder="exemple@email.com"
                  className={`w-full px-3 py-2 pl-10 text-sm border rounded-lg transition-all duration-300 group-hover:scale-[1.02] ${
                    formErrors.email 
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  email || hoverElement === 'email' ? 'text-blue-500 scale-110' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                {/* Effet de vague */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-blue-50/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-500 animate-shake flex items-center gap-1">
                  <svg className="w-3 h-3 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Champ Mot de passe avec effet de vague */}
            <div className="animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
              <div className="relative group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onMouseEnter={() => setHoverElement('password')}
                  onMouseLeave={() => setHoverElement(null)}
                  placeholder="********"
                  className={`w-full px-3 py-2 pl-10 text-sm border rounded-lg transition-all duration-300 group-hover:scale-[1.02] ${
                    formErrors.password 
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200" 
                      : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  } outline-none`}
                />
                <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  password || hoverElement === 'password' ? 'text-blue-500 scale-110' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                {/* Effet de vague */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-blue-50/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-xs text-red-500 animate-shake flex items-center gap-1">
                  <svg className="w-3 h-3 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {formErrors.password}
                </p>
              )}
            </div>

            {/* Options avec animation */}
            <div className="flex items-center justify-between text-xs animate-fadeIn" style={{animationDelay: '0.3s'}}>
              <label 
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-600 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoverElement('checkbox')}
                onMouseLeave={() => setHoverElement(null)}
              >
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center transition-all duration-300 ${
                    rememberMe 
                      ? 'bg-blue-500 border-blue-500 scale-110' 
                      : hoverElement === 'checkbox' 
                        ? 'border-blue-400 scale-105' 
                        : 'border-gray-300'
                  }`}>
                    {rememberMe && (
                      <svg className="w-3 h-3 text-white animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="transition-all duration-300">Se souvenir</span>
              </label>
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-700 text-xs hover:underline transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoverElement('forgot')}
                onMouseLeave={() => setHoverElement(null)}
              >
                Mot de passe oublié ?
              </a>
            </div>

            {/* Bouton de connexion avec animation de pulse au survol */}
            <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <button
                type="submit"
                disabled={isLoading}
                onMouseEnter={() => setHoverElement('submit')}
                onMouseLeave={() => setHoverElement(null)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connexion...
                  </span>
                ) : (
                  <span className="relative z-10">Se connecter</span>
                )}
              </button>
            </div>
          </form>

          {/* Séparateur animé */}
          <div className="relative my-4 animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-100"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-400 animate-pulse-text">Ou continuer avec</span>
            </div>
          </div>

          {/* Boutons sociaux avec animations */}
          <div className="grid grid-cols-2 gap-2">
            <div className="animate-fadeInRight" style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => handleSocialLogin("Google")}
                disabled={isLoading}
                onMouseEnter={() => setHoverElement('google')}
                onMouseLeave={() => setHoverElement(null)}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-gray-200 disabled:opacity-70 group"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xs font-medium text-gray-700">Google</span>
              </button>
            </div>

            <div className="animate-fadeInRight" style={{animationDelay: '0.7s'}}>
              <button
                onClick={() => handleSocialLogin("Facebook")}
                disabled={isLoading}
                onMouseEnter={() => setHoverElement('facebook')}
                onMouseLeave={() => setHoverElement(null)}
                className="w-full flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-70 group"
              >
                <div className="w-4 h-4 flex items-center justify-center bg-white rounded-full transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-3 h-3 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">Facebook</span>
              </button>
            </div>
          </div>

          {/* Lien d'inscription avec animation */}
          <div className="text-center mt-4 pt-3 border-t border-blue-50 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            <p className="text-xs text-gray-500">
              Pas encore de compte ?{" "}
              <a 
                href="/register" 
                className="text-blue-500 hover:text-blue-700 font-medium hover:underline transition-all duration-300 hover:scale-105 inline-block"
                onMouseEnter={() => setHoverElement('register')}
                onMouseLeave={() => setHoverElement(null)}
              >
                Créer un compte
              </a>
            </p>
          </div>
        </div>
        
        {/* Message copyright animé */}
        <p className="text-center text-xs text-gray-400 mt-3 animate-fadeIn" style={{animationDelay: '0.9s'}}>
          © 2024 Votre Application
        </p>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(15px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from { 
            opacity: 0;
            transform: translateY(-8px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-8px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from { 
            opacity: 0;
            transform: translateX(8px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(8px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        @keyframes glow {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
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
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1;
          }
          50% { 
            opacity: 0.2;
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
        
        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(59, 130, 246, 0);
          }
          50% { 
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes check {
          0% {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
          }
          100% {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse-text {
          0%, 100% { 
            opacity: 0.7;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-3px);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.4s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.4s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.4s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-check {
          animation: check 0.3s ease-out;
        }
        
        .animate-pulse-text {
          animation: pulse-text 2s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Login;