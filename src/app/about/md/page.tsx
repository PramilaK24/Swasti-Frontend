import React from 'react';
import Link from 'next/link';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managing Director | Swasti PET/CT & Nucleuz Healthcare',
  description: 'Leadership message from the Managing Director of Swasti PET/CT and Nucleuz Healthcare.',
};

export default function ManagingDirectorPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
            Leadership Perspective
          </span>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            From the Managing Director&apos;s Desk
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Guiding South Kerala toward precision molecular oncology and empathetic healthcare.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden transition-colors duration-200">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-teal-500/10 pointer-events-none" />

          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base relative z-10">
            <p className="text-lg font-medium text-slate-900 dark:text-white italic">
              &ldquo;In modern cancer care, timing and diagnostic precision make all the difference. When patients and their families come to us, they deserve absolute clarity, minimal waiting times, and heartfelt human compassion.&rdquo;
            </p>

            <p>
              When we founded <strong>Swasti PET/CT Imaging and Nuclear Medicine</strong> under Nucleuz Healthcare, our goal was to elevate diagnostic nuclear medicine standards in Kerala to match premier global centers. We invested in ultra-sensitive detector technologies, assembled a cadre of respected clinicians, and established sterile, safe radiopharmacy isolation units for targeted therapies.
            </p>

            <p>
              As we expand our spectrum of services—introducing daily <strong>Ultrasound, 2D ECHO, dedicated General Medicine &amp; Gastroenterology Clinics, an automated pathology lab, and breakthrough 225-Ac Alpha Therapies</strong>—our commitment remains steadfast: every patient receives accurate, uncompromised reports with same-day efficiency.
            </p>

            <p>
              We express our sincere gratitude to the medical fraternity of oncologists, surgeons, and physicians across Kerala for their unwavering trust in Swasti.
            </p>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Managing Director</h4>
                <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold">Swasti PET/CT &bull; Nucleuz Healthcare Pvt. Ltd.</p>
              </div>

              <Link
                href="/about/doctors"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition self-start sm:self-auto"
              >
                <span>Meet Our Specialist Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
