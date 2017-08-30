import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdIconModule } from '@angular/material';

import { TopMenuComponent } from './../components/menu/top-menu/top-menu.component';
import { SideMenuComponent } from './../components/menu/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdIconModule
  ],
  exports: [
    CommonModule,
    TopMenuComponent,
    SideMenuComponent,
    MaterialModule,
    MdIconModule
  ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})
export class SharedModule {}
