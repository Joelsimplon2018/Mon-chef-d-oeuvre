import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

import { PhotographeService } from "../../../services/photographe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import axios from "axios";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "app-creation-profile-detail",
  templateUrl: "./creation-profile-detail.component.html",
  styleUrls: ["./creation-profile-detail.component.css"]
})
export class CreationProfileDetailComponent implements OnInit {
  fileData: File = null;
  name = new FormControl("");
  myForm: FormGroup;
  successMessage: String = "";

  registerPhotoprofileData = {};
  selectedFile: any;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  selected = "option2";
  hide = true;

  constructor(
    private PhotographeService: PhotographeService,
    private http: HttpClient,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.myForm = new FormGroup({
      nom: new FormControl("test name", Validators.required),
      prenom: new FormControl("test prénom", Validators.required),
      email: new FormControl("gui@gui.com", Validators.email),
      password: new FormControl("123456", Validators.required),
      ville: new FormControl("abidjan", Validators.required),
      image: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      competence: new FormControl(null, Validators.required),
      titre: new FormControl("codeur", Validators.required),
      tarif: new FormControl(650, Validators.required),
      telephone: new FormControl("06990953637", Validators.required)
    });
  }

  RegisterNewPresta() {
    console.log(this.myForm.value);

    
    if (this.myForm.valid) {

      
      this.PhotographeService.submitRegiste(this.myForm.value).subscribe(
        data => (this.successMessage = "Registration Success"),
        error => (this.successMessage = "Erreur ")
      );
      this.router.navigate(["/login-prestataire"]);
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  ngOnInit() {}

//   onFileseleted(event) {
// // qd fichier select => file reader
//     var reader = new FileReader();

//     reader.readAsDataURL(event.target.files[0]); // filereader lit le fichier select (asynchrone)
//     reader.onload = _event => { // écoute le chargement (front) de l'image
//       this.selectedFile = this.domSanitizer.bypassSecurityTrustUrl(reader.result); 
//     };
//   }

  isValid(controlName) {
    return (
      this.myForm.get(controlName).invalid &&
      this.myForm.get(controlName).touched
    );
  }

  

  onUpload() {
    const formData = new FormData();
    formData.append("file", this.fileData);
    this.http.post("http://localhost:3306/upload", formData).subscribe(res => {
      console.log(res);
      alert("SUCCESS !!");
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("yatatata")
    // console.warn(this.myForm.value);
  }
}
