import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from '../app/Components/Prestataire/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AccueilleComponent } from './Components/accueille/accueille.component';
import { JesuisPhotographeComponent } from './Components/jesuis-photographe/jesuis-photographe.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { SeConnecterComponent } from './Components/se-connecter/se-connecter.component';
import { AideComponent } from './Components/aide/aide.component';
import {PhotographeService } from './services/photographe.service';
import {AuthService} from './services/auth/auth.service';
import { HttpClient } from 'selenium-webdriver/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PhotographeDetailsComponent } from '../app/Components/Prestataire/photographe-details/photographe-details.component';
import { ProfilePhotographeComponent } from '../app/Components/Prestataire/profile-photographe/profile-photographe.component';
import { MissionComponent } from '../app/Components/Prestataire/mission/mission.component';
import { CreationProfileComponent } from '../app/Components/Prestataire/page-profile/creation-profile/creation-profile.component';
import { CreationProfileDetailComponent } from '../app/Components/Prestataire/page-profile/creation-profile-detail/creation-profile-detail.component';
import { MotpssOublierComponent } from './Components/motpss-oublier/motpss-oublier.component';
import { HeaderComponent } from './Components/header/header.component';
import { AlertComponent } from '../app/Components/alert/alert.component';
import { ContactComponent } from '../app/Components/contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    FooterComponent,
    AccueilleComponent,
    JesuisPhotographeComponent,
    InscriptionComponent,
    SeConnecterComponent,
    AideComponent,
    PhotographeDetailsComponent,
    ProfilePhotographeComponent,
    MissionComponent,
    CreationProfileComponent,
    CreationProfileDetailComponent,
    MotpssOublierComponent,
    HeaderComponent,
    AlertComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule 
    
  ],
  providers: [
    AuthService,
    PhotographeService 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
