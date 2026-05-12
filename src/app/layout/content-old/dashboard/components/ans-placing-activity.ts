import { Component, Injector, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { Dashboard } from "../models/Dashboard";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-ans-placing-activity",
  templateUrl: "../templates/ans-placing-activity.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class ANSPlacingActivityComponent extends BaseComponent {
  public listAnsPlacing: any[] = [];
  public listAnsPlacingSummary: any[] = [];
  dataTable: any;

  hideShowList1: any[] = [];
  hideShowList2: any[] = [];

  constructor(injector: Injector, private _dashboardService: DashboardService, private exporterService: ExporterService,
    private ngxService: NgxUiLoaderService, private chRef: ChangeDetectorRef,) {
    super(injector);
  }

  ngOnInit() {
    this.getANSPlacingLocation();

    for (let i = 0; i < 13; i++) {
      this.hideShowList1.push({ status: true });
    }

    for (let i = 0; i < 4; i++) {
      this.hideShowList2.push({ status: true });
    }

    this.hideShowList1[0].status = false;
    this.hideShowList1[1].status = false;
    this.hideShowList1[2].status = false;
    this.hideShowList1[3].status = false;
    this.hideShowList1[4].status = false;
    this.hideShowList1[5].status = false;
    this.hideShowList1[6].status = false;
    this.hideShowList1[7].status = false;
    this.hideShowList1[8].status = false;
    this.hideShowList1[9].status = false;
    this.hideShowList1[10].status = false;
    this.hideShowList1[11].status = false;
    this.hideShowList1[12].status = false;

    this.hideShowList2[0].status = false;
    this.hideShowList2[1].status = false;
    this.hideShowList2[2].status = false;
    this.hideShowList2[3].status = false;

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
  HideShow1(index) {
    const i = Number(index)
    if (this.hideShowList1[i].status) {
      this.hideShowList1[i].status = false;
    }
    else {
      this.hideShowList1[i].status = true;
    }

  }

  HideShow2(index) {
    const i = Number(index)
    if (this.hideShowList1[i].status) {
      this.hideShowList2[i].status = false;
    }
    else {
      this.hideShowList2[i].status = true;
    }

  }


  getANSPlacingLocation() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    this.ngxService.start();
    let apiAddress: string = this.apiConstant.DASHBOARD_ANS_PLACING;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.listAnsPlacing = res as any[];
        // console.log(this.listAnsPlacing)
        // Now you can use jQuery DataTables :
        this.chRef.detectChanges();
        this.chRef.reattach();

        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [500, 1000, 2000],
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

  getANSPlacingLocationSummary() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.DASHBOARD_ANS_PLACING_SUMMERY;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.listAnsPlacingSummary = res as any[];
        //console.log(this.listAnsPlacingSummary)
        this.chRef.detectChanges();
        this.chRef.reattach();
        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [500, 1000, 2000],
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

  summaryInfo() {
    this.getANSPlacingLocationSummary();
  }

}
