import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageRoutingModule } from './search-page-routing.module'

import { SearchPageComponent } from './search-page.component';

@NgModule({
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }
