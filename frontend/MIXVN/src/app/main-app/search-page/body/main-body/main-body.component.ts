import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'd-md-flex';

  constructor() { }

  ngOnInit() {
  }

}
