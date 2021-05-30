import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private router: Router, private storage: StorageService) {}

  ngOnInit(): void {}

  submitForm(form: FormGroup) {
    this.storage.checkToken(form.value.token).subscribe((result: any) => {
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
