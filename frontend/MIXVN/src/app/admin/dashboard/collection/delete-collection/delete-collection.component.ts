import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'mix-delete-collection',
  templateUrl: './delete-collection.component.html',
  styleUrls: ['./delete-collection.component.scss']
})
export class DeleteCollectionComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DeleteCollectionComponent>
  ) { }

  ngOnInit() {
  }

}
