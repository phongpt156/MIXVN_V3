import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-right-main-body',
  templateUrl: './right-main-body.component.html',
  styleUrls: ['./right-main-body.component.scss']
})
export class RightMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'w-100 py-3 px-4 custom-scrollbar';
  @Input() sets: any[] = [];

  mixPath: string = MIX_PATH;

  constructor(
    private setService: SetService
  ) { }

  ngOnInit() {
  }

  selectSet(set: any) {
    if (set !== this.setService.getSelectedSet()) {
      this.setService.setSelectedSet(set);
      if (set.items.length) {
        this.setService.setSelectedItem(set.items[0]);
      }
    }
  }
}
