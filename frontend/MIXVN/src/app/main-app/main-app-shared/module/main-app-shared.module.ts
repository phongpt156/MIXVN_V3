import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'app/shared/module/shared.module';

import { SearchTaggingService } from './../services/search-tagging/search-tagging.service';

import { HeaderComponent } from './../component/header/header.component';
import { FooterComponent } from './../component/footer/footer.component';
import { TopHeaderComponent } from './../component/header/top-header/top-header.component';
import { BottomHeaderComponent } from './../component/header/bottom-header/bottom-header.component';
import { SearchBoxComponent } from './../component/header/top-header/search-box/search-box.component';
import { SearchTaggingListComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-list.component';
import { AlertLoginComponent } from './../component/alert-login/alert-login.component';
import { SearchTaggingItemComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-item/search-tagging-item.component';
import { SearchFilterComponent } from './../component/header/top-header/search-box/search-tagging-list/search-tagging-item/search-filter/search-filter.component';

import { ScrollLoadMoreDirective } from './../directives/scroll-load-more/scroll-load-more.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
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
    SearchTaggingItemComponent,
    SearchFilterComponent,    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SearchBoxComponent,
    SearchTaggingListComponent,
    ScrollLoadMoreDirective,
    AlertLoginComponent,
    SearchTaggingItemComponent,    
  ],
  providers: [
    SearchTaggingService
  ],
  entryComponents: [
    AlertLoginComponent
  ]
})
export class MainAppSharedModule {}
