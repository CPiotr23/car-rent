import { AbstractControl, ValidatorFn } from "@angular/forms";

export const phoneValidator: ValidatorFn = (control: AbstractControl) => {
    if(!control.value) return null;

    const format = RegExp(`[5-9]{1}[0-9]{8}$`).test(control.value);

    return !format ? { invalidFormat: true } : null;
  }