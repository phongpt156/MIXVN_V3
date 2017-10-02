import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from 'app/shared/services/auth/token.interceptor';
import { JwtInterceptor } from 'app/shared/services/auth/jwt.interceptor';

import { GoToHomepageDirective } from 'app/shared/directives/go-to-homepage/go-to-homepage.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    GoToHomepageDirective,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoToHomepageDirective,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ]
})
export class SharedModule {}
