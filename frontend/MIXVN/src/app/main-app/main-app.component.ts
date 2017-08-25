import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  @HostBinding('style.padding-top') paddingTop = '97px';
  
  constructor() { }

  ngOnInit() {
  }

}
