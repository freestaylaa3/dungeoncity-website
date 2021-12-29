import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from './alertify.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router, private alertify:AlertifyService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isAdmin();

    if (logged) {
      return true;
    }
    this.router.navigate(["**"]);
    this.alertify.error("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
}
