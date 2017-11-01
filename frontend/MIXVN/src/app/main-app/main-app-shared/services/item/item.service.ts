import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ItemService {
  protected items: any[] = [];
  protected selectedItem: any;

  itemsChange: Subject<any[]> = new Subject<any[]>();
  selectedItemChange: Subject<any> = new Subject<any>();

  constructor() {}

  getSelectedItem(): any {
    return this.selectedItem;
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
    this.selectedItemChange.next(item);
  }

  getItems(): any[] {
    return this.items;
  }

  setItems(items: any[]) {
    this.items = items;
    this.itemsChange.next(items);
  }
}
