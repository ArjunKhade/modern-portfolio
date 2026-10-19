import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    pathMatch: 'full',
  },
  {
    path: 'upskill',
    loadComponent: () => import('./upskill/upskill').then((m) => m.Upskill),
  },
  {
    path: 'upskill/javascript',
    loadComponent: () =>
      import('./upskill/javascript-fundamentals/javascript-fundamentals').then((m) => m.JavascriptFundamentals),
  },
  {
    path: 'upskill/dsa',
    loadComponent: () => import('./upskill/dsa/dsa').then((m) => m.DsaComponent),
  },
  {
    path: 'upskill/angular',
    loadComponent: () =>
      import('./upskill/angular-fundamentals/angular-fundamentals').then((m) => m.AngularFundamentals),
  },
  {
    path: 'resume-builder',
    loadComponent: () =>
      import('./resume-builder/resume-builder.component').then((m) => m.ResumeBuilderComponent),
  },
  { path: '**', redirectTo: '' },
];

