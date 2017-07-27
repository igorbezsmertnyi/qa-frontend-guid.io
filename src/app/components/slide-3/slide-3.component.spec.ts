import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide3Component } from './slide-3.component';

describe('Slide3Component', () => {
  let component: Slide3Component;
  let fixture: ComponentFixture<Slide3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
