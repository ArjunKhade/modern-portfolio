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

      @defer (on viewport; prefetch on idle) {
        <app-personal-information></app-personal-information>
      } @placeholder {
        <div id="about" style="min-height: 420px;"></div>
      }

      @defer (on viewport; prefetch on idle) {
        <app-skills></app-skills>
      } @placeholder {
        <div id="skills" style="min-height: 450px;"></div>
      }

      @defer (on viewport; prefetch on idle) {
        <app-project></app-project>
      } @placeholder {
        <div id="projects" style="min-height: 600px;"></div>
      }

      @defer (on viewport; prefetch on idle) {
        <app-work-experience></app-work-experience>
      } @placeholder {
        <div id="experience" style="min-height: 500px;"></div>
      }

      @defer (on viewport; prefetch on idle) {
        <app-education></app-education>
      } @placeholder {
        <div id="education" style="min-height: 400px;"></div>
      }

      @defer (on viewport; prefetch on idle) {
        <app-contact></app-contact>
      } @placeholder {
        <div id="contact" style="min-height: 400px;"></div>
      }
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
