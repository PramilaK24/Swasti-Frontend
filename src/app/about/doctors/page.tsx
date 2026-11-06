import React from 'react';
import { apiGetDoctors } from '@/lib/api';
import { Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Specialist Doctors & Consultants | Swasti PET/CT',
  description: 'Meet our team of clinical directors, nuclear medicine physicians, radiologists, cardiologists, and internists at Swasti PET/CT, Trivandrum.',
};

export default async function DoctorsPage() {
  const doctors = await apiGetDoctors();

  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>Specialists &amp; Consultants Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Our Doctors &amp; Specialists
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Led by senior medical practitioners and nuclear medicine pioneers dedicated to precision diagnosis and compassionate patient care in Thiruvananthapuram.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all flex flex-col sm:flex-row gap-6"
            >
              <div className="w-full sm:w-44 h-56 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 relative">
                <img
                  src={doc.photo || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80'}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 mb-1">
                    {doc.department}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{doc.name}</h3>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">{doc.designation}</p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">{doc.qualification}</p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {doc.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span><strong>OPD Schedule:</strong> {doc.consultationHours}</span>
                  </div>

                  <a
                    href="https://wa.me/919400004455?text=Hello%20Swasti%20PET/CT,%20I%20would%20like%20to%20book%20a%20doctor%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition"
                  >
                    Book Consultation with {doc.name.split(',')[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
