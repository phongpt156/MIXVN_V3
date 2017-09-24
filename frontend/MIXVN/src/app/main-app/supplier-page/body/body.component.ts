import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @HostBinding('class') classes = 'd-md-flex pb-5';

  constructor() { }

  ngOnInit() {
  }

}
