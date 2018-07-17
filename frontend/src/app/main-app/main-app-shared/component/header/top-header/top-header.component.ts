import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Subscription } from 'rxjs/Subscription';

import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';

import { LoginBoxComponent } from 'app/main-app/main-app-shared/component/login-box/login-box.component';

declare var FB: any;

@Component({
  selector: 'mix-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  mobile = false;
  _subscriptions: Subscription[] = [];
  modalRef: BsModalRef;
  user: any = {};

  constructor(
    private router: Router,
    public authService: AuthService,
    private el: ElementRef,
    private searchTaggingService: SearchTaggingService,
    private modalService: BsModalService,
    private commonService: CommonService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this._subscriptions.push(this.userService.userChange.subscribe(user => {
      this.user = user;
    }));
    this.mobile = this.isMobile();
  }

  ngOnDestroy() {
    this._subscriptions.forEach(_subscription => {
      _subscription.unsubscribe()
    });
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

  logout() {
    this.authService.removeToken();
    document.location.reload();
  }

  goToUserPage(user: any) {
    this.router.navigate(['/user/' + user.id]);
    console.log(user);
  }
}
