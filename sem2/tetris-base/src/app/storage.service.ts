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
      accept: 'application/json',
    });

    let options = { headers: headers };

    const URL = 'http://tetris.chrum.it/scores';
    return this._http.get<any>(URL, options);
  }

  checkToken(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { 'auth-token': token };
    let options = { headers: headers };
    const URL = 'http://tetris.chrum.it/check-token';

    return this._http.post(URL, body, options);
  }
}
