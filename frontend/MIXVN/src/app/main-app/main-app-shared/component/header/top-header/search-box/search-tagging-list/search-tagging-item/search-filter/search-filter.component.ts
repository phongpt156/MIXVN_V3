import { Component, OnInit, Input } from '@angular/core';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() index: number;

  searchTagging: any;

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.searchTagging = this.searchTaggingService.searchTaggings[this.index];
  }

  selectPrice(price: number, index: number) {
    if (this.searchTaggingService.searchTaggings[this.index].price == price) {
      this.searchTaggingService.searchTaggings[this.index].price = undefined;
    } else {
      this.searchTaggingService.searchTaggings[this.index].price = price;
    }
  }

  selectFeatureValue(featureId: number, index: number, type: number) {
    if (type === 1) {
      if (this.searchTaggingService.searchTaggings[this.index].color_feature == featureId) {
        this.searchTaggingService.searchTaggings[this.index].color_feature = undefined;
      } else {
        this.searchTaggingService.searchTaggings[this.index].color_feature = featureId;
      }
    } else if (type === 2) {
      if (this.searchTaggingService.searchTaggings[this.index].size_feature == featureId) {
        this.searchTaggingService.searchTaggings[this.index].size_feature = undefined;
      } else {
        this.searchTaggingService.searchTaggings[this.index].size_feature = featureId;
      }
    }
  }
}
