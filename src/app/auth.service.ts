import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private _Router:Router) {
    if (localStorage.getItem('token')) {
      this.saveUserData()
    }
  }
  userdata = new BehaviorSubject(null);
  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken :any = jwtDecode(encodedToken);
    this.userdata.next(decodedToken);
    
  }
  register(registerdata:any):Observable<any>
  {
    return this.http.post('https://dummyjson.com/users/add', registerdata)
  }
  login(logindata:any):Observable<any>
  {
    return this.http.post('https://dummyjson.com/auth/login', logindata)
  }
  logout(){
    localStorage.removeItem('token');
    this.userdata.next(null);
    this._Router.navigateByUrl('/login')
  }
}
