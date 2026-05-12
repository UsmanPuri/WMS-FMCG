import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { Dispatch } from "../models/Dispatch";
import { TransferReceivingService } from "../services/transfer-receiving.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
import { ModalManager } from "ngb-modal";
import { asyncScheduler } from "rxjs";
import { LocationSpace } from "../../shipment-note-moving-warehouse/models/LocationSpace";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "wms-dispatch-complete-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/transfer-receiving-form.component.scss"],
})
export class TransferReceivingFormComponent extends BaseComponent {
  @ViewChild('servicePicked') servicePicked;
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings = {};
  PickupOrderItemList: any[] = [];
  PickupOrderItemListTemp: any[] = [];
  status: boolean;
  dispatch: Dispatch;
  dispatchRec: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer = {};
  selectedPickupOrder = {};
  warehouseDropdownSettings2 = {};
  warehouseKeyPair: any;
  itemKeyPair: DropdownListDto[] = [];
  retrivedItemListByPickupOrder: any = [];
  itemListToPost: any[] = [];
  itemTempToAddIntoItemPostList = {};
  selectedItem = {};
  selectedWarehouse: any = {};
  locationSpaceInfo: LocationSpace;
  errFlag: boolean;

  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;

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
  SupervisorName: any;
  dropdownHideShow: boolean;
  formType: any;
  FlagDispatch: any;
  TotalQty: any;

  disableRow: boolean = false;
  disableid: any;
  constructor(injector: Injector, private _dispatchService: TransferReceivingService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager,
    private ngxService: NgxUiLoaderService, private exporterService: ExporterService,
    private envUrl: EnvironmentUrlService, private http: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
    this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    this.getDispatchById();
    this.CompanyInfo();
  }

  CompanyInfo() {
    this.CompanyID = this.localStorageService.getCompanyId()
    if (this.CompanyID == 1) {
      this.CompanyName = "AML Logistics (Pvt) Ltd";
      this.CompanyAddress = "Head Office Address: Plot No. 193, 1st Floor, Street No.1, Sector I/10, Industrial Area, Islamabad. Phone: +92-51-4102361-62"
      this.LogoPath = "assets/images/aml-png-logo-web-1.png"
    }
    if (this.CompanyID == 2) {
      this.CompanyName = "LaBaih";
      this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645"
      this.LogoPath = "assets/images/labaih-logo.png"
    }
  }


  private getDispatchById() {
    let dispatchId: string = this.activeRoute.snapshot.params['Id'];
    if (dispatchId) {
      let dispatchByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${dispatchId}`;
      this._dispatchService.getData(dispatchByIdUrl)
        .subscribe(res => {
          this.dispatch = res as Dispatch;
          this.dispatchRec = this.dispatch;
          //this.PickupOrderItemList = this.dispatch.AML_DispatchDetail;
          debugger
          // console.log("Dispatch List")
          // console.log(this.dispatch)
          this.getLocationKeyPair(this.dispatch.AML_PickupOrder.WarehouseTo)
          this.PickupOrderChange(this.dispatch.DispatchId)

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
    this.addFormControlWithValidations("ReceiveDate", requiredValidation, this.disableRow);
    this.addFormControlWithValidations("ReceiverHandler", requiredValidation, this.disableRow);
    this.addFormControlWithValidations("InboundPoolIn", [], this.disableRow);
  }

  OnQtyChange(item: any, sr: any) {
    debugger
    if (item.target.value > this.PickupOrderItemList[sr]["FwdQty"]) {
      this.showToastrError("Given Received Qty is greater-than Forwarded Qty")
      return false;
    }
    else {
      this.PickupOrderItemList[sr]["Quantity"] = item.target.value;
    }

  }

  OnPalletChange(item: any, sr: any) {
    debugger
    this.PickupOrderItemList[sr]["PalletNo"] = item.target.value;
  }

  PickupOrderChange(item: any) {
    let SendObj: any = {
      Value: item,
      Text: item,
    }
    let pickupOrderId = this.dispatch.PickupOrderId;
    let apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
    this._dispatchService.getKeyPair(apiUrl, SendObj)
      .subscribe(res => {

        this.PickupOrderItemList = res as any[];
        debugger
        let i = 0;
        this.PickupOrderItemList.forEach(element => {
          this.PickupOrderItemList[i]["ForwardLocation"] = "";
          this.PickupOrderItemList[i]["InboundPoolIn"] = "";
          this.PickupOrderItemList[i]["FwdQty"] = this.PickupOrderItemList[i]["Quantity"];
          this.PickupOrderItemList[i]["Quantity"] = this.PickupOrderItemList[i]["FwdQty"] - this.PickupOrderItemList[i]["AlreadyReceived"]
          this.PickupOrderItemList[i]["is_disable"] = this.PickupOrderItemList[i].Quantity == 0 ? true : false;
          i++;
        })
        
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  // private getPickupOrderById(id:any) {
  //   let PickupOrderId=id;
  //   if(PickupOrderId){
  //     let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${PickupOrderId}`;
  //     this._dispatchService.getData(customerByIdUrl)
  //       .subscribe(res => {
  //         this.pickupOrder = res as PickupOrder;
  //       debugger
  //       this.TotalQty =0;
  //       this.PickupOrderItemList.forEach(element=>{
  //         this.pickupOrder.PickupOrderChilds.forEach(ele=>{
  //           if(ele.ItemId==element.ItemInformationId)
  //           {
  //             element["RequiredQuantity"]=ele.Quantity;
  //             element["SNno"]=ele.SNno;
  //             element["PRno"]=ele.PRno;
  //             element["Status"]=ele.Status;
  //             element["SRno"]=ele.SRno;
  //             this.TotalQty=this.TotalQty+ele.Quantity;
  //           }

  //         })
  //       })
  //       console.log(this.PickupOrderItemList)
  //       },
  //         (error) => {
  //           this.errorHandler.handleError(error);
  //           this.errorMessage = this.errorHandler.errorMessage;
  //         })
  //   }
  // }

  InboundPoolIn(item: any, sr: any) {
    debugger
    this.PickupOrderItemList[sr]["InboundPoolIn"] = item.InboundPoolIn;
    this.PickupOrderItemList[sr]["InboundPoolIn"] = this.formGroup.get('InboundPoolIn').value;
    // console.log(this.PickupOrderItemList);
  }
  onLocationSelect(item: any, sr: any) {
    debugger
    let itm = this.warehouseKeyPair.find(x => x.GodownShelfId === item.GodownShelfId);
    this.PickupOrderItemList[sr]["ForwardLocation"] = itm["Location"];
  }


  onLocationDeSelect(item: any, sr: any) {
    this.PickupOrderItemList[sr]["ForwardLocation"] = '';
  }

  getLocationKeyPair(item: any) {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId: item,
    }
    //let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
    let apiAddress: string = this.apiConstant.LOCATION_BYView_BYWarehouse;
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        //this.warehouseKeyPair = res as any;
        //  debugger
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
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

  // getPickupOrderKeyPair(customerId:number) {
  //   let dispatch: any = {
  //     CustomerId: customerId
  //   }

  //   let apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
  //   this._dispatchService.getKeyPair(apiUrl, dispatch)
  //     .subscribe(res => {
  //       this.pickupOrderKeyPair = res as DropdownListDto[];
  //       console.log(this.pickupOrderKeyPair)
  //     },
  //       (error) => {
  //         this.errorHandler.handleError(error);
  //         this.errorMessage = this.errorHandler.errorMessage;
  //       });
  // }

  public createTransferReceived(formValue) {
    this.FlagDispatch = false;
    if (this.formGroup.valid) {
      debugger
      let i = 1;
      this.PickupOrderItemList.forEach(element => {
        if (element.ForwardLocation == "" && (element.FwdQty - element.AlreadyReceived > 0 && element.Quantity != 0)) {
          this.FlagDispatch = true;
          this.showToastrWarning("Please Select Location for Line Item Sr#- " + i)
          return false;
        };
        i++;
      })

      if (!this.FlagDispatch) {
        this.executeTransferReceived(formValue);
      }
    }
  }

  private executeTransferReceived(formValue) {
    let dispatch: Dispatch = {
      DispatchId: this.dispatch.DispatchId,
      WarehouseFrom: this.dispatch.WarehouseId,
      WarehouseTo: this.dispatch.AML_PickupOrder.WarehouseTo,
      GatePassNo: this.dispatch.GatePassNo,
      ReceiveDate: formValue.ReceiveDate,
      ReceiverHandler: formValue.ReceiverHandler,
      TransferReceiveDetails: this.PickupOrderItemList,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
    }
    debugger
    let apiUrl = this.apiConstant.TRANSFER_RECEIVE_CONFIRM;
    this.ngxService.start();
    this._dispatchService.create(apiUrl, dispatch)
      .subscribe(res => {
        this.dispatch = res as Dispatch;
        // console.log(this.dispatch);
        this.FlagDispatch = 'True';
        if (this.dispatch) {
          console.log(this.PickupOrderItemList);
          this.openModal();
          this.getDispatchById();
          this.showToastrSuccess("GatePass No " + this.dispatch.GatePassNo + " Created Successfully ");
        }

        //  setTimeout(() => {
        //    this.redirectToDispatchList();
        //  }, 2000);
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
    this.warehouseDropdownSettings2 = {
      idField: 'GodownShelfId',
      textField: 'Location',
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

  public exportServiceAsExcel() {
    debugger
    let templist: any = [];
    templist = this.PickupOrderItemList;

    this.exporterService.exportToExcel(templist, 'Transfer Receiving to Warehouse');
  }

  onServicePicked() {
    const formData = new FormData();
    //formData.append('ContractId', this.selectedContract.toString());
    //formData.append('CustomerId', this.selectedCustomer.toString());
    formData.append('file', this.servicePicked.nativeElement.files[0]);

    var errorList = "";
    var errorList1 = "";
    this.errFlag = false;

    if (formData) {
      debugger
      this.uploadFile(formData)
        .subscribe(msg => {
          this.PickupOrderItemListTemp = msg as any[];

          var i = 0
          debugger
          this.PickupOrderItemListTemp.forEach(element => {
            let Locationcheck = this.warehouseKeyPair.find(x => x.Location === element.ForwardLocation);
            let SKUCheck = this.PickupOrderItemList.find(x => x.Description === element.Description &&
              x.ItemInformationId === element.ItemInformationId && x.SNno === element.SNno &&
              x.BatchNo === element.BatchNo);
            if (!Locationcheck || !SKUCheck) {
              element.unvalid = true;
              this.errFlag = true;
              if (!Locationcheck) {
                errorList = errorList + "\n" + element.Location;
              }
              else
                errorList1 = errorList1 + "\n" + element.SKU;
            }
            else {
              // element.LocationId = Locationcheck.WarehouseId;
              // element.GodownId = Locationcheck.GodwomId;
              // element.GodownRowId = Locationcheck.GodownRowId;
              // element.GodownRackId = Locationcheck.GodownRackId;
              // element.GodownShelfId = Locationcheck.GodownShelfId;
              this.PickupOrderItemList[i].InboundPoolIn = this.PickupOrderItemListTemp[i].InboundPoolIn;
              this.PickupOrderItemList[i].ForwardLocation = this.PickupOrderItemListTemp[i].ForwardLocation
            }
            i++;
          });
          console.log(this.PickupOrderItemList);
          //    debugger
          if (errorList != "" || errorList1 != "") {
            this.showToastrError("Wrong Location - " + "\n" + errorList + "\n" + " Wrong SKU Information - " + "\n" + errorList1);
          }
        }
        );
    }
  }


  redirectToDispatchList() {
    this.router.navigate([this.routesList.TRANSFER_RECEIVING_LISTING]);
  }
  openModal() {
    debugger
    this.Agent = this.dispatchRec.Agent;
    this.DispatchDate = this.dispatchRec.DispatchDate;
    this.DriverName = this.dispatchRec.DriverName;
    this.VehicleNo = this.dispatchRec.VehicleNo;
    this.PhoneNumber = this.dispatchRec.PhoneNumber;
    this.Address = this.dispatchRec.Address;
    this.SupervisorName = this.dispatchRec.SupervisorName;
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
  closeModal() {
    this.redirectToDispatchList();
  }

  uploadFile(formData: FormData) {
    if (!formData) { return; }
    //let apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
    let apiUrl = '/File/UploadTransferReceiving';
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }
}
