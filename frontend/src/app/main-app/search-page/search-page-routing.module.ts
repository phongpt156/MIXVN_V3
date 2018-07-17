import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page.component';

export const searchPageRoutes = [
  { path: '', component: SearchPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchPageRoutingModule {}
