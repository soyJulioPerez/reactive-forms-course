import { AbstractControl, ValidatorFn } from '@angular/forms';

export function compareValidator(fieldName1: string, fieldName2: string): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    const control1 = c.get(fieldName1);
    const control2 = c.get(fieldName2);
    if (control1.pristine || control2.pristine) {
      return null;
    }
    if (control1.value === control2.value) {
      return null;
    }
    return { compare: true };
  };
}
