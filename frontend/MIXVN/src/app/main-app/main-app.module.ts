import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppSharedModule } from './main-app-shared/module/main-app-shared.module';
import { SharedModule } from 'app/shared/module/shared.module';

import { ProductService } from 'app/main-app/main-app-shared/services/product/product.service';

import { ProductDetailModalComponent } from './home-page/body/main-body/product-list/product-item/product-detail-modal/product-detail-modal.component';
import { MainAppComponent } from './main-app.component';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule,
    MainAppSharedModule,
    SharedModule
  ],
  declarations: [
    MainAppComponent,
    ProductDetailModalComponent,
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductDetailModalComponent
  ]
})
export class MainAppModule { }
