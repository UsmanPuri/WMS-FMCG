import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

import { Region } from '../models/Region';
import { RegionService } from '../services/region.service';
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';


@Component({
  selector: 'wms-region-form',
  templateUrl: '../templates/form.component.html',
  styleUrls: ['../styles/region-form.component.scss'],
})
export class RegionFormComponent extends BaseComponent {
  status: boolean;
  region: Region;
  provinceValue: any = {};
  provinceDropdownSettings = {};
  provencesKeyPair: DropdownListDto[];

  constructor(injector: Injector, private _regionService: RegionService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getProvinceKeyPair();
    this.provinceDropdownSettings = {
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
    this.provinceValue = item.Value;
  }

  getProvinceKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    this._regionService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
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

  public createRegion(regionFormValue) {
    if (this.formGroup.valid) {
      this.executeRegionCreation(regionFormValue);
    }
  }

  private executeRegionCreation(regionFormValue) {
    let region: Region = {
      StatusId: this.status ? '1' : '0',
      Name: regionFormValue.Name,
      ProvinceId: this.provinceValue,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_Province: undefined
    }

    let apiUrl = this.apiConstant.REGION_CREATE;
    this._regionService.create(apiUrl, region)
      .subscribe(res => {
        this.showToastrSuccess('Region created successfully');

        setTimeout(() => {
      
       this.clearFields();
        }, 1000);
      },
        (error => {
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


  redirectToRegionList() {
    this.router.navigate([this.routesList.REGION_LISTING]);
  }

}
