import { Component, OnInit, Input } from '@angular/core';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() index: number;

  selectedPrice: any[] = [
    false, false, false, false, false
  ];
  selectedColor: any[] = [
    false, false, false, false, false, false, false, false, false, false, false
  ];
  selectedSize: any[] = [
    false, false, false, false, false
  ];

  constructor(
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {}

  selectPrice(price: number, index: number) {
    this.selectedPrice.forEach((val, i) => {
      if (i !== index) {
        this.selectedPrice[i] = false;
      }
    });
    this.selectedPrice[index] = !this.selectedPrice[index];
    console.log(this.selectedPrice[index]);
    if (this.selectedPrice[index]) {
      this.searchTaggingService.searchTaggings[this.index].price = price;
    } else {
      this.searchTaggingService.searchTaggings[this.index].price = undefined;
    }
  }

  selectFeatureValue(featureId: number, index: number, type: number) {
    if (type === 1) {
      this.selectedColor.forEach((val, i) => {
        if (i !== index) {
          this.selectedColor[i] = false;
        }
      });
      this.selectedColor[index] = !this.selectedColor[index];
    } else if (type === 2) {
      this.selectedSize.forEach((val, i) => {
        if (i !== index) {
          this.selectedSize[i] = false;
        }
      });
      this.selectedSize[index] = !this.selectedSize[index];
    }

    if (this.selectedSize[index] || this.selectedColor[index]) {
      if (this.selectedColor[index] && type === 1) {
        this.searchTaggingService.searchTaggings[this.index].color_feature_id = featureId;
      }

      if (this.selectedSize[index] && type === 2) {
        this.searchTaggingService.searchTaggings[this.index].size_feature_id = featureId;
      }
    } else {
      this.searchTaggingService.searchTaggings[this.index].size_feature_id = undefined;
      this.searchTaggingService.searchTaggings[this.index].color_feature_id = undefined;
    }
  }
}
