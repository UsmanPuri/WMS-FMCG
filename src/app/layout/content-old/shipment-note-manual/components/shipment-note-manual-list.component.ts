import { Component, Injector, OnInit , ChangeDetectorRef} from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note-manual.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-shipment-note-manual-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/shipment-note-manual-form.component.scss"],
})
export class ShipmentNoteManualListComponent extends BaseComponent {

  public shipmentNoteList: ShipmentNote[];
   // Our future instance of DataTable
   dataTable: any;
   deleteStatus:any;
   customerDropdownSettings = {};
   customerKeyPair: DropdownListDto[];
   selectedCustomer = {};

   hideShowList: any[] = [];

  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
    private ngxService: NgxUiLoaderService, private chRef: ChangeDetectorRef) {
    super(injector);
  }

  ngOnInit() {

    this.addFormValidations();
    this.dropdownSettings();
  
    this.getCustomerKeyPair();
    // this.getAllShipmentNotes();

    for (let i = 0; i < 7; i++) {
      this.hideShowList.push({ status: true });
    }

    this.hideShowList[0].status = false;
    this.hideShowList[1].status = false;
    this.hideShowList[2].status = false;
    this.hideShowList[3].status = false;
    this.hideShowList[4].status = false;
    this.hideShowList[5].status = false;
    this.hideShowList[6].status = false;
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
    const doc = new jsPDF({orientation: "landscape"});
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

    this.addFormControlWithValidations("CustomerId", []);
   
    
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
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onDeSelect(){
    this.shipmentNoteList=null;
  }
  customerChange(item:any)
  {
    this.selectedCustomer ={
      Id:item.Value,
      Name:item.Text
    };

    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      CustomerId:item.Value
    }
    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
    this.ngxService.start();
    this._shipmentNoteService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.shipmentNoteList = res as ShipmentNote[];
        console.log(this.shipmentNoteList)
        this.chRef.detectChanges();

         // Now you can use jQuery DataTables :
      const table: any = $('table');
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

  getAllShipmentNotes() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST;
    this._shipmentNoteService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.shipmentNoteList = res as ShipmentNote[];
        console.log(this.shipmentNoteList)
        

         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 20, 50, 100],
        "iDisplayLength": 100,
        retrieve: true
      });
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(id){
    let updateUrl: string = this.routesList.SHIPMENT_NOTE_MANUAL_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  Detail(id){
    let updateUrl: string = this.routesList.SHIPMENT_NOTE_MANUAL_DETAIL+`/${id}`;
    this.router.navigate([updateUrl]);
  }
  redirectToCreateShipmentNote(){
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_CREATE]);
  }

  delete(id) {
    debugger;
    //console.log(id);
    debugger;
    if (confirm("Are you sure to delete Complete Shipment Note")) {
      let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_DELETE + `/${id}`;
      this._shipmentNoteService.delete(apiAddress)
        .subscribe(res => {
          this.deleteStatus = res;
          debugger
          if(this.deleteStatus == true){
            this.showToastrSuccess("Shipment Note Delete Successfully");
            this.customerChange(this.selectedCustomer);
          }
          else {
            this.showToastrError("Shipment Note Delete Un-Successfull");
          }

        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })

      this.router.navigate([]);
    }

  }

}
