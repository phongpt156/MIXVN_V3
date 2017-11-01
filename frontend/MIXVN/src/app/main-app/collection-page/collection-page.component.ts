import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CollectionService } from 'app/main-app/main-app-shared/services/collection/collection.service';

@Component({
  selector: 'mix-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  id: number;
  collection: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.collectionService.getCollectionPage(this.id)
    .subscribe(res => {
      console.log(res);
      this.collection = res.data;
    });
  }

}
