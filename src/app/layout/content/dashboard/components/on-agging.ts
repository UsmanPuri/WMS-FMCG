import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { Component, Injector, ChangeDetectorRef,OnInit, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, ValidatorFn, Validators, FormGroup } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { Dashboard } from "../models/Dashboard";
import { ModalManager } from "ngb-modal";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { toDate } from '@angular/common/src/i18n/format_date';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

@Component({
  selector: "wms-on-agging",
  templateUrl: "../templates/on-agging.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class OnAggingComponent extends BaseComponent {
  @ViewChild('AllModal') AllModal;
  form: FormGroup;

  public listOfItem: any[] = [];
  public listAvailableStock: any = [];
  dataTable: any;
  hideShowList: any[] = [];
  modalRef: any;
  TotalQty: any;
  InboundPool: any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  warehouseDropdownSettings = {};
  selectedWarehouseId = { Id: '', Name: '' };
  selectedCustomerId = { Id: '', Name: '' };
  warehouseKeyPair: DropdownListDto[];
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];

  constructor(injector: Injector, private _dashboardService: DashboardService, private exporterService: ExporterService,
    fb: FormBuilder, private ngxService: NgxUiLoaderService, private chRef: ChangeDetectorRef, private modalService: ModalManager) {
    super(injector);
    this.form = fb.group({
      WarehouseId: ['']
    })
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropDownSettings();
    this.CompanyInfo();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
    for (let i = 0; i < 19; i++) {
      this.hideShowList.push({ status: true });
    }

    this.hideShowList[0].status = false;
    this.hideShowList[1].status = false;
    this.hideShowList[2].status = false;
    this.hideShowList[3].status = false;
    this.hideShowList[4].status = false;
    this.hideShowList[5].status = false;
    this.hideShowList[6].status = false;
    this.hideShowList[7].status = false;
    this.hideShowList[8].status = false;
    this.hideShowList[9].status = false;
    this.hideShowList[10].status = false;
    this.hideShowList[11].status = false;
    this.hideShowList[12].status = false;
    this.hideShowList[13].status = false;
    this.hideShowList[14].status = false;
    this.hideShowList[15].status = false;
    this.hideShowList[16].status = false;
    this.hideShowList[17].status = false;
    this.hideShowList[18].status = false;

  }
  getCustomerKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  //Excel Conversion
  exportExcel(fileName, table_id, fileHeader): void {
    let element = document.getElementById(table_id);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, fileHeader);

    XLSX.writeFile(wb, fileName);
  }

  //PDF Conversion

  createPdf(my_file, table_id) {
    const doc = new jsPDF({ orientation: "landscape" });
    autoTable(doc, { html: table_id })
    doc.save(my_file)
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

  // Hiding Column
  HideShow(index) {
    const i = Number(index)
    if (this.hideShowList[i].status) {
      this.hideShowList[i].status = false;
    }
    else {
      this.hideShowList[i].status = true;
    }

  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId(),
      IsTransferOrderForm: false
    }
    debugger
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        //this.getAvailablestock();
        this.ngxService.stop();
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getListOnAgging(fromDate, toDate) {
    debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      DateFrom: fromDate.value,
      DateTo: toDate.value,
      WarehouseId: this.selectedWarehouseId,
      CustomerId: (this.selectedCustomerId['Id'])
    }
    this.ngxService.start();
    this.listOfItem = null;
    let apiAddress: string = this.apiConstant.DASHBOARD_STOCKMOVEMENT;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.listOfItem = res as any[];
        console.log(this.listOfItem)
         this.chRef.detectChanges();
         this.chRef.reattach();
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [5000, 10000],
          "iDisplayLength": 5000,
          retrieve: true
        });
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  search(fromDate, toDate) {
    debugger
    console.log(fromDate.value);
    console.log(toDate.value);
    this.getListOnAgging(fromDate, toDate);
  }

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("fromDate", requiredValidation);
    this.addFormControlWithValidations("toDate", requiredValidation);
    this.addFormControlWithValidations("WarehouseId",requiredValidation)
    this.addFormControlWithValidations("CustomerId",requiredValidation)
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
        return "Its Required";
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
    let TempList = [];
    console.log(this.listOfItem)
    this.listOfItem.forEach(element => {

      let obj = {
        TransctionDate: element.TransctionDate,
        Warehouse: element.Abbrivation,
        DeliverTo: element.ContactPerson,
        City: element.City,
        DispatchMode: element.waybill,
        SKUCode: element.Description,
        SKUName: element.Name,
        Batch: element.BatchCode,
        SNno: element.SNno,
        StockIn: element.StockIn,
        StockOut: element.StockOut,
        Ref: element.RecordReference

      }
      TempList.push(obj);
    });
    this.exporterService.exportToExcel(TempList, 'Stock Movement Activity');
  }

   private dropDownSettings() {
    this.warehouseDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.customerDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  onDeSelectWarehouse(event: any) {
    debugger;
    this.selectedWarehouseId = {
      Id: "",
      Name: ""
    };
  }

  selectedWarehouse(event: any) {
    this.selectedWarehouseId = event.Value;
  }

  openModal() {
    this.modalRef = this.modalService.open(this.AllModal, {
      // title:"Available Stock Report",
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-lg',
    })
  }
  selectedCustomer(event: any) {
    this.selectedCustomerId = {
      Id: event.Value,
      Name: event.Name
    }
  }

    onDeSelectCustomer(event: any) {
    debugger;
    this.selectedCustomerId = {
      Id: "",
      Name: ""
    };
  }

  public exportServiceAsCSV() {
    //debugger
    this.listAvailableStock.push({
      Sr: '',
      Warehouse: '',
      ActDate: '',
      DeliverTo: '',
      Phone: '',
      OrderNo: '',
      City: '',
      DispatchMode: '',
      SKUCode: '',
      SKUName: '',
      Batch: '',
      SNno: '',
      StockIN: '',
      StockOUT: '',
      RefNo: '',
      ASN: '',
      ManualGP: ''
    })
    this.exporterService.exportToExcel(this.listOfItem, "Stock Movement Activity");
    
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

}
