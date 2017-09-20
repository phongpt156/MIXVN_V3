import { NgModule } from '@angular/core';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppSharedModule } from './main-app-shared/module/main-app-shared.module';

import { ProductService } from 'app/main-app/main-app-shared/services/product/product.service';

import { ProductDetailModalComponent } from './home-page/body/main-body/product-list/product-item/product-detail-modal/product-detail-modal.component';
import { MainAppComponent } from './main-app.component';

@NgModule({
  imports: [
    MainAppRoutingModule,
    MainAppSharedModule,
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
