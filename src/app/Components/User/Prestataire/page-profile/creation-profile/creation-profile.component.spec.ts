import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationProfileComponent } from './creation-profile.component';

describe('CreationProfileComponent', () => {
  let component: CreationProfileComponent;
  let fixture: ComponentFixture<CreationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
