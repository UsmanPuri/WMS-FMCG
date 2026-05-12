import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ParkingStages } from "../models/ParkingStages";
import { ParkingStagesService } from "../services/parking-stages.service";
import { FormInterface } from "../../../../helpers/interfaces/form.interface";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "genx-parking-stages-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/parking-stages-form.component.scss"],
})
export class ParkingStagesEditFormComponent extends BaseComponent {

  parkingStages: ParkingStages;

  constructor(injector: Injector, private _parkingStagesService: ParkingStagesService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getById();
  }


  private getById() {
    let parkingId: string = this.activeRoute.snapshot.params['Id'];
    if(parkingId){
      let customerByIdUrl: string = this.apiConstant.PARKINGSTAGES_GET_BY_ID + `${parkingId}`;
      this._parkingStagesService.getData(customerByIdUrl)
        .subscribe(res => {
          this.parkingStages = res as ParkingStages;
         
          this.formGroup.patchValue(this.parkingStages);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
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

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Description", requiredValidation);
    
    
  }

  updateParkingStage(formValue){
    if (this.formGroup.valid) {
      this.executeParkingStageUpdate(formValue);
    }
  }

  private executeParkingStageUpdate(formValue) {
    this.ngxService.start();
    let parking: ParkingStages = {
      Name: formValue.Name,
      Description:formValue.Description,
      CompanyId: this.localStorageService.getCompanyId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CreatedBy: this.localStorageService.getUserId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.PARKINGSTAGES_UPDATE+`/${this.parkingStages.id}`;
    this._parkingStagesService.update(apiUrl, parking)
      .subscribe(res => {
        this.showToastrSuccess("Parking Stage Updated Successfully");
        setTimeout(() => {
            this.redirectToParkingStagesList();
         
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


  redirectToParkingStagesList() {
    this.router.navigate([this.routesList.PARKINGSTAGES_LISTING]);
  }

  numberOnly(event: any, field:string) {
    if (!Number(event.target.value) || event.target.value <= 0) {
      event.target.value = '';
      this.formGroup.get(field).setValue('');
    }
  }

}
