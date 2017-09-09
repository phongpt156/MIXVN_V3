import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CheckLogin } from './shared/guards/check-login.service';
import { AdminService } from './shared/services/admin/admin.service';

import { SharedModule } from './shared/modules/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    CheckLogin,
    AdminService,
  ]
})
export class AdminModule { }
