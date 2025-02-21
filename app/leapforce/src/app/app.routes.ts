import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardTemplateComponent } from './pages/dashboard-template/dashboard-template.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardTemplateComponent,
  },
];
