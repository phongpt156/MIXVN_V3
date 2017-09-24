import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierPageComponent } from './supplier-page.component';
import { SupplierPageRoutingModule } from './supplier-page-routing.module';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './body/aside/aside.component';

import { SharedModule } from 'app/shared/module/shared.module';
import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';
import { MainBodyComponent } from './body/main-body/main-body.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierPageRoutingModule,
    SharedModule,
    MainAppSharedModule
  ],
  declarations: [
    SupplierPageComponent,
    BodyComponent,
    AsideComponent,
    MainBodyComponent,
  ]
})
export class SupplierPageModule { }
