import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'text-center align-self-md-end';
  @Input() isMobile = false;

  _subscription: Subscription;
  itemName: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private setService: SetService,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    if (this.searchTaggingService.isReload) {
      this.itemName.setValue(this.searchTaggingService.itemName);
      this._subscription = this.searchTaggingService.itemNameChange.subscribe(name => {
        this.itemName.setValue(name);
      });
    }
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onSubmit() {
    this.searchTaggingService.isReload = false;
    this.searchTaggingService.itemName = this.itemName.value;

    const routeParam = {};
    if (this.searchTaggingService.itemName) {
      routeParam['q'] = this.searchTaggingService.itemName;
    }
    if (this.searchTaggingService.searchTaggings.length) {
      routeParam['f'] = this.searchTaggingService.parseTagToHash();
    }

    this.router.navigate(['/tim-kiem', routeParam]);
  }
}
