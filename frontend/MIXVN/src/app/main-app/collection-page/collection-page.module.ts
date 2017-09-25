import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPageRoutingModule } from './collection-page-routing.module';
import { SharedModule } from 'app/shared/module/shared.module';
import { MainAppSharedModule } from 'app/main-app/main-app-shared/module/main-app-shared.module';

import { CollectionPageComponent } from './collection-page.component';
import { BodyComponent } from './body/body.component';
import { InvolveCollectionComponent } from './body/involve-collection/involve-collection.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionPageRoutingModule,
    SharedModule,
    MainAppSharedModule
  ],
  declarations: [CollectionPageComponent, BodyComponent, InvolveCollectionComponent]
})
export class CollectionPageModule { }
