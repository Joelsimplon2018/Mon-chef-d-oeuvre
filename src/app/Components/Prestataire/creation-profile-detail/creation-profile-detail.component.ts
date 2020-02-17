import { Component, OnInit } from '@angular/core';
import{PhotographeService } from '../../../services/photographe.service';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import axios from 'axios';
import {FormControl, Validators,FormGroupDirective,NgForm} from '@angular/forms';

@Component({
  selector: 'app-creation-profile-detail',
  templateUrl: './creation-profile-detail.component.html',
  styleUrls: ['./creation-profile-detail.component.css']
})
export class CreationProfileDetailComponent implements OnInit {

  registerPhotoprofileData={};
  selectedFile: File= null;
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
 selected = 'option2';
 hide = true;
  
  constructor( 
    private PhotographeService : PhotographeService,
    public http: HttpClient, 
    private ActivatedRoute: ActivatedRoute  ) {

   }

  ngOnInit() {
  }

  uploadPhotoprofile(event){
   
  this.selectedFile = <File> event.target.files[0];

  }
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('http://localhost:3306/upload/',fd)
    .subscribe(res =>{
      console.log(res);
    })
  }

}
