'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedService = 'PET / CT Scans',
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    serviceName: preselectedService,
    category: 'SCANS',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit appointment request.');
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong. Please try again or call us.');
      } else {
        setError('Something went wrong. Please try again or call us.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-slate-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-2">
            Instant Priority Booking
          </div>
          <h3 className="text-2xl font-bold">Schedule an Appointment</h3>
          <p className="text-slate-300 text-sm mt-1">
            Book PET/CT, Scans, Clinics, Therapies, or Diagnostic Lab Tests at Swasti.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Booking Received!</h4>
              <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                Thank you, <span className="font-semibold text-slate-800 dark:text-white">{formData.patientName}</span>. Our clinical care coordinator will call you at <span className="font-semibold text-slate-800 dark:text-white">{formData.phone}</span> shortly to confirm your slot and provide preparation instructions.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Service:</strong> {formData.serviceName}</p>
                <p><strong>Preferred Date:</strong> {formData.preferredDate || 'Earliest Available'}</p>
                <p><strong>Time Window:</strong> {formData.preferredTime}</p>
              </div>
              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-lg shadow-teal-600/20"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-300 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Select Department or Service *
                </label>
                <select
                  required
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-slate-100 transition-colors"
                >
                  <optgroup label="SCANS">
                    <option value="PET / CT Scans">PET / CT Scans (Oncology &amp; Whole Body)</option>
                    <option value="32-Slice CT Scans">32-Slice CT Scans (Contrast &amp; HRCT)</option>
                    <option value="Gamma Camera Scans">Gamma Camera Scans (Renal, Bone, Thyroid)</option>
                    <option value="Ultrasound (USG)">Ultrasound (USG - Color Doppler)</option>
                    <option value="2D ECHO">2D ECHO (Echocardiography)</option>
                  </optgroup>
                  <optgroup label="CLINICS">
                    <option value="General Medicine Clinic">General Medicine Clinic</option>
                    <option value="Gastroenterology Clinic">Gastroenterology Clinic</option>
                    <option value="Specialized Thyroid Clinic">Specialized Thyroid Clinic</option>
                  </optgroup>
                  <optgroup label="THERAPY (Radionuclide)">
                    <option value="131-I Radioiodine Therapy">131-I Radioiodine Therapy (Thyroid)</option>
                    <option value="177-Lu Targeted Therapy">177-Lu PRRT &amp; PSMA Therapy</option>
                    <option value="225-Ac Alpha Therapy">225-Ac Targeted Alpha Therapy (TAT)</option>
                  </optgroup>
                  <optgroup label="LABORATORY">
                    <option value="Clinical Pathology &amp; Blood Tests">Blood Tests &amp; Tumor Markers</option>
                    <option value="12-Lead ECG Diagnostics">12-Lead ECG Diagnostics</option>
                  </optgroup>
                </select>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh V."
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 94000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Clinical Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Referring Doctor / Symptoms / Special Requirements
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    rows={2}
                    placeholder="e.g. Referred by Dr. Philip for whole body PET/CT or fasting diabetic patient."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold hover:from-teal-700 hover:to-cyan-700 transition shadow-lg shadow-teal-600/25 text-sm disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Confirm Appointment Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
