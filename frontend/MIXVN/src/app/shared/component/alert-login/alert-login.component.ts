import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.scss']
})
export class AlertLoginComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'py-4 dark-modal';
  
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.commonService.setAlertLogin(false);
  }

}
