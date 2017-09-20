import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CheckLogin } from './shared/guards/check-login.service';
import { AdminService } from './shared/services/admin/admin.service';
import { ParentCategoryService } from 'app/shared/services/parent-category/parent-category.service';
import { CategoryGroupService } from 'app/shared/services/category-group/category-group.service';
import { CategoryService } from 'app/shared/services/category/category.service';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { CollectionService } from 'app/shared/services/collection/collection.service';
import { FeatureService } from 'app/shared/services/feature/feature.service';
import { FeatureValueService } from 'app/shared/services/feature-value/feature-value.service';
import { ProductService } from 'app/shared/services/product/product.service';
import { ProductGroupService } from 'app/shared/services/product-group/product-group.service';

import { AdminSharedModule } from './shared/modules/admin-shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    CheckLogin,
    AdminService,
    ParentCategoryService,
    CategoryGroupService,
    CategoryService,
    SupplierService,
    CollectionService,
    FeatureService,
    FeatureValueService,
    ProductService,
    ProductGroupService
  ]
})
export class AdminModule { }
