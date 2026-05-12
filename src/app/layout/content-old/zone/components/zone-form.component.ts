import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

import { Region } from '../models/Region';
import { Zone } from '../models/Zone';
import { ZoneService } from '../services/zone.service';
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';


@Component({
  selector: 'wms-zone-form',
  templateUrl: '../templates/form.component.html',
  styleUrls: ['../styles/zone-form.component.scss'],
})
export class ZoneFormComponent extends BaseComponent {
  status: boolean;
  region: Region;
  provinceValue: any = {};
  regionValue: any = {};
  provinceDropdownSettings = {};
  regionDropdownSettings = {};
  provencesKeyPair: DropdownListDto[];
  selectedProvinceId: any;
  regionKeyPair: DropdownListDto[];


  constructor(injector: Injector, private _zoneService: ZoneService,
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

    this.regionDropdownSettings = {
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
    this.getRegionKeyPair(item.Value);
  }
  public getRegionValue(item: any){
    this.regionValue = item.Value;
  }

  getProvinceKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    this._zoneService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getRegionKeyPair(selectedProject: any) {
    debugger
    
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue
    }
    let apiAddress: string = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
    this._zoneService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
        this.formGroup.get("RegionId").setValue('');
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
    this.addFormControlWithValidations("RegionId", requiredValidation);
  }

  public createZone(zoneFormValue) {
    if (this.formGroup.valid) {
      this.executeZoneCreation(zoneFormValue);
    }
  }

  private executeZoneCreation(zoneFormValue) {
    let zone: Zone = {
      StatusId: this.status ? '1' : '0',
      ZoneName: zoneFormValue.Name,
      ProvinceId: this.provinceValue,
      RegionId: this.regionValue,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_Province: undefined
    }

    let apiUrl = this.apiConstant.ZONE_CREATE;
    this._zoneService.create(apiUrl, zone)
      .subscribe(res => {
        this.showToastrSuccess('Zone created successfully');

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
  this.formGroup.get("RegionId").setValue('');
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


  redirectToZoneList() {
    this.router.navigate([this.routesList.ZONE_LISTING]);
  }

}
