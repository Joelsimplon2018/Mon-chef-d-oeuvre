import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  BASE_URL  = "http://localhost:3306/auth/";
  TOKEN_NAME = 'jll-token';

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  

  constructor(private http:  HttpClient) { 

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}


login(credentials) {
  return this.http.post<any>(this.BASE_URL + 'connexion', credentials)
      .pipe(map(res => res.json()));
}


userIsLoggedIn() {
  return !!localStorage.getItem(this.TOKEN_NAME);
}

logOut() {
  localStorage.removeItem(this.TOKEN_NAME);
  localStorage.removeItem('token');
}

register(credentials) {
  return this.http.post<any>(this.BASE_URL + 'inscription', credentials)
      .pipe(map(res => res.json()));
}

decodeToken(token) {
  return jwtDecode(token);
}

addAuthorizationHeader(token) {
  const authorizationHeader = new Headers({
    'Authorization': 'Bearer ' + token
  });
 
}


}
