import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UserCardSimpleComponent } from '../../components/dashboard/user-card-simple/user-card-simple.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, UserCardSimpleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
