import { Injectable } from '@angular/core';
import { Player } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private playerData: Player;

  constructor() {}

  readplayerData() {
    return this.playerData;
  }

  savePlayerData(data: Player) {
    this.playerData = data;
  }
}
