import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
