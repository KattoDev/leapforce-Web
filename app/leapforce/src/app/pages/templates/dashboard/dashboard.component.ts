import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { TasksCardSimpleComponent } from '../../../components/dashboard/main/tasks-card-simple/tasks-card-simple.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, TasksCardSimpleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
