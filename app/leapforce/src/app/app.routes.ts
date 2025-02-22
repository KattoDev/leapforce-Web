import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/templates/dashboard/dashboard.component';

export const routes: Routes = [
  // Login
  {
    path: '',
    component: LoginComponent,
  },

  // Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  // Management
  {
    path: 'team-members',
    component: DashboardComponent,
  },
  {
    path: 'add-team-member',
    component: DashboardComponent,
  },
  {
    path: 'edit-team-member',
    component: DashboardComponent,
  },

  // teams
  {
    path: 'teams',
    component: DashboardComponent,
  },
  {
    path: 'add-team',
    component: DashboardComponent,
  },
  {
    path: 'edit-team',
    component: DashboardComponent,
  },

  // general
  {
    path: 'tasks',
    component: DashboardComponent,
  },
  {
    path: 'projects',
    component: DashboardComponent,
  },
];
