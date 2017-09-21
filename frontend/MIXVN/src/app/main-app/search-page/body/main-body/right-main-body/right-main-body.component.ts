import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-right-main-body',
  templateUrl: './right-main-body.component.html',
  styleUrls: ['./right-main-body.component.css']
})
export class RightMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'w-100';

  constructor() { }

  ngOnInit() {
  }

}
