import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageRoutingModule } from './search-page-routing.module';

import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';

import { SearchPageComponent } from './search-page.component';
import { BodyComponent } from './body/body.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { LeftMainBodyComponent } from './body/main-body/left-main-body/left-main-body.component';
import { RightMainBodyComponent } from './body/main-body/right-main-body/right-main-body.component';
import { MixItemComponent } from './body/main-body/left-main-body/mix-item/mix-item.component';
import { InvolveItemComponent } from './body/involve-item/involve-item.component';

@NgModule({
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    MainAppSharedModule
  ],
  declarations: [
    SearchPageComponent,
    BodyComponent,
    MainBodyComponent,
    LeftMainBodyComponent,
    RightMainBodyComponent,
    MixItemComponent,
    InvolveItemComponent,
  ]
})
export class SearchPageModule { }
