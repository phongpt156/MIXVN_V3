import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-left-main-body',
  templateUrl: './left-main-body.component.html',
  styleUrls: ['./left-main-body.component.scss']
})
export class LeftMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pb-3';

  constructor() { }

  ngOnInit() {
  }

}
