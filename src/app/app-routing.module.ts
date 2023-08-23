import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { OffresComponent } from './offres/offres.component';
import { AnnonceListingComponent } from './annonce/annonce-listing/annonce-listing.component';
import { AchatsComponent } from './achats/achats.component';
import { AcheterCreditsComponent } from './credits/acheter-credits/acheter-credits.component';
import { InfosComponent } from './infos/infos.component';
const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"acheter-credit",component:AcheterCreditsComponent},
  {path:"offres", component:OffresComponent},
  {path:"achats", component:AchatsComponent},
  {path:"infos", component:InfosComponent},
  {path:"tableau-bord", component:TableauBordComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
