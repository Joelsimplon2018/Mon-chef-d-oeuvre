import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JesuisPhotographeComponent } from './jesuis-photographe.component';

describe('JesuisPhotographeComponent', () => {
  let component: JesuisPhotographeComponent;
  let fixture: ComponentFixture<JesuisPhotographeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JesuisPhotographeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JesuisPhotographeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
