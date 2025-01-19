import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSignatureLeftBarComponent } from './ajouter-signature-left-bar.component';

describe('AjouterSignatureLeftBarComponent', () => {
  let component: AjouterSignatureLeftBarComponent;
  let fixture: ComponentFixture<AjouterSignatureLeftBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSignatureLeftBarComponent]
    });
    fixture = TestBed.createComponent(AjouterSignatureLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
