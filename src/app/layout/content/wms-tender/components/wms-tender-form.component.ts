import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { WMSTender } from "../models/WMSTender";
import { WMSTenderService } from "../services/wms-tender.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "genx-wms-tender-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/wms-tender-form.component.scss"],
})
export class WMSTenderFormComponent extends BaseComponent {
  status: boolean;
  unitKeyPair: DropdownListDto[];
  wmsService: WMSTender;
  provencesKeyPair: DropdownListDto[];

  constructor(injector: Injector, private _wmsTenderService: WMSTenderService,
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
    this._wmsTenderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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


  redirectToWMSTenderList() {
    this.router.navigate([this.routesList.WMS_TENDER_LISTING]);
  }

}
