'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Activity,
  Sparkles,
  Lock,
} from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  settings?: {
    phone1?: string;
    phone2?: string;
    whatsappNumber?: string;
    announcementBar?: string;
    showAnnouncement?: boolean;
  };
}

export default function Navbar({ settings }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const phone1 = settings?.phone1 || '+91 471 244 4455';
  const whatsapp = settings?.whatsappNumber || '+919400004455';
  const announcement =
    settings?.announcementBar ||
    'South Kerala’s Premier Nuclear Medicine, PET/CT & Targeted Theranostics Facility.';
  const showAnnouncement = settings?.showAnnouncement ?? true;

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-sm bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
        {/* Top Announcement & Helpline Bar */}
        {showAnnouncement && (
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-navy-950 text-white text-xs py-2 px-4 border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden text-center md:text-left">
                <span className="flex-shrink-0 bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Update
                </span>
                <p className="text-slate-200 truncate text-xs">{announcement}</p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-slate-300 text-xs">
                <a
                  href={`tel:${phone1.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-teal-300 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{phone1}</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Swasti%20PET/CT%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20scan%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <span className="text-slate-700">|</span>
                <Link
                  href="/admin"
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  title="Super Admin Portal"
                >
                  <Lock className="w-3 h-3" />
                  <span className="text-[11px]">Admin</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    SWASTI
                  </span>
                  <span className="text-teal-700 dark:text-teal-300 font-extrabold text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80">
                    PET/CT
                  </span>
                </div>
                <span className="text-[10px] xl:text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Nuclear Medicine &amp; Imaging <span className="hidden xl:inline">| Nucleuz Healthcare</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 font-medium text-xs xl:text-sm text-slate-700 dark:text-slate-200 flex-shrink-0">
              {/* 1. Home */}
              <Link
                href="/"
                className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap"
              >
                Home
              </Link>

              {/* 2. About Us */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/about" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Company Profile
                  </Link>
                  <Link href="/about/md" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Managing Director
                  </Link>
                  <Link href="/about/doctors" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition font-medium">
                    Doctors &amp; Specialists
                  </Link>
                  <Link href="/about/team" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Our Clinical Team
                  </Link>
                </div>
              </div>

              {/* 3. Scans */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">Scans</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/scans/pet-ct-scan" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    PET / CT Scans
                  </Link>
                  <Link href="/scans/ct-scans" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    32-Slice CT Scans
                  </Link>
                  <Link href="/scans/gamma-camera-scans" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Gamma Camera (Scintigraphy)
                  </Link>
                  <div className="my-1 border-t border-slate-100 dark:border-slate-800"></div>
                  <Link href="/scans/ultrasound" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition font-medium">
                    Ultrasound (USG)
                  </Link>
                  <Link href="/scans/echo" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition font-medium">
                    2D ECHO
                  </Link>
                </div>
              </div>

              {/* 4. Clinics */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">Clinics</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full left-0 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/clinics/general-medicine-clinic" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    General Medicine
                  </Link>
                  <Link href="/clinics/gastroenterology-clinic" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Gastroenterology
                  </Link>
                  <Link href="/clinics/thyroid-clinic" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Thyroid Clinic
                  </Link>
                </div>
              </div>

              {/* 5. Lab */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">Lab</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/lab#blood-tests" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Blood Tests &amp; Pathology
                  </Link>
                  <Link href="/lab#ecg" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    12-Lead ECG
                  </Link>
                </div>
              </div>

              {/* 6. Therapy */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">Therapy</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/therapy/131-i-radioiodine-therapy" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    131 I (Radioiodine Therapy)
                  </Link>
                  <Link href="/therapy/177-lu-targeted-therapy" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    177 Lu Based (PRRT / PSMA)
                  </Link>
                  <Link href="/therapy/225-ac-alpha-therapy" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    225 Ac Based (Targeted Alpha)
                  </Link>
                </div>
              </div>

              {/* 7. SPARK */}
              <Link
                href="/spark"
                className="px-2.5 xl:px-3 py-2 rounded-xl text-teal-700 dark:text-teal-300 font-bold hover:bg-teal-50 dark:hover:bg-slate-900 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span className="whitespace-nowrap">SPARK</span>
              </Link>

              {/* 8. More */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors whitespace-nowrap">
                  <span className="whitespace-nowrap">More</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </button>
                <div className="absolute top-full right-0 w-52 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link href="/events" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Events &amp; CME
                  </Link>
                  <Link href="/blogs" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Medical Blogs
                  </Link>
                  <Link href="/careers" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Careers
                  </Link>
                  <Link href="/patient-transport" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Patient Transport
                  </Link>
                  <div className="my-1 border-t border-slate-100 dark:border-slate-800"></div>
                  <Link href="/contact" className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>

            {/* CTA Action Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => setAppointmentModalOpen(true)}
                className="flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold text-xs xl:text-sm shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0"
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Actions: Compact Book Button, Theme Toggle & Hamburger Menu */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <ThemeToggle />
              <button
                onClick={() => setAppointmentModalOpen(true)}
                className="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3 shadow-xl transition-colors duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Home
            </Link>

            {/* About Us */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">About Us</div>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Company Profile</Link>
              <Link href="/about/md" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Managing Director</Link>
              <Link href="/about/doctors" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Doctors &amp; Specialists</Link>
              <Link href="/about/team" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Our Clinical Team</Link>
            </div>

            {/* Scans */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">Diagnostic Scans</div>
              <Link href="/scans/pet-ct-scan" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">PET/CT Scans</Link>
              <Link href="/scans/ct-scans" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">32-Slice CT Scans</Link>
              <Link href="/scans/gamma-camera-scans" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Gamma Camera</Link>
              <Link href="/scans/ultrasound" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Ultrasound (USG)</Link>
              <Link href="/scans/echo" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">2D ECHO</Link>
            </div>

            {/* Clinics */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">Specialty Clinics</div>
              <Link href="/clinics/general-medicine-clinic" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">General Medicine</Link>
              <Link href="/clinics/gastroenterology-clinic" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Gastroenterology</Link>
              <Link href="/clinics/thyroid-clinic" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Thyroid Clinic</Link>
            </div>

            {/* Lab */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">Laboratory &amp; ECG</div>
              <Link href="/lab#blood-tests" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Blood Tests &amp; Pathology</Link>
              <Link href="/lab#ecg" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">12-Lead ECG</Link>
            </div>

            {/* Therapy */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">Radionuclide Therapy</div>
              <Link href="/therapy/131-i-radioiodine-therapy" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">131 I (Radioiodine)</Link>
              <Link href="/therapy/177-lu-targeted-therapy" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">177 Lu Based Therapy</Link>
              <Link href="/therapy/225-ac-alpha-therapy" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">225 Ac Alpha Therapy</Link>
            </div>

            {/* SPARK */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <Link
                href="/spark"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60"
              >
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>SPARK Portal &amp; Scheme Assistance</span>
              </Link>
            </div>

            {/* More */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-1">More Information</div>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Events &amp; CME</Link>
              <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Medical Blogs</Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Careers</Link>
              <Link href="/patient-transport" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Patient Transport</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Contact Us</Link>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              >
                🔒 Super Admin Login
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </>
  );
}
