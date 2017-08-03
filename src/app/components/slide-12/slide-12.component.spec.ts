import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide12Component } from './slide-12.component';

describe('Slide12Component', () => {
  let component: Slide12Component;
  let fixture: ComponentFixture<Slide12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
