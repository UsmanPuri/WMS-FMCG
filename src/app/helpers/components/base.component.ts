import { Component, ViewEncapsulation, Injector, HostBinding, OnDestroy, ViewRef, AfterViewInit } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";
// import { ToastrService } from "ngx-toastr";
import * as API_LIST from "../../helpers/constants/apis-list";
import * as CONST_LIST from "../../helpers/constants/constant-list";
import * as ROUTE_LIST from "../../helpers/constants/routes-list";
import { ErrorHandlerService } from "../services/error-handler.service";
import { LocalStorageService } from "../services/local-storage.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SessionStorageService } from "../services/session-storage.service";


/*
 * Base Component
 * Top Level Component
 */
@Component({
  selector: "base-component",
  encapsulation: ViewEncapsulation.None,
  template: ""
})
export class BaseComponent {

  /**
   * The following is the baseModel instance to the rendered form on the UI
   * @type {FormGroup}
   */
  public formGroup: FormGroup = new FormGroup({});
  public formData: FormData = new FormData();

  protected disabledControls: string[] = [];

  public apiConstant = API_LIST;
  public constantList = CONST_LIST;
  public routesList = ROUTE_LIST;
  public errorMessage: string = '';


  protected errorHandler: ErrorHandlerService;
  protected localStorageService: LocalStorageService;
  protected sessionStorageService: SessionStorageService;
  protected router: Router;
  protected toastr: ToastrService;

  constructor(injector: Injector) {
    this.errorHandler = injector.get(ErrorHandlerService);
    this.localStorageService=injector.get(LocalStorageService);
    this.sessionStorageService = injector.get(SessionStorageService);
    this.router=injector.get(Router);
    this.toastr = injector.get(ToastrService);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  /**
   * the following function is used to validate all the form controls
   * @param formGroup
   */
  protected validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }



  /**
   * The following adds the respective control with its respective form validation
   * @param formElement
   * @param validations
   * @param disabled
   * @param formGroup
   */
  protected addFormControlWithValidations(formElement: string,
    validations: ValidatorFn[] = [],
    disabled = false,
    formGroup?: FormGroup): Promise<any> {
    return new Promise((resolve, reject) => {
      if (formGroup) {
        formGroup.addControl(formElement, new FormControl({ value: "", disabled: disabled }, validations));
        formGroup.updateValueAndValidity({ onlySelf: true });
        formGroup.markAsTouched({ onlySelf: true });
      } else {
        this.formGroup.addControl(formElement, new FormControl({ value: "", disabled: disabled }, validations));
        this.formGroup.updateValueAndValidity({ onlySelf: true });
        this.formGroup.markAsTouched({ onlySelf: true });
      }
      resolve(true);
    });
  }

  /**
   * The following adds the respective control with its respective form validation
   * @param formElement
   * @param validations
   * @param disabled
   * @param formGroup
   */
  protected removeFormControl(formElement: string, formGroup?: FormGroup): void {
    if (formGroup) {
      if (formGroup.get(formElement)) {
        formGroup.removeControl(formElement);
        formGroup.updateValueAndValidity({ onlySelf: true });
        formGroup.markAsTouched({ onlySelf: true });
      }
    } else {
      if (this.formGroup.get(formElement)) {
        this.formGroup.removeControl(formElement);
        this.formGroup.updateValueAndValidity({ onlySelf: true });
        this.formGroup.markAsTouched({ onlySelf: true });
      }
    }
  }

  /**
   * The following method is used to disable the respective form groups
   * @param {FormGroup[]} formGroupArray
   */
  protected disableForm(formGroupArray: FormGroup[]): void {
    // stopping emitting event
    for (const formGroup of formGroupArray) {
      formGroup.disable({ onlySelf: true, emitEvent: false });
    }
  }

  /**
   * The following method is used to enable the respective form group
   * @param {FormGroup[]} formGroupArray
   */
  protected enableForm(formGroupArray: FormGroup[]): void {
    // stopping emitting event
    for (const formGroup of formGroupArray) {
      formGroup.enable({ onlySelf: true, emitEvent: false });
    }
  }

  /**
   * The following method is used to disable the respective form control
   * @param {FormGroup} formGroup
   */
  protected disableFormControl(formGroup: FormGroup, controlName: string = ""): void {
    if (controlName && formGroup.controls[controlName]) {
      // stopping emitting event
      formGroup.controls[controlName].disable({ onlySelf: true, emitEvent: false });
    }
  }

  /**
   * The following method is used to enable the respective form control
   * @param {FormGroup} formGroup
   */
  protected enableFormControl(formGroup: FormGroup, controlName: string = ""): void {
    // stopping emitting event
    if (controlName && formGroup.controls[controlName]) {
      // stopping emitting event
      formGroup.controls[controlName].enable({ onlySelf: true, emitEvent: false });
    }
  }


  appendDisableControls(controlName: string): void {
    const hasControl = this.disabledControls.indexOf(controlName) > -1;
    if (!hasControl) {
      this.disabledControls.push(controlName);
    }
  }

  removeControlDisableControls(controlName: string): void {
    const idx = this.disabledControls.indexOf(controlName);
    if (idx > -1) {
      this.disabledControls.splice(idx, 1);
    }
  }

  protected showToastrSuccess(message) {
    //this.toastr.success(message, 'Success');
    Swal.fire({
      icon:'success',
      title:'Good',
      text:message,
    })
  }
  protected showToastrWarning(message){
    //this.toastr.warning(message,"Warning");
    Swal.fire({
      icon:'warning',
      title:'Warning...',
      text:message,
    })
  }
  protected showToastrInfo(message){
    //this.toastr.info(message,"Info");

    Swal.fire({
      icon:'info',
      title:'Info...',
      text:message,
    })
  }
  protected showToastrError(message){
    //this.toastr.info(message,"Error");
    Swal.fire({
      icon:'error',
      title:'Oops...',
      text:message,
    })
  }

  protected redirectToVendorList() {
    this.router.navigate([this.routesList.DASHBOARD]);
  }

  protected IsStatisActive(value){
    return value === 1;
  }

  protected FormateAmount(event:any){
    if(event.target.value < 0){
      event.target.value = 0;
    }else{
      event.target.value = Number(event.target.value).toFixed(2);
    }
  }

  protected PositiveNumberOnly(event: any){
    if(event.target.value < 0){
      event.target.value = 0;
    }
  }

}
