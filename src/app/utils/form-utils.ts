import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { empty } from "rxjs";

export class FormUtils {
  static dniPattern = /^(?:[MF]\d{7,}|\d{7,})$/;
  static direccionPattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9.\s]+ \d+[A-Za-z]?$/;

  static FieldIsInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  static getFieldError(form: FormGroup, fieldName: string): string {
    const field = form.get(fieldName);
    const errors = field!.errors;

    for(const key of Object.keys(errors!)){
      switch(key){
        case 'required': return 'Este campo es requerido';
        case 'dni': return 'Debe ingresar un DNI válido';
        case 'direccion': return 'Debe ingresar una dirección de domicilio';
        default: return `Error no manejado: ${key}`;
      }
    }
    return '';
  }

  static dniValidator(control: AbstractControl) {
    const value = control.value;
    if (value == null || value == "") {
      return null;
    }
    let dniUpper = value.toUpperCase();
    if (!FormUtils.dniPattern.test(dniUpper)) {
      return {dni: true};
    }
    let dniNumber = Number(value.replace(/[MF]/, ''));
    if ((dniUpper.startsWith('M') || dniUpper.startsWith('F')) && dniNumber >= 10000000){
      return {dni: true};
    }
    return null;
  }

  static direccionValidator(control: AbstractControl) {
    const value = control.value;
    if (!FormUtils.direccionPattern.test(value)) {
      return {direccion: true}
    }
    return null;
  }
}
