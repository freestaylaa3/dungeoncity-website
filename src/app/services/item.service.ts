import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient) { }
  path = "https://dungeoncity-webapi.herokuapp.com/api/Item/";
  
  getItems():Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.path+"get-items")
  }

  addItem(item:Item){
    console.log(item);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient.post<Item>(this.path+"add-item",item,{headers:headers}).subscribe(data=>{})
  }

  async deleteItem(item:Item){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient.post<Item>(this.path+"delete-item",item,{headers:headers}).subscribe(data=>{})
  }

  editItem(item:Item){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient.post<Item>(this.path+"update-item",item,{headers:headers}).subscribe(data=>{})
  }

  getItemById(id:number):Observable<Item>{
    return this.httpClient.get<Item>(this.path+`get-itembyid?id=${id}`);
  }

}
