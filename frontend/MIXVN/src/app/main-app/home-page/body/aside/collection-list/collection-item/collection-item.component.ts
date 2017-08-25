import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'mix-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @HostBinding('class') classes = 'my-4 collection-item';

  @Input() collection = {};

  constructor() { }

  ngOnInit() {
  }
}
