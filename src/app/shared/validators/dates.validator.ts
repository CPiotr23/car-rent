import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms"
import { DateTime } from "luxon";

export const rentDatesValidator: ValidatorFn = (fg: FormGroup) => {
   const startDate = fg.get('startRentDate').value;
   const endDate = fg.get('endRentDate').value;

   if(!startDate && !endDate) return null;

   return DateTime.fromISO(startDate) > DateTime.fromISO(endDate) ? { 'endGreaterThanStart': true } : null;
 }

 export const startDateValidator: ValidatorFn = (control: AbstractControl) => {
    if(!control.value) return null;

    const startDate = DateTime.fromISO(control.value);
    return startDate < DateTime.local().startOf('day') ? { 'startDateLowerThanCurrent': true } : null;
 }

 export const endDateValidator: ValidatorFn = (control: AbstractControl) => {
    if(!control.value) return null;

    const endDate = DateTime.fromISO(control.value);
    return endDate < DateTime.local().startOf('day') ? { 'endDateLowerThanCurrent': true } : null;
 }

 export const durationValidator: ValidatorFn = (control: AbstractControl) => {
   if(control.value === null) return null;

   return control.value < 1 ? { 'incorrectDuration': true } : null;
 }