import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { apiGetServiceBySlug, apiGetServices } from '@/lib/api';
import { ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = await apiGetServiceBySlug(slug);
  if (!clinic) return { title: 'Clinic Not Found' };
  return {
    title: `${clinic.title} | Swasti Specialty Outpatient Clinics`,
    description: clinic.shortDesc,
  };
}

export default async function ClinicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const clinic = await apiGetServiceBySlug(slug);

  if (!clinic || clinic.category !== 'CLINICS') {
    notFound();
  }

  const allClinics = await apiGetServices('CLINICS');

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">Specialty Clinics</span>
          <span>/</span>
          <span className="text-teal-700 dark:text-teal-400 font-bold">{clinic.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Specialty Outpatient Clinic
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {clinic.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {clinic.shortDesc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Co-Located Diagnostic Facilities</h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                  Patients have direct access to on-site Ultrasound, CT, 2D ECHO, automated blood pathology, and thyroid scintigraphy during their clinic visit.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About this Specialty Clinic</h2>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{clinic.fullDesc}</p>
              </div>
            </div>

            {clinic.prepTips && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">What to Bring to Your Consultation:</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{clinic.prepTips}</p>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Schedule an OPD Consultation</h4>
                <p className="text-xs text-slate-300">Consult with senior consultants with minimal waiting time.</p>
              </div>
              <a
                href={`https://wa.me/919400004455?text=Hello%20Swasti%20Clinics,%20I%20would%20like%20to%20book%20an%20OPD%20slot%20for%20${encodeURIComponent(clinic.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs shadow-md transition whitespace-nowrap"
              >
                Book OPD Slot via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                <span>Specialty Clinics</span>
                <span className="text-[10px] bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded font-bold">OPD Services</span>
              </h3>
              <ul className="space-y-2">
                {allClinics.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/clinics/${c.slug}`}
                      className={`block p-2.5 rounded-xl transition text-sm ${
                        c.slug === clinic.slug
                          ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400'
                      }`}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
