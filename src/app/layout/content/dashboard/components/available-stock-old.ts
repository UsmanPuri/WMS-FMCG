import { Component, Injector, OnInit, Input,  ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { HttpClient } from '@angular/common/http';
import { Dashboard } from "../models/Dashboard";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ModalManager } from "ngb-modal";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-available-stock",
  templateUrl: "../templates/available-stock.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class AvailableStockComponent extends BaseComponent implements OnInit {
  @ViewChild('AllModal') AllModal;
  form: FormGroup;

  public listAvailableStock: any = [];
  public TempList: any[] = [];
  dataTable: any;

  hideShowList: any[] = [];

  dropdownHideShow: boolean = false;
  warehouseKeyPair: DropdownListDto[];
  customerKeyPair: DropdownListDto[];
  warehouseDropdownSettings = {};
  customerDropdownSettings = {};
  selectedWarehouseId = { Id: '', Name: '' };
  selectedCustomerId = { Id: '', Name: '' };
  modalRef: any;
  TotalQty: any;
  InboundPool: any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;

  constructor(injector: Injector, private http: HttpClient, private _dashboardService: DashboardService, private exporterService: ExporterService,
   fb: FormBuilder, private ngxService: NgxUiLoaderService, private modalService: ModalManager) {
    super(injector);

    this.form = fb.group({
      WarehouseId: [''],
      CustomerId: [''],
      FromDate: [''],
      ToDate: ['']
    })
  }

  ngOnInit() {
    //debugger
    this.getWarehouseKeyPair();
    this.dropDownSettings();
    this.getCustomerKeyPair();
    this.CompanyInfo();

    for (let i = 0; i < 16; i++) {
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
  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId(),
      IsTransferOrderForm: false
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        //this.getAvailablestock();
        // this.ngxService.stop();
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
      LoggedUserId: this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
        debugger
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getAvailablestock() {
    this.ngxService.start();
    debugger;
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
    }

    if (this.selectedWarehouseId){
      companyBusinessUnitInfo.WarehouseId= (this.selectedWarehouseId['Id']==='') ? 0 : this.selectedWarehouseId
    }
    if (this.selectedCustomerId){
      companyBusinessUnitInfo.CustomerId= (this.selectedCustomerId['Id']==='') ? 0 : this.selectedCustomerId;
    }
    
    let apiAddress: string = this.apiConstant.DASHBOARD_AVAILABLE_STOCK_WAREHOUSE_CUSTOMER;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.listAvailableStock = [];
        this.dataTable = null;
        this.listAvailableStock = res as any[];

        // this.warehouseKeyPair.forEach(element => {
        //   let addInList = this.TempList.filter(x => x.WarehouseId == parseInt(element.Value));
        //   this.listAvailableStock = this.listAvailableStock.concat(addInList)
        // });
        this.ngxService.stop();

        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [10000, 20000, 50000],
          "iDisplayLength": 10000,
          retrieve: true
        });
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  onSelect(item: any, dropDownName: string) {
    debugger;
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
  }

  onDeSelect() {
    this.listAvailableStock = null;
  
  }

  onDeSelectCustomer(event: any) {
    debugger;
    this.selectedCustomerId = {
      Id: "",
      Name: ""
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

  selectedCustomer(event: any){
    this.selectedCustomerId = event.Value;
  }

  search() {
    // debugger
    // let companyBusinessUnitInfo = {
    //   CompanyId: this.localStorageService.getCompanyId(),
    //   BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    //   WarehouseId: this.selectedWarehouseId,
    //   CustomerId: this.selectedCustomerId
    // }
    this.getAvailablestock();
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

  public exportServiceAsExcel() {
    // debugger
    let TempList = [];
    this.listAvailableStock.forEach(element => {

      let obj = {
        TransctionDate: element.TransctionDate,
        Aging: element.Aging,
        Warehouse: element.Warehouse,
        Location: element.Location,
        Status: element.Status,
        Description: element.Description,
        Name: element.Name,
        SNno: element.SNno,
        CustomerName: element.CustomerName,
        BatchCode: element.BatchCode,
        PalletNo: element.PalletNo,
        Balance: element.Balance,
        Pool: element.Pool
      }
      TempList.push(obj);
    });
    this.exporterService.exportToExcel(TempList, 'Available Stock');
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

}
