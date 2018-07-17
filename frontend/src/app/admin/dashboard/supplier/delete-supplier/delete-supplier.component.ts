import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.scss']
})
export class DeleteSupplierComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteSupplierComponent>,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.supplierService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    })
  }
}
