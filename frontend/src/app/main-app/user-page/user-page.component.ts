import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MIX_PATH } from 'app/shared/constants/constants';

import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';

@Component({
  selector: 'mix-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  _subscription: Subscription;
  userId: number;
  user: any = {};
  currentLoginUser: any = {};
  mixPath: string = MIX_PATH;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId)
    .subscribe(res => {
      this.user = res.user;
      this.user.avatar = this.user.avatar.indexOf('https') === -1 ? this.mixPath + this.user.avatar : this.user.avatar;
      this.user.cover = this.user.cover.indexOf('https') === -1 ? this.mixPath + this.user.cover : this.user.cover;
    });

    this.user = this.userService.getUser();
    this._subscription = this.userService.userChange.subscribe(user => {
      this.currentLoginUser = user;
    });
    console.log(this.user);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
