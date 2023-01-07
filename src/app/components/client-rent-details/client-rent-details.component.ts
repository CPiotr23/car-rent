import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { RentDetailsDto, VechicleDto } from 'src/app/models';
import { emailValidator, phoneValidator } from 'src/app/shared/validators';
import { RentFacade } from 'src/app/store/rent';
import { VechicleFacade } from 'src/app/store/vechicle';

@Component({
  selector: 'app-client-rent-details',
  templateUrl: './client-rent-details.component.html',
  styleUrls: ['./client-rent-details.component.css']
})
export class ClientRentDetailsComponent implements OnInit {
  public phoneInputErrorsVisibility = false;
  public emailInputErrorsVisibility = false;

  constructor(
    private router: Router,
    private vechicleFacade: VechicleFacade,
    private rentFacade: RentFacade,
  ) { }

  public clientForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required, phoneValidator]),
    email: new FormControl(null, [emailValidator]),
  });

  public ngOnInit(): void {}

  public cancelProcess(): void {
    this.vechicleFacade.resetFormState();
    this.router.navigateByUrl("");
  }

  public redirectToPreviousView(): void {
    this.router.navigateByUrl("/add-rent");
  }

  public confirm(): void {
    this.vechicleFacade.getVechicleForm$().pipe(take(1)).subscribe((vechicleForm) => {
      this.rentFacade.saveRent$(
        this.prepareDataToSave(vechicleForm)
      ).pipe(take(1)).subscribe(() => {
        this.vechicleFacade.resetFormState();
        this.router.navigateByUrl("");
      });
    });
    
  }

  public showPhoneInputErrors(): void {
    this.phoneInputErrorsVisibility = !!this.clientForm.get('phoneNumber').touched;
  }

  public showEmailInputErrors(): void {
    this.emailInputErrorsVisibility = !!this.clientForm.get('email').touched;
  }

  public prepareDataToSave(vechicleForm: VechicleDto): RentDetailsDto {
    const clientDetails = this.clientForm.getRawValue();
    return {
      firstName: clientDetails.firstName,
      lastName: clientDetails.lastName,
      vechicleType: vechicleForm.vechicleTypeCde,
      vechicleMark: vechicleForm.vechicleMark,
      registrationNumber: vechicleForm.registrationId,
      rentDate: vechicleForm.startRentDate,
      returnDate: vechicleForm.endRentDate,
    };
  }
}
