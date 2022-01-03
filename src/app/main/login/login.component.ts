import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AlertifyService],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alert: AlertifyService
  ) {}
  loginUser: any = {};

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginUser);
    if(this.authService.loggedIn()){
      this.alert.success("Başarılı Giriş")
    }
  }

  logOut() {
    this.authService.logOut();
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
