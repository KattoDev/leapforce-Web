import { Component } from '@angular/core';
import { GeneralModuleComponent } from './general-module/general-module.component';
import { ManagementModuleComponent } from './management-module/management-module.component';

@Component({
  selector: 'app-sidebar',
  imports: [ManagementModuleComponent, GeneralModuleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
