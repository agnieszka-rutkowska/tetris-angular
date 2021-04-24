import { Component, OnInit } from '@angular/core';
import { Player } from '../app.component';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { WritePropExpr } from '@angular/compiler';
import { timeStamp } from 'node:console';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  playerData: Player;
  public points = 0;
  public data = [];
  public isSortDesc = true;

  constructor(private router: Router, private storage: StorageService) {
    // this.playerData = this.storage.readplayerData();
    this.playerData = { name: 'aga', email: 'wp@wp.pl' };
  }

  ngOnInit(): void {
    this.getHighScore();
  }

  onLineCleared() {
    this.points++;
  }

  closeGame() {
    this.router.navigate(['/form']);
  }

  getHighScore() {
    this.storage.load().subscribe((result) => {
      this.data = result;
      this.data.sort((a, b) => b.score - a.score);
    });
  }

  sortPlayers() {
    if (this.isSortDesc) {
      this.data.sort((a, b) => a.score - b.score);
      this.isSortDesc = false;
    } else {
      this.data.sort((a, b) => b.score - a.score);
      this.isSortDesc = true;
    }
  }
}
