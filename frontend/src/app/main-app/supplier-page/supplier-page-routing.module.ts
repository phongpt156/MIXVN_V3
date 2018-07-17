import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplierPageComponent } from './supplier-page.component';

export const supplierPageRoutes: Routes = [
  { path: '', component: SupplierPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(supplierPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SupplierPageRoutingModule {}
