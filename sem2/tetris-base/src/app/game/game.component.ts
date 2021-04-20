import { Component, OnInit } from '@angular/core';
import { Player } from '../app.component';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  playerData: Player;
  public points = 0;

  constructor(private router: Router, private storage: StorageService) {
    this.playerData = this.storage.readplayerData();
  }

  ngOnInit(): void {}

  onLineCleared() {
    this.points++;
  }

  closeGame() {
    this.router.navigate(['/form']);
  }
}
