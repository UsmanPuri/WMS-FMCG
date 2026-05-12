import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { Unit } from "../models/Unit";
import { UnitService } from "../services/unit.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "genx-unit-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/unit-form.component.scss"],
})
export class UnitFormComponent extends BaseComponent {

  unit: Unit;

  constructor(injector: Injector, private _unitService: UnitService,
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

    this.addFormControlWithValidations("Title", nameValidation);
    this.addFormControlWithValidations("Abbreviation", requiredValidation);
    
  }

  public createUnit(unitFormValue) {
    if (this.formGroup.valid) {
      this.executeUnitCreation(unitFormValue);
    }
  }

  private executeUnitCreation(unitFormValue) {
    let unit: Unit = {
      Title: unitFormValue.Title,
      Abbreviation: unitFormValue.Abbreviation,
      CompanyId: this.localStorageService.getCompanyId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CreatedBy: this.localStorageService.getUserId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.UNIT_CREATE;
    this._unitService.create(apiUrl, unit)
      .subscribe(res => {
        this.showToastrSuccess("Unit created successfully");
        setTimeout(() => {
          this.formGroup.get("Title").setValue("");
          this.formGroup.get("Abbreviation").setValue("");
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


  redirectToUnitList() {
    this.router.navigate([this.routesList.UNIT_LISTING]);
  }

}
