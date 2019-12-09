import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import{PhotographeService}from '../../../services/photographe.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  id;
  config:any;
  prestataire;
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
   

  ngOnInit() {
  }

}
