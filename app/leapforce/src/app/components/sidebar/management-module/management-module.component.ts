import { Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import moduleNode from '../module.interface';

@Component({
  selector: 'app-management-module',
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './management-module.component.html',
  styleUrl: './management-module.component.css',
})
export class ManagementModuleComponent {
  TREE_DATA: moduleNode[] = [
    {
      name: 'Team members',
      children: [
        { icon: '', name: 'View team members', route: '/team-members' },
        { icon: '', name: 'Add team member', route: '/add-team-member' },
        { icon: '', name: 'Edit team member', route: '/edit-team-member' },
      ],
    },
    {
      name: 'teams',
      children: [
        { icon: '', name: 'View teams', route: '/teams' },
        { icon: '', name: 'Add team', route: '/add-team' },
        { icon: '', name: 'Edit team', route: '/edit-team' },
      ],
    },
  ];

  dataSource = this.TREE_DATA;

  childrenAccessor = (node: moduleNode) => node.children ?? [];

  hasChild = (_: number, node: moduleNode) =>
    !!node.children && node.children.length > 0;
}
