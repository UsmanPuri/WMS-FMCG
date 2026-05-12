import { Component, Injector, OnInit } from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note-receiving.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "wms-shipment-note-receiving-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/shipment-note-receiving-form.component.scss"],
})
export class ShipmentNoteReceivingEditComponent extends BaseComponent {

  public shipmentNoteList: ShipmentNote[];
  // Our future instance of DataTable
  dataTable: any;
  // formGroup: FormGroup;
  // myData: any[];

  parkingStageDropdownSettings = {};
  parkingStageKeyPair: DropdownListDto[];
  selectedParkingStage = {};
  isSelected: boolean = false;
  shipmentNote: ShipmentNote;
  CompanyName: any;
  CompanyAddress: any;
  CompanyID: any;
  LogoPath: any;
  AML_ShipmentNoteChild: any;

  CNICNo: any;
  MobileNo: any;
  DriverName: any;
  VehicleNo: any;
  TemperatureIn: any;
  TemperatureOut: any;


  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
   private fb: FormBuilder, private activeRoute: ActivatedRoute) {
    super(injector);

    this.formGroup = fb.group({
      tempIn: [''],
      tempOut: [''],
      cnicNo: [''],
      mobileNo: [''],
      driverName: [''],
      vehicleNo: ['']
    });
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getById();
    this.getParkingStagesKeyPair();
    this.CompanyInfo();
  }

  get tempIn() { return this.formGroup.get('tempIn') };
  get tempOut() { return this.formGroup.get('tempOut') };
  get cnicNo() { return this.formGroup.get('cnicNo') };
  get mobileNo() { return this.formGroup.get('mobileNo') };
  get driverName() { return this.formGroup.get('cnicNo') };
  get vehicleNo() { return this.formGroup.get('mobileNo') };

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

  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("ParkingStageId", requiredValidation);
    this.addFormControlWithValidations("ReceiveDate", requiredValidation);
    this.addFormControlWithValidations("OffLoadStartDate", []);
    this.addFormControlWithValidations("OffLoadEndDate", []);
  }

  private dropdownSettings() {
    this.parkingStageDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }
  getById() {

    let Id: string = this.activeRoute.snapshot.params["Id"];
    if (Id) {
      let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE + `${Id}`;
      this._shipmentNoteService.getData(apiAddress)
        .subscribe(res => {
          this.shipmentNote = res as ShipmentNote;
          debugger
          if (this.shipmentNote.ParkingStageId == null) {
            this.isSelected = true;
          }
          console.log(this.shipmentNote)
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    }
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
  }

  addReceivedQuantity(event: any, item: any) {
    let recQty = event.target.value;
    if (recQty > item.Quantity) {
      this.showToastrWarning("Received Quantity Must Be Equal or Less Tha Quantity");
    }
    else {
      item.ReceivedQuantity = event.target.value;
      console.log(this.shipmentNote)
    }

  }

  updateASN() {
    if (!this.selectedParkingStage || !this.selectedParkingStage["Id"]) {
      this.showToastrWarning("Please Select Parking Stage First...!")
      return false;
    }
    else {
      debugger;
      this.shipmentNote['CNICNo'] = this.formGroup.value.cnicNo;
      this.shipmentNote['MobileNo'] = this.formGroup.value.mobileNo;
      this.shipmentNote['TempIn'] = this.formGroup.value.tempIn;
      this.shipmentNote['TempOut'] = this.formGroup.value.tempOut;
      this.shipmentNote['DriverName'] = this.formGroup.value.driverName;
      this.shipmentNote['VehicleNo'] = this.formGroup.value.vehicleNo;
      this.shipmentNote['ReceiveDate'] = this.formGroup.value.ReceiveDate;
      this.shipmentNote['OffLoadStartDate'] = this.formGroup.value.OffLoadStartDate;
      this.shipmentNote['OffLoadEndDate'] = this.formGroup.value.OffLoadEndDate;
      let ASN: ShipmentNote = this.shipmentNote;

      console.log(ASN);
      let apiUrl = this.apiConstant.SHIPMENT_NOTE_UPDATE + `/${this.shipmentNote.ShipmentNoteId}`;
      this._shipmentNoteService.update(apiUrl, ASN)
        .subscribe(res => {
          // this.postASN();
          this.OpenModal();
          
          this.showToastrSuccess("ASN Updated Successfully");
          // setTimeout(() => {

          //   this.redirectToListShipmentNote();
          // }, 2000);
        }, (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        }));
    }

  }

  getParkingStagesKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PARKINGSTAGES_KEYPAIR;
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.parkingStageKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  parkingStageChange(item: any) {
    this.selectedParkingStage = {
      Id: item.Value,
      Name: item.Text
    };

    this.shipmentNote.ParkingStageId = item.Value;
  }
  
  ReceivingDateChange(item: any) {
    debugger
    this.shipmentNote.ReceivingDate = item.target.value;
  }

  OffLoadStartDateChange(item: any) {
    debugger
    this.shipmentNote.OffLoadingStartTime = item.target.value;
  }

  OffLoadEndDateChange(item: any) {
    debugger
    this.shipmentNote.OffLoadingEndTime = item.target.value;
  }

  onDeSelect(item: any) {
    item = {};
    this.shipmentNote.ParkingStageId = null;
  }

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  redirectToListShipmentNote() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
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

  redirectToShipmentNoteReceiving() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
  }

  OpenModal() {
    $('#shipNoteReceivingModal').show();
    //this.loadComponent = true;
  }

  closeModal() {
    $('#shipNoteReceivingModal').hide();
    this.redirectToShipmentNoteReceiving();
  }


}
