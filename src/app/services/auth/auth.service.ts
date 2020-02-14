import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{User}from '../../models/user';
import { Router } from "@angular/router";

import { Subject } from "rxjs";

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import * as jwtDecode from 'jwt-decode';

let headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
let options = {
  headers: headers
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(private http:  HttpClient,private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}



submitRegiste(body:any){
  return this.http.post('http://localhost:3306/users/register', body,{
    observe:'body'
  });
}


login(body:any){
  return this.http.post('http://localhost:3306/users/authenticate', body,{
    observe:'body'
  });
}






addAuthorizationHeader(token) {
  const authorizationHeader = new Headers({
    'Authorization': 'Bearer ' + token
  });

}


}
