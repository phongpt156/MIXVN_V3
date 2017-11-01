import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ItemService } from 'app/admin/admin-shared/services/item/item.service';

@Component({
  selector: 'mix-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  host: {
    '(document:click)': 'handleClick($event)'
  }
})
export class SearchItemComponent implements OnInit {
  @Input() index: number;
  @Output() itemChange: EventEmitter<any> = new EventEmitter;
  itemName: FormControl;
  items: any[] = [];
  isSearchFocus = false
  isSelectItem = false;

  constructor(
    private itemService: ItemService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.itemName = new FormControl;
    this.itemName.valueChanges
    .debounceTime(150)
    .distinctUntilChanged()
    .switchMap(itemName => this.itemService.searchByName(itemName))
    .subscribe(res => {
      this.items = res.data;
    });
  }

  handleClick(e) {
    let clickedComponent = e.target;
    let inside = false;

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }

      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if (inside) {
      this.isSearchFocus = true;
    } else {
      this.isSearchFocus = false;
    }
  }

  selectItem(item: any) {
    setTimeout(() => {
      this.isSearchFocus = false;
    }, 200);

    this.itemChange.emit({item: item, index: this.index});
  }
}
