import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  _subscription: Subscription;
  sets: any[];

  constructor(
    private setService: SetService
  ) { }

  ngOnInit() {
    this.sets = this.setService.getSets();

    this.setService.setsChange.subscribe(sets => {
      this.sets = sets;
    });
  }
}
