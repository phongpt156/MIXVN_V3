import { Component, OnInit, HostBinding } from '@angular/core';

import { CategoryService } from 'app/shared/services/category/category.service';
import { SearchTaggingService } from 'app/main-app/main-app-shared/services/search-tagging/search-tagging.service';

@Component({
  selector: 'mix-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {
  @HostBinding('class') classes = 'd-none d-md-block';
  categories: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private searchTaggingService: SearchTaggingService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.categories = res.data;
    });
  }

  addSearchTagging(category) {
    this.searchTaggingService.searchTaggings.push({category: category});
  }
}
