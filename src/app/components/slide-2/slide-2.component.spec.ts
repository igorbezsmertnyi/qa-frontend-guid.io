import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2Component } from './slide-2.component';

describe('Slide2Component', () => {
  let component: Slide2Component;
  let fixture: ComponentFixture<Slide2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
