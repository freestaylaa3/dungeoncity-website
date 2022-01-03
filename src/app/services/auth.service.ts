import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/registerUser';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router,private alert: AlertifyService) {}
  path = 'https://dungeoncity-webapi.herokuapp.com/api/Auth/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY: any = 'token';
  token: any = localStorage.getItem(this.TOKEN_KEY);

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'login', loginUser, { headers: headers })
      .subscribe((data) => {
        this.saveToken(data['token']);
        this.userToken = data['token'];
        this.decodedToken = this.jwtHelper.decodeToken(data['token'].toString());
        this.router.navigateByUrl('').then(()=>{
          window.location.reload();
        });
      });
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {
        
        this.router.navigateByUrl('').then(()=>{
          window.location.reload();
          this.alert.success("kayıt işlemi başarılı.")
        },(error)=>{
          this.alert.error(`${error}`);
        }
        );
      });
  }
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.token);
  }
  // get token(){
  //   return localStorage.getItem(this.TOKEN_KEY);
  // }

  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token)['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }
  isAdmin(){
    if(this.jwtHelper.decodeToken(this.token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=='Admin'){
      return true;
    }
    return false
  }
}
