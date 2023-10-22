import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular, Angular Material', level: 'Expert', rating: 85 },
    { name: 'ASP .NET Core, EF Core', level: 'Intermidiate', rating: 70 },
    { name: 'HTML, CSS, JS, TS', level: 'Expert', rating: 90 },

    { name: 'ReactJS', level: 'Expert', rating: 85 },
    { name: 'Java, SpringBoot', level: 'Expert', rating: 90 },
    { name: 'Linux', level: 'Expert', rating: 90 },
  ];
}
