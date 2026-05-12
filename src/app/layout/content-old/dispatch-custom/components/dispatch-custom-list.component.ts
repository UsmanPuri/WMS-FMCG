import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { DispatchService } from "../services/dispatch-custom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
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
  selector: "wms-dispatch-custom-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/dispatch-custom-form.component.scss"],
})
export class DispatchCustomListComponent extends BaseComponent {
  @ViewChild('AllModal') AllModal;
  public dispatchList: Dispatch[];
  public pickupList: PickupOrder[];
  // Our future instance of DataTable
  dataTable: any;
  isCustomerPlan: boolean = false;
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  FormType: any;
  public pickupOrderCompleted: Dispatch[];
  public pickupOrderPending: Dispatch[];
  public pickupOrderCancel: Dispatch[];
  rep_pickupOrder: Dispatch;
  hideShowList1: any = [];
  hideShowList2: any = [];
  GatePassNo: any;
  Agent: any;
  Address: any;
  PhoneNumber: any;
  deleteStatus:any;
  private modalRef;
  rep_dispatchData:any;
  rep_CustomerName:any;
  rep_PickupId:any;
  rep_GatePassNo:any;
  rep_CustomerOrderNo:any;
  rep_CityName:any;
  rep_LoadingDate:any;
  rep_waybill:any;
  rep_deliveryAddress:any;
  rep_DistCode:any;
  rep_DistAddress:any;
  rep_DistName:any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
TotalQty = 0;
TotalQtyInPacking = 0

  constructor(injector: Injector, private _dispatchService: DispatchService, private modalService: ModalManager,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.isCustomerPlan = this.router.url.includes("customer");
    this.FormType = this.isCustomerPlan == true ? 'customer' : 'transfer';
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.CompanyInfo();
    //this.getAllPickupOrders();

    for (let i = 0; i < 13; i++) {
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
    this.hideShowList1[11].status = false;
    this.hideShowList1[12].status = false;

    for (let i = 0; i < 13; i++) {
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
    this.hideShowList1[12].status = false;

  }

  CompanyInfo() {
    debugger
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

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("CustomerId", []);


  }
  onDeSelect() {
    this.pickupOrderCompleted = [];
    this.pickupOrderPending = [];
    this.pickupOrderCancel = [];
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
    this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
      FormType: this.FormType
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
    this.ngxService.start();
    this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        this.idstribution();

        
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
    // console.log(this.dispatchList)
    // this.pickupOrderCompleted = this.dispatchList.filter(x => x.IsCompleted=== false && x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === false);
    this.pickupOrderPending = this.dispatchList.filter(x => x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false);
    this.pickupOrderCancel = this.dispatchList.filter(x => x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === true);
  }

  reportmodal(pickupId:any ) {
    debugger
    this.ngxService.start();
    let dispatchId = pickupId;
    if (dispatchId) {
      let dischId = {
        DispatchId:pickupId,
      }
      // let dispatchBySKU: string = this.apiConstant.DISPATCH_GetById + `${pickupId}`;
      //     this._dispatchService.getData(dispatchBySKU)
      //     .subscribe(res => {
      //       debugger
      //       this.rep_dispatchDataTemp  = res as any;
      //     },
      //     (error) => {
      //       this.ngxService.stop();
      //       this.errorHandler.handleError(error);
      //       this.errorMessage = this.errorHandler.errorMessage;
      //     })

      let dispatchByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${dispatchId}`;
      this._dispatchService.getData(dispatchByIdUrl)
        .subscribe(res => {
          debugger
          this.rep_pickupOrder = res as Dispatch;
          console.log(this.rep_pickupOrder)
          this.openModal();
          this.rep_CustomerName= this.rep_pickupOrder.AML_Customers.Name;
          this.rep_PickupId= this.rep_pickupOrder.AML_PickupOrder.PickupOrderId;
          this.rep_GatePassNo=this.rep_pickupOrder.GatePassNo;
          this.rep_CustomerOrderNo=this.rep_pickupOrder.AML_PickupOrder.CustomerOrderNo;
          // this.rep_CityName=this.rep_pickupOrder.AML_PickupOrder.CityName;
          // this.rep_LoadingDate=this.rep_pickupOrder.AML_PickupOrder.LoadingDate;
          // this.rep_waybill=this.rep_pickupOrder.AML_PickupOrder.waybill;
          this.rep_deliveryAddress=this.rep_pickupOrder.AML_PickupOrder.Address;
          this.rep_DistCode= this.rep_pickupOrder.RefNo;
          this.rep_DistAddress=this.rep_pickupOrder.Remarks;
          this.rep_DistName = this.rep_pickupOrder.ProjectName;
          this.rep_dispatchData= this.rep_pickupOrder.AML_DispatchDetail;
          this.TotalQty = 0;
          this.TotalQtyInPacking = 0;

            this.rep_dispatchData.forEach(element => {
            this.TotalQty = element.Quantity +this.TotalQty;
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


  getAllPickupOrders() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST;
    this.ngxService.start();
    this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        // console.log(this.dispatchList)
        //console.log(this.dispatchList)
        

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

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  Edit(id) {
    let updateUrl: string = [this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_EDIT : this.routesList.DISPATCH_TRANSFER_EDIT] + `/${id}`;

    // let updateUrl: string = this.routesList.DISPATCH_CUSTOMER_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  Detail(id) {
    let updateUrl: string = [this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_DETAIL : this.routesList.DISPATCH_TRANSFER_DETAIL] + `/${id}`;
    this.router.navigate([updateUrl]);
  }

  delete(id, name) {
    debugger;

    if (confirm("Are you sure to delete? ")) {
      let apiAddress: string = this.apiConstant.PICKUP_ORDER_DELETE + `/${id}`;
      this._dispatchService.delete(apiAddress)
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

  openModal() {
    // this.Agent = this.formGroup.get("Agent").value;
    // this.GatePassNo = this.formGroup.get("GatePassNo").value;
    // this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
    // this.Address = this.formGroup.get("Address").value;
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
      windowClass: 'modal-xl'
    })
  }


  redirectToCreateDispatch() {
    this.router.navigate([this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_CREATE : this.routesList.DISPATCH_TRANSFER_CREATE]);
  }

}
