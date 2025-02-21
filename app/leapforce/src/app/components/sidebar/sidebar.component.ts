import { Component } from '@angular/core';
import { GeneralModuleComponent } from './general-module/general-module.component';
import { ManagementModuleComponent } from './management-module/management-module.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  imports: [ManagementModuleComponent, GeneralModuleComponent, MatDivider],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
