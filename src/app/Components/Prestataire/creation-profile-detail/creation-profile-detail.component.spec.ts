import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationProfileDetailComponent } from './creation-profile-detail.component';

describe('CreationProfileDetailComponent', () => {
  let component: CreationProfileDetailComponent;
  let fixture: ComponentFixture<CreationProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
