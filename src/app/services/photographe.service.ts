import { Injectable } from '@angular/core';


import {Observable} from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotographeService {

  private uploadUrl = "http://localhost:3306/upload/";

thumbnailFetchUrl : string = "https://south/generateThumbnail?width=100&height=100";


  constructor(private http:  HttpClient) { 
      
  }

  uploadPhotoprofile(prestataire){
    console.log(prestataire);
    return this.http.post<any>(this.uploadUrl, prestataire)
  }


}
