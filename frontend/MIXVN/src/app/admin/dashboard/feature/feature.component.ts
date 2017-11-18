import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { FeatureValueService } from 'app/admin/admin-shared/services/feature-value/feature-value.service';

import { AddFeatureComponent } from './add-feature/add-feature.component';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';
import { DeleteFeatureComponent } from './delete-feature/delete-feature.component';
import { AddFeatureValueComponent } from '../feature-value/add-feature-value/add-feature-value.component';
import { EditFeatureValueComponent } from '../feature-value/edit-feature-value/edit-feature-value.component';
import { DeleteFeatureValueComponent } from '../feature-value/delete-feature-value/delete-feature-value.component';

@Component({
  selector: 'mix-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  listCollapsed: any = {};
  features: any[] = [];
  dialogRef: any;

  constructor(
    public dialog: MatDialog,
    private featureService: FeatureService,
  ) { }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      res.data.forEach(val => {
        this.listCollapsed[val.id] = false;
      });
      this.features = res.data;
    });
  }

  openAddFeatureDialog() {
    this.dialogRef = this.dialog.open(AddFeatureComponent);

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getFeatures();
      }
    });
  }

  openEditFeatureDialog(e, feature: any) {
    e.stopPropagation();
    this.dialogRef = this.dialog.open(EditFeatureComponent);
    this.dialogRef.componentInstance.feature = feature;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getFeatures();
      }
    });
  }

  openDeleteFeatureDialog(e, featureId: number) {
    e.stopPropagation();
    this.dialogRef = this.dialog.open(DeleteFeatureComponent);

    this.dialogRef.componentInstance.id = featureId;

    this.dialogRef.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.getFeatures();
      }
    });
  }

  openAddFeatureValueDialog(feature) {
    this.dialogRef = this.dialog.open(AddFeatureValueComponent);
    this.dialogRef.componentInstance.feature = feature;

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getFeatures();
      }
    })
  }

  openEditFeatureValueDialog(featureValue) {
    this.dialogRef = this.dialog.open(EditFeatureValueComponent);
    this.dialogRef.componentInstance.featureValue = featureValue;

    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getFeatures();
      }
    });
  }

  openDeleteFeatureValueDialog(featureValueId) {
    this.dialogRef = this.dialog.open(DeleteFeatureValueComponent);

    this.dialogRef.componentInstance.id = featureValueId;

    this.dialogRef.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.getFeatures();
      }
    });
  }
}
