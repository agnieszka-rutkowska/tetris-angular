import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { StorageService } from '../storage.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public color = 'white';
  constructor(private router: Router, private storage: StorageService, public fb: FormBuilder, private _route: ActivatedRoute) {
    this.color = this._route.snapshot.params.color;
  }

  ngOnInit(): void {}

  public gameForm = this.fb.group({
    email:['r.agnieszka2@wp.pl', [
      Validators.required,
      Validators.email
    ]],
    token: ['', [Validators.required, Validators.minLength(4)]]
  });

  submitForm() {
    this.storage.checkToken(this.gameForm.value.token).subscribe((result: any) => {
      if (result.success === true) {
        this.openGame();
        this.storage.savePlayerData({name: this.gameForm.controls.email.value, token: this.gameForm.controls.token.value});
      } else {
        alert('Bład przy logowaniu');
      }
    });
  }

  openGame() {
    this.router.navigate(['/game'], {queryParams: {queryParam:"queryParamUsageExample"}});
  }

  redirectWithColor(color: string){
    this.router.navigate(['/form/', color])
      .then(() => {
        window.location.reload();
      });
  }
}
