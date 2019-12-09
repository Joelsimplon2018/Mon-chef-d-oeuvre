import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotographeComponent } from './profile-photographe.component';

describe('ProfilePhotographeComponent', () => {
  let component: ProfilePhotographeComponent;
  let fixture: ComponentFixture<ProfilePhotographeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotographeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotographeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
