import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface UpskillCourse {
  id: string;
  icon: string;
  title: string;
  description: string;
  topicsCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  route: string;
  available: boolean;
  color: string;
}

@Component({
  selector: 'app-upskill',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './upskill.css',
  templateUrl: './upskill.html',
})
export class Upskill {
  readonly courses: UpskillCourse[] = [
    {
      id: 'dsa',
      icon: 'DSA',
      title: 'DSA Problem Solving',
      description: 'Famous LeetCode interview questions (Two Sum, Kadane, Sliding Window, Stack, Trees) with full code & video solutions.',
      topicsCount: 8,
      difficulty: 'Advanced',
      route: '/upskill/dsa',
      available: true,
      color: '#a855f7',
    },
    {
      id: 'javascript',
      icon: '𝗝𝗦',
      title: 'JavaScript Fundamentals',
      description: 'Core concepts: execution context, hoisting, closures, async/await, ES6+ features and interview-ready patterns.',
      topicsCount: 13,
      difficulty: 'Intermediate',
      route: '/upskill/javascript',
      available: true,
      color: '#f7df1e',
    },
    {
      id: 'angular',
      icon: '🔺',
      title: 'Angular',
      description: 'Components, directives, services, RxJS, change detection, routing, forms and Angular best practices.',
      topicsCount: 0,
      difficulty: 'Advanced',
      route: '/upskill/angular',
      available: false,
      color: '#dd0031',
    },
    {
      id: 'react',
      icon: '⚛',
      title: 'React',
      description: 'Hooks, context, state management, performance optimization, and modern React patterns.',
      topicsCount: 0,
      difficulty: 'Intermediate',
      route: '/upskill/react',
      available: false,
      color: '#61dafb',
    },
    {
      id: 'java',
      icon: '☕',
      title: 'Java',
      description: 'OOP, collections, multithreading, JVM internals, design patterns and Java best practices.',
      topicsCount: 0,
      difficulty: 'Intermediate',
      route: '/upskill/java',
      available: false,
      color: '#f89820',
    },
    {
      id: 'spring-boot',
      icon: '🍃',
      title: 'Spring Boot',
      description: 'REST APIs, dependency injection, Spring Security, JPA/Hibernate, and microservice foundations.',
      topicsCount: 0,
      difficulty: 'Advanced',
      route: '/upskill/spring-boot',
      available: false,
      color: '#6db33f',
    },
    {
      id: 'microservices',
      icon: '🔗',
      title: 'Microservices',
      description: 'Architecture patterns, service discovery, API gateway, event-driven design and distributed systems.',
      topicsCount: 0,
      difficulty: 'Advanced',
      route: '/upskill/microservices',
      available: false,
      color: '#00d2ff',
    },
    {
      id: 'docker',
      icon: '🐳',
      title: 'Docker',
      description: 'Containerization, Dockerfile, docker-compose, networking, volumes and container orchestration basics.',
      topicsCount: 0,
      difficulty: 'Intermediate',
      route: '/upskill/docker',
      available: false,
      color: '#2496ed',
    },
    {
      id: 'kubernetes',
      icon: '⎈',
      title: 'Kubernetes',
      description: 'Pods, deployments, services, ingress, ConfigMaps, Helm charts and cluster management.',
      topicsCount: 0,
      difficulty: 'Advanced',
      route: '/upskill/kubernetes',
      available: false,
      color: '#326ce5',
    },
    {
      id: 'jenkins',
      icon: '🔧',
      title: 'Jenkins',
      description: 'CI/CD pipelines, Jenkinsfile, plugins, agents, declarative pipelines and DevOps automation.',
      topicsCount: 0,
      difficulty: 'Intermediate',
      route: '/upskill/jenkins',
      available: false,
      color: '#d33833',
    },
  ];

  constructor(private router: Router) {}

  navigate(course: UpskillCourse) {
    if (course.available) {
      this.router.navigate([course.route]);
    }
  }

  getDifficultyColor(diff: string): string {
    switch (diff) {
      case 'Beginner': return 'var(--primary)';
      case 'Intermediate': return '#f7df1e';
      case 'Advanced': return '#f87171';
      default: return 'var(--text-muted)';
    }
  }
}
