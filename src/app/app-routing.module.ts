import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeConnecterComponent } from './Components/User/se-connecter/se-connecter.component';
import {InscriptionComponent } from './Components/User/inscription/inscription.component';
import{JesuisPhotographeComponent} from './Components/User/Prestataire/page-profile/jesuis-photographe/jesuis-photographe.component';
import {CreationProfileComponent} from '../app/Components/User/Prestataire/page-profile/creation-profile/creation-profile.component';
import {AccueilleComponent} from './Components/accueille/accueille.component';
import {CreationProfileDetailComponent} from './Components/User/Prestataire/page-profile/creation-profile-detail/creation-profile-detail.component';
import{MotpssOublierComponent} from './Components/User/motpss-oublier/motpss-oublier.component';
import {PhotographeDetailsComponent} from '../app/Components/User/Prestataire/photographe-details/photographe-details.component';
import{DashboardComponent}from '../app/Components/User/Prestataire/dashboard/dashboard.component';
import{MissionComponent}from '../app/Components/User/Prestataire/mission/mission.component';
import{ContactComponent } from '../app/Components/contact/contact.component';
import{PostCreateComponent }from '../app/Components/Post/post-create/post-create.component';

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
  {path:'mission/:id', component: CreationProfileComponent },
  {path:'create-profile', component: CreationProfileComponent,},
 
  {path:'recuperer-mot-depasse', component: MotpssOublierComponent  },
  {path:'mot-message', component: PostCreateComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
