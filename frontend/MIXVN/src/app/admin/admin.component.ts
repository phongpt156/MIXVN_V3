import { Component, OnInit } from '@angular/core';

import { AdminService } from 'app/admin/admin-shared/services/admin/admin.service';

import { ADMIN } from 'app/shared/constants/api/backend';

@Component({
  selector: 'mix-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: any = {};

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAdmin().subscribe(res => {
      this.admin = res.admin;
    });
  }
}
