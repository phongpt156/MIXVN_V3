import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-tagging-item',
  templateUrl: './search-tagging-item.component.html',
  styleUrls: ['./search-tagging-item.component.scss']
})
export class SearchTaggingItemComponent implements OnInit {
  @HostBinding('class') classes = 'pb-1 px-3';
  @Input() searchTagging: any;
  @Input() index: number;

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
  }

  deleteSearchTagging() {
    this.searchTaggingService.searchTaggings.splice(this.index, 1);
  }

  showFilter() {
    this.searchTaggingService.isFilter = !this.searchTaggingService.isFilter;
    this.searchTaggingService.selectedIndex = this.index;
  }
}