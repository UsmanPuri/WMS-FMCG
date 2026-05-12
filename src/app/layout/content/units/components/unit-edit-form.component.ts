import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { Unit } from "../models/Unit";
import { UnitService } from "../services/unit.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "genx-edit-unit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/unit-form.component.scss"],
})
export class UnitEditFormComponent extends BaseComponent {
  status: boolean;
  unit: Unit;

  constructor(injector: Injector, private _unitService: UnitService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getUnitById();
  }

  private getUnitById() {
    let unitId: string = this.activeRoute.snapshot.params['Id'];
    if(unitId){
      let customerByIdUrl: string = this.apiConstant.UNIT_GET_ONE + `${unitId}`;
      this._unitService.getData(customerByIdUrl)
        .subscribe(res => {
          this.unit = res as Unit;
          this.status = this.unit.StatusId == "1" ? true : false;
          this.formGroup.patchValue(this.unit);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  onStatusChange(eve){
    this.status = eve;
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
    this.addFormControlWithValidations("Abbreviation", nameValidation);
  }

  updateUnit(unitFormValue){
    if (this.formGroup.valid) {
      this.executeUnitUpdate(unitFormValue);
    }
  }

  private executeUnitUpdate(unitFormValue) {
    this.ngxService.start();
    let unit: Unit = {
      StatusId: this.status? "1" : "0",
      Title: unitFormValue.Title,
      Abbreviation: unitFormValue.Abbreviation,
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.UNIT_UPDATE+`/${this.unit.Id}`;
    this._unitService.update(apiUrl, unit)
      .subscribe(res => {
        this.showToastrSuccess("Unit updated successfully");
        setTimeout(() => {
          this.redirectToUnitList();
        }, 2000);
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
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
