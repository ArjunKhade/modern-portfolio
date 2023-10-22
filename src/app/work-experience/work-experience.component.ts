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
        'Worked with multiple teams to Develope Desktop and Web applications ',
        'Worked on diffrent technologies such as (.Net Core , Angular , ReactJs , Java)',
      ],
    },
  ];
}
