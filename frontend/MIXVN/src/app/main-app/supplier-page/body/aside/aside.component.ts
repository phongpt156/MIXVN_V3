import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @HostBinding('class') classes = 'pr-4';
  isMaleCollapsed = true;
  isFemaleCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
