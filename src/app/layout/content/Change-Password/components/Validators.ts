import { AbstractControl } from "@angular/forms";

export class ChangePasswordValidator {

    static passwordShouldMatch(control: AbstractControl) {
        debugger;
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordMatch: true }
        return null;

    }

}