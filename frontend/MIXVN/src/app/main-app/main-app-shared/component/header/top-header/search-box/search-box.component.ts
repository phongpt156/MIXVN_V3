import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @HostBinding('class') classes = 'text-center align-self-md-end';
  @Input() isMobile = false;

  itemName: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private setService: SetService,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    const body: any = {};
    body.item_name = this.itemName.value;
    body.items = this.searchTaggingService.searchTaggings;
    console.log(body);
    this.setService.search(body)
    .subscribe(res => {
      console.log(res);
      this.setService.setSets([]);
      this.setService.addSets(this.setService.convertData(res.data));
    });
    this.router.navigate(['/tim-kiem']);
  }
}
