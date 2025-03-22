import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ajouter-signature',
  templateUrl: './ajouter-signature.component.html',
  styleUrls: ['./ajouter-signature.component.css']
})
export class AjouterSignatureComponent {


    @ViewChild('signatureDiv') signatureDiv: ElementRef<HTMLDivElement> | undefined;
    notificationVisible: boolean = false;  // Pour contrôler la visibilité de la notification
  

  
    
  
    copyHTMLSignature(): void {
      if (this.signatureDiv && this.signatureDiv.nativeElement) {
        const htmlContent = this.signatureDiv.nativeElement.innerHTML;
        navigator.clipboard.writeText(htmlContent).then(() => {
          alert('HTML de la signature copié avec succès !');
        }).catch(err => {
          console.error('Erreur lors de la copie du HTML:', err);
        });
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
