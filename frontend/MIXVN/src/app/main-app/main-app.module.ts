import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from 'app/shared/module/shared.module';

import { MainAppComponent } from './main-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SliderComponent } from './home-page/slider/slider.component';
import { BodyComponent } from './home-page/body/body.component';
import { AsideComponent } from './home-page/body/aside/aside.component';
import { MainBodyComponent } from './home-page/body/main-body/main-body.component';
import { CollectionListComponent } from './home-page/body/aside/collection-list/collection-list.component';
import { CollectionItemComponent } from './home-page/body/aside/collection-list/collection-item/collection-item.component';
import { ProductListComponent } from './home-page/body/main-body/product-list/product-list.component';
import { ProductItemComponent } from './home-page/body/main-body/product-list/product-item/product-item.component';

@NgModule({
  imports: [
    MainAppRoutingModule,
    SharedModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    MainAppComponent,
    HomePageComponent,
    SearchPageComponent,
    SliderComponent,
    BodyComponent,
    AsideComponent,
    MainBodyComponent,
    CollectionListComponent,
    CollectionItemComponent,
    ProductListComponent,
    ProductItemComponent
  ]
})
export class MainAppModule { }
