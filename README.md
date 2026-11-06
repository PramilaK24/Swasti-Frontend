# Swasti PET/CT & Nuclear Medicine - Frontend Web Application

Modern healthcare diagnostic portal and CMS client for **Swasti PET/CT Imaging & Nuclear Medicine** in Ulloor, Trivandrum (A Flagship of Nucleuz Healthcare Pvt. Ltd.).

## Tech Stack
- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS with dynamic Light/Dark theme support
- **Icons:** Lucide React
- **State & Theme:** React Context API with zero-FOUC inline hydration script

## Key Features
- **Dynamic Contemporary Hero Banner Slider:** 3 high-impact clinical slides with Ken-Burns animations, interactive progress dock, touch-swipe, and pause-on-hover.
- **Complete Dark & Light Themes:** Toggle in desktop and mobile navigation, persisted in `localStorage` with system preference detection.
- **20 Specialized Medical Routes:** Whole-body PET/CT, 32-slice CT, Gamma Camera, Theranostics suites (177-Lu & 225-Ac), Specialty OPD Clinics, NABL Lab, SPARK Kerala guidance, Doctors directory, and Medical blogs.
- **Priority Appointment Modal:** Booking form with real-time Express API integration.
- **Super Admin CMS:** Live template customizer, appointments management inbox, services manager, and doctor roster editor.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```
