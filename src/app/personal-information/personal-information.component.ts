import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  imports: [CommonModule]
})
export class PersonalInformationComponent {
  activeTab: 'bio' | 'profile' = 'bio';

  personalInfo = [
    { label: 'Name', value: 'Arjun Khade', icon: 'bx-user' },
    { label: 'Role', value: 'Full Stack Software Engineer', icon: 'bx-code-alt' },
    { label: 'Experience', value: '4 Years Industry Experience', icon: 'bx-time' },
    { label: 'Company', value: 'Aloha Technology, Pune', icon: 'bx-buildings' },
    { label: 'Email', value: 'khadearjun@gmail.com', icon: 'bx-envelope' },
    { label: 'Phone', value: '+91 8788225355 / 9545176916', icon: 'bx-phone' },
    { label: 'Location', value: 'Pune, Maharashtra, India', icon: 'bx-map' },
    { label: 'Education', value: 'PG-DAC (CDAC), BE (Engineering)', icon: 'bx-graduation' },
  ];

  aboutMeHighlights = [
    {
      title: 'Full Stack & Enterprise Architecture',
      description: 'Designing end-to-end scalable web applications using Java 17, Spring Boot, Spring Cloud microservices, and modern Angular/React client applications.'
    },
    {
      title: 'High-Throughput & Event-Driven Systems',
      description: 'Implementing distributed, event-driven messaging with Apache Kafka for real-time recommendations, async processing, and fault-tolerant communication.'
    },
    {
      title: 'AI & Next-Gen Integrations',
      description: 'Leveraging Google Gemini AI and LLM APIs to build intelligent recommendation engines, semantic search, and AI-assisted workflows.'
    },
    {
      title: 'Performance & Security Engineering',
      description: 'Hands-on optimization delivering +25% performance boost, offline PWA capabilities, lazy-loaded architectures, Keycloak OAuth2 security, and Docker containerization.'
    }
  ];

  codeSnippet = `/**
 * @developer Arjun Khade
 * @role Full Stack Engineer
 */
export const engineer = {
  name: "Arjun Khade",
  title: "Full Stack Software Developer",
  location: "Pune, MH, India",
  currentCompany: "Aloha Technology",
  experienceYears: 4,
  passions: ["Clean Code", "Microservices", "AI Systems", "High Perf"],
  technologies: {
    frontend: ["Angular 15-21", "Signals", "React.js", "TypeScript"],
    backend: ["Java 17", "Spring Boot", "Spring Cloud", "Kafka"],
    ai_cloud: ["Google Gemini AI", "Docker", "Keycloak OAuth2"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  availableForHire: true
};`;

  setActiveTab(tab: 'bio' | 'profile') {
    this.activeTab = tab;
  }
}
