import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';

import { SharedModule } from '../shared/modules/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { Autosize } from 'angular2-autosize/angular2-autosize';
import { PreventDefaultDirective } from 'app/shared/directives/prevent-default/prevent-default.directive';

import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { CollectionComponent } from './collection/collection.component';
import { AddCollectionComponent } from './collection/add-collection/add-collection.component';
import { EditCollectionComponent } from './collection/edit-collection/edit-collection.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    Autosize,
    PreventDefaultDirective,
    DashboardComponent,
    CategoryComponent,
    SupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    CollectionComponent,
    AddCollectionComponent,
    EditCollectionComponent
  ],
  entryComponents: [
    AddSupplierComponent,
    EditSupplierComponent,
    AddCollectionComponent,
    EditCollectionComponent
  ]
})
export class DashboardModule { }
