import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoginAppComponent } from './angular-login-app.component';

describe('AngularLoginAppComponent', () => {
  let component: AngularLoginAppComponent;
  let fixture: ComponentFixture<AngularLoginAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLoginAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLoginAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
