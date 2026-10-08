import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule]
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'CDAC ACTS, Pune',
      course: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
      duration: 'Mar 2022 – Sep 2022',
      score: '76.00%',
      details: [
        'Advanced coursework in Java, Spring Boot, Microservices, Data Structures & Algorithms, React, and Database Internals.',
        'Hands-on collaborative enterprise software project lifecycle and agile development.'
      ],
    },
    {
      institute: 'Sanjivani College of Engineering, Kopargaon',
      course: 'Bachelor of Engineering (BE)',
      duration: '2016 – 2019',
      score: '7.00 CGPA',
      details: [
        'Engineering principles, analytical problem solving, system logic design, and applied mathematics.',
        'Active participant in technical symposiums and university events.'
      ],
    },
    {
      institute: 'Government Polytechnic, Aurangabad',
      course: 'Diploma in Mechanical Engineering (DME)',
      duration: '2013 – 2016',
      score: '79.00%',
      details: [
        'Foundations of design, engineering physics, technical drawing, and analytical computing.'
      ],
    },
    {
      institute: 'Z.P. High School, Manoor',
      course: 'Secondary School Certificate (SSC)',
      duration: '2013',
      score: '88.00%',
      details: [
        'Graduated with Distinction in Mathematics and Physical Sciences.'
      ],
    },
  ];
}
