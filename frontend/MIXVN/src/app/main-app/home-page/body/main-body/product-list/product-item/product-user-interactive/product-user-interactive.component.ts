import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';

import { AlertLoginComponent } from 'app/main-app/main-app-shared/component/alert-login/alert-login.component';

@Component({
  selector: 'mix-product-user-interactive',
  templateUrl: './product-user-interactive.component.html',
  styleUrls: ['./product-user-interactive.component.scss']
})
export class ProductUserInteractiveComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'd-flex flex-row bg-white w-100'
  @Input() product;
  bsModalRef: BsModalRef;
  _subscriptions: Subscription[] = [];
  user: any = {};

  constructor(
    private bsModalService: BsModalService,
    private commonService: CommonService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this._subscriptions.push(this.userService.userChange.subscribe(user => {
      this.user = user;
    }));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(val => {
      val.unsubscribe();
    });
  }

  onClick(element) {
    if (!this.authService.isAuthenticated()) {
      this.commonService.setBlur(true);
      this.bsModalRef = this.bsModalService.show(AlertLoginComponent);
    } else {
      console.log(element);
      element.classList.toggle('active');
    }
  }
}
