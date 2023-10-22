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
    ['Work Exp', '1 Year'],
    ['Education', 'PG-DAC(2022) BE(2019) DME(2016)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a software Engineer with 1 year of experience in software industry.',
    'Worked as Sottware Developer in Aloha Technology for various technologies(Angular , ReactJS, .NetCore ,Java)',
    'Delivered all products within deadlines. Always eager to learn new technologies',
    'Currently, working as Software Developer(FrontEnd) At Aloha Technology Pune (Maharashtra)',
  ];
}
