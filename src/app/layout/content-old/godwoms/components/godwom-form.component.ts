import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  Godwom } from "../models/Godwom";
import {  GodwomService } from "../services/godwom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "wms-godwom-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/godwom-form.component.scss"],
})
export class GodwomFormComponent extends BaseComponent {
  warehouseDropdownSettings = {};
  godwomTypeDropdownSettings = {};

  status: boolean;
  godwom: Godwom;
  warehouseKeyPair: DropdownListDto[];
  godwomTypeKeyPair: DropdownListDto[];
  selectedWarehouse={};
  selectedGodwomType={};

  constructor(injector: Injector, private _godwomService: GodwomService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getGodwomTypeKeyPair();
    this.getWarehouseKeyPair();
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
    this.addFormControlWithValidations("GodwomTypeId", []);
    this.addFormControlWithValidations("Height", []);
    this.addFormControlWithValidations("Width", []);
    this.addFormControlWithValidations("Dept", []);
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._godwomService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        //console.log(this.warehouseKeyPair)
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodwomTypeKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODWOM_GODWOM_TYPE_KEYPAIR;
    this._godwomService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godwomTypeKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  warehouseChange(selectedItem:any){
    this.selectedWarehouse={
      Id:selectedItem.Value,
      Name:selectedItem.Text
    }
  }
  godwomTypeChange(selectedItem:any){
    this.selectedGodwomType={
      Id:selectedItem.Value,
      Name:selectedItem.Text
    }
  }

  public createGodwom(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedWarehouse || !this.selectedWarehouse["Id"]){
        this.showToastrWarning("Select Warehouse please.");
        return false;
      }
      if(!this.selectedGodwomType || !this.selectedGodwomType["Id"]){
        this.showToastrWarning("Select Godwom type please.");
        return false;
      }
      this.executeGodwomCreation(formValue);
    }
  }

  private executeGodwomCreation(formValue) {
    let godwom: Godwom = {
      Name: formValue.Name,
      Abbreviation: formValue.Abbreviation,
      Height: formValue.Height,
      Width: formValue.Width,
      Dept: formValue.Dept,
      WarehouseId: this.selectedWarehouse["Id"],
      GodwomTypeId: this.selectedGodwomType["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_GodwomType: undefined
    }

    let apiUrl = this.apiConstant.GODWOM_CREATE;
    this._godwomService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godwom created successfully");
        setTimeout(() => {
          this.redirectToGodwomList();
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
   
private dropdownSettings(){
  this.warehouseDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.godwomTypeDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
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


  redirectToGodwomList() {
    this.router.navigate([this.routesList.GODWOM_LISTING]);
  }

}
