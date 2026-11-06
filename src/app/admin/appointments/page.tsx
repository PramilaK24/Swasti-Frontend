'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, MessageCircle } from 'lucide-react';
import { API_BASE_URL, Appointment } from '@/lib/api';

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchAppointments = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('swasti_admin_token') : null;

    fetch(`${API_BASE_URL}/appointments`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setAppointments(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    const token = typeof window !== 'undefined' ? localStorage.getItem('swasti_admin_token') : null;

    try {
      const res = await fetch(`${API_BASE_URL}/appointments/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Appointments &amp; Patient Inquiries</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Review patient scan and clinic booking leads received via the Express API server.
        </p>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-400 dark:text-slate-500 text-sm">Loading appointments from backend...</div>
      ) : appointments.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800">
          <Calendar className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Patient Appointments Yet</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
            When patients schedule a PET/CT, scan, or consultation on the public website, their bookings will appear here in real time.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{appt.patientName}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {appt.serviceName}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      appt.status === 'CONFIRMED'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : appt.status === 'COMPLETED'
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                        : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{appt.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{appt.preferredDate} ({appt.preferredTime})</span>
                  </div>
                  {appt.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>{appt.email}</span>
                    </div>
                  )}
                </div>

                {appt.notes && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 mt-2">
                    <strong className="text-slate-800 dark:text-slate-200">Patient Note:</strong> {appt.notes}
                  </p>
                )}
              </div>

              {/* Action Controls */}
              <div className="flex flex-wrap md:flex-col items-center gap-2 flex-shrink-0">
                <a
                  href={`https://wa.me/${appt.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(appt.patientName)},%20this%20is%20Swasti%20PET/CT%20confirming%20your%20appointment%20for%20${encodeURIComponent(appt.serviceName)}%20on%20${encodeURIComponent(appt.preferredDate)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Patient</span>
                </a>

                <select
                  disabled={updatingId === appt.id}
                  value={appt.status}
                  onChange={(e) => handleStatusChange(appt.id, e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                >
                  <option value="PENDING">Status: PENDING</option>
                  <option value="CONFIRMED">Status: CONFIRMED</option>
                  <option value="COMPLETED">Status: COMPLETED</option>
                  <option value="CANCELLED">Status: CANCELLED</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
