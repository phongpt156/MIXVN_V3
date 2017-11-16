import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { MIX_PATH } from 'app/shared/constants/constants';

import { CommonService } from 'app/shared/services/common/common.service';
import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { ItemDetailModalComponent  } from './item-detail-modal/item-detail-modal.component';

@Component({
  selector: 'mix-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.scss']
})
export class ItemItemComponent implements OnInit {
  @Input() set: any = {};
  @Input() index: number;

  bsModalRef: BsModalRef;
  mixPath: string = MIX_PATH;

  constructor(
    private commonService: CommonService,
    private bsModalService: BsModalService,
    private setService: SetService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDetailItemModal() {
    this.commonService.setBlur(true);

    this.bsModalRef = this.bsModalService.show(ItemDetailModalComponent, { class: 'w-50'});

    this.bsModalRef.content.index = this.index;
    this.setService.setSelectedSet(this.set);
  }

  goToSupplierPage(supplier) {
    this.router.navigate(['/shop']);
  }
}
