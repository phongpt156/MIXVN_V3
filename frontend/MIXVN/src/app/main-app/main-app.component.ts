import { Component, OnInit, HostBinding } from '@angular/core';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { UserService } from './main-app-shared/services/user/user.service';

@Component({
  selector: 'mix-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  @HostBinding('style.padding-top') paddingTop = '97px';

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      this.userService.get()
      .subscribe(res => {
        this.userService.setUser(res.user);
      });
    }
  }
}
