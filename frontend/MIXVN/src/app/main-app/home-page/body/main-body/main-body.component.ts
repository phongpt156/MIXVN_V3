import { Component, OnInit, HostBinding } from '@angular/core';

import { ITEM_TYPE } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pr-2';
  itemType: any = ITEM_TYPE
  isNewest = true;
  isMostLike = false;
  isSale = false;
  sets = [];

  constructor(
    private setService: SetService
  ) { }

  ngOnInit() {
    this.setService.getAll()
    .subscribe(res => {
      this.sets = res.data;
      this.setService.setSets(res.data);
      console.log(res.data);
    });
  }

  onClick(itemType: number) {
    switch (itemType) {
      case this.itemType.newest: {
        this.isNewest = true;
        this.isMostLike = false;
        this.isSale = false;
        break;
      }
      case this.itemType.mostLike: {
        this.isNewest = false;
        this.isMostLike = true;
        this.isSale = false;
        break;
      }
      case this.itemType.sale: {
        this.isNewest = false;
        this.isMostLike = false;
        this.isSale = true;
        break;
      }
    }
  }
}
