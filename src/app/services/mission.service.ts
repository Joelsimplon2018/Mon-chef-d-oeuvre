import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { Router } from "@angular/router";
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import{ModelMission}from '../Models/model.mission';

import{PhotographeService}from '../services/photographe.service';
import { ProfilePhotographeService } from './profile-photographe.service';
import { AuthService } from './auth/auth.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';




@Injectable({
  providedIn: 'root'
})


export class MissionService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

private baseURL : "http://localhost:3306/mission/";

  token = JSON.stringify(localStorage.getItem('token'));
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //    'Authorization': `Bearer ` + this.token
  //   })
  // }

  constructor(private http:  HttpClient,private router: Router, private PhotographeService: PhotographeService, private AuthService: AuthService) { }


  submitPropositionMission(modelmission:ModelMission): Observable<ModelMission>
  {
   //const requestOptions = this.AuthService.addAuthorizationHeader(token);
   let token = JSON.stringify(localStorage.getItem('token'));
   var reqHeader = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ` + token
   })
   return this.http.post<ModelMission>('http://localhost:3306/mission/create-mission', modelmission,{
      headers: reqHeader
    });
    // return this.http.post('http://localhost:3306/mission', body,{
    //   observe:'body'
    // });
  }

  addAuthorizationHeader(token) {
    const authorizationHeader = new Headers({
      'Authorization': 'Bearer ' + token
    });
  
  }
}
