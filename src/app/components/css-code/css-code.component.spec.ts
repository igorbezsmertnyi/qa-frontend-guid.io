import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCodeComponent } from './css-code.component';

describe('CssCodeComponent', () => {
  let component: CssCodeComponent;
  let fixture: ComponentFixture<CssCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
