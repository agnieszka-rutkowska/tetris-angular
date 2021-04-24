import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private playerData: Player;

  constructor(private _http: HttpClient) {}

  readplayerData() {
    return this.playerData;
  }

  savePlayerData(data: Player) {
    this.playerData = data;
  }
  load(): Observable<any> {
    let headers = new HttpHeaders({
      'accept': 'application/json',
    });

    let options = { headers: headers };
    console.log('option', options);

    const URL = 'http://tetris.chrum.it/scores';
    // const URL = 'https://jsonplaceholder.typicode.com/todos/1';
    return this._http.get<any>(URL, options);
  }
}
