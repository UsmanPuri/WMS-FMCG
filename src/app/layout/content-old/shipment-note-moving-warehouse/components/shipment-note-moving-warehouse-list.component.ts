import { Component, Injector, OnInit , ChangeDetectorRef} from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note-moving-warehouse.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: "wms-shipment-note-moving-warehouse-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/shipment-note-moving-warehouse-form.component.scss"],
})
export class ShipmentNoteMovingWarehouseListComponent extends BaseComponent {

  public shipmentNoteList: ShipmentNote[];
  // Our future instance of DataTable
  dataTable: any;
  hideShowList: any = [];

  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  shipmentData:any;
  shipmentNote:any;
  TotalQtyReceived: number = 0;
  deleteStatus:any;
  rep_ANSID:any;
  rep_ShipmentNo:any;
  rep_ASNno:any;
  rep_ASNDate:any;
  rep_Vehicle_Rece_DateTM:any;
  rep_Cargo_Status:any;
  rep_TempIn:any;
  rep_Temp_Out:any;
  rep_OffLoad_Start_DateTM:any;
  rep_OffLoad_End_DateTM:any;
  rep_DeliveryNo:any;
  rep_DriverName:any;
  rep_VehicleNo:any;
  rep_MobileNo:any;
  rep_CNICNo:any;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  asnListToPost:any;
  
  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
   private ngxService: NgxUiLoaderService, private chRef: ChangeDetectorRef) {
    super(injector);
  }

  ngOnInit() {
    this.CompanyInfo();
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();

    for (let i = 0; i < 11; i++) {
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
    this.hideShowList[9].status = true;
    this.hideShowList[10].status = false;
  }

  CompanyInfo() {
    debugger
    this.CompanyID = this.localStorageService.getCompanyId()
    if (this.CompanyID == 1) {
      this.CompanyName = "I-Logistics (Pvt.) Ltd";
      this.CompanyAddress = "Opposite Gate# 2, Sunder Industrial Estate, Lahore "
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

  reportmodal(shipId:any ) {
    debugger
    this.ngxService.start();
    let shipmentId = shipId;
    if (shipmentId) {
      let apiUrl = this.apiConstant.SHIPMENT_NOTE_GET_ONE +  `${shipmentId}`;
      
      this._shipmentNoteService.getData(apiUrl)
        .subscribe(res => {
          debugger
          this.shipmentNote = res as ShipmentNote;
          console.log(this.shipmentNote)
          this.OpenModal();
          this.TotalQtyReceived = 0;
          this.rep_ANSID = this.shipmentNote.ShipmentNoteId;
          this.rep_ShipmentNo = this.shipmentNote.ShipmentNoteNo;
          this.rep_ASNno = this.shipmentNote.ASNNo;
          this.rep_ASNDate = this.shipmentNote.ASNDate;
          this.rep_Vehicle_Rece_DateTM = this.shipmentNote.ReceivingDate;
          this.rep_Cargo_Status = this.shipmentNote.CargoStatus;
          this.rep_TempIn = this.shipmentNote.TempIn;
          this.rep_Temp_Out = this.shipmentNote.TempOut;
          this.rep_OffLoad_Start_DateTM = this.shipmentNote.OffLoadingStartTime;
          this.rep_OffLoad_End_DateTM = this.shipmentNote.OffLoadingEndTime;
          this.rep_DeliveryNo = this.shipmentNote.DeliveryNo;
          this.rep_DriverName = this.shipmentNote.DriverName;
          this.rep_VehicleNo = this.shipmentNote.VehicleNo;
          this.rep_MobileNo = this.shipmentNote.MobileNo;
          this.rep_CNICNo = this.shipmentNote.CNICNo;
          this.asnListToPost = this.shipmentNote.AML_ShipmentNoteChild;
          this.asnListToPost.forEach(element => {
            this.TotalQtyReceived += element.MoveQuantity;
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

  onDeSelect(id: any) {

  }

  customerChange(item: any) {
    this.selectedCustomer = {
      Id: item.Value,
      Name: item.Text
    };

    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CustomerId: item.Value
    }
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
    this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.shipmentNoteList = res as ShipmentNote[];
        console.log(this.shipmentNoteList);
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        // const table: any = $('table');
        // this.dataTable = table.DataTable({
        //   lengthMenu: [500, 1000],
        //   "iDisplayLength": 500,
        //   retrieve: true
        // });
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  // getAllShipmentNotes() {
  //   let companyBusinessUnitInfo = {
  //     CompanyId: this.localStorageService.getCompanyId(),
  //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
  //   }
  //   let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST;
  //   this.ngxService.start();
  //   this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
  //     .subscribe(res => {
  //       this.shipmentNoteList = res as ShipmentNote[];
  //       //console.log(this.shipmentNoteList)

  //       // Now you can use jQuery DataTables :
  //       const table: any = $('table');
  //       this.dataTable = table.DataTable({
  //         lengthMenu: [500, 1000],
  //         "iDisplayLength": 500,
  //         retrieve: true
  //       });
  //       this.ngxService.stop();
  //     },
  //       (error) => {
  //         this.ngxService.stop();
  //         this.errorHandler.handleError(error);
  //         this.errorMessage = this.errorHandler.errorMessage;
  //       })
  // }

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  redirectToCreateShipmentNote() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_CREATE]);
  }
  OpenModal() {
    $('#shipModal').show();
    //this.loadComponent = true;
  }
  CloseModal() {
    debugger
    $('#shipModal').hide();
    //this.redirectToListShipmentNote()
    // this.loadComponent = false;
  }
  Details(id) {
    debugger
    let updateUrl: string = this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_EDIT + `/${id}`;
    this.router.navigate([updateUrl]);
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
