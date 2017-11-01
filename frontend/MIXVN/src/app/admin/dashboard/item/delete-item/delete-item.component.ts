import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ItemService } from 'app/admin/admin-shared/services/item/item.service';

@Component({
  selector: 'mix-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MdDialogRef<DeleteItemComponent>,
    private itemService: ItemService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.itemService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
