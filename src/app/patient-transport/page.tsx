import React from 'react';
import { Truck, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Transport & Ambulance Assistance | Swasti PET/CT',
  description: 'Dedicated patient transfer, wheelchair support, and ambulance arrangements for scans and therapies in Trivandrum.',
};

export default function PatientTransportPage() {
  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Patient Mobility &amp; Transfer
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Patient Transport &amp; Shuttle Services
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          Ensuring frail, elderly, and post-chemotherapy patients have seamless, comfortable door-to-center transportation for diagnostic scans.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Wheelchair Accessible Transfer</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated non-emergency patient vehicles with ramp access and trained attendants to escort patients from nearby hospitals or residences.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Hospital Inter-Facility Coordination</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct transfers for inpatient referrals from Medical College Hospital, Regional Cancer Centre (RCC), and private hospitals across Trivandrum.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-teal-900/90 dark:bg-slate-800 border border-teal-700/50 dark:border-slate-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold">Need to Arrange Patient Transportation?</h4>
              <p className="text-xs text-teal-200">Contact our transport coordination team at least 1 day in advance.</p>
            </div>
            <a
              href="https://wa.me/919400004455?text=Hello%20Swasti,%20I%20would%20like%20to%20request%20patient%20transport%20for%20a%20scan%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold text-xs shadow transition whitespace-nowrap"
            >
              Request Transport via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
