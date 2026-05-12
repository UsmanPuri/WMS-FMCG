import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { City } from "../models/City";
import { CityService } from "../services/city.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "wms-city-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/city-form.component.scss"],
})
export class CityFormComponent extends BaseComponent {
  status: boolean;
  city: City;
  regionDropdownSettings = {};
  provinceDropdownSettings = {};
  zoneDropdownSettings = {};
  provencesKeyPair: DropdownListDto[];
  regionKeyPair: DropdownListDto[];
  zoneKeyPair: DropdownListDto[];
  regionValue: any = {};
  selectedRegionId: any;
  selectedProvinceId: any;
  SelectedZoneId : any;

  constructor(injector: Injector, private _cityService: CityService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getProvinceKeyPair();
    
    this.regionDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.provinceDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.zoneDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  getProvinceKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    debugger
    this._cityService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getRegionKeyPair(selectedProject: any) {
    debugger
    this.selectedProvinceId = selectedProject.Value;
    let companyBusinessUnitInfo: any = {
      ProvinceId: selectedProject.Value
    }
    let apiAddress: string = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
    this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
        this.formGroup.get("RegionId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getZoneKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.selectedProvinceId,
      RegionId: this.regionValue
    }
    let apiAddress: string = this.apiConstant.ZONE_GET_BY_ID_REGION;
    this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.zoneKeyPair = res as DropdownListDto[];
        this.formGroup.get("ZoneId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  public getRegionValue(item: any){
    this.regionValue = item.Value;
    this. getZoneKeyPair()
  }

  public setZoneKey(item: any) {
    this.SelectedZoneId = item.Value;
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
    this.addFormControlWithValidations("ZoneId", requiredValidation);
  }

  public createCity(cityFormValue) {
    if (this.formGroup.valid) {
      this.executeCityCreation(cityFormValue);
    }
  }

  private executeCityCreation(provinceFormValue) {
    let city: City = {
      StatusId: this.status ? "1" : "0",
      Name: provinceFormValue.Name,
      ProvinceId: this.selectedProvinceId,
      RegionId: this.regionValue,
      ZoneId: this.SelectedZoneId,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_Province: undefined,
      AML_Region: undefined
    }

    let apiUrl = this.apiConstant.CITY_CREATE;
    this._cityService.create(apiUrl, city)
      .subscribe(res => {
        this.showToastrSuccess("City Created Successfully");
        setTimeout(() => {
          this.formGroup.get('ProvinceId').setValue('');
          this.formGroup.get('RegionId').setValue('');
          this.formGroup.get('ZoneId').setValue('');
          this.formGroup.get('Name').setValue('');
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


  redirectToCityList() {
    this.router.navigate([this.routesList.CITY_LISTING]);
  }

}
