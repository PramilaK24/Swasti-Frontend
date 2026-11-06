import React from 'react';
import { apiGetLabTests } from '@/lib/api';
import { FlaskConical, HeartPulse, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clinical Laboratory & 12-Lead ECG Diagnostics | Swasti PET/CT',
  description: 'Automated pathology blood tests, complete hemogram, liver/kidney profiles, thyroid panels, tumor markers, and 12-lead ECG in Ulloor, Trivandrum.',
};

export default async function LabPage() {
  const labTests = await apiGetLabTests();

  const bloodTests = labTests.filter((t) => t.category === 'BLOOD_TEST');
  const oncoMarkers = labTests.filter((t) => t.category === 'ONCO_MARKER');
  const ecgTests = labTests.filter((t) => t.category === 'ECG');

  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>Clinical Laboratory &amp; Diagnostic ECG</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Diagnostic Pathology &amp; Cardiology ECG
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Automated clinical biochemistry, hematology, specialized onco-markers, and digital 12-lead ECG with same-day digital reporting in Trivandrum.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">NABL Quality Compliant</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Automated 5-part hematology and dry-chemistry analyzers.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-3">
            <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Fast Turnaround Time</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Most routine blood tests delivered online within 2 to 4 hours.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Pre-Scan Baseline Tests</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Instant Serum Creatinine for contrast CT &amp; ECG for chemo safety.</p>
            </div>
          </div>
        </div>

        {/* 1. Blood Tests Section */}
        <div id="blood-tests" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Blood Tests &amp; Clinical Pathology</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                NABL Compliant
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloodTests.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">{t.code}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      t.fastingRequired ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {t.fastingRequired ? 'Fasting Required' : 'No Fasting'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{t.name}</h3>
                  <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <p><strong>Sample Type:</strong> {t.sampleType}</p>
                    <p><strong>Report TAT:</strong> {t.reportTime}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.price ? `₹${t.price}` : 'Contact for Price'}
                  </span>
                  <a
                    href={`https://wa.me/919400004455?text=Hello%20Swasti%20Lab,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(t.name)}%20test.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                  >
                    Book Test &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Onco-Markers */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Specialized Tumor &amp; Endocrine Markers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oncoMarkers.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">{t.code}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">
                      Oncology Marker
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{t.name}</h3>
                  <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <p><strong>Sample Type:</strong> {t.sampleType}</p>
                    <p><strong>Report TAT:</strong> {t.reportTime}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.price ? `₹${t.price}` : 'Contact Desk'}
                  </span>
                  <a
                    href={`https://wa.me/919400004455?text=Hello%20Swasti%20Lab,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(t.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                  >
                    Book Test &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ECG Section */}
        <div id="ecg" className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <HeartPulse className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">12-Lead Diagnostic ECG</h2>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              Cardiology Screening
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-3 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full">
                Cardiac Diagnostics Suite
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">12-Lead Microprocessor Digital Electrocardiography</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Standard diagnostic 12-lead ECG is conducted by trained medical technicians for instant evaluation of cardiac rhythm, ischemia, conduction blocks, and pre-chemotherapy baseline clearance.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div><strong>Procedure Time:</strong> 10 Minutes</div>
                <div><strong>Report Availability:</strong> Immediate</div>
                <div><strong>Fasting:</strong> None required</div>
                <div><strong>Fee:</strong> ₹250 (Inclusive of review)</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919400004455?text=Hello%20Swasti%20Lab,%20I%20would%20like%20to%20book%20a%2012-lead%20ECG%20slot."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition"
              >
                Book ECG Test Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
