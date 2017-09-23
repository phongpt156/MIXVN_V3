import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-tagging-list',
  templateUrl: './search-tagging-list.component.html',
  styleUrls: ['./search-tagging-list.component.scss']
})
export class SearchTaggingListComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'd-flex';
  _subscription: Subscription;
  searchTaggings: any[] = [];

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.searchTaggings = this.searchTaggingService.getSearchTaggings();
    this._subscription = this.searchTaggingService.searchTaggingsChange.subscribe((searchTaggings: any[]) => {
      console.log(searchTaggings);
      this.searchTaggings = searchTaggings;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
