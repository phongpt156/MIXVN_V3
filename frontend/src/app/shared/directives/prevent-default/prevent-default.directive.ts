import { Directive, HostListener,  } from '@angular/core';

@Directive({
  selector: '[click-prevent-default]'
})
export class PreventDefaultDirective {
  @HostListener('click', ['$event']) click(e: any) {
    e.preventDefault();
  }

  constructor() { }

}
