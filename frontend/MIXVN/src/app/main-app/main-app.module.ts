import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from 'app/shared/module/shared.module';

import { MainAppComponent } from './main-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule
  ],
  declarations: [
    MainAppComponent,
    HomePageComponent,
    SearchPageComponent
  ]
})
export class MainAppModule { }
