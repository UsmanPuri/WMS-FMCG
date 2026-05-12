import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { ModalManager } from "ngb-modal";
import {  Dispatch } from "../models/Dispatch";
import {  DispatchService } from "../services/dispatch-custom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: "wms-dispatch-custom-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/dispatch-custom-form.component.scss"],
})
export class DispatchCustomEditComponent extends BaseComponent {
  @ViewChild('AllModal') AllModal;
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings={};
  locationDropdownSettings={};
  palletDropdownSettings={};
  batchDropdownSettings={};
  private modalRef;
  status: boolean;
  dispatch: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedPickupOrder={};

  itemKeyPair: DropdownListDto[]=[];
  locationKeyPair: DropdownListDto[]=[];
  batchKeyPair: DropdownListDto[]=[];
  palletKeyPair: DropdownListDto[]=[];
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
  availableAmount: number;
  selectedLocation: any;
  selectedBatch: any;
  selectedPallet: any;
  RequiredQuantity: number;
  dropdownHideShow:boolean;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID:any;
  LogoPath: any;
  
  constructor(injector: Injector, private _dispatchService: DispatchService,
    private activeRoute: ActivatedRoute,private modalService: ModalManager,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.getById();
    this.CompanyInfo();
  }

  CompanyInfo(){
    this.CompanyID = this.localStorageService.getCompanyId()
    if (this.CompanyID ==1){
      this.CompanyName = "I-Logistics (Pvt.) Ltd";
      this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID ==2){
      this.CompanyName = "LaBaih";
      this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645"
      this.LogoPath = "assets/images/labaih-logo.png"
    }
    if (this.CompanyID == 3) {
      this.CompanyName = "I-Logistics (Pvt.) Ltd";
      this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 4) {
      this.CompanyName = "Maersk Warehousing and Distribution";
      this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775"
      this.LogoPath = "assets/images/Maersk_Logo.png"
    }
  }
  
  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let customerByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${Id}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          this.dispatch = res as Dispatch;
            console.log("dispatch")
            console.log( this.dispatch)
            debugger
            // this.dispatch["AML_DispatchDetail"].forEach(element=>{

            //     this.itemListToPost.push({
            //         ItemId: element["ItemId"],
            //         Quantity: element["Quantity"],
            //         Name: element["AML_ItemInformation"].Description + "|"+element["AML_ItemInformation"].Name,
                   
            //           Location:element["Location"],
            //           Batch:element["BatchNo"],
            //           PalletNo:element["PalletNo"],
            //       })

            // })
           
            this.getItemByCustomer(this.dispatch)
        
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
    this.addFormControlWithValidations("LocationId",[]);
    this.addFormControlWithValidations("BatchId",[]);
    this.addFormControlWithValidations("PalletId",[]);
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
    let apiAddress: string = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom + `${customerId}`;
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

  private getItemByCustomer(item:any){
    let searchItemForDispatchModel: any = {
      CustomerId:item["CustomerId"],
      PickupOrderId:item["PickupOrderId"],
    }

    let apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
    this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
      .subscribe(res => {
        this.retrivedItemListByPickupOrder = res as any[];
        console.log("Retrieved Item")
        console.log(this.retrivedItemListByPickupOrder);
        let temp:any[]=[];
        debugger
        this.retrivedItemListByPickupOrder.forEach(element => {
          let existing = temp.filter(x=>x.Value === element.ItemId
            && x.ParentReferenceId === element.Location)[0];
          if(!existing){
            temp.push({
              Value: element.ItemId,
              Text: element.ItemName,
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
      //this.getItemByCustomer();
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

  locationChange(event:any)
  {
    console.log(event)
    this.palletKeyPair=null;
    this.selectedPallet={};
    this.formGroup.get("PalletId").setValue('');
    this.batchKeyPair=null;
    this.selectedBatch={};
    this.formGroup.get("BatchId").setValue('');
    this.selectedLocation ={
      Value:event,
      Text:event
    }
    console.log(this.selectedLocation)
    let model ={
      ItemId :this.selectedItem["Value"],
      Location: event
    }
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH;
      this._dispatchService.getAll(customerByIdUrl,model)
        .subscribe(res => {
          this.batchKeyPair = res as DropdownListDto[];
       
      
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }
  batchChange(event:any)
  {
    this.palletKeyPair=null;
    this.selectedPallet={};
    this.formGroup.get("PalletId").setValue('');
    console.log(event)
    this.selectedBatch ={
      Value:event,
      Text:event
    }
    console.log(this.selectedBatch)
    let model ={
      ItemId :this.selectedItem["Value"],
      Location: this.selectedLocation["Value"],
      Batch: this.selectedBatch["Value"],

    }
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH_PALLET;
      this._dispatchService.getAll(customerByIdUrl,model)
        .subscribe(res => {
          this.palletKeyPair = res as DropdownListDto[];
       
      
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }
  palletChange(event:any)
  {
    console.log(event)
    this.formGroup.get('QtyAvailableToAdd').setValue("0");
    this.selectedPallet ={
      Value:event,
      Text:event
    }
    
    let model ={
      ItemId :this.selectedItem["Value"],
      Location: this.selectedLocation["Value"],
      Batch: this.selectedBatch["Value"],
      PalletNo: this.selectedPallet["Value"],
    }
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_QUANTITY;
      this._dispatchService.getAll(customerByIdUrl,model)
        .subscribe(res => {
          this.availableAmount = res as number;
        console.log(this.availableAmount)
        this.formGroup.get('QtyAvailableToAdd').setValue(this.availableAmount);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }

  itemChange(event:any){
    // this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
    // this.itemTempToAddIntoItemPostList["Location"]=event.Text.split('|')[1].trim();
    // this.formGroup.get("QtyAvailableToAdd")
    // .setValue(this.getItemAvailableQty(event.Value,event.Text.split('|')[1].trim()));
    this.selectedItem ={
      Value:event.Value,
      Text:event.Text
    }
    this.locationKeyPair=null;
    this.RequiredQuantity = this.retrivedItemListByPickupOrder.filter(a=> a.ItemId == event.Value)[0].Quantity;
    this.getLocationsByItemId(event.Value);


  }

  private getLocationsByItemId(itemId:any) {
   
    if(itemId){
      let customerByIdUrl: string = this.apiConstant.LOCATIONS_BY_ITEM_ID + `${itemId}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          this.locationKeyPair = res as DropdownListDto[];
        console.log(this.locationKeyPair)
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }
  itemDeSelect(){
    this.selectedItem={};
    this.itemTempToAddIntoItemPostList["ItemId"]=null;
    this.formGroup.get("QtyAvailableToAdd").setValue(0);
    this.formGroup.get('QtyToAdd').setValue(0);
  }

  quantityChange(event:any){
    let q = 0;
    this.itemListToPost.forEach(element=>{
      if(this.selectedItem["Value"]== element.ItemId)
      {
        q += element.Quantity;
      }
    })
    console.log(q)
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
    if((Number(event.target.value)+q) > Number(this.RequiredQuantity))
    {
      this.showToastrWarning("Quantity can not longer then "+this.RequiredQuantity);
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

  deleteFromitemListToPost(item:any)
  {
    this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1)
  }
  addItemIntoItemPostList() {
    debugger
    let locationInfo =this.selectedLocation["Text"];
    let batchInfo =this.selectedBatch["Text"];
    let palletInfo =this.selectedPallet["Text"];
      this.itemListToPost.push({
        ItemId: this.selectedItem["Value"],
        Quantity: this.formGroup.get('QtyToAdd').value,
        Name: this.selectedItem["Text"],
        //   UnitId:this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
        //     this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"].UOM,
        // Unit: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
        //   this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Unit"]["Title"],
          Location:locationInfo,
          Batch:batchInfo,
          PalletNo:palletInfo,
      })
      this.itemTempToAddIntoItemPostList={};
      this.formGroup.get("QtyToAdd").setValue('');
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("QtyAvailableToAdd").setValue('');
      this.formGroup.get("LocationId").setValue('');
      this.formGroup.get("BatchId").setValue('');
      this.formGroup.get("PalletId").setValue('');
      this.RequiredQuantity=null;
      this.selectedItem=null;
      this.selectedLocation=null;
    
  }


  public updateDispatch(formValue) {
    if (this.formGroup.valid) {
    //   if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
    //     this.showToastrWarning("Select Customer please.");
    //     return false;
    //   }
    //   if(!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]){
    //     this.showToastrWarning("Select Customer Order please.");
    //     return false;
    //   }
    //   if(this.retrivedItemListByPickupOrder.length <= 0){
    //     this.showToastrWarning("Add item please.");
    //     return false;
    //   }
      this.executeDispatchUpdate(formValue);
    }
  }

  private executeDispatchUpdate(formValue) {
    let dis: Dispatch = {
      //   Agent: formValue.Agent,
      //   DriverName: formValue.DriverName,
      //   GatePassNo: formValue.GatePassNo,
      //   PhoneNumber: formValue.PhoneNumber,
      //   Address: formValue.Address,
      //   DispatchDate: formValue.DispatchDate,
      CustomerId: this.dispatch["CustomerId"],
      PickupOrderId: this.dispatch["PickupOrderId"],
      //   CustomerId:this.selectedCustomer["Id"],
      //   PickupOrderId:this.selectedPickupOrder["Id"],
      DispatchId: this.dispatch["DispatchId"],
      DispatchDetails: this.itemListToPost,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_Customers: undefined,
      AML_PickupOrder: undefined,
      AML_Warehouse: undefined
    }
    console.log(dis)
    let apiUrl = this.apiConstant.DISPATCH_UPDATE+`/${this.dispatch.DispatchId}`;
    this.ngxService.start();
    this._dispatchService.update(apiUrl, dis)
      .subscribe(res => {
      
        //this.openModal();
         this.showToastrSuccess("Dispatch Update successfully");
        setTimeout(() => {
          this.redirectToDispatchCustomList();
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
  this.locationDropdownSettings={
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.batchDropdownSettings={
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.palletDropdownSettings={
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


  redirectToDispatchCustomList() {
    if(this.dropdownHideShow ==  true){
      this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
    }else {
      this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
    }
    // this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
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
