// import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-liste-signature',
//   templateUrl: './liste-signature.component.html',
//   styleUrls: ['./liste-signature.component.css']
// })
// export class ListeSignatureComponent {

//   @ViewChild('signatureDiv') signatureDiv: ElementRef<HTMLDivElement> | undefined;
//   imageSrc: string | null = null;

//   onFileSelected(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.imageSrc = e.target.result;
//         console.log(this.imageSrc)

//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   copyHTMLSignature(): void {
//     if (this.signatureDiv && this.signatureDiv.nativeElement) {
//       const htmlContent = this.signatureDiv.nativeElement.innerHTML;
//       navigator.clipboard.writeText(htmlContent).then(() => {
//         alert('HTML de la signature copié avec succès !');
//       }).catch(err => {
//         console.error('Erreur lors de la copie du HTML:', err);
//       });
//     }
//   }




//   selectAndCopyDiv() {
//     const divElement = this.signatureDiv?.nativeElement;
//     if (divElement && document.body.contains(divElement)) { 
//       const range = document.createRange();
//       range.selectNodeContents(divElement);

//       const selection = window.getSelection();
//       selection?.removeAllRanges();
//       selection?.addRange(range);

//       document.execCommand('copy');
//     } else {
//       console.error('L\'élément de signature n\'est plus dans le document.');
//     }
//   }
  
// }


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Signature } from 'src/core/models/Signature';
import { SignatureService } from '../service/signature.service';

@Component({
  selector: 'app-liste-signature',
  templateUrl: './liste-signature.component.html',
  styleUrls: ['./liste-signature.component.css']
})
export class ListeSignatureComponent  implements OnInit{
  storedIndex: number =0;
  constructor(private ser:SignatureService){
  }

  @ViewChild('signatureDiv') signatureDiv: ElementRef<HTMLDivElement> | undefined;
  notificationVisible: boolean = false;  // Pour contrôler la visibilité de la notification

  listservicesignature:Signature[]=[]

  ngOnInit(): void {
    this.ser.getsignature().subscribe((data)=>{
      this.listservicesignature=data;
      console.log("ma new list: "+ JSON.stringify(this.listservicesignature) )
    })
    
  }

  


  // selectAndCopyDiv(): void {
  //   const divElement = this.signatureDiv?.nativeElement;
  //   if (divElement && document.body.contains(divElement)) {
  //     const range = document.createRange();
  //     range.selectNodeContents(divElement);

  //     const selection = window.getSelection();
  //     selection?.removeAllRanges();
  //     selection?.addRange(range);

  //     document.execCommand('copy');
  //     //alert('Le contenu de la signature a été sélectionné et copié !');
  //     this.showSuccessNotification();
  //   } else {
  //     console.error('L\'élément de signature n\'est plus dans le document.');
  //   }
  // }


  selectAndCopyDiv(index: number): void {
    console.log(typeof index);
    this.storedIndex = index;
    const signatureDivs = document.querySelectorAll('[data-index]');
    const selectedDiv = Array.from(signatureDivs).find(
      (div) => div.getAttribute('data-index') === index.toString()
    );
  
    if (selectedDiv) {
      const range = document.createRange();
      range.selectNodeContents(selectedDiv);  // Sélectionne le contenu de l'élément
      const selection = window.getSelection();
  
      if (selection) {
        selection.removeAllRanges();   // Supprime les sélections existantes
        selection.addRange(range);     // Définit une nouvelle sélection
        try {
          const successful = document.execCommand('copy');  // Copie le contenu sélectionné
          if (successful) {
            // alert('Signature copiée avec succès !');
            this.showSuccessNotification();
          } else {
            alert('Échec de la copie.');
          }
        } catch (err) {
          console.error('Erreur lors de la copie :', err);
        }
        selection.removeAllRanges();
      }
    }
  }
  


   // Afficher la notification de succès et la cacher après 3 secondes
   showSuccessNotification() {
    this.notificationVisible = true;
    setTimeout(() => {
      this.notificationVisible = false;
    }, 3000);  // Délai de 3 secondes avant de masquer la notification
  }



}