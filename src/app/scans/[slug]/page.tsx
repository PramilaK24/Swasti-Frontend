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
  const service = await apiGetServiceBySlug(slug);
  if (!service) return { title: 'Scan Not Found' };
  return {
    title: `${service.title} | Swasti PET/CT Diagnostic Imaging`,
    description: service.shortDesc,
  };
}

export default async function ScanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await apiGetServiceBySlug(slug);

  if (!service || service.category !== 'SCANS') {
    notFound();
  }

  const allScans = await apiGetServices('SCANS');
  const otherScans = allScans.filter((s) => s.slug !== slug);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">Diagnostic Scans</span>
          <span>/</span>
          <span className="text-teal-700 dark:text-teal-400 font-bold">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Diagnostic Scans &amp; Imaging
                </span>
                {service.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {service.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {service.shortDesc}
              </p>
            </div>

            {service.machineDetails && (
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Instrumentation Specification</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">{service.machineDetails}</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Clinical Overview</h2>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{service.fullDesc}</p>
                <p>
                  At Swasti, each scan protocol is tailored according to the referring clinical indication. Our certified radiological safety officers and medical physicists ensure that all scans adhere to ALARA radiation principles while yielding high-contrast diagnostic resolution.
                </p>
              </div>
            </div>

            {service.prepTips && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-amber-200/80 dark:border-amber-900/50 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span>Important Patient Preparation Instructions</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{service.prepTips}</p>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Ready to Schedule this Scan?</h4>
                <p className="text-xs text-slate-300">Slots available daily with fast digital reporting.</p>
              </div>
              <a
                href={`https://wa.me/919400004455?text=Hello%20Swasti%20PET/CT,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs shadow-md transition whitespace-nowrap"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                All Diagnostic Scans
              </h3>
              <ul className="space-y-2">
                {otherScans.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/scans/${s.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition text-sm"
                    >
                      <span>{s.title}</span>
                      {s.badge && (
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                          {s.badge}
                        </span>
                      )}
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
