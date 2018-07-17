import { Component, OnInit, HostBinding, Input } from '@angular/core';
import 'bootstrap/js/src/util.js';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @HostBinding('class') classes = 'd-md-flex pb-5';
  @Input() supplier: any;

  constructor() { }

  ngOnInit() {
  }

}
