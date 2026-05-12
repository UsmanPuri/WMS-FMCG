import { Component, Injector, OnInit } from "@angular/core";
import { TransferReceivingService } from "../services/transfer-receiving.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Dispatch } from "../models/Dispatch";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-dispatch-complete-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/transfer-receiving-form.component.scss"],
})
export class TransferReceivingListComponent extends BaseComponent {

  public dispatchList: Dispatch[];
  public dispatchListPending: Dispatch[];
  public dispatchListCompleted: Dispatch[];

   // Our future instance of DataTable
   dataTable: any;
   isCustomerDelivers :boolean = false;
   selectedToWarehouse = {};
   ToWarehouseDropdownSettings = {};
   ToWarehouseKeyPair: DropdownListDto[];
   customerDropdownSettings = {};
   customerKeyPair: DropdownListDto[];
   selectedCustomer = {};
   formType="customer";
   dropdownHideShow:boolean;

   hideShowList1: any[] = [];
   hideShowList2: any[] = [];
 
   
  constructor(injector: Injector, private _transferreceiveService: TransferReceivingService,
  private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.isCustomerDelivers = this.router.url.includes("customer");
    this.formType = this.isCustomerDelivers == true ? 'customer' :  'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    this.getWarehouseKeyPair();

    for (let i = 0; i < 11; i++) {
      this.hideShowList1.push({ status: true });
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

    for (let i = 0; i < 12; i++) {
      this.hideShowList2.push({ status: true });
    }

    this.hideShowList2[0].status = false;
    this.hideShowList2[1].status = false;
    this.hideShowList2[2].status = false;
    this.hideShowList2[3].status = false;
    this.hideShowList2[4].status = false;
    this.hideShowList2[5].status = false;
    this.hideShowList2[6].status = false;
    this.hideShowList2[7].status = false;
    this.hideShowList2[8].status = false;
    this.hideShowList2[9].status = false;
    this.hideShowList2[10].status = false;
    this.hideShowList2[11].status = false;
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
    if (this.hideShowList2[i].status) {
      this.hideShowList2[i].status = false;
    }
    else {
      this.hideShowList2[i].status = true;
    }

  }

  onSelectToWarehouse(item: any, dropDownName: string) {
    this.selectedCustomer ={
      Id:item.Value,
      Name:item.Text
    };
debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId:item.Value,
      FormType:this.formType
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
    this.ngxService.start();
    this._transferreceiveService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log(this.dispatchList)
        

        this.dispatchListCompleted =  this.dispatchList.filter(x=> x.IsReceived===true);
        this.dispatchListPending =  this.dispatchList.filter(x=> x.IsReceived===null && x.IsDeleted===false);
         // Now you can use jQuery DataTables :
      // const table: any = $('table');
      // this.dataTable = table.DataTable({
      //   lengthMenu: [5, 10, 20, 50, 100],
      //   "iDisplayLength": 100,
      //   retrieve:true
      // });
      this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }
  onDeSelectToWarehouse(dropDownName: string) {
    this.selectedToWarehouse = {};
  }
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("CustomerId", []);
  }

  private dropdownSettings() {
    this.ToWarehouseDropdownSettings={
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  radioChange(e)
  {
    this.customerDeSelect();
   // this.getCustomerKeyPair();
  //   debugger
  //   this.formType = e.target.value;

  //   this.dropdownHideShow =!this.dropdownHideShow 
  //   if(this.dropdownHideShow===true)
  //   {
  //     this.dropdownHideShow=false;
  //   }else
  //   {
  //     this.dropdownHideShow=true;
  //     this.selectedToWarehouse = {};
  //   }
  //   debugger
  }



  getWarehouseKeyPair() {
    debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      // IsTransferOrderForm : this.dropdownHideShow != true ? true : false
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._transferreceiveService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.ToWarehouseKeyPair = res as DropdownListDto[];
      },
      
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getAllCompletedDispatches() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST;
    this._transferreceiveService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log(this.dispatchList)

      
        

         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 20, 50, 100],
        "iDisplayLength": 100,
        retrieve:true
      });
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
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
      CustomerId:item.Value,
      FormType:this.formType
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
    this._transferreceiveService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log(this.dispatchList)
        

        this.dispatchListCompleted =  this.dispatchList.filter(x=> x.IsCompleted===true);
        this.dispatchListPending =  this.dispatchList.filter(x=> x.IsCompleted===false && x.IsDeleted===false);
         // Now you can use jQuery DataTables :
      // const table: any = $('table');
      // this.dataTable = table.DataTable({
      //   lengthMenu: [5, 10, 20, 50, 100],
      //   "iDisplayLength": 100,
      //   retrieve:true
      // });
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(dispatchId){
    let updateUrl: string = [this.dropdownHideShow == true ?this.routesList.TRANSFER_RECEIVING_EDIT : this.routesList.TRANSFER_RECEIVING_EDIT]+`/${dispatchId}`;
    // let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_EDIT+`/${dispatchId}`;
    this.router.navigate([updateUrl]);
  }

  UploadImages(id) {
    
    let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_IMAGE+`/${id}`;
    this.router.navigate([updateUrl]);
  }
  customerDeSelect(){
    this.selectedCustomer={};
   
    this.customerKeyPair = [];
    
    
    this.formGroup.get("CustomerId").setValue('');
    
  }
  Create(dispatchId){
    let updateUrl: string = this.routesList.TRANSFER_RECEIVING_CREATE+`/${dispatchId}`;
    this.router.navigate([updateUrl]);
  }

  redirectToCreateDispatch(){
    this.router.navigate([this.routesList.TRANSFER_RECEIVING_CREATE]);
  }


}
