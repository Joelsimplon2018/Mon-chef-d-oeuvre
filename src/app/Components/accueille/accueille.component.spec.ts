import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilleComponent } from './accueille.component';

describe('AccueilleComponent', () => {
  let component: AccueilleComponent;
  let fixture: ComponentFixture<AccueilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
