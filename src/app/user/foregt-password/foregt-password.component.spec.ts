import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegtPasswordComponent } from './foregt-password.component';

describe('ForegtPasswordComponent', () => {
  let component: ForegtPasswordComponent;
  let fixture: ComponentFixture<ForegtPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForegtPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForegtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
