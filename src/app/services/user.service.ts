import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44327/api/User/"

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.path+"get-users")
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.path+`getbyid?id=${id}`);
  }

  deleteUser(id:number){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient.post(this.path+`delete-user?id=${id}`,id,{headers:headers}).subscribe(data=>{})
  }

  updateUser(user:User){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient.post(this.path+"update-user",user,{headers:headers}).subscribe(data=>{})
  }
}
