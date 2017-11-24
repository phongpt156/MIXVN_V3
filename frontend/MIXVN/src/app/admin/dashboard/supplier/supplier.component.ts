import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';

import { Page } from 'app/shared/classes/page';

import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';

@Component({
  selector: 'mix-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  suppliers: any[] = [];
  page: Page = new Page;
  dialogRef: any;
  mixPath: string = MIX_PATH;

  constructor(
    public dialog: MatDialog,
    private supplierService: SupplierService,
  ) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.suppliers = res.data;
      this.page.size = res.meta.per_page;
      this.page.totalElements = res.meta.total;
      this.page.totalPages = res.meta.last_page;
      this.page.pageNumber = res.meta.current_page;
    });
  }

  openAddSupplierDialog() {
    this.dialogRef = this.dialog.open(AddSupplierComponent, {
      panelClass: ['w-75']
    });

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getSuppliers();
      }
    });
  }

  openEditSupplierDialog(supplier: any) {
    this.dialogRef = this.dialog.open(EditSupplierComponent, {
      panelClass: ['w-75']
    });

    this.dialogRef.componentInstance.supplier = supplier;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getSuppliers();
      }
    });
  }

  openDeleteSupplierDialog(id: number) {
    this.dialogRef = this.dialog.open(DeleteSupplierComponent);

    this.dialogRef.componentInstance.id = id;

    this.dialogRef.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.getSuppliers();
      }
    });
  }
}
