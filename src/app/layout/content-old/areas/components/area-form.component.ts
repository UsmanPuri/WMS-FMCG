import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

import { Area } from "../models/Area";
import { AreaService } from "../services/area.service";
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-area-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/area-form.component.scss"],
})
export class AreaFormComponent extends BaseComponent {
  status: boolean;
  region: Area;
  cityValue: any = {};
  cityDropdownSettings = {};
  cityKeyPair: DropdownListDto[];
  itemListToPost: any[]=[];

  constructor(injector: Injector, private _areaService: AreaService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getCityKeyPair();
    this.cityDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  public getProvinceValue(item: any) {
    this.cityValue = item.Value;
  }

  getCityKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.CITY_KEYPAIR;
    this._areaService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.cityKeyPair = res as DropdownListDto[];
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
    this.addFormControlWithValidations("ProvinceId", requiredValidation);
  }

  public createArea(areaFormValue) {
    if (this.formGroup.valid) {
      this.executeAreaCreation(areaFormValue);
    }
  }

  private executeAreaCreation(areaFormValue) {
    let area: Area = {
      StatusId: this.status ? '1' : '0',
      Name: areaFormValue.Name,
      CityId: this.cityValue,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_City: undefined
    }

    this.itemListToPost.push(area)


    let apiUrl = this.apiConstant.REGION_CREATE;
    this.ngxService.start();
    this._areaService.create(apiUrl, this.itemListToPost)
      .subscribe(res => {
        this.showToastrSuccess('Region created successfully');

        setTimeout(() => {
      
       this.clearFields();
        }, 1000);
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
public clearFields() {
  this.formGroup.get("ProvinceId").setValue('');
  this.formGroup.get("Name").setValue('');
}
  public validateControl(controlName: string) {
    if(this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
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
        return 'Its required';
      } else if (control.errors.pattern) {
        return 'Invalid entry';
      } else if (control.errors.minlength) {
        return 'Invalid length';
      } else if (control.errors.maxlength) {
        return 'Invalid length';
      }
    } else {
      return '';
    }
  }


  redirectToAreaList() {
    this.router.navigate([this.routesList.AREA_LISTING]);
  }

}
