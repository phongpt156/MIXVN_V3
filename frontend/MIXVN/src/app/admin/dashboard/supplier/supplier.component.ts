import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';

import { Page } from 'app/shared/classes/page';

import { AddSupplierComponent } from './add-supplier/add-supplier.component';

@Component({
  selector: 'mix-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  page: Page = new Page;
  suppliers: any = {};
  bsModalRef: BsModalRef;
  config: ModalOptions = {
    class: 'mw-100 w-75'
  };

  constructor(
    private bsModalService: BsModalService,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getAll()
    .subscribe(res => {
      console.log(res);
      this.suppliers = res.data;
      this.page.size = res.meta.per_page;
      this.page.totalElements = res.meta.total;
      this.page.totalPages = res.meta.last_page;
      this.page.pageNumber = res.meta.current_page;
    });
  }

  openAddSupplierModal() {
    this.bsModalRef = this.bsModalService.show(AddSupplierComponent, this.config);
  }

}
