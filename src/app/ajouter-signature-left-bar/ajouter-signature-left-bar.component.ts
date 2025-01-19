import { Component, OnInit } from '@angular/core';
import { SignatureService } from '../service/signature.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Signature } from 'src/core/models/Signature';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-signature-left-bar',
  templateUrl: './ajouter-signature-left-bar.component.html',
  styleUrls: ['./ajouter-signature-left-bar.component.css']
})
export class AjouterSignatureLeftBarComponent{
  // signatureForm!: FormGroup;
  data: any;

  constructor(private ser:SignatureService, private route:Router){
    this.ser.data$.subscribe((data) => {
      this.data = data;
    });
  }
  


  updateData() {
    this.ser.updateData(this.data); // Mise à jour via le service.
  }


  activeSection: string = 'general'; // Définit l'onglet par défaut

  setActiveSection(section: string): void {
    this.activeSection = section;
  }



  add() {
    this.ser.addsignature(this.data).subscribe(() => {
      console.log("added!!!!!!!!!!!!!!!!!!!!!!!");
      this.route.navigate(['/listeSignature'])
      // window.location.reload()
    });
  }
  

}






  // ngOnInit(): void {
  //   this.signatureForm = new FormGroup({
  //     nom:new FormControl(this.data.nom,[Validators.required]),
  //     fonction:new FormControl(this.data.fonction,[Validators.required]),
  //     department:new FormControl(this.data.department,[Validators.required]),
  //     entreprise:new FormControl(this.data.entreprise,[Validators.required]),
  //     telephone:new FormControl(this.data.telephone,[Validators.required]),
  //     mobile:new FormControl(this.data.mobile,[Validators.required]),
  //     siteweb:new FormControl(this.data.siteweb,[Validators.required]),
  //     email:new FormControl(this.data.email,[Validators.required, Validators.email]),
  //     addresse:new FormControl(this.data.addresse,[Validators.required]),
  //     photo:new FormControl(this.data.photo,[Validators.required]),
  //     facebook:new FormControl(this.data.facebook,[Validators.required]),
  //     twitter:new FormControl(this.data.twitter,[Validators.required]),
  //     youtube:new FormControl(this.data.youtube,[Validators.required]),
  //     linkedin:new FormControl(this.data.linkedin,[Validators.required]),
  //     instagram:new FormControl(this.data.instagram,[Validators.required]),
  //     themecolor:new FormControl(this.data.themecolor,[Validators.required]),
  //     themecolortext:new FormControl(this.data.themecolortext,[Validators.required]),
  //     themecolorlien:new FormControl(this.data.themecolorlien,[Validators.required]),
  //     police:new FormControl(this.data.police,[Validators.required]),
  //     taillepolice:new FormControl(this.data.taillepolice,[Validators.required]),
  //     FacebookisChecked:new FormControl(this.data.FacebookisChecked),
  //     TwitterisChecked:new FormControl(this.data.TwitterisChecked),
  //     YoutubeisChecked:new FormControl(this.data.YoutubeisChecked),
  //     LinkedinisChecked:new FormControl(this.data.LinkedinisChecked),
  //     InstagramisChecked:new FormControl(this.data.InstagramisChecked),


  //   })

  // }


  // get nom() {
  //   return this.signatureForm.get('nom');
  // }
  
  // get fonction() {
  //   return this.signatureForm.get('fonction');
  // }
  
  // get department() {
  //   return this.signatureForm.get('department');
  // }
  
  // get entreprise() {
  //   return this.signatureForm.get('entreprise');
  // }
  
  // get telephone() {
  //   return this.signatureForm.get('telephone');
  // }
  
  // get mobile() {
  //   return this.signatureForm.get('mobile');
  // }
  
  // get siteweb() {
  //   return this.signatureForm.get('siteweb');
  // }
  
  // get email() {
  //   return this.signatureForm.get('email');
  // }
  
  // get addresse() {
  //   return this.signatureForm.get('addresse');
  // }
  
  // get photo() {
  //   return this.signatureForm.get('photo');
  // }
  
  // get facebook() {
  //   return this.signatureForm.get('facebook');
  // }
  
  // get twitter() {
  //   return this.signatureForm.get('twitter');
  // }
  
  // get youtube() {
  //   return this.signatureForm.get('youtube');
  // }
  
  // get linkedin() {
  //   return this.signatureForm.get('linkedin');
  // }
  
  // get instagram() {
  //   return this.signatureForm.get('instagram');
  // }
  
  // get themecolor() {
  //   return this.signatureForm.get('themecolor');
  // }
  
  // get themecolortext() {
  //   return this.signatureForm.get('themecolortext');
  // }
  
  // get themecolorlien() {
  //   return this.signatureForm.get('themecolorlien');
  // }
  
  // get police() {
  //   return this.signatureForm.get('police');
  // }
  
  // get taillepolice() {
  //   return this.signatureForm.get('taillepolice');
  // }
  
  // get FacebookisChecked() {
  //   return this.signatureForm.get('FacebookisChecked');
  // }
  
  // get TwitterisChecked() {
  //   return this.signatureForm.get('TwitterisChecked');
  // }
  
  // get YoutubeisChecked() {
  //   return this.signatureForm.get('YoutubeisChecked');
  // }
  
  // get LinkedinisChecked() {
  //   return this.signatureForm.get('LinkedinisChecked');
  // }
  
  // get InstagramisChecked() {
  //   return this.signatureForm.get('InstagramisChecked');
  // }