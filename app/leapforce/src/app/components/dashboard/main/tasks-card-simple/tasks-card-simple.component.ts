import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-card-simple',
  imports: [],
  templateUrl: './tasks-card-simple.component.html',
  styleUrl: './tasks-card-simple.component.css',
})
export class TasksCardSimpleComponent {
  userPendingTasks: number = 0;

  getPendingTasks(): string {
    return this.userPendingTasks > 0
      ? `${this.userPendingTasks} pendientes`
      : 'Estás al dia con tus tareas, ten un buen dia';
  }
}
