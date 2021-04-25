import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Player } from '../app.component';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  playerData: Player;
  public points = 0;
  public data: any;
  public isSortDesc = true;
  @ViewChild('game') game: ElementRef;
  source = interval(30000);
  subscribeGetHightscore;

  constructor(private router: Router, private storage: StorageService) {
    // this.playerData = this.storage.readplayerData();
    this.playerData = { name: 'aga', token: '1234' };
  }

  ngOnInit(): void {
    this.subscribeGetHightscore = this.source.subscribe(() =>
      this.getHighScore()
    );
    this.getHighScore();
  }

  ngOnDestroy() {
    console.log('#ngOnDestroy');
    this.subscribeGetHightscore.unsubscribe();
  }

  onLineCleared() {
    this.points++;
  }

  closeGame() {
    this.router.navigate(['/form']);
  }

  getHighScore() {
    console.log('# ', Date().toString());
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

  endGame() {
    this.game.actionStop();
    // this.storage
    //   .saveScore(this.playerData.name, this.points, this.playerData.token)
    //   .subscribe((result) => {
    //     this.data = result;
    //     this.data.sort((a, b) => b.score - a.score);
    //   });`
    this.storage.setMyScore(this.points);
    console.log('end');
  }
}
