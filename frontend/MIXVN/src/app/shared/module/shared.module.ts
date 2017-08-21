import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './../component/header/header.component';
import { FooterComponent } from './../component/footer/footer.component';
import { TopHeaderComponent } from './../component/header/top-header/top-header.component';
import { BottomHeaderComponent } from './../component/header/bottom-header/bottom-header.component';
import { SearchBoxComponent } from './../component/header/top-header/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SearchBoxComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SearchBoxComponent
  ]
})
export class SharedModule {}
