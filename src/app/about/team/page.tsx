import React from 'react';
import Link from 'next/link';
import { Users, Shield, Award, Stethoscope, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clinical Team & Technologists | Swasti PET/CT',
  description: 'Meet the clinical technologists, radiological safety officers, and patient care staff at Swasti PET/CT.',
};

export default function TeamPage() {
  const staffCategories = [
    {
      title: 'Radiological Safety Officers (RSO) & Medical Physicists',
      desc: 'Certified by BARC & AERB to ensure absolute radiation dosimetry precision, daily quality assurance calibration, and patient safety protocols.',
      count: '3 Certified Physicists',
    },
    {
      title: 'Nuclear Medicine & CT Technologists',
      desc: 'Expertly trained in high-speed volume acquisition, low-dose protocols, radiotracer administration, and patient comfort positioning.',
      count: '8 Senior Technologists',
    },
    {
      title: 'Cardiac & Sonography Technicians',
      desc: 'Dedicated professionals handling 2D ECHO recordings, Doppler flow analysis, and diagnostic 12-lead electrocardiography.',
      count: '4 Specialized Technicians',
    },
    {
      title: 'Clinical Nurses & Patient Care Coordinators',
      desc: 'Compassionate nursing staff assisting patients during PET/CT preparation, cannula placements, glucose monitoring, and post-scan recovery.',
      count: '10 Patient Coordinators',
    },
  ];

  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Clinical Staff &amp; Physicists
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Our Multidisciplinary Care Team
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
          Behind every precise diagnostic scan and successful radionuclide therapy is a dedicated team of medical physicists, certified technologists, and caring nursing staff.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staffCategories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                  {cat.count}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-slate-100 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Looking for Our Specialist Doctors?</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto mb-4">
            Consult with our consultant nuclear physicians, radiologists, cardiologists, and gastroenterologists.
          </p>
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition"
          >
            <span>View Specialist Doctors Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
