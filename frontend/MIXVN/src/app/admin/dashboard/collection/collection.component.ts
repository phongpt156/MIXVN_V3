import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

import { AddCollectionComponent } from './add-collection/add-collection.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';

@Component({
  selector: 'mix-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {
  @ViewChild('deleteCollectionModal') deleteCollectionModal;
  bsModalRef: BsModalRef
  config: ModalOptions = {
    class: 'mw-100 w-75'
  }
  selectedCollectionId: number;
  _subscription: Subscription;
  collections: any[] = [];

  constructor(
    private bsModalService: BsModalService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
    this._subscription = this.collectionService.collectionsChange.subscribe((collections: any[]) => {
      this.collections = collections;
    });
    this.getCollections();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getCollections() {
    this.collectionService.getAll()
    .subscribe(res => {
      this.collectionService.setCollections(res.data);
    });
  }

  openAddCollectionModal() {
    this.bsModalRef = this.bsModalService.show(AddCollectionComponent, this.config);
  }

  openEditCollectionModal(collection: any) {
    this.bsModalRef = this.bsModalService.show(EditCollectionComponent, this.config);
    this.bsModalRef.content.collection = collection;
  }

  openDeleteCollectionModal(collectionId: number) {
    this.bsModalRef = this.bsModalService.show(this.deleteCollectionModal);
    this.selectedCollectionId = collectionId;
  }

  deleteCollection() {
    this.collectionService.delete(this.selectedCollectionId)
    .subscribe(res => {
      this.bsModalRef.hide();
      this.getCollections();
    });
  }
}
