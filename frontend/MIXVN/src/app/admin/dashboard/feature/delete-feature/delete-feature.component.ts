import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';

@Component({
  selector: 'mix-delete-feature',
  templateUrl: './delete-feature.component.html',
  styleUrls: ['./delete-feature.component.scss']
})
export class DeleteFeatureComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MdDialogRef<DeleteFeatureComponent>,
    private featureService: FeatureService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.featureService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
