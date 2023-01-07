import { AbstractControl, ValidatorFn } from "@angular/forms";

export const emailValidator: ValidatorFn = (control: AbstractControl) => {
    if(!control.value) return null;

    const format = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$').test(control.value);

    return !format ? { invalidFormat: true } : null;
}