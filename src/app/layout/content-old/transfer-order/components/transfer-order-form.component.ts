import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { HttpClient } from '@angular/common/http';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { TransferOrderService } from "../services/transfer-order.service";
import { ValidatorFn, Validators } from "@angular/forms";

@Component({
    selector: "wms-transfer-order-form",
    templateUrl: "../templates/form.component.html",
    styleUrls: ["../styles/transfer-order-form.component.scss"],
  })
  export class TransferOrderFormComponent extends BaseComponent {
    @ViewChild('servicePicked') servicePicked;
    FromWarehouseKeyPair: DropdownListDto[];
    ToWarehouseKeyPair: DropdownListDto[];
    customerKeyPair: DropdownListDto[];
    FromWarehouseDropdownSettings = {};
    customerDropdownSettings = {};
    itemDropdownSettings ={};
    ToWarehouseDropdownSettings = {};
    itemTempToAddIntoItemPostList={};
    selectedFromWarehouse = {};
    selectedToWarehouse = {};
    selectedCustomer={};
    itemKeyPair: DropdownListDto[]=[];
    retrivedItemListByCustomer:any=[];
    hideshow:boolean;
    shipmentNoteChilds:any = [];
    serialDropdownSettings={};
    itemListToPost: any[]=[];
    shipmentNoteChildRow :any = {};
    SerialKeyPair:any= [];
    BTN=false;
    constructor(injector: Injector,
        private activeRoute: ActivatedRoute,private exporterService: ExporterService,private _transferOrderServvice: TransferOrderService,private envUrl: EnvironmentUrlService,private http: HttpClient) {
        super(injector);
  }
  ngOnInit() {
    //this.hideshow=false;
     this.addFormValidations();
     this.dropdownSettings();
    // this.getCityKeyPair();
     this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
  }
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    //this.addFormControlWithValidations("PickupOrderId", []);
    this.addFormControlWithValidations("CustomerId", []);
    this.addFormControlWithValidations("TransferOrderNo",requiredValidation);
    this.addFormControlWithValidations("LoadingDate", []);
    //this.addFormControlWithValidations("PCRNo", requiredValidation);
    //this.addFormControlWithValidations("IRNo", []);
    //this.addFormControlWithValidations("Plant", requiredValidation);
    //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
    this.addFormControlWithValidations("FromWarehouseId", requiredValidation);
    this.addFormControlWithValidations("ToWarehouseId", requiredValidation);
    //this.addFormControlWithValidations("ContactPerson", []);
   // this.addFormControlWithValidations("Consignee", []);
    //this.addFormControlWithValidations("ConsigneeContact", []);
    //this.addFormControlWithValidations("Address", []);
    //this.addFormControlWithValidations("CityId", []);
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
  

  
  public createTransferOrder(formValue) {
    if (this.formGroup.valid) {
      // if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
      //   this.showToastrWarning("Select Customer please.");
      //   return false;
      // }
      // if(!this.selectedCity || !this.selectedCity["Id"]){
      //   this.showToastrWarning("Select City please.");
      //   return false;
      // }
      if(!this.selectedFromWarehouse || !this.selectedFromWarehouse["Id"]){
        this.showToastrWarning("Select From Warehouse please.");
        return false;
      }
      if(!this.selectedToWarehouse || !this.selectedToWarehouse["Id"]){
        this.showToastrWarning("Select To Warehouse please.");
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
    let order = {
      TransferOrderNo: formValue.TransferOrderNo,
      LoadingDate: formValue.LoadingDate,
      OrderDate:formValue.OrderDate,
      WarehouseFrom:this.selectedFromWarehouse["Id"],
      WarehouseTo:this.selectedToWarehouse["Id"],
      PickupMethod:formValue.PickupMethod,
      transferOrderChilds:this.itemListToPost,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }
debugger
    let apiUrl = this.apiConstant.Transfer_ORDER_CREATE;
    this._transferOrderServvice.create(apiUrl, order)
      .subscribe(res => {
        this.showToastrSuccess("Transfer order successfully");
        setTimeout(() => {
          this.redirectToTransferOrderList();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
  addItemIntoItemPostList() {
    debugger
    if (this.itemTempToAddIntoItemPostList && this.itemTempToAddIntoItemPostList["ItemId"] != null
    && this.itemTempToAddIntoItemPostList["Quantity"] !== '0') {
      this.itemListToPost = this.itemListToPost.filter(x=>x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"]);
    
      if(this.hideshow)
      {
        this.itemListToPost.push({
          ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
          Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
          Name: this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["Description"] +" | "+
            this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
              this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["Name"],
            UnitId:this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
              this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"].UOM,
          Unit: this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["AML_Units"]["Title"],
            RelOrd:'',
            SNno:this.itemTempToAddIntoItemPostList["SNno"],
            DestinationAddress:this.formGroup.get('DestinationAddress').value,
            ICareRef:this.formGroup.get('ICareRef').value,
            SlaMode:this.formGroup.get('SlaMode').value,
            GatePass:this.shipmentNoteChildRow.GatePass,
            ServiceRequest:this.shipmentNoteChildRow.ServiceRequest,
            RMA:this.shipmentNoteChildRow.RMA,
            RecievedFrom:this.shipmentNoteChildRow.RecievedFrom,
            ConsignmentNo: this.shipmentNoteChildRow.ConsignmentNo,
            ICare: this.shipmentNoteChildRow.ICare,
            Batch:this.shipmentNoteChildRow.Batch,
            Status: this.shipmentNoteChildRow.Status
        })
      }else{
        this.itemListToPost.push({
          ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
          Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
          Name: this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["Description"] +" | "+
            this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
              this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["Name"],
            UnitId:this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
              this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"].UOM,
          Unit: this.retrivedItemListByCustomer.filter(x => x.ItemInformationId ===
            this.itemTempToAddIntoItemPostList["ItemId"])[0]["AML_ItemInformation"]["AML_Units"]["Title"],
            RelOrd:'',
            SNno:this.itemTempToAddIntoItemPostList["SNno"],
            DestinationAddress:this.formGroup.get('DestinationAddress').value,
            ICareRef:this.formGroup.get('ICareRef').value,
            SlaMode:this.formGroup.get('SlaMode').value
        })
      }
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      this.formGroup.get("QtyToAdd").setValue('');
      this.formGroup.get("ItemId").setValue('');

      // this.itemTempToAddIntoItemPostList["SNno"]=null;
      this.formGroup.get("DestinationAddress").setValue('');
      this.formGroup.get("ICareRef").setValue('');
      this.formGroup.get("SlaMode").setValue('');
      this.formGroup.get("SNno").setValue('');
    }
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
  PickupMethodChange()
  {debugger
    let v= this.formGroup.get('PickupMethod').value;
    if(v=="5")
    {
      this.hideshow = true;
    }else{ this.hideshow = false;}
  }
  addItemRelOrd(event:any, itemId:string){
    let model = this.itemListToPost.filter(x=>x.ItemId === itemId)[0];
    if(model){
      model.RelOrd=event.target.value;
    }
  }
  deleteFromitemListToPost(item:any)
  {
    this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1)
  }
  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.FromWarehouseKeyPair = res as DropdownListDto[];
        this.ToWarehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
      this.getItemByCustomer(event.Value);
    }
  }
  private getItemByCustomer(customerId){
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_GetItemForOrder + `${customerId}`;
    this._transferOrderServvice.getData(apiAddress)
      .subscribe(res => {
        this.retrivedItemListByCustomer = res as any[];
        console.log("Item")
        console.log(this.retrivedItemListByCustomer)
        let temp:any[]=[];
        this.retrivedItemListByCustomer.forEach(element => {
          if(!temp.filter(x=>x.Value === element.ItemInformationId)[0]){
            temp.push({
              Value: element.ItemInformationId,
              Text: element.AML_ItemInformation.Description+" | "+element.AML_ItemInformation.Name,
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
  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
  }
  redirectToTransferOrderList(){
    this.router.navigate([this.routesList.TRANSFER_ORDER_LISTING]);
  }
  onSelectFromWarehouse(item: any, dropDownName: string) {
    this.selectedFromWarehouse = {
      Id: item.Value,
      Name: item.Text
    };

  }

  onDeSelectFromWarehouse(dropDownName: string) {
    this.selectedFromWarehouse = {};
  }
  onSelectToWarehouse(item: any, dropDownName: string) {
    this.selectedToWarehouse = {
      Id: item.Value,
      Name: item.Text
    };
  }
  itemDeSelect(){
    this.itemTempToAddIntoItemPostList["ItemId"]=null;
  }
  itemChange(event:any){
    this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
    this.getSerialKeyPair(event.Value);
  }
  getSerialKeyPair(param:any) {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ItemId:param
    }
    let apiAddress: string = this.apiConstant.Serial_KEYPAIR;
    this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.shipmentNoteChilds = res ;
        let temp:any[]=[];
        this.shipmentNoteChilds.forEach(element => {
         // if(!temp.filter(x=>x.Value === element.ItemInformationId)[0]){
            temp.push({
              Value: element.SNno,
              Text: element.Batch+" | "+element.Status+" | "+ element.SNno+" | "+element.GatePass+" | "+element.ServiceRequest+" | "+element.RMA+" | "+element.RecievedFrom+" | "+element.ConsignmentNo+" | "+element.ICare
             
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
  onDeSelectToWarehouse(dropDownName: string) {
    this.selectedToWarehouse = {};
  }
  serialChange(event:any){
    debugger
    this.itemTempToAddIntoItemPostList["SNno"]=event.Value;
   let row = this.shipmentNoteChilds.filter(x=>x.SNno==event.Value);
  this.shipmentNoteChildRow = row[0];
   
  }
  public exportServiceAsExcel() {
   
    this.itemListToPost.push({
      ItemId: '',
      Name: '',
      Quantity: '',
    
      UnitId: '',
      Unit: '',
      SNno: '',
      DestinationAddress: '',
      ICareRef: '',
      SlaMode:'',
      RelOrd:''
    })
    this.exporterService.exportToExcel(this.itemListToPost, 'Customer Order');
    this.itemListToPost = [];
    }
    onServicePicked() {
      debugger
      const formData = new FormData();
      //formData.append('ContractId', this.selectedContract.toString());
      formData.append('CustomerId', this.selectedCustomer.toString());
      formData.append('file', this.servicePicked.nativeElement.files[0]);
 
 
     if (formData) {
       this.uploadFile(formData)
       .subscribe(msg => {
           this.itemListToPost = msg as any[];
           this.itemListToPost.forEach(element =>{
            if(element.ItemId==="0")
            {
                this.BTN = true;
            }
           })
          // this.fleetServiceList = null;
           debugger
           console.log(this.itemListToPost);
         }
       );
     }
     
   }
   uploadFile(formData: FormData) {
    if (!formData) { return; }
    let apiUrl = "/File/UploadPickupOrder";
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }
  private dropdownSettings(){
    // this.customerDropdownSettings = {
    //   idField: 'Value',
    //   textField: 'Text',
    //   singleSelection: true,
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   allowSearchFilter: true,
    //   closeDropDownOnSelection: true
    // };
    // this.cityDropdownSettings = {
    //   idField: 'Value',
    //   textField: 'Text',
    //   singleSelection: true,
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   allowSearchFilter: true,
    //   closeDropDownOnSelection: true
    // };
    
    // this.serialDropdownSettings={
    //   idField: 'Value',
    //   textField: 'Text',
    //   singleSelection: true,
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   allowSearchFilter: true,
    //   closeDropDownOnSelection: true
    // };
    this.customerDropdownSettings = {
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
    this.FromWarehouseDropdownSettings={
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
    this.serialDropdownSettings={
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }
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