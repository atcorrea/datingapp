import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authSvc: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.authSvc.login(this.model).subscribe(
      next => {
        this.alertify.success('logged successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out.');
  }
}
