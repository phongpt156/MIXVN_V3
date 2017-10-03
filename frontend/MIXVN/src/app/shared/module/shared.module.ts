import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
})
export class SharedModule {}
