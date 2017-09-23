import { Component, OnInit, HostBinding } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'mix-involve-product',
  templateUrl: './involve-product.component.html',
  styleUrls: ['./involve-product.component.scss']
})
export class InvolveProductComponent implements OnInit {
  @HostBinding('class') classes = 'p-3 mt-5 mx-3';

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    // slidesPerView: 10,
    keyboardControl: true,
    nextButton: '.button-next',
    prevButton: '.button-prev'
  }

  constructor() { }

  ngOnInit() {
  }

}
