import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  mydata: string[][] = [
    ['Name', 'Arjun Khade'],
    ['DOB', '15/08/1997'],
    ['MOB', '8788225355'],
    ['Email', 'khadearjun@gmail.com'],
    ['Work Exp', '3+ Year'],
    ['Education', 'PG-DAC, BE, DME'],
   
  ];

  aboutMe: string[] = [
  'I am a passionate Software Engineer focused on building efficient, scalable, and user-centric web applications.',
  'I have hands-on experience in frontend and backend development using technologies like Angular, React, and Java.',
  'I design and develop applications with clean architecture and modern UI/UX principles to deliver seamless digital experiences.',
  'I enjoy solving complex problems, optimizing performance, and creating intuitive and accessible user interfaces.',
  'I have experience working on healthcare software and full-stack solutions across diverse projects.',
  'I am driven by continuous learning and always strive to improve my technical and problem-solving skills.',
  'Currently working as a Full Stack Software Developer at Aloha Technology, Pune, Maharashtra.',
  'In my free time, I explore new frameworks, focus on fitness, and brainstorm innovative tech ideas.'
];
}
