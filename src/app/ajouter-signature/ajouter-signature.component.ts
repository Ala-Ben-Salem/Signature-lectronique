import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ajouter-signature',
  templateUrl: './ajouter-signature.component.html',
  styleUrls: ['./ajouter-signature.component.css']
})
export class AjouterSignatureComponent {


    @ViewChild('signatureDiv') signatureDiv: ElementRef<HTMLDivElement> | undefined;
    imageUrl: string | null = null;
    notificationVisible: boolean = false;  // Pour contrôler la visibilité de la notification
  
  
    constructor() {
      this.imageUrl = 'https://signature-generator.com/images/email/default-img.png';
    }
  
    // Method to update the image URL (e.g., from an input field)
    updateImageUrl(event: any): void {
      this.imageUrl = event.target.value;
    }
  
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
  
    selectAndCopyDiv() {
      const divElement = this.signatureDiv?.nativeElement;
      if (divElement && document.body.contains(divElement)) {
        const range = document.createRange();
        range.selectNodeContents(divElement);
  
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
  
        document.execCommand('copy');
        //alert('Le contenu de la signature a été sélectionné et copié !');
        this.showSuccessNotification();
      } else {
        console.error('L\'élément de signature n\'est plus dans le document.');
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
