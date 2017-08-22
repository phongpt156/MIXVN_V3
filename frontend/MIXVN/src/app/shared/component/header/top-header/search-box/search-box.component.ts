import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mix-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @HostBinding('class.text-center') textCenter: boolean = false;
  @HostBinding('class.align-self-md-end') alignSelfEnd: boolean = false;
  constructor(
    private searchBoxRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.textCenter = true;
    this.alignSelfEnd = true;
  }

}
