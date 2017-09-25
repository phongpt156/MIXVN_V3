import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionPageComponent } from './collection-page.component';

const collectionPageRoutes: Routes = [
  { path: '', component: CollectionPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(collectionPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CollectionPageRoutingModule {}
