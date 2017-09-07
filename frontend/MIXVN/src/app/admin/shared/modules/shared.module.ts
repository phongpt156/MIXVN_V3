import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdIconModule } from '@angular/material';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './../components/menu/top-menu/top-menu.component';
import { SideMenuComponent } from './../components/menu/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MdIconModule,
    CollapseModule.forRoot()
  ],
  exports: [
    CommonModule,
    TopMenuComponent,
    SideMenuComponent,
    MaterialModule,
    MdIconModule,
    CollapseModule
  ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})
export class SharedModule {}
