import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentSectionDetailsComponent } from './add-rent-section-details.component';

describe('AddRentSectionDetailsComponent', () => {
  let component: AddRentSectionDetailsComponent;
  let fixture: ComponentFixture<AddRentSectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentSectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentSectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
