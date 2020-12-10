import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rangeValidator(c: AbstractControl): {[key: string]: boolean} | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { range: true };
  }
  return null;
}
