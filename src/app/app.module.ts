import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListeSignatureComponent } from './liste-signature/liste-signature.component';
import { AjouterSignatureComponent } from './ajouter-signature/ajouter-signature.component';
import { AjouterSignatureLeftBarComponent } from './ajouter-signature-left-bar/ajouter-signature-left-bar.component';
import { AjouterSignatureRightBarComponent } from './ajouter-signature-right-bar/ajouter-signature-right-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeSignatureComponent,
    AjouterSignatureComponent,
    AjouterSignatureLeftBarComponent,
    AjouterSignatureRightBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
