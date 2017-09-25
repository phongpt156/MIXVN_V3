import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { SharedModule } from 'app/shared/module/shared.module';
import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';

import { UserPageComponent } from './user-page.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule,
    MainAppSharedModule
  ],
  declarations: [
    UserPageComponent,
    BodyComponent
  ]
})
export class UserPageModule { }
