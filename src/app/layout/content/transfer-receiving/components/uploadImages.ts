import { Component, Injector, ViewChild, Input, OnInit,  Injectable } from "@angular/core";

import { BaseComponent } from "src/app/helpers/components/base.component";
import { FileItem, HttpClientUploadService, UploadEndPoint } from '@wkoza/ngx-upload';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { ValidatorFn, Validators } from "@angular/forms";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { isComponent } from "@angular/core/src/render3/instructions";
import { url } from "inspector";

import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";

@Component({
  selector: "genx-job-executed-documents-form",
  templateUrl: "../templates/images-upload.component.html",
  styleUrls: ["../styles/transfer-receiving-form.component.scss"],
})
export class ImageUploadComponent extends BaseComponent {
  @ViewChild('ourForm') ourForm: any;

  customerDropdownSettings = {};
  contractDropdownSettings = {};
  jobDropdownSettings = {};
  selectedJobId: any;
  selectedCustomer = {};
  selectedContract = {};
  customerKeyPair: DropdownListDto[] = [];
  contractKeyPair: DropdownListDto[] = [];
  jobKeyPair: DropdownListDto[] = [];
  public jobList: any[] = [];
  // Our future instance of DataTable
  dataTable: any;

  constructor(public uploader: HttpClientUploadService, injector: Injector,
    private envUrl: EnvironmentUrlService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();


    this.uploader.queue = [];

    this.uploader.onCancel$.subscribe((data: FileItem) => {
      console.log('file canceled: ' + data.file.name);
    });

    this.uploader.onProgress$.subscribe((data: any) => {
      console.log('upload file in progree: ' + data.progress);
    });

    this.uploader.onSuccess$.subscribe((data: any) => {
      console.log(`upload file successful:  ${data.item} ${data.body} ${data.status} ${data.headers}`);
    });

    this.uploader.onBeforeUploadItem$.subscribe((data: FileItem) => {
      const formData = new FormData();
      formData.append('FileContractId', this.selectedContract.toString());
      formData.append('FileJobId', this.selectedJobId);
      formData.append('FileCustomerId', this.selectedCustomer.toString());
      data.formData = formData;
    });
  }



  upload(item: FileItem) {
    /*  item.upload({
       method: 'POST',
       url: 'api/file/upload',
     }); */
  }

  makeThumbnail(item: FileItem) {
    const reader = new FileReader();
    // read the image file as a data URL.
    reader.readAsDataURL(item.file);
  }

  public createFile(fileFormValue) {
    let apiUrl = this.apiConstant.FILE_UPLOAD;
    let url = this.envUrl.urlAddress + apiUrl;
    this.uploader.uploadAll({
      method: 'POST',
      url: url
    });
    this.showToastrSuccess('Job executed Documents created successfully');
    setTimeout(() => {
      this.redirectToJobExecuted();
    }, 2000);
  }
  redirectToJobExecuted() {
    this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
  }

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("CustomerId", requiredValidation);
    this.addFormControlWithValidations("ContractId", requiredValidation);
    this.addFormControlWithValidations("JobId", requiredValidation);
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

}
