import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card-simple',
  imports: [],
  templateUrl: './user-card-simple.component.html',
  styleUrl: './user-card-simple.component.css',
})
export class UserCardSimpleComponent {
  getGreeting(): string {
    let date: Date = new Date();
    let localhour: number = date.getHours();

    if (localhour >= 7 && localhour < 12) {
      return 'Buenos dias ⛅';
    } else if (localhour >= 12 && localhour < 18) {
      return 'Buenas tardes 🌞';
    } else {
      return 'Buenas noches 🌛';
    }
  }

  userName: String = 'Nombre del usuario actual';
}
