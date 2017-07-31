import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide11Component } from './slide-11.component';

describe('Slide11Component', () => {
  let component: Slide11Component;
  let fixture: ComponentFixture<Slide11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
