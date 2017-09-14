import { Directive, HostListener,  } from '@angular/core';

@Directive({
  selector: '[click-prevent-default]'
})
export class PreventDefaultDirective {
  @HostListener('click', ['$event']) click(e: any) {
    console.log(e);
    e.preventDefault();
  }

  constructor() { }

}
