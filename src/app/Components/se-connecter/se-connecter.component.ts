import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Command } from 'selenium-webdriver';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor( private AuthService: AuthService, private router: Router, private fb: FormBuilder) { 

  }




  ngOnInit() {
    // this.refreshFlags();
  }


  // refreshFlags() {
  //   if(this.AuthService.userIsLoggedIn()) {
  //     this.isAuthenticated = true;
  //     this.welcomeMessage = 'Bienvenue';
  //     const jbbToken = JSON.parse(localStorage.getItem(this.PRST_TOKEN_NAME));
  //   }
  // }

   

  // login(credentials) {
  //   this.AuthService.login(credentials)
  //                   .subscribe(
  //                     data => {
  //                       this.handleLoginSuccess(data)
  //                     },
  //                     error => {
  //                       this.handleLoginFailure(error)
  //                     }
  //                   )
  // }

  // handleLoginSuccess(data) {
  //   console.log('success: ', data);
  //   this.prestaToken = data;
  //   localStorage.setItem(this.PRST_TOKEN_NAME, JSON.stringify(data));
  //   this.router.navigate(['/photographe-detail']);
  // }

  handleLoginFailure(error) {
    console.error('failure: ', error);
  }

 

}
