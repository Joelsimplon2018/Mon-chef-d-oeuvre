import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creation-profile',
  templateUrl: './creation-profile.component.html',
  styleUrls: ['./creation-profile.component.css']
})
export class CreationProfileComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  GotoCreate_detail(){
    this.router.navigate(['/profile-detail'])
  }


  GotologinPrestataire(){
    this.router.navigate(['/login-prestataire'])
  }

}
