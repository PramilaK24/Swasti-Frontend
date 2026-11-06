import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { apiGetServiceBySlug, apiGetServices } from '@/lib/api';
import { ShieldCheck, Clock } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const therapy = await apiGetServiceBySlug(slug);
  if (!therapy) return { title: 'Therapy Protocol Not Found' };
  return {
    title: `${therapy.title} | Swasti Targeted Radionuclide Theranostics`,
    description: therapy.shortDesc,
  };
}

export default async function TherapyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const therapy = await apiGetServiceBySlug(slug);

  if (!therapy || therapy.category !== 'THERAPY') {
    notFound();
  }

  const allTherapies = await apiGetServices('THERAPY');

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">Targeted Radionuclide Therapy</span>
          <span>/</span>
          <span className="text-teal-700 dark:text-teal-400 font-bold">{therapy.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Targeted Theranostics &amp; Radionuclide Therapy
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  AERB Licensed
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {therapy.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {therapy.shortDesc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dedicated Radiation Safety &amp; Isolation Suites</h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                  Administered in lead-shielded rooms equipped with dedicated patient facilities, individual waste decay tanks, and continuous radiation dosimetry monitoring supervised by certified RSOs.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Protocol &amp; Mechanism of Action</h2>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{therapy.fullDesc}</p>
              </div>
            </div>

            {therapy.prepTips && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span>Clinical Prerequisites &amp; Eligibility:</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{therapy.prepTips}</p>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Inquire about Theranostics Treatment</h4>
                <p className="text-xs text-slate-300">Speak directly with our nuclear medicine clinical coordinator.</p>
              </div>
              <a
                href={`https://wa.me/919400004455?text=Hello%20Swasti%20Therapy,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(therapy.title)}%20protocol.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs shadow-md transition whitespace-nowrap"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                <span>All Radionuclide Therapies</span>
                <span className="text-[10px] bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded font-bold">AERB Approved</span>
              </h3>
              <ul className="space-y-2">
                {allTherapies.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/therapy/${t.slug}`}
                      className={`block p-2.5 rounded-xl transition text-sm ${
                        t.slug === therapy.slug
                          ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400'
                      }`}
                    >
                      {t.title}
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
