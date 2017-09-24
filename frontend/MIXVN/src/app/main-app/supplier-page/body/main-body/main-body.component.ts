import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pl-3';

  products: any[] = [];

  constructor() { }

  ngOnInit() {
  }
}
