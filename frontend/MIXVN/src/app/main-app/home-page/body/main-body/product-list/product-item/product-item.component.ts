import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @HostBinding('class') classes = 'px-1 pb-2';

  @Input() product: any = {};
  
  constructor() { }

  ngOnInit() {
  }

}
