import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() sets: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
