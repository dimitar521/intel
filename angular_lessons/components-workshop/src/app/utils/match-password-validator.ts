import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn {
    return(control) => {
      const paswordFormControl = control.get(passwordControlName);
        
       const rePasswordFormControl = control.get(rePasswordControlName);

      const passwordsAreMatching = 
      paswordFormControl?.value === rePasswordFormControl?.value ;
        return passwordsAreMatching ? null : {matchPasswordsValidator: true};
    };
}