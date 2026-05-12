import { AbstractControl } from "@angular/forms";

export class ChangePasswordValidator {

    static passwordShouldMatch(control: AbstractControl) {
        debugger;
        let password = control.get('password');
        let cnfPassword = control.get('cnfPassword');
        if (password.value !== cnfPassword.value)
            return { passwordMatch: true }
        return null;

    }

}