import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/admin/shared/guards/auth-guard.service';

import { DashboardComponent } from './dashboard.component';

export const dashBoardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'dashboard/product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'dashboard/category',
    loadChildren: './category/category.module#CategoryModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashBoardRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule {}
