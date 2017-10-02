import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { CommonService } from 'app/shared/services/common/common.service';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'mix-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'p-4 dark-modal';

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
  }

  loginFacebook() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
        console.log(response);
      }
    });
  }
}
