import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeConnecterComponent } from './Components/se-connecter/se-connecter.component';
import {InscriptionComponent } from './Components/inscription/inscription.component';

import {CreationProfileComponent} from '../app/Components/Prestataire/creation-profile/creation-profile.component';
import {AccueilleComponent} from './Components/accueille/accueille.component';
import {CreationProfileDetailComponent} from './Components/Prestataire/creation-profile-detail/creation-profile-detail.component';

import {PhotographeDetailsComponent} from '../app/Components/Prestataire/photographe-details/photographe-details.component';
import{DashboardComponent}from '../app/Components/Prestataire/dashboard/dashboard.component';
import{MissionComponent}from '../app/Components/mission/mission.component';
import{ContactComponent } from '../app/Components/contact/contact.component';
import {LoginPrestataireComponent} from '../app/Components/Prestataire/login-prestataire/login-prestataire.component';
import{EditProfilComponent}from '../app/Components/Prestataire/edit-profil/edit-profil.component';




const routes: Routes = [
  {path:'', component: AccueilleComponent  },
  {path:'accueille', component: AccueilleComponent  },
  {path:'contact', component: ContactComponent   },
  {path:'inscription', component: InscriptionComponent  },
  {path:'connexion',
  component: SeConnecterComponent },
  {path:'profile-detail', component: CreationProfileDetailComponent },
  {path:'photographe-detail/:id', component: PhotographeDetailsComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'mission', component: MissionComponent },
  {path:'mission/:id', component: MissionComponent },
  {path:'create-profile', component: CreationProfileComponent},
  {path:'login-prestataire', component: LoginPrestataireComponent,},
  {path:'edit-profil', component: EditProfilComponent},

 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
