import { Component, OnInit, OnChanges, HostListener, Input } from '@angular/core';

@Component({
  selector: 'mix-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() loadMoreProductData = [];

  products = [
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
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
          src: 'https://s25.postimg.org/n22z9akjz/14680573_321245414909043_4309655749737517510_n.jpg'
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
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
          src: 'https://s25.postimg.org/n22z9akjz/14680573_321245414909043_4309655749737517510_n.jpg'
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
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
          src: 'https://s25.postimg.org/n22z9akjz/14680573_321245414909043_4309655749737517510_n.jpg'
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
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
          src: 'https://s25.postimg.org/n22z9akjz/14680573_321245414909043_4309655749737517510_n.jpg'
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
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
          src: 'https://s25.postimg.org/n22z9akjz/14680573_321245414909043_4309655749737517510_n.jpg'
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
    {
      like: '1001',
      name: 'Babydoll trắng',
      group: {
        img: {
          src: 'https://s25.postimg.org/ui6u8txn3/16832176_1362811533794357_1796074166008209795_n.jpg'
        }
      },
      price: '600.000',
      supplier: {
        name: 'Magenta'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.products = this.products.concat(this.loadMoreProductData);
  }
}
