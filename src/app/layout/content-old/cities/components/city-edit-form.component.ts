import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { City } from "../models/City";
import { CityService } from "../services/city.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: "wms-edit-city-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/city-form.component.scss"],
})
export class CityEditFormComponent extends BaseComponent {
  status: boolean;
  city: City;
  provencesKeyPair: DropdownListDto[];
  regionKeyPair: DropdownListDto[];
  regionDropdownSettings = {};
  provinceDropdownSettings = {};
  selectedProvinceInfo: any;
  selectedRegionInfo: any;
  selectedProvinceId: any;
  selectedRegionId: any;

  constructor(injector: Injector, private _cityService: CityService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getProvinceKeyPair();
    this.getById();
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
  }

  getProvinceKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    this._cityService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getRegionKeyPair(selectedProject: any,  triggerdOnClick: boolean) {
    this.selectedProvinceId = selectedProject.Value;
    let companyBusinessUnitInfo: any = {
      ProvinceId: selectedProject.Value
    }
    let apiAddress: string = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
    this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
        this.formGroup.get("RegionId").setValue('');
        if(!triggerdOnClick){
          this.selectedRegionInfo = [{
            "Text": this.getRegionNameFromRegionKeyPair(this.city.RegionId),
            "Value": this.city.RegionId.toString()
          }];
          this.selectedRegionId = this.city.RegionId;
        }
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getRegionValue(item: any){
    this.selectedRegionId = {
      Value: item.Value,
      Text: item.Text
    };
  }
  private getProvinceNameFromProvinceKeyPair(provinceId: any) {
    let model=this.provencesKeyPair
    .filter(x => x.Value == provinceId);
    console.log(model);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getRegionNameFromRegionKeyPair(regionId: any) {
    let model=this.regionKeyPair
    .filter(x => x.Value == regionId);
    console.log(model);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getById() {
    let cityId: string = this.activeRoute.snapshot.params['Id'];
    if(cityId){
      let cityByIdUrl: string = this.apiConstant.CITY_GET_ONE + `${cityId}`;
      this._cityService.getData(cityByIdUrl)
        .subscribe(res => {
          this.city = res as City;
          this.getRegionKeyPair({Value: this.city.ProvinceId}, false);
          this.status = this.city.StatusId == "1" ? true : false;
          this.selectedProvinceInfo = [{
            "Text": this.getProvinceNameFromProvinceKeyPair(this.city.ProvinceId),
            "Value": this.city.ProvinceId.toString()
          }];
           this.selectedProvinceId = this.city.ProvinceId;
          this.formGroup.patchValue({
            ProvinceId: this.selectedProvinceInfo,
            RegionId: this.selectedRegionInfo,
            Name: this.city.Name
          });
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  onStatusChange(eve){
    this.status = eve;
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

  updateCity(cityFormValue){
    if (this.formGroup.valid) {
      this.executeCityUpdate(cityFormValue);
    }
  }

  private executeCityUpdate(cityFormValue) {
    this.ngxService.start();
    let citylst: City = {
      CityId: this.city.CityId,
      StatusId: this.status ? "1" : "0",
      Name: cityFormValue.Name,
      ProvinceId: this.selectedProvinceId,
      RegionId: this.selectedRegionId.Value,
      ZoneId: this.selectedRegionId.Value,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      AML_Province: undefined,
      AML_Region: undefined
    }

    let apiUrl = this.apiConstant.CITY_UPDATE+`/${this.city.CityId}`;
    this._cityService.update(apiUrl, citylst)
      .subscribe(res => {
        this.showToastrSuccess("City updated successfully");
        setTimeout(() => {
          this.redirectToCityList();
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
