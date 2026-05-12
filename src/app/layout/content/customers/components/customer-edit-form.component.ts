import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { Customer } from "../models/Customer";
import { CustomerService } from "../services/customer.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-edit-customer-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/customer-form.component.scss"],
})
export class CustomerEditFormComponent extends BaseComponent {
  status: boolean;
  customer: Customer;
  customerBusinessLineKeyPair: any[] = [];
  regionKeyPair: DropdownListDto[];
  cityKeyPair: DropdownListDto[];
  selectedRegionId: any;
  selectedCityId: any;
  regionDropdownSettings = {};
  cityDropdownSettings = {};
  selectedRegionInfo:any;
  selectedCityInfo: any;

  constructor(injector: Injector, private _customerService: CustomerService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getCustomerBusinessLineKeyPair();
    this.getRegionKeyPair();
    this.getCustomerById();
    this.regionDropdownSettings = {
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

  getCustomerBusinessLineKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_BUSINESSLINE_KEYPAIR;
    this._customerService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerBusinessLineKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getRegionKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.REGION_KEYPAIR;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.regionKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getCityKeyPair(selectedProject: any, triggerdOnClick:boolean) {
    this.selectedRegionId = selectedProject.Value;
    console.log(selectedProject);
    let companyBusinessUnitInfo: any = {
      RegionId: selectedProject.Value
    }
    let apiAddress: string = this.apiConstant.CITY_GET_BY_ID_REGION;
    this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.cityKeyPair = res as DropdownListDto[];
        console.log( this.cityKeyPair)
        this.formGroup.get("CityId").setValue('');
        if(!triggerdOnClick){
          this.selectedCityInfo = [{
            "Text": this.getCityNameFromCityKeyPair(this.customer.CityId),
            "Value": this.customer.CityId.toString()
          }];
          this.selectedCityId = this.customer.CityId;
        }
      
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
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

  private getCityNameFromCityKeyPair(cityId: any) {
    let model=this.cityKeyPair
    .filter(x => x.Value == cityId);
    console.log(model);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getCustomerById() {
    let customerId: string = this.activeRoute.snapshot.params['Id'];
    if(customerId){
      let customerByIdUrl: string = this.apiConstant.CUSTOMER_GET_ONE + `${customerId}`;
      this._customerService.getData(customerByIdUrl)
        .subscribe(res => {
          this.customer = res as Customer;
          this.getCityKeyPair({Value: this.customer.RegionId}, false);
          this.status = this.customer.StatusId == "1" ? true : false;
          this.selectedRegionInfo = [{
            "Text": this.getRegionNameFromRegionKeyPair(this.customer.RegionId),
            "Value": this.customer.RegionId.toString()
          }];
           this.selectedRegionId = this.customer.RegionId;
           debugger
          this.formGroup.patchValue({
            RegionId: this.selectedRegionInfo,
            CityId: this.selectedCityInfo,
            Name: this.customer.Name,
            Type: this.customer.Type,
            CustomerBusinessLineId: this.customer.CustomerBusinessLineId,
            CNIC: this.customer.CNIC,
            ContactPerson: this.customer.ContactPerson,
            Mobile: this.customer.Mobile,
            Phone: this.customer.Phone,
            FaxNo: this.customer.FaxNo,
            AccountNo: this.customer.AccountNo,
            Email: this.customer.Email,
            CreditLimit: this.customer.CreditLimit,
            NTN: this.customer.NTN,
            STRN: this.customer.STRN,
            Country: this.customer.Country,
            Address: this.customer.Address,
            Discount: this.customer.Discount,
            Abbreviation: this.customer.Abbreviation
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

    this.addFormControlWithValidations("Name", nameValidation);
    this.addFormControlWithValidations("Discount");
    this.addFormControlWithValidations("Type");
    this.addFormControlWithValidations("CustomerBusinessLineId", []);
    this.addFormControlWithValidations("ContactPerson", []);
    this.addFormControlWithValidations("Phone", []);
    this.addFormControlWithValidations("Mobile", []);
    this.addFormControlWithValidations("Email", []);
    this.addFormControlWithValidations("FaxNo");
    this.addFormControlWithValidations("AccountNo", []);
    this.addFormControlWithValidations("NTN", []);
    this.addFormControlWithValidations("STRN", []);
    this.addFormControlWithValidations("CNIC", []);
    this.addFormControlWithValidations("AccountCode", []);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("Address", []);
    this.addFormControlWithValidations("CityId", requiredValidation);
    this.addFormControlWithValidations("State", []);
    this.addFormControlWithValidations("RegionId", []);
    this.addFormControlWithValidations("Country");
    this.addFormControlWithValidations("CreditLimit", []);
    this.addFormControlWithValidations("StatusId", []);
    this.addFormControlWithValidations("Abbreviation",lengthValidation);
    this.formGroup.get("Country").setValue("Pakistan");
  }
  getCityValue(item: any){
    this.selectedCityId = {
      Value: item.Value,
      Text: item.Text
    };
  }
  updateCustomer(customerFormValue){
    if (this.formGroup.valid) {
      this.executeCustomerUpdate(customerFormValue);
    }
  }

  private executeCustomerUpdate(customerFormValue) {
    this.ngxService.start();
    let customer: Customer = {
      StatusId: this.status? "1" : "0",
      RegionId: this.selectedRegionId,
      ZoneId: customerFormValue.ZoneId,
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

    let apiUrl = this.apiConstant.CUSTOMER_UPDATE+`/${this.customer.Id}`;
    this._customerService.update(apiUrl, customer)
      .subscribe(res => {
        this.showToastrSuccess("Customer updated successfully");
        setTimeout(() => {
          
          this.redirectToCustomerList();
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


  redirectToCustomerList() {
    this.router.navigate([this.routesList.CUSTOMER_LISTING]);
  }

}
