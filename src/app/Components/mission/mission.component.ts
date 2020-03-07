import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import{PhotographeService}from '../../services/photographe.service';
import{AuthService}from '../../services/auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import{MissionService}from '../../services/mission.service';
import {FormControl,AbstractControl, FormGroup, Validators,FormGroupDirective,NgForm} from '@angular/forms';




@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  myForm: FormGroup;
  successMessage: String = '';
 
  
 
  constructor( private ActivatedRoute: ActivatedRoute, private router: Router,  private location: Location,public http: HttpClient, private MissionService: MissionService, private AuthService: AuthService) {

   
    this.myForm = new FormGroup({
      titre: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      type_prestation: new FormControl(null, Validators.required),
    });
   


  }
   
    
  SubmiteMissionFormProp(){
    console.log('form value',this.myForm.value);

    //this.myForm.value =  {
    //   "titre":"photogra",
    //   "description":"aloueueueqhatahs",
    //   "date":"12/02/2020",
    //   "adresse":"2 ave segur",
    //   "telephone":"0126771",
    //   "type_prestation":"mariage",
    //   }

    let body = this.myForm.value;

    // body.users_idusers = id de l'utilisateur connecté
    // body.prestataire_id = id du prestataire surlequel on a cliqué
    // Quand tu cliques sur proposer une mission, il faut passer à ce comosant (create mission) l'id du prestataire

    
    //body =  {
    //   "titre":"photogra",
    //   "description":"aloueueueqhatahs",
    //   "date":"12/02/2020",
    //   "adresse":"2 ave segur",
    //   "telephone":"0126771",
    //   "type_prestation":"mariage",
    //   "users_idusers":"2",
    //   "prestataire_id":"4"
    //   }
    
    if (this.myForm.valid) {

      
      this.MissionService.submitPropositionMission(body).subscribe(
        data => (this.successMessage = "Votre proposition de mission  éteé envoyé"),
        error => (this.successMessage = "Erreur ")
      );
      this.router.navigate(["/login-prestataire"]);
    }
  }

  ngOnInit() {
  }


  isValid(controlName) {
    return (
      this.myForm.get(controlName).invalid &&
      this.myForm.get(controlName).touched
    );
  }
}
