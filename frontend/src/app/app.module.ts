import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/module/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { CustomPreloader } from 'app/shared/classes/custom.preloader';

import { CommonService } from './shared/services/common/common.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    CustomPreloader,
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
