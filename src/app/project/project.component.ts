import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  imports: [CommonModule]
})
export class ProjectComponent {
  activeFilter: 'all' | 'ai' | 'fullstack' | 'frontend' = 'all';
  expandedProjectIndex: number | null = null;

  filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & Microservices' },
    { key: 'fullstack', label: 'Full Stack Systems' },
    { key: 'frontend', label: 'Angular & PWA' },
  ];

  projects: Project[] = [
    {
      title: 'AI-Powered Fitness Application',
      category: 'ai',
      featured: true,
      technology: 'Java 17, Spring Boot, Spring Cloud, Apache Kafka, Google Gemini AI, Keycloak OAuth2, Docker, React',
      techBadges: ['Spring Boot', 'Kafka', 'Gemini AI', 'Keycloak', 'Docker', 'React'],
      icon: 'bx-dumbbell',
      githubUrl: 'https://github.com/ArjunKhade/fitness-microservice',
      description: [
        'Architected a distributed microservices platform providing personalized workout and nutrition plans via Google Gemini AI integration.',
        'Engineered event-driven message pipelines using Apache Kafka, decoupling Activity and AI recommendation consumers for real-time inference.',
        'Secured enterprise APIs with Keycloak OAuth2 PKCE flow, Spring Cloud Gateway centralized routing, and Eureka service discovery.',
        'Containerized microservices via Docker and applied database-per-service patterns using PostgreSQL & MongoDB with Spring Cloud Config Server.'
      ],
    },
    {
      title: 'FinEase: Digital Banking Platform',
      category: 'ai',
      featured: true,
      technology: 'Java 17, Spring Boot 3, Spring Cloud, Angular 22, Keycloak IAM, RabbitMQ, Redis, OpenFeign, Docker, MySQL',
      techBadges: ['Spring Boot 3', 'Spring Cloud', 'Angular 22', 'RabbitMQ', 'Keycloak IAM', 'Redis', 'Docker'],
      icon: 'bx-credit-card',
      githubUrl: 'https://github.com/ArjunKhade/finease-banking-made-easy',
      description: [
        'Architected a production-grade, event-driven digital banking platform using Spring Boot 3, Spring Cloud (Eureka, Gateway, Config Server), and Angular 22 with reactive signals.',
        'Implemented edge security via Spring Cloud Gateway with Keycloak IAM (OAuth2/OIDC PKCE flow, Direct Grant, and RBAC) and Redis token-bucket rate limiting.',
        'Engineered unified customer dashboard aggregation via Spring Cloud OpenFeign, synchronously combining Accounts, Cards, and Loans microservices.',
        'Designed an asynchronous event-driven notification pipeline using RabbitMQ and Spring Cloud Stream functions (email & SMS dispatch with delivery confirmation callbacks).',
        'Configured multi-environment container orchestration using Docker Compose (Default, QA, Prod) with centralized configuration and Eureka service discovery.'
      ],
    },
    {
      title: 'Netflix GPT – AI Movie Streaming Platform',
      category: 'ai',
      featured: true,
      technology: 'React.js, Redux Toolkit, OpenAI API, TMDB API, Firebase Auth & Hosting, Tailwind CSS',
      techBadges: ['React.js', 'Redux Toolkit', 'OpenAI API', 'TMDB API', 'Firebase', 'Tailwind CSS'],
      icon: 'bx-movie-play',
      demoUrl: 'https://arjunkhade.github.io/netflix-gpt/',
      githubUrl: 'https://github.com/ArjunKhade',
      description: [
        'Built a cinematic movie streaming web app featuring an intelligent AI-assisted search engine powered by OpenAI API.',
        'Managed complex application state, user preferences, and movie catalogs seamlessly using Redux Toolkit.',
        'Configured Firebase Authentication with protected client routes, automatic auth-state persistence, and CDN deployment.',
        'Implemented TMDB catalog integration with client-side caching and dynamic multi-language localization.'
      ],
    },
    {
      title: 'Developer Portfolio, Technical Upskill Hub & ATS Resume Builder',
      category: 'frontend',
      featured: true,
      technology: 'Angular v22, TypeScript, Angular Signals, Zoneless Change Detection, PWA & SwUpdate, pdfjs-dist, mammoth, html2canvas, jsPDF',
      techBadges: ['Angular v22', 'Signals', 'Zoneless', 'PWA & Offline', 'ATS Parser', 'PDF Engine'],
      icon: 'bx-code-alt',
      demoUrl: 'https://www.cdacengineer.in/',
      githubUrl: 'https://github.com/ArjunKhade/modern-portfolio',
      description: [
        'Engineered high-performance developer platform and learning hub using Angular v22, Zoneless Change Detection, and fine-grained Angular Signals for reactive state with zero zone.js overhead.',
        'Built an in-browser single-column ATS Resume Builder parsing PDF and DOCX files via pdfjs-dist and mammoth, with real-time styling controls and multi-page vector PDF generation using html2canvas and jsPDF.',
        'Implemented an installable Progressive Web App (PWA) with background service worker asset caching, custom install prompts, and SwUpdate live auto-update notifications.',
        'Curated an interactive Technical Upskill Hub covering Angular v22 modern architecture, advanced JavaScript internals, and LeetCode algorithmic patterns.',
        'Optimized Core Web Vitals to achieve near-perfect Lighthouse scores, reducing initial bundle transfer size to ~94 kB using Angular @defer lazy hydration.'
      ],
    },
    {
      title: 'HRMS | Human Resource Management System',
      category: 'fullstack',
      featured: true,
      technology: 'Angular, TypeScript, Angular Material, RxJS, NgRx, Angular Signals, Java, Spring Boot, Spring Security, Spring Data JPA, MySQL, REST API, JWT, Docker, Jenkins, CI/CD, Playwright',
      techBadges: ['Angular', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'Jenkins', 'Playwright'],
      icon: 'bx-id-card',
      githubUrl: 'https://github.com/ArjunKhade/ems-portal',
      description: [
        'Developed EMS Portal, a full-stack Employee Management System using Angular, TypeScript, RxJS, and Angular Signals on the frontend and Java Spring Boot with Spring Security and Spring Data JPA on the backend, following REST API and layered architecture (Controller-Service-Repository) design principles.',
        'Implemented JWT-based authentication and role-based access control (RBAC) to secure API endpoints and enforce user-level authorization across the application.',
        'Built responsive UI components using Angular Material and Angular Reactive Forms with robust form validation, and engineered a dashboard supporting pagination, searching, and sorting for efficient data management.',
        'Designed DTO-Entity mapping to decouple API contracts from persistence models, improving maintainability and scalability of the Spring Boot REST API.',
        'Containerized the application using Docker and Docker Compose, orchestrating independent frontend, backend, and MySQL database services.',
        'Architected an end-to-end CI/CD pipeline using Jenkins, automating Docker image builds, container deployment, and Playwright end-to-end (E2E) testing, with automated HTML test reporting and artifact archiving for every build.'
      ],
    },
    {
      title: 'FreshCart – Enterprise E-Commerce Store',
      category: 'fullstack',
      featured: false,
      technology: 'Java, Spring Boot, Spring Data JPA, Spring Security, MySQL, ReactJS, Docker, AWS',
      techBadges: ['Java 17', 'Spring Boot', 'Spring Security', 'MySQL', 'ReactJS', 'Docker', 'AWS'],
      icon: 'bx-cart-alt',
      githubUrl: 'https://github.com/ArjunKhade/CDAC-Project',
      description: [
        'Engineered a scalable multi-vendor eCommerce platform supporting dairy, fruits, and organic products.',
        'Constructed high-performance RESTful APIs with Spring Boot 4-tier architecture (Controller, Service, DAO, Model).',
        'Normalized relational schemas in MySQL and resolved complex relational mappings with optimized JPA queries.',
        'Secured user authentication and role-based permissions with customized Spring Security and Axios JWT interceptors.'
      ],
    },
    {
      title: 'Electronic Visit Verification (EVV) Progressive Web App',
      category: 'frontend',
      featured: false,
      technology: 'Angular, Angular PWA, TypeScript, Service Workers, IndexedDB, Lighthouse Audits',
      techBadges: ['Angular PWA', 'TypeScript', 'Service Workers', 'Offline Sync', 'Lighthouse 99%'],
      icon: 'bx-check-shield',
      githubUrl: 'https://github.com/ArjunKhade',
      description: [
        'Developed an offline-first Healthcare Progressive Web App (PWA) guaranteeing uninterrupted field operations.',
        'Configured Angular Service Workers for background data synchronization, asset caching, and offline state management.',
        'Enabled device installation (Add to Home Screen) with full Web App Manifest and native-like responsiveness.',
        'Achieved near-perfect Lighthouse scores for PWA, accessibility, SEO, and load performance.'
      ],
    },
    {
      title: 'Task Tracker – Modern Signal Todo App',
      category: 'frontend',
      featured: false,
      technology: 'Angular 21, Signals, TypeScript, Template-driven Forms, Clean Architecture',
      techBadges: ['Angular 21', 'Signals', 'TypeScript', 'Reactive State', 'Responsive'],
      icon: 'bx-task',
      demoUrl: 'https://arjunkhade.github.io/my-task/',
      githubUrl: 'https://github.com/ArjunKhade',
      description: [
        'Created a cutting-edge productivity dashboard leveraging Angular 21 Signals for granular, zero-overhead reactivity.',
        'Designed modular, self-contained components following standalone clean architecture patterns.',
        'Implemented real-time filtering, dynamic task prioritizing, and robust form validation.',
        'Ensured full responsive fidelity across mobile, tablet, and ultra-wide displays.'
      ],
    },
    {
      title: 'Namaste React – Restaurant Discovery App',
      category: 'frontend',
      featured: false,
      technology: 'React 18, React Router DOM, Parcel, JavaScript, CSS',
      techBadges: ['React 18', 'React Router', 'Parcel', 'JavaScript', 'Responsive UI'],
      icon: 'bx-restaurant',
      demoUrl: 'https://namaste-react-woad.vercel.app/',
      githubUrl: 'https://github.com/ArjunKhade/Namaste-React',
      description: [
        'Built a responsive restaurant discovery app with restaurant search and a top-rated restaurant filter.',
        'Implemented restaurant detail pages with menu information and a lazy-loaded grocery route using React Router.',
        'Bundled the application with Parcel and configured client-side routing for production hosting on Vercel and GitHub Pages.'
      ],
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: any) {
    this.activeFilter = filter;
  }

  toggleExpand(index: number) {
    this.expandedProjectIndex = this.expandedProjectIndex === index ? null : index;
  }
}
