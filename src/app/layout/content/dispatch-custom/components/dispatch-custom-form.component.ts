import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { ModalManager } from "ngb-modal";
import { Dispatch } from "../models/Dispatch";
import { DispatchService } from "../services/dispatch-custom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
import { asyncScheduler } from "rxjs";
import { DISABLED } from "@angular/forms/src/model";
import { truncate } from "fs";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { element } from "protractor";
import { parse } from "querystring";

@Component({
  selector: "wms-dispatch-custom-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/dispatch-custom-form.component.scss"],
})
export class DispatchCustomFormComponent extends BaseComponent {
  @ViewChild('AllModal') AllModal;
  customerDropdownSettings = {};
  pickupOrderDropdownSettings = {};
  itemDropdownSettings = {};
  locationDropdownSettings = {};
  palletDropdownSettings = {};
  batchDropdownSettings = {};
  private modalRef;
  status: boolean;
  dispatch: Dispatch;
  customerKeyPair: DropdownListDto[];
  pickupOrderKeyPair: DropdownListDto[];
  selectedCustomer = {};
  selectedPickupOrder = {};

  itemKeyPair: DropdownListDto[] = [];
  locationKeyPair: DropdownListDto[] = [];
  batchKeyPair: DropdownListDto[] = [];
  palletKeyPair: DropdownListDto[] = [];
  retrivedItemListByPickupOrder: any = [];
  itemListToPost: any[] = [];
  itemTempToAddIntoItemPostList = {};
  selectedItem = {};
  returnDispatch: Dispatch;
  Address: any;
  PhoneNumber: any;
  GatePassNo: any;
  Agent: any;
  FlagList: any;
  FlagDispatch: any;
  pickupOrder: PickupOrder;
  availableAmount: number;
  selectedLocation: any;
  selectedBatch: any;
  selectedPallet: any;
  selectedSnNo: any;
  selectedPrNo: any;
  RequiredQuantity: number;
  ReserveQty: number = 0;
  formType = "customer";
  dropdownHideShow: boolean;
  TotalQtyReserve: any;
  TotalQty: any;
  InboundPool: any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  DistCode: any;
  DistName: any;
  DistAddress: any;
  MfgDate: Date;
  ExpDate: Date;
  BatchCode: any;

  constructor(injector: Injector, private _dispatchService: DispatchService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }


  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
    this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.CompanyName = this.localStorageService.getCompanyName();
    this.CompanyInfo();

  }

  CompanyInfo() {
    debugger
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
      this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 4) {
      this.CompanyName = "Maersk Warehousing and Distribution";
      this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775"
      this.LogoPath = "assets/images/Maersk_Logo.png"
    }
  }

  radioChange(e) {
    //debugger
    //this.formType = e.target.value;
    this.customerDeSelect();
    this.getCustomerKeyPair();
    // this.dropdownHideShow =!this.dropdownHideShow 
    // if(this.dropdownHideShow===true)
    // {
    //   this.dropdownHideShow=false;
    // }else
    // {
    //   this.dropdownHideShow=true;
    //   //this.selectedToWarehouse = {};
    // }
    //debugger
  }

  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("PickupOrderId", requiredValidation);
    this.addFormControlWithValidations("CustomerId", requiredValidation);
    this.addFormControlWithValidations("DispatchDate", []);
    this.addFormControlWithValidations("ItemId", []);
    this.addFormControlWithValidations("LocationId", []);
    this.addFormControlWithValidations("BatchId", []);
    this.addFormControlWithValidations("PalletId", []);
    this.addFormControlWithValidations("QtyToAdd", []);
    this.addFormControlWithValidations("Agent", []);
    this.addFormControlWithValidations("DriverName", []);
    this.addFormControlWithValidations("GatePassNo", []);
    this.addFormControlWithValidations("PhoneNumber", []);
    this.addFormControlWithValidations("Address", []);
    this.addFormControlWithValidations("QtyAvailableToAdd", []);
    this.addFormControlWithValidations("PRNOs", []);
    this.addFormControlWithValidations("PalletNO", []);
    this.addFormControlWithValidations("SKUStatus", []);
    this.addFormControlWithValidations("InboundPoolName", []);
    this.addFormControlWithValidations("ReserveQty", []);
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      FormType: this.formType
    }
    // let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR_BY_ORDERTYPE;
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];

      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getPickupOrderKeyPair(customerId: number) {
    // let apiAddress: string = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom + `${customerId}`;
    let apiAddress: string = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom_AndOrderType;
    let requestModel = {
      CustomerId: customerId,
      FormType: this.formType
    }
    this._dispatchService.getKeyPair(apiAddress, requestModel)
      .subscribe(res => {
        this.pickupOrderKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(event: any) {
    this.selectedCustomer = {
      Id: event.Value,
      Name: event.Text
    };
    debugger
    if (event.Value) {
      this.getPickupOrderKeyPair(Number(event.Value));
      this.formGroup.get("ItemId").setValue('');
      this.formGroup.get("PickupOrderId").setValue('');
      this.itemListToPost = [];
      this.itemTempToAddIntoItemPostList = [];
    }
  }

  customerDeSelect() {
    this.selectedCustomer = {};
    this.selectedPickupOrder = {};
    this.pickupOrderKeyPair = [];
    //this.customerKeyPair = [];
    this.itemKeyPair = [];
    this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("PickupOrderId").setValue('');
    this.formGroup.get("CustomerId").setValue('');
    this.itemListToPost = [];
    this.itemTempToAddIntoItemPostList = [];
  }

  private getItemByCustomer() {
    let searchItemForDispatchModel: any = {
      CustomerId: this.selectedCustomer["Id"],
      PickupOrderId: this.selectedPickupOrder["Id"],
    }

    let apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
    this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
      .subscribe(res => {
        this.retrivedItemListByPickupOrder = res as any[];
        //console.log("Retrieved Item")
        // console.log(this.retrivedItemListByPickupOrder);
        let temp: any[] = [];
        this.retrivedItemListByPickupOrder.forEach(element => {
          let existing = temp.filter(x => x.Value === element.ItemId
            && x.ParentReferenceId === element.Location)[0];
          if (!existing) {
            temp.push({
              Value: element.ItemId,
              Text: element.ItemName,
              ParentReferenceId: element.Location
            });
          }
        });
        debugger
        this.itemListToPost.forEach(element => {
          let filtering = temp.filter(x => x.Value === element.ItemId);
          if (!filtering) {
            temp.push({
              Value: element.ItemId,
              Text: element.ItemName,
              ParentReferenceId: element.Location
            })
          }
        })
        this.itemKeyPair = temp;
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
    if (this.selectedCustomer && this.selectedCustomer["Id"]
      && this.selectedPickupOrder && this.selectedPickupOrder["Id"]) {
      //this.getItemByCustomer();
      this.getPickupOrderById();
    }

  }
  private getPickupOrderById() {
    this.TotalQtyReserve = 0;

    this.ReserveQty = 0;
    this.itemListToPost = [];
    let PickupOrderId = this.selectedPickupOrder["Id"];
    if (PickupOrderId) {
      let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${PickupOrderId}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          debugger
          this.pickupOrder = res as PickupOrder;
          this.DistCode = this.pickupOrder.DistCode;
          this.DistName = this.pickupOrder.DistName;
          this.DistAddress = this.pickupOrder.DistAddress;

          debugger
          var AvailItemDetail = this.pickupOrder["ListAvailableStocksItem"];
          this.pickupOrder["PickupOrderChilds"].forEach(element => {
            this.pickupOrder["ListAvailableStocksItem"].forEach(ele => {
              if (element.ItemId === ele.ItemId) {
                if ((ele.Balance - ele.TransitQuantity) > 0) {
                  if (element.Quantity >= ((ele.Balance - ele.TransitQuantity) + this.ReserveQty)) {
                    this.ReserveQty = ((ele.Balance - ele.TransitQuantity) + this.ReserveQty);
                    this.TotalQtyReserve += this.ReserveQty;
                    debugger
                    this.itemListToPost.push({
                      ItemId: ele["ItemId"],
                      Balance: ele["Balance"],
                      Quantity: ele["Quantity"],
                      TransitQuantity: ele["TransitQuantity"],
                      QtySupply: ele.Balance - ele.TransitQuantity,
                      Name: ele["Name"],
                      Description: ele["Description"],
                      Location: ele["Location"],
                      Batch: ele["BatchCode"],
                      PalletNo: ele["PalletNo"],
                      SNno: ele["SNno"],
                      PRno: ele["PRno"],
                      Status: ele["Status"],
                      InboundPool: ele["InboundPool"],
                      SlaMode: ele["SlaMode"],
                      MfgDate: ele["MfgDate"],
                      ExpDate: ele["ExpDate"]
                    });
                  }
                  else if (element.Quantity < ((ele.Balance - ele.TransitQuantity) + this.ReserveQty)) {
                    this.TotalQtyReserve = (element.Quantity - this.ReserveQty);
                    //this.TotalQty += this.ReserveQty;
                    if (this.TotalQtyReserve > 0) {
                      this.itemListToPost.push({
                        ItemId: ele["ItemId"],
                        Balance: ele["Balance"],
                        Quantity: ele["Quantity"],
                        TransitQuantity: ele["TransitQuantity"],
                        QtySupply: (this.TotalQtyReserve),
                        Name: ele["Name"],
                        Description: ele["Description"],
                        Location: ele["Location"],
                        Batch: ele["BatchCode"],
                        PalletNo: ele["PalletNo"],
                        SNno: ele["SNno"],
                        PRno: ele["PRno"],
                        Status: ele["Status"],
                        InboundPool: ele["InboundPool"],
                        SlaMode: ele["SlaMode"],
                        MfgDate: ele["MfgDate"],
                        ExpDate: ele["ExpDate"]
                      });
                    }
                    this.ReserveQty = (this.ReserveQty + this.TotalQtyReserve);
                  }
                }

              }
            })
            this.ReserveQty = 0;
            this.TotalQtyReserve = 0;
            this.TotalQty = this.TotalQty + element["Quantity"];
          })
          console.log(this.itemListToPost);
          this.ReserveQty = 0;
          this.TotalQtyReserve = 0;
          this.TotalQty = 0;
          debugger
          this.itemListToPost.forEach(element => {
            this.ReserveQty += element.QtySupply
          })

          this.pickupOrder.PickupOrderChilds.forEach(element => {
            this.TotalQty += element.Quantity
          })
          debugger

          if (this.pickupOrder.PickupMethod == 5) {
            let temp: any[] = [];
            let itemListToPosttemp: any[] = [];
            this.itemListToPost.forEach(element => {
              if (element.SNno == null || element.SNno == undefined || element.SNno == "") {
                temp.push({
                  Value: element.ItemId,
                  Text: element.Name,
                })
                // this.itemListToPost.splice(i,i+1);
              }
              else {
                itemListToPosttemp.push({
                  Batch: element.Batch,
                  InboundPool: element.InboundPool,
                  ItemId: element.ItemId,
                  Location: element.Location,
                  Name: element.Name,
                  PRno: element.PRno,
                  PalletNo: element.PalletNo,
                  Quantity: element.Quantity,
                  SNno: element.SNno,
                  Status: element.Status,
                  SlaMode: element.SlaMode
                })
              }
            })
            this.itemKeyPair = temp;
            if (this.itemKeyPair != null) {
              this.showToastrError("Pickup Method is CUSTOM Select SKU Dropdown List.. Please Select Manual Location")
            }
            this.itemListToPost = [];
            this.itemListToPost = itemListToPosttemp;
          }

        }),
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        }
    }
  }

  addItemRelOrd(event: any, itemId: string) {
    let model = this.itemListToPost.filter(x => x.ItemId === itemId)[0];
    if (model) {
      model.QtySupply = parseInt(event.target.value);
    }
    this.qtyCount();
  }

  pickupOrderDeSelect() {
    this.selectedPickupOrder = {};
  }

  locationChange(event: any) {
    this.selectedLocation = {
      Value: event,
      Text: event
    }
    let model = {
      ItemId: this.selectedItem["Value"],
      Location: (this.selectedLocation["Value"].split(">>")[0]),
      PalletNo: (this.selectedLocation["Value"].split(">>")[1]),
      Batch: this.selectedBatch["Value"],
      WarehouseId: this.pickupOrder.WarehouseId
    }
    debugger
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_QUANTITY;
    this._dispatchService.getAll(customerByIdUrl, model)
      .subscribe(res => {
        var objList = res as Object;
        this.availableAmount = objList[0]["Balance"],
        this.selectedPrNo = objList[0]["PRno"],
        this.selectedSnNo = objList[0]["PalletNo"],
        this.status = objList[0]["Status"],
        this.InboundPool = objList[0]["InboundPool"],
        this.formGroup.get('QtyAvailableToAdd').setValue(this.availableAmount);
        this.formGroup.get('PRNOs').setValue(this.selectedPrNo);
        this.formGroup.get('PalletNO').setValue(this.selectedSnNo);
        this.formGroup.get('SKUStatus').setValue(this.status);
        this.formGroup.get('InboundPoolName').setValue(this.InboundPool);
        this.CalculateReserveQty();
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })

  }
  batchChange(event: any) {
    this.palletKeyPair = null;
    //this.selectedPallet={};
    this.selectedBatch = {
      Value: event.Value,
      Text: event.Text
    }
    let model = {
      ItemId: this.selectedItem["Value"],
      //  SNno: this.selectedPallet["Value"],
      Batch: this.selectedBatch["Value"],
      WarehouseId: this.pickupOrder.WarehouseId
    }
    debugger
    this.BatchCode = this.selectedBatch["Text"].substring(0, 10);
    this.ExpDate = this.selectedBatch["Text"].substring(46, 56);
    this.MfgDate = this.selectedBatch["Text"].substring(23, 33);


    let customerByIdUrl: string = this.apiConstant.LOCATIONS_BY_ITEM_ID;
    this._dispatchService.getAll(customerByIdUrl, model)
      .subscribe(res => {
        this.locationKeyPair = res as DropdownListDto[];
        let tempList = [];
        this.locationKeyPair.forEach(element => {
          let obj = tempList.find(x => x.Value === element.Value)
          if (!obj) {
            tempList.push(element);
          }
        });
        this.locationKeyPair = tempList;
        this.CalculateReserveQty();
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    //this.getLocationsByItemId(model);

    // let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH_PALLET;
    //   this._dispatchService.getAll(customerByIdUrl,model)
    //     .subscribe(res => {
    //       this.palletKeyPair = res as DropdownListDto[];


    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       })
  }

  private getLocationsByItemId(model: any) {
    debugger
    if (model.ItemId) {

    }
  }
  palletChange(event: any) {
    let eventText = event["Text"];
    var palletText = event.split("-");
    this.batchKeyPair = null;
    this.selectedBatch = {};
    this.formGroup.get("BatchId").setValue('');
    this.locationKeyPair = null;
    this.selectedLocation = {};
    this.formGroup.get("LocationId").setValue('');
    //this.formGroup.get("RequiredQuantity").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');

    this.selectedPallet = {
      Value: palletText[0],
      Text: palletText[0]
    }
    this.selectedSnNo = {
      Value: palletText[1],
      Text: palletText[1]
    }
    this.selectedPrNo = {
      Value: palletText[2],
      Text: palletText[2]
    }
    let model = {
      ItemId: this.selectedItem["Value"],
      SNno: this.selectedPallet["Value"],

    }
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH;
    this._dispatchService.getAll(customerByIdUrl, model)
      .subscribe(res => {
        this.batchKeyPair = res as DropdownListDto[];
        let tempList = [];
        this.batchKeyPair.forEach(element => {
          let obj = tempList.find(x => x.Value === element.Value)
          if (!obj) {
            tempList.push(element);
          }
        });
        this.batchKeyPair = tempList;

      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  itemChange(event: any) {
    debugger

    this.batchKeyPair = null;
    this.selectedBatch = {};
    this.formGroup.get("BatchId").setValue('');
    this.locationKeyPair = null;
    this.selectedLocation = {};
    this.formGroup.get("LocationId").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue(0);
    this.formGroup.get("QtyToAdd").setValue(0);

    this.selectedItem = {
      Value: event.Value,
      Text: event.Text
    }
    this.locationKeyPair = null;
    this.RequiredQuantity = this.pickupOrder.PickupOrderChilds.filter(a => a.ItemId == event.Value)[0].Quantity;


    let model = {
      ItemId: this.selectedItem["Value"],
      JobId: this.selectedPickupOrder["Id"],
      WarehouseId: this.pickupOrder.WarehouseId
    }
    //let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH_PALLET;
    let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH;
    this._dispatchService.getAll(customerByIdUrl, model)
      .subscribe(res => {
        this.batchKeyPair = res as DropdownListDto[];
        debugger
        if (this.batchKeyPair[0].Value != '') {
          let tempList = [];
          this.batchKeyPair.forEach(element => {
            let obj = tempList.find(x => x.Value === element.Value)
            if (!obj) {
              tempList.push(element);
            }
          });
          this.batchKeyPair = tempList;
        }
        else {
          let customerByIdUrl: string = this.apiConstant.LOCATIONS_BY_ITEM_ID;
          this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(res => {
              this.locationKeyPair = res as DropdownListDto[];
              let tempList = [];
              this.locationKeyPair.forEach(element => {
                let obj = tempList.find(x => x.Value === element.Value)
                if (!obj) {
                  tempList.push(element);
                }
              });
              this.locationKeyPair = tempList;
              console.log(this.locationKeyPair);
              this.CalculateReserveQty();
            },
              (error) => {
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
              })

        }


      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  itemDeSelect() {
    this.selectedItem = {};
    this.itemTempToAddIntoItemPostList["ItemId"] = null;
    this.palletKeyPair = null;
    this.selectedPallet = {};
    this.formGroup.get("PalletId").setValue('');
    this.batchKeyPair = null;
    this.selectedBatch = {};
    this.formGroup.get("BatchId").setValue('');
    this.locationKeyPair = null;
    this.selectedLocation = {};
    this.formGroup.get("LocationId").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');
  }

  palletDeSelect() {

    this.batchKeyPair = null;
    this.selectedBatch = {};
    this.formGroup.get("BatchId").setValue('');
    this.locationKeyPair = null;
    this.selectedLocation = {};
    this.formGroup.get("LocationId").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');
  }

  batchDeSelect() {

    this.locationKeyPair = null;
    this.selectedLocation = {};
    this.formGroup.get("LocationId").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');
  }

  locationDeSelect() {
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');
  }
  quantityChange(event: any) {
    debugger
    let q = 0;
    // this.itemListToPost.forEach(element => {
    //   if (this.selectedItem["Value"] == element.ItemId && this.selectedPallet["Value"] == element.SNno) {
    //     q += element.Quantity;
    //   }
    // })
    // console.log(q)
    q = this.ReserveQty;
    if (!this.selectedItem) {
      this.showToastrWarning('Select item please');
      event.target.value = '';
      this.itemTempToAddIntoItemPostList["Quantity"] = 0;
      return false;
    }
    if (Number(event.target.value) <= 0 || event.target.value == undefined) {
      this.showToastrWarning("Invalid Quantity");
      event.target.value = '';
      this.itemTempToAddIntoItemPostList["Quantity"] = 0;
      return false;
    }
    if (Number(event.target.value) > Number(this.formGroup.get("QtyAvailableToAdd").value)) {
      this.showToastrWarning("Quantity can not Greater than " + this.formGroup.get("QtyAvailableToAdd").value);
      event.target.value = '';
      this.itemTempToAddIntoItemPostList["Quantity"] = 0;
      return false;
    }
    if ((Number(event.target.value) + q) > Number(this.RequiredQuantity)) {
      this.showToastrWarning("Total Quantity can not Greater than : " + this.RequiredQuantity + " - Need More Quantity is : " + Number(this.RequiredQuantity - this.ReserveQty));
      event.target.value = '';
      this.itemTempToAddIntoItemPostList["Quantity"] = 0;
      return false;
    }
    this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
  }

  getItemAvailableQty(itemId: string, location: string) {
    let totalQty = 0;
    //debugger
    let data = this.retrivedItemListByPickupOrder
      .filter(x => x.ItemInformationId === itemId && x.Location === location);
    if (data && data.length > 0) {
      data.forEach(element => {
        totalQty = (totalQty + Number(element.Quantity));
      });
    }
    return totalQty;
  }

  qtyCount() {
    debugger
    this.ReserveQty = 0;
    this.itemListToPost.forEach(element => {
      this.ReserveQty += element.QtySupply;
      //this.TotalWeightInbound += Quantity;
    });
  }
  deleteFromitemListToPost(item: any) {
    this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
    this.qtyCount();
  }
  addItemIntoItemPostList() {
    debugger
    this.FlagList = false;
    this.itemListToPost.forEach(element => {
      if (element.ItemId === this.selectedItem["Value"] && element.SNno === "" && element.Batch === this.selectedBatch["Text"] &&
        element.Location === this.selectedLocation["Text"].split(">>")[0] && element.PalletNo === this.selectedLocation["Text"].split(">>")[1]) {
        this.showToastrWarning("Same SKU with Same Location and Pallet No Already Include..");
        this.FlagList = true;
      }
    })
    if (!this.FlagList) {
      if (this.formGroup.get('QtyToAdd').value === 0 || this.formGroup.get('QtyToAdd').value === '') {
        this.showToastrWarning("Must Enter Valid Quantity Value");
        return false;
      }
      else {
        let locationInfo = this.selectedLocation["Text"].split(">>")[0];
        let batchInfo = this.selectedBatch["Text"];
        let palletInfo = this.selectedSnNo;
        let snInfo = '';
        let prInfo = this.selectedPrNo;
        this.itemListToPost.push({
          ItemId: this.selectedItem["Value"],
          Quantity: this.RequiredQuantity,
          Name: this.selectedItem["Text"],
          Location: locationInfo,
          Batch: this.BatchCode,
          PalletNo: palletInfo,
          SNno: snInfo,
          PRno: prInfo,
          Status: this.status,
          InboundPool: this.InboundPool,
          MfgDate: this.MfgDate,
          ExpDate: this.ExpDate,
          Balance: this.availableAmount,
          QtySupply: this.formGroup.get('QtyToAdd').value,
          ReserveQty: this.ReserveQty,
        })
        this.TotalQty += this.formGroup.get('QtyToAdd').value;

        console.log(this.itemListToPost);
        this.FlagList = 'True'
        this.itemTempToAddIntoItemPostList = {};
        this.formGroup.get("QtyToAdd").setValue('');
        //this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("BatchId").setValue('');
        this.formGroup.get("PalletId").setValue('');
        //this.RequiredQuantity = null;
        //this.selectedItem = null;
        this.selectedLocation = null;
        this.formGroup.controls["PickupOrderId"].disabled;
        this.CalculateReserveQty();
      }
      //this.formGroup.get("selectedPickupOrder").disabled;      
    }
  }

  public createDispatch(formValue) {
    if (this.formGroup.valid) {
      if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      if (!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]) {
        this.showToastrWarning("Select Customer Order please.");
        return false;
      }
      if (this.itemListToPost.length <= 0) {
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
      CustomerId: this.selectedCustomer["Id"],
      PickupOrderId: this.selectedPickupOrder["Id"],
      DispatchDetails: this.itemListToPost,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      AML_Customers: undefined,
      AML_PickupOrder: undefined,
      AML_Warehouse: undefined
    }
    console.log(dispatch)
    let apiUrl = this.apiConstant.DISPATCH_CREATE;
    this.ngxService.start();
    this._dispatchService.create(apiUrl, dispatch)
      .subscribe(res => {
        this.returnDispatch = res as Dispatch;
        console.log(this.returnDispatch);
        this.FlagDispatch = 'True';
        if (this.returnDispatch) {
          this.openModal();
          this.showToastrSuccess("Pickup Plan for Dispatch created successfully");
        }
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
    this.locationDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.batchDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.palletDropdownSettings = {
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

  CalculateReserveQty() {
    this.ReserveQty = 0;
    this.itemListToPost.forEach(element => {
      if (element.ItemId === this.selectedItem["Value"] && element.SNno === "" && element.Batch === this.selectedBatch["Text"]) {
        this.ReserveQty = this.ReserveQty + element.Quantity;
      }
      else if (element.ItemId === this.selectedItem["Value"] && element.SNno === this.selectedBatch["Text"]) {
        this.ReserveQty = this.ReserveQty + element.Quantity;
      }
    })
  }



  redirectToDispatchCustomList() {
    if (this.dropdownHideShow == true) {
      this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
    }
    else {
      this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
    }
  }

  openModal() {

    this.Agent = this.formGroup.get("Agent").value;
    this.GatePassNo = this.formGroup.get("GatePassNo").value;
    this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
    this.Address = this.formGroup.get("Address").value;


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
    debugger
    this.modalService.close(this.AllModal);
    $('#AllModal').hide();
    //this.redirectTo()
    // this.loadComponent = false;
  }

  // redirectTo() {
  //   this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]);
  // }


}
