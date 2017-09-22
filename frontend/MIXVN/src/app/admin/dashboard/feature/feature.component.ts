import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

import { AddFeatureComponent } from './add-feature/add-feature.component';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';
import { AddFeatureValueComponent } from '../feature-value/add-feature-value/add-feature-value.component';
import { EditFeatureValueComponent } from '../feature-value/edit-feature-value/edit-feature-value.component';

@Component({
  selector: 'mix-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit, OnDestroy {
  @ViewChild('deleteFeatureModal') deleteFeatureModal;
  @ViewChild('deleteFeatureValueModal') deleteFeatureValueModal;
  bsModalRef: BsModalRef;
  selectedFeatureId: number;
  selectedFeatureValueId: number;
  listCollapsed: any = {};
  features: any[] = [];
  _subscription: Subscription;

  constructor(
    private featureService: FeatureService,
    private featureValueService: FeatureValueService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.features = this.featureService.getFeatures();

    this._subscription = this.featureService.featuresChange.subscribe((features: any[]) => {
      this.features = features;
    });

    this.getFeatures();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      res.data.forEach(val => {
        this.listCollapsed[val.id] = false;
      });
      this.featureService.setFeatures(res.data);
      console.log(res.data);
    });
  }

  openAddFeatureModal() {
    this.bsModalRef = this.bsModalService.show(AddFeatureComponent);
  }

  openEditFeatureModal(e, feature: any) {
    e.stopPropagation();
    this.bsModalRef = this.bsModalService.show(EditFeatureComponent);
    this.bsModalRef.content.feature = feature;
  }

  openDeleteFeatureModal(e, featureId: number) {
    e.stopPropagation();
    this.bsModalRef = this.bsModalService.show(this.deleteFeatureModal);
    this.selectedFeatureId = featureId;
  }

  deleteFeature() {
    this.featureService.delete(this.selectedFeatureId)
    .subscribe(res => {
      this.bsModalRef.hide();
      this.getFeatures();
    });
  }

  openAddFeatureValueModal(feature) {
    this.bsModalRef = this.bsModalService.show(AddFeatureValueComponent);
    this.bsModalRef.content.feature = feature;
  }

  openEditFeatureValueModal(featureValue) {
    this.bsModalRef = this.bsModalService.show(EditFeatureValueComponent);
    this.bsModalRef.content.featureValue = featureValue;
  }

  openDeleteFeatureValueModal(featureValueId) {
    this.bsModalRef = this.bsModalService.show(this.deleteFeatureValueModal);
    this.selectedFeatureValueId = featureValueId;
  }

  deleteFeatureValue() {
    this.featureValueService.delete(this.selectedFeatureValueId)
    .subscribe(res => {
      this.bsModalRef.hide();
      this.getFeatures();
    });
  }
}
