import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-add-feature-value',
  templateUrl: './add-feature-value.component.html',
  styleUrls: ['./add-feature-value.component.scss']
})
export class AddFeatureValueComponent implements OnInit, OnDestroy {
  addFeatureValueForm: FormGroup;
  feature: any = {};
  features: any[] = [];
  _subscription: Subscription;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private featureService: FeatureService,
    private featureValueService: FeatureValueService
  ) { }

  ngOnInit() {
    this._subscription = this.featureService.featuresChange.subscribe((features: any[]) => {
      this.features = features;
    });

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

  ngOnDestroy() {
    this.getFeatures();
    this._subscription.unsubscribe();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.featureService.setFeatures(res.data);
    });
  }

  patchValue() {
    setTimeout(() => {
      this.addFeatureValueForm.patchValue({
        feature: this.feature.id
      });
    });
  }

  onSubmit() {
    if (this.addFeatureValueForm.valid) {
      let body: any = {};
      body = this.addFeatureValueForm.value;
      this.featureValueService.add(body)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  }
}
