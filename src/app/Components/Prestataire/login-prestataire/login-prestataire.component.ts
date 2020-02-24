import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Command } from "selenium-webdriver";
import { FormGroup, FormBuilder } from "@angular/forms";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";

@Component({
  selector: 'app-login-prestataire',
  templateUrl: './login-prestataire.component.html',
  styleUrls: ['./login-prestataire.component.css']
})
export class LoginPrestataireComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: String = "";
  isLoading = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

  ngOnInit() {
  }



  isValid(controlName) {
    return (
      this.loginForm.get(controlName).invalid &&
      this.loginForm.get(controlName).touched
    );
  } 
}
