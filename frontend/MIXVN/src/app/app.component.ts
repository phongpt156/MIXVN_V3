import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user = {};
  blur: boolean;
  _subscription: Subscription;

  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.blur = this.commonService.getBlur();

    this._subscription = this.commonService.blurChange.subscribe(value => { 
      this.blur = value;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
