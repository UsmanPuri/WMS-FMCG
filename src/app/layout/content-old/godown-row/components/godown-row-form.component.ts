import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  GodownRow } from "../models/GodownRow";
import {  GodownRowService } from "../services/godown-row.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-godown-row-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/godown-row-form.component.scss"],
})
export class GodownRowFormComponent extends BaseComponent {
  godownDropdownSettings = {};

  status: boolean;
  godownRow: GodownRow;
  godownKeyPair: DropdownListDto[];
  warehouseKeyPair: DropdownListDto[];
  selectedGodown={};
  selectedWarehouseId: any;
  warehouseDropdownSettings = {};

  constructor(injector: Injector, private _godownServiceService: GodownRowService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    //this.getGodownKeyPair();
    this.getWarehouseKeyPair();
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._godownServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Alias", requiredValidation);
    this.addFormControlWithValidations("WarehouseId", requiredValidation);
    this.addFormControlWithValidations("GodownId", requiredValidation);
  }

  getGodownKeyPair(selectedProject: any) {
    this.selectedWarehouseId = selectedProject.Value;
    let companyBusinessUnitInfo: any = {
      WarehouseId: selectedProject.Value
    }
    let apiAddress: string = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
    this._godownServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
        this.formGroup.get("GodownId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getGodownKeyPairWithoutWareHouse() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODWOM_KEYPAIR;
    this._godownServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  godownChange(selectedItem:any){
    this.selectedGodown={
      Id:selectedItem.Value,
      Name:selectedItem.Text
    }
  }

  public createGodownRow(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedGodown || !this.selectedGodown["Id"]){
        this.showToastrWarning("Select Godown please.");
        return false;
      }
      this.executeGodownRowCreation(formValue);
    }
  }

  private executeGodownRowCreation(formValue) {
    this.ngxService.start();
    let godwom: GodownRow = {
      Name: formValue.Name,
      Alias: formValue.Alias,
      GodwonId: this.selectedGodown["Id"],
      AML_Godwom: undefined
    }

    let apiUrl = this.apiConstant.GODOWN_ROW_CREATE;
    this._godownServiceService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godown Row created successfully");
        setTimeout(() => {
          this.redirectToGodownRowList();
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
   
private dropdownSettings(){
  this.godownDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.warehouseDropdownSettings = {
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


  redirectToGodownRowList() {
    this.router.navigate([this.routesList.GODOWN_ROW_LISTING]);
  }

}
