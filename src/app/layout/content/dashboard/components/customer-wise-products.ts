
import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";


import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";

import { NgxUiLoaderService } from 'ngx-ui-loader';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-customer-wise-product",
  templateUrl: "../templates/customer-wise-products.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class CustomerWiseProductsComponent extends BaseComponent {

  public ItemList: any[] = [];
  // Our future instance of DataTable
  dataTable: any;
  hideShowList: any[] = [];

  constructor(injector: Injector, private _dashboardService: DashboardService, private chRef: ChangeDetectorRef,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllModuleCustomers();

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


  getAllModuleCustomers() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.DASHBOARD_ALL_PRODUCTS;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.ItemList = res as any[];
        console.log(this.ItemList)
        
        this.chRef.detectChanges();
        this.chRef.reattach();
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
        this.dataTable = table.DataTable({
          lengthMenu: [500, 1000],
          "iDisplayLength": 500,
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

