'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

interface FloatingEmergencyBarProps {
  phone?: string;
  whatsapp?: string;
}

export default function FloatingEmergencyBar({
  phone = '+919400004455',
  whatsapp = '+919400004455',
}: FloatingEmergencyBarProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Swasti%20PET/CT%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20scan%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
