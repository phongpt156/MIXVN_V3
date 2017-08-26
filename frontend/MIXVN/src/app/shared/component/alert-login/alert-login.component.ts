import { Component, OnInit, HostBinding } from '@angular/core';

import { UserService } from 'app/shared/services/user/user.service';

@Component({
  selector: 'mix-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.scss']
})
export class AlertLoginComponent implements OnInit {
  @HostBinding('class') classes = 'py-4';
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.userService.getLoginStatus());
  }

}
