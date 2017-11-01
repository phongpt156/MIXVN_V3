import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ItemService } from 'app/admin/admin-shared/services/item/item.service';

import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@Component({
  selector: 'mix-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  dialogRef: any;

  constructor(
    public dialog: MdDialog,
    private itemService: ItemService,
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getAll()
    .subscribe(res => {
      this.items = res.data;
    });
  }

  openAddItemDialog() {
    this.dialogRef = this.dialog.open(AddItemComponent, {
      panelClass: ['w-50']
    });

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getItems();
      }
    });
  }

  openEditItemDialog(item: any) {
    this.dialogRef = this.dialog.open(EditItemComponent, {
      panelClass: ['w-50']
    });

    this.dialogRef.componentInstance.item = item;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getItems();
      }
    });
  }

  openDeleteItemDialog(id: number) {
    this.dialogRef = this.dialog.open(DeleteItemComponent);

    this.dialogRef.componentInstance.id = id;

    this.dialogRef.afterClosed().subscribe((isDelete) => {
      if (isDelete) {
        this.getItems();
      }
    });
  }
}
