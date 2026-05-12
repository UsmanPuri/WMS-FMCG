import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { Dispatch } from "../models/Dispatch";
import { DispatchCompleteService } from "../services/dispatch-complete.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
import { ModalManager } from "ngb-modal";
import { asyncScheduler } from "rxjs";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-dispatch-complete-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/dispatch-complete-form.component.scss"],
})
export class DispatchCompleteFormComponent extends BaseComponent {
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings = {};
  PickupOrderItemList: any[] = [];
  DispatchOrderItemList: Dispatch;
  status: boolean;
  dispatch: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer = {};
  selectedPickupOrder = {};

  itemKeyPair: DropdownListDto[] = [];
  retrivedItemListByPickupOrder: any = [];
  itemListToPost: any[] = [];
  itemTempToAddIntoItemPostList = {};
  selectedItem = {};
  pickupOrder: PickupOrder;
  @ViewChild('AllModal') AllModal;
  private modalRef;

  Address: any;
  PhoneNumber: any;
  GatePassNo: any;
  Agent: any;
  DispatchDate: Date;
  DriverName: any;
  VehicleNo: any;
  SealNo: any;
  Transporter:any;
  DistCode:any;
  DistName:any;
  DistAddress:any;
  OriginWarehouse:any;
  VehicleSize:any;
  SupervisorName: any;
  dropdownHideShow: boolean;
  formType: any;
  FlagDispatch: any;
  TotalQty: any;
  TotalQtyTemp: any;
  TotalSupplyQty:any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  BTNStatus:boolean = false;

  constructor(injector: Injector, private _dispatchService: DispatchCompleteService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {

    this.dropdownHideShow = this.router.url.includes("customer");
    this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    //this.getCustomerKeyPair();
    this.getDispatchById();
    this.CompanyInfo();
  }

  CompanyInfo() {
    this.CompanyID = this.localStorageService.getCompanyId()
    if (this.CompanyID == 1) {
      this.CompanyName = "I-Logistics (Pvt.) Ltd";
      this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 2) {
      this.CompanyName = "LaBaih";
      this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645"
      this.LogoPath = "assets/images/labaih-logo.png"
    }
    if (this.CompanyID == 3) {
      this.CompanyName = "I-Logistics (Pvt.) Ltd";
      this.CompanyAddress = "36-D Sundar Industrial Estate, Lahore. Phone: 042-35297539"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 4) {
      this.CompanyName = "Maersk Warehousing and Distribution";
      this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775"
      this.LogoPath = "assets/images/Maersk_Logo.png"
    }
  }

  private getDispatchById() {
    this.ngxService.start();
    let dispatchId: string = this.activeRoute.snapshot.params['Id'];
    if (dispatchId) {
      debugger
      let dispatchByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${dispatchId}`;
      this._dispatchService.getData(dispatchByIdUrl)
        .subscribe(res => {
          this.dispatch = res as Dispatch;
          debugger
          this.DispatchOrderItemList = this.dispatch;
          console.log(this.dispatch)
          this.PickupOrderChange(this.dispatch.DispatchId)
          this.qtyCount();
          this.ngxService.stop();
        },
          (error) => {
            this.ngxService.stop();
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
    this.addFormControlWithValidations("DispatchDate", requiredValidation);
    this.addFormControlWithValidations("ItemId", []);
    this.addFormControlWithValidations("QtyToAdd", []);
    this.addFormControlWithValidations("PickupOrderId", []);
    this.addFormControlWithValidations("Agent", requiredValidation);
    this.addFormControlWithValidations("DriverName", requiredValidation);
    this.addFormControlWithValidations("GatePassNo", []);
    this.addFormControlWithValidations("PhoneNumber", requiredValidation);
    this.addFormControlWithValidations("Address", []);
    this.addFormControlWithValidations("QtyAvailableToAdd", []);
    this.addFormControlWithValidations("VehicleNo", requiredValidation);
    this.addFormControlWithValidations("SupervisorName", requiredValidation);
    this.addFormControlWithValidations("VehicleSize", requiredValidation);
    this.addFormControlWithValidations("Transporter", requiredValidation);
    this.addFormControlWithValidations("SealNo", requiredValidation);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("Shift", []);
    this.addFormControlWithValidations("ReportingTime", []);
    this.addFormControlWithValidations("TimeIn", []);
    this.addFormControlWithValidations("TimeOut", []);

  }

  getCustomerKeyPair() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(event: any) {
    this.selectedCustomer = {
      Id: event.Value,
      Name: event.Text
    };
    if (event.Value) {
      this.getPickupOrderKeyPair(Number(event.Value));
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("PickupOrderId").setValue('');
      this.itemListToPost = [];
      this.itemTempToAddIntoItemPostList = [];
    }
  }

  PickupOrderChange(item: any) {
      let SendObj: any = {
      Value: item,
      Text: item,
    }

    let pickupOrderId = this.dispatch.PickupOrderId;
    debugger
    this.ngxService.start();
    let apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
    this._dispatchService.getKeyPair(apiUrl, SendObj)
      .subscribe(res => {

        this.PickupOrderItemList = res as any[];
        console.log("PickupOrderItemList")
        console.log(this.PickupOrderItemList)
        

        this.getPickupOrderById(pickupOrderId);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  private getPickupOrderById(id: any) {
    this.ngxService.start();
    let PickupOrderId = id;
    if (PickupOrderId) {
      let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${PickupOrderId}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          this.pickupOrder = res as PickupOrder;
          debugger
          this.DistCode = this.pickupOrder.DistCode;
          this.DistName = this.pickupOrder.DistName;
          this.DistAddress = this.pickupOrder.DistAddress;
          this.OriginWarehouse = this.pickupOrder.OriginWarehouse;
          
          this.pickupOrder.PickupOrderChilds.forEach(ele => {
            this.PickupOrderItemList.forEach(element => {
              if (ele.ItemId == element.ItemInformationId) {
                element["RequiredQuantity"] = ele.Quantity;
                element["SNno"] = ele.SNno;
                element["PRno"] = ele.PRno;
                element["Status"] = ele.Status;
                element["SRno"] = ele.SRno;
                element["InboundPool"] = ele.InboundPool;
                element["SlaMode"] = ele.SlaMode;
              }
            })
          })

          this.pickupOrder["ListAvailableStocksItem"].forEach(ele => {
            this.PickupOrderItemList.forEach(element => {
              if (ele.ItemId == element.ItemInformationId && ele.BatchCode == element.BatchNo) {
                element["AvailableStock"] = ele.Balance;
              }
            })
          })


          this.qtyCount();
          console.log(this.PickupOrderItemList);
          this.ngxService.stop();
        },
          (error) => {
            this.ngxService.stop();
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  customerDeSelect() {
    this.selectedCustomer = {};
    this.selectedPickupOrder = {};
    this.pickupOrderKeyPair = [];
    this.itemKeyPair = [];
    this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("PickupOrderId").setValue('');
    this.itemListToPost = [];
    this.itemTempToAddIntoItemPostList = [];
  }

  getPickupOrderKeyPair(customerId: number) {
    let dispatch: any = {
      CustomerId: customerId
    }

    this.ngxService.start();
    let apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
    this._dispatchService.getKeyPair(apiUrl, dispatch)
      .subscribe(res => {
        this.pickupOrderKeyPair = res as DropdownListDto[];
        console.log(this.pickupOrderKeyPair);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getItemAvailableQty(itemId: string, location: string) {
    let totalQtyTemp = 0;
    let data = this.retrivedItemListByPickupOrder
      .filter(x => x.ItemInformationId === itemId && x.Location === location);
    if (data && data.length > 0) {
      data.forEach(element => {
        totalQtyTemp = (totalQtyTemp + Number(element.Quantity));
      });
    }
    return totalQtyTemp;
  }

  addItemRelOrd(event:any, itemId:string, BatchNo:string){
    debugger
    let model = this.PickupOrderItemList.filter(x=>x.ItemInformationId === itemId && x.BatchNo === BatchNo)[0];
    if(model){
      if(parseInt(event.target.value) > model.AvailableStock){
        this.showToastrError("AvailableStock for Specific Line-Item is not Enough");
        event.target.value = model.AvailableStock;
      }
      else {
        model.Quantity=parseInt(event.target.value);
      }
      
    }
    this.qtyCount();
  }

    qtyCount(){
    debugger
    this.TotalSupplyQty = 0;
    this.TotalQty = 0;
    this.PickupOrderItemList.forEach(element => {
      this.TotalSupplyQty += parseInt(element.Quantity);
      this.TotalQty += parseInt(element.RequiredQuantity);
      //this.TotalWeightInbound += Quantity;
    });
  }

  addItemIntoItemPostList() {
    if (this.itemTempToAddIntoItemPostList &&
      this.itemTempToAddIntoItemPostList["ItemId"] != ''
      && Number(this.itemTempToAddIntoItemPostList["Quantity"] != 0)) {
      this.itemListToPost = this.itemListToPost.filter(x => x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"]);
      this.itemListToPost.push({
        ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
        Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
        Name: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Name"],
        UnitId: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"].UOM,
        Unit: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Unit"]["Title"],
        Location: this.itemTempToAddIntoItemPostList["Location"],
        Batch: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
          this.itemTempToAddIntoItemPostList["ItemId"])[0]["Batch"]
      })
      this.itemTempToAddIntoItemPostList = {};
      this.formGroup.get("QtyToAdd").setValue('');
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("QtyAvailableToAdd").setValue('');
    }
  }


  public createDispatch(formValue) {
    if (this.formGroup.valid) {
      debugger
      if(this.BTNStatus== false){
        this.BTNStatus = true;
        this.FlagDispatch = 'True';
        this.executeDispatchCreation(formValue);
      }
    }
  }

  private executeDispatchCreation(formValue) {
    let dispatch: Dispatch = {
      Agent: formValue.Agent,
      Remarks: formValue.Remarks,
      SupervisorName: formValue.SupervisorName,
      VehicleNo: formValue.VehicleNo,
      DriverName: formValue.DriverName,
      VehicleSize: formValue.VehicleSize,
      Transporter: formValue.Transporter,
      SealNo: formValue.SealNo,
      GatePassNo: formValue.GatePassNo,
      PhoneNumber: formValue.PhoneNumber,
      Address: formValue.Address,
      DispatchDate: formValue.DispatchDate,
      CustomerId: this.selectedCustomer["Id"],
      PickupOrderId: this.selectedPickupOrder["Id"],
      DispatchDetails: this.PickupOrderItemList,
      WarehouseId: this.pickupOrder.WarehouseId,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_PickupOrder: undefined,
      AML_Warehouse: undefined,
      Shift: formValue.Shift,
      ReportingTime:formValue.ReportingTime,
      TimeIn: formValue.TimeIn,
      TimeOut: formValue.TimeOut
    }
    debugger
    let apiUrl = this.apiConstant.DISPATCH_CONFIRMPICKUP;
    this._dispatchService.create(apiUrl, dispatch)
      .subscribe(res => {
        this.dispatch = res as Dispatch;
        console.log(this.dispatch);
        this.FlagDispatch = 'True';
        if(this.dispatch){
          this.openModal();
          this.getDispatchById();
          this.showToastrSuccess("GatePass No " + this.dispatch.GatePassNo + " Created Successfully ");
        }
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

  private dropdownSettings() {
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
    this.itemDropdownSettings = {
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
  openModal() {

    this.Agent = this.formGroup.get("Agent").value;
    //this.GatePassNo =this.formGroup.get("GatePassNo").value;

    this.DispatchDate = this.formGroup.get("DispatchDate").value;
    this.DriverName = this.formGroup.get("DriverName").value;
    this.VehicleNo = this.formGroup.get("VehicleNo").value;
    this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
    this.VehicleSize = this.formGroup.get("VehicleSize").value;
    this.Transporter = this.formGroup.get("Transporter").value;
    this.SealNo = this.formGroup.get("SealNo").value;
    this.Address = this.formGroup.get("Address").value;
    this.SupervisorName = this.formGroup.get("SupervisorName").value;
    this.modalRef = this.modalService.open(this.AllModal, {
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-xl'
    })
  }
  CloseModal() {
    this.modalService.close(this.AllModal);
    this.redirectToDispatchList();
  }

}
