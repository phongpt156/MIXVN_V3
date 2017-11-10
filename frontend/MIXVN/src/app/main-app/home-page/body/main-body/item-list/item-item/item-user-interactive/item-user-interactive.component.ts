import { Component, OnInit, OnDestroy, Input, HostBinding, ViewChild } from '@angular/core';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';
import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

import { AlertLoginComponent } from 'app/main-app/main-app-shared/component/alert-login/alert-login.component';

@Component({
  selector: 'mix-item-user-interactive',
  templateUrl: './item-user-interactive.component.html',
  styleUrls: ['./item-user-interactive.component.scss']
})
export class ItemUserInteractiveComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'd-flex flex-row bg-white w-100';
  @ViewChild('like') like;
  @Input() set: any = {};
  bsModalRef: BsModalRef;
  _subscriptions: Subscription[] = [];
  user: any = {};

  constructor(
    private bsModalService: BsModalService,
    private commonService: CommonService,
    private userService: UserService,
    private authService: AuthService,
    private setService: SetService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this._subscriptions.push(this.userService.userChange.subscribe(user => {
      this.user = user;
    }));
    if (!!this.set.user_id) {
      this.like.nativeElement.classList.add('active');
    }
  }

  ngOnDestroy() {
    this._subscriptions.forEach(val => {
      val.unsubscribe();
    });
  }

  onLike(element) {
    if (!this.authService.isAuthenticated()) {
      this.commonService.setBlur(true);
      this.bsModalRef = this.bsModalService.show(AlertLoginComponent);
    } else {
      if (element.classList.value.indexOf('active') === -1) {
        this.set.sum_like++;
      } else {
        this.set.sum_like--
      };

      this.setService.like(this.set.id)
      .subscribe(res => {
      });
      element.classList.toggle('active');
    }
  }

  onBuy(element) {
    if (!this.authService.isAuthenticated()) {
      this.commonService.setBlur(true);
      this.bsModalRef = this.bsModalService.show(AlertLoginComponent);
    } else {
      element.classList.toggle('active');
    }
  }
}
