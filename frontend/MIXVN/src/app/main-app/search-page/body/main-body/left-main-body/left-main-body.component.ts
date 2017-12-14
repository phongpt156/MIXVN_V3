import { Component, OnInit, HostBinding, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperConfigInterface, SwiperNavigationInterface } from 'ngx-swiper-wrapper';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-left-main-body',
  templateUrl: './left-main-body.component.html',
  styleUrls: ['./left-main-body.component.scss']
})
export class LeftMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pb-3';
  @Input() selectedSet: any;
  @Input() selectedItem: any;

  swiperNavigation: SwiperNavigationInterface = {
    nextEl: '#item-next',
    prevEl: '#item-prev'
  }

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: false,
    navigation: this.swiperNavigation
  }

  mixPath: string = MIX_PATH;
  isChange = false;

  constructor(
    private router: Router,
    private setService: SetService
  ) { }

  ngOnInit() {
  }

  goToSupplierPage(supplier: any) {
    this.router.navigate(['/shop']);
  }

  selectItem(item: any, img?: string) {
    this.setService.setSelectedItem(item);
    if (img) {
      this.setService.selectedSet.tmp_img = img;
    } else {
      this.setService.selectedSet.tmp_img = item.img;
    }

    console.log(this.setService.getSelectedItem() !== this.setService.selectedSet.items[0]);
    if (this.setService.getSelectedItem() !== this.setService.selectedSet.items[0]) {
      this.isChange = true;
    } else {
      this.isChange = false
    }
  }

  getSetByItem() {
    this.setService.setSelectedItem({});
    this.setService.setSelectedSet({});
    this.setService.setSets([]);

    this.setService.getSetsByItem(this.selectedItem.id)
    .subscribe(res => {
      console.log(res);
      this.setService.setSets([]);
      this.setService.addSets(this.setService.convertData(res.data));

      const selectedSet: any = this.setService.getSets()[0];
      if (selectedSet) {
        this.setService.setSelectedSet(selectedSet);
        console.log(selectedSet);
        console.log(selectedSet.items[0]);
        if (selectedSet.items.length) {
          this.setService.setSelectedItem(selectedSet.items[0]);
        }
      }
    });
  }
}
