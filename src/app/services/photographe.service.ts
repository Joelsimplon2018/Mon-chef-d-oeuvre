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


  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private uploadUrl = "http://localhost:3306/upload/";



  constructor(private http:  HttpClient,private router: Router) { 
      
  }




  submitRegiste(body:any){
    return this.http.post('http://localhost:3306/prestataire/', body,{
      observe:'body'
    });
  }

  uploadPhotoprofile(prestataire){
    console.log(prestataire);
    return this.http.post<any>(this.uploadUrl, prestataire)
  }


  addAuthorizationHeader(token) {
    const authorizationHeader = new Headers({
      'Authorization': 'Bearer ' + token
    });
  
  }

}
