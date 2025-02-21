import { Component } from '@angular/core';

@Component({
  selector: 'app-team-card-simple',
  imports: [],
  templateUrl: './team-card-simple.component.html',
  styleUrl: './team-card-simple.component.css',
})
export class TeamCardSimpleComponent {
  userTeam: string = 'equipo actual del usuario';
}
