import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'inicio', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutComponent},
  ];