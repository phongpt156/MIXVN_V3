import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

@Component({
  selector: 'mix-delete-collection',
  templateUrl: './delete-collection.component.html',
  styleUrls: ['./delete-collection.component.scss']
})
export class DeleteCollectionComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteCollectionComponent>,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.collectionService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
