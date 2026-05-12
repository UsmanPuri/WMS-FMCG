import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  Warehouse } from "../models/Warehouse";
import {  WarehouseService } from "../services/warehouse.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "wms-province-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/warehouse-form.component.scss"],
})
export class WarehouseFormComponent extends BaseComponent {
  status: boolean;
  warehouse: Warehouse;

  constructor(injector: Injector, private _warehouseService: WarehouseService,
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
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Abbreviation", requiredValidation);
    this.addFormControlWithValidations("Longitude", []);
    this.addFormControlWithValidations("Latitude", []);
    this.addFormControlWithValidations("Address", []);
    this.addFormControlWithValidations("ContactPerson", []);
    this.addFormControlWithValidations("ContactPersonPhone", []);
  }

  public createWarehouse(formValue) {
    if (this.formGroup.valid) {
      this.executeWarehouseCreation(formValue);
    }
  }

  private executeWarehouseCreation(formValue) {
    let province: Warehouse = {
      Name: formValue.Name,
      Abbrivation: formValue.Abbreviation,
      Longitude:formValue.Longitude,
      Latitude:formValue.Latitude,
      Address:formValue.Address,
      ContactPerson:formValue.ContactPerson,
      ContactPersonPhone:formValue.ContactPersonPhone,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.WAREHOUSE_CREATE;
    this._warehouseService.create(apiUrl, province)
      .subscribe(res => {
        this.showToastrSuccess("Warehouse created successfully");
        setTimeout(() => {
          this.redirectToWarehouseList();
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


  redirectToWarehouseList() {
    this.router.navigate([this.routesList.WAREHOUSE_LISTING]);
  }

}
