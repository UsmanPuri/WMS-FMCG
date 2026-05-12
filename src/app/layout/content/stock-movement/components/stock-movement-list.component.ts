import { Component, Injector, OnInit } from "@angular/core";
import { StockMovementService } from "../services/stock-movement.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { StockMovement } from "../models/StockMovement";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "genx-stock-movement-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/stock-movement-form.component.scss"],
})
export class StockMovementListComponent extends BaseComponent {

  public stockMovementlist: StockMovement[];
  // Our future instance of DataTable
  dataTable: any;
  isCustomerOrder: boolean = false;
  warehouseKeyPair: DropdownListDto[];
  itemKeyPair: DropdownListDto[];
  hideShowList: any = [];

  constructor(injector: Injector, private stockMovementService: StockMovementService, router: Router,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getWarehouseKeyPair();
    this.addFormValidations();
    this.getAllMovementRecord();

    for (let i = 0; i < 10; i++) {
      this.hideShowList.push({ status: false });
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

  HideShow(index) {
    const i = Number(index)
    if (this.hideShowList[i].status) {
      this.hideShowList[i].status = false;
    }
    else {
      this.hideShowList[i].status = true;
    }

  }

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("DateFrom", requiredValidation);
    this.addFormControlWithValidations("DateTo", requiredValidation);


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

  getWarehouseKeyPair() {
    //debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        console.log(this.warehouseKeyPair);
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getAllMovementRecord() {
    debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.STOCK_MOVEMENT_LIST;
    this.stockMovementService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.stockMovementlist = res as StockMovement[];
        this.stockMovementlist.forEach(element => {
          element.warehouseName = this.warehouseKeyPair.filter(x => x.Value == element.WarehouseId).map(x => x.Text)[0];
        });
        console.log(this.stockMovementlist)
        

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable({
          lengthMenu: [5, 10, 20, 50, 100],
          "iDisplayLength": 100,
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


  redirectToCreateStockMovement() {
    this.router.navigate([this.routesList.STOCK_MOVEMENT_CREATE]);

  }

}
