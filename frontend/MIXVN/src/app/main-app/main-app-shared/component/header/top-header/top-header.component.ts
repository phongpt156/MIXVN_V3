import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { Subscription } from 'rxjs/Subscription';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';
import { CommonService } from 'app/shared/services/common/common.service';

import { LoginBoxComponent } from 'app/main-app/main-app-shared/component/login-box/login-box.component';

@Component({
  selector: 'mix-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  mobile = false;
  isFilter: boolean;
  _subscription: Subscription;
  modalRef: BsModalRef;

  constructor(
    private el: ElementRef,
    private searchTaggingService: SearchTaggingService,
    private modalService: BsModalService,
    private commonService: CommonService
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
    return this.el.nativeElement.offsetWidth < 769 ? true : false;
  }

  openLoginModal() {
    this.commonService.setBlur(true);
    this.modalService.show(LoginBoxComponent);
  }
}
