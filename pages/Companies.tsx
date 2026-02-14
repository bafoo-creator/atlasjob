
import React from 'react';

const MOCK_COMPANIES = [
  { name: "Atlas Digital Solutions", sector: "Technologie", location: "Casablanca", logo: "https://picsum.photos/seed/tech1/100", openJobs: 12 },
  { name: "MediHub", sector: "Marketing", location: "Rabat", logo: "https://picsum.photos/seed/agency/100", openJobs: 4 },
  { name: "Maroc Telecom", sector: "Télécoms", location: "Rabat", logo: "https://picsum.photos/seed/telecom/100", openJobs: 25 },
  { name: "Attijariwafa Bank", sector: "Banque & Finance", location: "Casablanca", logo: "https://picsum.photos/seed/bank/100", openJobs: 18 },
  { name: "OCP Group", sector: "Industrie", location: "Casablanca", logo: "https://picsum.photos/seed/ind/100", openJobs: 30 },
  { name: "Oulmès", sector: "Agroalimentaire", location: "Bouskoura", logo: "https://picsum.photos/seed/water/100", openJobs: 7 },
];

const Companies: React.FC = () => {
  const sectors = ["Technologie", "Banque & Finance", "Industrie", "Marketing", "Santé"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Entreprises qui recrutent</h1>
          <p className="text-slate-600">Explorez les leaders du marché et trouvez votre prochain environnement de travail idéal au Maroc.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold shadow-sm">Top recruteurs</button>
          <button className="px-4 py-2 text-slate-500 font-bold">Par secteur</button>
        </div>
      </div>

      {/* Sector Pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {sectors.map(s => (
          <span key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 cursor-pointer hover:border-emerald-400 hover:text-emerald-600 transition-colors">
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COMPANIES.map((company, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 p-2 border flex items-center justify-center overflow-hidden">
                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
              </div>
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                {company.openJobs} Postes ouverts
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">{company.name}</h3>
            <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-xs"></i> {company.location} • {company.sector}
            </p>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors">
              Voir la page entreprise
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
