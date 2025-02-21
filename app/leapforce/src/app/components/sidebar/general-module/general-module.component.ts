import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import moduleNode from '../module.interface';

@Component({
  selector: 'app-general-module',
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './general-module.component.html',
  styleUrl: './general-module.component.css',
})
export class GeneralModuleComponent {
  TREE_DATA: moduleNode[] = [
    {
      name: 'Task and projects',
      children: [
        { icon: '', name: 'Task management', route: '/tasks' },
        { icon: '', name: 'projects management', route: '/projects' },
      ],
    },
  ];

  dataSource = this.TREE_DATA;

  childrenAccessor = (node: moduleNode) => node.children ?? [];

  hasChild = (_: number, node: moduleNode) =>
    !!node.children && node.children.length > 0;
}
