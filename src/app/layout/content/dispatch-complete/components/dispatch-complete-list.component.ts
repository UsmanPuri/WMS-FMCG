import { Component, Injector, OnInit,  ViewChild } from "@angular/core";
import { DispatchCompleteService } from "../services/dispatch-complete.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Dispatch } from "../models/Dispatch";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { ModalManager } from "ngb-modal";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-dispatch-complete-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/dispatch-complete-form.component.scss"],
})
export class DispatchCompleteListComponent extends BaseComponent {

  public dispatchList: Dispatch[];
  public dispatchData: Dispatch;
  public dispatchListPending: Dispatch[];
  public dispatchListCompleted: Dispatch[];
  public dispatchListCompletedNotReceived: Dispatch[];
  public dispatchListCancel: Dispatch[];
  // Our future instance of DataTable
  dataTable: any;
  isCustomerDelivers: boolean = false;

  hideShowList1: any = [];
  hideShowList2: any = [];
  hideShowList3: any = [];
  hideShowList4: any = [];

  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  formType = "customer";
  dropdownHideShow: boolean;

  @ViewChild('AllModal') AllModal;
  @ViewChild('AllModalpickup') AllModalpickup;
  private modalRef;
  Address: any;
  PhoneNumber: any;
  GatePassNo: any;
  Agent: any;
  DispatchDate: Date;
  DriverName: any;
  VehicleNo: any;
  SupervisorName: any;
  FlagDispatch: any;
  TotalQty: any;
  TotalQtyInPacking: any;
  CompanyName: any;
  deleteStatus: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  rep_CustomerName: any;
  rep_PickupId: any;
  rep_GatePassNo:any;
  rep_Address:any;
  rep_Agent:any;
  rep_SupervisorName:any;
  rep_DispatchDate:any;
  rep_DriverName:any;
  rep_PhoneNumber:any;
  rep_VehicleNo:any;
  rep_OriginWarehouse:any;
  rep_ContactPerson:any;
  rep_Telephone:any;
  rep_CustomerOrderNo:any;
  rep_CityName:any;
  rep_LoadingDate:any;
  rep_waybill:any;
  rep_DistCode:any;
  rep_DistAddress:any;
  rep_DistName:any;
  rep_deliveryAddress:any;
  rep_VehicleType:any;
  rep_Transporter:any;
  rep_SealNo:any;
  rep_dispatchData: any = [];
  rep_dispatchDataTemp: any = [];


  constructor(injector: Injector, private _dispatchService: DispatchCompleteService,
    private ngxService: NgxUiLoaderService,
    private modalService: ModalManager) {
    super(injector);
  }

  ngOnInit() {
    debugger
    this.isCustomerDelivers = this.router.url.includes("customer");
    this.formType = this.isCustomerDelivers == true ? 'customer' : 'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.CompanyInfo();
    // this.getAllCompletedDispatches();
    //this.dispatchData = this.dispatchList;

    for (let i = 0; i < 13; i++) {
      this.hideShowList1.push({ status: false });
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

    for (let i = 0; i < 16; i++) {
      this.hideShowList2.push({ status: false });
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
    this.hideShowList2[12].status = false;
    this.hideShowList2[13].status = false;
    this.hideShowList2[14].status = false;

    for (let i = 0; i < 15; i++) {
      this.hideShowList3.push({ status: false });
    }

    this.hideShowList3[0].status = false;
    this.hideShowList3[1].status = false;
    this.hideShowList3[2].status = false;
    this.hideShowList3[3].status = false;
    this.hideShowList3[4].status = false;
    this.hideShowList3[5].status = false;
    this.hideShowList3[6].status = false;
    this.hideShowList3[7].status = false;
    this.hideShowList3[8].status = false;
    this.hideShowList3[9].status = false;
    this.hideShowList3[10].status = false;
    this.hideShowList3[11].status = false;
    this.hideShowList3[12].status = false;
    this.hideShowList3[13].status = false;
    this.hideShowList3[14].status = false;

    for (let i = 0; i < 5; i++) {
      this.hideShowList4.push({ status: false });
    }

    this.hideShowList4[0].status = false;
    this.hideShowList4[1].status = false;
    this.hideShowList4[2].status = false;
    this.hideShowList4[3].status = false;
    this.hideShowList4[4].status = false;

  }

  CompanyInfo() {
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
      this.CompanyAddress = "PLOT NO 140 1/ESTATE PHASE 2 MULTAN"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 4) {
      this.CompanyName = "Maersk Warehousing and Distribution";
      this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775"
      this.LogoPath = "assets/images/Maersk_Logo.png"
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
    debugger
    const doc = new jsPDF({ orientation: "landscape" });
    autoTable(doc, { html: table_id })
    doc.save(my_file)
  }

  createPdfModule(my_file, table_id) {
    debugger
    const pages = document.querySelector(table_id) as HTMLElement;
    const doc = new jsPDF({ orientation: "landscape", unit: 'px', format: 'A4'});
    doc.html(pages,{filename: my_file});
    doc.save(my_file);

    // doc.html(pages, {
    //   callback: (doc: jsPDF) => {
    //     // doc.deletePage(doc.getNumberOfPages());
    //     doc.save(my_file);
    //   }
    // });
    // const doc = new jsPDF({ orientation: "landscape" });
    // autoTable(doc, { html: table_id })
    // doc.save(my_file)
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

  HideShow3(index) {
    const i = Number(index)
    if (this.hideShowList3[i].status) {
      this.hideShowList3[i].status = false;
    }
    else {
      this.hideShowList3[i].status = true;
    }

  }

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("CustomerId", []);

  }
  onDeSelect() {

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

  radioChange(e) {
    this.customerDeSelect();
    this.getCustomerKeyPair();
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

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      FormType: this.formType
    }
    // let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR_BY_ORDERTYPE;
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
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
    this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log("dispatch List : ", this.dispatchList)

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable({
          lengthMenu: [100, 500, 1000],
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

  customerChange(item: any) {
    debugger
    if (item.Value != undefined) {
      this.selectedCustomer = {
        Id: item.Value,
        Name: item.Text
      };
    }
    else {
      this.selectedCustomer = {
        Id: item.Id,
        Name: item.Name
      };
    }

    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CustomerId: this.selectedCustomer['Id'],
      FormType: this.formType
    }
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
    this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log(this.dispatchList);
        this.idstribution();


        // Now you can use jQuery DataTables :
        // const table: any = $('table');
        // this.dataTable = table.DataTable({
        //   lengthMenu: [5, 10, 20, 50, 100],
        //   "iDisplayLength": 100
        // });
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  idstribution() {
    debugger
    this.dispatchListPending = this.dispatchList.filter(x => x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false);
    this.dispatchListCompleted = this.dispatchList.filter(x => x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false);
    this.dispatchListCompletedNotReceived = this.dispatchListCompleted.filter(x => x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false && x.IsReceived === null && x.IsPartialReceived === null);
    this.dispatchListCancel = this.dispatchList.filter(x =>  x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === true);
    console.log(this.dispatchListCompleted);
    console.log(this.dispatchListCompletedNotReceived);
  }


  Edit(dispatchId) {
    let updateUrl: string = [this.dropdownHideShow == true ? this.routesList.DELIVERS_CUSTOMER_CREATE : this.routesList.DELIVERS_TRANSFER_CREATE] + `/${dispatchId}`;
    // let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_EDIT+`/${dispatchId}`;
    this.router.navigate([updateUrl]);
  }

  reportmodal(dispId:any, type:any ) {
    debugger
    this.ngxService.start();
    let dispatchId = dispId;
    if (dispatchId) {
      let dischId = {
        DispatchId:dispId,
      }
      let dispatchBySKU: string = this.apiConstant.DISPATCH_DispathcDetailClipSKU;
          this._dispatchService.getKeyPair(dispatchBySKU,dischId )
          .subscribe(res => {
            debugger
            this.rep_dispatchDataTemp  = res as any;
          },
          (error) => {
            this.ngxService.stop();
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })

      let dispatchByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${dispatchId}`;
      this._dispatchService.getData(dispatchByIdUrl)
        .subscribe(res => {
          debugger
          this.dispatchData = res as Dispatch;
          console.log(this.dispatchData)
          if (type !="pickup"){
            this.openModal();
          }
          else {
            this.openModalpickup();
          }
          this.rep_CustomerName= this.dispatchData.AML_Customers.Name;
          this.rep_PickupId= this.dispatchData.AML_PickupOrder.PickupOrderId;
          this.rep_GatePassNo=this.dispatchData.GatePassNo;
          this.rep_Address=this.dispatchData.Address;
          this.rep_Agent=this.dispatchData.Agent;
          this.rep_SupervisorName=this.dispatchData.SupervisorName;
          this.rep_DispatchDate=this.dispatchData.DispatchDate;
          this.rep_DriverName=this.dispatchData.DriverName;
          this.rep_PhoneNumber=this.dispatchData.PhoneNumber;
          this.rep_VehicleNo=this.dispatchData.VehicleNo;
          this.rep_OriginWarehouse=this.dispatchData.AML_PickupOrder.OriginWarehouse;
          this.rep_ContactPerson=this.dispatchData.AML_PickupOrder.ContactPerson;
          this.rep_Telephone=this.dispatchData.AML_PickupOrder.Telephone;
          this.rep_CustomerOrderNo=this.dispatchData.AML_PickupOrder.CustomerOrderNo;
          this.rep_CityName=this.dispatchData.AML_PickupOrder.CityName;
          this.rep_LoadingDate=this.dispatchData.AML_PickupOrder.LoadingDate;
          this.rep_waybill=this.dispatchData.AML_PickupOrder.waybill;
          this.rep_deliveryAddress=this.dispatchData.AML_PickupOrder.Address;
          this.rep_DistCode= this.dispatchData.RefNo;
          this.rep_DistAddress=this.dispatchData.Remarks;
          this.rep_DistName = this.dispatchData.ProjectName;
          this.rep_dispatchData = this.rep_dispatchDataTemp;
          this.rep_VehicleType=this.dispatchData.VehicleSize;
          this.rep_Transporter=this.dispatchData.Transporter;
          this.rep_SealNo=this.dispatchData.SealNo;

          this.TotalQty = 0;
          this.TotalQtyInPacking = 0;

          this.rep_dispatchData.forEach(element => {
          this.TotalQty = element.Quantity +this.TotalQty;
          // this.TotalQtyInPacking = (element.Quantity * element.AML_ItemInformation.QuantityInPacking) + this.TotalQtyInPacking;
          })
          this.ngxService.stop();
        },
          (error) => {
            this.ngxService.stop();
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  delete(id, pkid) {
    debugger;
    if (confirm("Are you sure to delete? ")) {

      let apiAddress: string = this.apiConstant.DISPATCH_ORDER_DELETE + `/${id}`;
      this._dispatchService.delete(apiAddress)
        .subscribe(res => {
          console.log(res);
          this.deleteStatus = res;
          debugger
          if(this.deleteStatus == true){
            this.showToastrSuccess("Disptach Transaction Delete Successfully");
            this.customerChange(this.selectedCustomer);
          }
          else {
            this.showToastrError("Disptach Transaction Delete Un-Successfull");
          }
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      this.router.navigate([]);
    }
  }

  UploadImages(id) {
    let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_IMAGE + `/${id}`;
    this.router.navigate([updateUrl]);
  }
  customerDeSelect() {
    this.selectedCustomer = {};
    this.customerKeyPair = [];
    this.formGroup.get("CustomerId").setValue('');

  }
  Create(dispatchId) {
    debugger
    let updateUrl: string = [this.formType == 'customer' ? this.routesList.DELIVERS_CUSTOMER_CREATE : this.routesList.DELIVERS_TRANSFER_CREATE] + `/${dispatchId}`;
    this.router.navigate([updateUrl]);
  }

  openModal() {
    debugger
    this.modalRef = this.modalService.open(this.AllModal, {
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-lg'
    });
  }
  openModalpickup() {
    debugger
    this.modalRef = this.modalService.open(this.AllModalpickup, {
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-lg'
    });
  }

  closeModal() {
    this.redirectToCreateDispatch();
  }

  redirectToCreateDispatch() {
    this.router.navigate([this.routesList.DELIVERS_CUSTOMER_CREATE]);
  }

}
