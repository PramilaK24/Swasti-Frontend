'use client';

import React, { useState, useEffect } from 'react';
import {
  Save,
  CheckCircle2,
  AlertCircle,
  Eye,
  Megaphone,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    siteName: '',
    tagline: '',
    announcementBar: '',
    showAnnouncement: true,
    phone1: '',
    phone2: '',
    whatsappNumber: '',
    email: '',
    address: '',
    timingHours: '',
    heroTitle: '',
    heroSubtitle: '',
    heroBadge: '',
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFormData({
            siteName: data.siteName || '',
            tagline: data.tagline || '',
            announcementBar: data.announcementBar || '',
            showAnnouncement: data.showAnnouncement ?? true,
            phone1: data.phone1 || '',
            phone2: data.phone2 || '',
            whatsappNumber: data.whatsappNumber || '',
            email: data.email || '',
            address: data.address || '',
            timingHours: data.timingHours || '',
            heroTitle: data.heroTitle || '',
            heroSubtitle: data.heroSubtitle || '',
            heroBadge: data.heroBadge || '',
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load current settings from backend.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    setError('');

    const token = typeof window !== 'undefined' ? localStorage.getItem('swasti_admin_token') : null;

    try {
      const res = await fetch(`${API_BASE_URL}/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to update settings');
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Error saving settings');
      } else {
        setError('Error saving settings');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20 text-slate-500 dark:text-slate-400 text-sm">
        Loading template settings from API...
      </div>
    );
  }

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-colors";

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Template Customizer</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Live updates directly communicated to Express Backend API.
          </p>
        </div>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Preview Public Site</span>
        </a>
      </div>

      {success && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span><strong>Success!</strong> Website template settings have been updated and are live across the app.</span>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3 text-red-800 dark:text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Announcement Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
              <Megaphone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h3>Top Announcement Ticker</h3>
            </div>
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                checked={formData.showAnnouncement}
                onChange={(e) => setFormData({ ...formData, showAnnouncement: e.target.checked })}
                className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
              />
              <span>Show on Public Site</span>
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Announcement Message
            </label>
            <input
              type="text"
              value={formData.announcementBar}
              onChange={(e) => setFormData({ ...formData, announcementBar: e.target.value })}
              className={inputClass}
              placeholder="e.g. Now offering Advanced 177-Lu and 225-Ac Theranostics..."
            />
          </div>
        </div>

        {/* Section 2: Hero Banner Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
            <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3>Hero Banner &amp; Tagline Content</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Hero Badge / Accreditation Pill
              </label>
              <input
                type="text"
                value={formData.heroBadge}
                onChange={(e) => setFormData({ ...formData, heroBadge: e.target.value })}
                className={inputClass}
                placeholder="AERB & NABL Quality Compliant Facility"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Hero Main Headline (Use &amp; to split highlighted gradient)
              </label>
              <input
                type="text"
                value={formData.heroTitle}
                onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                className={`${inputClass} font-semibold`}
                placeholder="Precision Imaging & Advanced Theranostics"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Hero Subtitle / Value Proposition
              </label>
              <textarea
                rows={3}
                value={formData.heroSubtitle}
                onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                className={inputClass}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Section 3: Contact & Helplines */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
            <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3>Contact Helplines &amp; WhatsApp Integration</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Primary Landline Phone
              </label>
              <input
                type="text"
                value={formData.phone1}
                onChange={(e) => setFormData({ ...formData, phone1: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Mobile / Emergency Scan Helpline
              </label>
              <input
                type="text"
                value={formData.phone2}
                onChange={(e) => setFormData({ ...formData, phone2: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                WhatsApp Chat Number
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Official Inquiries Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Address & Timings */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
            <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
            <h3>Center Location &amp; Operational Timings</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Full Physical Address
              </label>
              <textarea
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className={inputClass}
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Working Hours Ticker
              </label>
              <input
                type="text"
                value={formData.timingHours}
                onChange={(e) => setFormData({ ...formData, timingHours: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={saving}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-sm shadow-xl shadow-teal-600/25 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Publishing Changes...' : 'Save & Publish Template Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
