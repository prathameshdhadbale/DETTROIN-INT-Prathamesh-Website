# Excellence International School - Redesign

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/framer%20motion-%230055FF.svg?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

This project is a complete modern redesign of the **Excellence International School** (Aligarh) website, built as a submission for the Dettroin Full Stack Developer Internship (Round 1).

## 🚀 Live Demo

*(Deploy the app to Vercel or Netlify and place the link here)*

## 🎨 Design Philosophy
The goal was to move away from a traditional WordPress/Elementor template and create a **bespoke, modern, and highly engaging** user interface.
- **Color Palette:** Professional Navy (`#0F2A4A`), Trustworthy Teal (`#1A7A6D`), Accent Gold (`#D4A843`), and Clean Off-White (`#FAF7F2`).
- **Typography:** Modern sans-serif stack combining `Inter` (for readable body text) and `Outfit` (for bold, geometric headings).
- **Interactions:** Micro-interactions and scroll animations powered by Framer Motion to make the UI feel alive without being overwhelming.

## 🛠 Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using the new CSS-native `@theme` architecture)
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVGs

## 📂 Project Structure (Modular Architecture)
The codebase adheres strictly to a clean, component-driven architecture:
```
src/
├── components/
│   ├── common/         # Reusable UI (Navbar, Footer, SectionHeading, Buttons)
│   └── sections/       # Large page blocks (Hero, About, AcademicStages, etc.)
├── data/               # Centralized data (navigation.js, images.js)
├── layouts/            # Page layouts (MainLayout with Outlet)
├── pages/              # Route entry points (HomePage, AboutPage, etc.)
└── index.css           # Global Tailwind v4 theme and typography imports
```

## ⚡ Key Features Developed
- **Responsive Layout:** fully optimized from mobile (320px) to ultra-wide desktop displays.
- **Sticky Navigation:** Intelligent navbar with dropdowns and mobile hamburger drawer.
- **Dynamic Routing:** Multi-page SPA setup simulating the actual information architecture (Home, About, Academics, Admissions, Gallery, Contact).
- **Performance Optimized:** Centralized image registry, lazy loading, and modern build tooling via Vite.
- **SEO & Accessibility:** Proper semantic HTML, ARIA labels for interactive elements, and SEO meta tags included.
- **Custom Lightbox:** Built from scratch in the Gallery using Framer Motion.

## 💻 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---
*Built with ❤️ by Prathamesh Dhadbale for the Dettroin Internship Challenge.*
