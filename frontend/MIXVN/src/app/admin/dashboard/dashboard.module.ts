import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/modules/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    CategoryComponent
  ]
})
export class DashboardModule { }
