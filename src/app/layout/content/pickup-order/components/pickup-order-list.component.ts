import { Component, Injector, OnInit, ChangeDetectorRef,ViewChild } from "@angular/core";
import { PickupOrderService } from "../services/pickup-order.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { PickupOrder } from "../models/PickupOrder";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalManager } from "ngb-modal";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "wms-pickup-order-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/pickup-order-form.component.scss"],
})

export class PickupOrderListComponent extends BaseComponent {

  public pickupOrderList: PickupOrder[];
  public pickupOrderCompleted: PickupOrder[];
  public pickupOrderPending: PickupOrder[];
  public pickupOrderCancel: PickupOrder[];
  @ViewChild('AllModalpickup') AllModalpickup;
  private modalRef;

  hideShowList1: any = [];
  hideShowList2: any = [];
  hideShowList3: any = [];

  // Our future instance of DataTable
  deleteStatus: any;
  CompanyAddress: any;
  CompanyID: any;
  CompanyName: any;
  LogoPath: any;
  dataTable: any;
  
  isCustomerOrder: boolean = false;
  rep_SODataTemp: any;
  SOData:any;
  rep_SOData: any [];
  rep_CustomerName: any;
  rep_PickupId: any;
  rep_DispatchDate: any;
  rep_OriginWarehouse: any;
  rep_CustomerOrderNo: any;
  rep_CityName: any;
  rep_LoadingDate: any;
  rep_deliveryAddress: any;
  rep_DistCode: any;
  rep_DistAddress: any;
  rep_DistName: any;
  rep_DriverName: any;
  rep_PhoneNumber: any;
  rep_VehicleNo: any;
  TotalQty: any;
  TotalQtyInPacking: any;
  
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  constructor(injector: Injector, private _pickupOrderService: PickupOrderService, router: Router, private chRef: ChangeDetectorRef,
    private modalService: ModalManager, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    //console.log(this.router.url, "Active URL");
    this.isCustomerOrder = this.router.url.includes("customer");
    this.addFormValidations();
    this.dropdownSettings();
    this.CompanyInfo();
    this.getCustomerKeyPair();
    //this.getAllPickupOrders();

    for (let i = 0; i < 12; i++) {
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
    this.hideShowList1[11].status = false;

    for (let i = 0; i < 12; i++) {
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

    for (let i = 0; i < 12; i++) {
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
      this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore"
      this.LogoPath = "assets/images/ilogistics-logo-wms.jpg"
    }
    if (this.CompanyID == 4) {
      this.CompanyName = "Maersk Warehousing and Distribution";
      this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775"
      this.LogoPath = "assets/images/Maersk_Logo.png"
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
  onDeSelect() {
    this.pickupOrderCompleted = [];
    this.pickupOrderPending = [];
    this.pickupOrderCancel = [];
  }
  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  customerChange(item: any) {
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
    }
    this.ngxService.start();
    
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_LIST_BY_CUSTOMER;
    this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.pickupOrderList = res as PickupOrder[];
        debugger
        //console.log(this.pickupOrderList)

        if (this.isCustomerOrder) {
          this.pickupOrderList = this.pickupOrderList.filter(x => x.FormType == 'customer');
        } else {
          this.pickupOrderList = this.pickupOrderList.filter(x => x.FormType == 'transfer');
        }
        this.idstribution();

        //  Now you can use jQuery DataTables :
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

  idstribution() {
    this.pickupOrderCompleted = this.pickupOrderList.filter(x => x.StatusId === 0 && x.IsDeleted === false);
    this.pickupOrderPending = this.pickupOrderList.filter(x => x.StatusId === 1 && x.IsDeleted === false);
    this.pickupOrderCancel = this.pickupOrderList.filter(x => x.StatusId === 1 && x.IsDeleted === true);
  }
  getAllPickupOrders() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_LIST;
    this.ngxService.start();
    this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.pickupOrderList = res as PickupOrder[];
        console.log(this.pickupOrderList)
        this.chRef.detectChanges();
        this.chRef.reattach();
        

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable({
          lengthMenu: [5, 10, 20, 50, 100],
          "iDisplayLength": 100,
        });
        this.ngxService.stop();
        
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  Edit(id) {
    let updateUrl: string = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_EDIT : this.routesList.PICKUP_TRANSFER_ORDER_EDIT] + `/${id}`;
    // let updateUrl: string = this.routesList.PICKUP_ORDER_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  Detail(id) {
    // let updateUrl: string = this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL])+`/${id}`;
    let updateUrl: string = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL] + `/${id}`;
    // let updateUrl: string = this.routesList.PICKUP_ORDER_DETAIL+`/${id}`;
    this.router.navigate([updateUrl]);
  }
  delete(id) {
    debugger;
    //console.log(id);
    debugger;
    if (confirm("Are you sure to delete ")) {
      let apiAddress: string = this.apiConstant.PICKUP_ORDER_DELETE + `/${id}`;
      this._pickupOrderService.delete(apiAddress)
        .subscribe(res => {
          this.deleteStatus = res;
          debugger
          if(this.deleteStatus == true){
            this.showToastrSuccess("Pickup Sales Order Delete Successfully");
            this.customerChange(this.selectedCustomer);
          }
          else {
            this.showToastrError("Pickup Sales Order Delete Un-Successfull");
          }

        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })

      this.router.navigate([]);
    }

  }

  redirectToCreatePickupOrder() {
    this.router.navigate([this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_CREATE : this.routesList.PICKUP_TRANSFER_ORDER_CREATE]);
  }

  reportmodal(dispId:any, type:any ) {
    debugger
    this.ngxService.start();
    let dispatchId = dispId;
    if (dispatchId) {
      let dischId = {
        DispatchId:dispId,
      }
      // let dispatchBySKU: string = this.apiConstant.DISPATCH_DispathcDetailClipSKU;
      //     this._pickupOrderService.getKeyPair(dispatchBySKU,dischId )
      //     .subscribe(res => {
      //       debugger
      //       this.rep_SODataTemp  = res as any;
      //     },
      //     (error) => {
      //       this.ngxService.stop();
      //       this.errorHandler.handleError(error);
      //       this.errorMessage = this.errorHandler.errorMessage;
      //     })

      let dispatchByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${dispatchId}`;
      this._pickupOrderService.getData(dispatchByIdUrl)
        .subscribe(res => {
          debugger
          this.SOData = res as PickupOrder;
          console.log(this.SOData)
          
          this.openModalpickup();
          
          this.rep_CustomerName= this.SOData.CustomerName;
          this.rep_PickupId= this.SOData.PickupOrderId;
          this.rep_DispatchDate=this.SOData.OrderDate;
          this.rep_OriginWarehouse=this.SOData.OriginWarehouse;
          this.rep_CustomerOrderNo=this.SOData.CustomerOrderNo;
          this.rep_CityName=this.SOData.CityName;
          this.rep_LoadingDate=this.SOData.LoadingDate;
          this.rep_deliveryAddress=this.SOData.Address;
          this.rep_DistCode= this.SOData.DistCode;
          this.rep_DistAddress=this.SOData.DistAddress;
          this.rep_DistName = this.SOData.DistName;
          this.rep_SOData = this.SOData.PickupOrderChilds;
          this.rep_DriverName = this.SOData.DriverName;
          this.rep_PhoneNumber = this.SOData.PhoneNumber;
          this.rep_VehicleNo = this.SOData.VehicleNo;
          this.TotalQty = 0;
          this.TotalQtyInPacking = 0;

          this.rep_SOData.forEach(element => {
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
}

