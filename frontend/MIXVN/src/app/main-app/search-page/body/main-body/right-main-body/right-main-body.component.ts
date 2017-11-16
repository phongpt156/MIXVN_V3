import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { MIX_PATH } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-right-main-body',
  templateUrl: './right-main-body.component.html',
  styleUrls: ['./right-main-body.component.scss']
})
export class RightMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'w-100 py-3 px-4 custom-scrollbar';
  @Input() sets: any[] = [];

  mixPath: string = MIX_PATH;

  constructor() { }

  ngOnInit() {
  }

}
