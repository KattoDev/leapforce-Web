import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DISPLAYED_COLUMNS, TASK_DATA } from './tableContent';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-card-simple',
  imports: [MatTableModule, MatDividerModule],
  templateUrl: './tasks-card-simple.component.html',
  styleUrl: './tasks-card-simple.component.css',
})
export class TasksCardSimpleComponent {
  constructor(private router: Router) {}

  displayedColumns: string[] = DISPLAYED_COLUMNS;
  source = TASK_DATA;

  userPendingTasks: number = TASK_DATA.filter((task) => task.status === false)
    .length;

  getPendingTasks(): string {
    return this.userPendingTasks > 0
      ? `${this.userPendingTasks} pendientes`
      : 'Estás al dia con tus tareas, ten un buen dia';
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
