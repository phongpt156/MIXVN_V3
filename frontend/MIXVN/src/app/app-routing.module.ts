import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloader } from 'app/shared/classes/custom.preloader';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './main-app/main-app.module#MainAppModule',
        data: {
          preload: true
        }
      },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloader })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
