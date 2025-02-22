import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { SidebarModuleComponent } from './sidebar-module/sidebar-module.component';
import moduleNode from './module.interface';
import { managementTree, generalTree } from './sidebar-module/treesModules';

@Component({
  selector: 'app-sidebar',
  imports: [MatDivider, SidebarModuleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  managementModule: string = 'gestión de equipos';
  generalModule: string = 'general';

  managementTree: moduleNode[] = managementTree;
  generalTree: moduleNode[] = generalTree;
}
