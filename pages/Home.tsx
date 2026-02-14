
import React, { useState } from 'react';
import { MOCK_JOBS, CITIES, MOCK_ARTICLES } from '../constants';
import JobCard from '../components/JobCard';
import { Job } from '../types';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleApply = (job: Job) => {
    if (job.title === "Comptable Senior") {
      window.open("https://forms.gle/R24tmXMxtK81UKka8", "_blank");
    } else {
      alert(`Candidature envoyée pour : ${job.title} chez ${job.company}`);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Trouvez le job de vos rêves <br/> <span className="text-emerald-400">partout au Maroc</span>
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Plus de 5 000 offres d'emploi mises à jour quotidiennement dans tous les secteurs.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="text" 
                placeholder="Métier, compétences, entreprise..."
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none text-slate-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64 relative border-l border-slate-100">
              <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <select 
                className="w-full pl-12 pr-4 py-4 rounded-xl appearance-none focus:outline-none text-slate-800"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Toutes les villes</option>
                {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all text-lg shadow-lg">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Offres actives", val: "5,420+", icon: "fa-briefcase" },
            { label: "Entreprises", val: "1,200+", icon: "fa-building" },
            { label: "Candidats", val: "150k+", icon: "fa-users" },
            { label: "Recrutements/mois", val: "850+", icon: "fa-handshake" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`fa-solid ${stat.icon} text-xl`}></i>
              </div>
              <div className="text-2xl font-bold text-slate-800">{stat.val}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Dernières Offres</h2>
            <p className="text-slate-500">Postulez aux opportunités les plus récentes</p>
          </div>
          <button className="text-emerald-600 font-bold hover:underline">
            Voir tout <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_JOBS.map(job => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))}
        </div>
      </section>

      {/* Features for Candidates/Recruiters */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">Accélérez votre carrière avec ATLAS JOB</h2>
            <ul className="space-y-4">
              {[
                "Créez votre CV professionnel en quelques minutes",
                "Recevez des offres personnalisées par IA",
                "Postulez directement depuis votre mobile",
                "Suivez l'état de vos candidatures en temps réel"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-[10px]"></i>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Créer un profil</button>
              <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">En savoir plus</button>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/office/600/400" className="rounded-3xl shadow-2xl" alt="Office Work" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <i className="fa-solid fa-trophy text-xl"></i>
              </div>
              <div>
                <div className="font-bold text-slate-800">Top Plateforme 2024</div>
                <div className="text-xs text-slate-500">Élu meilleur site d'emploi au Maroc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Articles */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Conseils & Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map(article => (
            <div key={article.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-all group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={article.title} />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{article.category}</span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 leading-snug">{article.title}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <button className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Lire l'article <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
