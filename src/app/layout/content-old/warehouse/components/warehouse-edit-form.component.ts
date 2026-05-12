import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  Warehouse } from "../models/Warehouse";
import {  WarehouseService } from "../services/warehouse.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-warehouse-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/warehouse-form.component.scss"],
})
export class WarehouseEditFormComponent extends BaseComponent {
  status: boolean;
  warehouse: Warehouse;

  constructor(injector: Injector, private _warehouseService: WarehouseService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getWarehouseById();
  }

  private getWarehouseById() {
    let warehouseId: string = this.activeRoute.snapshot.params['Id'];
    if(warehouseId){
      let customerByIdUrl: string = this.apiConstant.WAREHOUSE_GET_ONE + `${warehouseId}`;
      this._warehouseService.getData(customerByIdUrl)
        .subscribe(res => {
          this.warehouse = res as Warehouse;
        //   this.getCityKeyPair({Value: this.customer.RegionId}, false);
        //   this.status = this.customer.StatusId == "1" ? true : false;
        //   this.selectedRegionInfo = [{
        //     "Text": this.getRegionNameFromRegionKeyPair(this.customer.RegionId),
        //     "Value": this.customer.RegionId.toString()
        //   }];
          // this.selectedRegionId = this.customer.RegionId;
          this.formGroup.patchValue({
            Name: this.warehouse.Name,
            Abbreviation: this.warehouse.Abbrivation,
            Longitude: this.warehouse.Longitude,
            Latitude: this.warehouse.Latitude,
            ContactPerson: this.warehouse.ContactPerson,
            Address: this.warehouse.Address,
            ContactPersonPhone: this.warehouse.ContactPersonPhone
          
           
          });
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
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

  public updateWarehouse(formValue) {
    if (this.formGroup.valid) {
      this.executeWarehouseCreation(formValue);
    }
  }

  private executeWarehouseCreation(formValue) {
    this.ngxService.start();
    let warehouse: Warehouse = {
      WarehouseId:this.warehouse.WarehouseId,
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

    let apiUrl = this.apiConstant.WAREHOUSE_UPDATE+`/${this.warehouse.WarehouseId}`;
    this._warehouseService.update(apiUrl, warehouse)
      .subscribe(res => {
        this.showToastrSuccess("Warehouse Updated successfully");
        setTimeout(() => {
          this.redirectToWarehouseList();
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


  redirectToWarehouseList() {
    this.router.navigate([this.routesList.WAREHOUSE_LISTING]);
  }

}
