import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule, MatMenuModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/module/shared.module';
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
    CollapseModule
  ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})
export class AdminSharedModule {}
