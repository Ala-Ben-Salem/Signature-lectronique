import { Component, OnInit } from '@angular/core';
import { SignatureService } from '../service/signature.service';

@Component({
  selector: 'app-ajouter-signature-right-bar',
  templateUrl: './ajouter-signature-right-bar.component.html',
  styleUrls: ['./ajouter-signature-right-bar.component.css']
})
export class AjouterSignatureRightBarComponent implements OnInit{

  data: any;
  constructor(private ser:SignatureService){}

  ngOnInit(): void {
    this.ser.data$.subscribe((updatedData)=>{
      this.data=updatedData;
    })
  }

  

}
