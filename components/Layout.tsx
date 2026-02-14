
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
                <i className="fa-solid fa-mountain-sun"></i>
                <span className="tracking-tight uppercase">Atlas Job</span>
              </Link>
              <div className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
                <Link to="/jobs" className="hover:text-emerald-600 transition-colors">Offres</Link>
                <Link to="/conseils" className="hover:text-emerald-600 transition-colors">Conseils</Link>
                <Link to="/entreprises" className="hover:text-emerald-600 transition-colors">Entreprises</Link>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => navigate('/recruiter')} className="text-slate-600 hover:text-emerald-600 font-medium px-4 py-2">
                Recruteur ? Déposez une offre
              </button>
              <Link to="/candidate" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-md">
                Espace Candidat
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 text-2xl">
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
            <Link to="/jobs" className="block text-slate-600 font-medium py-2">Offres</Link>
            <Link to="/conseils" className="block text-slate-600 font-medium py-2">Conseils</Link>
            <Link to="/entreprises" className="block text-slate-600 font-medium py-2">Entreprises</Link>
            <Link to="/recruiter" className="block text-emerald-600 font-medium py-2">Espace Recruteur</Link>
            <Link to="/candidate" className="block bg-emerald-600 text-white text-center py-3 rounded-lg font-bold">Mon Profil</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-mountain-sun text-emerald-500"></i>
              ATLAS JOB
            </h3>
            <p className="text-sm leading-relaxed">
              La plateforme de recrutement de référence au Maroc. Connectez-vous aux meilleures opportunités de carrière.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Candidats</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="hover:text-emerald-400">Toutes les offres</Link></li>
              <li><Link to="/candidate" className="hover:text-emerald-400">Créer mon CV</Link></li>
              <li><Link to="/conseils" className="hover:text-emerald-400">Conseils Carrière</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Recruteurs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/recruiter" className="hover:text-emerald-400">Publier une offre</Link></li>
              <li><Link to="/recruiter" className="hover:text-emerald-400">Base de données CV</Link></li>
              <li><Link to="/premium" className="hover:text-emerald-400">Solutions Premium</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="text-xl hover:text-emerald-400"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="text-xl hover:text-emerald-400"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-xl hover:text-emerald-400"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} ATLAS JOB. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
