import React from 'react';
import { apiGetArticles } from '@/lib/api';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospital Events, CMEs & Awareness Camps | Swasti PET/CT',
  description: 'Upcoming academic symposiums, continuous medical education conferences, and community health camps organized by Swasti PET/CT, Trivandrum.',
};

export default async function EventsPage() {
  const events = await apiGetArticles('EVENT');

  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>Events &amp; Medical CME</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Events &amp; Clinical Symposiums
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
          Fostering clinical knowledge exchange among oncologists, radiologists, and clinicians across South India.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 relative">
              <img
                src={evt.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80'}
                alt={evt.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                CME Program
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-teal-700 dark:text-teal-300">
                <span className="flex items-center gap-1.5 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                  <Calendar className="w-3.5 h-3.5" />
                  {evt.eventDate ? new Date(evt.eventDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Upcoming Date'}
                </span>
                {evt.location && (
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    {evt.location}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{evt.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{evt.excerpt}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">{evt.content}</p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/919400004455?text=Hello%20Swasti,%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(evt.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow transition"
                >
                  <span>Register for Event via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
