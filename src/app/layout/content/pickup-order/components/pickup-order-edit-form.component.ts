import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  PickupOrder } from "../models/PickupOrder";
import {  PickupOrderService } from "../services/pickup-order.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrderChild } from "../models/PickupOrderChild";

@Component({
  selector: "wms-pickup-order-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/pickup-order-form.component.scss"],
})
export class PickupOrderEditComponent extends BaseComponent {
  customerDropdownSettings = {};
  cityDropdownSettings = {};
  itemDropdownSettings={};

  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouse = {};

  status: boolean;
  pickupOrder: PickupOrder;
  customerKeyPair: DropdownListDto[];
  cityKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedCity={};

  itemKeyPair: DropdownListDto[]=[];
  retrivedItemListByCustomer:any=[];
  itemListToPost: any[]=[];
  itemTempToAddIntoItemPostList={};
    pickupMethod: any;
    selectedWarehouseInfo:any;
    selectedCustomerInfo :any;
    selectedCityInfo :any;
    pick: object;

  dropdownHideShow:boolean;

  constructor(injector: Injector, private _pickupOrderService: PickupOrderService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
    this.getWarehouseKeyPair();
    this.getCityKeyPair();
    this.getCustomerKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
    this.pick = [{
      "name": "",
      "value": ""
    }];
   
    setTimeout(() => {
        this.getById();
      }, 500);
    
  }

  private getWarehouseNameFromWarehouseKeyPair(warehouseId: any) {
    let model=this.warehouseKeyPair
    .filter(x => x.Value == warehouseId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getCustomerNameFromCustomerKeyPair(warehouseId: any) {
    let model=this.customerKeyPair
    .filter(x => x.Value == warehouseId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getCityNameFromCityKeyPair(cityId: any) {
    let model=this.cityKeyPair
    .filter(x => x.Value == cityId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${Id}`;
      this._pickupOrderService.getData(customerByIdUrl)
        .subscribe(res => {
          this.pickupOrder = res as PickupOrder;
            console.log("Pickup")
            console.log( this.pickupOrder)

            this.selectedWarehouseInfo = [{
                "Text": this.getWarehouseNameFromWarehouseKeyPair(this.pickupOrder.WarehouseId),
                "Value": this.pickupOrder.WarehouseId.toString()
              }];
             //this.selectedWarehouse = this.pickupOrder.WarehouseId;
             this.selectedWarehouse={
                Id: this.pickupOrder.WarehouseId,
                Name: this.getWarehouseNameFromWarehouseKeyPair(this.pickupOrder.WarehouseId)
              };
             this.selectedCustomerInfo = [{
                "Text": this.getCustomerNameFromCustomerKeyPair(this.pickupOrder.CustomerId),
                "Value": this.pickupOrder.CustomerId.toString()
              }];
             //this.selectedCustomer = this.pickupOrder.CustomerId;
             this.selectedCustomer={
                Id: this.pickupOrder.CustomerId,
                Name: this.getCustomerNameFromCustomerKeyPair(this.pickupOrder.CustomerId)
              };

             this.selectedCityInfo = [{
                "Text": this.getCityNameFromCityKeyPair(this.pickupOrder.CityId),
                "Value": this.pickupOrder.CityId.toString()
              }];
              this.selectedCity={
                Id: this.pickupOrder.CityId,
                Name: this.getCityNameFromCityKeyPair(this.pickupOrder.CityId)
              };
            this.formGroup.patchValue({
                //  WarehouseId: this.selectedWarehouseInfo,
                //  GodwomTypeId:this.selectedGodwomTypeInfo,
                OrderDate: this.formatDate(this.pickupOrder.OrderDate),
                waybill: this.pickupOrder.waybill,
                CustomerOrderNo: this.pickupOrder.CustomerOrderNo,
                LoadingDate: this.formatDate(this.pickupOrder.LoadingDate),
                ContactPerson: this.pickupOrder.ContactPerson,
                Address: this.pickupOrder.Address,
                Telephone: this.pickupOrder.Telephone,
                //PickupMethod: this.pickupOrder.PickupMethod,
              
                });
                debugger
                this.pick = this.constantList.PICKUP_METHODS.find(i=> i["value"] == this.pickupOrder.PickupMethod);
              //  this.formGroup.get('LoadingDate').patchValue(this.formatDate(this.pickupOrder.LoadingDate));
              //this.formGroup.get('PickupMethod').setValue(this.pick["name"]);
              console.log(this.pick["name"]);
              this.pickupOrder.PickupOrderChilds.forEach(element=>{
                this.itemListToPost.push({
                    ItemId: element.ItemId,
                    Quantity: element.Quantity,
                    Name: element.ItemName,
                      UnitId:element.UnitId,
                    Unit: element.UnitName,
                      RelOrd:element.RelOrd
                  })
            });

            this.getItemByCustomer(this.pickupOrder.CustomerId);
            
        
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
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
    //this.addFormControlWithValidations("PCRNo", requiredValidation);
    //this.addFormControlWithValidations("IRNo", []);
    //this.addFormControlWithValidations("Plant", requiredValidation);
    //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
    this.addFormControlWithValidations("WarehouseId", requiredValidation);
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
    this._pickupOrderService.getData(apiAddress)
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

  cityChange(event:any){
    this.selectedCity={
      Id: event.Value,
      Name: event.Text
    };
  }

  itemChange(event:any){
    this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
  }
  itemDeSelect(){
    this.itemTempToAddIntoItemPostList["ItemId"]=null;
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
    if (this.itemTempToAddIntoItemPostList && this.itemTempToAddIntoItemPostList["ItemId"] != null
    && this.itemTempToAddIntoItemPostList["Quantity"] !== '0') {
      this.itemListToPost = this.itemListToPost.filter(x=>x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"]);
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
          RelOrd:''
      })
      this.itemTempToAddIntoItemPostList["Quantity"]=0;
      this.itemTempToAddIntoItemPostList["ItemId"]=null;
      this.formGroup.get("QtyToAdd").setValue('');
      this.formGroup.get("ItemId").setValue('');
    }
  }


  public updatePickupOrder(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      if(!this.selectedCity || !this.selectedCity["Id"]){
        this.showToastrWarning("Select City please.");
        return false;
      }
      if(!this.selectedWarehouse || !this.selectedWarehouse["Id"]){
        this.showToastrWarning("Select Warehouse please.");
        return false;
      }
      if(this.itemListToPost.length <= 0){
        this.showToastrWarning("Add item please.");
        return false;
      }
      this.executePickupOrderUpdate(formValue);
    }
  }

  private executePickupOrderUpdate(formValue) {
    let order: PickupOrder = {
      LoadingDate: formValue.LoadingDate,
      PCRNo: formValue.PCRNo,
      IRNo: formValue.IRNo,
      Plant: formValue.Plant,
      // OriginWarehouse: formValue.OriginWarehouse,
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
      PickupOrderId: this.pickupOrder.PickupOrderId,
      AML_Customers: undefined,
      AML_Warehouse: undefined
    }

    let apiUrl = this.apiConstant.PICKUP_ORDER_UPDATE+`/${this.pickupOrder.PickupOrderId}`;
    this._pickupOrderService.update(apiUrl, order)
      .subscribe(res => {
        this.showToastrSuccess("Pickup order Updated Successfully");
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
  this.warehouseDropdownSettings={
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
   // this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
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
   
   

  }

  onDeSelect(dropDownName: string) {
    this.selectedWarehouse = {};
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
  }

}
