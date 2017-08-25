import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mix-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() isMobile = false;

  @HostBinding('class') classes = 'text-center align-self-md-end';

  constructor(
  ) { }

  ngOnInit() {

  }

}
