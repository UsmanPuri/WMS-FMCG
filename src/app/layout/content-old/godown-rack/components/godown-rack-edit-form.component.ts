import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  GodownRack } from "../models/GodownRack";
import {  GodownRackService } from "../services/godown-rack.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-godown-rack-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/godown-rack-form.component.scss"],
})
export class GodownRackEditFormComponent extends BaseComponent {
  godownDropdownSettings = {};
  godownRowDropdownSettings = {};

  status: boolean;
  godownRack: GodownRack;
  godownKeyPair: DropdownListDto[];
  selectedGodown:any;
  godownRowKeyPair: DropdownListDto[];
  selectedgodownRow:any;
  selectedGodwomInfo:any;
  selectedGodwomRowInfo:any;

  constructor(injector: Injector, private _godownRackServiceService: GodownRackService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getGodownKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
   this.getGodwomRackById();
  }


  private getGodwomNameFromGodwomKeyPair(godwomId: any) {
    let model=this.godownKeyPair
    .filter(x => x.Value == godwomId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getGodwomRowNameFromGodwomRowKeyPair(godwomId: any) {
    let model=this.godownRowKeyPair
    .filter(x => x.Value == godwomId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getGodwomRackById() {
    let godwomRackId: string = this.activeRoute.snapshot.params['Id'];
    if(godwomRackId){
      let byIdUrl: string = this.apiConstant.GODOWN_RACK_GET_ONE + `${godwomRackId}`;
      this._godownRackServiceService.getData(byIdUrl)
        .subscribe(res => {
          this.godownRack = res as GodownRack;
        
          this.selectedGodwomInfo = [{
            "Text": this.getGodwomNameFromGodwomKeyPair(this.godownRack.GodwonId),
            "Value": this.godownRack.GodwonId.toString()
          }];
         this.selectedGodown = this.godownRack.GodwonId;  
         this.getGodownRowKeyPair(this.godownRack.GodwonId,false);

          this.formGroup.patchValue({
            Name: this.godownRack.Name,
            Alias: this.godownRack.Alias
    
            
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
    this.addFormControlWithValidations("GodownRowId",[]);
    this.addFormControlWithValidations("godownId",[]);
  }

  getGodownKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODWOM_KEYPAIR;
    this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownRowKeyPair(bodownId, triggerdOnClick: boolean) {
      debugger
    let apiAddress: string = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID+`${bodownId}`;
    this._godownRackServiceService.getData(apiAddress)
      .subscribe(res => {
        this.godownRowKeyPair = res as DropdownListDto[];
        if(triggerdOnClick===false){
            debugger
        this.selectedGodwomRowInfo = [{
            "Text": this.getGodwomRowNameFromGodwomRowKeyPair(this.godownRack.GodownRowId),
            "Value": this.godownRack.GodownRowId.toString()
          }];
          this.selectedgodownRow = this.godownRack.GodownRowId;
        }
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  godownChange(selectedItem:any){
    this.selectedGodown=selectedItem.Value;
    
    this.formGroup.get("GodownRowId").setValue('');
    this.selectedgodownRow={};
    this.getGodownRowKeyPair(selectedItem.Value,true);
  }

  godownRowChange(item:any){
    this.selectedgodownRow=item.Value;
   
  }

  public updateGodownRack(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedGodown){
        this.showToastrWarning("Select Chamber please.");
        return false;
      }
      else if(!this.selectedgodownRow){
        this.showToastrWarning("Select Aisle Row please.");
        return false;
      }
      this.executeGodownRackCreation(formValue);
    }
  }

  private executeGodownRackCreation(formValue) {
    this.ngxService.start();
    let godwom: GodownRack = {
      GodwonId: this.selectedGodown,
      GodownRowId: this.selectedgodownRow,
      Name: formValue.Name,
      Alias: formValue.Alias,
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      AML_Godwom: undefined
    }

    let apiUrl = this.apiConstant.GODOWN_RACK_UPDATE+`/${this.godownRack.GodownRackId}`;
    this._godownRackServiceService.update(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godown Rack Updated successfully");
        setTimeout(() => {
          this.redirectToGodownRackList();
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

}
