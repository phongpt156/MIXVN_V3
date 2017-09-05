import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/admin/shared/guards/auth-guard.service';

import { DashboardComponent } from './dashboard.component';

export const dashBoardRoutes = [
  { path: 'dashboard', component: DashboardComponent, canActive: [AuthGuard]}
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
