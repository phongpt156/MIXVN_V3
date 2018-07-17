import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './home-page.component';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './body/aside/aside.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { CollectionListComponent } from './body/aside/collection-list/collection-list.component';
import { CollectionItemComponent } from './body/aside/collection-list/collection-item/collection-item.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    MainAppSharedModule
  ],
  declarations: [
    HomePageComponent,
    SliderComponent,
    BodyComponent,
    AsideComponent,
    MainBodyComponent,
    CollectionListComponent,
    CollectionItemComponent,
  ],
})
export class HomePageModule { }
