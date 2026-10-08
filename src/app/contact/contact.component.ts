import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  email = 'khadearjun@gmail.com';
  phone = '+91 9545176916 / 8788225355';
  location = 'Pune, Maharashtra, India';

  isCopied = false;
  copyTimeout: any;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  constructor(private cdr: ChangeDetectorRef) {}

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'bxl-linkedin',
      url: 'https://www.linkedin.com/in/arjun-khade-ba825017b/',
      handle: 'arjun-khade',
      color: '#0a66c2'
    },
    {
      name: 'GitHub',
      icon: 'bxl-github',
      url: 'https://github.com/ArjunKhade',
      handle: 'ArjunKhade',
      color: '#ffffff'
    },
    {
      name: 'Gmail',
      icon: 'bxl-gmail',
      url: 'mailto:khadearjun@gmail.com',
      handle: 'khadearjun@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'Instagram',
      icon: 'bxl-instagram',
      url: 'https://www.instagram.com/me_arjun_khade/',
      handle: '@me_arjun_khade',
      color: '#e1306c'
    },
  ];

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.isCopied = true;
      this.cdr.markForCheck();
      if (this.copyTimeout) clearTimeout(this.copyTimeout);
      this.copyTimeout = setTimeout(() => {
        this.isCopied = false;
        this.cdr.markForCheck();
      }, 2500);
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    this.isSubmitting = true;
    this.cdr.markForCheck();

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      // Pre-fill mailto fallback
      const mailtoUrl = `mailto:${this.email}?subject=${encodeURIComponent(this.formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `Hi Arjun,\n\nName: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      this.cdr.markForCheck();

      setTimeout(() => {
        this.submitSuccess = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
        this.cdr.markForCheck();
      }, 4000);
    }, 600);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
