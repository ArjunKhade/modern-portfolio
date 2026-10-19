# Modern Developer Portfolio & ATS Resume Hub 🚀

[![Angular Version](https://img.shields.io/badge/Angular-18%2B%20%2F%2019-dd0031.svg?style=for-the-badge&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse-100%25%20Best%20Practices-00f5a0.svg?style=for-the-badge&logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-5A0FC8.svg?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

A high-performance personal developer brand, interactive technical learning hub, and client-side ATS single-column resume builder engineered with modern **Angular Standalone Architecture**, **Zoneless Change Detection**, **Signals**, and **Core Web Vitals** optimizations.

---

## 🌟 Key Features

### 1. 💼 Interactive ATS Resume Builder (`/resume-builder`)
An in-browser single-column resume generation engine that creates clean, applicant tracking system (ATS) compliant resumes:
- **Multi-Format Ingestion**: Drag & drop or upload existing `.pdf`, `.docx` / `.doc`, or `.txt` resumes.
- **Client-Side Document Parsing**:
  - Extracts text from PDFs in the browser using `pdfjs-dist`.
  - Extracts formatted Word document text using `mammoth`.
  - Intelligently categorizes contact details, professional summaries, technical skills, work history, projects, education, and certifications via regex heuristics.
- **Live Single-Column ATS Canvas**: Authoritative single-column white paper format designed for high ATS parsing accuracy and zero column overlap.
- **Dynamic Personalization**:
  - **Color Themes**: Classic Navy, Modern Emerald, Executive Slate, Burgundy, Tech Indigo, Angular Red.
  - **Typography**: Inter (Modern Sans), Roboto (Clean), Georgia (Classic Serif), Merriweather (Editorial).
  - **Density Modes**: Compact (1-page fit), Standard, Relaxed.
- **Multi-Page Vector PDF Export**: Generates retina-sharp, multi-page vector-aligned downloadable PDFs using `html2canvas` and `jsPDF`.
- **Mobile-Optimized Workspace**: Responsive toggle between field editor and live preview, touch-scrollable tabs, and smooth native momentum scrolling.

### 2. 🧠 Technical Upskill Hub (`/upskill`)
An interactive technical masterclass and interview preparation resource designed for software engineers:
- **Angular Fundamentals (`/upskill/angular`)**:
  - Signals vs. RxJS reactivity patterns.
  - Zoneless Change Detection & modern Angular change detection cycles.
  - Control flow syntax (`@if`, `@for`, `@defer`, `@switch`).
  - Standalone Component architecture and tree-shakable dependency injection.
  - Lifecycle hooks, input/output signals, and memory leak mitigation.
- **JavaScript Core & Advanced (`/upskill/javascript`)**:
  - Event loop, microtasks, macrotasks, and execution contexts.
  - Prototypal inheritance, scope chains, and closures.
  - Promises, `async`/`await`, and concurrent asynchronous orchestration.
  - Memory management, V8 garbage collection (Mark & Sweep), and weak references (`WeakMap` / `WeakSet`).
- **Data Structures & Algorithms (`/upskill/dsa`)**:
  - LeetCode patterns with visual problem breakdowns.
  - Two Pointers, Sliding Window, Fast & Slow Pointers.
  - Trees, Graphs (BFS/DFS), and Dynamic Programming.
  - Step-by-step code snippets with space and time complexity analysis ($O(n)$, $O(\log n)$, $O(1)$).

### 3. 🎨 High-Aesthetics Developer Portfolio
- **Cyber Aesthetic Hero**: 60fps dynamic background particle mesh canvas running outside Angular's zone to prevent change detection overhead.
- **Animated Typing Effect**: Smooth dynamic role cycler showcasing full-stack capabilities.
- **Interactive Experience & Project Showcases**: Enterprise project highlights with direct GitHub repository and live demo links.
- **Glassmorphism Design System**: Tailored dark-mode palette, subtle neon gradients (`#00f5a0`, `#00d2ff`, `#a855f7`), and accessible high-contrast text tokens.

---

## ⚡ Engineering & Performance Best Practices

This repository demonstrates enterprise-grade front-end development standards:

### 1. Angular Core Architecture
- **Zoneless Change Detection**: Configured with `provideZonelessChangeDetection()` in `app.config.ts`, eliminating `zone.js` runtime overhead and providing predictable, high-speed signal updates.
- **Standalone Components**: 100% standalone structure without legacy `NgModule` bottlenecks.
- **Angular `@defer` Lazy Hydration**: Below-the-fold sections are lazy-loaded via `@defer (on viewport; prefetch on idle)`, dropping initial JavaScript transfer weight to **~94 kB**.
- **Lazy Loaded Routes**: Code-split routes loaded on demand via `loadComponent: () => import(...)`.

### 2. Core Web Vitals (LCP, TBT, CLS, FCP)
| Metric | Optimization Technique |
| :--- | :--- |
| **LCP** (Largest Contentful Paint) | Converted 1.4 MB hero image into an optimized **13.8 KB WebP** (99% reduction) served via `<picture>` with `fetchpriority="high"` and `<link rel="preload">`. |
| **TBT** (Total Blocking Time) | Canvas particle connections optimized with squared-distance threshold checks (`distSq < maxDistSq`), zero expensive `shadowBlur` canvas filters, and delayed initialization. |
| **CLS** (Cumulative Layout Shift) | Explicit `width` and `height` dimensions on all visual assets and skeleton placeholder minimum heights on deferred sections. |
| **FCP** (First Contentful Paint) | External Google Fonts and Boxicons styles loaded asynchronously via `<link rel="preload" as="style">` with `media="print" onload="this.media='all'"`. |

### 3. Progressive Web App (PWA) & Offline Reliability
- Configured with `@angular/service-worker` and `ngsw-config.json` for caching static assets and core shell chunks.
- Valid Web App Manifest (`manifest.webmanifest`) with multi-density launcher icons, standalone display mode, and theme color `#080c14`.

### 4. Search Engine Optimization (SEO) & Semantic Markup
- **JSON-LD Schema**: Embedded `Person` structured data for rich Google Search indexing.
- **Social Tags**: OpenGraph (`og:image`, `og:title`, `og:description`) and Twitter Card metadata.
- **Accessibility (a11y)**: High-contrast focus states, ARIA landmarks, `aria-label` attributes on interactive icon buttons, and semantic heading hierarchy (`h1` through `h4`).

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology |
| :--- | :--- |
| **Framework** | Angular 18+ / 19 (Standalone, Signals, Zoneless) |
| **Language** | TypeScript 5.x, HTML5, CSS3 Custom Properties |
| **Document Processing** | `pdfjs-dist` (PDF text extraction), `mammoth` (DOCX extraction) |
| **PDF Export** | `html2canvas`, `jspdf` |
| **Icons & Typography** | Boxicons, Google Fonts (Plus Jakarta Sans, JetBrains Mono, Inter) |
| **Image Processing** | `sharp` (Build-time WebP generation and asset optimization) |
| **Build & Tooling** | Angular CLI, Vite, Node.js |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.19.0 or higher
- **npm**: v9.0.0 or higher
- **Angular CLI**: `npm i -g @angular/cli`

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/ArjunKhade/modern-portfolio.git

# 2. Navigate to project root
cd modern-portfolio

# 3. Install dependencies
npm install
```

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

### Production Build
```bash
# Build optimized production bundle
ng build --configuration production
```
The build artifacts will be stored in the `dist/modern-portfolio/` directory.

### GitHub Pages Deployment
```bash
# Build with GitHub Pages base-href
ng build --configuration production --base-href /modern-portfolio/ --output-path docs
```

---

## 📂 Project Structure

```plaintext
modern-portfolio/
├── src/
│   ├── app/
│   │   ├── baner/                    # Hero section with cyber canvas & optimized portrait
│   │   ├── navbar/                   # Sticky glassmorphism nav with mobile drawer
│   │   ├── personal-information/     # About me, technical summary, and bio
│   │   ├── skills/                   # Categorized skills matrix
│   │   ├── project/                  # Featured full-stack and distributed projects
│   │   ├── work-experience/          # Career timeline and achievements
│   │   ├── education/                # Degrees and certifications
│   │   ├── contact/                  # Contact form and social links
│   │   ├── upskill/                  # Upskill hub root
│   │   │   ├── angular-fundamentals/ # In-depth Angular module
│   │   │   ├── javascript-fundamentals/ # JS engine, event loop & memory
│   │   │   └── dsa/                  # LeetCode patterns & problem solutions
│   │   ├── resume-builder/           # ATS single-column resume generator
│   │   │   ├── resume-builder.component.ts   # Signals state & PDF export
│   │   │   ├── resume-builder.component.html # Editor forms & ATS paper view
│   │   │   ├── resume-builder.component.css  # Dark controls & print rules
│   │   │   ├── resume-parser.service.ts      # PDF, DOCX, TXT parsers
│   │   │   └── resume.models.ts              # Data contracts & theme tokens
│   │   ├── app.config.ts             # App providers (zoneless, router, http)
│   │   └── app.routes.ts             # Lazy-loaded route definitions
│   ├── assets/                       # Static assets, WebP images, SVGs, and markdown
│   ├── styles.css                    # Design system tokens and global reset
│   └── index.html                    # SEO metadata, font preloads, and JSON-LD
├── angular.json                      # Angular workspace configuration & budgets
├── tsconfig.json                     # TypeScript compiler configuration
└── package.json                      # Project dependencies and npm scripts
```

---

## 👨‍💻 Author

**Arjun Khade**
- **Role**: Senior Full-Stack Software Developer (Angular, Java, Spring Boot & AI Solutions)
- **LinkedIn**: [linkedin.com/in/arjun-khade-ba825017b](https://www.linkedin.com/in/arjun-khade-ba825017b/)
- **GitHub**: [@ArjunKhade](https://github.com/ArjunKhade)
- **YouTube**: [@cdacengineer](https://www.youtube.com/@cdacengineer)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
