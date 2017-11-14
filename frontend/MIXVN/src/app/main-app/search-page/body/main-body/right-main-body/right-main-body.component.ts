import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mix-right-main-body',
  templateUrl: './right-main-body.component.html',
  styleUrls: ['./right-main-body.component.scss']
})
export class RightMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'w-100 py-3 px-4 custom-scrollbar';
  @Input() sets: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
