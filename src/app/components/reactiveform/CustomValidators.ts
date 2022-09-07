import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  static Mustmatch(password: any, confimrpassword: any)
  {
    return (formGroup: FormGroup)=>{
      const passCtl = formGroup.controls[password];
      const conPassCtl = formGroup.controls[confimrpassword]

      if(confimrpassword.errors && !confimrpassword.errors['Mustmatch']){

      }

      if(passCtl.value !== conPassCtl.value)
      {
        conPassCtl.setErrors({Mustmatch : true});
      }else{
        conPassCtl.setErrors(null)
      }

    }
  }
}
