import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CheckLogin } from './shared/guards/check-login.service';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

export const adminRoutes: Routes = [
  { path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: 'login', component: LoginComponent, canActivate: [CheckLogin] }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
