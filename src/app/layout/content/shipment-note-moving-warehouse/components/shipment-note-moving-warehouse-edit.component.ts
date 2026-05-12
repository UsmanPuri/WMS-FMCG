import { Component, Injector, OnInit,  ViewChild } from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note-moving-warehouse.service";
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
@Component({
  selector: "wms-shipment-note-moving-warehouse-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/shipment-note-moving-warehouse-form.component.scss"],
})
export class ShipmentNoteMovingWarehouseEditComponent extends BaseComponent {
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
  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
   private activeRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private exporterService: ExporterService, 
    private envUrl: EnvironmentUrlService, private http: HttpClient) {
    super(injector);
  }

  ngOnInit() {

    this.addFormValidations();
    this.dropdownSettings();
    this.getById();
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
  // getWarehouseKeyPair() {
  //   let companyBusinessUnitInfo: any = {
  //     CompanyId: this.localStorageService.getCompanyId(),
  //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
  //   }
  //   let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
  //   this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
  //     .subscribe(res => {
  //         debugger
  //       this.warehouseKeyPair = res as DropdownListDto[];
  //       this.warehouseKeyPairTemp = this.warehouseKeyPair;
  //       this.getAvailablestock();
  //     },
  //       (error) => {
  //         this.errorHandler.handleError(error);
  //         this.errorMessage = this.errorHandler.errorMessage;
  //       });
  // }

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
        this.getAvailablestock();
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
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

  getAvailablestock() {
    debugger
    this.ngxService.start();

    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      WarehouseId:this.selectedWarehouse.Id
    }

    this.listAvailableStock = [];
    let apiAddress: string = this.apiConstant.DASHBOARD_AVAILABLE_STOCK_WAREHOUSE_CUSTOMER;
    this._shipmentNoteService.create(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.listAvailableStock = res as any[];
        // this.listAvailableStock.forEach(element => {
        //     this.warehouseKeyPair.splice(x => x.Location === element.Location,1)
        // });
        debugger
        this.warehouseKeyPair.sort((a, b) => {
          return a.Aging - b.Aging;
        });

        this.ngxService.stop();
        debugger
        // this.chRef.detectChanges();
        // this.chRef.reattach();
        // Now you can use jQuery DataTables :
        // const table: any = $('table');
        //  this.dataTable = table.DataTable();
        // this.dataTable = table.DataTable({
        //   lengthMenu: [1000, 2000, 5000],
        //   "iDisplayLength": 1000,
        //   retrieve: true
        // });

      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getById() {

    let Id: string = this.activeRoute.snapshot.params["Id"];
    if (Id) {
      let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE + `${Id}`;
      this._shipmentNoteService.getData(apiAddress)
        .subscribe(res => {

          this.shipmentNote = res as ShipmentNote;
          this.selectedWarehouse.Id = this.shipmentNote.WarehouseId;
          console.log(this.shipmentNote)
          this.parkingStageChange();
          //this.shipmentNote.AML_ShipmentNoteChild = 
          debugger
          this.getLocationKeyPair(this.shipmentNote.WarehouseId)
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    }
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }


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

  addMoveQuantity(event: any, item: any) {
    // debugger
    let movQty = event.target.value;
    if (movQty > item.Balance) {
      this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
    }
    else {
      // let model = this.shipmentNote.AML_ShipmentNoteChild.filter(a=> a.ShipmentNoteChildId == item.ShipmentNoteChildId);
      // model[0].MoveQuantity = event.target.value;

      item.MoveQuantity = parseInt(event.target.value);

    }

  }

  addPalletNo(event: any, item: any) {
    let PalletNo = event.target.value;

    item.PalletNo = event.target.value;

  }

  moveASN() {
    debugger
    this.asnListToPost.forEach(element => {
      element.TrasactionDate = this.formGroup.get('ReceiveDate').value;
      element.WarehouseId = this.shipmentNote.WarehouseId;
      element.CreatedBy = this.localStorageService.getUserId();
      element.CompanyId = this.localStorageService.getCompanyId();
      element.BusinessUnitId = this.localStorageService.getBusinessUnitId();
      this.TotalQtyReceived += element.MoveQuantity;

      });

    console.log(this.asnListToPost)

    let ASN: ShipmentNoteChild[] = this.asnListToPost;
    this.ngxService.start();

    //console.log(ASN);
    let apiUrl = this.apiConstant.SHIPMENT_NOTE_MOVE_WAREHOUSE + `/${this.shipmentNote.ShipmentNoteId}`;
    this._shipmentNoteService.update(apiUrl, ASN)
      .subscribe(res => {
        this.OpenModal();

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


  getParkingStagesKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PARKINGSTAGES_KEYPAIR;
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {

        this.parkingStageKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  parkingStageChange() {
    debugger

    this.shipmentNote.ParkingStageIdFrom = this.shipmentNote.ParkingStageId;

    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ParkingStageId: this.shipmentNote.ParkingStageId,
      ShipmentNoteId: this.shipmentNote.ShipmentNoteId
    }

    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_BY_PARKING_ID;
    this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.asnListToPost = res as ShipmentNoteChild[];
        debugger
        for (var j = 0; j < this.asnListToPost.length; j++) {
          this.asnListToPost[j].selected = false;
          this.asnListToPost[j].Location = 'H1R1RK1P1';
        }
        //console.log(this.shipmentNoteChild)
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onDeSelect(item: any) {
    //debugger
    // item={};
    // this.shipmentNote.ParkingStageIdFrom = null;
    item.selected = false;
  }

  parkingStageToChange(item: any) {
    this.shipmentNote.ParkingStageIdTo = item.Value;
  }

  onDeSelectparkingStageTo(item: any) {
    item = {};
    this.shipmentNote.ParkingStageIdTo = null;
  }
  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  redirectToListShipmentNote() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]);
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

  getGodownKeyPair(warehouseId: any) {
    let companyBusinessUnitInfo: any = {
      WarehouseId: warehouseId
    }
    let apiAddress: string = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownRowKeyPair(godownId: any) {

    let apiAddress: string = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + `/${godownId}`;
    this._shipmentNoteService.getData(apiAddress)
      .subscribe(res => {
        this.godownRowKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownRackKeyPair(godownRowId: any) {

    let apiAddress: string = this.apiConstant.GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID + `/${godownRowId}`;
    this._shipmentNoteService.getData(apiAddress)
      .subscribe(res => {
        this.godownRackKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownShelfKeyPair(godownRackId: any) {

    let apiAddress: string = this.apiConstant.GODOWN_SHELF_KEYPAIR_BY_GODOWN_RACK_ID + `/${godownRackId}`;
    this._shipmentNoteService.getData(apiAddress)
      .subscribe(res => {
        this.godownShelfKeyPair = res as DropdownListDto[];
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
          if (item.ItemRemainQuantity == 0 || item.ItemRemainQuantity == undefined || item.ItemRemainQuantity== null){
            item.ItemRemainQuantity = item.Balance - parseInt(item.MoveQuantity);
          }
          else {
            if(i== 0){
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

  addItemRelOrd(event:any, itemId:string, Batch:string){
    debugger
    let model = this.asnListToPost.filter(x=>x.ItemInformationId === itemId && x.Batch === Batch)[0];
    if(model){
      model.MoveQuantity=parseInt(event.target.value);

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

  autofiller(e, i, item){
    debugger
    var TransDate = this.formGroup.get('ReceiveDate').value;
    if (TransDate == undefined || TransDate == null || TransDate == "") {
      this.showToastrWarning("Please Select Receiving Date First then Proceed");
      return false;
    }
    else {
        var z = 0;
        this.asnListToPost.forEach(element => {
            this.warehouseKeyPairTemp.splice(x => x.GodownShelfId === element.LocationId,1)
        });
        this.TotalQtyPallet = 0;
        this.QtyPallet =  this.formGroup.get("QtyPallet").value;
        z = item.Balance / parseInt(this.QtyPallet);
        for (var j = 0; j < z; j++) {
          this.TotalQtyPallet += parseInt(this.QtyPallet);

          if (this.TotalQtyPallet > item.Balance){
            //debugger
            this.QtyPallet = this.TotalQtyPallet - item.Balance
          }
          let asnListToPostTemp: any = {
            Location: this.warehouseKeyPairTemp[j].Location,
            LocationId: this.warehouseKeyPairTemp[j].GodownShelfId,
            TrasactionDate: this.formGroup.get('ReceiveDate').value,
            ItemInformationId: item.ItemInformationId,
            Batch: item.Batch,
            Status: item.Status,
            MoveQuantity: this.QtyPallet,
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
        }
  }
  }
  CheckBoxChange(e, i, item) {
    //debugger
    // if (item.Location == undefined || item.Location == null) {
    //   this.showToastrWarning("Please Select Move Location for This Line Item");
    //   e.target.checked = false;
    //   return false;
    // }

    if (e.target.checked) {
      this.shipmentNoteChild[i].selected = true;

    } else { this.shipmentNoteChild[i].selected = false; }

  }
  pushAllChecked() {
    debugger
    var TransDate = this.formGroup.get('ReceiveDate').value;
    if (TransDate == undefined || TransDate == null || TransDate == "") {
      this.showToastrWarning("Please Select Receiving Date First then Proceed");
      return false;
    }
    else {
      debugger
      this.TotalQtyReceived = 0;
      this.shipmentNoteChild.forEach(element => {
        this.QtyRequired= 0;
        this.chkList = false;
        if (element.selected && element.MoveQuantity > 0) {
          this.asnListToPost.forEach(ele => {
            if(element.ItemInformationId === ele.ItemInformationId){
              this.QtyRequired += parseInt(ele.MoveQuantity);
            }
          });
          this.QtyRequired = this.QtyRequired + element.MoveQuantity;

          if(this.QtyRequired > element.Balance){
            this.showToastrWarning(element.Name + " : Move Quantity is greaterthan Received Qty");
            this.chkList = true;
            return false;
          }
        }
        this.TotalQtyReceived += element.MoveQuantity;
      });
      


    if(!this.chkList){
      this.shipmentNoteChild.forEach(element => {
        if (element.selected) {
          this.addItemIntoAsnToPostList(element);
          if (this.ListStatusErr == true) {
            debugger
            this.asnListToPost = null
            return false;
          }
        }

      });
    }
    }
  }
  AllCheckBoxBehaviour(param) {
    if (param == "selectAll") {
      for (var j = 0; j < this.shipmentNoteChild.length; j++) {
        this.shipmentNoteChild[j].selected = true;
      }
    } else if (param == "deSelectAll") {
      for (var j = 0; j < this.shipmentNoteChild.length; j++) {
        this.shipmentNoteChild[j].selected = false;
      }
    }
  }
  OpenModal() {
    $('#shipModal').show();
    //this.loadComponent = true;
  }
  CloseModal() {
    $('#shipModal').hide();
    this.redirectToListShipmentNote()
    // this.loadComponent = false;
  }


  public exportServiceAsExcel() {
    debugger
    let templist: any = [];
    templist = this.shipmentNoteChild;
    templist.forEach(item => {
      //   let templist :any =[];
      this.addItemIntoAsnToPostList2(item);
      //  this.asnListToPost.push({
      //     Location: this.selectedWarehouse.Name,
      //     LocationId:parseInt(this.selectedWarehouse.Id),
      //     TrasactionDate:this.formGroup.get('ReceiveDate').value,
      //     ItemInformationId:item.ItemInformationId,
      //     Batch:item.Batch,
      //     MoveQuantity:item.MoveQuantity,
      //     ExpiryDate:item.ExpiryDate,
      //     MfgDate:item.MfgDate,
      //     ParkingStageIdFrom:this.shipmentNote.ParkingStageIdFrom, 
      //     Name:item.Description, 
      //     ShipmentNoteChildId:item.ShipmentNoteChildId, 
      //     ShipmentNoteId:item.ShipmentNoteId,
      //     ASNNo:item.ASNNo  ,
      //     CompanyId: this.localStorageService.getCompanyId(),
      //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),      
      //     CreatedBy: this.localStorageService.getUserId(),
      //     LastModifiedBy: this.localStorageService.getUserId(),
      //     TotalCBM :item.ItemCBM*item.MoveQuantity,
      //     SNno:item.SNno,
      //     PRno:item.PRno,
      //     WarehouseId:this.shipmentNote.WarehouseId,
      //     PalletNo:'',


      //   });    
    });
    this.exporterService.exportToExcel(this.asnListToPost, 'Inbound Receiving to Warehouse');
    this.asnListToPost = [];

  }

  onServicePicked() {
    const formData = new FormData();
    //formData.append('ContractId', this.selectedContract.toString());
    //formData.append('CustomerId', this.selectedCustomer.toString());
    formData.append('file', this.servicePicked.nativeElement.files[0]);

    var errorList = "";
    var errorList1 = "";
    this.shipmentNote.Flag = false;
    if (formData) {
      debugger
      this.uploadFile(formData)
        .subscribe(msg => {
          this.asnListToPost = msg as any[];
          this.warehouseKeyPair
          this.shipmentNoteChild
          var i = 0
          debugger
          this.asnListToPost.forEach(element => {
            let ShipmentIDCheck = this.shipmentNoteChild.find(x => x.ShipmentNoteId === element.ShipmentNoteId);
            if (!ShipmentIDCheck) {
              element.unvalid = true;
              this.shipmentNote.Flag = true;
              this.showToastrError("INVALID SHIPMENT NOTE INFORMATION")
              this.asnListToPost = null;
              return;
            }
            let Locationcheck = this.warehouseKeyPair.find(x => x.Location === element.Location);

            let SKUCheck = this.shipmentNoteChild.find(x => x.Description === element.SKU && x.ItemInformationId === element.ItemInformationId);
            if (!Locationcheck || !SKUCheck) {
              element.unvalid = true;
              this.shipmentNote.Flag = true;
              if (!Locationcheck) {
                errorList = errorList + "\n" + element.Location;
              }
              else
                errorList1 = errorList1 + "\n" + element.SKU;
            }
            else {
              element.LocationId = Locationcheck.WarehouseId;
              element.GodownId = Locationcheck.GodwomId;
              element.GodownRowId = Locationcheck.GodownRowId;
              element.GodownRackId = Locationcheck.GodownRackId;
              element.GodownShelfId = Locationcheck.GodownShelfId;
              element.InboundPool = this.asnListToPost[i].InboundPool;
              element.TrasactionDate = this.formGroup.get('ReceiveDate').value;
            }
            i++;
          });

          //    debugger
          if (errorList != "" || errorList1 != "") {
            this.showToastrError("Wrong Location - " + "\n" + errorList + "\n" + " Wrong SKU Information - " + "\n" + errorList1);
          }
          console.log(this.shipmentNote.Flag);
        }
        );
    }
  }

  uploadFile(formData: FormData) {
    if (!formData) { return; }
    //let apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
    let apiUrl = '/File/UploadAsnToWarehouse';
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }
}
