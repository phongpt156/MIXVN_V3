import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { SharedModule } from 'app/shared/module/shared.module';
import { SupplierPageRoutingModule } from './supplier-page-routing.module';
import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';

import { SupplierPageComponent } from './supplier-page.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './body/aside/aside.component';
import { MainBodyComponent } from './body/main-body/main-body.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierPageRoutingModule,
    SharedModule,
    MainAppSharedModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    SupplierPageComponent,
    BodyComponent,
    AsideComponent,
    MainBodyComponent,
  ]
})
export class SupplierPageModule { }
