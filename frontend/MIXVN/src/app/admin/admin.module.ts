import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './admin-shared/guards/auth-guard.service';
import { CheckLogin } from './admin-shared/guards/check-login.service';
import { AdminService } from './admin-shared/services/admin/admin.service';
import { ParentCategoryService } from './admin-shared/services/parent-category/parent-category.service';
import { CategoryService } from './admin-shared/services/category/category.service';
import { SupplierService } from './admin-shared/services/supplier/supplier.service';
import { CollectionService } from './admin-shared/services/collection/collection.service';
import { FeatureService } from './admin-shared/services/feature/feature.service';
import { FeatureValueService } from './admin-shared/services/feature-value/feature-value.service';
import { ProductService } from './admin-shared/services/product/product.service';
import { ProductGroupService } from './admin-shared/services/product-group/product-group.service';

import { AuthService } from 'app/admin/admin-shared/services/auth-admin/auth.service';
import { AdminSharedModule } from './admin-shared/modules/admin-shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
  ],
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CheckLogin,
    AdminService,
    ParentCategoryService,
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
