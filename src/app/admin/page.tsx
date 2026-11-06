import React from 'react';
import Link from 'next/link';
import {
  apiGetAppointments,
  apiGetServices,
  apiGetDoctors,
  apiGetSettings,
} from '@/lib/api';
import {
  Calendar,
  Activity,
  Users,
  Settings,
} from 'lucide-react';

export const revalidate = 0; // Fresh admin data

export default async function AdminOverviewPage() {
  const [appointments, services, doctors, setting] = await Promise.all([
    apiGetAppointments(),
    apiGetServices(),
    apiGetDoctors(),
    apiGetSettings(),
  ]);

  const pendingAppointments = appointments.filter((a) => a.status === 'PENDING').length;

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Super Admin Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Welcome back. Connected to Express REST API on port 5000.
          </p>
        </div>

        <Link
          href="/admin/settings"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition self-start sm:self-auto"
        >
          <Settings className="w-4 h-4" />
          <span>Edit Website Template &amp; Banners</span>
        </Link>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Total Bookings</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{appointments.length}</h3>
            <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-1 inline-block">
              {pendingAppointments} Pending Review
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Active Services</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{services.length}</h3>
            <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 mt-1 inline-block">
              Scans, Clinics &amp; Therapies
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Doctor Specialists</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{doctors.length}</h3>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1 inline-block">
              Active in Directory
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Announcement Bar</p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
              {setting?.showAnnouncement ? 'Active' : 'Disabled'}
            </h3>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[140px] block mt-1">
              {setting?.announcementBar?.slice(0, 24)}...
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Settings className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Patient Booking Inquiries</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Live requests submitted via Express REST API</p>
          </div>
          <Link
            href="/admin/appointments"
            className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
          >
            View All Bookings &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
            <thead className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/60 border-y border-slate-100 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4">Patient</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Preferred Date</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 dark:text-slate-500 text-sm">
                    No appointments received yet. Test by submitting one from the homepage!
                  </td>
                </tr>
              ) : (
                appointments.slice(0, 5).map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{a.patientName}</td>
                    <td className="py-3.5 px-4 font-medium text-teal-700 dark:text-teal-400">{a.serviceName}</td>
                    <td className="py-3.5 px-4 text-xs font-mono text-slate-600 dark:text-slate-400">{a.preferredDate}</td>
                    <td className="py-3.5 px-4 text-xs font-mono text-slate-600 dark:text-slate-400">{a.phone}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          a.status === 'CONFIRMED'
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : a.status === 'COMPLETED'
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
