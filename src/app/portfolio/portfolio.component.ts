import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanerComponent } from '../baner/baner.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectComponent } from '../project/project.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    BanerComponent,
    PersonalInformationComponent,
    SkillsComponent,
    ProjectComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <main id="main-content">
      <app-baner></app-baner>
      <app-personal-information></app-personal-information>
      <app-skills></app-skills>
      <app-project></app-project>
      <app-work-experience></app-work-experience>
      <app-education></app-education>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main {
      position: relative;
      z-index: 1;
    }
  `]
})
export class PortfolioComponent {}
