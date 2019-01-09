import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authSvc: AuthService) {}

  ngOnInit() {}

  login() {
    this.authSvc.login(this.model).subscribe(
      next => {
        console.log('logged successfully');
      },
      error => {
        console.log('failed to login');
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out.');
  }
}
