import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'http://localhost:3000/signupUser';
  constructor(private http:HttpClient) { }

  saveUser(data:any){
    return this.http.post(this.url,data)
  }
}
