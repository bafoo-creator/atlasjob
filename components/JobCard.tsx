
import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className={`p-6 rounded-xl border transition-all hover:shadow-lg bg-white ${job.isPremium ? 'border-emerald-500 bg-emerald-50/20' : 'border-slate-200'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          {job.isPremium && (
            <span className="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase mb-2">
              <i className="fa-solid fa-star mr-1"></i> Premium
            </span>
          )}
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-emerald-600 font-semibold">{job.company}</p>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-600">
          {job.type}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-3 mb-6">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <i className="fa-solid fa-location-dot"></i>
          {job.location}
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <i className="fa-solid fa-money-bill"></i>
          {job.salary}
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <i className="fa-solid fa-clock"></i>
          {job.postedAt}
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <i className="fa-solid fa-tag"></i>
          {job.category}
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => onApply(job)}
          className="flex-1 bg-emerald-600 text-white font-bold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors active:scale-95"
        >
          Postuler en 1 clic
        </button>
        <button className="px-4 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
