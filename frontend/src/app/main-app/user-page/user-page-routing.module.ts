import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';

const userPageRoutes: Routes = [
  { path: '', component: UserPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(userPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserPageRoutingModule {}
