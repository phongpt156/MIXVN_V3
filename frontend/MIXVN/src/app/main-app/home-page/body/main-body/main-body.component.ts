import { Component, OnInit, HostBinding } from '@angular/core';

import { PRODUCT_TYPE } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pr-2';
  productType: any = PRODUCT_TYPE
  isNewest = true;
  isMostLike = false;
  isSale = false;
  products = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(productType: number) {
    switch (productType) {
      case this.productType.newest: {
        this.isNewest = true;
        this.isMostLike = false;
        this.isSale = false;
        break;
      }
      case this.productType.mostLike: {
        this.isNewest = false;
        this.isMostLike = true;
        this.isSale = false;
        break;
      }
      case this.productType.sale: {
        this.isNewest = false;
        this.isMostLike = false;
        this.isSale = true;
        break;
      }
    }
  }
}
