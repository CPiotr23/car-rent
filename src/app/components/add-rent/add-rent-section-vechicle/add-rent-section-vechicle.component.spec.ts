import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentSectionVechicleComponent } from './add-rent-section-vechicle.component';

describe('AddRentSectionVechicleComponent', () => {
  let component: AddRentSectionVechicleComponent;
  let fixture: ComponentFixture<AddRentSectionVechicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentSectionVechicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentSectionVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
