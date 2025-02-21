import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-template',
  imports: [SidebarComponent],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css',
})
export class DashboardTemplateComponent {}
