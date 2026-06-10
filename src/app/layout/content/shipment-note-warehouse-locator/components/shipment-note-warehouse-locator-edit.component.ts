import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { ShipmentNoteLocatorService } from "../services/shipment-note-warehouse-locator.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteChild } from "../models/ShipmentNoteChild";
import * as bootstrap from "bootstrap";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { LocationSpace } from "../models/LocationSpace";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ThrowStmt } from "@angular/compiler";
import { AnimationStyleNormalizer } from "@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer";
import { Console } from "console";
@Component({
  selector: "wms-shipment-note-warehouse-locator-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/shipment-note-warehouse-locator-form.component.scss"],
})
export class ShipmentNoteWarehouseLocatorEditComponent extends BaseComponent {
  @ViewChild('servicePicked') servicePicked;
  public shipmentNoteList: ShipmentNote[];
  // Our future instance of DataTable
  dataTable: any;
  LocationId: any;
  parkingStageDropdownSettings = {};
  parkingStageKeyPair: DropdownListDto[];
  selectedParkingStage = {};

  shipmentNote: ShipmentNote;
  shipmentNoteChild: ShipmentNoteChild[];

  // Naye variables Global Scanning ke liye
  globalPalletNo: string = '';
  globalLocation: string = '';
  currentActiveItem: any = null; // Jo pallet scan hoga, wo yahan save ho jayega

  shipmentNoteMain: any;
  WarehouseTrans:any;
  asnListToPost: any[] = [];
  // asnListToPostTemp: any[] = [];
  locationStatusList: any[] = [];
  itemBalanceList: any[] = [];

  warehouseDropdownSettings = {};
  warehouseDropdownSettings2 = {};
  //warehouseKeyPair: DropdownListDto[];
  warehouseKeyPair: any;
  warehouseKeyPairTemp: any;
  //selectedWarehouse = {Id:null, Name:null};
  selectedWarehouse: any = {};
  godownDropdownSettings = {};
  godownKeyPair: DropdownListDto[];
  selectedGodown = { Id: null, Name: null };

  godownRowDropdownSettings = {};
  godownRowKeyPair: DropdownListDto[];
  selectedGodownRow = { Id: null, Name: null };

  godownRackDropdownSettings = {};
  godownRackKeyPair: DropdownListDto[];
  selectedGodownRack = { Id: null, Name: null };
  public listAvailableStock: any = [];
  godownShelfDropdownSettings = {};
  godownShelfKeyPair: DropdownListDto[];
  selectedGodownShelf = { Id: null, Name: null };
  locationSpaceInfo: LocationSpace;
  BTN = false;
  ListStatusErr = false;
  ShipmentNoteId = null;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  QtyPallet: any;
  TotalQtyPallet: any = 0;
  QtyRequired: any = 0;
  chkList = false;
  TotalQtyReceived = 0;
  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteLocatorService,
    private activeRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private exporterService: ExporterService,
    private envUrl: EnvironmentUrlService, private http: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.getById();
    this.addFormValidations();
    this.dropdownSettings();
    //this.getParkingStagesKeyPair();
    // this.getWarehouseKeyPair();
    //this.getLocationKeyPair();
    this.locationSpaceInfo = {};
    this.locationSpaceInfo.CBM = 0;
    this.locationSpaceInfo.UsedCBM = 0;
    this.locationSpaceInfo.FreeCBM = 0;
    this.CompanyInfo();
    this.formGroup.get("QtyPallet").setValue('40');
  }

 getById() {
    this.ngxService.start();
    let Id: string = this.activeRoute.snapshot.params["Id"];
    if (Id) {
      let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE + `${Id}`;
      this._shipmentNoteService.getData(apiAddress)
        .subscribe(res => {
          
        
          this.shipmentNoteMain = res as any;
          this.shipmentNote = res as ShipmentNote;

         
          if (this.shipmentNote.AML_ShipmentNoteChild) {
            this.asnListToPost = this.shipmentNote.AML_ShipmentNoteChild.map((obj: any) => ({...obj}));
          }

          
          this.selectedWarehouse.Id = this.shipmentNoteMain.WarehouseId;
          this.getPallettInfo(this.shipmentNoteMain.ShipmentNoteId);
          this.getLocationKeyPair(this.shipmentNoteMain.WarehouseId);
          
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    }
    this.ngxService.stop();
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
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        // this.warehouseKeyPair = res as DropdownListDto[];
        this.warehouseKeyPair = res as any;
        this.warehouseKeyPairTemp = this.warehouseKeyPair;
        console.log(this.warehouseKeyPair);
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getPallettInfo(item: any) {
      debugger
     let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ShipmentNoteId: item,
    }
      let apiAddress: string = this.apiConstant.WAREHOUSE_GET_ASNID;
      this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
        .subscribe(res => {
          debugger
          this.WarehouseTrans = res as any;
          console.log("Pallette List")
          console.log(this.WarehouseTrans);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
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
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("ParkingStageIdFrom", []);
    this.addFormControlWithValidations("ParkingStageIdTo", []);
    this.addFormControlWithValidations("WarehouseId", []);
    this.addFormControlWithValidations("GodownId", []);
    this.addFormControlWithValidations("GodownRowId", []);
    this.addFormControlWithValidations("GodownRackId", []);
    this.addFormControlWithValidations("GodownShelfId", []);
    this.addFormControlWithValidations("ReceiveDate", requiredValidation);
    this.addFormControlWithValidations("TotalCBM", []);
    this.addFormControlWithValidations("OccupiedCBM", []);
    this.addFormControlWithValidations("EmptyCBM", []);
    this.addFormControlWithValidations("QtyPallet", []);

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

  private dropdownSettings() {
    this.parkingStageDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    this.warehouseDropdownSettings = {
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

    this.godownDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.godownRowDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.godownRackDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.godownShelfDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }


  onSelectWH(event: any, item: any) {
    //debugger
    let WHName = event.Location;
    if (WHName == undefined || WHName == null) {
      this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
    }
    else {
      item.Location = event.Location;
      this.LocationId = event.GodownShelfId;
    }
  }

  moveASN() {
    debugger
    this.WarehouseTrans.forEach(element => {
      
      element.WarehouseId = this.shipmentNote.WarehouseId;
      element.CreatedBy = this.localStorageService.getUserId();
      element.CompanyId = this.localStorageService.getCompanyId();
      element.BusinessUnitId = this.localStorageService.getBusinessUnitId();
      this.TotalQtyReceived += element.MoveQuantity;

    });
    console.log(this.WarehouseTrans)
    this.ngxService.start();

    //console.log(ASN);
    let apiUrl = this.apiConstant.SHIPMENT_NOTE_LOCATOR_WAREHOUSE;
    this._shipmentNoteService.update(apiUrl, + this.WarehouseTrans)
      .subscribe(res => {
        //this.OpenModal();

        this.showToastrSuccess("ASN Moved Successfully");
        this.ngxService.stop();
        // setTimeout(() => {

        //  this.redirectToListShipmentNote();
        // }, 2000);
      }, (error => {
        this.ngxService.stop();
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      }));
  }

  onDeSelect(item: any) {
    //debugger
    // item={};
    // this.shipmentNote.ParkingStageIdFrom = null;
    item.selected = false;
  }

  redirectToListShipmentNote() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_WAREHOUSE_LOCATOR_LISTING]);
  }


  onSelect(item: any) {
    //  debugger
    let itm = this.warehouseKeyPair.find(x => x.GodownShelfId === item.GodownShelfId);

    this.selectedWarehouse = {
      Id: itm.WarehouseId,
      Name: itm.Location,
      GodownId: itm.GodwomId,
      GodownRowId: itm.GodownRowId,
      GodownRackId: itm.GodownRackId,
      GodownShelfId: itm.GodownShelfId
    };


    let apiAddress: string = this.apiConstant.LOCATION_SPACE_STATUS + `/${this.selectedWarehouse.Id}`;
    this._shipmentNoteService.getData(apiAddress)
      .subscribe(res => {
        this.locationSpaceInfo = res as LocationSpace;
        console.log(this.locationSpaceInfo)
        this.formGroup.get('TotalCBM').setValue(this.locationSpaceInfo.CBM);
        this.formGroup.get('OccupiedCBM').setValue(this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM);
        this.formGroup.get('EmptyCBM').setValue(this.locationSpaceInfo.CBM - (this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM));
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });

  }


  addItemIntoAsnToPostList(item: any) {
    debugger
    if (item.Location == undefined || item.Location == null) {
      this.showToastrWarning("Please Select Move Location for All Selected Line Items");
      this.ListStatusErr = true;
      return false;
    }
    const indexItem = this.itemBalanceList.indexOf((e) => e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch);

    //debugger
    this.itemBalanceList.push({
      ItemInformationId: item.ItemInformationId,
      ItemTotalQuantity: parseInt(item.MoveQuantity),
      Batch: item.Batch,
      InboundPool: item.InboundPool,
      Status: item.Status,
    });
    var i = 0;
    this.itemBalanceList.forEach(element => {
      if (element.ItemInformationId == item.ItemInformationId && element.Batch == item.Batch) {
        if (item.ItemRemainQuantity == 0 || item.ItemRemainQuantity == undefined || item.ItemRemainQuantity == null) {
          item.ItemRemainQuantity = item.Balance - parseInt(item.MoveQuantity);
        }
        else {
          if (i == 0) {
            item.ItemRemainQuantity = item.Balance - element.ItemTotalQuantity;
          }
          else {
            item.ItemRemainQuantity = item.ItemRemainQuantity - element.ItemTotalQuantity;
          }
        }
        i++;
      }
    });

    const index = this.locationStatusList.findIndex((e) => e.LocationId == parseInt(this.LocationId));
    if (index === -1) {

      this.locationStatusList.push({
        Location: this.selectedWarehouse.Name,
        LocationId: parseInt(this.selectedWarehouse.Id),
        TotalCBMinList: item.ItemCBM * item.MoveQuantity / 61023.8

      });

    }
    else {
      // if ((this.locationSpaceInfo.CBM-(this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM) < (this.locationStatusList.filter(a=> a.LocationId==this.selectedWarehouse.Id)[0].TotalCBMinList)+((item.ItemCBM*item.MoveQuantity)/ 61023.8)))
      // {
      //   this.showToastrWarning("No More Space Left In this Location Please Select Another Location.");
      //   return false;
      // }
      // else
      // {
      this.locationStatusList.filter(a => a.LocationId == this.selectedWarehouse.Id)[0].TotalCBMinList += (item.ItemCBM * item.MoveQuantity) / 61023.8;
      //this.itemBalanceList.filter(a => a.ItemInformationId == item.ItemInformationId)[0].ItemTotalQuantity += parseInt(item.MoveQuantity);
      //}


    }
    //debugger
    let asnListToPostTemp: any = {
      Location: item.Location,
      LocationId: 1,
      TrasactionDate: this.formGroup.get('ReceiveDate').value,
      ItemInformationId: item.ItemInformationId,
      Batch: item.Batch,
      Status: item.Status,
      MoveQuantity: item.MoveQuantity,
      ExpiryDate: item.ExpiryDate,
      MfgDate: item.MfgDate,
      ParkingStageIdFrom: this.shipmentNote.ParkingStageIdFrom,
      SKU: item.Description,
      Name: item.Name,
      ShipmentNoteChildId: item.ShipmentNoteChildId,
      ShipmentNoteId: item.ShipmentNoteId,
      ASNNo: item.ASNNo,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      TotalCBM: item.ItemCBM * item.MoveQuantity,
      SNno: item.SNno,
      InboundPool: item.InboundPool,
      PRno: item.PRno,
      SRno: item.ServiceRequest,
      WarehouseId: this.shipmentNote.WarehouseId,
      PalletNo: item.PalletNo,
      GatePass: item.GatePass,
      RMA: item.RMA,
      GodownId: this.selectedWarehouse.GodownId,
      GodownRowId: this.selectedWarehouse.GodownRowId,
      GodownRackId: this.selectedWarehouse.GodownRackId,
      GodownShelfId: this.selectedWarehouse.GodownShelfId
    };
    this.asnListToPost.push(asnListToPostTemp);
    this.ListStatusErr = false;
  }

  addItemRelOrd(event: any, itemId: string, Batch: string) {
    debugger
    let model = this.asnListToPost.filter(x => x.ItemInformationId === itemId && x.Batch === Batch)[0];
    if (model) {
      model.MoveQuantity = parseInt(event.target.value);

      // if(parseInt(event.target.value) > model.AvailableStock){
      //   this.showToastrError("AvailableStock for Specific Line-Item is not Enough");
      //   event.target.value = model.AvailableStock;
      // }
      // else {
      //   model.Quantity=parseInt(event.target.value);
      // }

    }
    //this.qtyCount();
  }


// 1. Jab Top wale box mein Pallet Scan hoga
  onGlobalPalletScan(event: any) {
    let scannedValue = event.target.value.trim();
    if (!scannedValue) return;

    // Check karein kya yeh pallet hamari list mein hai?
    let foundItem = this.WarehouseTrans.find((p: any) => p.PalletNo === scannedValue);

    if (foundItem) {
      this.currentActiveItem = foundItem; // Row ko "Active" mark kar diya
      this.globalPalletNo = scannedValue;
      this.showToastrSuccess(`Pallet ${scannedValue} Verified!`);
      
      // Jadoo: Automatic Location wale box ko focus kar do taake operator direct location scan kare
      // Jadoo: Automatic Location wale box ko focus kar do
setTimeout(() => {
  const el = document.getElementById('globalLocationInput');
  if (el) {
    el.focus();
  }
}, 100);

    } else {
      this.globalPalletNo = '';
      event.target.value = '';
      this.currentActiveItem = null;
      this.showToastrError(`Invalid Pallet! '${scannedValue}' is not in the expected list.`);
    }
  }

  // 2. Jab Top wale box mein Location Scan hogi
  onGlobalLocationScan(event: any) {
    let scannedValue = event.target.value.trim();
    if (!scannedValue) return;

    // Validation: Check karein ke Pallet scan hua wa hai ya nahi?
    if (!this.currentActiveItem) {
      this.showToastrWarning("Please scan a valid Pallet first!");
      this.globalLocation = '';
      event.target.value = '';
      return;
    }

    // Validation: Check karein ke kya Location sahi hai?
    let isValidLocation = this.warehouseKeyPair.some((loc: any) => loc.Location === scannedValue);

    if (isValidLocation) {
      // Us Active Pallet ke samne location update kar do (Override bhi ho jayega agar pehle se tha)
      this.currentActiveItem.Location = scannedValue;
      this.showToastrSuccess(`Location Assigned to Pallet ${this.currentActiveItem.PalletNo}!`);
      
      // Agle scan ke liye dono boxes khali kar do
      this.globalPalletNo = '';
      this.globalLocation = '';
      event.target.value = '';
      this.currentActiveItem = null; 

      
setTimeout(() => {
  const el = document.getElementById('globalPalletInput');
  if (el) {
    el.focus();
  }
}, 100);

    } else {
      this.globalLocation = '';
      event.target.value = '';
      this.showToastrError(`Invalid Location! '${scannedValue}' is not in the list.`);
    }
  }









  
  addItemIntoAsnToPostList2(item: any) {
    //console.log(item)

    const indexItem = this.itemBalanceList.findIndex((e) => e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch);
    if (indexItem === -1) {

      this.itemBalanceList.push({
        ItemInformationId: item.ItemInformationId,
        ItemTotalQuantity: parseInt(item.MoveQuantity),
        Batch: item.Batch,
        InboundPool: item.InboundPool

      });

    }
    else {
      // debugger
      // if ((item.Balance) < ((this.itemBalanceList.filter(a=> a.ItemInformationId ==item.ItemInformationId && a.Batch == item.Batch)[0].ItemTotalQuantity)+parseInt(item.MoveQuantity)))
      // {
      //   this.showToastrWarning("Not Allowed...Item Move Quantity Will Exceed The Actual Quantity.");
      //   return false;
      // }

    }
    const index = this.locationStatusList.findIndex((e) => e.LocationId == parseInt(this.selectedWarehouse.Id));
    if (index === -1) {

      this.locationStatusList.push({
        Location: this.selectedWarehouse.Name,
        LocationId: parseInt(this.selectedWarehouse.Id),
        TotalCBMinList: item.ItemCBM * item.MoveQuantity / 61023.8

      });

    }
    else {
      // if ((this.locationSpaceInfo.CBM-(this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM) < (this.locationStatusList.filter(a=> a.LocationId==this.selectedWarehouse.Id)[0].TotalCBMinList)+((item.ItemCBM*item.MoveQuantity)/ 61023.8)))
      // {
      //   this.showToastrWarning("No More Space Left In this Location Please Select Another Location.");
      //   return false;
      // }
      // else
      // {
      this.locationStatusList.filter(a => a.LocationId == this.selectedWarehouse.Id)[0].TotalCBMinList += (item.ItemCBM * item.MoveQuantity) / 61023.8;
      this.itemBalanceList.filter(a => a.ItemInformationId == item.ItemInformationId)[0].ItemTotalQuantity += parseInt(item.MoveQuantity);
      //}
    }
    //debugger
    this.asnListToPost.push({
      Location: "",
      LocationId: "",
      TrasactionDate: this.formGroup.get('ReceiveDate').value,
      ItemInformationId: item.ItemInformationId,
      Batch: item.Batch,
      Status: item.Status,
      MoveQuantity: item.MoveQuantity,
      ExpiryDate: item.ExpiryDate,
      MfgDate: item.MfgDate,
      ParkingStageIdFrom: this.shipmentNote.ParkingStageIdFrom,
      SKU: item.Description,
      Name: item.Name,
      ShipmentNoteChildId: item.ShipmentNoteChildId,
      ShipmentNoteId: item.ShipmentNoteId,
      ASNNo: item.ASNNo,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      TotalCBM: item.ItemCBM * item.MoveQuantity,
      SNno: item.SNno,
      PRno: item.PRno,
      WarehouseId: this.shipmentNote.WarehouseId,
      PalletNo: item.PalletNo,
      InboundPool: item.InboundPool

    });
    //console.log(this.locationStatusList)
    //console.log(this.itemBalanceList)

  }

  deleteItemFromAsnListToPost(item: any) {
    this.asnListToPost.splice(this.asnListToPost.indexOf(item), 1);
    this.locationStatusList.filter(a => a.LocationId == item.LocationId)[0].TotalCBMinList = this.locationStatusList.filter(a => a.LocationId == item.LocationId)[0].TotalCBMinList - item.TotalCBM;
    this.itemBalanceList.filter(e => e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch)[0].ItemTotalQuantity = this.itemBalanceList.filter(e => e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch)[0].ItemTotalQuantity - item.MoveQuantity;
    //console.log(this.locationStatusList)
    //console.log(this.itemBalanceList)
  }
  // Submit button ko Enable/Disable karne ka Smart Logic
  isSubmitDisabled(): boolean {
    // 1. Check karein kya koi aisi row hai jiska Pallet scan ho gaya par Location khali hai?
    // Ya Location scan ho gayi par Pallet khali hai?
    let hasIncompletePair = this.WarehouseTrans.some((item: any) => 
      (item.PalletNo && !item.Location) || (!item.PalletNo && item.Location)
    );

    //  Check karein kya kam az kam kisi 1 item ka mukammal Pair (Pallet + Location) scan hua hai?
    let hasAtLeastOneComplete = this.WarehouseTrans.some((item: any) => 
      item.PalletNo && item.Location
    );

    // Agar koi Incomplete Pair mila, YA ek bhi pair mukammal nahi hai, toh Button band (Disable) kar do
    if (hasIncompletePair || !hasAtLeastOneComplete) {
      return true; 
    }

    return false; 
  }



  }
