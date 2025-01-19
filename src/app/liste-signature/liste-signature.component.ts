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


import { Component, OnInit } from '@angular/core';
import { Signature } from 'src/core/models/Signature';
import { SignatureService } from '../service/signature.service';

@Component({
  selector: 'app-liste-signature',
  templateUrl: './liste-signature.component.html',
  styleUrls: ['./liste-signature.component.css']
})
export class ListeSignatureComponent  implements OnInit{
  constructor(private ser:SignatureService){
  }

  listservicesignature:Signature[]=[]

  ngOnInit(): void {
    this.ser.getsignature().subscribe((data)=>{
      this.listservicesignature=data;
      console.log("ma new list: "+ JSON.stringify(this.listservicesignature) )
    })
    
  }

  


}