import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  activeCategory: 'all' | 'frontend' | 'backend' | 'ai_cloud' | 'database' = 'all';

  categories = [
    { key: 'all', label: 'All Technologies', icon: 'bx-grid-alt' },
    { key: 'frontend', label: 'Frontend & UI', icon: 'bx-layout' },
    { key: 'backend', label: 'Backend & Cloud', icon: 'bx-server' },
    { key: 'ai_cloud', label: 'AI & Streaming', icon: 'bx-brain' },
    { key: 'database', label: 'Databases & Tools', icon: 'bx-data' },
  ];

  skills: Skill[] = [
    // Frontend
    { name: 'Angular (v13 - v21)', level: 'Expert', rating: 92, category: 'frontend', icon: 'bxl-angular', experience: '3+ Yrs' },
    { name: 'Signals & Reactive Architecture', level: 'Expert', rating: 90, category: 'frontend', icon: 'bx-broadcast', experience: '2+ Yrs' },
    { name: 'React.js & Redux Toolkit', level: 'Expert', rating: 86, category: 'frontend', icon: 'bxl-react', experience: '2+ Yrs' },
    { name: 'TypeScript & JavaScript (ES6+)', level: 'Expert', rating: 92, category: 'frontend', icon: 'bxl-typescript', experience: '3+ Yrs' },
    { name: 'HTML5, Modern CSS3, Tailwind', level: 'Expert', rating: 95, category: 'frontend', icon: 'bxl-css3', experience: '3+ Yrs' },
    { name: 'PWA & Service Workers', level: 'Advanced', rating: 88, category: 'frontend', icon: 'bx-mobile-alt', experience: '2+ Yrs' },

    // Backend
    { name: 'Java 17 & Spring Boot', level: 'Expert', rating: 90, category: 'backend', icon: 'bxl-spring-boot', experience: '3+ Yrs' },
    { name: 'Microservices & Spring Cloud', level: 'Expert', rating: 88, category: 'backend', icon: 'bx-network-chart', experience: '2.5+ Yrs' },
    { name: 'REST APIs & JWT Security', level: 'Expert', rating: 92, category: 'backend', icon: 'bx-code-curly', experience: '3+ Yrs' },
    { name: 'ASP.NET Core & EF Core', level: 'Intermediate', rating: 72, category: 'backend', icon: 'bx-laptop', experience: '1.5+ Yrs' },

    // AI & Streaming
    { name: 'Apache Kafka (Event-Driven)', level: 'Advanced', rating: 85, category: 'ai_cloud', icon: 'bx-transfer', experience: '2+ Yrs' },
    { name: 'Google Gemini AI Integration', level: 'Advanced', rating: 86, category: 'ai_cloud', icon: 'bx-chip', experience: '1.5+ Yrs' },
    { name: 'OpenAI API Integration', level: 'Advanced', rating: 84, category: 'ai_cloud', icon: 'bx-bot', experience: '1.5+ Yrs' },
    { name: 'Keycloak OAuth2 / PKCE Flow', level: 'Advanced', rating: 85, category: 'ai_cloud', icon: 'bx-shield-quarter', experience: '2+ Yrs' },

    // Databases & Tools
    { name: 'PostgreSQL & MySQL', level: 'Expert', rating: 88, category: 'database', icon: 'bx-cylinder', experience: '3+ Yrs' },
    { name: 'MongoDB', level: 'Advanced', rating: 82, category: 'database', icon: 'bx-data', experience: '2+ Yrs' },
    { name: 'Docker & Containerization', level: 'Advanced', rating: 84, category: 'database', icon: 'bxl-docker', experience: '2+ Yrs' },
    { name: 'Linux OS & Shell Scripting', level: 'Expert', rating: 90, category: 'database', icon: 'bxl-tux', experience: '3+ Yrs' },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(category: any) {
    this.activeCategory = category;
  }
}
