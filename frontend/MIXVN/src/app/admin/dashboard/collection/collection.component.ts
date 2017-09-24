import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

import { AddCollectionComponent } from './add-collection/add-collection.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { DeleteCollectionComponent } from './delete-collection/delete-collection.component';

@Component({
  selector: 'mix-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @ViewChild('deleteCollectionModal') deleteCollectionModal;

  selectedCollectionId: number;
  collections: any[] = [];
  dialogRef: any;

  constructor(
    public dialog: MdDialog,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.getCollections();
  }

  getCollections() {
    this.collectionService.getAll()
    .subscribe(res => {
      this.collections = res.data;
    });
  }

  openAddCollectionDialog() {
    this.dialogRef = this.dialog.open(AddCollectionComponent, {
      panelClass: ['w-50', 'mh-100', 'overflow']
    });

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getCollections();
      }
    });
  }

  openEditCollectionDialog(collection: any) {
    this.dialogRef = this.dialog.open(EditCollectionComponent, {
      panelClass: ['w-50', 'mh-100', 'overflow']
    });

    this.dialogRef.componentInstance.collection = collection;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getCollections();
      }
    });
  }

  openDeleteCollectionDialog(collectionId: number) {
    this.dialogRef = this.dialog.open(DeleteCollectionComponent);

    this.dialogRef.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.collectionService.delete(collectionId)
        .subscribe(res => {
          this.getCollections();
        });
      }
    });
  }
}
