import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  GodownRack } from "../models/GodownRack";
import {  GodownRackService } from "../services/godown-rack.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "wms-godown-rack-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/godown-rack-form.component.scss"],
})
export class GodownRackFormComponent extends BaseComponent {
  godownDropdownSettings = {};
  godownRowDropdownSettings = {};
  warehouseDropdownSettings = {};
 
  godownRackDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  status: boolean;
  godownRack: GodownRack;
  godownKeyPair: DropdownListDto[];
  selectedGodown={};
  godownRowKeyPair: DropdownListDto[];
  selectedgodownRow={};
  selectedWarehouseId: any;
  
  selectedGodownId: any;

  constructor(injector: Injector, private _godownRackServiceService: GodownRackService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
   // this.getGodownKeyPair();
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
    this.addFormControlWithValidations("Alias", requiredValidation);
    this.addFormControlWithValidations("GodownRowId",[]);
    this.addFormControlWithValidations("WarehouseId", []);
    this.addFormControlWithValidations("GodownId", []);
  }

  // getGodownKeyPair() {
  //   let companyBusinessUnitInfo: any = {
  //     CompanyId: this.localStorageService.getCompanyId(),
  //     BusinessUnitId:this.localStorageService.getBusinessUnitId(),
  //   }
  //   let apiAddress: string = this.apiConstant.GODWOM_KEYPAIR;
  //   this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
  //     .subscribe(res => {
  //       this.godownKeyPair = res as DropdownListDto[];
  //     },
  //       (error) => {
  //         this.errorHandler.handleError(error);
  //         this.errorMessage = this.errorHandler.errorMessage;
  //       });
  // }

  getGodownRowKeyPair(bodownId) {
    let apiAddress: string = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID+`${bodownId}`;
    this._godownRackServiceService.getData(apiAddress)
      .subscribe(res => {
        this.godownRowKeyPair = res as DropdownListDto[];
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
    this.formGroup.get("GodownRowId").setValue('');
    this.selectedgodownRow={};
    this.getGodownRowKeyPair(selectedItem.Value);
  }

  godownRowChange(item:any){
    this.selectedgodownRow={
      Id:item.Value,
      Name:item.Text
    }
  }

  public createGodownRack(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedGodown || !this.selectedGodown["Id"]){
        this.showToastrWarning("Select Godown please.");
        return false;
      }
      else if(!this.selectedgodownRow || !this.selectedgodownRow["Id"]){
        this.showToastrWarning("Select Godown Row please.");
        return false;
      }
      this.executeGodownRackCreation(formValue);
    }
  }

  private executeGodownRackCreation(formValue) {
    let godwom: GodownRack = {
      GodwonId: this.selectedGodown["Id"],
      GodownRowId: this.selectedgodownRow["Id"],
      Name: formValue.Name,
      Alias: formValue.Alias,
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      AML_Godwom: undefined
    }

    let apiUrl = this.apiConstant.GODOWN_RACK_CREATE;
    this._godownRackServiceService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godown Rack created successfully");
        setTimeout(() => {
          this.redirectToGodownRackList();
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
  this.godownDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.godownRowDropdownSettings = {
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


  redirectToGodownRackList() {
    this.router.navigate([this.routesList.GODOWN_RACK_LISTING]);
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownKeyPair(selectedProject: any) {
    this.selectedWarehouseId = selectedProject.Value;
    let companyBusinessUnitInfo: any = {
      WarehouseId: selectedProject.Value
    }
    let apiAddress: string = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
    this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
        this.formGroup.get("GodownId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

}
