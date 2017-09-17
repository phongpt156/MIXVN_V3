import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProductService } from 'app/shared/services/product/product.service';

@Component({
  selector: 'mix-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
  host: {
    '(document:click)': 'handleClick($event)'
  }
})
export class SearchProductComponent implements OnInit {
  @Input() index: number;
  @Output() productChange: EventEmitter<any> = new EventEmitter;
  productName: FormControl;
  products: any[] = [];
  isSearchFocus: boolean = false
  isSelectProduct: boolean = false;
  
  constructor(
    private productService: ProductService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.productName = new FormControl;
    this.productName.valueChanges
    .debounceTime(150)
    .distinctUntilChanged()
    .switchMap(productName => this.productService.searchByName(productName))
    .subscribe(res => {
      this.products = res.data;
    });
  }
  
  handleClick(e) {
    let clickedComponent = e.target;
    let inside: boolean = false;
    
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if (inside) {
      this.isSearchFocus = true;
    } else {
      this.isSearchFocus = false;
    }
  }

  selectProduct(product: any) {
    setTimeout(() => {
      this.isSearchFocus = false;
    }, 200);

    this.productChange.emit({product: product, index: this.index});
  }
}
