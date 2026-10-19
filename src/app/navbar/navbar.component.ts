import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  resumeUrl = 'assets/ArjunKhade_FullStackDev.pdf';

  navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Experience', link: '#experience' },
    { label: 'Education', link: '#education' },
    { label: 'Contact', link: '#contact' },
  ];

  constructor(private cdr: ChangeDetectorRef, public router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;

    if (this.isUpskillActive() || this.isResumeBuilderActive()) {
      this.activeSection = '';
      this.cdr.markForCheck();
      return;
    }

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
    this.cdr.markForCheck();
  }

  isUpskillActive(): boolean {
    return this.router.url.startsWith('/upskill');
  }

  isResumeBuilderActive(): boolean {
    return this.router.url.startsWith('/resume-builder');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onUpskillClick(e: Event) {
    this.closeMobileMenu();
    this.router.navigate(['/upskill']);
  }

  onResumeBuilderClick(e: Event) {
    this.closeMobileMenu();
    this.router.navigate(['/resume-builder']);
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();
    const cleanId = sectionId.replace('#', '');

    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/'], { fragment: cleanId }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(cleanId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      });
      return;
    }

    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
