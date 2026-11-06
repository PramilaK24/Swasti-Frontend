import type { Metadata } from 'next';
import './globals.css';
import { apiGetSettings } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingEmergencyBar from '@/components/FloatingEmergencyBar';
import { ThemeProvider } from '@/context/ThemeContext';

export async function generateMetadata(): Promise<Metadata> {
  const setting = await apiGetSettings();

  return {
    title: {
      default: `${setting?.siteName || 'Swasti PET/CT'} | Nuclear Medicine & Diagnostics`,
      template: `%s | ${setting?.siteName || 'Swasti PET/CT'}`,
    },
    description: setting?.heroSubtitle || 'Premier Nuclear Medicine, PET/CT scans, specialized CT scans, clinics, and targeted molecular therapies in Trivandrum, Kerala.',
    icons: {
      icon: '/favicon.ico',
    },
    keywords: [
      'PET CT scan Trivandrum',
      'Nuclear Medicine Kerala',
      'Ultrasound Scan Ulloor',
      'ECHO Trivandrum',
      'Radioiodine 131 I Therapy',
      'Lutetium 177 PRRT PSMA',
      'Actinium 225 Alpha Therapy',
      'Thyroid Clinic Trivandrum',
      'Nucleuz Healthcare Swasti',
    ],
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setting = await apiGetSettings();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('swasti_theme');
                if (t === 'dark' || (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider>
          <Navbar settings={setting || undefined} />
          <main className="flex-grow">{children}</main>
          <Footer settings={setting || undefined} />
          <FloatingEmergencyBar
            phone={setting?.phone2 || setting?.phone1}
            whatsapp={setting?.whatsappNumber}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
