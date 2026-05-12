import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';
import { DashboardService } from '../content/dashboard/services/dashboard.service';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  CompanyKeyPair: DropdownListDto[];
  BusinessUnitKeyPair: DropdownListDto[];
  // FinancialYearKeyPair: DropdownListDto[];
  BusinessUnitKeyPairForTamplete: DropdownListDto[];
  // FinancialYearKeyPairForTemplete: DropdownListDto[];
  SelectedCompanyId: string;
  SelectedBusinessUnitId: string;
  // SelectedFinancialYearId: string;
  CompanyID: any;
  LogoPath: any;

  constructor(injector: Injector, private _dashboardService: DashboardService) {
    super(injector);
  }

  ngOnInit() {
    
    this.addFormValidations();
    this.GetStartupKeyPair();
    
    //debugger
    $("#username").text(this.localStorageService.getDataInLocalStorage("user")["UserName"]);
    $("#username2").text(this.localStorageService.getDataInLocalStorage("user")["UserName"]);
    $("#Login").text(this.localStorageService.getDataInLocalStorage("user")["Login"]);

  }

  CompanyInfo() {
    this.CompanyID = this.localStorageService.getCompanyId()
    if (this.CompanyID == 1) {
      this.LogoPath = "assets/images/company1.png"
    }
    if (this.CompanyID == 2) {
      this.LogoPath = "assets/images/company2.png"
    }
    if (this.CompanyID == 3) {
      this.LogoPath = "assets/images/company3.png"
    }
    if (this.CompanyID == 4) {
      this.LogoPath = "assets/images/company4.png"
    }
  }

  setCompanyBusinessUnitInfo() {
    $("#companyName").text(this.localStorageService.getCompanyName());
    $("#businessUnitName").text(this.localStorageService.getBusinessUnitName());
  }

  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("CompanyId", requiredValidation);
    this.addFormControlWithValidations("BusinessUnitId", requiredValidation);
    // this.addFormControlWithValidations("FinancialYearId", requiredValidation);
  }

  GetStartupKeyPair() {
    //debugger
    let apiAddress: string = this.apiConstant.STARTUP_KEY_PAIR;
    let Logininfo: any = {
      Login: this.localStorageService.getDataInLocalStorage("user")["Login"]
    };
    this._dashboardService.getKeyPair(apiAddress, Logininfo)
      .subscribe(res => {
        this.CompanyKeyPair = res["CompanyKairPair"] as DropdownListDto[];
        this.BusinessUnitKeyPair = res["BusinessUnitKeyPair"] as DropdownListDto[];
        // this.FinancialYearKeyPair = res["FinancialYearKeyPair"] as DropdownListDto[];
        this.BusinessUnitKeyPairForTamplete = this.BusinessUnitKeyPair;
        // this.FinancialYearKeyPairForTemplete = this.FinancialYearKeyPair;
        if (!this.localStorageService.getDataInLocalStorage("StartupKeyPairSelection")) {
          $('#CompanyBusinessUnitModal').show();
        }
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }


  selectStartUpKeyPair(startUpCompanyBusinessUnitFormValue) {
    this.localStorageService.set({ key: "CompanyId", value: startUpCompanyBusinessUnitFormValue.CompanyId });
    this.localStorageService.set({ key: "BusinessUnitId", value: startUpCompanyBusinessUnitFormValue.BusinessUnitId });
    // this.localStorageService.set({ key: "FinancialYearId", value: startUpCompanyBusinessUnitFormValue.FinancialYearId });
    this.localStorageService.set({ key: "CompanyName", value: this.getName(true, startUpCompanyBusinessUnitFormValue.CompanyId) });
    this.localStorageService.set({ key: "BusinessUnitName", value: this.getName(false, startUpCompanyBusinessUnitFormValue.BusinessUnitId) });
    this.setCompanyBusinessUnitInfo();
    $('#CompanyBusinessUnitModal').hide();
    this.CompanyInfo();
  }

  private getName(isCompany: boolean, value: any): string {
    if (isCompany) {
      let company = this.CompanyKeyPair.find((item) => item.Value === value)
      return company.Text;
    } else {
      let businessUnit = this.BusinessUnitKeyPair.find((item) => item.Value === value)
      return businessUnit.Text;
    }
  }

  OpenCompanyBusinessModal() {
    this.SelectedCompanyId = this.localStorageService.getCompanyId();
    this.SelectedBusinessUnitId = this.localStorageService.getBusinessUnitId();
    // this.SelectedFinancialYearId = this.localStorageService.getFinancialYearId();
    this.formGroup.patchValue({
      CompanyId: this.SelectedCompanyId,
      BusinessUnitId: this.SelectedBusinessUnitId,
      // FinancialYearId: this.SelectedFinancialYearId
    });
    $('#CompanyBusinessUnitModal').show();

    let model = localStorage.getItem('modelData');

    if (model) {
      this.setCompanyBusinessUnitInfo();
    }

  }

  disableModel(): void {
    //debugger;
    let model = 'model';
    localStorage.setItem('modelData', model);

  }

  onCompanyChangeEvent(event) {
    //debugger
    this.BusinessUnitKeyPairForTamplete = this.BusinessUnitKeyPair.filter(con => con.ParentReferenceId == event.target.value);
    // this.FinancialYearKeyPairForTemplete = this.FinancialYearKeyPair.filter(con => con.ParentReferenceId == event.target.value);
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

  SignOut() {
    this.localStorageService.remove('wms_token');
    localStorage.removeItem('modelData');
    this.sessionStorageService.remove('wms_token');
    sessionStorage.removeItem('modelData');
    this.router.navigate([this.routesList.LOGIN]);
  }

}
