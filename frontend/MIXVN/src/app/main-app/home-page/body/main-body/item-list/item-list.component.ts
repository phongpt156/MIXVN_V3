import { Component, OnInit, OnChanges, HostListener, HostBinding, Input } from '@angular/core';

import { ItemService } from 'app/main-app/main-app-shared/services/item/item.service';

@Component({
  selector: 'mix-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() loadMoreItemData = [];
  @Input() sets: any[] = [];
  @HostBinding('class') classes = 'custom-scrollbar';

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    // this.itemService.setItems(this.items);
  }

  ngOnChanges() {
    // this.items = this.items.concat(this.loadMoreItemData);
    // this.itemService.setItems(this.items);
  }
}
