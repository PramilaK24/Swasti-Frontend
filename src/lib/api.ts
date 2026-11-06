const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface SiteSetting {
  id: string;
  siteName: string;
  tagline: string;
  announcementBar: string;
  showAnnouncement: boolean;
  phone1: string;
  phone2: string;
  whatsappNumber: string;
  email: string;
  address: string;
  timingHours: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string | null;
  machineDetails?: string | null;
  prepTips?: string | null;
  featured: boolean;
  order: number;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  department: string;
  designation: string;
  experience?: string | null;
  consultationHours: string;
  photo?: string | null;
  bio: string;
  active: boolean;
  order: number;
}

export interface LabTest {
  id: string;
  code?: string | null;
  name: string;
  category: string;
  sampleType: string;
  fastingRequired: boolean;
  reportTime: string;
  description?: string | null;
  price?: number | null;
  order: number;
}

export interface Article {
  id: string;
  type: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  author: string;
  eventDate?: string | null;
  location?: string | null;
  published: boolean;
  createdAt: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string | null;
  serviceName: string;
  category?: string | null;
  preferredDate: string;
  preferredTime?: string | null;
  notes?: string | null;
  status: string;
  createdAt: string;
}

// Built-in resilient fallbacks so the frontend always renders instantly even if the backend is initializing
const defaultSettings: SiteSetting = {
  id: 'default',
  siteName: 'Swasti PET/CT & Nuclear Medicine',
  tagline: 'Precision Imaging, Personalized Care',
  announcementBar: 'Now offering Advanced 177-Lu and 225-Ac Theranostics & Daily Ultrasound/ECHO Services.',
  showAnnouncement: true,
  phone1: '+91 471 244 4455',
  phone2: '+91 9400 00 4455',
  whatsappNumber: '+919400004455',
  email: 'info@swastipetct.com',
  address: 'Sreelekshmi Building, Medical College P.O. Junction, Ulloor, Thiruvananthapuram, Kerala - 695011',
  timingHours: 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: On Appointment',
  heroTitle: 'Precision Imaging & Advanced Theranostics',
  heroSubtitle: "South Kerala's trusted diagnostic flagship by Nucleuz Healthcare. Cutting-edge PET/CT, specialized CT scans, gamma camera imaging, comprehensive clinics, and targeted radionuclide cancer therapies.",
  heroBadge: 'AERB Approved Nuclear Medicine & NABL Compliant Diagnostics',
};

const defaultServices: Service[] = [
  {
    id: 's1',
    slug: 'pet-ct-scan',
    title: 'PET / CT Scans',
    category: 'SCANS',
    shortDesc: 'Ultra high-definition molecular oncology imaging for early cancer detection, staging, and treatment monitoring.',
    fullDesc: 'Positron Emission Tomography combined with Computed Tomography (PET/CT) is the benchmark standard in modern oncological diagnostics.',
    icon: 'Activity',
    badge: 'Gold Standard Oncology',
    machineDetails: 'Dedicated Whole-Body High-Resolution PET/CT System',
    prepTips: 'Strict 6 hours fasting prior to scan. Normal plain water is encouraged.',
    featured: true,
    order: 1,
  },
  {
    id: 's2',
    slug: 'ct-scans',
    title: '32-Slice CT Scans',
    category: 'SCANS',
    shortDesc: 'Comprehensive full-body, contrast-enhanced diagnostic CT scans, HRCT chest, brain, and musculoskeletal imaging.',
    fullDesc: 'Our 32-slice CT scanner delivers rapid volume acquisition with ultra-thin slices.',
    icon: 'Crosshair',
    badge: 'Low-Dose Radiation Protocol',
    machineDetails: '32-Slice Ultra-Fast Helical CT Scanner',
    prepTips: '4 hours fasting for contrast studies.',
    featured: true,
    order: 2,
  },
  {
    id: 's3',
    slug: 'gamma-camera-scans',
    title: 'Gamma Camera Scans (Scintigraphy)',
    category: 'SCANS',
    shortDesc: 'Specialized functional radionuclide scintigraphy for renal, bone, thyroid, and cardiac physiological assessments.',
    fullDesc: 'Functional nuclear scans including Bone Scans and Renal DTPA/EC scans.',
    icon: 'Radio',
    badge: 'Functional Nuclear Imaging',
    machineDetails: 'Dual-Head High Resolution Gamma Camera',
    prepTips: 'Hydration advised for bone and renal scans.',
    featured: true,
    order: 3,
  },
  {
    id: 's4',
    slug: 'ultrasound',
    title: 'Ultrasound (USG)',
    category: 'SCANS',
    shortDesc: 'High-definition diagnostic sonography, abdominal, pelvic, obstetric, small-parts, and high-frequency soft tissue imaging.',
    fullDesc: 'Modern color Doppler ultrasound systems providing radiation-free visualization.',
    icon: 'Waves',
    badge: 'Color Doppler',
    machineDetails: 'High-End Digital Color Doppler Suite',
    prepTips: 'Full bladder required for pelvic scans.',
    featured: true,
    order: 4,
  },
  {
    id: 's5',
    slug: 'echo',
    title: '2D ECHO (Echocardiography)',
    category: 'SCANS',
    shortDesc: 'State-of-the-art 2D and Color Doppler Echocardiogram for comprehensive cardiac muscle, chamber, and valve evaluation.',
    fullDesc: 'Echocardiography evaluates heart wall motion, ejection fraction (EF), and valve competence.',
    icon: 'HeartPulse',
    badge: 'Cardiology',
    machineDetails: 'Dedicated Cardiology Ultrasound Platform',
    prepTips: 'No fasting required.',
    featured: true,
    order: 5,
  },
  {
    id: 's6',
    slug: 'general-medicine-clinic',
    title: 'General Medicine Clinic',
    category: 'CLINICS',
    shortDesc: 'Comprehensive adult outpatient consultations for lifestyle diseases, diabetes, hypertension, and preventative health.',
    fullDesc: 'Senior physicians provide thorough clinical assessments and diagnostic workup coordination.',
    icon: 'Stethoscope',
    badge: 'OPD Consult',
    machineDetails: 'Consultation Suites & Vitals Stations',
    prepTips: 'Bring previous prescriptions.',
    featured: true,
    order: 6,
  },
  {
    id: 's7',
    slug: 'gastroenterology-clinic',
    title: 'Gastroenterology Clinic',
    category: 'CLINICS',
    shortDesc: 'Specialized clinic for digestive, liver, biliary, and pancreatic health, heartburn, IBS, and GI oncological screening.',
    fullDesc: 'Expert gastroenterologists diagnose and treat acid peptic disease, fatty liver, and GI issues.',
    icon: 'FileHeart',
    badge: 'GI Specialty',
    machineDetails: 'Diagnostic Ultrasound & Lab Correlation',
    prepTips: 'Bring current endoscopy & lab reports.',
    featured: true,
    order: 7,
  },
  {
    id: 's8',
    slug: 'thyroid-clinic',
    title: 'Specialized Thyroid Clinic',
    category: 'CLINICS',
    shortDesc: 'Integrated multi-disciplinary care for thyroid nodules, goiter, hypo/hyperthyroidism, and thyroid cancer management.',
    fullDesc: 'Combining ultrasound, biopsy, thyroid scintigraphy, and blood hormonal assays.',
    icon: 'ShieldCheck',
    badge: 'Endocrine Care',
    machineDetails: 'Co-located with Gamma Camera & USG',
    prepTips: 'Recent TSH, FT3, FT4 lab values recommended.',
    featured: true,
    order: 8,
  },
  {
    id: 's9',
    slug: '131-i-radioiodine-therapy',
    title: '131-I (Radioiodine Therapy)',
    category: 'THERAPY',
    shortDesc: 'Targeted radionuclide ablation for thyrotoxicosis/hyperthyroidism and postoperative thyroid cancer.',
    fullDesc: 'Radioactive Iodine emits beta radiation specifically destroying overactive or cancerous thyroid cells.',
    icon: 'Flame',
    badge: 'Radioiodine',
    machineDetails: 'AERB Approved Radionuclide Therapy Suites',
    prepTips: 'Low-iodine diet for 1 to 2 weeks prior.',
    featured: true,
    order: 9,
  },
  {
    id: 's10',
    slug: '177-lu-targeted-therapy',
    title: '177-Lu Based Therapy (PRRT & PSMA)',
    category: 'THERAPY',
    shortDesc: 'Precision Theranostics using Lutetium-177: PRRT for Neuroendocrine Tumors and PSMA for Prostate Cancer.',
    fullDesc: 'Targeted beta-radiation delivering high localized doses directly into metastatic lesions.',
    icon: 'Atom',
    badge: 'PRRT / PSMA',
    machineDetails: 'Theranostics Infusion Suite with Dosimetry',
    prepTips: 'Baseline PET/CT scan required.',
    featured: true,
    order: 10,
  },
  {
    id: 's11',
    slug: '225-ac-alpha-therapy',
    title: '225-Ac Based Targeted Alpha Therapy (TAT)',
    category: 'THERAPY',
    shortDesc: 'Next-generation Targeted Alpha Therapy delivering high-energy alpha particles to eradicate resistant metastatic tumors.',
    fullDesc: 'Emits short-range, ultra-high energy alpha radiation producing lethal double-strand DNA breaks.',
    icon: 'Zap',
    badge: 'Targeted Alpha',
    machineDetails: 'Ultra-Specialized Alpha Radiopharmaceutical Protocols',
    prepTips: 'Requires tumor board eligibility evaluation.',
    featured: true,
    order: 11,
  },
  {
    id: 's12',
    slug: 'blood-tests-pathology',
    title: 'Clinical Pathology & Blood Tests',
    category: 'LAB',
    shortDesc: 'Automated biochemistry, hematology, immunology, and specialized cancer tumor markers.',
    fullDesc: 'Equipped with auto-analyzers for complete blood counts, renal function, liver enzymes, and tumor markers.',
    icon: 'FlaskConical',
    badge: 'NABL Accredited',
    machineDetails: 'Automated 5-Part Hematology Analyzers',
    prepTips: '10 to 12 hours fasting for lipid and glucose tests.',
    featured: true,
    order: 12,
  },
  {
    id: 's13',
    slug: 'ecg-diagnostics',
    title: '12-Lead ECG Diagnostics',
    category: 'LAB',
    shortDesc: 'Digital high-fidelity 12-lead Electrocardiography for immediate cardiac rhythm and ischemic change detection.',
    fullDesc: 'Rapid, painless diagnostic heart rhythm analysis.',
    icon: 'ActivitySquare',
    badge: '12-Lead Diagnostic',
    machineDetails: 'Digital 12-Channel Microprocessor ECG Recorder',
    prepTips: 'No special fasting needed.',
    featured: true,
    order: 13,
  },
];

const defaultDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Suresh Kumar, MD, DRM',
    qualification: 'MBBS, MD (Nuclear Medicine), DRM (BARC)',
    department: 'Nuclear Medicine & PET/CT',
    designation: 'Senior Consultant & Clinical Director',
    experience: '18+ Years Experience in Molecular Imaging & Theranostics',
    consultationHours: 'Monday to Saturday: 9:00 AM - 3:00 PM',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
    bio: 'Pioneer in clinical nuclear medicine in South India. Specialized in high-dose radioiodine therapy, Lu-177 PRRT/PSMA theranostics, and PET/CT oncological interpretation.',
    order: 1,
    active: true,
  },
  {
    id: 'd2',
    name: 'Dr. Ananya Nair, MD, DM',
    qualification: 'MBBS, MD (Radiodiagnosis), FRCR (UK)',
    department: 'Diagnostic Radiology & Ultrasound',
    designation: 'Lead Radiologist & Sonologist',
    experience: '12+ Years Experience in Cross-Sectional Imaging',
    consultationHours: 'Monday to Saturday: 10:00 AM - 5:00 PM',
    photo: 'https://images.unsplash.com/photo-1594824813576-9c43d83383ab?w=600&auto=format&fit=crop&q=80',
    bio: 'Expert in high-resolution CT reporting, advanced abdominal ultrasound, and soft-tissue sonography.',
    order: 2,
    active: true,
  },
  {
    id: 'd3',
    name: 'Dr. Rajesh Pillai, MD, DM',
    qualification: 'MBBS, MD (General Medicine), DM (Cardiology)',
    department: 'Cardiology & ECHO Clinic',
    designation: 'Consultant Cardiologist',
    experience: '15+ Years Experience',
    consultationHours: 'Tuesday, Thursday, Saturday: 2:00 PM - 6:00 PM',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80',
    bio: 'Specialist in 2D Echocardiography, cardiac hemodynamics, and pre-chemo cardiotoxicity screening.',
    order: 3,
    active: true,
  },
  {
    id: 'd4',
    name: 'Dr. Meera Menon, MD',
    qualification: 'MBBS, MD (General Medicine), DNB',
    department: 'General Medicine & Gastroenterology',
    designation: 'Senior Consultant Physician',
    experience: '14+ Years Clinical Practice',
    consultationHours: 'Monday to Friday: 8:30 AM - 1:30 PM',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
    bio: 'Dedicated internal medicine practitioner focusing on adult health, GI disorders, and routine medical checkups.',
    order: 4,
    active: true,
  },
];

const defaultLabTests: LabTest[] = [
  { id: 'lt1', code: 'CBC-01', name: 'Complete Blood Count (CBC) with ESR', category: 'BLOOD_TEST', sampleType: 'Whole Blood (EDTA)', fastingRequired: false, reportTime: '2 Hours', price: 350, order: 1 },
  { id: 'lt2', code: 'RFT-02', name: 'Renal Function Test (Creatinine, Urea, Electrolytes)', category: 'BLOOD_TEST', sampleType: 'Serum', fastingRequired: false, reportTime: '3 Hours', price: 650, order: 2 },
  { id: 'lt3', code: 'LFT-03', name: 'Liver Function Test (Bilirubin, SGOT, SGPT, Alk Phos)', category: 'BLOOD_TEST', sampleType: 'Serum', fastingRequired: true, reportTime: '3 Hours', price: 750, order: 3 },
  { id: 'lt4', code: 'THY-04', name: 'Comprehensive Thyroid Panel (FT3, FT4, TSH, Anti-TPO)', category: 'BLOOD_TEST', sampleType: 'Serum', fastingRequired: true, reportTime: '4 Hours', price: 950, order: 4 },
  { id: 'lt5', code: 'ONC-05', name: 'Serum PSA (Prostate Specific Antigen)', category: 'ONCO_MARKER', sampleType: 'Serum', fastingRequired: false, reportTime: '4 Hours', price: 800, order: 5 },
  { id: 'lt6', code: 'ECG-01', name: '12-Lead Standard Diagnostic ECG', category: 'ECG', sampleType: 'Non-Invasive Tracing', fastingRequired: false, reportTime: 'Immediate (15 mins)', price: 250, order: 6 },
];

const defaultArticles: Article[] = [
  {
    id: 'a1',
    type: 'EVENT',
    slug: 'annual-nuclear-medicine-symposium-2026',
    title: 'South Kerala Nuclear Medicine & Theranostics Symposium',
    excerpt: 'Swasti PET/CT hosts regional CME on advanced 177-Lu and 225-Ac targeted therapies for oncologists and physicians.',
    content: 'Swasti PET/CT Imaging and Nuclear Medicine invites practicing clinicians to an interactive symposium.',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    eventDate: '2026-11-28T09:30:00Z',
    location: 'Auditorium, Medical College Junction, Ulloor, Thiruvananthapuram',
    published: true,
    createdAt: new Date().toISOString(),
    author: 'Swasti Medical Editorial Team',
  },
  {
    id: 'a2',
    type: 'BLOG',
    slug: 'what-to-expect-during-pet-ct-scan',
    title: 'Preparing for Your PET/CT Scan: Complete Patient Guide',
    excerpt: 'Essential fasting guidelines, blood glucose requirements, and scan timeline explained step-by-step.',
    content: 'Getting a PET/CT scan can feel daunting if it is your first time. This article walks you through everything step by step.',
    coverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    published: true,
    createdAt: new Date().toISOString(),
    author: 'Swasti Medical Editorial Team',
  },
];

async function safeFetch<T>(endpoint: string, fallback: T): Promise<T> {
  // During build prerendering or when server is unavailable, instantly return built-in fallback
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return fallback;
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
      cache: 'no-store',
    });

    if (!res.ok) return fallback;
    const data = await res.json();
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function apiGetSettings(): Promise<SiteSetting> {
  return safeFetch<SiteSetting>('/settings', defaultSettings);
}

export async function apiGetServices(category?: string): Promise<Service[]> {
  const query = category ? `?category=${category}` : '';
  const filtered = category
    ? defaultServices.filter((s) => s.category.toUpperCase() === category.toUpperCase())
    : defaultServices;
  return safeFetch<Service[]>(`/services${query}`, filtered);
}

export async function apiGetServiceBySlug(slug: string): Promise<Service | null> {
  const matched = defaultServices.find((s) => s.slug === slug) || null;
  return safeFetch<Service | null>(`/services/${slug}`, matched);
}

export async function apiGetDoctors(): Promise<Doctor[]> {
  return safeFetch<Doctor[]>('/doctors', defaultDoctors);
}

export async function apiGetLabTests(category?: string): Promise<LabTest[]> {
  const query = category ? `?category=${category}` : '';
  const filtered = category
    ? defaultLabTests.filter((t) => t.category.toUpperCase() === category.toUpperCase())
    : defaultLabTests;
  return safeFetch<LabTest[]>(`/lab-tests${query}`, filtered);
}

export async function apiGetArticles(type?: string): Promise<Article[]> {
  const query = type ? `?type=${type}` : '';
  const filtered = type
    ? defaultArticles.filter((a) => a.type.toUpperCase() === type.toUpperCase())
    : defaultArticles;
  return safeFetch<Article[]>(`/articles${query}`, filtered);
}

export async function apiGetArticleBySlug(slug: string): Promise<Article | null> {
  const matched = defaultArticles.find((a) => a.slug === slug) || null;
  return safeFetch<Article | null>(`/articles/${slug}`, matched);
}

export async function apiGetAppointments(): Promise<Appointment[]> {
  return safeFetch<Appointment[]>('/appointments', []);
}

export { API_BASE_URL };
