'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Award,
  Clock,
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
} from 'lucide-react';
import AppointmentModal from './AppointmentModal';

interface HeroSliderProps {
  settings?: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroBadge?: string;
    phone1?: string;
  };
}

export default function HeroSlider({ settings }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('PET / CT Scans');

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const phone = settings?.phone1 || '+91 471 244 4455';

  const slides = [
    {
      id: 0,
      title: settings?.heroTitle || 'Precision PET/CT & High-Definition Molecular Imaging',
      subtitle:
        settings?.heroSubtitle ||
        'South Kerala’s premier Nuclear Medicine diagnostic center by Nucleuz Healthcare. Ultra-high definition PET/CT, 32-slice low-dose CT, and gamma camera scintigraphy with same-day digital reporting.',
      badge: settings?.heroBadge || 'AERB Licensed Facility • South Kerala Molecular Imaging Flagship',
      image:
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&auto=format&fit=crop&q=85',
      tabTitle: 'PET/CT Molecular Imaging',
      tabDesc: 'Whole-body oncology detection & 32-slice CT',
      highlights: ['Sub-Millimeter Resolution', '4D Respiratory Motion Gating', 'Same-Day Digital Reports'],
      primaryBtnText: 'Schedule a PET/CT Scan',
      primaryService: 'PET / CT Scans',
      secondaryLinkText: 'Explore Scans & Imaging',
      secondaryLinkHref: '/scans/pet-ct-scan',
      accentColor: 'from-teal-400 via-cyan-300 to-emerald-400',
    },
    {
      id: 1,
      title: 'Targeted 177-Lu & 225-Ac Radionuclide Theranostics',
      subtitle:
        'Pioneering targeted molecular oncology therapies. PRRT, PSMA, and Actinium-225 Targeted Alpha Therapy (TAT) delivering therapeutic radiation directly to malignant cells while preserving healthy tissues.',
      badge: 'Advanced Theranostics • Targeted Alpha & Beta Radioisotope Therapy',
      image:
        'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&auto=format&fit=crop&q=85',
      tabTitle: 'Theranostics & Alpha Therapy',
      tabDesc: '177-Lu PRRT/PSMA & 225-Ac targeted therapy',
      highlights: ['177-Lu PRRT & PSMA Care', '225-Ac Targeted Alpha Therapy', 'AERB Shielded Isolation Suites'],
      primaryBtnText: 'Book Theranostics Consult',
      primaryService: '177-Lu Targeted Therapy',
      secondaryLinkText: 'View Therapy Protocols',
      secondaryLinkHref: '/therapy/177-lu-targeted-therapy',
      accentColor: 'from-cyan-400 via-teal-300 to-sky-400',
    },
    {
      id: 2,
      title: 'Specialist Outpatient Clinics, 2D ECHO & NABL Pathology',
      subtitle:
        'Holistic clinical care integrating General Medicine, Gastroenterology, and Thyroid Clinics with state-of-the-art Color Doppler Ultrasound, 12-lead digital ECG, and automated pathology under one roof in Ulloor.',
      badge: 'Integrated Diagnostic & Outpatient Care • Trivandrum',
      image:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1920&auto=format&fit=crop&q=85',
      tabTitle: 'Specialty Clinics & Lab',
      tabDesc: 'General Medicine, Gastro, Thyroid, USG & ECHO',
      highlights: ['Experienced Medical Consultants', 'Color Doppler 2D ECHO', 'NABL Compliant Pathology'],
      primaryBtnText: 'Book Clinic Appointment',
      primaryService: 'General Medicine Clinic',
      secondaryLinkText: 'Meet Our Specialist Doctors',
      secondaryLinkHref: '/about/doctors',
      accentColor: 'from-emerald-400 via-teal-300 to-cyan-400',
    },
  ];

  const SLIDE_DURATION = 6500; // 6.5s per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  // Auto-play timer with progress ticker
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // Update progress bar every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, SLIDE_DURATION]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide(); // swiped left
    if (diff < -50) prevSlide(); // swiped right
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <section
        className="relative w-full h-[620px] sm:h-[660px] lg:h-[720px] overflow-hidden select-none bg-slate-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Swasti PET/CT Diagnostic Banner Carousel"
      >
        {/* Banner Images with Cinematic Ken-Burns Zoom & Cross-Fade */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Slow Smooth Zoom Animation */}
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[9000ms] ease-out transform ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Multi-stop Ambient Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 lg:from-slate-950/95 lg:via-slate-950/70 lg:to-slate-950/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

              {/* Subtle Glowing Radial Mesh */}
              <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          );
        })}

        {/* Foreground Animated Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pb-28 sm:pb-32 lg:pb-36">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            if (!isActive) return null;

            return (
              <div
                key={slide.id}
                className="max-w-3xl space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700"
              >
                {/* Accreditation & Quality Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/40 text-teal-300 text-xs font-bold tracking-wide shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
                  {slide.title.includes('&') ? (
                    <>
                      {slide.title.split('&')[0]} &amp; <br />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                        {slide.title.split('&')[1]}
                      </span>
                    </>
                  ) : (
                    slide.title
                  )}
                </h1>

                {/* Subtitle Description */}
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal drop-shadow">
                  {slide.subtitle}
                </p>

                {/* Key Clinical Highlight Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  {slide.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(slide.primaryService);
                      setModalOpen(true);
                    }}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold text-sm shadow-xl shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{slide.primaryBtnText}</span>
                  </button>

                  <Link
                    href={slide.secondaryLinkHref}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all hover:border-teal-400/50"
                  >
                    <span>{slide.secondaryLinkText}</span>
                    <ArrowRight className="w-4 h-4 text-teal-300" />
                  </Link>

                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-teal-300 font-medium text-xs transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Helpdesk: {phone}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Circular Arrow Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-teal-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95"
          aria-label="Previous Banner Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-teal-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95"
          aria-label="Next Banner Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Contemporary Bottom Interactive Navigation Dock */}
        <div className="absolute bottom-5 sm:bottom-6 inset-x-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-2.5 sm:p-3.5 rounded-2xl transition-all duration-300 border relative overflow-hidden backdrop-blur-lg ${
                    isActive
                      ? 'bg-slate-900/85 border-teal-400/60 shadow-xl'
                      : 'bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-white/20 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Active Progress Bar Timer */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-400/30'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      0{s.id + 1}
                    </span>
                    <span
                      className={`text-xs font-bold truncate ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {s.tabTitle}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                    {s.tabDesc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Small Play/Pause Indicator (Top Right) */}
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 backdrop-blur-md text-slate-300 hover:text-white text-xs transition flex items-center gap-1.5"
            title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
            aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-teal-400" /> : <Pause className="w-3.5 h-3.5 text-slate-400" />}
            <span className="text-[10px] font-mono hidden md:inline">
              {isPaused ? 'Paused' : 'Auto'}
            </span>
          </button>
        </div>
      </section>

      {/* Floating Trust Metrics Ribbon Directly Underneath */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-30">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
            <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">15,000+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Diagnostic Scans Performed</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pl-6">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Same Day</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Digital Reporting Online</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">AERB Licensed</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Radiation &amp; Hot Lab Safety</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">SPARK Empaneled</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Kerala State Govt. Scheme Desk</div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </>
  );
}
