import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-add-feature-value',
  templateUrl: './add-feature-value.component.html',
  styleUrls: ['./add-feature-value.component.scss']
})
export class AddFeatureValueComponent implements OnInit {
  addFeatureValueForm: FormGroup;
  feature: any = {};
  features: any[] = [];

  constructor(
    public dialogRef: MdDialogRef<AddFeatureValueComponent>,
    private fb: FormBuilder,
    private featureService: FeatureService,
    private featureValueService: FeatureValueService
  ) { }

  ngOnInit() {
    this.getFeatures();

    this.addFeatureValueForm = this.fb.group({
      vi_name: ['', Validators.required],
      dev_name: [''],
      order: ['', Validators.required],
      feature: ['', Validators.required],
      active: [true, Validators.required]
    });

    this.patchValue();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.features = res.data;
    });
  }

  patchValue() {
    this.addFeatureValueForm.patchValue({
      feature: this.feature.id
    });
  }

  onSubmit() {
    if (this.addFeatureValueForm.valid) {
      let body: any = {};
      body = this.addFeatureValueForm.value;
      this.featureValueService.add(body)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}
