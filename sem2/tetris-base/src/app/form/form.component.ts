import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private router: Router, private storage: StorageService, public fb: FormBuilder) {}

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
      } else {
        alert('Bład przy logowaniu');
      }
    });
  }

  openGame() {
    this.router.navigate(['/game']);
  }
}
