import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { Pallet } from "../models/Pallet";
import { PalletService } from "../services/pallet.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "genx-pallet-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/pallet-form.component.scss"],
})
export class PalletFormComponent extends BaseComponent {

  pallet: Pallet;

  constructor(injector: Injector, private _palletService: PalletService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
  }

  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const nameValidation: ValidatorFn[] = [
      Validators.required,
      Validators.maxLength(50)
    ];
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("Title", []);
    this.addFormControlWithValidations("Length", requiredValidation);
    this.addFormControlWithValidations("Width", requiredValidation);
    this.addFormControlWithValidations("Size", requiredValidation);
    
  }

  public createPallet(formValue) {
    if (this.formGroup.valid) {
      this.executePalletCreation(formValue);
    }
  }

  private executePalletCreation(formValue) {
    let unit: Pallet = {
      Title: formValue.Title,
      Length: formValue.Length,
      Width: formValue.Width,
      Size: formValue.Size,
      CompanyId: this.localStorageService.getCompanyId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CreatedBy: this.localStorageService.getUserId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.PALLET_CREATE;
    this._palletService.create(apiUrl, unit)
      .subscribe(res => {
        this.showToastrSuccess("Pallet created successfully");
        setTimeout(() => {
          this.formGroup.get("Title").setValue("");
          this.formGroup.get("Length").setValue("");
          this.formGroup.get("Width").setValue("");
          this.formGroup.get("Size").setValue("");
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
  }

 


  /**
   * The following method is used
   * @param {string} formElement
   * @returns {string}
   */
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


  redirectToPalletList() {
    this.router.navigate([this.routesList.PALLET_LISTING]);
  }

  numberOnly(event: any, field:string) {
    if (!Number(event.target.value) || event.target.value <= 0) {
      event.target.value = '';
      this.formGroup.get(field).setValue('');
    }
  }

}
