import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRentDetailsComponent } from './client-rent-details.component';

describe('ClientRentDetailsComponent', () => {
  let component: ClientRentDetailsComponent;
  let fixture: ComponentFixture<ClientRentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
