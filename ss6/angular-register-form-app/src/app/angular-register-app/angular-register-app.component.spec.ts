import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRegisterAppComponent } from './angular-register-app.component';

describe('AngularRegisterAppComponent', () => {
  let component: AngularRegisterAppComponent;
  let fixture: ComponentFixture<AngularRegisterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRegisterAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRegisterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
