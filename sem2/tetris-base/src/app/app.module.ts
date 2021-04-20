import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FormComponent, GameComponent, ScoreComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'form', component: FormComponent },
      { path: 'game', component: GameComponent },
      { path: '**', redirectTo: 'form' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
