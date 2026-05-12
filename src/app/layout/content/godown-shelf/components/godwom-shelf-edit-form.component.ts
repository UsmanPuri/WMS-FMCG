import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  GodownShelf } from "../models/GodownShelf";
import {  GodownShelfService } from "../services/godown-shelf.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-godown-shelf-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/godown-shelf-form.component.scss"],
})
export class GodownShelfEditFormComponent extends BaseComponent {
  warehouseDropdownSettings = {};
  godownRowDropdownSettings = {};
  godownRackDropdownSettings = {};
  godownDropdownSettings = {};
  status: boolean;
  godownShelf: GodownShelf;
  warehouseKeyPair: DropdownListDto[];
  godownRowKeyPair: DropdownListDto[];
  godownKeyPair: DropdownListDto[];
  godownRackKeyPair: DropdownListDto[];
  selectedGodown={};
  selectedWarehouseId: any;
  selectedGodownRowId: any;
  selectedGodownId: any;
  selectedGodownRack: any;

  selectedWarehouseInfo:any;
  selectedGodwomInfo:any;
 
  selectedGodwomRowInfo:any;
  constructor(injector: Injector, private _godownShelfService: GodownShelfService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getWarehouseKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
    this.getGodwomShelfById();
  }


  private getGodwomShelfById() {
    let godwomRowId: string = this.activeRoute.snapshot.params['Id'];
    if(godwomRowId){
      let byIdUrl: string = this.apiConstant.GODOWN_SHELF_GET_ONE + `${godwomRowId}`;
      this._godownShelfService.getData(byIdUrl)
        .subscribe(res => {
          //debugger
          this.godownShelf = res as GodownShelf;
        
          this.selectedGodwomInfo = [{
           // "Text": this.getGodwomNameFromGodwomKeyPair(this.godownRow.GodwonId),
            "Value": this.godownShelf.WarehouseId.toString()
          }];
         this.selectedWarehouseId = this.godownShelf.WarehouseId;  
          this.formGroup.patchValue({
            Name: this.godownShelf.Name,
            Alias: this.godownShelf.Alias,
            Height: this.godownShelf.Height,
            Width: this.godownShelf.Width, 
            Depth: this.godownShelf.Depth
           
            
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
    this.addFormControlWithValidations("Alias", requiredValidation);
    this.addFormControlWithValidations("WarehouseId", []);
    this.addFormControlWithValidations("GodownId", []);
    this.addFormControlWithValidations("GodownRowId", []);
    this.addFormControlWithValidations("GodownRackId", []);
    this.addFormControlWithValidations("Height", requiredValidation);
    this.addFormControlWithValidations("Width", requiredValidation);
    this.addFormControlWithValidations("Depth", requiredValidation);
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
        this.formGroup.get("GodownId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownRowKeyPair(selectedProject: any) {
    this.selectedGodownId = selectedProject.Value;
    let apiAddress: string = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID+`${selectedProject.Value}`;
    this._godownShelfService.getData(apiAddress)
      .subscribe(res => {
        this.godownRowKeyPair = res as DropdownListDto[];
        this.formGroup.get("GodownRackId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownRackKeyPair(godownRowId: any) {
    let apiAddress: string = this.apiConstant.GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID+`${godownRowId}`;
    this._godownShelfService.getData(apiAddress)
      .subscribe(res => {
        this.godownRackKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onGodownRackChange(item:any){
    this.selectedGodownRack={
      Id:item.Value,
      Name:item.Text
    }
  }

  getGodownRowValue(item: any){
    this.selectedGodownRowId = {
      Value: item.Value,
      Text: item.Text
    };
    this.getGodownRackKeyPair(item.Value);
  }

  public createGodownShelf(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedWarehouseId){
        this.showToastrWarning("Select Warehouse please");
        return false;
      }
      else if(!this.selectedGodownId){
        this.showToastrWarning("Select Godown please.");
        return false;
      }
      else if(!this.selectedGodownRowId){
        this.showToastrWarning("Select Godown Row please.");
        return false;
      }
      else if(!this.selectedGodownRack || !this.selectedGodownRack["Id"]){
        this.showToastrWarning("Select Godown Rack please.");
        return false;
      }
      this.executeGodownRowCreation(formValue);
    }
  }

  private executeGodownRowCreation(formValue) {
    this.ngxService.start();
    let godwom: GodownShelf = {
      Name: formValue.Name,
      Alias: formValue.Alias,
      WarehouseId: this.selectedWarehouseId,
      GodwomId: this.selectedGodownId,
      GodownRowId: this.selectedGodownRowId.Value,
      GodownRackId: this.selectedGodownRack["Id"],
      Height: formValue.Height,
      Width: formValue.Width,
      Depth: formValue.Depth,
      AML_Warehouse: undefined,
      AML_Godwom: undefined,
      AML_GodownRack: undefined
    }

    let apiUrl = this.apiConstant.GODOWN_SHELF_CREATE;
    this._godownShelfService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godown Shelf created successfully");
        setTimeout(() => {
          this.redirectToGodownShelfList();
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
  this.warehouseDropdownSettings = {
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
  this.godownDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.godownRackDropdownSettings = {
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


  redirectToGodownShelfList() {
    this.router.navigate([this.routesList.GODOWN_SHELF_LISTING]);
  }

}
