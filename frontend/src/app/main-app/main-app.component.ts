import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { UserService } from './main-app-shared/services/user/user.service';

@Component({
  selector: 'mix-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  @HostBinding('style.padding-top') paddingTop = '97px';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    if (this.authService.isAuthenticated()) {
      this.userService.getUserByToken()
      .subscribe(res => {
        this.userService.setUser(res.user);
      });
    }
  }
}
