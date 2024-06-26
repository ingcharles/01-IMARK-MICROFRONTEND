import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  public isFieldInvalid(fieldName: string, form: FormGroup): boolean {
    const field = form.get(fieldName)!;
    return field.invalid && (field.dirty || field.touched);
  }

  getFieldError(fieldName: string, form: FormGroup): string {
    const field = form.get(fieldName)!;
    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }
}
