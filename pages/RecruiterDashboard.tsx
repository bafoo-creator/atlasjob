
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Lun', views: 400 },
  { name: 'Mar', views: 300 },
  { name: 'Mer', views: 200 },
  { name: 'Jeu', views: 278 },
  { name: 'Ven', views: 189 },
  { name: 'Sam', views: 239 },
  { name: 'Dim', views: 349 },
];

const RecruiterDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Espace Entreprise</h1>
          <p className="text-slate-500">Bienvenue, Digital Agency Morocco</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> Publier une offre
        </button>
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <i className="fa-solid fa-chart-line text-emerald-600"></i>
            Vues de vos offres cette semaine
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="views" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#10b981' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Premium Upgrade Card */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10">
            <i className="fa-solid fa-crown text-[10rem] -mr-10 -mt-10 rotate-12"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4 relative">Passez au Premium</h3>
          <p className="text-slate-400 text-sm mb-6 relative">Boostez la visibilité de vos offres et accédez à notre base de données de 150 000+ candidats qualifiés.</p>
          <ul className="space-y-3 mb-8 relative">
            {[
              "Affichage en haut de liste",
              "Badge Certifié Entreprise",
              "Accès illimité aux CV",
              "Support prioritaire 24/7"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-circle-check text-emerald-400"></i>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 relative">
            Voir les tarifs
          </button>
        </div>
      </div>

      {/* Active Jobs */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="p-8 border-b flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Mes Offres Actives</h3>
          <div className="flex gap-2">
            <button className="p-2 border rounded-lg text-slate-400"><i className="fa-solid fa-filter"></i></button>
            <button className="p-2 border rounded-lg text-slate-400"><i className="fa-solid fa-download"></i></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr className="text-left text-xs font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-8 py-4">Titre de l'offre</th>
                <th className="px-8 py-4">Candidats</th>
                <th className="px-8 py-4">Date de publication</th>
                <th className="px-8 py-4">Statut</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { title: 'Développeur Fullstack', count: 42, date: '12 Oct 2023', status: 'En ligne', isNew: true },
                { title: 'Social Media Manager', count: 128, date: '05 Oct 2023', status: 'En ligne', isNew: false },
                { title: 'Assistant de Direction', count: 85, date: '28 Sep 2023', status: 'Archivé', isNew: false },
              ].map((job, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">
                        {job.title[0]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{job.title}</div>
                        {job.isNew && <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold uppercase">Nouveaux profils</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-600">{job.count} candidats</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{job.date}</td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${job.status === 'En ligne' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-slate-400 hover:text-emerald-600 font-bold text-sm px-3 py-1 border rounded-lg hover:border-emerald-200 transition-all">Gérer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
