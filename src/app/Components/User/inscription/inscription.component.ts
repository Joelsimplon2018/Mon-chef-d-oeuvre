import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import {FormControl,AbstractControl, FormGroup, Validators,FormGroupDirective,NgForm} from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';

  constructor(private AuthService:
     AuthService,
    private router:Router,
    private _activatedRoute: ActivatedRoute) { 

      this.myForm = new FormGroup({
        nom: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, Validators.required),
        
      });
      
    }


    register() {
      console.log(this.myForm.value);
  
      if (this.myForm.valid) {
        this.AuthService.submitRegiste(this.myForm.value)
          .subscribe(
            data => this.successMessage = 'Registration Success',
            error => this.successMessage = 'Erreur '
          );
      }
    }



  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }


  // movetologin() {
  //   this.router.navigate(['../login'], { relativeTo: this._activatedRoute });
  // }


  ngOnInit() {
  }
  


}
