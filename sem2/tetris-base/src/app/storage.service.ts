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
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const options = { headers: headers };

    const URL = 'http://tetris.chrum.it/scores';
    return this._http.get<any>(URL, options);
  }

  checkToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { 'auth-token': token };
    const options = { headers: headers };
    const URL = 'http://tetris.chrum.it/check-token';

    return this._http.post(URL, body, options);
  }

  saveScore(name: string, score: number, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + token,
    });
    const body = { 'name': name, 'score': score };
    const options = { headers: headers };
    const URL = 'http://tetris.chrum.it/scores';

    return this._http.post(URL, body, options);
  }
}
