import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { DatePipe } from '@angular/common'
import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteService } from "../services/shipment-note-manual.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { ModalManager } from "ngb-modal";
import { Pallet } from "../../pallet/models/Pallet";
import { GodownShelf } from "../../godown-shelf/models/GodownShelf";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { debug } from "console";
import { element } from "@angular/core/src/render3/instructions";
import { NgxUiLoaderService } from "ngx-ui-loader";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: "wms-shipment-note-manual-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/shipment-note-manual-form.component.scss"],
})
export class ShipmentNoteManualFormComponent extends BaseComponent {
  @ViewChild('modalItemLocation') modalItemLocation;
  @ViewChild('servicePicked') servicePicked;
  FromExcelData: any[] = [];
  private modalRef;
  BTN = false;
  BTNDup = false;
  palletDropdownSettings = {};
  palletList: Pallet[] = [];
  palletKeyPair: DropdownListDto[];
  palletCustomer = {};
  //isDisabled = false;
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  MFGDt:any;
  ExpiryDate: any;
  ShelfLife:any;
  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouse = { Id: null, Name: null };
  selectedParkingStage = {};
  godownDropdownSettings = {};
  godownKeyPair: DropdownListDto[];
  selectedGodown = { Id: null, Name: null };;
  parkingStageKeyPair: DropdownListDto[];
  itemDropdownSettings = {};
  itemKeyPair: DropdownListDto[];
  selectedItem = {};
  parkingStageDropdownSettings = {};
  status: boolean;
  shipmentNote: ShipmentNote;
  itemInformationByCustomer: any[] = [];

  shelfListForShipment: any[] = [];
  shipmentListToPost: any[] = [];
  CustomerId: any;
  selectedPallet = {};
  ReceivingDate:any;
  OffLoadingStartTime: any;
  OffLoadingEndTime: any;
  ReportingTime:any;
  TotalQty:any;

  constructor(injector: Injector, private http: HttpClient, private _shipmentNoteServiceService: ShipmentNoteService, private envUrl: EnvironmentUrlService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager, private datepipe: DatePipe,
    private exporterService: ExporterService, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getPalletKeyPair();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
    this.getParkingStagesKeyPair();
  }

  //Excel Conversion
  exportExcel(fileName, table_id, fileHeader): void {
    let element = document.getElementById(table_id);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, fileHeader);

    XLSX.writeFile(wb, fileName);
  }

  // CSV Converterd
  downloadCSV(data: any, filename: string) {

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, filename);
  }

  /**
  * The following method is used to add the form validations
  */
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("CustomerId", requiredValidation );
    this.addFormControlWithValidations("WarehouseId", requiredValidation);
    this.addFormControlWithValidations("ItemId", []);
    this.addFormControlWithValidations("ItemName", []);
    this.addFormControlWithValidations("ShipmentNoteNo", []);
    this.addFormControlWithValidations("DeliveryNo", []);
    this.addFormControlWithValidations("GodownId", []);
    this.addFormControlWithValidations("CargoStatus", []);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("ASNNo", requiredValidation);
    this.addFormControlWithValidations("ASNDate", requiredValidation);
    this.addFormControlWithValidations("DriverName", []);
    this.addFormControlWithValidations("VehicleNo", requiredValidation);
    this.addFormControlWithValidations("Quantity", []);
    this.addFormControlWithValidations("BoxQuantity", []);
    this.addFormControlWithValidations("MFGDate", []);
    this.addFormControlWithValidations("EXPDate", []);
    this.addFormControlWithValidations("Batch", []);
    this.addFormControlWithValidations("Status", []);
    this.addFormControlWithValidations("CBM", []);
    this.addFormControlWithValidations("PRno", []);
    this.addFormControlWithValidations("SNno", []);
    this.addFormControlWithValidations("ParkingStageId", requiredValidation);
    this.addFormControlWithValidations("GatePass", []);
    this.addFormControlWithValidations("TempOut", []);
    this.addFormControlWithValidations("TempIn", []);
    this.addFormControlWithValidations("MobileNo", []);
    this.addFormControlWithValidations("ServiceRequest", []);
    this.addFormControlWithValidations("RMA", []);
    this.addFormControlWithValidations("RecievedFrom", []);
    this.addFormControlWithValidations("ConsignmentNo", []);
    this.addFormControlWithValidations("ICare", []);
    this.addFormControlWithValidations("isDisabled", [], true);
    this.addFormControlWithValidations("BusinessType", []);
    this.addFormControlWithValidations("InboundPool", []);
    this.addFormControlWithValidations("Network", []);
    this.addFormControlWithValidations("DeliveryType", []);
    this.addFormControlWithValidations("ReceivedStation", []);
    this.addFormControlWithValidations("ContractNo", []);
    this.addFormControlWithValidations("PackingListNo", []);
    this.addFormControlWithValidations("InboundAgainst", []);
    this.addFormControlWithValidations("HandlerName", []);
    this.addFormControlWithValidations("ReceiveDate", requiredValidation);
    this.addFormControlWithValidations("OffLoadStartDate", []);
    this.addFormControlWithValidations("OffLoadEndDate", []);
    this.addFormControlWithValidations("VehicleSize", requiredValidation);
    this.addFormControlWithValidations("Transporter", requiredValidation);
    this.addFormControlWithValidations("SealNo", requiredValidation);
    this.addFormControlWithValidations("ReportingTime", []);

  }

  getPalletKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PALLET_LIST;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        let tempPalletDropdown = [];
        this.palletList = res as Pallet[];
        this.palletList.forEach(element => {
          tempPalletDropdown.push({
            Value: element.PalletId,
            Text: element.Title + " " + element.Size
          })
        });
        this.palletKeyPair = tempPalletDropdown;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  getCustomerKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
        
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getItemInformationKeyPair(customerId: any) {
    let apiAddress: string = this.apiConstant.ITEM_GetItemInformationByCustomerId + `${customerId}`;
    this.ngxService.start();
    debugger
    this._shipmentNoteServiceService.getData(apiAddress)
      .subscribe(res => {
        this.itemInformationByCustomer = res as any[];
        debugger
        let itemTemDropdown: any[] = [];
        this.itemInformationByCustomer.forEach(element => {
          itemTemDropdown.push({
            Value: element.itemInformation.ItemInformationId,
            Text: element.itemInformation.Description + " | " + element.ItemBrand.Name + " | " + element.itemInformation.Name,
            Description: element.itemInformation.Description,
            ShelfLife: element.itemInformation.AML_Item.ShelfLife
          })
        });
        debugger
        this.itemKeyPair = itemTemDropdown;
        console.log(res);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
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
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onSelect(item: any, dropDownName: string) {
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
    if (dropDownName === 'selectedCustomer') {
      this.itemKeyPair = [];
      this.CustomerId = item.Value;
      
      this.getItemInformationKeyPair(item.Value);
    }
    if (dropDownName === 'selectedWarehouse') {
      this.formGroup.get("GodownId").setValue('');
      this.godownKeyPair = [];
      this.getGodownKeyPair(item.Value);
    }
    if (dropDownName === 'selectedItem') {
      debugger
      let itemName = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Name;
      let Width = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Width;
      let Length = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Length;
      let Height = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Height;
      let CBM = (Width * 2.54 * Length * 2.54 * Height * 2.54) / 1000000;
      this.formGroup.get("ItemName").setValue(itemName);
      this.formGroup.get("CBM").setValue(CBM.toFixed(2));
      this.ShelfLife = this.itemInformationByCustomer
      .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.AML_Item.ShelfLife;

    }
  }
  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
  }

  MFGDateChange(item){
    debugger
    this.MFGDt = new Date(this.formGroup.get('MFGDate').value);
    //this.MFGDt = this.MFGDt.getDate() 
    const date = new Date(this.formGroup.get('MFGDate').value);
    //this.formGroup.get("Batch").setValue(date.getFullYear() + '' + date.getMonth() + '' + date.getDate());
    const theDayOfTheMonthOnNextWeek = date.getDate() + this.ShelfLife;
    date.setDate(theDayOfTheMonthOnNextWeek);
    this.ExpiryDate = date;
    //this.formGroup.get("EXPDate").setValue(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear());
    
  }

  private getItemInformationObject(itemInformationId: any) {
    return this.itemInformationByCustomer.filter(x => x.itemInformation.ItemInformationId == itemInformationId)[0];
  }

  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
  }

  ASNDuplicateChk(){
  debugger
  const ASNDuplicate= this.formGroup.get('ASNNo').value;
  if(ASNDuplicate!=null){
    let obj: any = {
      SnNo: ASNDuplicate,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiUrl = this.apiConstant.CHECK_DUPLICATE_ASN;
    this._shipmentNoteServiceService.create(apiUrl, obj)
      .subscribe(res => {
        // debugger
        let isExist = res;
        if (isExist) {
          this.showToastrError("PO/Material # Already Available.");
          this.formGroup.get('ASNNo').setValue('');
        }

      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
  }

  getParkingStagesKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PARKINGSTAGES_KEYPAIR;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.parkingStageKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  parkingStageChange(item: any) {
    this.selectedParkingStage = {
      Id: item.Value,
      Name: item.Text
    };

    //this.shipmentNote.ParkingStageId = item.Value;
  }

  OffLoadStartDateChange(item: any) {
    debugger
    this.OffLoadingStartTime = item.target.value;
  }

  OffLoadEndDateChange(item: any) {
    debugger
    this.OffLoadingEndTime = item.target.value;
  }

  ReportingTimeChange(item: any) {
    debugger
    this.ReportingTime = item.target.value;
  }
  ReceivingDateChange(item: any) {
    debugger
    this.ReceivingDate = item.target.value;
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
    this.godownDropdownSettings = {
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
    this.warehouseDropdownSettings = {
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
    this.parkingStageDropdownSettings = {
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

  redirectToShipmentNoteList() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
  }

  addShipmentItemManualy() {
    debugger
    //let batch = this.formGroup.get('Batch').value;
    let batch = this.datepipe.transform(this.MFGDt, 'yyMMdd')+ 'S000';
    let SNno1 = this.formGroup.get('SNno').value;
    if (!this.selectedItem || !this.selectedItem['Id']) {
      this.showToastrWarning("Please Select Item SKU First...!")
      return false;
    }
    else if (this.formGroup.get('Quantity').value == "" || this.formGroup.get('Quantity').value <= 0) {
      this.showToastrWarning("Please Insert Item Quantity Properly...!")
      return false;
    }
    {
      const index = this.shipmentListToPost.findIndex((e) => e.SNno === SNno1);
      if ((index === -1) || (index === 0 && SNno1 === "")) {
        this.shipmentListToPost.push({
          Name: this.selectedItem['Name'],
          SKU: this.selectedItem['Description'],
          ItemInformationId: this.selectedItem["Id"],
          Batch: batch,   //formatDate (this.MFGDt, 'yyMMdd') + 'S000',
          Status: this.formGroup.get('Status').value,
          Quantity: this.formGroup.get('Quantity').value,
          NoOfBoxes: this.formGroup.get('BoxQuantity').value,
          PRno: this.formGroup.get('PRno').value,
          SNno: this.formGroup.get('SNno').value,
          ExpiryDate: this.datepipe.transform(this.ExpiryDate,'yyyy-MM-dd'),
          MfgDate: this.formGroup.get('MFGDate').value,
          Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
          TotalCBM: this.formGroup.get('Quantity').value * this.formGroup.get('CBM').value,
          GatePass: this.formGroup.get('GatePass').value,
          ServiceRequest: this.formGroup.get('ServiceRequest').value,
          RMA: this.formGroup.get('RMA').value,
          RecievedFrom: this.formGroup.get('RecievedFrom').value,
          ConsignmentNo: this.formGroup.get('ConsignmentNo').value,
          ICare: this.formGroup.get('ICare').value,
          BusinessType: this.formGroup.get('BusinessType').value,
          InboundPool: this.formGroup.get('InboundPool').value,
          Network: this.formGroup.get('Network').value,
          DeliveryType: this.formGroup.get('DeliveryType').value,
          ReceivedStation: this.formGroup.get('ReceivedStation').value,
          ContractNo: this.formGroup.get('ContractNo').value,
          PackingListNo: this.formGroup.get('PackingListNo').value,
          InboundAgainst: this.formGroup.get('InboundAgainst').value,
          HandlerName: this.formGroup.get('HandlerName').value,

        })
        this.selectedItem = {};
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("Batch").setValue('');
        this.formGroup.get("Status").setValue('');
        this.formGroup.get("EXPDate").setValue('');
        this.formGroup.get("MFGDate").setValue('');
        this.formGroup.get("Quantity").setValue('');
        this.formGroup.get("BoxQuantity").setValue('');
        this.formGroup.get("CBM").setValue('');
        this.formGroup.get("PRno").setValue('');
        this.formGroup.get("SNno").setValue('');
        this.formGroup.get("GatePass").setValue('');
        this.formGroup.get("ServiceRequest").setValue('');
        this.formGroup.get("RecievedFrom").setValue('');
        this.formGroup.get("ConsignmentNo").setValue('');
        this.formGroup.get("ICare").setValue('');
        this.formGroup.get("RMA").setValue('');
        this.formGroup.get('BusinessType').setValue('');
        this.formGroup.get('InboundPool').setValue('');
        this.formGroup.get('Network').setValue('');
        this.formGroup.get('DeliveryType').setValue('');
        this.formGroup.get('ReceivedStation').setValue('');
        this.formGroup.get('ContractNo').setValue('');
        this.formGroup.get('PackingListNo').setValue('');
        this.formGroup.get('InboundAgainst').setValue('');
        this.formGroup.get('HandlerName').setValue('');
        this.qtyCount();

      }
      else {
        this.showToastrWarning("Not Allowed To Add Same SN# into Below List...!")
        return false;
      }

    }
  }

  CheckDate() {
    let mfgDate = this.formGroup.get('MFGDate').value;
    let expDate = this.formGroup.get('EXPDate').value;

    if (mfgDate > expDate) {
      this.showToastrWarning("Please Select Date After The Mfg Date");
      this.formGroup.get("EXPDate").setValue('');
    }
  }


  qtyCount(){
    debugger
    this.TotalQty = 0;
    this.shipmentListToPost.forEach(element => {
      this.TotalQty += parseInt(element.Quantity);
    });
  }

  deleteFromShipmentListManual(item: any) {
    this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1);
    this.qtyCount();
  }

  public createShipmentNote(formValue) {

    if (this.formGroup.valid) {
      if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
      //   this.showToastrWarning("Select Warehouse please.");
      //   return false;
      // }
      this.executeShipmentNoteCreation(formValue);
    }
  }

  private executeShipmentNoteCreation(formValue) {
    debugger
    let shipmentNote: ShipmentNote = {
      ShipmentNoteNo: formValue.ShipmentNoteNo,
      CustomerID: this.selectedCustomer["Id"],
      CargoStatus: formValue.CargoStatus,
      WarehouseId: this.selectedWarehouse["Id"],
      GodownId: this.selectedGodown["Id"],
      Remarks: formValue.Remarks,
      ASNNo: formValue.ASNNo,
      DeliveryNo: formValue.DeliveryNo,
      ASNDate: formValue.ASNDate,
      DriverName: formValue.DriverName,
      VehicleNo: formValue.VehicleNo,
      MobileNo: formValue.MobileNo,
      ReceivingDate: this.ReceivingDate,
      OffLoadingStartTime: this.OffLoadingStartTime,
      OffLoadingEndTime: this.OffLoadingEndTime,
      TempIn: formValue.TempIn,
      TempOut: formValue.TempOut,
      VehicleSize: formValue.VehicleSize,
      Transporter: formValue.Transporter,
      SealNo: formValue.SealNo,
      ReportingTime: this.ReportingTime,
      ParkingStageId:this.selectedParkingStage["Id"],
      ShipmentNoteChilds: this.shipmentListToPost,
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()

    }
    //debugger
    let apiUrl = this.apiConstant.SHIPMENT_NOTE_CREATE;
    //this.ngxService.start();
    this._shipmentNoteServiceService.create(apiUrl, shipmentNote)
      .subscribe(res => {
        this.showToastrSuccess("Shipment Note created successfully");
        setTimeout(() => {
          this.redirectToShipmentNoteList();
        }, 2000);
        //this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
  public exportServiceAsExcel() {
    //debugger
    this.shipmentListToPost.push({
      ItemInformationId: '',
      SKU: '',
      Name: '',
      Batch: '',
      Status: '',
      Quantity: '',
      NoOfBoxes: '',
      PRno: '',
      SNno: '',
      ExpiryDate: '',
      MfgDate: '',
      Price: '',
      TotalCBM: '',
      GatePass: '',
      ServiceRequest: '',
      RMA: '',
      RecievedFrom: '',
      ConsignmentNo: '',
      ICare: '',
      BusinessType: '',
      HandlerName: '',
      InboundPool: '',
      Network: '',
      PackingListNo: '',
      ReceivedStation: '',
      ContractNo: '',
      DeliveryType: ''
    })
    this.exporterService.exportToExcel(this.shipmentListToPost, 'AdvanceShipment');
    this.shipmentListToPost = [];
  }
  public exportServiceAsCSV() {
    //debugger
    this.shipmentListToPost.push({
      ItemInformationId: '',
      SKU: '',
      Name: '',
      Batch: '',
      Status: '',
      Quantity: '',
      NoOfBoxes: '',
      PRno: '',
      SNno: '',
      ExpiryDate: '',
      MfgDate: '',
      Price: '',
      TotalCBM: '',
      GatePass: '',
      ServiceRequest: '',
      RMA: '',
      RecievedFrom: '',
      ConsignmentNo: '',
      ICare: ''
    })
    this.exporterService.exportToExcel(this.shipmentListToPost, "test");
    this.shipmentListToPost = [];
  }
  onServicePicked() {
    const formData = new FormData();
    var errorList = "";

    //formData.append('ContractId', this.selectedContract.toString());
    formData.append('CustomerId', this.selectedCustomer.toString());
    formData.append('file', this.servicePicked.nativeElement.files[0]);
    if (formData) {
      this.uploadFile(formData)
        .subscribe(msg => 
        {
          this.shipmentListToPost = msg as any[];
          this.shipmentListToPost.forEach(element => {

            if (element.ItemInformationId === "0") {
              this.BTN = true;
            }
            else {
              let obj: any = {
                SnNo: element.SNno,
                CompanyId: this.localStorageService.getCompanyId(),
                BusinessUnitId: this.localStorageService.getBusinessUnitId()
              }

              let apiUrl = this.apiConstant.CHECK_DUPLICATE_SN;
              this._shipmentNoteServiceService.create(apiUrl, obj)
                .subscribe(res => {
                  let isExist = res;
                  if (isExist) {
                    // this.showToastrError("SN# Already Available.");
                    // this.formGroup.get('SNno').setValue('');

                    element.ICare == "1",

                      errorList = errorList + "\n" + element.SNno;
                  }
                  console.log(this.shipmentListToPost);
                  if (errorList != "") {
                    debugger
                    this.showToastrError("Duplicate SN Found in Import List - " + "\n" + errorList + "\n");
                    this.BTN = true;
                  }
                },
                  (error => {
                    this.errorHandler.handleError(error);
                    this.errorMessage = this.errorHandler.errorMessage;
                  })
                )
            }

          })

        }
        );

    }
  }
  uploadFile(formData: FormData) {
    if (!formData) { return; }
    let apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }

  IsSNno() {
    let obj: any = {
      BatchId: this.formGroup.get('Batch').value,
      SnNo: this.formGroup.get('SNno').value,
      WarehouseId: this.selectedWarehouse["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }

    let apiUrl = this.apiConstant.CHECK_DUPLICATE_SN;
    this._shipmentNoteServiceService.create(apiUrl, obj)
      .subscribe(res => {
        // debugger
        let isExist = res;
        if (isExist) {
          this.showToastrError("SN# Already Available.");
          this.formGroup.get('SNno').setValue('');
        }

      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    let sn = this.formGroup.get('SNno').value;
    if (sn != undefined && sn != "") {
      this.formGroup.get('Quantity').setValue(1);
      this.formGroup.get('Quantity').disable();
      this.formGroup.get('isDisabled').setValue(true);
    } else {
      this.formGroup.get('isDisabled').setValue(false);
      this.formGroup.get('Quantity').setValue("");
      this.formGroup.get('Quantity').enable();
    }


  }

  redirectToCreateItem() {
    // window.open(this.routesList.ITEM_CREATE, "_blank");
    this.router.navigate([]).then(result => { window.open(this.routesList.ITEM_CREATE, '_blank'); });
  }

  refreshItem() {
    this.getItemInformationKeyPair(this.CustomerId);
  }

  checkDuplicate(formValue) {

  }
}
