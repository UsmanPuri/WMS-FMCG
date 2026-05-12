import { Component, Injector, OnInit, Input,ViewChild, ChangeDetectorRef } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { Dashboard } from "../models/Dashboard";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-expired-item",
  templateUrl: "../templates/expired-item.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class ExpiredItemComponent extends BaseComponent {
  public listAvailableStock: any[] = [];
  dataTable: any;
  hideShowList: any[] = [];
  public TempList: any[] = [];
  subscription: any;
  NoOfRecords: number;
  addInList:number;
  TotQuantityInPacking:number;

  constructor(injector: Injector, private _dashboardService: DashboardService, 
    private exporterService: ExporterService, private chRef: ChangeDetectorRef,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAvailablestock();

    for (let i = 0; i < 9; i++) {
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
  }


  //Excel Conversion
  exportExcel(fileName, table_id, fileHeader): void {
    debugger
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
    debugger
    const i = Number(index)
    if (this.hideShowList[i].status) {
      this.hideShowList[i].status = false;
    }
    else {
      this.hideShowList[i].status = true;
    }

  }

  getAvailablestock() {
    this.ngxService.start();

    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
    }
    this.listAvailableStock = [];
    let apiAddress: string = this.apiConstant.DASHBOARD_FRESHNESS_REPORT;
    this.subscription = this._dashboardService.create(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
      
        //this.dataTable = null;
        console.log(res);
        this.NoOfRecords = Object.keys(res).length;
         debugger
         this.listAvailableStock = res as any[];
         this.addInList =0; this.TotQuantityInPacking=0;
        this.listAvailableStock.forEach(element => {
          this.addInList = this.addInList + element.Balance;
          this.TotQuantityInPacking = this.TotQuantityInPacking + (element.QuantityInPacking * element.Balance);
          // let addInList = this.TempList.filter(x => x.WarehouseId == parseInt(element.Value));
          // this.listAvailableStock = this.listAvailableStock.concat(addInList)
        });
        
        // this.listAvailableStock.sort((a, b) => {
        //   return a.Aging - b.Aging;
        // });

        this.ngxService.stop();
        debugger
         this.chRef.detectChanges();
         this.chRef.reattach();
        // Now you can use jQuery DataTables :
         const table: any = $('table');
        //  this.dataTable = table.DataTable();
         this.dataTable = table.DataTable({
           lengthMenu: [1000, 2000, 5000],
           "iDisplayLength": 1000,
           retrieve: true
         });

      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }
  public exportServiceAsCSV() {
    //debugger
    this.exporterService.exportToExcel(this.listAvailableStock, "Freshness Report");
    this.TempList = [];
  }
  
  getAllExpiredItem() {
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.DASHBOARD_EXPIREDPRODUCTS;
    this._dashboardService.getData(apiAddress)
      .subscribe(res => {
        this.listAvailableStock = res as any[];
        console.log(this.listAvailableStock)
        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [500, 1000],
          "iDisplayLength": 1000,
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

}
