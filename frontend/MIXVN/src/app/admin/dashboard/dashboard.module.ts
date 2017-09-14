import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../shared/modules/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    ImageUploadModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    CategoryComponent,
    SupplierComponent,
    AddSupplierComponent
  ],
  entryComponents: [
    AddSupplierComponent
  ]
})
export class DashboardModule { }
