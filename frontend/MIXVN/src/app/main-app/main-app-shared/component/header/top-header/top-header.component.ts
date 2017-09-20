import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  mobile: boolean = false;

  constructor(
    private temRef: ElementRef,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.mobile = this.isMobile();
  }

  @HostListener('window:resize') onresize() {
    this.mobile = this.isMobile();
  }

  isMobile(): boolean {
    return this.temRef.nativeElement.offsetWidth < 769 ? true : false;
  }
}
