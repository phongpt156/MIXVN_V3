import { NgModule } from '@angular/core';
import { GoToHomepageDirective } from 'app/shared/directives/go-to-homepage/go-to-homepage.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    GoToHomepageDirective
  ],
  exports: [
    GoToHomepageDirective,
  ],
})
export class SharedModule {}
