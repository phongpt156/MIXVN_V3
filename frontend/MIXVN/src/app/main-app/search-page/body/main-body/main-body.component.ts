import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'd-md-flex';
  @Input() sets: any[] = [];
  @Input() selectedSet: any;
  @Input() selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

}
