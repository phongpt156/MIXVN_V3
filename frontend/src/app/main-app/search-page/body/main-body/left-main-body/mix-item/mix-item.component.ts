import { Component, OnInit, HostBinding } from '@angular/core';
import { SwiperConfigInterface, SwiperNavigationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'mix-mix-item',
  templateUrl: './mix-item.component.html',
  styleUrls: ['./mix-item.component.scss']
})
export class MixItemComponent implements OnInit {
  @HostBinding('class') classes = 'pt-4';

  swiperNavigation: SwiperNavigationInterface = {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  }

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: false,
    navigation: this.swiperNavigation
  }

  constructor() { }

  ngOnInit() {
  }

}
