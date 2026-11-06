import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile | Swasti PET/CT Imaging & Nuclear Medicine',
  description: 'About Swasti PET/CT, a unit of Nucleuz Healthcare Private Limited in Thiruvananthapuram, Kerala.',
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Company Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About Swasti PET/CT &amp; Nucleuz Healthcare
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Welcome to Swasti PET/CT Imaging and Nuclear Medicine, a premier diagnostic and molecular oncology unit established under <strong>Nucleuz Healthcare Private Limited</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              Located in the medical corridor of Trivandrum (Medical College PO Junction, Ulloor), Swasti was conceived with a clear vision: to make world-class molecular imaging, early cancer detection, and targeted radionuclide theranostics accessible and affordable with uncompromising accuracy.
            </p>
            <p>
              We believe in <strong>&ldquo;Precision Imaging and Personalized Care&rdquo;</strong>. Nuclear Medicine requires not only high-end instrumentation but also specialized radio-pharmacological precision and patient safety. Our facility features an AERB-licensed radiopharmacy hot laboratory, lead-shielded therapy suites, and calibrated automated diagnostic equipment.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span><strong>Advanced Crystal Detectors:</strong> Reduced scan times and lower radiation dosage while providing micro-lesion detection.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span><strong>Multidisciplinary Care:</strong> Seamless integration of PET/CT with specialized clinics (General Medicine, Gastroenterology, Thyroid) and automated pathology lab.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span><strong>Targeted Theranostics:</strong> One of the few dedicated private centers in Kerala providing 131-I, 177-Lu PRRT/PSMA, and 225-Ac targeted alpha treatments.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about/md"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm transition"
              >
                Managing Director Message &rarr;
              </Link>
              <Link
                href="/about/doctors"
                className="px-5 py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-semibold text-sm transition"
              >
                View Doctors Directory &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-teal-300">Our Quality Standards</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  <span>Atomic Energy Regulatory Board (AERB) Approved</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-400" />
                  <span>NABL Quality Compliant Laboratory Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>Same-Day Digital Reporting for Oncology Scans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>SPARK Kerala Empaneled Scheme Assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
