import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'pl-3 w-100';

  _subscription: Subscription;
  sets: any[] = [];

  constructor(
    private setService: SetService
  ) { }

  ngOnInit() {
    this._subscription = this.setService.setsChange.subscribe(sets => {
      this.sets = sets;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
