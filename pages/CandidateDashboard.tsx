
import React, { useState, useEffect } from 'react';
import { ApplicationStatus } from '../types';
import { optimizeCVText } from '../services/geminiService';

const CandidateDashboard: React.FC = () => {
  const [cvText, setCvText] = useState("Expérience en développement React pendant 3 ans chez une startup locale.");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimized, setOptimized] = useState("");

  const handleOptimize = async () => {
    setIsOptimizing(true);
    try {
      const result = await optimizeCVText(cvText);
      setOptimized(result);
    } catch (e) {
      alert("Erreur lors de l'optimisation IA");
    } finally {
      setIsOptimizing(false);
    }
  };

  const applications = [
    { id: '1', job: 'Développeur React', company: 'Atlas Digital', date: '12/10/2023', status: ApplicationStatus.SENT },
    { id: '2', job: 'UI Designer', company: 'MediHub', date: '08/10/2023', status: ApplicationStatus.VIEWED },
    { id: '3', job: 'Lead Dev', company: 'Maroc Telecom', date: '01/10/2023', status: ApplicationStatus.REJECTED },
  ];

  const getStatusColor = (status: ApplicationStatus) => {
    switch(status) {
      case ApplicationStatus.SENT: return 'bg-blue-100 text-blue-700';
      case ApplicationStatus.VIEWED: return 'bg-amber-100 text-amber-700';
      case ApplicationStatus.ACCEPTED: return 'bg-emerald-100 text-emerald-700';
      case ApplicationStatus.REJECTED: return 'bg-rose-100 text-rose-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar: Profile Summary */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-8 rounded-3xl border shadow-sm text-center">
          <div className="relative inline-block mb-4">
            <img src="https://picsum.photos/seed/user/150" className="w-24 h-24 rounded-full mx-auto ring-4 ring-emerald-500/20" alt="Avatar" />
            <button className="absolute bottom-0 right-0 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
              <i className="fa-solid fa-camera text-xs"></i>
            </button>
          </div>
          <h2 className="text-xl font-bold text-slate-800">Ahmed Benali</h2>
          <p className="text-slate-500 text-sm">Développeur Frontend Senior</p>
          <p className="text-xs text-slate-400 mt-1">Casablanca, Maroc</p>
          
          <div className="mt-8 flex flex-col gap-2">
            <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all">Télécharger mon CV</button>
            <button className="w-full border border-slate-200 text-slate-600 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all">Modifier le profil</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Mes Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind", "Node.js", "Figma", "Agile"].map(s => (
              <span key={s} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        {/* AI CV Section */}
        <section className="bg-white p-8 rounded-3xl border shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <i className="fa-solid fa-wand-magic-sparkles text-8xl text-emerald-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Optimisation CV par IA</h2>
          <p className="text-slate-500 mb-6 text-sm">Notre IA analyse votre texte pour l'adapter aux recruteurs marocains.</p>
          
          <textarea 
            className="w-full border rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none h-32"
            value={cvText}
            onChange={(e) => setCvText(e.target.value)}
            placeholder="Décrivez votre expérience brièvement..."
          />
          
          <button 
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="mt-4 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:bg-slate-300 flex items-center gap-2"
          >
            {isOptimizing ? (
              <i className="fa-solid fa-spinner animate-spin"></i>
            ) : (
              <i className="fa-solid fa-bolt"></i>
            )}
            {isOptimizing ? 'Analyse en cours...' : 'Optimiser mon texte'}
          </button>

          {optimized && (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <h4 className="text-emerald-800 font-bold text-sm mb-2">Version Optimisée :</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{optimized}</p>
            </div>
          )}
        </section>

        {/* Applications Track */}
        <section className="bg-white p-8 rounded-3xl border shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Suivi des candidatures</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b">
                  <th className="pb-4 font-medium">Poste / Entreprise</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Statut</th>
                  <th className="pb-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {applications.map(app => (
                  <tr key={app.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4">
                      <div className="font-bold text-slate-800">{app.job}</div>
                      <div className="text-xs text-slate-500">{app.company}</div>
                    </td>
                    <td className="py-4 text-sm text-slate-600">{app.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-emerald-600"><i className="fa-solid fa-eye"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CandidateDashboard;
