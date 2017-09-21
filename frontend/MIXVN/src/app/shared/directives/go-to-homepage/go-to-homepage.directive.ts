import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[mixGoToHomepage]'
})
export class GoToHomepageDirective {
  @HostListener('click') goToHomePage() {
    this.router.navigate(['/']);
  }

  constructor(
    private router: Router
  ) { }

}
