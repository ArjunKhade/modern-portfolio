import { Injectable } from '@angular/core';
import {
  ResumeData,
  ResumeExperience,
  ResumeEducation,
  ResumeProject,
  ResumeSkills,
  ResumeCertification,
} from './resume.models';
import * as mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';

// Initialize PDF.js worker
if (typeof window !== 'undefined' && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version || '6.4.299'}/build/pdf.worker.min.mjs`;
}

@Injectable({
  providedIn: 'root',
})
export class ResumeParserService {

  /**
   * Main entrypoint to parse an uploaded file (.pdf, .docx, .doc, .txt)
   */
  async parseFile(file: File): Promise<{ text: string; data: ResumeData }> {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    let extractedText = '';

    if (ext === 'txt') {
      extractedText = await file.text();
    } else if (ext === 'docx') {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      extractedText = result.value;
    } else if (ext === 'pdf') {
      extractedText = await this.extractTextFromPdf(file);
    } else if (ext === 'doc') {
      // Best-effort attempt for legacy .doc
      try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        extractedText = result.value;
      } catch {
        extractedText = await file.text();
      }
    } else {
      // Default to text read
      extractedText = await file.text();
    }

    if (!extractedText.trim()) {
      throw new Error('No readable text could be extracted from this file. Please verify file content.');
    }

    const data = this.parseResumeText(extractedText);
    return { text: extractedText, data };
  }

  /**
   * Extract text from PDF using PDF.js
   */
  private async extractTextFromPdf(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
      useWorkerFetch: false,
      useSystemFonts: true,
    } as any);

    const pdf = await loadingTask.promise;
    let fullText = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageStrings = textContent.items
        .map((item: any) => ('str' in item ? item.str : ''))
        .filter((str: string) => str.trim().length > 0);

      fullText += pageStrings.join('\n') + '\n\n';
    }

    return fullText;
  }

  /**
   * Parses raw extracted text into structured ResumeData
   */
  parseResumeText(rawText: string): ResumeData {
    const lines = rawText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    // 1. Extract contact details via regex
    const emailMatch = rawText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    const phoneMatch = rawText.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\b\d{10}\b/);
    const linkedinMatch = rawText.match(/(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/i);
    const githubMatch = rawText.match(/(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/i);
    const portfolioMatch = rawText.match(/https?:\/\/(?!linkedin|github)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/i);

    // Location detection (City, State / Country)
    let location = '';
    const locationRegex = /\b([A-Z][a-zA-Z\s]+,\s*(?:[A-Z]{2}|[A-Z][a-zA-Z\s]+))\b/;
    const locMatch = rawText.match(locationRegex);
    if (locMatch && !locMatch[1].toLowerCase().includes('university') && !locMatch[1].toLowerCase().includes('technologies')) {
      location = locMatch[1];
    }

    // 2. Identify Full Name and Title
    let fullName = 'Your Name';
    let jobTitle = 'Software Engineer';

    // Scan top 5 lines for name (ignoring common words)
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      const line = lines[i];
      if (
        !line.includes('@') &&
        !line.match(/\d{4}/) &&
        !line.toLowerCase().includes('resume') &&
        !line.toLowerCase().includes('curriculum') &&
        line.length > 2 &&
        line.length < 40 &&
        !line.includes('|')
      ) {
        fullName = line;
        // The line following name is often the job title
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          if (!nextLine.includes('@') && !nextLine.includes('http') && nextLine.length < 50 && !nextLine.match(/\d{5}/)) {
            jobTitle = nextLine.replace(/^[|•-]\s*/, '').trim();
          }
        }
        break;
      }
    }

    // 3. Section Slicing: Locate indices of major sections
    const sectionKeywords = [
      { key: 'summary', regex: /^(?:summary|professional summary|executive summary|about me|profile|objective)/i },
      { key: 'skills', regex: /^(?:technical skills|skills|core competencies|technologies|proficiencies)/i },
      { key: 'experience', regex: /^(?:experience|work experience|professional experience|employment history|work history)/i },
      { key: 'projects', regex: /^(?:projects|key projects|personal projects|selected projects)/i },
      { key: 'education', regex: /^(?:education|academic background|academics|qualifications)/i },
      { key: 'certifications', regex: /^(?:certifications|licenses & certifications|certificates|awards)/i },
    ];

    const sectionsFound: { key: string; lineIndex: number; title: string }[] = [];

    lines.forEach((line, idx) => {
      // Check if line looks like a header (short, matches section keyword)
      if (line.length < 45) {
        const cleanLine = line.replace(/[:\-–—#*]/g, '').trim();
        for (const sec of sectionKeywords) {
          if (sec.regex.test(cleanLine)) {
            sectionsFound.push({ key: sec.key, lineIndex: idx, title: cleanLine });
            break;
          }
        }
      }
    });

    // Map content blocks by section
    const sectionBlocks: Record<string, string[]> = {};
    for (let i = 0; i < sectionsFound.length; i++) {
      const currentSec = sectionsFound[i];
      const nextSec = sectionsFound[i + 1];
      const start = currentSec.lineIndex + 1;
      const end = nextSec ? nextSec.lineIndex : lines.length;
      sectionBlocks[currentSec.key] = lines.slice(start, end);
    }

    // 4. Parse Summary
    let summary = '';
    if (sectionBlocks['summary']) {
      summary = sectionBlocks['summary'].join(' ').trim();
    } else {
      // Try to grab lines between header and first section
      const firstSectionIdx = sectionsFound.length > 0 ? sectionsFound[0].lineIndex : 6;
      if (firstSectionIdx > 2) {
        const candidateLines = lines.slice(2, firstSectionIdx).filter(
          (l) => !l.includes('@') && !l.includes('http') && !l.match(/phone|\+?\d{10}/i)
        );
        if (candidateLines.length > 0) {
          summary = candidateLines.join(' ');
        }
      }
    }

    if (!summary) {
      summary = `Experienced ${jobTitle} with a demonstrated history of delivering scalable, reliable web applications. Proficient in modern architectures, responsive interfaces, and clean coding best practices.`;
    }

    // 5. Parse Skills
    const skills = this.extractSkills(sectionBlocks['skills'] || []);

    // 6. Parse Work Experience
    const experience = this.extractExperience(sectionBlocks['experience'] || []);

    // 7. Parse Projects
    const projects = this.extractProjects(sectionBlocks['projects'] || []);

    // 8. Parse Education
    const education = this.extractEducation(sectionBlocks['education'] || []);

    // 9. Parse Certifications
    const certifications = this.extractCertifications(sectionBlocks['certifications'] || []);

    return {
      personalInfo: {
        fullName: fullName || 'Arjun Khade',
        jobTitle: jobTitle || 'Full-Stack Developer',
        email: emailMatch ? emailMatch[0] : 'arjun.khade@example.com',
        phone: phoneMatch ? phoneMatch[0] : '+91 98765 43210',
        location: location || 'Pune, India',
        linkedin: linkedinMatch ? `linkedin.com/in/${linkedinMatch[1]}` : 'linkedin.com/in/arjunkhade',
        github: githubMatch ? `github.com/${githubMatch[1]}` : 'github.com/ArjunKhade',
        portfolio: portfolioMatch ? portfolioMatch[0] : 'https://arjun.dev',
      },
      summary,
      skills,
      experience: experience.length > 0 ? experience : this.getSampleExperience(),
      projects: projects.length > 0 ? projects : this.getSampleProjects(),
      education: education.length > 0 ? education : this.getSampleEducation(),
      certifications: certifications.length > 0 ? certifications : this.getSampleCertifications(),
    };
  }

  private extractSkills(lines: string[]): ResumeSkills {
    const rawSkillsText = lines.join(', ');
    const allTokens = rawSkillsText
      .split(/[,•|;\n]/)
      .map((s) => s.replace(/^[•\-\*:]+/, '').trim())
      .filter((s) => s.length > 1 && s.length < 35 && !s.toLowerCase().includes('skills'));

    const languages: string[] = [];
    const frameworks: string[] = [];
    const toolsAndCloud: string[] = [];
    const databases: string[] = [];
    const other: string[] = [];

    const langKeywords = ['javascript', 'typescript', 'java', 'python', 'c++', 'c#', 'golang', 'html', 'css', 'sql', 'bash', 'php', 'rust', 'kotlin'];
    const fwKeywords = ['angular', 'react', 'vue', 'next.js', 'spring boot', 'spring', 'node.js', 'express', 'django', 'fastapi', 'tailwind', 'rxjs', 'ngrx'];
    const toolKeywords = ['docker', 'kubernetes', 'aws', 'azure', 'gcp', 'git', 'github', 'jenkins', 'ci/cd', 'linux', 'kafka', 'postman', 'vite', 'webpack'];
    const dbKeywords = ['postgresql', 'mongodb', 'mysql', 'redis', 'elasticsearch', 'oracle', 'sqlite', 'cassandra'];

    allTokens.forEach((token) => {
      const lower = token.toLowerCase();
      if (langKeywords.some((k) => lower.includes(k))) {
        if (!languages.includes(token)) languages.push(token);
      } else if (fwKeywords.some((k) => lower.includes(k))) {
        if (!frameworks.includes(token)) frameworks.push(token);
      } else if (toolKeywords.some((k) => lower.includes(k))) {
        if (!toolsAndCloud.includes(token)) toolsAndCloud.push(token);
      } else if (dbKeywords.some((k) => lower.includes(k))) {
        if (!databases.includes(token)) databases.push(token);
      } else {
        if (!other.includes(token) && other.length < 8) other.push(token);
      }
    });

    // Provide robust defaults if categorization missed anything
    return {
      languages: languages.length > 0 ? languages : ['TypeScript', 'JavaScript', 'Java 21', 'SQL', 'HTML5/CSS3'],
      frameworks: frameworks.length > 0 ? frameworks : ['Angular 18+', 'Spring Boot', 'RxJS', 'NgRx', 'Node.js'],
      toolsAndCloud: toolsAndCloud.length > 0 ? toolsAndCloud : ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD Pipelines'],
      databases: databases.length > 0 ? databases : ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      other: other.length > 0 ? other : ['Microservices', 'REST APIs', 'Zoneless Change Detection', 'PWA'],
    };
  }

  private extractExperience(lines: string[]): ResumeExperience[] {
    const experiences: ResumeExperience[] = [];
    let currentExp: ResumeExperience | null = null;
    const dateRegex = /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December|\d{4})\b.*?(?:Present|Current|\d{4})/i;

    for (const line of lines) {
      const dateMatch = line.match(dateRegex);
      const isBullet = /^[\-\*•\d\.]+\s+/.test(line);

      if (dateMatch && !isBullet) {
        if (currentExp && (currentExp.jobTitle || currentExp.company)) {
          experiences.push(currentExp);
        }
        const startDate = dateMatch[0].split('-')[0]?.trim() || '2022';
        const endDate = dateMatch[0].includes('-') ? dateMatch[0].split('-')[1]?.trim() : 'Present';
        const current = dateMatch[0].toLowerCase().includes('present') || dateMatch[0].toLowerCase().includes('current');
        const remainder = line.replace(dateRegex, '').replace(/[|•–—()]/g, ' ').trim();

        currentExp = {
          id: 'exp-' + Math.random().toString(36).substring(2, 11),
          jobTitle: 'Senior Software Engineer',
          company: remainder.length > 2 ? remainder : 'Technology Enterprise',
          location: 'Pune, India',
          startDate,
          endDate,
          current,
          highlights: [],
        };
      } else if (currentExp) {
        if (isBullet) {
          const bulletText = line.replace(/^[\-\*•\d\.]+\s*/, '').trim();
          if (bulletText.length > 5) {
            currentExp.highlights.push(bulletText);
          }
        } else if (!currentExp.company || currentExp.company === 'Technology Enterprise') {
          currentExp.company = line;
        } else if (!currentExp.jobTitle || currentExp.jobTitle === 'Senior Software Engineer') {
          currentExp.jobTitle = line;
        } else {
          currentExp.highlights.push(line);
        }
      } else {
        if (line.length > 3) {
          currentExp = {
            id: 'exp-' + Math.random().toString(36).substring(2, 11),
            jobTitle: line,
            company: 'Tech Solutions Inc.',
            location: 'Remote',
            startDate: '2022',
            endDate: 'Present',
            current: true,
            highlights: [],
          };
        }
      }
    }

    if (currentExp && (currentExp.jobTitle || currentExp.company)) {
      experiences.push(this.finalizeExperience(currentExp));
    }

    return experiences;
  }

  private finalizeExperience(exp: Partial<ResumeExperience>): ResumeExperience {
    return {
      id: exp.id || 'exp-' + Math.random().toString(36).substring(2, 11),
      jobTitle: exp.jobTitle || 'Full-Stack Developer',
      company: exp.company || 'Enterprise Solutions',
      location: exp.location || 'Pune, India',
      startDate: exp.startDate || '2022',
      endDate: exp.endDate || 'Present',
      current: exp.current ?? true,
      highlights: (exp.highlights && exp.highlights.length > 0)
        ? exp.highlights
        : [
            'Architected scalable web applications adhering to clean architecture patterns.',
            'Collaborated with cross-functional teams to deliver production releases on schedule.',
            'Optimized build performance, reducing bundle footprint and latency.'
          ],
    };
  }

  private extractProjects(lines: string[]): ResumeProject[] {
    const projects: ResumeProject[] = [];
    let currentProj: ResumeProject | null = null;

    for (const line of lines) {
      const isBullet = /^[\-\*•\d\.]+\s+/.test(line);

      if (!isBullet && line.length < 50 && !line.includes(':')) {
        if (currentProj && currentProj.name) {
          projects.push(currentProj);
        }
        currentProj = {
          id: 'proj-' + Math.random().toString(36).substring(2, 11),
          name: line,
          technologies: 'Angular 18, TypeScript, Spring Boot',
          link: 'https://github.com/ArjunKhade',
          description: '',
          highlights: [],
        };
      } else if (currentProj) {
        if (line.toLowerCase().includes('tech') || line.toLowerCase().includes('tools:')) {
          currentProj.technologies = line.replace(/^(?:technologies|tech stack|tools)[:\-]\s*/i, '').trim();
        } else if (isBullet) {
          const bullet = line.replace(/^[\-\*•\d\.]+\s*/, '').trim();
          currentProj.highlights.push(bullet);
        } else {
          if (!currentProj.description) {
            currentProj.description = line;
          } else {
            currentProj.highlights.push(line);
          }
        }
      }
    }

    if (currentProj && currentProj.name) {
      projects.push(this.finalizeProject(currentProj));
    }

    return projects;
  }

  private finalizeProject(proj: Partial<ResumeProject>): ResumeProject {
    return {
      id: proj.id || 'proj-' + Math.random().toString(36).substr(2, 9),
      name: proj.name || 'Cloud Web Platform',
      technologies: proj.technologies || 'Angular, Spring Boot, PostgreSQL, Docker',
      link: proj.link || 'https://github.com/ArjunKhade',
      description: proj.description || 'Full-stack application delivering high-reliability services.',
      highlights: (proj.highlights && proj.highlights.length > 0)
        ? proj.highlights
        : [
            'Designed modular architecture with reactive state management and standalone components.',
            'Implemented automated CI/CD deployment pipelines with zero-downtime rollouts.'
          ],
    };
  }

  private extractEducation(lines: string[]): ResumeEducation[] {
    const eduList: ResumeEducation[] = [];
    let currentEdu: Partial<ResumeEducation> | null = null;

    lines.forEach((line) => {
      const yearMatch = line.match(/\b(19\d{2}|20\d{2})\b/);
      if (line.toLowerCase().includes('bachelor') || line.toLowerCase().includes('master') || line.toLowerCase().includes('b.tech') || line.toLowerCase().includes('degree')) {
        if (currentEdu) eduList.push(this.finalizeEducation(currentEdu));
        currentEdu = {
          id: 'edu-' + Math.random().toString(36).substr(2, 9),
          degree: line,
          institution: 'Savitribai Phule Pune University',
          location: 'Pune, India',
          graduationYear: yearMatch ? yearMatch[0] : '2020',
        };
      } else if (currentEdu) {
        if (!currentEdu.institution) {
          currentEdu.institution = line;
        } else if (yearMatch && !currentEdu.graduationYear) {
          currentEdu.graduationYear = yearMatch[0];
        } else if (line.toLowerCase().includes('cgpa') || line.toLowerCase().includes('gpa')) {
          currentEdu.gpaOrHonors = line;
        }
      }
    });

    if (currentEdu) eduList.push(this.finalizeEducation(currentEdu));
    return eduList;
  }

  private finalizeEducation(edu: Partial<ResumeEducation>): ResumeEducation {
    return {
      id: edu.id || 'edu-' + Math.random().toString(36).substr(2, 9),
      degree: edu.degree || 'Bachelor of Technology in Computer Science & Engineering',
      institution: edu.institution || 'Savitribai Phule Pune University',
      location: edu.location || 'Pune, India',
      graduationYear: edu.graduationYear || '2020',
      gpaOrHonors: edu.gpaOrHonors || 'First Class with Distinction',
    };
  }

  private extractCertifications(lines: string[]): ResumeCertification[] {
    const certs: ResumeCertification[] = [];
    lines.forEach((line) => {
      const clean = line.replace(/^[\-\*•\d\.]+\s*/, '').trim();
      if (clean.length > 5) {
        const yearMatch = clean.match(/\b(20\d{2})\b/);
        certs.push({
          id: 'cert-' + Math.random().toString(36).substr(2, 9),
          name: clean.replace(/\(\d{4}\)/, '').trim(),
          issuer: clean.includes('AWS') ? 'Amazon Web Services' : clean.includes('Oracle') ? 'Oracle' : 'Professional Organization',
          year: yearMatch ? yearMatch[0] : '2023',
        });
      }
    });
    return certs;
  }

  // Pre-configured real resume dataset
  getSampleResume(): ResumeData {
    return {
      personalInfo: {
        fullName: 'Arjun Khade',
        jobTitle: 'Full Stack Software Developer',
        email: 'khadearjun@gmail.com',
        phone: '+91 8788225355 / 9545176916',
        location: 'Pune, Maharashtra, India',
        linkedin: 'linkedin.com/in/arjunkhade',
        github: 'github.com/ArjunKhade',
        portfolio: 'https://www.cdacengineer.in/',
      },
      summary: 'Full Stack Software Developer with 4 years of hands-on experience architecting high-throughput enterprise microservices and modern reactive web applications. Proficient in Angular (v13–v22, Signals, Zoneless), Java 17, Spring Boot, Spring Cloud, Apache Kafka, RabbitMQ, Keycloak OAuth2/PKCE, and Docker. Proven track record boosting application performance by 25%+ and orchestrating mission-critical backend services with high availability.',
      skills: {
        languages: ['Java 17', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3/Sass'],
        frameworks: ['Angular (v13–v22)', 'Angular Signals', 'Spring Boot 3', 'Spring Cloud', 'RxJS', 'React.js', 'Redux', 'Tailwind CSS'],
        toolsAndCloud: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud (GCP)', 'Jenkins CI/CD', 'Kafka', 'RabbitMQ', 'Git', 'Postman'],
        databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
        other: ['Microservices Architecture', 'Keycloak OAuth2 / PKCE', 'RESTful API Design', 'PWA & Service Workers', 'Zoneless Change Detection'],
      },
      experience: [
        {
          id: 'exp-1',
          jobTitle: 'Full Stack Software Developer',
          company: 'Aloha Technology',
          location: 'Pune, India',
          startDate: 'Jan 2023',
          endDate: 'Present',
          current: true,
          highlights: [
            'Architected and delivered mission-critical healthcare web applications using Angular 15+, TypeScript, Java 17, and Spring Boot.',
            'Engineered decoupled, reusable component libraries and lazy-loading route architectures, cutting bundle load times and boosting application responsiveness by 25%.',
            'Spearheaded enterprise Angular framework upgrades from v13 through v15 and v18 with zero production downtime and seamless regression testing.',
            'Implemented Progressive Web App (PWA) offline capabilities and automated Service Worker caching strategies, boosting audit scores by 20%.',
            'Constructed high-speed media delivery pipelines utilizing modern WebP and SVG vector formats with fallback strategies, optimizing First Contentful Paint (FCP).',
            'Designed secure communication protocols between frontend clients and backend microservices using JWT authentication, OAuth2, and CORS hardening.'
          ],
        },
      ],
      projects: [
        {
          id: 'proj-npm-1',
          name: 'ngx-swipe-action (npm Package v1.0.1)',
          technologies: 'Angular 18+, TypeScript, Standalone Directives, Pointer API, ng-packagr',
          link: 'https://www.npmjs.com/package/ngx-swipe-action',
          description: 'Open-source Angular gesture library providing smooth swipe-to-reveal and swipe-to-delete actions with zero third-party dependencies.',
          highlights: [
            'Engineered bidirectional swipe card component and low-level directive supporting touch and mouse pointer dragging with threshold triggers and undo restorations.',
            'Published package to npm registry and deployed responsive multi-viewport interactive demo on Vercel.'
          ],
        },
        {
          id: 'proj-1',
          name: 'FinEase: Digital Banking Platform',
          technologies: 'Java 17, Spring Boot 3, Spring Cloud, Angular 22, Keycloak IAM, RabbitMQ, Redis, Docker',
          link: 'https://github.com/ArjunKhade/finease-banking-made-easy',
          description: 'Production-grade, event-driven digital banking microservices platform featuring dual OIDC PKCE & Direct Grant authentication and real-time OpenFeign aggregation.',
          highlights: [
            'Architected distributed microservices (Accounts, Cards, Loans, Message) with Eureka discovery, Spring Cloud Gateway, and Config Server.',
            'Secured edge traffic with Keycloak IAM (OAuth2/OIDC PKCE, RBAC) and Redis token-bucket rate limiting.',
            'Engineered asynchronous email/SMS notification pipeline with RabbitMQ and Spring Cloud Stream.'
          ],
        },
        {
          id: 'proj-2',
          name: 'AI-Powered Fitness Application',
          technologies: 'Java 17, Spring Boot, Spring Cloud, Apache Kafka, Google Gemini AI, Docker, React',
          link: 'https://github.com/ArjunKhade/fitness-microservice',
          description: 'Distributed microservices fitness platform providing personalized workout and nutrition plans via Google Gemini AI integration.',
          highlights: [
            'Engineered event-driven message pipelines using Apache Kafka, decoupling Activity and AI recommendation consumers for real-time inference.',
            'Secured enterprise APIs with Keycloak OAuth2 PKCE flow, Spring Cloud Gateway centralized routing, and Eureka service discovery.'
          ],
        },
        {
          id: 'proj-3',
          name: 'HRMS | Human Resource Management System',
          technologies: 'Angular, TypeScript, Angular Material, Angular Signals, Java, Spring Boot, MySQL, Docker, Jenkins CI/CD',
          link: 'https://github.com/ArjunKhade/ems-portal',
          description: 'Full-stack Employee Management System with JWT role-based access control (RBAC) and automated Jenkins CI/CD pipeline.',
          highlights: [
            'Built responsive UI with Angular Material, Signals, and Reactive Forms with server-side pagination, searching, and sorting.',
            'Architected end-to-end CI/CD pipeline in Jenkins automating Docker builds, container deployment, and Playwright E2E tests.'
          ],
        },
        {
          id: 'proj-4',
          name: 'Modern Developer Portfolio & ATS Resume Builder',
          technologies: 'Angular v22, TypeScript, Angular Signals, Zoneless, PWA, pdfjs-dist, mammoth, jsPDF',
          link: 'https://www.cdacengineer.in/',
          description: 'High-performance personal brand, technical learning hub, and client-side ATS single-column resume builder.',
          highlights: [
            'Engineered in-browser PDF & DOCX parser with real-time signal reactivity and multi-page vector PDF generation.',
            'Configured PWA offline capabilities with Service Worker caching and achieved near-perfect Google Lighthouse scores.'
          ],
        },
      ],
      education: [
        {
          id: 'edu-1',
          degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
          institution: 'CDAC ACTS, Pune',
          location: 'Pune, Maharashtra, India',
          graduationYear: '2022',
          gpaOrHonors: 'Score: 76.00%',
        },
        {
          id: 'edu-2',
          degree: 'Bachelor of Engineering (BE)',
          institution: 'Sanjivani College of Engineering, Kopargaon',
          location: 'Maharashtra, India',
          graduationYear: '2019',
          gpaOrHonors: 'CGPA: 7.00',
        },
        {
          id: 'edu-3',
          degree: 'Diploma in Mechanical Engineering (DME)',
          institution: 'Government Polytechnic, Aurangabad',
          location: 'Maharashtra, India',
          graduationYear: '2016',
          gpaOrHonors: 'Score: 79.00%',
        },
      ],
      certifications: [
        {
          id: 'cert-1',
          name: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
          issuer: 'CDAC ACTS, Pune',
          year: '2022',
        },
      ],
    };
  }

  private getSampleExperience(): ResumeExperience[] {
    return this.getSampleResume().experience;
  }

  private getSampleProjects(): ResumeProject[] {
    return this.getSampleResume().projects;
  }

  private getSampleEducation(): ResumeEducation[] {
    return this.getSampleResume().education;
  }

  private getSampleCertifications(): ResumeCertification[] {
    return this.getSampleResume().certifications;
  }
}
