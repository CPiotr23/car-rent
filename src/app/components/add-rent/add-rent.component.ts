import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { combineLatest } from 'rxjs';
import { VechicleDto, VechicleType  } from 'src/app/models';
import { durationValidator, endDateValidator, rentDatesValidator, startDateValidator } from 'src/app/shared/validators';
import { VechicleFacade } from 'src/app/store/vechicle';

@UntilDestroy()
@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {

  public vechicles: VechicleDto[];
  public vechicleTypes: VechicleType[] = [];

  public addRentForm = new FormGroup({
    vechicleType: new FormControl(null),
    vechicleModel: new FormControl(null),
  });

  public selectedVechicleForm = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    vechicleTypeCde: new FormControl({ value: null, disabled: true }),
    vechicleTypeName: new FormControl({ value: null, disabled: true }),
    vechicleModel: new FormControl({ value: null, disabled: true }),
    vechicleMark: new FormControl({ value: null, disabled: true }),
    engineType: new FormControl({ value: null, disabled: true }),
    registrationId: new FormControl({ value: null, disabled: true }),
    startRentDate: new FormControl({ value: null, disabled: true }, [Validators.required, startDateValidator]),
    endRentDate: new FormControl({ value: null, disabled: true }, [Validators.required, endDateValidator]),
    rentDurationDays: new FormControl({ value: null, disabled: true }, [Validators.required, durationValidator]),
    dailyRentCost: new FormControl({ value: null, disabled: true }),
  }, [rentDatesValidator]);

  constructor(
    private router: Router,
    private vechicleFacade: VechicleFacade,
  ) { }

  public ngOnInit(): void {
    this.watchVechicleModel();

    combineLatest([
      this.vechicleFacade.getVechicleForm$(),
      this.vechicleFacade.getVechicleType$(),
      this.vechicleFacade.getAllVechicles$(),
    ]).pipe(untilDestroyed(this)).subscribe((data) => {
      this.vechicles = data[2];
      this.vechicleTypes = data[1];

      if(!!data[0]) {
        this.addRentForm.patchValue({
          vechicleType: data[0].vechicleTypeCde,
          vechicleModel: data[0].id,
        });

        this.selectedVechicleForm.patchValue(data[0]);
      }
    });
  }

  public getSummaryCost(): number {
    const rentDuration = this.selectedVechicleForm.get('rentDurationDays').value
    return rentDuration !== null 
      ? rentDuration * this.selectedVechicleForm.get('dailyRentCost').value
      : 0;
  }

  public redirectToList(): void {
    this.vechicleFacade.resetFormState();
    this.router.navigateByUrl("");
  }

  public redirectToNextStep(): void {
    this.vechicleFacade.saveVechicleForm(this.selectedVechicleForm.getRawValue());
    this.router.navigateByUrl("client-details");
  }

  private watchVechicleModel(): void {
    this.addRentForm.get('vechicleModel')?.valueChanges.pipe(untilDestroyed(this)).subscribe((vcModId) => {
      const selectedVechicle = this.vechicles.find((vechicle) => vechicle.id === vcModId) || null;
      if(selectedVechicle) {
        const vechicleTypeDetails = this.vechicleTypes.find((vechTpe) => vechTpe.valueCde === selectedVechicle.vechicleTypeCde);
        this.selectedVechicleForm.patchValue({ 
          ...selectedVechicle,
          vechicleTypeCde: vechicleTypeDetails?.valueCde,
          vechicleTypeName: vechicleTypeDetails?.valueName,
        });
        this.selectedVechicleForm.get('startRentDate')?.enable();
        this.selectedVechicleForm.get('endRentDate')?.enable();
        this.selectedVechicleForm.get('rentDurationDays')?.enable();
      } else {
        this.selectedVechicleForm.reset();
        this.selectedVechicleForm.get('startRentDate')?.disable();
        this.selectedVechicleForm.get('endRentDate')?.disable();
        this.selectedVechicleForm.get('rentDurationDays')?.disable();
      }
    });
  }
}
