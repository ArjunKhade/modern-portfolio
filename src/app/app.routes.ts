import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Upskill } from './upskill/upskill';
import { JavascriptFundamentals } from './upskill/javascript-fundamentals/javascript-fundamentals';
import { DsaComponent } from './upskill/dsa/dsa';

export const routes: Routes = [
  { path: '', component: PortfolioComponent, pathMatch: 'full' },
  { path: 'upskill', component: Upskill },
  { path: 'upskill/javascript', component: JavascriptFundamentals },
  { path: 'upskill/dsa', component: DsaComponent },
  { path: '**', redirectTo: '' },
];
