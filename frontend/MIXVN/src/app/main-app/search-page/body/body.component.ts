import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  _subscriptions: Subscription[] = [];
  sets: any[];
  selectedSet: any;
  selectedItem: any;
  isNotFound = false;
  query: string;
  filter: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private setService: SetService,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramsAsMap => {
      this.query = paramsAsMap['params']['q'];
      this.filter = paramsAsMap['params']['f'];
      this.search();
    });

    this.sets = this.setService.getSets();
    this.selectedSet = this.setService.getSelectedSet();
    this.selectedItem = this.setService.getSelectedItem();

    this._subscriptions.push(this.setService.setsChange.subscribe(sets => {
      this.sets = sets;
    }));
    this._subscriptions.push(this.setService.selectedSetChange.subscribe(set => {
      this.selectedSet = set
    }));
    this._subscriptions.push(this.setService.selectedItemChange.subscribe(item => {
      this.selectedItem = item
    }));
  }

  ngOnDestroy() {
    this._subscriptions.forEach((_subscription: Subscription) => {
      _subscription.unsubscribe();
    });
  }

  async search() {
    if (this.searchTaggingService.isReload) {
      await this.parseHashToTag();
      this.searchTaggingService.isReload = false;
    }

    this.setService.setSelectedItem({});
    this.setService.setSelectedSet({});
    this.setService.setSets([]);

    const body: any = this.formatBodySendToServer();

    this.setService.search(body)
    .subscribe(res => {
      console.log(res);
      this.setService.setSets([]);
      if (res.data.length) {
        this.isNotFound = false;
        this.setService.addSets(this.setService.convertData(res.data));

        const selectedSet: any = this.setService.getSets()[0];
        if (selectedSet) {
          this.setService.setSelectedSet(selectedSet);
          console.log(selectedSet);
          console.log(selectedSet.items[0]);
          if (selectedSet.items.length) {
            this.setService.setSelectedItem(selectedSet.items[0]);
          }
        }
      } else {
        this.isNotFound = true;
      }
    });
  }

  parseHashToTag(): Promise<any> {
    return new Promise(resolve => {
      this.searchTaggingService.parseHashToTag(this.query, this.filter);
      resolve();
    });
  }

  formatBodySendToServer(): any {
    return {
      item_name: this.searchTaggingService.itemName,
      items: this.searchTaggingService.searchTaggings
    }
  }
}
