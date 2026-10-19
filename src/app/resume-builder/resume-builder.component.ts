import {
  Component,
  signal,
  inject,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  ResumeData,
  ResumeExperience,
  ResumeProject,
  ResumeEducation,
  ResumeCertification,
  ResumeThemeColor,
  ResumeFontFamily,
  ResumeSpacing,
} from './resume.models';
import { ResumeParserService } from './resume-parser.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css',
})
export class ResumeBuilderComponent {
  private parserService = inject(ResumeParserService);

  @ViewChild('resumeDoc') resumeDocRef?: ElementRef<HTMLDivElement>;

  // Resume State
  readonly resumeData = signal<ResumeData>(this.parserService.getSampleResume());
  readonly isParsing = signal<boolean>(false);
  readonly parseSuccessMsg = signal<string | null>(null);
  readonly parseError = signal<string | null>(null);
  readonly uploadedFileName = signal<string | null>(null);
  readonly isDragging = signal<boolean>(false);
  readonly isGeneratingPdf = signal<boolean>(false);

  // Editor Navigation & Customization
  readonly activeEditorTab = signal<'personal' | 'summary' | 'experience' | 'projects' | 'skills' | 'education'>('personal');
  readonly mobileView = signal<'preview' | 'editor'>('preview');
  readonly themeColor = signal<ResumeThemeColor>('navy');
  readonly fontFamily = signal<ResumeFontFamily>('inter');
  readonly spacingDensity = signal<ResumeSpacing>('normal');

  // Theme color hex map for single-column header lines
  readonly themeColors: { id: ResumeThemeColor; label: string; hex: string }[] = [
    { id: 'navy', label: 'Classic Navy', hex: '#1e3a8a' },
    { id: 'emerald', label: 'Modern Emerald', hex: '#047857' },
    { id: 'charcoal', label: 'Executive Slate', hex: '#1e293b' },
    { id: 'burgundy', label: 'Burgundy', hex: '#881337' },
    { id: 'indigo', label: 'Tech Indigo', hex: '#4338ca' },
    { id: 'angularRed', label: 'Angular Red', hex: '#dd0031' },
  ];

  // Font family choices
  readonly fontFamilies: { id: ResumeFontFamily; label: string; css: string }[] = [
    { id: 'inter', label: 'Inter (Modern Sans)', css: "'Inter', sans-serif" },
    { id: 'roboto', label: 'Roboto (Clean)', css: "'Roboto', sans-serif" },
    { id: 'georgia', label: 'Georgia (Classic Serif)', css: "'Georgia', serif" },
    { id: 'merriweather', label: 'Merriweather (Editorial)', css: "'Merriweather', serif" },
  ];

  // Drag and drop handlers
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  async handleFile(file: File): Promise<void> {
    const validExtensions = ['pdf', 'doc', 'docx', 'txt'];
    const ext = file.name.split('.').pop()?.toLowerCase() || '';

    if (!validExtensions.includes(ext)) {
      this.parseError.set('Unsupported file format. Please upload a PDF, DOCX, DOC, or TXT file.');
      return;
    }

    this.isParsing.set(true);
    this.parseError.set(null);
    this.parseSuccessMsg.set(null);
    this.uploadedFileName.set(file.name);

    try {
      const result = await this.parserService.parseFile(file);
      this.resumeData.set(result.data);
      this.parseSuccessMsg.set(
        `Successfully extracted profile data from ${file.name}! Your single-column ATS resume has been updated.`
      );
      this.isParsing.set(false);
    } catch (err: any) {
      console.error('File parsing error', err);
      this.parseError.set(
        err.message || 'Failed to parse file. Please verify file content or try a TXT/DOCX format.'
      );
      this.isParsing.set(false);
    }
  }

  loadSampleResume(): void {
    this.resumeData.set(this.parserService.getSampleResume());
    this.uploadedFileName.set('ArjunKhade_FullStackDev.pdf (Sample)');
    this.parseSuccessMsg.set('Loaded sample profile. Edit fields on the left or click Download PDF!');
    this.parseError.set(null);
  }

  resetResume(): void {
    this.resumeData.set({
      personalInfo: {
        fullName: 'Candidate Name',
        jobTitle: 'Software Engineer',
        email: 'your.name@example.com',
        phone: '+1 234 567 8900',
        location: 'City, Country',
        linkedin: 'linkedin.com/in/username',
        github: 'github.com/username',
        portfolio: 'https://portfolio.dev',
      },
      summary: 'Write a compelling 2-3 sentence overview highlighting your key technical strengths, engineering achievements, and career focus.',
      skills: {
        languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'],
        frameworks: ['Angular', 'React', 'Spring Boot', 'Node.js'],
        toolsAndCloud: ['Docker', 'Git', 'Kubernetes', 'AWS', 'CI/CD'],
        databases: ['PostgreSQL', 'MongoDB', 'Redis'],
        other: ['Microservices', 'RESTful APIs', 'System Design'],
      },
      experience: [
        {
          id: 'exp-new-1',
          jobTitle: 'Software Engineer',
          company: 'Tech Enterprise Co.',
          location: 'Location, Country',
          startDate: '2022',
          endDate: 'Present',
          current: true,
          highlights: [
            'Architected and implemented responsive, high-performance web applications.',
            'Collaborated with product teams to translate requirements into clean, testable code.'
          ],
        },
      ],
      projects: [
        {
          id: 'proj-new-1',
          name: 'Featured Web Application',
          technologies: 'Angular, TypeScript, Spring Boot',
          link: 'https://github.com',
          description: 'High-availability platform serving enterprise end-users.',
          highlights: [
            'Designed modern standalone architecture with reactive state management.',
            'Optimized initial bundle footprint and improved Core Web Vitals.'
          ],
        },
      ],
      education: [
        {
          id: 'edu-new-1',
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University Name',
          location: 'City, Country',
          graduationYear: '2022',
        },
      ],
      certifications: [],
    });
    this.uploadedFileName.set(null);
    this.parseSuccessMsg.set('Blank single-column template initialized.');
  }

  // PDF Generation with html2canvas and jsPDF
  async downloadPdf(): Promise<void> {
    const element = this.resumeDocRef?.nativeElement || document.getElementById('single-column-resume-doc');
    if (!element) {
      alert('Resume preview container not found.');
      return;
    }

    this.isGeneratingPdf.set(true);

    try {
      // Create high-res canvas (scale: 2 for sharp vector-like text)
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210; // A4 standard width in mm
      const pageHeight = 297; // A4 standard height in mm
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      // Add subsequent pages if resume exceeds 1 page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      const name = this.resumeData().personalInfo.fullName.trim() || 'Resume';
      const cleanFileName = `${name.replace(/[^a-zA-Z0-9_-]/g, '_')}_SingleColumn_Resume.pdf`;
      pdf.save(cleanFileName);
      this.isGeneratingPdf.set(false);
    } catch (err: any) {
      console.error('Error generating PDF:', err);
      alert('Could not generate PDF. Please try the native Print button instead.');
      this.isGeneratingPdf.set(false);
    }
  }

  printResume(): void {
    window.print();
  }

  // Experience Mutations
  addExperience(): void {
    const current = this.resumeData();
    const newExp: ResumeExperience = {
      id: 'exp-' + Math.random().toString(36).substr(2, 9),
      jobTitle: 'Software Engineer',
      company: 'Company Name',
      location: 'City, Country',
      startDate: '2023',
      endDate: 'Present',
      current: true,
      highlights: [
        'Delivered high-quality software features adhering to best engineering practices.',
        'Participated in code reviews and automated CI/CD pipeline deployments.'
      ],
    };
    this.resumeData.set({
      ...current,
      experience: [newExp, ...current.experience],
    });
  }

  removeExperience(id: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      experience: current.experience.filter((e) => e.id !== id),
    });
  }

  addExperienceHighlight(expId: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      experience: current.experience.map((e) =>
        e.id === expId ? { ...e, highlights: [...e.highlights, 'Key achievement or technical impact.'] } : e
      ),
    });
  }

  removeExperienceHighlight(expId: string, index: number): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      experience: current.experience.map((e) =>
        e.id === expId ? { ...e, highlights: e.highlights.filter((_, i) => i !== index) } : e
      ),
    });
  }

  // Project Mutations
  addProject(): void {
    const current = this.resumeData();
    const newProj: ResumeProject = {
      id: 'proj-' + Math.random().toString(36).substr(2, 9),
      name: 'New Technical Project',
      technologies: 'Angular, TypeScript, Spring Boot',
      link: 'https://github.com',
      description: 'Project summary and scope.',
      highlights: [
        'Built full-stack application with automated testing and continuous integration.',
      ],
    };
    this.resumeData.set({
      ...current,
      projects: [...current.projects, newProj],
    });
  }

  removeProject(id: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      projects: current.projects.filter((p) => p.id !== id),
    });
  }

  addProjectHighlight(projId: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      projects: current.projects.map((p) =>
        p.id === projId ? { ...p, highlights: [...p.highlights, 'Engineered critical capability.'] } : p
      ),
    });
  }

  removeProjectHighlight(projId: string, index: number): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      projects: current.projects.map((p) =>
        p.id === projId ? { ...p, highlights: p.highlights.filter((_, i) => i !== index) } : p
      ),
    });
  }

  // Education Mutations
  addEducation(): void {
    const current = this.resumeData();
    const newEdu: ResumeEducation = {
      id: 'edu-' + Math.random().toString(36).substr(2, 9),
      degree: 'Degree / Major',
      institution: 'University / College Name',
      location: 'City, Country',
      graduationYear: '2024',
    };
    this.resumeData.set({
      ...current,
      education: [...current.education, newEdu],
    });
  }

  removeEducation(id: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      education: current.education.filter((e) => e.id !== id),
    });
  }

  // Certification Mutations
  addCertification(): void {
    const current = this.resumeData();
    const newCert: ResumeCertification = {
      id: 'cert-' + Math.random().toString(36).substr(2, 9),
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      year: '2024',
    };
    this.resumeData.set({
      ...current,
      certifications: [...current.certifications, newCert],
    });
  }

  removeCertification(id: string): void {
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      certifications: current.certifications.filter((c) => c.id !== id),
    });
  }

  // Skills input helpers
  updateSkillCategory(category: keyof ResumeData['skills'], valueString: string): void {
    const list = valueString
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    const current = this.resumeData();
    this.resumeData.set({
      ...current,
      skills: {
        ...current.skills,
        [category]: list,
      },
    });
  }

  getSkillsString(category: keyof ResumeData['skills']): string {
    return this.resumeData().skills[category]?.join(', ') || '';
  }

  getSelectedThemeHex(): string {
    return this.themeColors.find((c) => c.id === this.themeColor())?.hex || '#1e3a8a';
  }

  getSelectedFontCss(): string {
    return this.fontFamilies.find((f) => f.id === this.fontFamily())?.css || "'Inter', sans-serif";
  }
}
