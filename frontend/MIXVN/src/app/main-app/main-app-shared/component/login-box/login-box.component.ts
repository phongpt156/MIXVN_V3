import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CommonService } from 'app/shared/services/common/common.service';
import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';
import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';

import { GENDER } from 'app/shared/constants/constants';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'mix-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'p-4 dark-modal';
  gender: any = GENDER;

  constructor(
    public modalRef: BsModalRef,
    private commonService: CommonService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
  }

  loginFacebook() {
    FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        FB.api('/me', {fields: 'id,name,picture,email,gender,hometown,cover,location,birthday'}, res => {
          this.sendFacebookData(res);
        });
      } else {
        FB.login((res => {
          FB.api('/me', {fields: 'id,name,picture,email,gender,hometown,cover,location,birthday'}, r => {
            this.sendFacebookData(r);
          });
        }), {
          scope: 'public_profile,email,user_hometown,user_location,user_birthday'
        });
      }
    });
  }

  sendFacebookData(response) {
    const body: any = {};
    body.name = response.name;
    body.email = response.email;
    body.birthday = response.birthday;
    if (response.hometown) {
      body.hometown = response.hometown.name;
    }
    if (response.location) {
      body.location = response.location.name;
    }
    body.facebook_id = response.id;
    if (response.gender.toLowerCase() === this.gender.male.name.toLowerCase()) {
      body.gender = this.gender.male.id;
    } else if (response.gender.toLowerCase() === this.gender.female.name.toLowerCase()) {
      body.gender = this.gender.female.id;
    }
    body.avatar = response.picture.data.url;
    body.cover = response.cover.source;
    this.modalRef.hide();
    this.userService.loginFacebook(body)
    .subscribe(res => {
      const r: any = res;
      this.userService.setUser(r.data);
      this.authService.setToken(r.token);
      location.reload();
    });
  }
}
