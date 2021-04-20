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
  public data = [];

  constructor(private router: Router, private storage: StorageService) {
    this.playerData = this.storage.readplayerData();
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
    console.log('ttttt');
    this.storage.load().subscribe((result) => {
      console.log(result);
      this.data = result['data'];
      console.log('ok', this.data);
    });
  }
}
