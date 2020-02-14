import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Command } from 'selenium-webdriver';
import { FormGroup, FormBuilder } from '@angular/forms';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FormControl, Validators,FormGroupDirective,NgForm} from '@angular/forms';
import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: String = '';
  isLoading = false;
  
  private pass: string;
  isLoggedIn: boolean= false

  constructor( private AuthService: AuthService, private fb: FormBuilder, 
    private router:Router,
    private _activatedRoute: ActivatedRoute) { 
      this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });

  }

onSubmit(){
  this.isLoggedIn =true;
}
logout(){
  this.isLoggedIn = false;
}


  ngOnInit() {
    // this.refreshFlags();
  }


  
  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.AuthService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/dash']);
          },
          error => { }
        );
    }
  }



isValid(controlName) {
  return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
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
