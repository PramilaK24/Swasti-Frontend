import React from 'react';
import Link from 'next/link';
import { getCurrentAdmin } from '@/lib/auth';
import ThemeToggle from '@/components/ThemeToggle';
import {
  LayoutDashboard,
  Settings,
  Calendar,
  Activity,
  Users,
  ExternalLink,
  LogOut,
  Shield,
} from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 flex flex-col justify-between p-4 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 shadow-sm md:shadow-none">
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2 py-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md shadow-teal-600/20">
                S
              </div>
              <div>
                <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Swasti Super Admin</h2>
                <p className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Nucleuz Healthcare CMS</p>
              </div>
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
            >
              <LayoutDashboard className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Overview</span>
            </Link>

            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/20 transition"
            >
              <Settings className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Template Settings</span>
            </Link>

            <Link
              href="/admin/appointments"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
            >
              <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Appointments Inbox</span>
            </Link>

            <Link
              href="/admin/services"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
            >
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Services (Scans/Clinics)</span>
            </Link>

            <Link
              href="/admin/doctors"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
            >
              <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Doctors Directory</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2">
          {/* Theme switcher control in desktop sidebar */}
          <div className="hidden md:flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span>Theme Mode</span>
            <ThemeToggle />
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <span>View Public Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        {children}
      </main>
    </div>
  );
}
