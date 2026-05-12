import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { Province } from "../models/Province";
import { ProvinceService } from "../services/province.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-edit-province-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/province-form.component.scss"],
})
export class ProvinceEditFormComponent extends BaseComponent {
  status: boolean;
  province: Province;

  constructor(injector: Injector, private _provinceService: ProvinceService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getById();
  }

  private getById() {
    let provinceId: string = this.activeRoute.snapshot.params['Id'];
    if(provinceId){
      let provinceByIdUrl: string = this.apiConstant.PROVINCE_GET_ONE + `${provinceId}`;
      this._provinceService.getData(provinceByIdUrl)
        .subscribe(res => {
          this.province = res as Province;
          this.status = this.province.StatusId == "1" ? true : false;
          this.formGroup.patchValue(this.province);
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

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Abbreviation", []);
  }

  updateProvince(provinceFormValue){
    if (this.formGroup.valid) {
      this.executeProvinceUpdate(provinceFormValue);
    }
  }

  private executeProvinceUpdate(provinceFormValue) {
    this.ngxService.start();
    let province: Province = {
      StatusId: this.status? "1" : "0",
      Name: provinceFormValue.Name,
      Abbreviation: provinceFormValue.Abbreviation,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LastModifiedBy: this.localStorageService.getUserId()
    }

    let apiUrl = this.apiConstant.PROVINCE_UPDATE+`/${this.province.Id}`;
    this._provinceService.update(apiUrl, province)
      .subscribe(res => {
        this.showToastrSuccess("Province updated successfully");
        setTimeout(() => {
          this.redirectToProvinceList();
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


  redirectToProvinceList() {
    this.router.navigate([this.routesList.PROVINCE_LISTING]);
  }


}
