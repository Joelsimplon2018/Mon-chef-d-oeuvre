import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { Router } from "@angular/router";
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import{AuthService}from '../services/auth/auth.service';
import{PhotographeService}from '../services/photographe.service';
import { ProfilePhotographeService } from './profile-photographe.service';




@Injectable({
  providedIn: 'root'
})


export class MissionService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http:  HttpClient,private router: Router, private PhotographeService: PhotographeService, private AuthService: AuthService) { }


  submitPropositionMission(body:any){
    // const requestOptions = this.AuthService.addAuthorizationHeader(token);
    return this.http.post('http://localhost:3306/mission', body,{
      observe:'body'
    });
  }

  addAuthorizationHeader(token) {
    const authorizationHeader = new Headers({
      'Authorization': 'Bearer ' + token
    });
  
  }
}
