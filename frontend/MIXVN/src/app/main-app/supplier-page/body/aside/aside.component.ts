import { Component, OnInit, OnChanges, HostBinding, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SET_TYPE } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { SupplierService } from 'app/main-app/main-app-shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnChanges {
  @HostBinding('class') classes = 'pr-4 d-flex';
  @Input() supplierId: number;

  itemName: FormControl = new FormControl('');
  isMaleCollapsed = true;
  isFemaleCollapsed = true;
  isNewest = true;
  isMostLike = false;
  isSale = false;
  setType: any = SET_TYPE;
  selectedSetType: number;

  constructor(
    private setService: SetService,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.selectedSetType = this.setType.newest;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.supplierId.currentValue) {
      this.getSet();
    }
  }

  onSubmit() {
    if (this.itemName.value) {
      this.supplierService.searchSet(this.supplierId, this.itemName.value, this.selectedSetType)
      .subscribe(res => {
        this.setService.setSets(res.data);
      });
    }
  }

  selectSetType(setType) {
    this.selectedSetType = setType;
    this.getSet();
  }

  getSet() {
    this.supplierService.getSetsBySupplier(this.supplierId, this.selectedSetType)
    .subscribe(res => {
      this.setService.setSets(res.data);
    });
  }
}
