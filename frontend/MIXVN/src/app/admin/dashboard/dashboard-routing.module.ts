import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/admin/shared/guards/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';

export const dashBoardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'dashboard/product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'dashboard/category',
    component: CategoryComponent
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
