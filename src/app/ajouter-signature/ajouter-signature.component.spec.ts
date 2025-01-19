import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSignatureComponent } from './ajouter-signature.component';

describe('AjouterSignatureComponent', () => {
  let component: AjouterSignatureComponent;
  let fixture: ComponentFixture<AjouterSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSignatureComponent]
    });
    fixture = TestBed.createComponent(AjouterSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
