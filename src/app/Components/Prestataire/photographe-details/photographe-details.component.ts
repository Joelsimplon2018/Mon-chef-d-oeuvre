import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import{PhotographeService}from '../../../services/photographe.service';
import{AuthService}from '../../../services/auth/auth.service';
@Component({
  selector: 'app-photographe-details',
  templateUrl: './photographe-details.component.html',
  styleUrls: ['./photographe-details.component.css']
})
export class PhotographeDetailsComponent implements OnInit {
  
  prestataire;
            id;
            config:any;
  prestataires={ count: 60, data:[]};

  constructor( private ActivatedRoute: ActivatedRoute, private router: Router,  private location: Location,public http: HttpClient, private PhotographeService: PhotographeService) { 
    http.get('http://localhost:3306/prestataire/')
    .subscribe(Response =>{
       console.log(Response);
       this.prestataire= Response;
    })


    for (var i =0; i< this.prestataires.count; i++){
      this.prestataires.data.push(
        {
         nom:i+1,
         titre:" prestataires number"+(i+1)
        }
      );
    }
    this.config={
      itemsPerPage:5,
      currentPage:1,
      totalItems:this.prestataires.count
    };
  }

  ngOnInit(){
    this.id= this.ActivatedRoute.snapshot.params.id;
    let data: Observable<any>;
    data=this.http.get('http://localhost:3306/prestataire/'+this.id);
    data.subscribe(Response =>{
      this.prestataires= Response;
    })

  }

  

}
