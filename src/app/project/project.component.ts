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
      githubUrl: 'https://github.com/ArjunKhade',
      description: [
        'Architected a distributed microservices platform providing personalized workout and nutrition plans via Google Gemini AI integration.',
        'Engineered event-driven message pipelines using Apache Kafka, decoupling Activity and AI recommendation consumers for real-time inference.',
        'Secured enterprise APIs with Keycloak OAuth2 PKCE flow, Spring Cloud Gateway centralized routing, and Eureka service discovery.',
        'Containerized microservices via Docker and applied database-per-service patterns using PostgreSQL & MongoDB with Spring Cloud Config Server.'
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
