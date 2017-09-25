import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mix-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  collections = [
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
    { url: 'http://lorempixel.com/235/70/?58039'},
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToSupplierPage() {
    this.router.navigate(['/bo-suu-tap']);
  }
}
