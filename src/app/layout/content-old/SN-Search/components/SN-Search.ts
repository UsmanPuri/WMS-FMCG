import { Component, Injector, OnInit, Input, ChangeDetectorRef,  ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { SNSearchService } from "../services/SN-Search";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { HttpClient } from '@angular/common/http';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RepositoryService } from 'src/app/helpers/services/repository.service';
import { ModalManager } from "ngb-modal";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-SN-Search",
  templateUrl: "../templates/SN-Search.html",
  styleUrls: ["../styles/SN-Search.scss"],
})
export class SNSearchComponent extends BaseComponent implements OnInit {
  @ViewChild('AllModal') AllModal;
  form: FormGroup;

  public listAvailableStock: any = [];
  public TempList: any[] = [];
  dataTable: any;
  hideShowList: any[] = [];
  dropdownHideShow: boolean = false;
  fieldKeyPair: any[];
  RecordTypePair: any[];
  fieldDropdownSettings = {};
  recordfieldDropdownSettings = {};
  modalRef: any;
  TotalQty: any;
  InboundPool: any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  selectedfieldId: DropdownListDto[];
  selectedRecordTypeId: DropdownListDto[];

  constructor(injector: Injector, private http: HttpClient, private _snSearchService: SNSearchService, private exporterService: ExporterService,
    fb: FormBuilder, private ngxService: NgxUiLoaderService, private chRef: ChangeDetectorRef, private modalService: ModalManager) {
    super(injector);

    this.form = fb.group({
      searchPanel: [''],
      fieldId: [''],
      RecordTypeId:['']
    })
  }

  ngOnInit() {
    this.dropDownSettings();
    this.dropdownList();

    for (let i = 0; i < 18; i++) {
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
  }

  
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("searchPanel", requiredValidation );
    this.addFormControlWithValidations("fieldId", requiredValidation);
    this.addFormControlWithValidations("RecordTypeId", requiredValidation);
  }

  dropdownList() {
    this.fieldKeyPair = [
      'CustomerSKU',
      'SNno',
      'BatchCode',
      'InboundPool'
    ]
    this.RecordTypePair =[
      'TransLog',
      'AvailStock'
    ]
  }

  getSearchAvailablestock() {
    this.ngxService.start();
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      status: this.form.get('searchPanel').value,
      FormType: this.selectedfieldId,
      RecordType: this.selectedRecordTypeId
    }
    let apiAddress: string = this.apiConstant.DASHBOARD_SEARCH_PANEL;
    this._snSearchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.listAvailableStock = [];
        this.dataTable = null;
        this.listAvailableStock = res as any[];
        this.ngxService.stop();
        this.chRef.detectChanges();
        this.chRef.reattach();
        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        // this.dataTable = table.DataTable();
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

  onDeSelect(dropDownName: string) {
    debugger
    this[dropDownName] = {};
    if (dropDownName === 'selectedfield') {
      this.selectedfieldId = undefined;
    }
    if (dropDownName === 'selectedRecordType') {
      this.selectedRecordTypeId = undefined;
    }
    this.listAvailableStock = [];
  }

  onSelect(item: any, dropDownName: string) {
    debugger
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
    if (dropDownName === 'selectedfield') {
      this.selectedfieldId = item;
    }
    if (dropDownName === 'selectedRecordType') {
      this.selectedRecordTypeId = item;
    }
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
    this.fieldDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.recordfieldDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
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
        Pool: element.Pool,
        Debit: element.Debit,
        Credit: element.Credit
      }
      TempList.push(obj);
    });
    this.exporterService.exportToExcel(TempList, 'Available Stock');
  }
  openModal() {
    this.modalRef = this.modalService.open(this.AllModal, {
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-lg',
    })
  }

  CompanyInfo() {
    debugger
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
