import { Directive, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[mixScrollLoadMore]'
})
export class ScrollLoadMoreDirective implements OnInit {
  @Output() onScroll: EventEmitter<any> = new EventEmitter();
  el: any;
  children: any;
  @HostListener('scroll') scroll() {
    this.loadMore();
  }

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.el = this.elementRef.nativeElement;
    this.children = document.getElementById('product-item-container');

    if (this.children.clientHeight <= this.el.clientHeight) {
      this.getData();
    }
  }

  loadMore() {
    if (this.children.clientHeight - this.el.clientHeight <= this.el.scrollTop) {
      this.getData();
    }
  }

  getData() {
    const data = [
      {
        like: '1001',
        name: 'Babydoll trắng',
        group: {
          img: {
            src: 'https://s25.postimg.org/h10oyh8jz/13934712_286958348337750_4408410489384742748_n.jpg'
          }
        },
        price: '600.000',
        supplier: {
          name: 'Magenta'
        }
      },
      {
        like: '1001',
        name: 'Babydoll trắng',
        group: {
          img: {
            src: 'https://s25.postimg.org/792m6kn0v/16939692_1367447593330751_4659085534766732136_n.jpg'
          }
        },
        price: '600.000',
        supplier: {
          name: 'Magenta'
        }
      },
      {
        like: '1001',
        name: 'Babydoll trắng',
        group: {
          img: {
            src: 'https://s25.postimg.org/x9lilp6rz/17038884_1282878081797026_1107411368201609258_o.jpg'
          }
        },
        price: '600.000',
        supplier: {
          name: 'Magenta'
        }
      },
      {
        like: '1001',
        name: 'Babydoll trắng',
        group: {
          img: {
            src: 'https://s25.postimg.org/febhd8wi7/14322677_307878919579026_955540443279259041_n.jpg'
          }
        },
        price: '600.000',
        supplier: {
          name: 'Magenta'
        }
      },
    ];
    this.onScroll.emit(data);
  }
}
