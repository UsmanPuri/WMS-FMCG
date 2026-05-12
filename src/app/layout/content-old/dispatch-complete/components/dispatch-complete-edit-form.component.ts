import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { ModalManager } from "ngb-modal";
import {  Dispatch } from "../models/Dispatch";
import {  DispatchCompleteService } from "../services/dispatch-complete.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-dispatch-complete-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/dispatch-complete-form.component.scss"],
})
export class DispatchCompleteEditFormComponent extends BaseComponent {
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings={};
  PickupOrderItemList: any[]=[];
  status: boolean;
  dispatch: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedPickupOrder={};
  dropdownHideShow:boolean;


  itemKeyPair: DropdownListDto[]=[];
  retrivedItemListByPickupOrder:any=[];
  itemListToPost: any[]=[];
  itemTempToAddIntoItemPostList={};
  selectedItem={};
  formType: any;

  constructor(injector: Injector, private _dispatchService: DispatchCompleteService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.getDispatchById();
  }



  private getDispatchById() {
    let dispatchId: string = this.activeRoute.snapshot.params['Id'];
    if(dispatchId){
      let dispatchByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${dispatchId}`;
      this._dispatchService.getData(dispatchByIdUrl)
        .subscribe(res => {
          this.dispatch = res as Dispatch;
         console.log(this.dispatch)
        
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
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("PickupOrderId", []);
    this.addFormControlWithValidations("CustomerId", []);
    this.addFormControlWithValidations("DispatchDate", []);
    this.addFormControlWithValidations("ItemId",[]);
    this.addFormControlWithValidations("QtyToAdd",[]);
    this.addFormControlWithValidations("PickupOrderId",[]);
    this.addFormControlWithValidations("Agent",[]);
    this.addFormControlWithValidations("DriverName",[]);
    this.addFormControlWithValidations("GatePassNo",[]);
    this.addFormControlWithValidations("PhoneNumber",[]);
    this.addFormControlWithValidations("Address",[]);
    this.addFormControlWithValidations("QtyAvailableToAdd",[]);
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(event:any){
    this.selectedCustomer={
      Id: event.Value,
      Name: event.Text
    };
    if(event.Value){
      this.getPickupOrderKeyPair(Number(event.Value));
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("PickupOrderId").setValue('');
      this.itemListToPost=[];
      this.itemTempToAddIntoItemPostList=[];
    }
  }

  PickupOrderChange(){

    
    let pickupOrder =this.formGroup.get("PickupOrderId").value;
    let SendObj: any = {
      Value: pickupOrder[0].Value,
      Text:pickupOrder[0].Text,
    }
   
    
    let apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
    this._dispatchService.getKeyPair(apiUrl, SendObj)
      .subscribe(res => {
        debugger
        this.PickupOrderItemList = res as any[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerDeSelect(){
    this.selectedCustomer={};
    this.selectedPickupOrder={};
    this.pickupOrderKeyPair=[];
    this.itemKeyPair=[];
    this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("PickupOrderId").setValue('');
    this.itemListToPost=[];
    this.itemTempToAddIntoItemPostList=[];
  }

  getPickupOrderKeyPair(customerId:number) {
    let dispatch: any = {
      CustomerId: customerId
    }

    let apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
    this._dispatchService.getKeyPair(apiUrl, dispatch)
      .subscribe(res => {
        this.pickupOrderKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }



  getItemAvailableQty(itemId: string, location: string) {
    let totalQty = 0;
    let data = this.retrivedItemListByPickupOrder
      .filter(x => x.ItemInformationId === itemId && x.Location === location);
    if (data && data.length > 0) {
      data.forEach(element => {
        totalQty = (totalQty + Number(element.Quantity));
      });
    }
    return totalQty;
  }

  addItemIntoItemPostList() {
    if (this.itemTempToAddIntoItemPostList && 
      this.itemTempToAddIntoItemPostList["ItemId"] != ''
      && Number(this.itemTempToAddIntoItemPostList["Quantity"] != 0)) {
      this.itemListToPost = this.itemListToPost.filter(x=>x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"]);
      this.itemListToPost.push({
        ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
        Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
        Name: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Name"],
          UnitId:this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"].UOM,
        Unit: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Unit"]["Title"],
          Location:this.itemTempToAddIntoItemPostList["Location"],
          Batch: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["Batch"]
      })
      this.itemTempToAddIntoItemPostList={};
      this.formGroup.get("QtyToAdd").setValue('');
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("QtyAvailableToAdd").setValue('');
    }
  }


  public createDispatch(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      // if(!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]){
      //   this.showToastrWarning("Select Customer Order please.");
      //   return false;
      // }
      // if(this.retrivedItemListByPickupOrder.length <= 0){
      //   this.showToastrWarning("Add item please.");
      //   return false;
      // }
      this.executeDispatchCreation(formValue);
    }
  }

  private executeDispatchCreation(formValue) {
    let dispatch: Dispatch = {
      Agent: formValue.Agent,
      DriverName: formValue.DriverName,
      GatePassNo: formValue.GatePassNo,
      PhoneNumber: formValue.PhoneNumber,
      Address: formValue.Address,
      DispatchDate: formValue.DispatchDate,
      CustomerId: this.selectedCustomer["Id"],
      PickupOrderId: this.selectedPickupOrder["Id"],
      DispatchDetails: this.PickupOrderItemList,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_PickupOrder: undefined,
      AML_Warehouse: undefined
    }
debugger
    let apiUrl = this.apiConstant.DISPATCH_CONFIRMPICKUP;
    this.ngxService.start();
    this._dispatchService.create(apiUrl, dispatch)
      .subscribe(res => {
        this.showToastrSuccess("Dispatch created successfully");
        setTimeout(() => {
          this.redirectToDispatchList();
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
   
private dropdownSettings(){
  this.customerDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.pickupOrderDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.itemDropdownSettings={
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
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


  redirectToDispatchList() {
    this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
  }
  

}
