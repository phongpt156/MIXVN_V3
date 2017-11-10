import { Component, OnInit, HostBinding } from '@angular/core';

import { SET_TYPE } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pr-2';
  setType: any = SET_TYPE
  isNewest = true;
  isMostLike = false;
  isSale = false;
  sets = [];

  constructor(
    private setService: SetService
  ) { }

  ngOnInit() {
    this.getSet(this.setType.newest);
  }

  getSet(type: number) {
    switch (type) {
      case this.setType.newest: {
        this.setService.getNewest()
        .subscribe(res => {
          console.log(res)
          this.sets = res.data;
          this.setService.setSets(res.data);
        });
        break;
      }
      case this.setType.mostLike: {
        this.setService.getMostLike()
        .subscribe(res => {
          this.sets = res.data;
          this.setService.setSets(res.data);
        });
        break;
      }
      case this.setType.sale: {
        this.setService.getDiscount()
        .subscribe(res => {
          this.sets = res.data;
          this.setService.setSets(res.data);
        });
        break;
      }
    }
  }

  onClick(setType: number) {
    switch (setType) {
      case this.setType.newest: {
        this.isNewest = true;
        this.isMostLike = false;
        this.isSale = false;
        break;
      }
      case this.setType.mostLike: {
        this.isNewest = false;
        this.isMostLike = true;
        this.isSale = false;
        break;
      }
      case this.setType.sale: {
        this.isNewest = false;
        this.isMostLike = false;
        this.isSale = true;
        break;
      }
    }
    this.getSet(setType);
  }
}
