import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jssor_1_slider_init: any;

@Component({
  selector: 'mix-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jssor_1_slider_init();
  }
}
