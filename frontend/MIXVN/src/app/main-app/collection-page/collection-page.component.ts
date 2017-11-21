import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MIX_PATH } from 'app/shared/constants/constants';

import { CollectionService } from 'app/main-app/main-app-shared/services/collection/collection.service';
import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

@Component({
  selector: 'mix-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  id: number;
  collection: any = {};
  mixPath: string = MIX_PATH;

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService,
    private setService: SetService
  ) { }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.collectionService.getCollectionPage(this.id)
    .subscribe(res => {
      console.log(res);
      this.collection = this.collectionService.convertData(res.data);
      this.setService.setSets(this.collection.sets);
    });
  }

}
