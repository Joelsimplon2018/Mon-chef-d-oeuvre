import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-accueille',
  templateUrl: './accueille.component.html',
  styleUrls: ['./accueille.component.css']
})
export class AccueilleComponent implements OnInit {

   items:Array<any> =[];

  prestataire;
 
  constructor(public http: HttpClient, private ActivatedRoute: ActivatedRoute ) { 

  http.get('http://localhost:3306/prestataire/')
  .subscribe(Response =>{
     console.log(Response);
     this.prestataire= Response;
  })
    
    this.items=[
      {
        name:"../../../assets/image/carousel 1.jpg"
      },
      {
        name:"../../../assets/image/carousel2.jpg"
      },
      {
        name:"../../../assets/image/carousel 1.jpg"
      },
      {
        name:"../../../assets/image/carousel2.jpg"
      },
      {
        name:"../../../assets/image/carousel 1.jpg"
      },
    ] 
   }

  ngOnInit() {
   

   
  }

}
