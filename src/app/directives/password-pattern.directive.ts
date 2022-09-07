import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS,ValidationErrors, Validator } from '@angular/forms';
import Validation from '../util/validation';

@Directive({
  selector: '[appPasswordPattern]',
  providers:[{provide: NG_VALIDATORS, useExisting:PasswordPatternDirective,multi:true }]
})
export class PasswordPatternDirective implements Validator{
@Input('appMatchPassword') matchPassword: string[] = [];
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors | null {
      return Validation.match(this.matchPassword[0], this.matchPassword[1])(formGroup)
  }

}
