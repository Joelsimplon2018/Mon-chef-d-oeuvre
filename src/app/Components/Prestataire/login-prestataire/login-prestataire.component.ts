import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Command } from "selenium-webdriver";
import { FormGroup, FormBuilder } from "@angular/forms";
import{PhotographeService}from "../../../services/photographe.service";
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
  isLoggedIn: boolean = false;


  constructor( private PhotographeService: PhotographeService,
    private fb: FormBuilder,
    private router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

   logout() {
    this.isLoggedIn = false;
  }

  onSubmit() {
    this.isLoggedIn = true;
  }
  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.PhotographeService.login(this.loginForm.value).subscribe((data:any) => {
          let x = JSON.stringify(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("currentUser", JSON.stringify(data.user));
          this.router.navigate(["/edit-profil"]);
        },
        error => {}
      );
    }
  }


  isValid(controlName) {
    return (
      this.loginForm.get(controlName).invalid &&
      this.loginForm.get(controlName).touched
    );
  } 
}
