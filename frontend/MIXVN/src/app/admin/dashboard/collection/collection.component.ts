import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

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
  selectedCollectionId: number;
  collections: any[] = [];
  dialogRef: any;

  constructor(
    public dialog: MatDialog,
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
      panelClass: ['w-50']
    });

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getCollections();
      }
    });
  }

  openEditCollectionDialog(collection: any) {
    this.dialogRef = this.dialog.open(EditCollectionComponent, {
      panelClass: ['w-50']
    });

    this.dialogRef.componentInstance.collection = collection;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getCollections();
      }
    });
  }

  openDeleteCollectionDialog(id: number) {
    this.dialogRef = this.dialog.open(DeleteCollectionComponent);

    this.dialogRef.componentInstance.id = id;

    this.dialogRef.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.getCollections();
      }
    });
  }
}
