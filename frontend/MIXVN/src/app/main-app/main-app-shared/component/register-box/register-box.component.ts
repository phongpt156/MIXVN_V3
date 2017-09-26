import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss']
})
export class RegisterBoxComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'p-4 dark-modal';

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
  }
}
