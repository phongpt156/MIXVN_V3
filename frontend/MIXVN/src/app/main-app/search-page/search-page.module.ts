import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageRoutingModule } from './search-page-routing.module'

import { SearchPageComponent } from './search-page.component';
import { BodyComponent } from './body/body.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { LeftMainBodyComponent } from './body/main-body/left-main-body/left-main-body.component';
import { RightMainBodyComponent } from './body/main-body/right-main-body/right-main-body.component';

@NgModule({
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPageComponent,
    BodyComponent,
    MainBodyComponent,
    LeftMainBodyComponent,
    RightMainBodyComponent,
  ]
})
export class SearchPageModule { }
