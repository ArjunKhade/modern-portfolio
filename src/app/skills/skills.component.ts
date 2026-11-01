import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  activeCategory: 'all' | 'frontend' | 'backend' | 'ai_cloud' | 'database' = 'all';

  categories = [
    { key: 'all', label: 'All Technologies', icon: 'bx-grid-alt' },
    { key: 'frontend', label: 'Frontend & UI', icon: 'bx-layout' },
    { key: 'backend', label: 'Backend & Messaging', icon: 'bx-server' },
    { key: 'database', label: 'Databases', icon: 'bx-data' },
    { key: 'ai_cloud', label: 'Cloud, DevOps & Tools', icon: 'bx-cloud' },
  ];

  skills: Skill[] = [
    // Frontend
    { name: 'Angular (v13 - v22)', level: 'Expert', rating: 92, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=angular', experience: '4 Yrs' },
    { name: 'TypeScript', level: 'Expert', rating: 92, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=ts', experience: '4 Yrs' },
    { name: 'JavaScript (ES6+)', level: 'Expert', rating: 92, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=js', experience: '4 Yrs' },
    { name: 'React.js & Redux', level: 'Expert', rating: 86, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=react', experience: '2+ Yrs' },
    { name: 'RxJS & Signals', level: 'Expert', rating: 90, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=reactivex', experience: '3+ Yrs' },
    { name: 'HTML5', level: 'Expert', rating: 95, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=html', experience: '4 Yrs' },
    { name: 'CSS3 & Sass', level: 'Expert', rating: 95, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=css', experience: '4 Yrs' },
    { name: 'Tailwind CSS', level: 'Advanced', rating: 88, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=tailwind', experience: '2+ Yrs' },
    { name: 'Material UI', level: 'Advanced', rating: 88, category: 'frontend', iconUrl: 'https://skillicons.dev/icons?i=materialui', experience: '3+ Yrs' },

    // Backend & Messaging
    { name: 'Java 17', level: 'Expert', rating: 90, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=java', experience: '4 Yrs' },
    { name: 'Spring Boot', level: 'Expert', rating: 90, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=spring', experience: '4 Yrs' },
    { name: 'Apache Kafka', level: 'Advanced', rating: 85, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=kafka', experience: '2+ Yrs' },
    { name: 'RabbitMQ', level: 'Advanced', rating: 84, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=rabbitmq', experience: '1.5+ Yrs' },
    { name: 'Node.js', level: 'Intermediate', rating: 75, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=nodejs', experience: '1.5+ Yrs' },
    { name: 'Express.js', level: 'Intermediate', rating: 72, category: 'backend', iconUrl: 'https://skillicons.dev/icons?i=express', experience: '1.5+ Yrs' },

    // Databases
    { name: 'PostgreSQL', level: 'Expert', rating: 88, category: 'database', iconUrl: 'https://skillicons.dev/icons?i=postgres', experience: '4 Yrs' },
    { name: 'MySQL', level: 'Expert', rating: 88, category: 'database', iconUrl: 'https://skillicons.dev/icons?i=mysql', experience: '4 Yrs' },
    { name: 'MongoDB', level: 'Advanced', rating: 82, category: 'database', iconUrl: 'https://skillicons.dev/icons?i=mongodb', experience: '2+ Yrs' },

    // Cloud, DevOps & Tools
    { name: 'Docker', level: 'Advanced', rating: 84, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=docker', experience: '2+ Yrs' },
    { name: 'Kubernetes', level: 'Intermediate', rating: 70, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=kubernetes', experience: '1+ Yrs' },
    { name: 'AWS', level: 'Advanced', rating: 80, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=aws', experience: '2+ Yrs' },
    { name: 'Google Cloud (GCP)', level: 'Advanced', rating: 78, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=gcp', experience: '1.5+ Yrs' },
    { name: 'Jenkins CI/CD', level: 'Advanced', rating: 82, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=jenkins', experience: '2+ Yrs' },
    { name: 'Git', level: 'Expert', rating: 92, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=git', experience: '4 Yrs' },
    { name: 'GitHub', level: 'Expert', rating: 92, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=github', experience: '4 Yrs' },
    { name: 'Postman', level: 'Expert', rating: 90, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=postman', experience: '4 Yrs' },
    { name: 'Linux', level: 'Expert', rating: 90, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=linux', experience: '4 Yrs' },
    { name: 'Vite', level: 'Advanced', rating: 82, category: 'ai_cloud', iconUrl: 'https://skillicons.dev/icons?i=vite', experience: '2+ Yrs' },
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
