import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-tagging-item',
  templateUrl: './search-tagging-item.component.html',
  styleUrls: ['./search-tagging-item.component.scss']
})
export class SearchTaggingItemComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'pb-1 px-2';
  @Input() searchTagging: any;
  @Input() index: number;

  _subscriptions: Subscription[] = [];
  opacity = 1;
  isFilter = false;

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this._subscriptions.push(this.searchTaggingService.selectedIndexChange.subscribe((selectedIndex: number) => {
      if (selectedIndex !== this.index) {
        this.opacity = 1;
      }
    }));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(_subscription => {
      _subscription.unsubscribe()
    });
  }

  deleteSearchTagging() {
    this.searchTaggingService.deleteSearchTagging(this.index);
  }

  showFilter() {
    if (this.opacity === 1) {
      this.opacity = 0.6;
    } else {
      this.opacity = 1;
    }

    if (this.index !== this.searchTaggingService.getSelectedIndex()) {
      this.searchTaggingService.setSelectedIndex(this.index);
    }
  }
}
