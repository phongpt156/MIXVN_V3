import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-delete-feature-value',
  templateUrl: './delete-feature-value.component.html',
  styleUrls: ['./delete-feature-value.component.scss']
})
export class DeleteFeatureValueComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MdDialogRef<DeleteFeatureValueComponent>,
    private featureValueService: FeatureValueService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.featureValueService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    })
  }
}
