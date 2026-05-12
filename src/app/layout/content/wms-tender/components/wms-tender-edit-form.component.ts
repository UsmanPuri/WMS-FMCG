import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { WMSTender } from "../models/WMSTender";
import { WMSTenderService } from "../services/wms-tender.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "genx-edit-wms-tender-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/wms-tender-form.component.scss"],
})
export class WMSTenderEditFormComponent extends BaseComponent {
  status: boolean;
  wmsTender: WMSTender;
  provencesKeyPair: DropdownListDto[];
  unitKeyPair: DropdownListDto[];

  constructor(injector: Injector, private _wmsTenderService: WMSTenderService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getById();
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
  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let wmsServiceByIdUrl: string = this.apiConstant.WMS_SERVICE_GET_ONE + `${Id}`;
      this._wmsTenderService.getData(wmsServiceByIdUrl)
        .subscribe(res => {
          this.wmsTender = res as WMSTender;
        
          this.formGroup.patchValue(this.wmsTender);
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


  redirectToWmsList() {
    this.router.navigate([this.routesList.WMS_TENDER_LISTING]);
  }


}
