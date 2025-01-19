import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSignatureRightBarComponent } from './ajouter-signature-right-bar.component';

describe('AjouterSignatureRightBarComponent', () => {
  let component: AjouterSignatureRightBarComponent;
  let fixture: ComponentFixture<AjouterSignatureRightBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSignatureRightBarComponent]
    });
    fixture = TestBed.createComponent(AjouterSignatureRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
