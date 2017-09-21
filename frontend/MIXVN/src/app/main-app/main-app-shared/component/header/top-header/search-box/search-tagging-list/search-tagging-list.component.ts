import { Component, OnInit, HostBinding } from '@angular/core';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-tagging-list',
  templateUrl: './search-tagging-list.component.html',
  styleUrls: ['./search-tagging-list.component.scss']
})
export class SearchTaggingListComponent implements OnInit {
  @HostBinding('class') classes = 'd-flex';

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
  }

}
