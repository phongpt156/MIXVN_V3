import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatFormFieldModule } from '@angular/material';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/module/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from 'app/admin/admin-shared/services/auth-admin/token.interceptor';

import { TopMenuComponent } from './../components/menu/top-menu/top-menu.component';
import { SideMenuComponent } from './../components/menu/side-menu/side-menu.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    CollapseModule.forRoot()
  ],
  exports: [
    SharedModule,
    TopMenuComponent,
    SideMenuComponent,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    CollapseModule
  ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ]
})
export class AdminSharedModule {}
