import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.css'],
})
export class PanelUserComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  detailUserForm = this.fb.group({
    userId: [],
    userName: [],
    userEmail: [],
    userPasswordSalt: [],
    userPasswordHash: [],
    userExp: [],
    userLevel: [],
    createTime: [],
    lastLogin: [],
    status: [],
    money: [],
  });

  deleteUser(id) {
    if (confirm('Kullanıcıyı silmek istediğinize emin misiniz?') == true) {
      this.userService.deleteUser(id);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  loadUserDetails(id: number) {
    this.userService.getUserById(id).subscribe((data) => {
      this.detailUserForm.setValue({
        userId: data.userId,
        userName: data.userName,
        userEmail: data.userEmail,
        userPasswordSalt: data.userPasswordSalt,
        userPasswordHash: data.userPasswordHash,
        userExp: data.userExp,
        userLevel: data.userLevel,
        createTime: data.createTime,
        lastLogin: data.lastLogin,
        status: data.status,
        money: data.money,
      });
    });
  }

  detailUser(id) {
    if (confirm('Değişiklikleri kabul ediyor musunuz?') == true) {
      this.userService.getUserById(id).subscribe((data) => {
        console.log(data);
        data = this.detailUserForm.value
        this.userService.updateUser(data)
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }
}
