import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Signature } from 'src/core/models/Signature';


@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  constructor(private http:HttpClient) { }



  private dataSubject = new BehaviorSubject<Signature>({
  
    nom: 'Foulen Ben Foulen',
    fonction: 'Directeur',
    department: 'Informatique',
    entreprise: 'DevCore',
    telephone: 28123456,
    mobile: 727777777,
    siteweb: 'www.foulen.com',
    email: 'Foulen@nomDomain.com',
    addresse: 'Tunis, Nabeul, 8060',
    photo: 'https://github.com/Ala-Ben-Salem/app_signature/blob/main/images/default-img.png?raw=true',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    youtube: 'https://www.youtube.com',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    themecolor: '#2c29ff',
    themecolortext: '#1c1c1c',
    themecolorlien: '#06f432',
    police: 'Arial',
    taillepolice: 100,

    FacebookisChecked:  true,
    TwitterisChecked:   false,
    YoutubeisChecked:   true,
    LinkedinisChecked:  true,
    InstagramisChecked: true,
  });


  // Observable pour écouter les changements
  data$ = this.dataSubject.asObservable();


  // Méthode pour mettre à jour les données
  updateData(newData: any): void {
    this.dataSubject.next(newData);
  }




  addsignature(sig:Signature):Observable<Signature[]>{
    return this.http.post<Signature[]>("http://localhost:3000/signatures",sig)
  }


  getsignature():Observable<Signature[]>{
    return this.http.get<Signature[]>("http://localhost:3000/signatures")
  }

  //delete

}
