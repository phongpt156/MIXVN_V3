import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';

@Component({
  selector: 'mix-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.scss']
})
export class EditFeatureComponent implements OnInit {
  feature: any = {};
  editFeatureForm: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<EditFeatureComponent>,
    private fb: FormBuilder,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.editFeatureForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', Validators.required],
      active: [true]
    });

    this.patchValue();
  }

  patchValue() {
    this.editFeatureForm.patchValue({
      name: this.feature.name,
      order: this.feature.order,
      active: this.feature.active
    })
  }

  onSubmit() {
    if (this.editFeatureForm.valid) {
      let body: any = {}
      body = this.editFeatureForm.value;

      this.featureService.edit(body, this.feature.id)
      .subscribe(res => {
        this.dialogRef.close(true);
      })
    }
  }

}
