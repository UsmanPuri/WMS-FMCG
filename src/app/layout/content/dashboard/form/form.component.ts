import { Component, Injector, OnInit,  ViewChild } from "@angular/core";
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { FormEquityService } from "./service/form-equity.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends BaseComponent {

  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  formType = "customer";
  dropdownHideShow: boolean;

  constructor(injector: Injector, 
    private ngxService: NgxUiLoaderService, private formEquityService: FormEquityService) {
    super(injector);
  }

  ngOnInit() {
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      FormType: this.formType
    }
    // let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR_BY_ORDERTYPE;
    this.formEquityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

}
