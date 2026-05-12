import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { WMSService } from "../models/WMSService";
import { WMSServiceService } from "../services/wms-service.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "genx-wms-service-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/wms-service-form.component.scss"],
})
export class WMSServiceFormComponent extends BaseComponent {
  status: boolean;
  unitKeyPair: DropdownListDto[];
  wmsService: WMSService;
  provencesKeyPair: DropdownListDto[];

  constructor(injector: Injector, private _wmsServiceService: WMSServiceService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getunitKeyPair();
  }

  getunitKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.UNIT_KEY_PAIR;
    this._wmsServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.unitKeyPair = res as DropdownListDto[];
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

    this.addFormControlWithValidations("ServiceName", requiredValidation);
    this.addFormControlWithValidations("ServiceType", []);
    this.addFormControlWithValidations("UnitOfMeasurement", []);
  }

  public createWmsService(wmsServiceFormValue) {
    if (this.formGroup.valid) {
      this.executeWmsServiceCreation(wmsServiceFormValue);
    }
  }

  private executeWmsServiceCreation(formValues) {
    let wmsService: WMSService = {
      StatusId: this.status? "1" : "0",
      ServiceName: formValues.ServiceName,
      ServiceType: formValues.ServiceType,
      UnitOfMeasurement: formValues.UnitOfMeasurement,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.WMS_SERVICE_CREATE;
    this._wmsServiceService.create(apiUrl, wmsService)
      .subscribe(res => {
        this.showToastrSuccess("WMS service created successfully");
        setTimeout(() => {
          this.formGroup.get("ServiceName").setValue("");
          this.formGroup.get("ServiceType").setValue("");
          this.formGroup.get("UnitOfMeasurement").setValue("");
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


  redirectToWMSServiceList() {
    this.router.navigate([this.routesList.WMS_SERVICE_LISTING]);
  }

}
