import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = {};

  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit() {
  }
}
