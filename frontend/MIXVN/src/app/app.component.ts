import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/services/user/user.service';

@Component({
  selector: 'mix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.setLoginStatus(false);
  }
}
