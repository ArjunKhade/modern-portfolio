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
      role: 'Software Developer',
      company: 'Aloha Technology',
      duration: 'Jan 2023 - Present',
      description: [
        'Software Developer Experienced in developing responsive web applications using HTML5, CSS3, TypeScript, and Angular',
        'Integrated frontend with backend via REST APIs, using JWT for secure data exchange',
        'Implemented reusable components using Angular to boost-up application performance by 25%',
        'Built SEO-friendly, PWA, and static websites optimized for performance and accessibility by 20%',
        'Migrated Angular projects from v13 to v15 and v15 to v18 with minimal disruption',
        'Implemented reusable components and lazy loading to enhance app performance. ',
        'Implemented image optimization by serving modern formats like SVG and WebP, with PNG as fallback, improving app load time and performance. '

      ],
    },
  ];
}
