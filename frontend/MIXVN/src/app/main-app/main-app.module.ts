import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppSharedModule } from './main-app-shared/module/main-app-shared.module';
import { SharedModule } from 'app/shared/module/shared.module';

import { TokenInterceptor } from 'app/main-app/main-app-shared/services/auth-user/token.interceptor';

import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { ProductService } from 'app/main-app/main-app-shared/services/product/product.service';

import { ProductDetailModalComponent } from './home-page/body/main-body/product-list/product-item/product-detail-modal/product-detail-modal.component';
import { MainAppComponent } from './main-app.component';

import { CategoryService } from './main-app-shared/services/category/category.service';
import { UserService } from './main-app-shared/services/user/user.service';
import { CollectionService } from './main-app-shared/services/collection/collection.service';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule,
    MainAppSharedModule,
    SharedModule,
  ],
  declarations: [
    MainAppComponent,
    ProductDetailModalComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthService,    
    ProductService,
    CategoryService,
    UserService,
    CollectionService,
  ],
  entryComponents: [
    ProductDetailModalComponent
  ]
})
export class MainAppModule { }
