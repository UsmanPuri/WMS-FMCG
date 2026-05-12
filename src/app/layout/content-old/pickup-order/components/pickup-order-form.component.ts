import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  PickupOrder } from "../models/PickupOrder";
import {  PickupOrderService } from "../services/pickup-order.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrderChild } from "../models/PickupOrderChild";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from '@angular/common/http';
import { t } from "@angular/core/src/render3";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-pickup-order-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/pickup-order-form.component.scss"],
})
export class PickupOrderFormComponent extends BaseComponent {
  @ViewChild('servicePicked') servicePicked;
  customerDropdownSettings = {};
  distributorDropdownSettings = {};
  cityDropdownSettings = {};
  itemDropdownSettings={};
  serialDropdownSettings={};
  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouse = {};
  BTN=false;
  status: boolean;
  hideshow:boolean;
  SKUCode:string;
  pickupOrder: PickupOrder;
  customerKeyPair: DropdownListDto[];
  distributorKeyPair: DropdownListDto[];
  cityKeyPair: DropdownListDto[];
  SerialKeyPair:any= [];
  selectedCustomer={};
  selectedDistributor={};
  selectedCity={};
  itemKeyPair: DropdownListDto[]=[];
  retrivedItemListByCustomer:any=[];
  itemListToPost: any[]=[];
  itemTempToAddIntoItemPostList={};
  shipmentNoteChildRow :any = {};
  shipmentNoteChilds:any = [];
  formMode="customer";
  dropdownHideShow:boolean;
  ToWarehouseKeyPair: DropdownListDto[];
  ToWarehouseDropdownSettings = {};
  selectedToWarehouse = {};
  SKUBalance:any;
  PickupMethod:any;
  LIBatch:any;
  LIStatus:any;
  LIInbound:any;
  distributorDetail:any;
  TotalQtyDispatch: number = 0;
  BTNStatus: boolean = false;

  constructor(injector: Injector, private _pickupOrderService: PickupOrderService,
    private activeRoute: ActivatedRoute,private exporterService: ExporterService,
    private envUrl: EnvironmentUrlService,private http: HttpClient, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.hideshow=false;
    this.dropdownHideShow = this.router.url.includes("customer");
    this.radioChange(this.dropdownHideShow);
    this.addFormValidations();
    this.dropdownSettings();
    this.getCityKeyPair();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
    this.getWarehouseKeyPairAll();
  }
  onSelectToWarehouse(item: any, dropDownName: string) {
    this.selectedToWarehouse = {
      Id: item.Value,
      Name: item.Text
    };
  }
  onDeSelectToWarehouse(dropDownName: string) {
    this.selectedToWarehouse = {};
  }
  
  radioChange(isCustomer:boolean)
  {
    
    this.formMode = isCustomer == true ? "customer" : "transfer";
   // this.dropdownHideShow =!this.dropdownHideShow 
    if(this.dropdownHideShow===true)
    {
      //this.dropdownHideShow=false;
      this.selectedToWarehouse = {};
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
    this.addFormControlWithValidations("CustomerOrderNo",requiredValidation);
    this.addFormControlWithValidations("LoadingDate", []);
    this.addFormControlWithValidations("OrderDate", requiredValidation);
    //this.addFormControlWithValidations("PCRNo", requiredValidation);
    //this.addFormControlWithValidations("IRNo", []);
    //this.addFormControlWithValidations("Plant", requiredValidation);
    //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
    this.addFormControlWithValidations("WarehouseId", requiredValidation);
    this.addFormControlWithValidations("ToWarehouseId");
    this.addFormControlWithValidations("ContactPerson", []);
   // this.addFormControlWithValidations("Consignee", []);
    //this.addFormControlWithValidations("ConsigneeContact", []);
    this.addFormControlWithValidations("Address", []);
    this.addFormControlWithValidations("CityId", []);
    //this.addFormControlWithValidations("State", []);
    //this.addFormControlWithValidations("Country", []);
    this.addFormControlWithValidations("Telephone", []);
    this.addFormControlWithValidations("ItemId",[]);
    this.addFormControlWithValidations("QtyToAdd",[]);
    this.addFormControlWithValidations("PickupMethod",requiredValidation);
    this.addFormControlWithValidations("OrderDate",[]);
    this.addFormControlWithValidations("waybill",[]);
    this.addFormControlWithValidations("SNno",[]);
    this.addFormControlWithValidations("DestinationAddress",[]);
    this.addFormControlWithValidations("ICareRef",[]);
    this.addFormControlWithValidations("SlaMode",[]);
  }
  PickupMethodChange()
  {
    debugger
    this.PickupMethod= this.formGroup.get('PickupMethod').value;
    if(this.PickupMethod=="5")
    {
      this.hideshow = true;
    }
    else{ this.hideshow = false;}

  }
  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getDistributorKeyPair(customerId) {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CustomerId : customerId,
    }
    let apiAddress: string = this.apiConstant.DISTRIBUTOR_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.distributorKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getCityKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CITY_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.cityKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getSerialKeyPair(param:any) {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ItemId:param,
      WarehouseId:this.selectedWarehouse['Id'],
      PageRef:'CreateOrder'
    }
    this.SKUCode = param;
    //let apiAddress: string = this.apiConstant.Serial_KEYPAIR;
    let apiAddress: string = this.apiConstant.GET_LOCATION_BATCH;
    this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.shipmentNoteChilds = res ;
        let temp:any[]=[];
        this.shipmentNoteChilds.forEach(element => {
         // if(!temp.filter(x=>x.Value === element.ItemInformationId)[0]){
            temp.push({
              Value: element.SNno+":"+element.Status+":"+element.BatchCode+":"+element.Balance+":"+element.TransitQuantity+":"+element.InboundPool,
              Text: "Batch:" + element.BatchCode+" | Status:"+element.Status+" | SN#:"+ element.SNno +" | Stock:"+ element.Balance +" | In-Transit:"+ element.TransitQuantity +" | InboundPool: "+ element.InboundPool
            });
         // }
        
        });
        this.SerialKeyPair = temp;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getSerialKeyPairSN(param:any) {
    debugger
    this.SKUBalance = Number(param.split(":")[3]) - Number(param.split(":")[4]);
    
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      SNno:(param.split(":")[0]),
      ItemId:this.SKUCode,
      Batch:(param.split(":")[2]),
      Status:(param.split(":")[1]),
      WarehouseId: this.selectedWarehouse["Id"]
    }
    let apiAddress: string = this.apiConstant.Serial_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.shipmentNoteChilds = res ;
        let temp:any[]=[];
        this.shipmentNoteChilds.forEach(element => {
            temp.push({
              Value: element.SNno,
              Text: "Batch:" + element.BatchCode+" | Status:"+element.Status+" | SN#:"+ element.SNno
            });
            let row = this.shipmentNoteChilds.filter(x=>x.SNno==element.SNno);
            this.shipmentNoteChildRow = row[0];
        });
        
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
      this.getDistributorKeyPair(event.Value);
    }
  }

  distributorChange(event:any){
    this.selectedDistributor={
      Id: event.Value,
      Name: event.Text
    };
    this.BTNStatus = true;
    if(event.Value){
      this.getDistributorKeyPairId(event.Value);
    }
  }
  DeSelectdistributorChange(event:any){
    debugger
    this.BTNStatus = false;
    this.formGroup.get('ContactPerson').setValue('');
    this.formGroup.get('Address').setValue('');
    this.formGroup.get('Telephone').setValue('');
  }

  getDistributorKeyPairId(id) {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      DistId: id,
    }
    let apiAddress: string = this.apiConstant.DISTRIBUTOR_DETAIL;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.distributorDetail = res as any;
        debugger
        this.formGroup.get('ContactPerson').setValue(this.distributorDetail[0].ContactPerson);
        this.formGroup.get('Address').setValue(this.distributorDetail[0].DistAddress + ' - '+ this.distributorDetail[0].AML_City['Name']);
        this.formGroup.get('Telephone').setValue(this.distributorDetail[0].Mobile);
        this.selectedCity["Id"]=this.distributorDetail[0].CityId;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  private getItemByCustomer(customerId){
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      CustomerId: customerId,
      WarehouseId:this.selectedWarehouse['Id']
    }
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_GetItemForOrder;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.retrivedItemListByCustomer = res as any[];
        console.log("Item")
        console.log(this.retrivedItemListByCustomer)
        let temp:any[]=[];
        debugger
        this.retrivedItemListByCustomer.forEach(element => {
          if(!temp.filter(x=>x.Value === element.ItemId)[0]){
            temp.push({
              Value: element.ItemId,
              Text: element.Description+" | "+element.Name,
              ParentReferenceId:null
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

  cityChange(event:any){
    this.selectedCity={
      Id: event.Value,
      Name: event.Text
    };
  }

  itemChange(event:any){
    debugger
    this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
    this.formGroup.get('SNno').setValue('');
    this.getSerialKeyPair(event.Value);
  }
  serialChange(event:any){
    debugger
    this.itemTempToAddIntoItemPostList["SNno"]=(event.Value.split(":")[0]);
    this.formGroup.get('QtyToAdd').setValue('1');
    this.itemTempToAddIntoItemPostList["Quantity"]=1;
    this.itemTempToAddIntoItemPostList["Status"]=(event.Value.split(":")[1]);
    this.itemTempToAddIntoItemPostList["Batch"]=(event.Value.split(":")[2]);
    this.itemTempToAddIntoItemPostList["Location"]=(event.Value.split(":")[3]);
    this.itemTempToAddIntoItemPostList["PalletNo"]=(event.Value.split(":")[4]);
    this.itemTempToAddIntoItemPostList["InboundPool"]=(event.Value.split(":")[5]);
    this.LIBatch=(event.Value.split(":")[2]);
    this.LIStatus=(event.Value.split(":")[1]);
    this.LIInbound=(event.Value.split(":")[5]);
    this.getSerialKeyPairSN(event.Value);
    
   
  }
  itemDeSelect(){
    this.itemTempToAddIntoItemPostList["ItemId"]=null;
    this.formGroup.get('SNno').setValue('');
    this.SerialKeyPair=null;
    this.SKUBalance = '';
    this.LIBatch='';
    this.LIInbound='';
    this.LIStatus='';
  }
  serialDeSelect(){
    this.itemTempToAddIntoItemPostList["SNno"]=null;
    this.formGroup.get('QtyToAdd').setValue('');
    this.SKUBalance = '';
    this.LIBatch='';
    this.LIInbound='';
    this.LIStatus='';
  }

  quantityChange(event:any){
    if(Number(event.target.value) <= 0){
      this.showToastrWarning("Invalid Quantity");
      event.target.value='';
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      return false;
    }
    this.itemTempToAddIntoItemPostList["Quantity"]=Number(event.target.value);
  }

  addItemRelOrd(event:any, itemId:string){
    let model = this.itemListToPost.filter(x=>x.ItemId === itemId)[0];
    if(model){
      model.RelOrd=event.target.value;
    }
  }

  addItemIntoItemPostList() {
    debugger

    var Flag = 'False';
    this.itemListToPost.forEach(element =>{
      if(element.SystemId===this.itemTempToAddIntoItemPostList["ItemId"] && element.SNno === "" && element.BatchID === this.itemTempToAddIntoItemPostList["Batch"])
      {
        Flag= 'True' ;
        this.showToastrWarning("Same Batch with Non-SN item already push in list");
      }
      else if(element.SystemId===this.itemTempToAddIntoItemPostList["ItemId"] && element.SNno === this.itemTempToAddIntoItemPostList["SNno"])
      {
        if (element.SNno != "" && element.SNno!=" "){
          Flag= 'True' ;
          this.showToastrWarning("Same SKU with SN# already push in list");
        }
      }
    })
  if (Flag !='True'){
    if (this.formGroup.get('QtyToAdd').value == null || this.formGroup.get('QtyToAdd').value == 0){
      this.showToastrWarning("Select Insert Valid Quantity.");
    }
    // else if (this.formGroup.get('QtyToAdd').value> this.SKUBalance){
    //   this.showToastrWarning("Given Quantity is greater than Available Stock");
    // }
    else if ( this.itemTempToAddIntoItemPostList["ItemId"] != null
                                          || this.itemTempToAddIntoItemPostList["Quantity"] !== 0
                                          || this.formGroup.get('QtyToAdd') !== null) 
    {
     // this.itemListToPost = this.itemListToPost.filter(x=>x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"] && x.SNno !== this.itemTempToAddIntoItemPostList["SNno"]);
      this.itemListToPost.push({
        SystemId: this.itemTempToAddIntoItemPostList["ItemId"],
        Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
        ItemSKU:this.retrivedItemListByCustomer.filter(x => x.ItemId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["Description"],
        Name: this.retrivedItemListByCustomer.filter(x => x.ItemId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["Name"],
        UnitId:this.retrivedItemListByCustomer.filter(x => x.ItemId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["UOM"],
        Unit: this.retrivedItemListByCustomer.filter(x => x.ItemId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["Title"],
          RelOrd:'',
        SNno:this.itemTempToAddIntoItemPostList["SNno"],
        BatchID:this.itemTempToAddIntoItemPostList["Batch"],
        Status:this.itemTempToAddIntoItemPostList["Status"],
        DestinationAddress:this.formGroup.get('DestinationAddress').value,
        ICareRef:this.formGroup.get('ICareRef').value,
        SlaMode:this.formGroup.get('SlaMode').value,
        InboundPool:this.itemTempToAddIntoItemPostList["InboundPool"]
        
      })
      this.qtyCount();
    this.itemTempToAddIntoItemPostList["Quantity"]=0;
    this.formGroup.get("QtyToAdd").setValue('');
    this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("DestinationAddress").setValue('');
    this.formGroup.get("ICareRef").setValue('');
    this.formGroup.get("SlaMode").setValue('');
    this.formGroup.get("SNno").setValue('');
    this.SKUBalance = '';
    this.LIBatch='';
    this.LIInbound='';
    this.LIStatus='';
    }
  }
  }

  public createPickupOrder(formValue) {
    debugger
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      // if(!this.selectedCity || !this.selectedCity["Id"]){
      //   this.showToastrWarning("Select City Please.");
      //   return false;
      // }
      if(!this.selectedWarehouse || !this.selectedWarehouse["Id"]){
        this.showToastrWarning("Select Warehouse Please.");
        return false;
      }
      if(!this.PickupMethod){
        this.showToastrWarning("Select Pickup Method Please.");
        return false;
      }
      
      if(this.itemListToPost.length <= 0){
        this.showToastrWarning("Add item please.");
        return false;
      }
      this.executePickupOrderCreation(formValue);
    }
  }

  private executePickupOrderCreation(formValue) {
    let order: PickupOrder = {
      LoadingDate: formValue.LoadingDate,
      PCRNo: formValue.PCRNo,
      IRNo: formValue.IRNo,
      Plant: formValue.Plant,
      WarehouseTo: this.selectedToWarehouse["Id"],
      ContactPerson: formValue.ContactPerson,
      Consignee: formValue.Consignee,
      ConsigneeContact: formValue.ConsigneeContact,
      Address: formValue.Address,
      PickupMethod: formValue.PickupMethod,
      State: formValue.State,
      Country: formValue.Country,
      Telephone: formValue.Telephone,
      CustomerOrderNo: formValue.CustomerOrderNo,
      CustomerId: this.selectedCustomer["Id"],
      DistId:this.selectedDistributor["Id"],
      CityId: this.selectedCity["Id"],
      PickupOrderChilds: this.itemListToPost,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      WarehouseId: this.selectedWarehouse["Id"],
      OriginWarehouse: this.selectedWarehouse["Name"],
      waybill: formValue.waybill,
      OrderDate: formValue.OrderDate,
      AML_Customers: undefined,
      AML_Warehouse: undefined
    }
    console.log(order)
    let apiUrl = this.apiConstant.PICKUP_ORDER_CREATE;
    this._pickupOrderService.create(apiUrl, order)
      .subscribe(res => {
        if(this.dropdownHideShow==true)
        {
          this.showToastrSuccess("Pickup order successfully");
        }else
        {
          this.showToastrSuccess("Transfer order successfully");
        }
       
        setTimeout(() => {
          this.redirectToPickupOrderList();
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
  this.distributorDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.cityDropdownSettings = {
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
  this.serialDropdownSettings={
    idField: 'Value',
    idField2: 'Value2',
    idField3: 'Value3',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.warehouseDropdownSettings={
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.ToWarehouseDropdownSettings={
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


  redirectToPickupOrderList() {
    //debugger
    if(this.dropdownHideShow ==  true){
      this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
    }else {
      this.router.navigate([this.routesList.PICKUP_TRANSFER_ORDER_LISTING]);
    }
  }

  onSelect(item: any, dropDownName: string) {
    this.selectedWarehouse = {
      Id: item.Value,
      Name: item.Text
    };
    this.getItemByCustomer(this.selectedCustomer['Id']);
  }

  onDeSelect(dropDownName: string) {
    this.selectedWarehouse = {};
  }

  getWarehouseKeyPairAll() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      // LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : this.dropdownHideShow != true ? true : false
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.ToWarehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : this.dropdownHideShow != true ? true : false
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  deleteFromitemListToPost(item:any)
  {
    this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1)
    this.qtyCount();
  }

  public exportServiceAsExcel() {
   
    this.itemListToPost.push({
      SystemId: '',
      ItemSKU: '',
      Name: '',
      UnitId: '',
      Unit: '',
      Quantity: '',
      // SNno: '',
      BatchID: '',
      Status:'',
      // DestinationAddress: '',
      // ICareRef: '',
      // SlaMode:'',
      // InboundPool:'',
    })
    this.exporterService.exportToExcel(this.itemListToPost, 'Orders');
    this.itemListToPost = [];
    }
    qtyCount(){
      debugger
      this.TotalQtyDispatch = 0;
      this.itemListToPost.forEach(element => {
        this.TotalQtyDispatch += element.Quantity;
        //this.TotalWeightInbound += Quantity;
      });
    }
    onServicePicked() {
      this.ngxService.start();
      const formData = new FormData();
      //formData.append('ContractId', this.selectedContract.toString());
      formData.append('CompanyId', this.localStorageService.getCompanyId());
      formData.append('CustomerId', this.selectedCustomer['Id'].toString());
      formData.append('WarehouseId', this.selectedWarehouse['Id'].toString());
      formData.append('file', this.servicePicked.nativeElement.files[0]);
 
     if (formData) {
       this.uploadFile(formData)
       .subscribe(msg => {
           this.itemListToPost = msg as any[];
           this.ngxService.stop();
           this.itemListToPost.forEach(element =>{
            debugger
            this.qtyCount();
            if(element.SystemId==="Invalid SKU")
            {
                this.BTN = true;
            }
           },
           (error) => {
            this.ngxService.stop();
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
          
         }
       );
     }
     
   }

   SONODuplicateChk(){
    debugger
    const SONODuplicate= this.formGroup.get('CustomerOrderNo').value;
    if(SONODuplicate!=null){
      let obj: any = {
        SnNo: SONODuplicate,
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId()
      }
      let apiUrl = this.apiConstant.CHECK_DUPLICATE_SONO;
      this._pickupOrderService.create(apiUrl, obj)
        .subscribe(res => {
          // debugger
          let isExist = res;
          if (isExist) {
            this.showToastrError("Customer Order No # Already Available.");
            this.formGroup.get('CustomerOrderNo').setValue('');
          }
  
        },
          (error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
        )
    }
    }

   uploadFile(formData: FormData) {
    if (!formData) { return; }
    let apiUrl = "/File/UploadPickupOrder";
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }

}
