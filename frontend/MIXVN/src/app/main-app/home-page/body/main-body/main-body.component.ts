import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  products = [];

  constructor() { }

  ngOnInit() {
  }

  onScroll(data) {
    this.products = data;
  }
}
