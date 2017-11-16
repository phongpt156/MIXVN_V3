import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

import { MIX_PATH } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @HostBinding('class') classes = 'my-4 collection-item';

  mixPath: string = MIX_PATH;

  @Input() collection: any = {};

  constructor() { }

  ngOnInit() {
  }
}
