import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Lock } from 'lucide-react';

interface FooterProps {
  settings?: {
    siteName?: string;
    tagline?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    address?: string;
    timingHours?: string;
  };
}

export default function Footer({ settings }: FooterProps) {
  const siteName = settings?.siteName || 'Swasti PET/CT & Nuclear Medicine';
  const tagline = settings?.tagline || 'Precision Imaging, Personalized Care';
  const phone1 = settings?.phone1 || '+91 471 244 4455';
  const phone2 = settings?.phone2 || '+91 9400 00 4455';
  const email = settings?.email || 'info@swastipetct.com';
  const address = settings?.address || 'Sreelekshmi Building, Medical College P.O. Junction, Ulloor, Thiruvananthapuram, Kerala - 695011';
  const timing = settings?.timingHours || 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: On Prior Appointment';

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Hospital Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/20">
                S
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-white">{siteName}</h3>
                <p className="text-xs text-teal-400 font-medium">A Flagship Unit of Nucleuz Healthcare Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed italic">
              &ldquo;{tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Equipped with state-of-the-art PET/CT imaging detectors, dual-head gamma camera, and specialized theranostics suites. Licensed by AERB and compliant with highest diagnostic quality standards.
            </p>

            {/* Accreditations */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-teal-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                AERB Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                NABL Compliant Lab
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-amber-300 border border-slate-700">
                SPARK Empaneled
              </span>
            </div>
          </div>

          {/* Column 2: Scans & Clinics */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Diagnostic Scans</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/scans/pet-ct-scan" className="hover:text-teal-400 transition">PET / CT Scans</Link></li>
              <li><Link href="/scans/ct-scans" className="hover:text-teal-400 transition">32-Slice CT Imaging</Link></li>
              <li><Link href="/scans/gamma-camera-scans" className="hover:text-teal-400 transition">Gamma Camera</Link></li>
              <li><Link href="/scans/ultrasound" className="hover:text-teal-400 transition">Ultrasound (USG)</Link></li>
              <li><Link href="/scans/echo" className="hover:text-teal-400 transition">2D ECHO</Link></li>
              <li className="pt-2 font-bold text-xs uppercase tracking-wider text-slate-400">Clinics</li>
              <li><Link href="/clinics/general-medicine-clinic" className="hover:text-teal-400 transition">General Medicine</Link></li>
              <li><Link href="/clinics/gastroenterology-clinic" className="hover:text-teal-400 transition">Gastroenterology</Link></li>
              <li><Link href="/clinics/thyroid-clinic" className="hover:text-teal-400 transition">Thyroid Clinic</Link></li>
            </ul>
          </div>

          {/* Column 3: Advanced Therapy & Lab */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Therapy &amp; Lab</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/therapy/131-i-radioiodine-therapy" className="hover:text-teal-400 transition">131 I (Radioiodine)</Link></li>
              <li><Link href="/therapy/177-lu-targeted-therapy" className="hover:text-teal-400 transition">177 Lu (PRRT / PSMA)</Link></li>
              <li><Link href="/therapy/225-ac-alpha-therapy" className="hover:text-teal-400 transition">225 Ac Alpha Therapy</Link></li>
              <li className="pt-2 font-bold text-xs uppercase tracking-wider text-slate-400">Pathology Lab</li>
              <li><Link href="/lab#blood-tests" className="hover:text-teal-400 transition">Blood Tests &amp; Markers</Link></li>
              <li><Link href="/lab#ecg" className="hover:text-teal-400 transition">12-Lead ECG</Link></li>
              <li className="pt-2 font-bold text-xs uppercase tracking-wider text-slate-400">Government Support</li>
              <li><Link href="/spark" className="hover:text-teal-400 transition text-amber-300 font-medium">SPARK Kerala Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Reach Us</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <div>
                  <a href={`tel:${phone1.replace(/\s+/g, '')}`} className="hover:text-white block">{phone1}</a>
                  <a href={`tel:${phone2.replace(/\s+/g, '')}`} className="hover:text-white block">{phone2}</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{timing}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Swasti PET/CT Imaging &amp; Nuclear Medicine. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/about/doctors" className="hover:text-slate-300">Doctors Directory</Link>
            <Link href="/events" className="hover:text-slate-300">Events &amp; CME</Link>
            <Link href="/blogs" className="hover:text-slate-300">Medical Blog</Link>
            <Link href="/careers" className="hover:text-slate-300">Careers</Link>
            <Link href="/admin" className="text-slate-400 hover:text-white flex items-center gap-1 font-medium">
              <Lock className="w-3 h-3" />
              Super Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
