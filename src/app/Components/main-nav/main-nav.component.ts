import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import{AuthService}from '../../services/auth/auth.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver:
     BreakpointObserver, 
     private _AuthService:AuthService, private _router: Router, private http: HttpClient) {

     }


     ngOnInit() {

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
  }

     logoutUser(){
       localStorage.removeItem('token')
       this._router.navigate(['/accueille'])
     }

}
