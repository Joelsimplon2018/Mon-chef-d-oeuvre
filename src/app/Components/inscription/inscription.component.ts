import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  
   registerUserData={}

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  // registerUser(){
  //   this.AuthService.registerUser(this.registerUserData)
  //   .subscribe(
  //     res => console.log(res),
  //     err => console.log(err),
  //   )
  // }

}
