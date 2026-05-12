import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

import { Region } from '../models/Region';
import { RegionService } from '../services/region.service';
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'wms-edit-region-form',
  templateUrl: '../templates/edit-form.component.html',
  styleUrls: ['../styles/region-form.component.scss'],
})
export class RegionEditFormComponent extends BaseComponent {
  status: boolean;
  region: Region;
  provinceValue: any = {};
  provinceDropdownSettings = {};
  provencesKeyPair: DropdownListDto[];
  selectedProvinceInfo: any;
  selectedProvinceId: any;

  constructor(injector: Injector, private _regionService: RegionService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getProvinceKeyPair();
    this.getById();
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
  private getById() {
    let regionId: string = this.activeRoute.snapshot.params['Id'];
    if(regionId) {
      let regionByIdUrl: string = this.apiConstant.REGION_GET_ONE + `${regionId}`;
      this._regionService.getData(regionByIdUrl)
        .subscribe(res => {
          this.region = res as Region;
          this.status = this.region.StatusId == "1" ? true : false;
          this.selectedProvinceInfo = [{
            "Text": this.getProvinceNameFromProvinceKeyPair(this.region.ProvinceId),
            "Value": this.region.ProvinceId.toString()
          }];
           this.selectedProvinceId = this.region.ProvinceId;
           this.provinceValue = this.region.ProvinceId;
        this.formGroup.patchValue({
          ProvinceId: this.selectedProvinceInfo,
          Name: this.region.Name
        });
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    }
  }

  onStatusChange(eve) {
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
  }

  updateRegion(regionFormValue) {
    if (this.formGroup.valid) {
      this.executeRegionUpdate(regionFormValue);
    }
  }

  private executeRegionUpdate(regionFormValue) {
    this.ngxService.start();
    let region: Region = {
      StatusId: this.status ? "1" : "0",
      Name: regionFormValue.Name,
      ProvinceId: this.provinceValue,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      AML_Province: undefined
    }

    let apiUrl = this.apiConstant.REGION_UPDATE + `/${this.region.RegionId}`;
    this._regionService.update(apiUrl, region)
      .subscribe(res => {
        this.showToastrSuccess('Region updated successfully');
        setTimeout(() => {
          this.redirectToRegionList();
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
