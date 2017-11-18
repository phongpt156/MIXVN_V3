import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppSharedModule } from './main-app-shared/module/main-app-shared.module';
import { SharedModule } from 'app/shared/module/shared.module';

import { TokenInterceptor } from 'app/main-app/main-app-shared/services/auth-user/token.interceptor';

import { AuthService } from 'app/main-app/main-app-shared/services/auth-user/auth.service';
import { ItemService } from 'app/main-app/main-app-shared/services/item/item.service';
import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';

import { ItemDetailModalComponent } from './home-page/body/main-body/item-list/item-item/item-detail-modal/item-detail-modal.component';
import { MainAppComponent } from './main-app.component';

import { CategoryService } from './main-app-shared/services/category/category.service';
import { UserService } from './main-app-shared/services/user/user.service';
import { CollectionService } from './main-app-shared/services/collection/collection.service';
import { SearchTaggingService } from './main-app-shared/services/search-tagging/search-tagging.service';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule,
    MainAppSharedModule,
    SharedModule,
  ],
  declarations: [
    MainAppComponent,
    ItemDetailModalComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthService,
    ItemService,
    CategoryService,
    UserService,
    CollectionService,
    SetService,
    SearchTaggingService
  ],
  entryComponents: [
    ItemDetailModalComponent
  ]
})
export class MainAppModule { }
