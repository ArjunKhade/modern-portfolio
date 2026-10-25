import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Namaste React project with its Vercel demo link', () => {
    const project = component.projects.find(
      item => item.title === 'Namaste React – Restaurant Discovery App'
    );

    expect(project?.demoUrl).toBe('https://namaste-react-woad.vercel.app/');

    const demoLink = fixture.nativeElement.querySelector(
      'a[aria-label="Live Demo link for Namaste React – Restaurant Discovery App"]'
    ) as HTMLAnchorElement;
    expect(demoLink).toBeTruthy();
    expect(demoLink.href).toBe('https://namaste-react-woad.vercel.app/');
  });
});
