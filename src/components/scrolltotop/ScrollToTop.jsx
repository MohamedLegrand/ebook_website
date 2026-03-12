// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonte en haut de la page instantanément
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche à chaque changement de chemin

  return null; // Ce composant n'affiche rien
}