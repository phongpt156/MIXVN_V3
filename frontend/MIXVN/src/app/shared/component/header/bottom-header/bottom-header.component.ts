import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'mix-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {
  @HostBinding('class') classes = 'd-none d-md-block';

  constructor(
  ) { }

  ngOnInit() {

  }
}
