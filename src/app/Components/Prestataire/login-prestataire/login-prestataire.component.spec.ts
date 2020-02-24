import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrestataireComponent } from './login-prestataire.component';

describe('LoginPrestataireComponent', () => {
  let component: LoginPrestataireComponent;
  let fixture: ComponentFixture<LoginPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
