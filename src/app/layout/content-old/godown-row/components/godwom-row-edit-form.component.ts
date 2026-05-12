import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  GodownRow } from "../models/GodownRow";
import {  GodownRowService } from "../services/godown-row.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "wms-godown-row-edit--form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/godown-row-form.component.scss"],
})
export class GodownRowEditFormComponent extends BaseComponent {
  godownDropdownSettings = {};

  status: boolean;
  godownRow: GodownRow;
  godownKeyPair: DropdownListDto[];
  selectedGodown:any;
  selectedGodwomInfo:any;

  constructor(injector: Injector, private _godownServiceService: GodownRowService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.getGodownKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
    this.getGodwomRowById();
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
  private getGodwomRowById() {
    let godwomRowId: string = this.activeRoute.snapshot.params['Id'];
    if(godwomRowId){
      let byIdUrl: string = this.apiConstant.GODOWN_ROW_GET_ONE + `${godwomRowId}`;
      this._godownServiceService.getData(byIdUrl)
        .subscribe(res => {
          this.godownRow = res as GodownRow;
        
          this.selectedGodwomInfo = [{
            "Text": this.getGodwomNameFromGodwomKeyPair(this.godownRow.GodwonId),
            "Value": this.godownRow.GodwonId.toString()
          }];
         this.selectedGodown = this.godownRow.GodwonId;  
          this.formGroup.patchValue({
            Name: this.godownRow.Name,
            Alias: this.godownRow.Alias
    
            
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
    this.addFormControlWithValidations("GodwomId", requiredValidation);
  }

  getGodownKeyPair() {
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
    this.selectedGodown=selectedItem.Value
     
  }

  public updateGodownRow(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedGodown){
        this.showToastrWarning("Select Godown please.");
        return false;
      }
      this.executeGodownRowCreation(formValue);
    }
  }

  private executeGodownRowCreation(formValue) {
    let godwom: GodownRow = {
      Name: formValue.Name,
      Alias: formValue.Alias,
      GodwonId: this.selectedGodown,
      AML_Godwom: undefined
    }

    let apiUrl = this.apiConstant.GODOWN_ROW_UPDATE+`/${this.godownRow.GodownRowId}`;
    this._godownServiceService.update(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Godown Row created successfully");
        setTimeout(() => {
          this.redirectToGodownRowList();
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
  this.godownDropdownSettings = {
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
