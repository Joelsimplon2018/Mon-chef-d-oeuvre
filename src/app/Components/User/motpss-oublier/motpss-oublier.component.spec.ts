import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotpssOublierComponent } from './motpss-oublier.component';

describe('MotpssOublierComponent', () => {
  let component: MotpssOublierComponent;
  let fixture: ComponentFixture<MotpssOublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotpssOublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotpssOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
