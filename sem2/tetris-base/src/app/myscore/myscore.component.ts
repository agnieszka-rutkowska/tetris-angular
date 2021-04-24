import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-myscore',
  templateUrl: './myscore.component.html',
  styleUrls: ['./myscore.component.scss']
})
export class MyscoreComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
