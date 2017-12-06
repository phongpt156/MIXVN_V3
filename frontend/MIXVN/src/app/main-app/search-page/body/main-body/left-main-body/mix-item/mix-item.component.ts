import { Component, OnInit, HostBinding } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'mix-mix-item',
  templateUrl: './mix-item.component.html',
  styleUrls: ['./mix-item.component.scss']
})
export class MixItemComponent implements OnInit {
  @HostBinding('class') classes = 'pt-4';

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    slideNextClass: '.button-next',
    slidePrevClass: '.button-prev'
  }

  constructor() { }

  ngOnInit() {
  }

}
