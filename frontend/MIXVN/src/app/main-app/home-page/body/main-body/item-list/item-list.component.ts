import { Component, OnInit, OnChanges, HostListener, HostBinding, Input } from '@angular/core';

import { ItemService } from 'app/main-app/main-app-shared/services/item/item.service';

@Component({
  selector: 'mix-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() loadMoreItemData = [];
  @Input() itemGroups: any[] = [];
  @HostBinding('class') classes = 'custom-scrollbar';

  items = [
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

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.setItems(this.items);
  }

  ngOnChanges() {
    this.items = this.items.concat(this.loadMoreItemData);
    this.itemService.setItems(this.items);
  }
}
