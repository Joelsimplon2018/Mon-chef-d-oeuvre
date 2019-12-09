import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {SeConnecterComponent } from './Components/se-connecter/se-connecter.component';
import {InscriptionComponent } from './Components/inscription/inscription.component';
import{JesuisPhotographeComponent} from './Components/jesuis-photographe/jesuis-photographe.component';
import {AideComponent }from './Components/aide/aide.component';
import {CreationProfileComponent} from '../app/Components/Prestataire/page-profile/creation-profile/creation-profile.component';

import {AccueilleComponent} from './Components/accueille/accueille.component';
import {CreationProfileDetailComponent} from './Components/Prestataire/page-profile/creation-profile-detail/creation-profile-detail.component';
import{MotpssOublierComponent} from './Components/motpss-oublier/motpss-oublier.component';
import {PhotographeDetailsComponent} from '../app/Components/Prestataire/photographe-details/photographe-details.component';
import{DashboardComponent}from '../app/Components/Prestataire/dashboard/dashboard.component';
import{MissionComponent}from '../app/Components/Prestataire/mission/mission.component';
import{ContactComponent } from '../app/Components/contact/contact.component';

const routes: Routes = [
  {path:'', component: AccueilleComponent  },
  {path:'accueille', component: AccueilleComponent  },
  {path:'aide', component: AideComponent  },
  {path:'contact', component: ContactComponent   },
  {path:'inscription', component: InscriptionComponent  },
  {path:'connexion',
  component: SeConnecterComponent },
  {path:'profile-detail', component: CreationProfileDetailComponent },
  {path:'photographe-detail/:id', component: PhotographeDetailsComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'mission', component: MissionComponent },
  {path:'mission/:id', component: CreationProfileComponent },
  {path:'create-profile', component: CreationProfileComponent,},
 
  {path:'recuperer-mot-depasse', component: MotpssOublierComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
