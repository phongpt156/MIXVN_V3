import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-edit-feature-value',
  templateUrl: './edit-feature-value.component.html',
  styleUrls: ['./edit-feature-value.component.scss']
})
export class EditFeatureValueComponent implements OnInit, OnDestroy {
  editFeatureValueForm: FormGroup;
  featureValue: any = {};

  constructor(
    public bsModalRef: BsModalRef,
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

  ngOnDestroy() {
    this.getFeatures();
  }

  patchValue() {
    setTimeout(() => {
      this.editFeatureValueForm.patchValue({
        vi_name: this.featureValue.vi_name,
        dev_name: this.featureValue.dev_name,
        feature: this.featureValue.feature_id,
        order: this.featureValue.order,
        active: this.featureValue.active
      });
    });
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.featureService.setFeatures(res.data);
    });
  }

  onSubmit() {
    if (this.editFeatureValueForm.valid) {
      let body: any = {};
      body = this.editFeatureValueForm.value;
      this.featureValueService.edit(body, this.featureValue.id)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  }
}
