import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import{PhotographeService}from '../../services/photographe.service';
import { RouterModule, Routes } from '@angular/router';
import {FormControl,AbstractControl, FormGroup, Validators,FormGroupDirective,NgForm} from '@angular/forms';




@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  myForm: FormGroup;
  successMessage: String = '';
 
  
 
  constructor( private ActivatedRoute: ActivatedRoute, private router: Router,  private location: Location,public http: HttpClient, private PhotographeService: PhotographeService) {

   
    this.myForm = new FormGroup({
      titre: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.email),
      date: new FormControl(null, Validators.required),
      type_prestation: new FormControl(null, Validators.required),
      
    });
   
   
  }
   

  ngOnInit() {
  }


  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }
  
}
