import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-myscore',
  templateUrl: './myscore.component.html',
  styleUrls: ['./myscore.component.scss'],
})
export class MyscoreComponent implements OnInit {
  data: any;
  public isSortDesc = true;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.data = this.storage.getMyScore();
    if(this.data){
      this.data.sort((a, b) => b - a);
    }
  }

  sortPlayers() {
    if (this.isSortDesc) {
      this.data.sort((a, b) => a - b);
      this.isSortDesc = false;
    } else {
      this.data.sort((a, b) => b - a);
      this.isSortDesc = true;
    }
  }
}
