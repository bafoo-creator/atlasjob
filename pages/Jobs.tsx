
import React, { useState } from 'react';
import { MOCK_JOBS, CATEGORIES } from '../constants';
import JobCard from '../components/JobCard';
import { Job } from '../types';

const Jobs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredJobs = activeCategory 
    ? MOCK_JOBS.filter(j => j.category === activeCategory)
    : MOCK_JOBS;

  const handleApply = (job: Job) => {
    if (job.title === "Comptable Senior") {
      window.open("https://forms.gle/R24tmXMxtK81UKka8", "_blank");
    } else {
      alert(`Candidature envoyée pour : ${job.title} chez ${job.company}`);
    }
  };

  const getIcon = (cat: string) => {
    switch(cat) {
      case "Informatique": return "fa-code";
      case "Marketing": return "fa-bullhorn";
      case "RH": return "fa-user-tie";
      case "Comptabilité & Finance": return "fa-calculator";
      default: return "fa-briefcase";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Explorer les Offres</h1>
        <p className="text-slate-600">Découvrez des opportunités ciblées dans votre domaine d'expertise au Maroc.</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <button 
          onClick={() => setActiveCategory(null)}
          className={`p-6 rounded-2xl border transition-all text-center ${!activeCategory ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}
        >
          <i className="fa-solid fa-layer-group text-2xl mb-3 block"></i>
          <span className="font-bold">Tout voir</span>
        </button>
        {CATEGORIES.slice(0, 3).map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`p-6 rounded-2xl border transition-all text-center ${activeCategory === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}
          >
            <i className={`fa-solid ${getIcon(cat)} text-2xl mb-3 block`}></i>
            <span className="font-bold">{cat}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed">
            <i className="fa-solid fa-magnifying-glass text-4xl text-slate-200 mb-4"></i>
            <p className="text-slate-500">Aucune offre trouvée dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
