import React from 'react';
import Link from 'next/link';
import {
  apiGetSettings,
  apiGetServices,
  apiGetDoctors,
  apiGetArticles,
} from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Flame,
  Calendar,
  CheckCircle2,
  Building2,
  ChevronRight,
  ArrowRight,
  FlaskConical,
} from 'lucide-react';

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [setting, services, doctors, events, blogs] = await Promise.all([
    apiGetSettings(),
    apiGetServices(),
    apiGetDoctors(),
    apiGetArticles('EVENT'),
    apiGetArticles('BLOG'),
  ]);

  const scans = services.filter((s) => s.category === 'SCANS');
  const clinics = services.filter((s) => s.category === 'CLINICS');
  const therapies = services.filter((s) => s.category === 'THERAPY');
  const labs = services.filter((s) => s.category === 'LAB');

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Hero Banner */}
      <HeroSlider settings={setting || undefined} />

      {/* 2. Welcome & About Swasti PET/CT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>A Unit of Nucleuz Healthcare Pvt. Ltd.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Pioneering Molecular Imaging &amp; Targeted Theranostics in Trivandrum
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Welcome to <strong>Swasti PET/CT Imaging and Nuclear Medicine</strong>. We are South Kerala&apos;s center of clinical excellence dedicated to providing the highest quality diagnostic scans, specialized outpatient clinics, automated pathology, and targeted radioactive cancer therapies under one unified roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">AERB Licensed Hot Lab</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Strict radiation safety standards &amp; qualified physicists.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">High-Precision Scanners</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fast acquisition, reduced radiotracer dose, sharp lesion clarity.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold text-sm transition shadow-md"
              >
                <span>Read Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/md"
                className="text-sm font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 underline underline-offset-4"
              >
                Managing Director&apos;s Desk &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80"
                alt="Swasti Modern Diagnostic Imaging Facility"
                className="w-full h-full object-cover object-center brightness-95 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Ulloor, Trivandrum Facility</span>
                <h3 className="text-xl sm:text-2xl font-bold">Comprehensive Nuclear Medicine &amp; Diagnostic Suite</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Opposite CSB Bank, Medical College P.O. Junction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: SCANS & IMAGING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Diagnostic Imaging</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Advanced Scans &amp; Imaging Services</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl">
              Precision oncology scans, musculoskeletal imaging, high-frequency Ultrasound &amp; 2D Echocardiography.
            </p>
          </div>
          <Link
            href="/scans/pet-ct-scan"
            className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold text-sm group"
          >
            <span>Explore All Scans</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scans.map((scan) => (
            <div
              key={scan.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 transition-all duration-300 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-teal-400 dark:hover:border-teal-500/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                    <Activity className="w-6 h-6" />
                  </div>
                  {scan.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {scan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{scan.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{scan.shortDesc}</p>

                {scan.prepTips && (
                  <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-3 mb-4 text-xs text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-800 dark:text-white font-semibold block mb-0.5">Patient Preparation:</strong>
                    {scan.prepTips}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{scan.machineDetails || 'Available Daily'}</span>
                <Link
                  href={`/scans/${scan.slug}`}
                  className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 text-xs font-bold"
                >
                  Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Section: CLINICS & SPECIALTIES */}
      <section className="bg-slate-100/60 dark:bg-slate-900/60 py-16 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Specialized Outpatient Clinics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Physician &amp; Endocrine Consultations
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
              Experienced physicians, gastroenterologists, and thyroid specialists offering one-stop consultations with on-site diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-teal-400 dark:hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Specialist OPD
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{clinic.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{clinic.shortDesc}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{clinic.fullDesc.slice(0, 140)}...</p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">Ulloor Center</span>
                  <Link
                    href={`/clinics/${clinic.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400"
                  >
                    View Timings &amp; Doctors &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: ADVANCED THERAPY & THERANOSTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5 text-teal-400" />
              <span>Targeted Radionuclide Therapy &amp; Theranostics</span>
            </div>

            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                South Kerala&apos;s Advanced Theranostics Center
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Theranostics bridges precision molecular diagnosis and localized radioactive therapy. We treat neuroendocrine tumors, prostate malignancies, and thyroid disorders with AERB-licensed protocols and dedicated lead-shielded rooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {therapies.map((therapy) => (
                <div
                  key={therapy.id}
                  className="rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/50 p-6 backdrop-blur-sm transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                        <Flame className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-teal-300 border border-white/15">
                        AERB Licensed
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{therapy.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">{therapy.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-teal-300">Theranostics Suite</span>
                    <Link
                      href={`/therapy/${therapy.slug}`}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1"
                    >
                      Protocol Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: LAB & DIAGNOSTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <FlaskConical className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Automated Clinical Pathology &amp; ECG</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Diagnostic Pathology &amp; Cardiology ECG
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              High-accuracy automated analyzers with same-day reports for routine blood checkups, cancer markers, and cardiology ECG.
            </p>
          </div>
          <Link
            href="/lab"
            className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-bold text-sm"
          >
            <span>View Full Lab Test Directory &amp; Pricing</span> &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-teal-400 dark:hover:border-teal-500/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    NABL Compliant
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{lab.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{lab.shortDesc}</p>
                <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-600 dark:text-slate-300 mb-4">
                  <strong>Turnaround Time:</strong> Fast Digital Reports &bull; Fasting Instructions Available
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Walk-in or Book Slot</span>
                <Link href="/lab" className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                  Lab Tests &amp; Preparation &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Section: SPARK PORTAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-700">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-teal-200 text-xs font-bold uppercase tracking-wider">
              <span>Government Employee Scheme Assistance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Government Employee Reimbursement &amp; SPARK Guidance
            </h3>
            <p className="text-teal-100 text-sm leading-relaxed">
              We assist Kerala Government employees, pensioners, and MEDISEP beneficiaries with compliant diagnostic bills, itemized estimates, and documentation required for prompt SPARK portal reimbursement.
            </p>
          </div>

          <Link
            href="/spark"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-teal-950 font-bold text-sm hover:bg-teal-50 transition shadow-lg"
          >
            SPARK Empanelment &amp; Bill Assistance &rarr;
          </Link>
        </div>
      </section>

      {/* 8. Section: FEATURED DOCTORS & SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Medical Specialists</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Our Specialists &amp; Consultants</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Distinguished clinical directors, nuclear physicians, radiologists, cardiologists, and internists.
            </p>
          </div>
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold text-sm group"
          >
            <span>View All Doctors &amp; OPD Hours</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={doc.photo || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80'}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-medium text-teal-700 dark:text-teal-400">{doc.designation}</p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">{doc.qualification}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 pt-1">{doc.bio}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pt-3 mb-3">
                  <strong>OPD:</strong> {doc.consultationHours}
                </div>
                <Link
                  href="/about/doctors"
                  className="block text-center py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition border border-slate-200/80 dark:border-slate-700"
                >
                  Book Doctor Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Section: EVENTS & BLOGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Events Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Hospital Events &amp; CME</h3>
              <Link href="/events" className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline">
                All Events &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    <img
                      src={evt.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80'}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-teal-700 dark:text-teal-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.eventDate ? new Date(evt.eventDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Upcoming'}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{evt.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{evt.excerpt}</p>
                    <Link href="/events" className="inline-block text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline pt-1">
                      Read event details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blogs Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Patient Guides &amp; Blogs</h3>
              <Link href="/blogs" className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline">
                All Blogs &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {blogs.map((b) => (
                <div
                  key={b.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    <img
                      src={b.coverImage || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80'}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Patient Education</span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{b.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{b.excerpt}</p>
                    <Link href={`/blogs/${b.slug}`} className="inline-block text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline pt-1">
                      Read full article &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Floating CTA Appointment Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black">
              Need a High-Definition Scan or Consultation?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our clinical coordinators are available to assist with appointment slots, fasting prep guidance, and transportation requests.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm transition shadow-lg shadow-teal-500/25"
              >
                Contact &amp; Location Map
              </Link>
              <a
                href={`https://wa.me/919400004455?text=Hello%20Swasti%20PET/CT,%20I%20would%20like%20to%20book%20a%20scan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
