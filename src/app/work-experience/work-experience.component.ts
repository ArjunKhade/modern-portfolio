import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Full Stack Software Developer',
      company: 'Aloha Technology',
      duration: 'Jan 2023 – Present · Pune, India',
      metrics: ['+25% Performance Boost', 'Angular v13-v18 Migration', 'Offline PWA Ready', 'JWT Security'],
      description: [
        'Architected and delivered mission-critical healthcare web applications using Angular 15+, TypeScript, Java 17, and Spring Boot.',
        'Engineered decoupled, reusable component libraries and lazy-loading route architectures, cutting bundle load times and boosting application responsiveness by 25%.',
        'Spearheaded enterprise Angular framework upgrades from v13 through v15 and v18 with zero production downtime and seamless regression testing.',
        'Implemented Progressive Web App (PWA) offline capabilities and automated Service Worker caching strategies, boosting audit scores by 20%.',
        'Constructed high-speed media delivery pipelines utilizing modern WebP and SVG vector formats with fallback strategies, optimizing First Contentful Paint (FCP).',
        'Designed secure communication protocols between frontend clients and backend microservices using JWT authentication, OAuth2, and CORS hardening.'
      ],
    },
  ];
}
