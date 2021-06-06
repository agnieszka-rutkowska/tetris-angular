import { Component } from '@angular/core';

export interface Player {
  name: string;
  token: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public player: Player;

  constructor() {}

}
