import { Component, Injector, OnInit, Input,  ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';


import 'datatables.net';
import 'datatables.net-bs4';
import { ChangePasswordService } from "../services/Change-Password";
import { ChangePasswordValidator } from "./Validators";

@Component({
  selector: "wms-Change-Password",
  templateUrl: "../templates/Change-Password.html",
  styleUrls: ["../styles/Change-Password.scss"],
})
export class ChangePasswordComponent extends BaseComponent {
  
  @ViewChild('modalItemLocation') modalItemLocation;
  private modalRef;


  form: FormGroup;


  constructor(injector: Injector, private _chnagepassword: ChangePasswordService,
    fb: FormBuilder, private ngxService: NgxUiLoaderService) {
    super(injector);
    this.form = fb.group({
      oldPassword: ['', Validators.required ],
      newPassword: ['', Validators.required],
      confirmPassword:['',Validators.required]
    },{ validator: ChangePasswordValidator.passwordShouldMatch});
  }

  OnInit() {
    this.addFormValidations();
  }


  get oldPassword() { return this.form.get('oldPassword') };
  get newPassword() { return this.form.get('newPassword') };
  get confirmPassword() { return this.form.get('confirmPassword') };



  updatePassword() {
    this.ngxService.start();
    debugger
    
    
    
    console.log(this.form.value);
    var response: any;
    debugger;
    let changePassword: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId(),
      NewPassword: this.form.value.newPassword,
      OldPassword: this.form.value.oldPassword

    }
    debugger
    let apiAddress: string = this.apiConstant.CHANGEPASSWOR;
    this._chnagepassword.getKeyPair(apiAddress, changePassword)
      .subscribe(res => {
        response = res as string;
        if (response) {
          this.showToastrSuccess("Password changed successfuly...");
        }
        else {
          this.showToastrError("inncorrect old password.")
        }
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("oldPassword", requiredValidation);
    this.addFormControlWithValidations("newPassword", requiredValidation);
    this.addFormControlWithValidations("confirmPassword", requiredValidation);

  }
  getErrorMessage(formElement: string): string {
    // if any errors detected else ignore
    const control = this.formGroup.get(formElement);
    if (control.errors) {
      if (control.errors.required) {
        return "Its required";
      } else if (control.errors.pattern) {
        return "Invalid entry";
      } else if (control.errors.minlength) {
        return "Invalid length";
      } else if (control.errors.maxlength) {
        return "Invalid length";
      }
    } else {
      return "";
    }
  }

  
  }

