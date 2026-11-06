import React from 'react';
import { apiGetSettings } from '@/lib/api';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Swasti PET/CT Imaging & Nuclear Medicine',
  description: 'Reach Swasti PET/CT at Sreelekshmi Building, Medical College PO Junction, Ulloor, Thiruvananthapuram. Phone, WhatsApp, and location map.',
};

export default async function ContactPage() {
  const setting = await apiGetSettings();

  const phone1 = setting?.phone1 || '+91 471 244 4455';
  const phone2 = setting?.phone2 || '+91 9400 00 4455';
  const email = setting?.email || 'info@swastipetct.com';
  const address = setting?.address || 'Sreelekshmi Building, Medical College P.O. Junction, Ulloor, Thiruvananthapuram, Kerala - 695011';
  const timing = setting?.timingHours || 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: On Appointment';

  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Reach Our Diagnostic Center
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Contact Swasti PET/CT
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
          Located prominently opposite CSB Bank, Medical College P.O. Junction, Ulloor, Trivandrum.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Center Address</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Telephone Helplines</h3>
                  <a href={`tel:${phone1.replace(/\s+/g, '')}`} className="text-sm text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 block font-mono mt-1">{phone1}</a>
                  <a href={`tel:${phone2.replace(/\s+/g, '')}`} className="text-sm text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 block font-mono">{phone2}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Email Inquiries</h3>
                  <a href={`mailto:${email}`} className="text-sm text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 block mt-1">{email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Working Hours</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{timing}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/919400004455?text=Hello%20Swasti%20Team,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm h-full flex flex-col">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Location Map &amp; Directions</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Opposite CSB Bank, Medical College P.O. Junction, Ulloor</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Swasti+PET+CT+Imaging+Ulloor+Trivandrum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
              <div className="flex-1 min-h-[360px] bg-slate-100 dark:bg-slate-950 relative">
                <iframe
                  title="Swasti PET/CT Location Map"
                  src="https://maps.google.com/maps?q=Swasti%20PET%20CT%20Ulloor%20Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 min-h-[360px]"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
