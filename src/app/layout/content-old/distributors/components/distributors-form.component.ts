import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../models/Customer';
import { Distributors } from '../models/Distributors';
import { DistributorsService } from '../services/distributors.service';
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wms-customer-form',
  templateUrl: '../templates/form.component.html',
  styleUrls: ['../styles/distributors-form.component.scss'],
})

export class DistributorsFormComponent extends BaseComponent {
  status: boolean;
  regionKeyPair: DropdownListDto[];
  cityKeyPair: DropdownListDto[];
  zoneKeyPair: DropdownListDto[];
  customer: Customer;
  sub: any;
  regionDropdownSettings = {};
  cityDropdownSettings = {};
  customerBusinessLineKeyPair: any[] = [];
  selectedRegionId: any;
  selectedCityId: any;
  customerKeyPair: DropdownListDto[];
  customerDropdownSettings = {};
  selectedCustomer: any;
  provinceDropdownSettings = {};
  provinceValue: any = {};
  SelectedZoneId: any = {};
  provencesKeyPair: DropdownListDto[];
  ZoneKeyPair: DropdownListDto[];
  zoneDropdownSettings = {};

  constructor(injector: Injector, private _distributorsService: DistributorsService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getCustomerKeyPair();
    this.getProvinceKeyPair();
    // this.getOwnerById();
    

    this.regionDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.customerDropdownSettings = {
        idField: 'Value',
        textField: 'Text',
        singleSelection: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        allowSearchFilter: true,
        closeDropDownOnSelection: true
      };
    this.cityDropdownSettings = {
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

  
  public getProvinceValue(item: any) {
    this.provinceValue = item.Value;
    this.getRegionKeyPair(item.Value);
  }
  public getRegionValue(item: any) {
    this.selectedRegionId = item.Value;
    this.formGroup.get("CityId").setValue('');
    this.getZoneKeyPair();
  }
  
  getProvinceKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  ////// GET REGION LIST
  getRegionKeyPair(selectedProject: any) {
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue
    }
    let apiAddress: string = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
        this.formGroup.get("RegionId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getCityKeyPair(selectedProject: any) {
    debugger
    this.SelectedZoneId = selectedProject.Value;
    let companyBusinessUnitInfo: any = {
      ProvinceId:this.provinceValue,
      RegionId: this.selectedRegionId,
      ZoneId: this.SelectedZoneId
    }
    let apiAddress: string = this.apiConstant.CITY_GET_BY_ID_REGION;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.cityKeyPair = res as DropdownListDto[];
        this.formGroup.get("CityId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getZoneKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue,
      RegionId: this.selectedRegionId
    }
    let apiAddress: string = this.apiConstant.ZONE_GET_BY_ID_REGION;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.zoneKeyPair = res as DropdownListDto[];
        this.formGroup.get("ZoneId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  private getOwnerById() {
    let customerId: string = this.activeRoute.snapshot.params['Id'];
    if(customerId){
      let customerByIdUrl: string = this.apiConstant.CUSTOMER_GET_ONE + `${customerId}`;
      this._distributorsService.getData(customerByIdUrl)
        .subscribe(res => {
          this.customer = res as Customer;
          this.formGroup.patchValue(this.customer);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  getCityValue(item: any){
    this.selectedCityId = {
      Value: item.Value,
      Text: item.Text
    };
  }
  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const nameValidation: ValidatorFn[] = [
      Validators.required,
      Validators.maxLength(50)
    ];
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    const lengthValidation: ValidatorFn[] = [
      Validators.required,
      Validators.maxLength(5)
    ];
    this.addFormControlWithValidations("CustomerId", requiredValidation);
    this.addFormControlWithValidations('Name', nameValidation);
    this.addFormControlWithValidations('DistCode');
    this.addFormControlWithValidations('ContactPerson', []);
    this.addFormControlWithValidations('Mobile', []);
    this.addFormControlWithValidations('Email', []);
    this.addFormControlWithValidations('Address', []);
    this.addFormControlWithValidations('CityId',requiredValidation);
    this.addFormControlWithValidations('RegionId', requiredValidation);
    this.addFormControlWithValidations("ProvinceId", requiredValidation);
    this.addFormControlWithValidations("ZoneId", requiredValidation);
  }

  public createDistributors(customerFormValue) {
    debugger
    if (this.formGroup.valid) {
      this.executeDistributors(customerFormValue);
    }
  }

  customerChange(event:any){
    this.selectedCustomer=event.Value
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
  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : false
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  private executeDistributors(customerFormValue) {
    debugger
    
    let distributor: Distributors = {
      CustomerId: this.selectedCustomer,
      ProvinceId: this.provinceValue,
      RegionId: this.selectedRegionId,
      ZoneId: this.SelectedZoneId,
      CityId: this.selectedCityId.Value,
      DistName: customerFormValue.Name,
      ContactPerson: customerFormValue.ContactPerson,
      DistCode: customerFormValue.DistCode,
      Mobile: customerFormValue.Mobile,
      Email: customerFormValue.Email,
      DistAddress: customerFormValue.Address,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId()
    }

    let apiUrl = this.apiConstant.DISTRIBUTOR_CREATE;
    this._distributorsService.create(apiUrl, distributor)
      .subscribe(res => {
        this.showToastrSuccess('Distributor Created Successfully');
        setTimeout(() => {
          //this.setValueNull();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  redirectToDistributorsList() {
    this.router.navigate([this.routesList.DISTRIBUTORS_LISTING]);
  }
public setValueNull() {
  this.formGroup.get("CustomerId").setValue('');
  this.formGroup.get("ProvinceId").setValue('');
  this.formGroup.get("RegionId").setValue('');
  this.formGroup.get("ZoneId").setValue('');
  this.formGroup.get("CityId").setValue('');
  this.formGroup.get("Name").setValue("");
  this.formGroup.get("DistCode").setValue("");
  this.formGroup.get("ContactPerson").setValue("");
  this.formGroup.get("Mobile").setValue("");
  this.formGroup.get("Email").setValue("");
  this.formGroup.get("Address").setValue("");
  
}
}
