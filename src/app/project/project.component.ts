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
    title: 'AI-Powered Fitness Application',
    technology:
      'Java, Spring Boot, Spring Cloud, Eureka, API Gateway, Apache Kafka, Keycloak, OAuth2, Google Gemini AI, PostgreSQL, MongoDB, REST APIs, Docker, React',
    description: [
      'Aim and Objective: Developed an AI-powered fitness platform using a microservices architecture to provide personalized workout recommendations.',
      'Designed independently deployable services including User, Activity, and AI Recommendation services using Java 17, Spring Boot, and Spring Cloud.',
      'Implemented event-driven communication using Apache Kafka, where Activity Service acts as Producer and AI Service as Consumer for real-time recommendations.',
      'Integrated Google Gemini AI API to generate intelligent fitness suggestions based on user activity data.',
      'Secured APIs using Keycloak with OAuth2 and PKCE flow, with centralized routing and token validation via Spring Cloud Gateway and service discovery using Eureka Server.',
      'Applied database-per-service pattern using PostgreSQL and MongoDB, and managed configurations using Spring Cloud Config Server.',
      'Containerized services like Kafka and Keycloak using Docker and integrated a React frontend with secure backend APIs through API Gateway.',
    ],
  },
  {
    title: 'Netflix GPT - AI Movie Streaming Application',
    technology:
      'React.js, Redux Toolkit, Firebase Auth & Hosting, TMDB API, OpenAI API, Tailwind CSS, React Router DOM, JavaScript, HTML, CSS',
    description: [
      'Aim and Objective: Built a Netflix-style movie streaming web application with AI-powered search and personalized recommendations.',
      'Implemented secure authentication using Firebase with protected routes and auth-state based redirection.',
      'Managed application state including user profile, language preferences, and movie data using Redux Toolkit.',
      'Integrated TMDB API for dynamic movie catalog and optimized API usage using environment variables and caching techniques.',
      'Developed AI-powered search functionality using OpenAI API for enhanced user experience.',
      'Designed a responsive and multi-language user interface using Tailwind CSS.',
      'Optimized performance by reducing unnecessary network calls and improving data handling.',
    ],
  },
  {
    title: 'FreshCart- Online Store',
    technology:
      ' ReactJS, Java, Spring Boot, Spring Data Jpa, Spring Security, HTML, CSS, BootStrap, MySQL, Docker, AWS ',
    description: [
      'Aim and Objective : This project provide Online selling platform for vegetables, fruits, dairy products.',
      'It is a form of E-Commerce website which allows customers to directly buy products and sellers to sell the products from the internet using a web browser or mobile.',
      'Responsiblities: Developed Rest Api with SpringBoot as Backend and MySQL for Database support. Constructed SpringBoot four layers including model , DAO , service , and controller. Normalized complicated relationships among tables to optimize data structure.',
      'Developed Single Page Application with ReactJs as Frontend , Applied routing with react-router-dom. Customized routing to build interceptor for authorization among all pages to ensure validation of current user.',
      'Building Alert actions and Error Actions to handle alerts and errors from all components.',
      'Applied axios to send HTTP requests including GET, POST, PUT and DELETE. Used CORS to solve cross-origin issues.',
      'Used RestController to map APIs and return ResponseEntity from backend. Worked in Agile/Scrum development environment.',
    ],
  },
  {
    title: 'Electronic Visit Verification (EVV) Progressive Web Application(PWA)',
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
  {
  title: 'Task Tracker – Todo Application',
  technology:
    'Angular 21, Signals, TypeScript, Template-driven Forms, Angular CLI, Responsive Web Design',
  description: [
    'Aim and Objective: Built a responsive task management web application to efficiently create, manage, and track daily tasks.',
    'Developed using Angular 21 with Signals for modern reactive state management and improved performance.',
    'Implemented modular and reusable components following a clean component-based architecture.',
    'Created features to add, edit, delete, and filter tasks with real-time updates.',
    'Used template-driven forms for user input handling and validation.',
    'Designed a mobile-friendly and responsive UI to ensure seamless usage across devices.',
  ],
}
];
}
