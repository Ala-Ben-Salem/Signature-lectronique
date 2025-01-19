import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeSignatureComponent } from './liste-signature/liste-signature.component';
import { AjouterSignatureComponent } from './ajouter-signature/ajouter-signature.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},//path initial par defaut
  {path:'home', component:HomeComponent} ,
  {path:'listeSignature', component:ListeSignatureComponent} ,
  {path:'ajouterSignature', component:AjouterSignatureComponent} ,




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
