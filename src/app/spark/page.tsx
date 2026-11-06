import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, FileText, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPARK Kerala Scheme & Government Reimbursement Guidance | Swasti PET/CT',
  description: 'Swasti PET/CT assistance for Kerala Government Employees, Pensioners, and MEDISEP beneficiaries submitting diagnostic scan claims via the SPARK portal.',
};

export default function SparkPage() {
  const steps = [
    {
      num: '01',
      title: 'Doctor Prescription & Referral Verification',
      desc: 'Bring your official government doctor consultation note or hospital prescription recommending PET/CT, CT, or targeted therapy.',
    },
    {
      num: '02',
      title: 'Itemized Compliant Bill Generation',
      desc: 'Our billing desk generates GST-compliant, SPARK-formatted diagnostic bills with complete procedure codes, doctor registration numbers, and hospital stamp.',
    },
    {
      num: '03',
      title: 'Diagnostic Report & CD/Film Packet',
      desc: 'You receive original signed radiologist reports along with DICOM viewing disks and certified copies for state claim submission.',
    },
    {
      num: '04',
      title: 'Online SPARK Portal Claim Submission',
      desc: 'Upload the itemized invoice and medical certificate to your employee SPARK account (Service and Payroll Administrative Repository for Kerala) for reimbursement.',
    },
  ];

  return (
    <div className="py-12 lg:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>SPARK Guidance &amp; Scheme Desk</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Kerala Government Employees SPARK Support Desk
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Dedicated guidance for Kerala State Government staff, university employees, teachers, police personnel, and pensioners claiming diagnostic reimbursements through the SPARK portal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Overview Box */}
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full">
                Service &amp; Payroll Administrative Repository for Kerala
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Hassle-Free Reimbursement Documentation at Swasti
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Swasti PET/CT Imaging and Nuclear Medicine provides comprehensive billing assistance compliant with Finance Department (Govt. of Kerala) audit norms. Whether you are undergoing an oncology PET/CT, high-resolution CT, or radionuclide therapy, our desk ensures all required documentation is accurately prepared for prompt claim clearance.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/10 space-y-3">
              <h4 className="text-sm font-bold text-white">SPARK Helpdesk Hotline</h4>
              <p className="text-xs text-slate-300">
                Call our designated coordinator to verify package rates and required certificates prior to your scan:
              </p>
              <div className="text-xl font-black text-teal-300 font-mono">+91 9400 00 4455</div>
              <p className="text-[11px] text-slate-400">Ulloor, Medical College P.O., Trivandrum</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Claim Flow */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white text-center">
            How the Reimbursement Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-black text-lg flex items-center justify-center mb-4">
                    {st.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs for Government Employees */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions by State Employees</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-white">Are PET/CT scans reimbursable under Kerala Government rules?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes, when prescribed by a government medical college oncologist/physician with an essentiality certificate, PET/CT scans qualify under medical reimbursement rules.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-white">What documents does Swasti provide for my DDO?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Original signed bills, diagnostic report copies, radiologist registration details, and hospital certification of charges required by Drawing &amp; Disbursing Officers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
