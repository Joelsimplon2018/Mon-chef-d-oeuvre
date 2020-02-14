import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographeDetailsComponent } from './photographe-details.component';

describe('PhotographeDetailsComponent', () => {
  let component: PhotographeDetailsComponent;
  let fixture: ComponentFixture<PhotographeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
