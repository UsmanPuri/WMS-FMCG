import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { WMSService } from "../models/WMSService";
import { WMSServiceService } from "../services/wms-service.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "genx-detail-wms-service-form",
  templateUrl: "../templates/detail-form.component.html",
  styleUrls: ["../styles/wms-service-form.component.scss"],
})
export class WMSServiceDetailFormComponent extends BaseComponent {
  status: boolean;
  wmsService: WMSService;
  provencesKeyPair: DropdownListDto[];
  unitKeyPair: DropdownListDto[];
  wmsServiceList: any[] = [];
  constructor(injector: Injector, private _wmsServiceService: WMSServiceService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.getunitKeyPair();
    this.addFormValidations();
    this.getById();
   
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

  private getUnitNameFromUnitKeyPair(UnitOfMeasurement: any) {
    let model=this.unitKeyPair
    .filter(x => x.Value == UnitOfMeasurement);
    console.log(model);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let wmsServiceByIdUrl: string = this.apiConstant.WMS_SERVICE_GET_ONE + `${Id}`;
      this._wmsServiceService.getData(wmsServiceByIdUrl)
        .subscribe(res => {
          this.wmsService = res as WMSService;
          this.status = this.wmsService.StatusId == "1" ? true : false;
          this.formGroup.patchValue(this.wmsService);
          this.wmsServiceList.push({
            ServiceName: this.wmsService.ServiceName,
            ServiceType: this.wmsService.ServiceType,
            Unit: this.getUnitNameFromUnitKeyPair(this.wmsService.UnitOfMeasurement),
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

    this.addFormControlWithValidations("ServiceName", requiredValidation);
    this.addFormControlWithValidations("ServiceType", []);
    this.addFormControlWithValidations("UnitOfMeasurement", []);
  }

  updateWmsService(formValues){
    if (this.formGroup.valid) {
      this.executeWmsServiceUpdate(formValues);
    }
  }

  private executeWmsServiceUpdate(formValues) {
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

    let apiUrl = this.apiConstant.WMS_SERVICE_UPDATE+`/${this.wmsService.Id}`;
    this._wmsServiceService.update(apiUrl, wmsService)
      .subscribe(res => {
        this.showToastrSuccess("WMS service updated successfully");
        setTimeout(() => {
          this.redirectToWmsList();
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


  redirectToWmsList() {
    this.router.navigate([this.routesList.WMS_SERVICE_LISTING]);
  }


}
