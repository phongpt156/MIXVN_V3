import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedModule } from 'app/shared/module/shared.module';

import { HeaderComponent } from './../component/header/header.component';
import { FooterComponent } from './../component/footer/footer.component';
import { TopHeaderComponent } from './../component/header/top-header/top-header.component';
import { BottomHeaderComponent } from './../component/header/bottom-header/bottom-header.component';
import { SearchBoxComponent } from './../component/header/top-header/search-box/search-box.component';
import { SearchTaggingListComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-list.component';
import { AlertLoginComponent } from './../component/alert-login/alert-login.component';
import { SearchTaggingItemComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-item/search-tagging-item.component';
import { SearchFilterComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-item/search-filter/search-filter.component';
import { LoginBoxComponent } from './../component/login-box/login-box.component';

import { ItemListComponent } from 'app/main-app/home-page/body/main-body/item-list/item-list.component';
import { ItemItemComponent } from 'app/main-app/home-page/body/main-body/item-list/item-item/item-item.component';
import { ItemUserInteractiveComponent } from 'app/main-app/home-page/body/main-body/item-list/item-item/item-user-interactive/item-user-interactive.component';

import { ScrollLoadMoreDirective } from './../directives/scroll-load-more/scroll-load-more.directive';

@NgModule({
  imports: [
    SharedModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SwiperModule.forChild(),
    PerfectScrollbarModule.forChild()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SearchBoxComponent,
    SearchTaggingListComponent,
    ScrollLoadMoreDirective,
    AlertLoginComponent,
    LoginBoxComponent,
    SearchTaggingItemComponent,
    SearchFilterComponent,
    ItemListComponent,
    ItemItemComponent,
    ItemUserInteractiveComponent,
  ],
  exports: [
    SharedModule,
    SwiperModule,
    PerfectScrollbarModule,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SearchBoxComponent,
    SearchTaggingListComponent,
    ScrollLoadMoreDirective,
    AlertLoginComponent,
    LoginBoxComponent,
    SearchTaggingItemComponent,
    ItemListComponent,
    ItemItemComponent,
    ItemUserInteractiveComponent,
  ],
  entryComponents: [
    AlertLoginComponent,
    LoginBoxComponent,
  ]
})
export class MainAppSharedModule {}
