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
    'Hi, I am a software Engineer with 3+ year of experience in software industry.',
    'Worked as Sottware Developer in Aloha Technology for various technologies(Angular, ReactJS, Java, SpringBoot, .NetCore Web API)',
    'Delivered all products within deadlines. Always eager to learn new technologies',
    'Currently, working as Full Stack Software Developer At Aloha Technology Pune (Maharashtra)',
  ];
}
