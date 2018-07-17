import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.scss'],
  host: {
    '(document:keyup)': 'onKeyup($event)',
  }
})
export class ItemDetailModalComponent implements OnInit, OnDestroy {
  _itemSubscription: Subscription;
  _itemsSubscription: any;
  sets: any[] = [];
  set: any;
  index: number;
  mixPath: string = MIX_PATH;

  constructor(
    public bsModalRef: BsModalRef,
    private commonService: CommonService,
    private setService: SetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sets = this.setService.getSets();
    this.set = this.setService.getSelectedSet();
    console.log(this.set);
    this._itemSubscription = this.setService.selectedSetChange.subscribe(set => {
      this.set = set;
    });

    this._itemsSubscription = this.setService.setsChange.subscribe(sets => {
      this.sets = sets;
    });
  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
    this._itemSubscription.unsubscribe();
    this._itemsSubscription.unsubscribe();
  }

  changeSet(action: number) {
    if (action === 1) {
      this.index--;
    } else {
      this.index++;
    }
    this.setService.setSelectedSet(this.sets[this.index]);
  }

  onKeyup(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft' && this.index > 0) {
      this.changeSet(1);
    } else if (e.key === 'ArrowRight' && this.index < this.sets.length - 1) {
      this.changeSet(2);
    }
  }

  goToSupplierPage() {
    this.bsModalRef.hide();
    this.router.navigate(['/shop']);
  }
}
