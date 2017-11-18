import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CommonService } from 'app/shared/services/common/common.service';

import { LoginBoxComponent } from 'app/main-app/main-app-shared/component/login-box/login-box.component';

@Component({
  selector: 'mix-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.scss']
})
export class AlertLoginComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'py-4 dark-modal';
  isBlur = true;

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.isBlur) {
      this.commonService.setBlur(false);
    }
  }

  openLoginModal() {
    this.isBlur = false;
    this.modalRef.hide();
    this.modalService.show(LoginBoxComponent);
  }
}
