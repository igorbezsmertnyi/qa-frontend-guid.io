import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide9Component } from './slide-9.component';

describe('Slide9Component', () => {
  let component: Slide9Component;
  let fixture: ComponentFixture<Slide9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
