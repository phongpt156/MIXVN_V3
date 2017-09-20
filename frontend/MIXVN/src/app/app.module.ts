import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CustomPreloader } from 'app/shared/classes/custom.preloader';

import { CategoryService } from './shared/services/category/category.service';
import { CommonService } from './shared/services/common/common.service';
import { AuthService } from './shared/services/auth/auth.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CustomPreloader,
    CategoryService,
    CommonService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
