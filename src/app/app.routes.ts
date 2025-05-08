import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { OnlineComponent } from './pages/online/online.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormatsComponent } from './pages/formats/formats.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { EducationComponent } from './pages/education/education.component';
import { AgreementsComponent } from './pages/agreements/agreements.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'inicio', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutComponent},
    { path: 'online', component: OnlineComponent },
    { path: 'services/formats', component: FormatsComponent },
    { path: 'services/policies', component: PoliciesComponent },
    { path: 'services/education', component: EducationComponent },
    { path: 'services/credits', component: CreditsComponent },
    { path: 'services/tourism', component: TourismComponent },
    { path: 'services/agreements', component: AgreementsComponent },
    { path: 'services/insurance', component: InsuranceComponent },
    { path: 'services/assistance', component: AssistanceComponent },
    {path: 'contact', component: ContactComponent},
  ];