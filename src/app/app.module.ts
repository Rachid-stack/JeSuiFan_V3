import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AnnonceListingComponent } from './annonce/annonce-listing/annonce-listing.component';
import { AnnonceAddComponent } from './annonce/annonce-add/annonce-add.component';
import { AnnonceDeleteComponent } from './annonce/annonce-delete/annonce-delete.component';
import { AnnonceEditComponent } from './annonce/annonce-edit/annonce-edit.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategorieListingComponent } from './administration/categorie/categorie-listing/categorie-listing.component';
import { CategorieAddComponent } from './administration/categorie/categorie-add/categorie-add.component';
import { CategorieEditComponent } from './administration/categorie/categorie-edit/categorie-edit.component';
import { CategorieDeleteComponent } from './administration/categorie/categorie-delete/categorie-delete.component';
import { SousCategorieListingComponent } from './administration/sous-categorie/sous-categorie-listing/sous-categorie-listing.component';
import { SousCategorieAddComponent } from './administration/sous-categorie/sous-categorie-add/sous-categorie-add.component';
import { SousCategorieEditComponent } from './administration/sous-categorie/sous-categorie-edit/sous-categorie-edit.component';
import { SousCategorieDeleteComponent } from './administration/sous-categorie/sous-categorie-delete/sous-categorie-delete.component';
import { VilleListingComponent } from './administration/ville/ville-listing/ville-listing.component';
import { VilleAddComponent } from './administration/ville/ville-add/ville-add.component';
import { VilleEditComponent } from './administration/ville/ville-edit/ville-edit.component';
import { VilleDeleteComponent } from './administration/ville/ville-delete/ville-delete.component';
import { UtilisateurListingComponent } from './administration/utilisateur/utilisateur-listing/utilisateur-listing.component';
import { UtilisateurDeleteComponent } from './administration/utilisateur/utilisateur-delete/utilisateur-delete.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { MesOffresComponent } from './mes-offres/mes-offres.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { OffresComponent } from './offres/offres.component';
import { AchatsComponent } from './achats/achats.component';
import { InfosComponent } from './infos/infos.component';
import { AcheterCreditsComponent } from './credits/acheter-credits/acheter-credits.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { PackComponent } from './pack/pack.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AnnonceListingComponent,
    AnnonceAddComponent,
    AnnonceDeleteComponent,
    AnnonceEditComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    CategorieListingComponent,
    CategorieAddComponent,
    CategorieEditComponent,
    CategorieDeleteComponent,
    SousCategorieListingComponent,
    SousCategorieAddComponent,
    SousCategorieEditComponent,
    SousCategorieDeleteComponent,
    VilleListingComponent,
    VilleAddComponent,
    VilleEditComponent,
    VilleDeleteComponent,
    UtilisateurListingComponent,
    UtilisateurDeleteComponent,
    HeaderComponent,
    FooterComponent,
    ConfidentialiteComponent,
    MesOffresComponent,
    SidenavComponent,
    TableauBordComponent,
    OffresComponent,
    AchatsComponent,
    InfosComponent,
    AcheterCreditsComponent,
    SuccessModalComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
