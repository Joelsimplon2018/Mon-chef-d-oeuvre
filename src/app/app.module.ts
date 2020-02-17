import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from '../app/Components/Prestataire/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AccueilleComponent } from './Components/accueille/accueille.component';

import { InscriptionComponent } from './Components/inscription/inscription.component';
import { SeConnecterComponent } from './Components/se-connecter/se-connecter.component';

import {PhotographeService } from './services/photographe.service';
import {AuthService} from './services/auth/auth.service';

import { HttpClient } from 'selenium-webdriver/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PhotographeDetailsComponent } from '../app/Components/Prestataire/photographe-details/photographe-details.component';

import { MissionComponent } from '../app/Components/mission/mission.component';

import { CreationProfileDetailComponent } from '../app/Components/Prestataire/creation-profile-detail/creation-profile-detail.component';

import { HeaderComponent } from './Components/header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';

import { ContactComponent } from '../app/Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{CreationProfileComponent}from '../app/Components/Prestataire/creation-profile/creation-profile.component'
import{MatInputModule, MatCardModule,MatButtonModule,MatToolbarModule,MatFormFieldModule, MatExpansionModule}from '@angular/material';


import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import{MatProgressSpinnerModule}from '@angular/material';








@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    FooterComponent,
    AccueilleComponent,
   
    InscriptionComponent,
    SeConnecterComponent,
    PhotographeDetailsComponent,
 
    CreationProfileComponent,
    MissionComponent,
   
    CreationProfileComponent,
    CreationProfileDetailComponent,
   
    HeaderComponent,
   
    ContactComponent,
   
   
    MainNavComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
   
    MatListModule 
    
  ],
  providers: [
    AuthService,
    PhotographeService
 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
