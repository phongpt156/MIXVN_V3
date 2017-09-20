import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CommonService } from 'app/shared/services/common/common.service';

import { AlertLoginComponent } from 'app/main-app/main-app-shared/component/alert-login/alert-login.component';

@Component({
  selector: 'mix-product-user-interactive',
  templateUrl: './product-user-interactive.component.html',
  styleUrls: ['./product-user-interactive.component.scss']
})
export class ProductUserInteractiveComponent implements OnInit {
  @HostBinding('class') classes = 'd-flex flex-row bg-white w-100'
  @Input() product;
  
  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.commonService.setBlur(true);
    this.bsModalRef = this.bsModalService.show(AlertLoginComponent);
  }
}
