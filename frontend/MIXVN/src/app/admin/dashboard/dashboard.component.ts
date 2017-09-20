import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/admin/shared/services/admin/admin.service';

@Component({
  selector: 'mix-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
