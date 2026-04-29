import { FormGroup } from "@angular/forms";

export class FormUtils {
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
        default: return `Error no manejado: ${key}`;
      }
    }
    return '';
  }
}
