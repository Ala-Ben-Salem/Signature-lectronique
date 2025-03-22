import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  reloadPage(event: Event) {
    event.preventDefault(); // Évite la navigation immédiate
    setTimeout(() => {
      window.location.reload();
    }, 0); // Recharge la page après une courte pause
  }
  
}
