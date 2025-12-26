import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @ViewChild('contentDiv') contentDiv!: ElementRef;
  divHeight: number = 0;
  winht: number = 0;
  ngAfterViewInit() {
    // Calculate the height based on the content
    this.divHeight = this.contentDiv.nativeElement.scrollHeight;
    this.winht = window.innerHeight;

    console.log('Dynamic' + this.divHeight);
    console.log('Dynamic' + this.winht);
  }
  projects: Project[] = [
    {
      title: 'FreshCart- Online Store',
      technology:
        ' ReactJS, Java, Spring Boot, Spring Data Jpa, Spring Security, HTML, CSS, BootStrap, MySQL, Docker, AWS ',
      description: [
        'Aim and Objective : This project provide Online selling platform for vegetables, fruits, dairy products.',
        'It is a form of E-Commerce website which allows customers to directly buy products and sellers to sell the products from the internet using a web browser or mobile. ',
        'Responsiblities: Developed Rest Api with SpringBoot as Backend and MySQL for Database support. Constructed SpringBoot four layers including model , DAO , service , and controller. Normalized complicated relationships among tables to optimize data structure.',
        'Developed Single Page Application with ReactJs as Frontend , Applied routing with react-router-dom .Customized routing to build as interceptor for authorization among all pages to ensure the validation of current user.',
        'Building Alert actions and Error Actions to handle alert and error from all the other component.',
        'Applied axios to send http request including get , post put and delete. Used cross-origin to solve CORS problem.',
        'RestController to control mapping of API address and send ResponseEntity out of back-end. Worked in agile/scrum develoment environment.',
      ],
    },
    {
      title: 'Mobile PWA Application',
      technology:
        ' Angular, Angular PWA, TypeScript, HTML, CSS, Service Workers',
      description: [
        'Aim and Objective : This project delivers a Progressive Web Application with offline support and native-like experience using Angular PWA and Service Workers.',
        'It provides users with seamless access to application features even without internet connectivity, ensuring reliability and performance across devices.',
        'Responsibilities: Implemented caching strategies for static assets and API data to enable offline access. Configured manifest files and enabled app installation on devices for native-like usability.',
        'Integrated Angular Service Worker to handle background synchronization and automatic update management, ensuring smooth user experience.',
        'Optimized application performance through audits and improvements, verified using Lighthouse to meet PWA standards.',
      ],
    },
  ];
}
