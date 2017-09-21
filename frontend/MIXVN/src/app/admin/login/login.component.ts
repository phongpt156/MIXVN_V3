import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from 'app/admin/admin-shared/services/admin/admin.service';

@Component({
  selector: 'mix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const body: any = {};
    body.email = this.loginForm.value.email;
    body.password = this.loginForm.value.password;
    const admin = this.adminService.login(body);
    admin.subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }

}
