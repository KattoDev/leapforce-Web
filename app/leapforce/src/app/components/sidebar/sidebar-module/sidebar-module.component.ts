import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import moduleNode from '../module.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-module',
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar-module.component.html',
  styleUrl: './sidebar-module.component.css',
})
export class SidebarModuleComponent implements OnChanges {
  constructor(private router: Router) {}

  /**
   * This object corresponds to the tree data of the sidebar component injected via HTML argument.
   */
  @Input() TREE_DATA: moduleNode[] = [
    {
      name: 'ERROR',
      children: [{ icon: 'error', name: 'NO DATA', route: '' }],
    },
  ];

  /**
   * This string corresponds to the title of the module.
   */
  @Input() moduleTitle: string = '';

  dataSource = new MatTreeNestedDataSource<moduleNode>();

  childrenAccessor = (node: moduleNode) => node.children ?? [];

  /**
   * Method for handling changes in the TREE_DATA object.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['TREE_DATA'] && this.TREE_DATA) {
      this.dataSource.data = this.TREE_DATA;
    }
  }

  hasChild = (_: number, node: moduleNode) =>
    !!node.children && node.children.length > 0;

  /**
   * method for navigating to a specific route.
   * @param route the route to navigate to.
   */
  navegate(route: string) {
    this.router.navigate([route]);
  }
}
