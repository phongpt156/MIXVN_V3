import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from 'app/main-app/main-app-shared/services/collection/collection.service';

@Component({
  selector: 'mix-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  collections: any = [];

  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collectionService.getCategories()
    .subscribe(res => {
      this.collections = res.data;
    });
  }

  goToSupplierPage() {
    this.router.navigate(['/bo-suu-tap']);
  }
}
