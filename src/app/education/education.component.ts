import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'CDAC ACTS Pune',
      course: 'PG-DAC',
      duration: 'March(2022)-Sept(2022)',
      score: '76%',
    },
    {
      institute: 'Sanjivani College of Engineering',
      course: 'BE',
      duration: '2016-2019',
      score: '7 CGPA',
    },
    {
      institute: 'Government Polytechnic Aurangabad',
      course: 'DME',
      duration: '2013-2016',
      score: '79%',
    },
    {
      institute: 'ZPHS Manoor',
      course: 'SSC',
      duration: '2013',
      score: '88%',
    },
  ];
}
