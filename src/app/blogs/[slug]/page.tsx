import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { apiGetArticleBySlug } from '@/lib/api';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await apiGetArticleBySlug(slug);
  if (!blog) return { title: 'Article Not Found' };
  return {
    title: `${blog.title} | Swasti Medical Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await apiGetArticleBySlug(slug);

  if (!blog || blog.type !== 'BLOG') {
    notFound();
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Blogs &amp; Guides</span>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              {blog.author}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              {new Date(blog.createdAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-teal-500 pl-4 py-1">
            {blog.excerpt}
          </p>
        </div>

        {blog.coverImage && (
          <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-6 pt-4">
          <p>{blog.content}</p>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Published by Swasti Medical Editorial Board</span>
          <a
            href="https://wa.me/919400004455?text=Hello%20Swasti,%20I%20have%20a%20question%20regarding%20scan%20prep."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition"
          >
            Have a Question? Chat With Us
          </a>
        </div>
      </div>
    </div>
  );
}
