import { Component, OnInit } from '@angular/core';
import{PhotographeService } from '../../../services/photographe.service';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import axios from 'axios';
import {FormControl, Validators,FormGroupDirective,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creation-profile-detail',
  templateUrl: './creation-profile-detail.component.html',
  styleUrls: ['./creation-profile-detail.component.css']
})
export class CreationProfileDetailComponent implements OnInit {
 
  fileData: File = null;
  name = new FormControl('');
  myForm: FormGroup;
  successMessage: String = '';

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
    private http: HttpClient, 
    private router: Router,
    private ActivatedRoute: ActivatedRoute  ) {


      this.myForm = new FormGroup({
        nom: new FormControl(null, Validators.required),
        prenom: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, Validators.required),
        ville: new FormControl(null, Validators.required),
        image:new FormControl(null,Validators.required),
        experience:new FormControl(null, Validators.required),
        competence:new FormControl(null, Validators.required),
        titre:new FormControl(null, Validators.required),
        tarif:new FormControl(null, Validators.required),
        telephone:new FormControl(null, Validators.required),
        
      });

   }

   RegisterNewPresta() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this.PhotographeService.submitRegiste(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'Erreur '
         
        );
       this.router.navigate(["/login-prestataire"]);
    }
  }



  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}

  ngOnInit() {
  }

  onFileseleted(event){
   
  this.selectedFile = <File> event.target.files[0];

  }


  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  
  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('file', this.selectedFile, this.selectedFile.name)
  //   this.http.post('http://localhost:3306/upload',fd)
  //   .subscribe(res =>{
  //     console.log(res);
  //   })
  // }

  onUpload(){
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('http://localhost:3306/upload', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
}


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

}
