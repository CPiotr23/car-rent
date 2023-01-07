import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentSectionDateComponent } from './add-rent-section-date.component';

describe('AddRentSectionDateComponent', () => {
  let component: AddRentSectionDateComponent;
  let fixture: ComponentFixture<AddRentSectionDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentSectionDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentSectionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
