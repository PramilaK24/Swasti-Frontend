import React from 'react';
import { Briefcase, Mail, CheckCircle2, Building2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Swasti PET/CT & Nucleuz Healthcare',
  description: 'Join the medical imaging and nuclear medicine team at Swasti PET/CT, Trivandrum.',
};

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Nuclear Medicine Technologist',
      dept: 'PET/CT & Hot Lab',
      exp: '3+ Years',
      desc: 'Experience in radiopharmaceutical handling, patient cannula positioning, and high-resolution PET/CT acquisition.',
    },
    {
      title: 'Radiological Safety Officer (RSO Level II/III)',
      dept: 'Radiation Safety & Dosimetry',
      exp: 'BARC / AERB Certified',
      desc: 'Supervision of regulatory radiation protocols, dose management, and quality control of scanners.',
    },
    {
      title: 'Ultrasound & Cardiac Sonographer',
      dept: 'Radiology / Cardiology',
      exp: '2+ Years',
      desc: 'Expertise in color Doppler sonography, 2D ECHO image optimization, and clinical report preparation.',
    },
    {
      title: 'Front Desk & Patient Care Executive',
      dept: 'Administration & SPARK Desk',
      exp: '1-3 Years in Hospital/Diagnostics',
      desc: 'Assisting patient registrations, appointment scheduling, and insurance/SPARK documentation guidance.',
    },
  ];

  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Join Our Growing Team
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Careers at Swasti PET/CT
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          Be part of South Kerala&apos;s most advanced molecular imaging and theranostics center under Nucleuz Healthcare.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openings.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                    {job.dept}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{job.exp}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{job.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`mailto:careers@swastipetct.com?subject=Job Application: ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Resume to careers@swastipetct.com &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
