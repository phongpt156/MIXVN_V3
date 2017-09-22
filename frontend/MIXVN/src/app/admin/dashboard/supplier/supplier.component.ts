import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';

import { Page } from 'app/shared/classes/page';

import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';

@Component({
  selector: 'mix-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit, OnDestroy {
  @ViewChild('deleteSupplierModal') deleteSupplierModal;
  _subscription: Subscription;
  suppliers: any[] = [];
  page: Page = new Page;
  bsModalRef: BsModalRef;
  config: ModalOptions = {
    class: 'mw-100 w-75'
  };
  selectedSupplierId: number;

  constructor(
    private bsModalService: BsModalService,
    private supplierService: SupplierService,
  ) { }

  ngOnInit() {
    this.suppliers = this.supplierService.getSuppliers();

    this._subscription = this.supplierService.suppliersChange
    .subscribe((suppliers: any[]) => {
      this.suppliers = suppliers;
    });

    this.getSuppliers();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getSuppliers() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.supplierService.setSuppliers(res.data);
      this.page.size = res.meta.per_page;
      this.page.totalElements = res.meta.total;
      this.page.totalPages = res.meta.last_page;
      this.page.pageNumber = res.meta.current_page;
    });
  }

  openAddSupplierModal() {
    this.bsModalRef = this.bsModalService.show(AddSupplierComponent, this.config);
  }

  openEditSupplierModal(supplier: any) {
    this.bsModalRef = this.bsModalService.show(EditSupplierComponent, this.config);
    this.bsModalRef.content.supplier = supplier;
  }

  openRemoveSupplierModal(id: number) {
    this.bsModalRef = this.bsModalService.show(this.deleteSupplierModal);
    this.selectedSupplierId = id;
  }

  deleteSupplier() {
    this.bsModalRef.hide();
    this.supplierService.delete(this.selectedSupplierId)
    .subscribe(res => {
      this.getSuppliers();
    });
  }
}
