
import React, { useState } from 'react';
import { MOCK_ARTICLES } from '../constants';

const Tips: React.FC = () => {
  const [filter, setFilter] = useState<'Tout' | 'CV' | 'Entretien' | 'Formation'>('Tout');

  const filteredArticles = filter === 'Tout' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(a => a.category === filter);

  const sections = [
    { id: 'CV', label: 'Optimisation CV', icon: 'fa-file-lines', color: 'bg-blue-500' },
    { id: 'Entretien', label: 'Réussir l\'Entretien', icon: 'fa-comments', color: 'bg-emerald-500' },
    { id: 'Formation', label: 'E-Learning', icon: 'fa-graduation-cap', color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Centre de Conseils ATLAS JOB</h1>
        <p className="text-slate-600 text-lg">Boostez vos chances de recrutement avec nos guides experts adaptés au marché marocain.</p>
      </div>

      {/* Horizontal Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button 
          onClick={() => setFilter('Tout')}
          className={`px-8 py-3 rounded-full font-bold transition-all ${filter === 'Tout' ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-600 border hover:bg-slate-50'}`}
        >
          Tous les articles
        </button>
        {sections.map(s => (
          <button 
            key={s.id}
            onClick={() => setFilter(s.id as any)}
            className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${filter === s.id ? 'bg-emerald-600 text-white shadow-xl' : 'bg-white text-slate-600 border hover:bg-slate-50'}`}
          >
            <i className={`fa-solid ${s.icon}`}></i>
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <div key={article.id} className="bg-white rounded-3xl shadow-sm border overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div className="h-56 relative overflow-hidden">
              <img src={article.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={article.title} />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-emerald-600 uppercase shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-6 border-t mt-auto">
                <span className="text-xs text-slate-400"><i className="fa-regular fa-clock mr-1"></i> 5 min de lecture</span>
                <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
