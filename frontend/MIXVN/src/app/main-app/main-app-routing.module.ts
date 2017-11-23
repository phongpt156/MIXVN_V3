import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAppComponent } from './main-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const mainAppRoutes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: '',
        loadChildren: './home-page/home-page.module#HomePageModule'
      },
      {
        path: 'tim-kiem',
        loadChildren: './search-page/search-page.module#SearchPageModule'
      },
      {
        path: 'shop/:name',
        loadChildren: './supplier-page/supplier-page.module#SupplierPageModule'
      },
      {
        path: 'user/:id',
        loadChildren: './user-page/user-page.module#UserPageModule'
      },
      {
        path: 'bo-suu-tap/:name',
        loadChildren: './collection-page/collection-page.module#CollectionPageModule'
      }
    ]
  }
//   { path: 'homepage', component: MainAppComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainAppRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class MainAppRoutingModule {}
