import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';

import { FeatureService } from 'app/shared/services/feature/feature.service';
import { FeatureValueService } from 'app/shared/services/feature-value/feature-value.service';

import { AddFeatureComponent } from './add-feature/add-feature.component';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';
import { AddFeatureValueComponent } from '../feature-value/add-feature-value/add-feature-value.component';
import { EditFeatureValueComponent } from '../feature-value/edit-feature-value/edit-feature-value.component';

@Component({
  selector: 'mix-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @ViewChild('deleteFeatureModal') deleteFeatureModal;
  @ViewChild('deleteFeatureValueModal') deleteFeatureValueModal;
  bsModalRef: BsModalRef;
  selectedFeatureId: number;
  selectedFeatureValueId: number;
  listCollapsed: any = {};

  constructor(
    private featureService: FeatureService,
    private featureValueService: FeatureValueService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      res.data.forEach(val => {
        this.listCollapsed[val.id]
      });
      this.featureService.features = res.data;
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
