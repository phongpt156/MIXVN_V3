import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './home-page.component';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './body/aside/aside.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { CollectionListComponent } from './body/aside/collection-list/collection-list.component';
import { CollectionItemComponent } from './body/aside/collection-list/collection-item/collection-item.component';
import { ProductListComponent } from './body/main-body/product-list/product-list.component';
import { ProductItemComponent } from './body/main-body/product-list/product-item/product-item.component';
import { ProductUserInteractiveComponent } from './body/main-body/product-list/product-item/product-user-interactive/product-user-interactive.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()   
  ],
  declarations: [
    HomePageComponent,
    SliderComponent,
    BodyComponent,
    AsideComponent,
    MainBodyComponent,
    CollectionListComponent,
    CollectionItemComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductUserInteractiveComponent,
  ],
})
export class HomePageModule { }
