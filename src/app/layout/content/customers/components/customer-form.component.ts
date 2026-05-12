import { Component, Injector, OnInit, Input } from '@angular/core';
import { ValidatorFn, Validators, FormGroup } from '@angular/forms';

import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';
import { FormInterface } from '../../../../helpers/interfaces/form.interface';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wms-customer-form',
  templateUrl: '../templates/form.component.html',
  styleUrls: ['../styles/customer-form.component.scss'],
})
export class CustomerFormComponent extends BaseComponent {
  status: boolean;
  provencesKeyPair: DropdownListDto[];
  
  regionKeyPair: DropdownListDto[];
  zoneKeyPair: DropdownListDto[];
  cityKeyPair: DropdownListDto[];
  customer: Customer;
  sub: any;
  provinceDropdownSettings = {};
  regionDropdownSettings = {};
  zoneDropdownSettings = {};
  cityDropdownSettings = {};
  customerBusinessLineKeyPair: any[] = [];
  selectedRegionId: any;
  selectedZoneId: any;
  selectedCityId: any;
  provinceValue: any = {};

  constructor(injector: Injector, private _customerService: CustomerService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getOwnerById();
    this.getCustomerBusinessLineKeyPair();
    this.getProvinceKeyPair();
    //this.getCityKeyPair(this.formGroup.value.RegionId);
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
    this.zoneDropdownSettings = {
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
  }

  getProvinceKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_KEYPAIR;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.provencesKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getCustomerBusinessLineKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_BUSINESSLINE_KEYPAIR;
    this._customerService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerBusinessLineKeyPair = res as DropdownListDto[];

        this.formGroup.patchValue({
          CustomerBusinessLineId:2
        });


      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getRegionKeyPair(selectedProject: any) {
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue
    }
    let apiAddress: string = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
        this.formGroup.get("RegionId").setValue('');
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getCityKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue,
      RegionId: this.selectedRegionId,
      ZoneId: this.selectedZoneId
    }
    let apiAddress: string = this.apiConstant.CITY_GET_BY_ID_REGION;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.cityKeyPair = res as DropdownListDto[];
        this.formGroup.get("CityId").setValue('');
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
      this._customerService.getData(customerByIdUrl)
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
  public getProvinceValue(item: any) {
    this.provinceValue = item.Value;
    this.getRegionKeyPair(item.Value);
  }
  
  getCityValue(item: any){
    this.selectedCityId = {
      Value: item.Value,
      Text: item.Text
    };
  }

  public getRegionValue(item: any) {
    this.selectedRegionId = item.Value;
    this.formGroup.get("ZoneId").setValue('');
    this.getZoneKeyPair();
  }

  public getZoneValue(item: any) {
    this.selectedZoneId = item.Value;
    this.formGroup.get("CityId").setValue('');
    this.getCityKeyPair();
  }

  getZoneKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      ProvinceId: this.provinceValue,
      RegionId: this.selectedRegionId
    }
    let apiAddress: string = this.apiConstant.ZONE_GET_BY_ID_REGION;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.zoneKeyPair = res as DropdownListDto[];
        this.formGroup.get("ZoneId").setValue('');
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

    this.addFormControlWithValidations('Name', nameValidation);
    this.addFormControlWithValidations('Discount');
    this.addFormControlWithValidations('Type');
    this.addFormControlWithValidations('CustomerBusinessLineId', []);
    this.addFormControlWithValidations('ContactPerson', []);
    this.addFormControlWithValidations('Phone', []);
    this.addFormControlWithValidations('Mobile', []);
    this.addFormControlWithValidations('Email', []);
    this.addFormControlWithValidations('FaxNo');
    this.addFormControlWithValidations('AccountNo', []);
    this.addFormControlWithValidations('NTN', []);
    this.addFormControlWithValidations('STRN', []);
    this.addFormControlWithValidations('CNIC', []);
    this.addFormControlWithValidations('AccountCode', []);
    this.addFormControlWithValidations('Remarks', []);
    this.addFormControlWithValidations('Address', []);
    this.addFormControlWithValidations('CityId',requiredValidation);
    this.addFormControlWithValidations('State', []);
    this.addFormControlWithValidations('RegionId', requiredValidation);
    this.addFormControlWithValidations("ProvinceId", requiredValidation);
    this.addFormControlWithValidations("ZoneId", requiredValidation);
    this.addFormControlWithValidations('Country', []);
    this.addFormControlWithValidations('CreditLimit', []);
    this.addFormControlWithValidations('StatusId', []);
    this.addFormControlWithValidations('Abbreviation',lengthValidation);
    this.formGroup.get("Country").setValue("Paskistan");
  }

  public createCustomer(customerFormValue) {
    debugger
    if (this.formGroup.valid) {
      this.executeCustomerCreation(customerFormValue);
    }
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

  private executeCustomerCreation(customerFormValue) {
    debugger
    if(customerFormValue.ZoneId==undefined)
    {
      customerFormValue.ZoneId = "";
    }
    if(customerFormValue.RegDate==undefined)
    {
      customerFormValue.RegDate = "";
    }
    
    if(this.selectedCityId==undefined)
    {
      this.selectedCityId = "";
    }
    let customer: Customer = {
      RegionId: this.selectedRegionId,
      ZoneId: this.selectedZoneId,
      Name: customerFormValue.Name,
      Discount: customerFormValue.Discount,
      Type: customerFormValue.Type,
      ContactPerson: customerFormValue.ContactPerson,
      Phone: customerFormValue.Phone,
      Mobile: customerFormValue.Mobile,
      Email: customerFormValue.Email,
      FaxNo: customerFormValue.FaxNo,
      AccountNo: customerFormValue.AccountNo,
      NTN: customerFormValue.NTN,
      STRN: customerFormValue.STRN,
      CNIC: customerFormValue.CNIC,
      AccountCode: customerFormValue.AccountCode,
      RegDate: customerFormValue.RegDate,
      Remarks: customerFormValue.Remarks,
      Address: customerFormValue.Address,
      CityId: this.selectedCityId.Value,
      State: customerFormValue.State,
      Country: customerFormValue.Country,
      CreditLimit: customerFormValue.CreditLimit,
      CustomerBusinessLineId: customerFormValue.CustomerBusinessLineId,
      Abbreviation: customerFormValue.Abbreviation,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId()
    }

    let apiUrl = this.apiConstant.CUSTOMER_CREATE;
    this._customerService.create(apiUrl, customer)
      .subscribe(res => {
        this.showToastrSuccess('Customer created successfully');
        setTimeout(() => {
          this.setValueNull();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  redirectToCustomerList() {
    this.router.navigate([this.routesList.CUSTOMER_LISTING]);
  }
public setValueNull() {
  this.formGroup.get("RegionId").setValue('');
  this.formGroup.get("StatusId").setValue("");
  this.formGroup.get("Name").setValue("");
  this.formGroup.get("Type").setValue("");
  this.formGroup.get("Discount").setValue("");
  this.formGroup.get("ContactPerson").setValue("");
  this.formGroup.get("Phone").setValue("");
  this.formGroup.get("Mobile").setValue("");
  this.formGroup.get("Email").setValue("");
  this.formGroup.get("FaxNo").setValue("");
  this.formGroup.get("AccountNo").setValue("");
  this.formGroup.get("NTN").setValue("");
  this.formGroup.get("STRN").setValue("");
  this.formGroup.get("CNIC").setValue("");
  this.formGroup.get("AccountCode").setValue("");
  this.formGroup.get("Remarks").setValue("");
  this.formGroup.get("Address").setValue("");
  this.formGroup.get("CityId").setValue('');
  this.formGroup.get("State").setValue("");
  this.formGroup.get("Country").setValue("");
  this.formGroup.get("CreditLimit").setValue("");
  this.formGroup.get("CustomerBusinessLineId").setValue("");
  this.formGroup.get("Abbreviation").setValue("");
}
}
