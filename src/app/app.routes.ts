import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { IndustriesComponent } from './pages/industries/industries';
import { PentakuhlComponent } from './pages/pentakuhl/pentakuhl';
import { ServicesComponent } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'pentakuhl', component: PentakuhlComponent },
  { path: '**', redirectTo: '' }
];
