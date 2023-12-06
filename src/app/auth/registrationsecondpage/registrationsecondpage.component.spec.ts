import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsecondpageComponent } from './registrationsecondpage.component';

describe('RegistrationsecondpageComponent', () => {
  let component: RegistrationsecondpageComponent;
  let fixture: ComponentFixture<RegistrationsecondpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationsecondpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationsecondpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
