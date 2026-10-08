import { Component, OnInit, ElementRef, ViewChild, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
})
export class BanerComponent implements OnInit, OnDestroy {
  @ViewChild('cyberCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  resumeUrl: string = 'assets/ArjunKhade_FullStackDev.pdf';
  roles: string[] = [
    'Full Stack Software Developer',
    'Java & Spring Boot Engineer',
    'Angular & Frontend Specialist',
    'AI Solutions & Kafka Architect'
  ];
  currentRoleIndex = 0;
  displayedRole = '';
  private typingTimer: any;
  private animFrameId: number = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startRoleTypingAnimation();
    this.initCyberCanvasAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  startRoleTypingAnimation() {
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
      const currentRole = this.roles[this.currentRoleIndex];

      if (isDeleting) {
        this.displayedRole = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
          this.typingTimer = setTimeout(tick, 400);
          return;
        }
      } else {
        this.displayedRole = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          this.typingTimer = setTimeout(tick, 2200);
          return;
        }
      }

      const speed = isDeleting ? 45 : 90;
      this.cdr.markForCheck();
      this.typingTimer = setTimeout(tick, speed);
    };

    tick();
  }

  initCyberCanvasAnimation() {
    this.ngZone.runOutsideAngular(() => {
      const canvas = this.canvasRef.nativeElement;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
      let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

      const onResize = () => {
        width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      };
      window.addEventListener('resize', onResize);

      // Cyber particles
      const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        color: string;
      }> = [];

      const colors = ['#00f5a0', '#00d2ff', '#a855f7'];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              const alpha = (1 - dist / 130) * 0.22;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 245, 160, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw particles
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        this.animFrameId = requestAnimationFrame(animate);
      };

      animate();
    });
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) event.preventDefault();
    const cleanId = sectionId.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
