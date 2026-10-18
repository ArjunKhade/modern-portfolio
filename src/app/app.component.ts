import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PwaUpdateComponent } from './pwa-update/pwa-update.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NavbarComponent,
    PwaUpdateComponent
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
