import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';


import { Router } from "@angular/router";

import { Subject } from "rxjs";


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
export class PhotographeService {

  prestataireLoggedIn = null;
  TOKEN_NAME = 'mission-token';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private uploadUrl = "http://localhost:3306/upload/";

  constructor(private http:  HttpClient,private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
      
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}

  submitRegiste(body:any){
    return this.http.post('http://localhost:3306/prestataire/register', body,{
      observe:'body'
    });
  }

  // login(body:any){
  //   return this.http.post('http://localhost:3306/prestataire/authenticate', body,{
  //     observe:'body'
  //   });
  // }


  login(body:any){
  
    const x = this.http.post('http://localhost:3306/prestataire/authenticate', body,{
      observe:'body'
    });
    x.subscribe(data => this.prestataireLoggedIn = data);
    // console.log('xx here ', this.userLoggedIn.user.isLoggedIn);
    
    return x;
  }


  uploadPhotoprofile(prestataire){
    console.log(prestataire);
    return this.http.post<any>(this.uploadUrl, prestataire)
  }

  // logOut() {
  //   localStorage.removeItem(this.TOKEN_NAME);
  //   localStorage.removeItem('token');
  // }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
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
