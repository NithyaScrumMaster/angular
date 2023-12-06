import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfirstpageComponent } from './registrationfirstpage.component';

describe('RegistrationfirstpageComponent', () => {
  let component: RegistrationfirstpageComponent;
  let fixture: ComponentFixture<RegistrationfirstpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationfirstpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
