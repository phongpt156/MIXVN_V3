import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-edit-feature-value',
  templateUrl: './edit-feature-value.component.html',
  styleUrls: ['./edit-feature-value.component.scss']
})
export class EditFeatureValueComponent implements OnInit {
  editFeatureValueForm: FormGroup;
  featureValue: any = {};
  features: any[] = [];

  constructor(
    public dialogRef: MdDialogRef<EditFeatureValueComponent>,
    private fb: FormBuilder,
    private featureService: FeatureService,
    private featureValueService: FeatureValueService
  ) { }

  ngOnInit() {
    this.editFeatureValueForm = this.fb.group({
      vi_name: ['', Validators.required],
      dev_name: [''],
      feature: ['', Validators.required],
      order: ['', Validators.required],
      active: ['', Validators.required]
    });
    this.getFeatures();
    this.patchValue();
  }

  patchValue() {
    this.editFeatureValueForm.patchValue({
      vi_name: this.featureValue.vi_name,
      dev_name: this.featureValue.dev_name,
      feature: this.featureValue.feature.id,
      order: this.featureValue.order,
      active: this.featureValue.active
    });
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.features = res.data;
    });
  }

  onSubmit() {
    if (this.editFeatureValueForm.valid) {
      let body: any = {};
      body = this.editFeatureValueForm.value;
      this.featureValueService.edit(body, this.featureValue.id)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}
