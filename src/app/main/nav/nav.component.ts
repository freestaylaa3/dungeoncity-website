import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_router_router_h } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService],
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  // isAdmin: boolean = false;

  user: User = {
    userEmail: '',
    userExp: 0,
    userId: -1,
    userLevel: -1,
    userName: '',
    userPasswordHash: '',
    userPasswordSalt: '',
    createTime: null,
    lastLogin: null,
    status: false,
    money: -1,
  };

  ngOnInit(): void {
    console.log(this.isAuthenticated);
    if (this.isAuthenticated) {
      console.log(this.authService.getCurrentUserId());
      this.userService
        .getUserById(this.authService.getCurrentUserId())
        .subscribe((data) => {
          console.log('a');
          this.user = data;
          console.log(this.user);
        });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  logOut() {
    this.authService.logOut();
    window.location.reload();
  }
  get isAdmin(){
    return this.authService.isAdmin();
  }
}
