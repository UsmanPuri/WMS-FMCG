import { Component, Injector, OnInit, Input,  ViewChild,ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { HttpClient } from '@angular/common/http';
import { ModalManager } from "ngb-modal";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DispatchActivityService } from "../service/Dispatch-Activity";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'wms-dispatch-activity',
  templateUrl: '../templates/dispatch-activity.component.html',
  styleUrls: ['../styles/dispatch-activity.component.scss']
})
export class DispatchActivityComponent extends BaseComponent implements OnInit {
  @ViewChild('AllModal') AllModal;
  form: FormGroup;

  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouseId = { Id: '', Name: '' };
  
  AllCount = {};
  FromDate: Date;
  ToDate: Date;
  WarehouseId: any;
  modalRef: any;
  selectedCustomer = {};
  formType = "customer";
  dropdownHideShow: boolean;
  hideShowList: any[] = [];
  hideShowListOut: any[] = [];
  dispatchActivityList: any[];
  OutwardActivityList: any[];
  dispatchActivityPlan: any[];
  dispatchActivityOutbound: any[];
  dataTable: any;
  outboundQty:any;

  constructor(injector: Injector, private http: HttpClient, private _DispatchActivity: DispatchActivityService,
    fb: FormBuilder, private ngxService: NgxUiLoaderService,private modalService: ModalManager,private chRef: ChangeDetectorRef,private chRef1: ChangeDetectorRef) {
      super(injector);
    
      this.form = fb.group({
        WarehouseId:[''],
        FromDate:[''],
        ToDate:['']
      });
  }

  ngOnInit() {
    this.getWarehouseKeyPair();
    this.dropDownSettings();
    
    for (let i = 0; i < 26; i++) {
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
    this.hideShowList[19].status = false;
    this.hideShowList[20].status = false;
    this.hideShowList[21].status = false;
    this.hideShowList[22].status = false;
    this.hideShowList[23].status = false;
    this.hideShowList[24].status = false;
    this.hideShowList[25].status = false;

    for (let i = 0; i < 22; i++) {
      this.hideShowListOut.push({ status: true });
    }
    this.hideShowListOut[0].status = false; 
    this.hideShowListOut[1].status = false;
    this.hideShowListOut[2].status = false;
    this.hideShowListOut[3].status = false;
    this.hideShowListOut[4].status = false;
    this.hideShowListOut[5].status = false;
    this.hideShowListOut[6].status = false;
    this.hideShowListOut[7].status = false;
    this.hideShowListOut[8].status = false;
    this.hideShowListOut[9].status = false;
    this.hideShowListOut[10].status = false;
    this.hideShowListOut[11].status = false;
    this.hideShowListOut[12].status = false;
    this.hideShowListOut[13].status = false;
    this.hideShowListOut[14].status = false;
    this.hideShowListOut[15].status = false;
    this.hideShowListOut[16].status = false;
    this.hideShowListOut[17].status = false;
    this.hideShowListOut[18].status = false;
    this.hideShowListOut[19].status = false;
    this.hideShowListOut[20].status = false;
    this.hideShowListOut[21].status = false;
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
      LoggedUserId: this.localStorageService.getUserId()
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        console.log(res);

        this.warehouseKeyPair = res as DropdownListDto[];
        console.log(this.warehouseKeyPair);
      },
        (error) => {

          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onSelect(item: any, dropDownName: string) {
    debugger;
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
  }

  selectedWarehouse(event: any) {
    this.selectedWarehouseId = event.Value
  }

  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
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
  }

  search(fromDate, toDate) {
    debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId: this.selectedWarehouseId,
      DateFrom: fromDate.value,
      DateTo: toDate.value
    }

    this.ngxService.start();
    this.OUTWARD_MOVEMENT_ACTIVITY(fromDate, toDate);

    let apiAddress: string = this.apiConstant.DISPATCH_ACTIVITY;
    this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        console.log(res);

        this.dispatchActivityList = res as any[];
      debugger
        console.log(this.dispatchActivityList);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  OUTWARD_MOVEMENT_ACTIVITY(fromDate, toDate){
    debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId: this.selectedWarehouseId,
      DateFrom: fromDate.value,
      DateTo: toDate.value
    }

    this.ngxService.start();
    let apiAddress: string = this.apiConstant.OUTWARD_MOVEMENT_ACTIVITY;
    this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.OutwardActivityList = res as any[];
        console.log(this.OutwardActivityList);
        this.outboundQty = 0;
        this.OutwardActivityList.forEach(element => {
          this.outboundQty += element.Credit;
        });

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
        });
  }
  idstribution() {
    debugger
    // console.log(this.dispatchList)
    // this.pickupOrderCompleted = this.dispatchList.filter(x => x.IsCompleted=== false && x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === false);
    this.dispatchActivityOutbound = this.dispatchActivityList.filter(x => x.Credit > 0);
    this.dispatchActivityPlan = this.dispatchActivityList.filter(x => x.Debit > 0);
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
}
