import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

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

  userLoggedIn = null;
  TOKEN_NAME = 'mission-token';
  decodedToken = null;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http:  HttpClient,private router: Router) { 
   
  }



submitRegiste(body:any){
  return this.http.post('http://localhost:3306/users/register', body,{
    observe:'body'
  });
}


login(body:any){
  
  const x = this.http.post('http://localhost:3306/users/authenticate', body,{
    observe:'body'
  });
  x.subscribe(data => this.userLoggedIn = data);
  // console.log('xx here ', this.userLoggedIn.user.isLoggedIn);
  
  return x;
}

logOut() {
  localStorage.removeItem(this.TOKEN_NAME);
  localStorage.removeItem('token');
}


decodeToken(token) {
  
  return jwtDecode(token);
}



// addAuthorizationHeader(token) {
//   const authorizationHeader = new Headers({
//     'Authorization': 'Bearer ' + token
//   });

// }

addAuthorizationHeader(token) {
  const authorizationHeader = new Headers({
    'Authorization': 'Bearer ' + token
  });
 
}


}
