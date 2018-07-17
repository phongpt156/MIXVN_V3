import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageUploadModule } from 'angular2-image-upload';

import { AdminSharedModule } from '../admin-shared/modules/admin-shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { Autosize } from 'ng-autosize';

import { PreventDefaultDirective } from './../../shared/directives/prevent-default/prevent-default.directive';

import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { CollectionComponent } from './collection/collection.component';
import { AddCollectionComponent } from './collection/add-collection/add-collection.component';
import { EditCollectionComponent } from './collection/edit-collection/edit-collection.component';
import { FeatureComponent } from './feature/feature.component';
import { UploadComponent } from './upload/upload.component';
import { AddFeatureComponent } from './feature/add-feature/add-feature.component';
import { EditFeatureComponent } from './feature/edit-feature/edit-feature.component';
import { AddFeatureValueComponent } from './feature-value/add-feature-value/add-feature-value.component';
import { EditFeatureValueComponent } from './feature-value/edit-feature-value/edit-feature-value.component';
import { AddItemFormComponent } from './upload/add-item-form/add-item-form.component';
import { SearchItemComponent } from './upload/add-item-form/search-item/search-item.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { DeleteItemComponent } from './item/delete-item/delete-item.component';
import { DeleteCollectionComponent } from './collection/delete-collection/delete-collection.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { DeleteFeatureComponent } from './feature/delete-feature/delete-feature.component';
import { DeleteFeatureValueComponent } from './feature-value/delete-feature-value/delete-feature-value.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { AddParentCategoryComponent } from './parent-category/add-parent-category/add-parent-category.component';
import { EditParentCategoryComponent } from './parent-category/edit-parent-category/edit-parent-category.component';
import { DeleteParentCategoryComponent } from './parent-category/delete-parent-category/delete-parent-category.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AdminSharedModule,
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
    EditCollectionComponent,
    FeatureComponent,
    UploadComponent,
    AddFeatureComponent,
    EditFeatureComponent,
    AddFeatureValueComponent,
    EditFeatureValueComponent,
    AddItemFormComponent,
    SearchItemComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent,
    DeleteItemComponent,
    DeleteCollectionComponent,
    DeleteSupplierComponent,
    DeleteFeatureComponent,
    DeleteFeatureValueComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AddParentCategoryComponent,
    EditParentCategoryComponent,
    DeleteParentCategoryComponent
  ],
  entryComponents: [
    AddSupplierComponent,
    EditSupplierComponent,
    AddCollectionComponent,
    EditCollectionComponent,
    AddFeatureComponent,
    EditFeatureComponent,
    AddFeatureValueComponent,
    EditFeatureValueComponent,
    AddItemComponent,
    EditItemComponent,
    DeleteItemComponent,
    DeleteCollectionComponent,
    DeleteSupplierComponent,
    DeleteFeatureComponent,
    DeleteFeatureValueComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AddParentCategoryComponent,
    EditParentCategoryComponent,
    DeleteParentCategoryComponent
  ]
})
export class DashboardModule { }
