import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionEComponent } from './auth/connexion-e/connexion-e.component';
import { InscriptionEComponent } from './auth/inscription-e/inscription-e.component';
import { InscriptionAComponent } from './auth/inscription-a/inscription-a.component';
import { ConnexionAComponent } from './auth/connexion-a/connexion-a.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AffichageService } from './services/affichage.service';
import { EtudiantMService } from './services/etudiant-m.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CertificatComponent } from './certificat/certificat.component';
import { PermissionComponent } from './permission/permission.component';
import { DemandeComponent } from './demande/demande.component';
import { DemandeService } from './services/demande.service';
import { DemandeViewComponent } from './demande-view/demande-view.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilAdminViewComponent } from './acceuil-admin-view/acceuil-admin-view.component';
import { DemandeInscComponent } from './demande-insc/demande-insc.component';
import { UsersComponent } from './users/users.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ViewEtudiantComponent } from './view-etudiant/view-etudiant.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { AffichageViewComponent } from './affichage-view/affichage-view.component';
import { AffichageInsertComponent } from './affichage-insert/affichage-insert.component';
import { ChoiceConnectionComponent } from './choice-connection/choice-connection.component';
import { PswRecupComponent } from './psw-recup/psw-recup.component';
import { InfoPswComponent } from './info-psw/info-psw.component';
import { AnswerViewComponent } from './answer-view/answer-view.component';
import { CheckAnswerFormComponent } from './check-answer-form/check-answer-form.component';
import { DemandeAbsReponseComponent } from './demande-abs-reponse/demande-abs-reponse.component';
import { DemandeAbsReponseFormComponent } from './demande-abs-reponse-form/demande-abs-reponse-form.component';
import { ModifFicheStudentComponent } from './modif-fiche-student/modif-fiche-student.component';

const appRoutes: Routes = [
  { path: 'acceuil', canActivate: [AuthGuardService], component: AcceuilComponent },
  { path: 'affichage-view',canActivate: [AuthGuardService],component: AffichageViewComponent },
  { path: 'auth/connexionA', component: ConnexionAComponent },
  { path: 'auth/connexionE', component: ConnexionEComponent },
  { path: 'auth/inscriptionA', component: InscriptionAComponent },
  { path: 'auth/inscriptionE', component: InscriptionEComponent },
  { path: 'permission', canActivate: [AuthGuardService], component: PermissionComponent },
  { path: 'demande', canActivate: [AuthGuardService], component: DemandeComponent },
  { path: 'demande-inscription', component: DemandeInscComponent },
  { path: 'demande-view', component: DemandeViewComponent },
  { path: 'accueil-admin-view', canActivate: [AuthGuardService], component: AcceuilAdminViewComponent },
  { path: 'accueil-admin', canActivate: [AuthGuardService], component: AcceuilAdminComponent },
  { path: 'list-etudiant', canActivate: [AuthGuardService], component: ListEtudiantComponent },
  { path: 'list-etudiant/:id', canActivate: [AuthGuardService], component: CertificatComponent }, 
  { path: 'single-etudiant', canActivate: [AuthGuardService], component: SingleStudentComponent },
  { path: 'psw-recup', component: PswRecupComponent },
  { path: 'infos-psw', component: InfoPswComponent },
  { path: 'affichage-insert', canActivate: [AuthGuardService], component: AffichageInsertComponent },
  { path: 'choice-connection', component: ChoiceConnectionComponent },
  { path: 'check-answer', component: CheckAnswerFormComponent },
  { path: 'answer-view', component: AnswerViewComponent },
  { path: 'abs-reponse',canActivate: [AuthGuardService], component: DemandeAbsReponseComponent },
  { path: 'abs-reponse-form',component: DemandeAbsReponseFormComponent },
  {path: 'modif-student',canActivate: [AuthGuardService],component:ModifFicheStudentComponent},
  { path: '', pathMatch: 'full', redirectTo: 'affichage' },
  { path: '**', redirectTo: 'affichage' }

]

@NgModule({
  declarations: [
    AppComponent,
    ConnexionEComponent,
    InscriptionEComponent,
    InscriptionAComponent,
    ConnexionAComponent,
    HeaderComponent,
    AffichageComponent,
    AcceuilComponent,
    CertificatComponent,
    PermissionComponent,
    DemandeComponent,
    DemandeViewComponent,
    AcceuilAdminComponent,
    AcceuilAdminViewComponent,
    DemandeInscComponent,
    UsersComponent,
    ListEtudiantComponent,
    ViewEtudiantComponent,
    SingleStudentComponent,
    AffichageViewComponent,
    AffichageInsertComponent,
    ChoiceConnectionComponent,
    PswRecupComponent,
    InfoPswComponent,
    AnswerViewComponent,
    CheckAnswerFormComponent,
    DemandeAbsReponseComponent,
    DemandeAbsReponseFormComponent,
    ModifFicheStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AuthService,
    AuthGuardService,
    AffichageService,
    EtudiantMService,
    DemandeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
