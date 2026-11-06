import React from 'react';
import Link from 'next/link';
import { apiGetArticles } from '@/lib/api';
import { Calendar, ArrowRight, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Blog & Patient Diagnostic Guides | Swasti PET/CT',
  description: 'Informative articles on PET/CT preparation, nuclear theranostics, thyroid health, and modern imaging advancements.',
};

export default async function BlogsPage() {
  const blogs = await apiGetArticles('BLOG');

  return (
    <div className="py-12 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>Medical Blogs &amp; Patient Prep Guides</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Patient Knowledge &amp; Diagnostic Insights
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
          Clear, doctor-reviewed medical articles explaining scan protocols, fasting instructions, and innovations in targeted cancer care.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={b.coverImage || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80'}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                    Medical Guide
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      {b.author}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      {new Date(b.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {b.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{b.excerpt}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4">
                <Link
                  href={`/blogs/${b.slug}`}
                  className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm hover:text-teal-800 dark:hover:text-teal-300 pt-4"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
