import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mix-left-main-body',
  templateUrl: './left-main-body.component.html',
  styleUrls: ['./left-main-body.component.scss']
})
export class LeftMainBodyComponent implements OnInit {
  @HostBinding('class') classes = 'pb-3';
  @Input() sets: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToSupplierPage() {
    this.router.navigate(['/shop']);
  }
}
