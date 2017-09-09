import { Component, OnInit, HostBinding } from '@angular/core';

import { CategoryService } from 'app/shared/services/category/category.service';

@Component({
  selector: 'mix-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {
  @HostBinding('class') classes = 'd-none d-md-block';
  categories: any[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.categories = res.data;
    });
  }
}
