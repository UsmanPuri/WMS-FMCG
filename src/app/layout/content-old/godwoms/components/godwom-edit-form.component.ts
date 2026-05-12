import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  Godwom } from "../models/Godwom";
import {  GodwomService } from "../services/godwom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-godwom-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/godwom-form.component.scss"],
})
export class GodwomEditFormComponent extends BaseComponent {
  warehouseDropdownSettings = {};
  godwomTypeDropdownSettings = {};

  status: boolean;
  godwom: Godwom;
  warehouseKeyPair: DropdownListDto[];
  godwomTypeKeyPair: DropdownListDto[];
  selectedWarehouse:any;
  selectedGodwomType:any;
  selectedWarehouseInfo:any;
  selectedGodwomTypeInfo:any;

  constructor(injector: Injector, private _godwomService: GodwomService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getGodwomTypeKeyPair();
    this.getWarehouseKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
   
    this.getGodwomById();
  }


  private getGodwomById() {
    let godwomId: string = this.activeRoute.snapshot.params['Id'];
    if(godwomId){
      let customerByIdUrl: string = this.apiConstant.GODWOM_GET_ONE + `${godwomId}`;
      this._godwomService.getData(customerByIdUrl)
        .subscribe(res => {
          this.godwom = res as Godwom;
        
          this.selectedWarehouseInfo = [{
            "Text": this.getWarehouseNameFromWarehouseKeyPair(this.godwom.WarehouseId),
            "Value": this.godwom.WarehouseId.toString()
          }];
         this.selectedWarehouse = this.godwom.WarehouseId;
           this.selectedGodwomTypeInfo = [{
            "Text": this.getGodwomTypeNameFromGodwomKeyPair(this.godwom.GodwomTypeId),
            "Value": this.godwom.WarehouseId.toString()
          }];
           this.selectedGodwomType = this.godwom.GodwomTypeId;

          this.formGroup.patchValue({
            WarehouseId: this.selectedWarehouseInfo,
            GodwomTypeId:this.selectedGodwomTypeInfo,
            Name: this.godwom.Name,
            Abbreviation: this.godwom.Abbreviation,
            Width: this.godwom.Width,
            Height: this.godwom.Height,
            Dept: this.godwom.Dept,
            
          });
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }


  private getWarehouseNameFromWarehouseKeyPair(warehouseId: any) {
    let model=this.warehouseKeyPair
    .filter(x => x.Value == warehouseId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getGodwomTypeNameFromGodwomKeyPair(godwomTypeId:any)
  {
    let model=this.godwomTypeKeyPair
    .filter(x => x.Value == godwomTypeId);

    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
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
    this.addFormControlWithValidations("WarehouseId", []);
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
      debugger
    this.selectedWarehouse=selectedItem.Value
    
    console.log(this.selectedWarehouse)
  }

  godwomTypeChange(selectedItem:any){

    this.selectedGodwomType=selectedItem.Value
    
  }

  public updateGodwom(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedWarehouse){
        this.showToastrWarning("Select Warehouse please.");
        return false;
      }
      if(!this.selectedGodwomType){
        this.showToastrWarning("Select Godwom type please.");
        return false;
      }
      this.executeGodwomCreation(formValue);
    }
  }

  private executeGodwomCreation(formValue) {
    this.ngxService.start();
    let godwom: Godwom = {
      Name: formValue.Name,
      Abbreviation: formValue.Abbreviation,
      Height: formValue.Height,
      Width: formValue.Width,
      Dept: formValue.Dept,
      WarehouseId: this.selectedWarehouse,
      GodwomTypeId: this.selectedGodwomType,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_GodwomType: undefined
    }

    let apiUrl = this.apiConstant.GODWOM_UPDATE +`/${this.godwom.GodwomId}`;
    this._godwomService.update(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godwom Updated successfully");
        setTimeout(() => {
          this.redirectToGodwomList();
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
