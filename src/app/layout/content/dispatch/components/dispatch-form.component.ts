import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { ModalManager } from "ngb-modal";
import {  Dispatch } from "../models/Dispatch";
import {  DispatchService } from "../services/dispatch.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: "wms-dispatch-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/dispatch-form.component.scss"],
})
export class DispatchFormComponent extends BaseComponent {
  @ViewChild('AllModal') AllModal;
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings={};
  private modalRef;
  status: boolean;
  dispatch: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedPickupOrder={};

  itemKeyPair: DropdownListDto[]=[];
  retrivedItemListByPickupOrder:any=[];
  itemListToPost: any[]=[];
  itemTempToAddIntoItemPostList={};
  selectedItem={};
  returnDispatch: Dispatch;
  Address: any;
  PhoneNumber: any;
  GatePassNo: any;
  Agent: any;
  pickupOrder: PickupOrder;

  constructor(injector: Injector, private _dispatchService: DispatchService,
    private activeRoute: ActivatedRoute,private modalService: ModalManager,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
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

  getPickupOrderKeyPair(customerId:number) {
    let apiAddress: string = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerId + `${customerId}`;
    this._dispatchService.getData(apiAddress)
      .subscribe(res => {
        this.pickupOrderKeyPair = res as DropdownListDto[];
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

  private getItemByCustomer(){
    let searchItemForDispatchModel: any = {
      CustomerId:this.selectedCustomer["Id"],
      PickupOrderId:this.selectedPickupOrder["Id"],
    }

    let apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
    this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
      .subscribe(res => {
        this.retrivedItemListByPickupOrder = res as any[];
        console.log(this.retrivedItemListByPickupOrder);
        debugger
        let temp:any[]=[];
        this.retrivedItemListByPickupOrder.forEach(element => {
          let existing = temp.filter(x=>x.Value === element.ItemId
            && x.ParentReferenceId === element.Location)[0];
          if(!existing){
            temp.push({
              Value: element.ItemId,
              Text: element.ItemName+"   |   "+element.Location,
              ParentReferenceId:element.Location
            });
          }
        
        });
        this.itemKeyPair=temp;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  PickupOrderChange(event: any) {
    this.selectedPickupOrder = {
      Id: event.Value,
      Name: event.Text
    };
    if(this.selectedCustomer && this.selectedCustomer["Id"]
    && this.selectedPickupOrder && this.selectedPickupOrder["Id"]){
      this.getItemByCustomer();
      this.getPickupOrderById();
    }
  
  }
  private getPickupOrderById() {
    let PickupOrderId=this.selectedPickupOrder["Id"];
    if(PickupOrderId){
      let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${PickupOrderId}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          this.pickupOrder = res as PickupOrder;
        console.log(this.pickupOrder)
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }
  pickupOrderDeSelect() {
    this.selectedPickupOrder = {};
  }

  itemChange(event:any){
    this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
    this.itemTempToAddIntoItemPostList["Location"]=event.Text.split('|')[1].trim();
    this.formGroup.get("QtyAvailableToAdd")
    .setValue(this.getItemAvailableQty(event.Value,event.Text.split('|')[1].trim()));
  }
  itemDeSelect(){
    this.selectedItem={};
    this.itemTempToAddIntoItemPostList["ItemId"]=null;
    this.formGroup.get("QtyAvailableToAdd").setValue(0);
    this.formGroup.get('QtyToAdd').setValue(0);
  }

  quantityChange(event:any){
    if(!this.selectedItem){
      this.showToastrWarning('Select item please');
      event.target.value='';
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      return false;
    }    
    if(Number(event.target.value) <= 0){
      this.showToastrWarning("Invalid Quantity");
      event.target.value='';
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      return false;
    }
    if(Number(event.target.value) > Number(this.formGroup.get("QtyAvailableToAdd").value)){
      this.showToastrWarning("Quantity can not longer then "+this.formGroup.get("QtyAvailableToAdd").value);
      event.target.value='';
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      return false;
    }
    this.itemTempToAddIntoItemPostList["Quantity"]=Number(event.target.value);
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
      if(!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]){
        this.showToastrWarning("Select Customer Order please.");
        return false;
      }
      if(this.retrivedItemListByPickupOrder.length <= 0){
        this.showToastrWarning("Add item please.");
        return false;
      }
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
      CustomerId:this.selectedCustomer["Id"],
      PickupOrderId:this.selectedPickupOrder["Id"],
      DispatchDetails:this.retrivedItemListByPickupOrder,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }
    console.log(dispatch)
    let apiUrl = this.apiConstant.DISPATCH_CREATE;
    this.ngxService.start();
    this._dispatchService.create(apiUrl, dispatch)
      .subscribe(res => {
        this.returnDispatch = res as Dispatch;
        console.log(this.returnDispatch);
        this.openModal();
         this.showToastrSuccess("Dispatch created successfully");
        // setTimeout(() => {
        //   this.redirectToDispatchList();
        // }, 2000);
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
    this.router.navigate([this.routesList.DISPATCH_LISTING]);
  }

  openModal() {
   
     this.Agent =this.formGroup.get("Agent").value;
     this.GatePassNo =this.formGroup.get("GatePassNo").value;
     this.PhoneNumber =this.formGroup.get("PhoneNumber").value;
     this.Address =this.formGroup.get("Address").value;
    

     this.modalRef = this.modalService.open(this.AllModal, {
       size: "lg",
     modalClass: '',
     hideCloseButton: true,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
       backdropClass: "modal-backdrop",
       windowClass: 'modal-xl'
     })
   }

}
