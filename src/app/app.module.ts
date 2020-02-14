import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from '../app/Components/User/Prestataire/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AccueilleComponent } from './Components/accueille/accueille.component';
import { JesuisPhotographeComponent } from './Components/User/Prestataire/page-profile/jesuis-photographe/jesuis-photographe.component';
import { InscriptionComponent } from './Components/User/inscription/inscription.component';
import { SeConnecterComponent } from './Components/User/se-connecter/se-connecter.component';

import {PhotographeService } from './services/photographe.service';
import {AuthService} from './services/auth/auth.service';
import{PostsService} from '../app/Components/Post/posts.service';
import { HttpClient } from 'selenium-webdriver/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PhotographeDetailsComponent } from '../app/Components/User/Prestataire/photographe-details/photographe-details.component';
import { ProfilePhotographeComponent } from '../app/Components/User/Prestataire/profile-photographe/profile-photographe.component';
import { MissionComponent } from '../app/Components/User/Prestataire/mission/mission.component';
import { CreationProfileComponent } from '../app/Components/User/Prestataire/page-profile/creation-profile/creation-profile.component';
import { CreationProfileDetailComponent } from '../app/Components/User/Prestataire/page-profile/creation-profile-detail/creation-profile-detail.component';
import { MotpssOublierComponent } from './Components/User/motpss-oublier/motpss-oublier.component';
import { HeaderComponent } from './Components/header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';

import { ContactComponent } from '../app/Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule, MatCardModule,MatButtonModule,MatToolbarModule,MatFormFieldModule, MatExpansionModule}from '@angular/material';
import { PostCreateComponent } from './Components/Post/post-create/post-create.component';
import { PostListComponent } from './Components/Post/post-list/post-list.component';
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
    JesuisPhotographeComponent,
    InscriptionComponent,
    SeConnecterComponent,
    PhotographeDetailsComponent,
    ProfilePhotographeComponent,
    MissionComponent,
    CreationProfileComponent,
    CreationProfileDetailComponent,
    MotpssOublierComponent,
    HeaderComponent,
   
    ContactComponent,
   
    PostCreateComponent,
   
    PostListComponent,
   
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
    PhotographeService,
    PostsService 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
