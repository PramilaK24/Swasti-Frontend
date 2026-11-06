'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Clock } from 'lucide-react';
import { API_BASE_URL, Doctor } from '@/lib/api';

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Partial<Doctor>>({
    name: '',
    qualification: '',
    department: 'Nuclear Medicine & PET/CT',
    designation: '',
    experience: '',
    consultationHours: 'Monday to Saturday: 9:00 AM - 2:00 PM',
    photo: '',
    bio: '',
  });

  const fetchDoctors = () => {
    fetch(`${API_BASE_URL}/doctors`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setDoctors(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = typeof window !== 'undefined' ? localStorage.getItem('swasti_admin_token') : null;

    try {
      const res = await fetch(`${API_BASE_URL}/doctors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: 'include',
        body: JSON.stringify(editingDoctor),
      });
      if (res.ok) {
        setShowModal(false);
        fetchDoctors();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Doctors Directory Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Add or update physician credentials, OPD visiting hours, bios, and portrait photos.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingDoctor({
              name: '',
              qualification: '',
              department: 'Nuclear Medicine & PET/CT',
              designation: '',
              experience: '',
              consultationHours: 'Monday to Saturday: 9:00 AM - 2:00 PM',
              photo: '',
              bio: '',
            });
            setShowModal(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Doctor</span>
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-400 dark:text-slate-500 text-sm">Loading doctors roster from API...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((d) => (
            <div
              key={d.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-5"
            >
              <div className="w-full sm:w-28 h-36 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                <img
                  src={d.photo || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80'}
                  alt={d.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {d.department}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{d.name}</h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">{d.designation}</p>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-400">{d.qualification}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                    <span className="truncate max-w-[160px]">{d.consultationHours}</span>
                  </div>
                  <button
                    onClick={() => {
                      setEditingDoctor(d);
                      setShowModal(true);
                    }}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/60 hover:text-teal-700 dark:hover:text-teal-300 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Doctor Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {editingDoctor.id ? 'Edit Doctor Profile' : 'Add New Doctor Profile'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Doctor Full Name &amp; Degrees *
                </label>
                <input
                  type="text"
                  required
                  value={editingDoctor.name || ''}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  placeholder="e.g. Dr. Rajesh Pillai, MD, DM"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingDoctor.department || ''}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                    placeholder="e.g. Cardiology & ECHO Clinic"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingDoctor.designation || ''}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                    placeholder="e.g. Consultant Cardiologist"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Qualifications Detail
                </label>
                <input
                  type="text"
                  value={editingDoctor.qualification || ''}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, qualification: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  placeholder="e.g. MBBS, MD (Medicine), DM (Cardiology)"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  OPD Consultation Schedule *
                </label>
                <input
                  type="text"
                  required
                  value={editingDoctor.consultationHours || ''}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, consultationHours: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  placeholder="e.g. Tuesday, Thursday, Saturday: 2:00 PM - 6:00 PM"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={editingDoctor.photo || ''}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, photo: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Doctor Biography &amp; Clinical Experience
                </label>
                <textarea
                  rows={3}
                  value={editingDoctor.bio || ''}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow transition"
                >
                  Save Doctor Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
