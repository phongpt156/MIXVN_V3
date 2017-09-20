import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const homePageRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(homePageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageRoutingModule {}
