import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-pwa-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pwa-update.component.html',
  styleUrls: ['./pwa-update.component.css']
})
export class PwaUpdateComponent implements OnInit, OnDestroy {
  updateAvailable = false;
  canInstall = false;
  isInstalling = false;
  isUpdating = false;
  private deferredPrompt: any = null;
  private sub = new Subscription();

  constructor(
    private swUpdate: SwUpdate,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      // Listen for version ready events
      this.sub.add(
        this.swUpdate.versionUpdates
          .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
          .subscribe(() => {
            this.updateAvailable = true;
            this.cdr.markForCheck();
          })
      );

      // Check for updates when window gains focus
      window.addEventListener('focus', () => {
        this.swUpdate.checkForUpdate().catch(() => {});
      });
    }

    // Capture install prompt
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.canInstall = true;
      this.cdr.markForCheck();
    });

    window.addEventListener('appinstalled', () => {
      this.canInstall = false;
      this.deferredPrompt = null;
      this.cdr.markForCheck();
    });

    // Development & test hooks to preview the prompts in browser
    if (typeof window !== 'undefined') {
      (window as any).triggerPwaUpdate = () => {
        this.updateAvailable = true;
        this.cdr.markForCheck();
        console.log('[PWA] Previewing Update Prompt');
      };
      (window as any).triggerPwaInstall = () => {
        this.canInstall = true;
        this.cdr.markForCheck();
        console.log('[PWA] Previewing Install Prompt');
      };
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  reloadApp(): void {
    this.isUpdating = true;
    this.cdr.markForCheck();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      }).catch(() => {
        document.location.reload();
      });
    } else {
      setTimeout(() => {
        document.location.reload();
      }, 500);
    }
  }

  dismissUpdate(): void {
    this.updateAvailable = false;
    this.cdr.markForCheck();
  }

  promptInstall(): void {
    if (!this.deferredPrompt) {
      // Fallback for browsers that already installed or testing mode
      this.canInstall = false;
      this.cdr.markForCheck();
      return;
    }
    this.isInstalling = true;
    this.cdr.markForCheck();
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        this.canInstall = false;
      }
      this.deferredPrompt = null;
      this.isInstalling = false;
      this.cdr.markForCheck();
    });
  }

  dismissInstall(): void {
    this.canInstall = false;
    this.cdr.markForCheck();
  }

  fallbackIcon(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/New_Image.png';
    }
  }
}
