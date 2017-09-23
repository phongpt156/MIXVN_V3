import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  mobile = false;
  isFilter: boolean;
  _subscription: Subscription;

  constructor(
    private temRef: ElementRef,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.isFilter = this.searchTaggingService.getFilter();
    this._subscription = this.searchTaggingService.filterChange.subscribe(value => {
      this.isFilter = value;
    });
    this.mobile = this.isMobile();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  @HostListener('window:resize') onresize() {
    this.mobile = this.isMobile();
  }

  isMobile(): boolean {
    return this.temRef.nativeElement.offsetWidth < 769 ? true : false;
  }
}
