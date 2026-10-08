import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding, ChangeDetectorRef } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NavbarComponent,
    BanerComponent,
    PersonalInformationComponent,
    SkillsComponent,
    ProjectComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactComponent
  ]
})
export class AppComponent {
  title = 'my-portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(
    private bpo: BreakpointObserver,
    private element: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.bpo
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcMode = false;
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcMode = true;
              }
            }
          }
          this.cdr.markForCheck();
        },
      });
  }
}
