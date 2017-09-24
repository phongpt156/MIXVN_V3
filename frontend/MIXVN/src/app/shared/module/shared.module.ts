import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoToHomepageDirective } from 'app/shared/directives/go-to-homepage/go-to-homepage.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GoToHomepageDirective,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    GoToHomepageDirective,
  ],
})
export class SharedModule {}
