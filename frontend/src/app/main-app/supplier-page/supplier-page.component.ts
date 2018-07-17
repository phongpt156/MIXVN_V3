import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SupplierService } from 'app/main-app/main-app-shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent implements OnInit {
  supplier: any = {};
  mixPath: string = MIX_PATH;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.supplierService.getSupplier(this.id)
    .subscribe(res => {
      console.log(res);
      this.supplier = res.data;
    });
  }
}
