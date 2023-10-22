import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private router: Router) {}

  navigateToLinkedInProfile(): void {
    const linkedInProfileUrl =
      'https://www.linkedin.com/in/arjun-khade-ba825017b/';
    window.open(linkedInProfileUrl, '_blank');
  }

  navigateToInstaProfile(): void {
    const linkedInProfileUrl = 'https://www.instagram.com/me_arjun_khade/';
    window.open(linkedInProfileUrl, '_blank');
  }

  navigateToFacebookProfile(): void {
    const linkedInProfileUrl = 'https://www.facebook.com/arjun.khade.37';
    window.open(linkedInProfileUrl, '_blank');
  }
  navigateToGmailProfile(): void {
    const linkedInProfileUrl =
      'https://mail.google.com/mail/u/0/#inbox?compose=new';
    window.open(linkedInProfileUrl, '_blank');
  }
}
