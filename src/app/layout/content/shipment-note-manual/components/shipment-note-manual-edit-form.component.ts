import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteService } from "../services/shipment-note-manual.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";

import * as $ from 'jquery';
import { ModalManager } from "ngb-modal";
import { Pallet } from "../../pallet/models/Pallet";
import { GodownShelf } from "../../godown-shelf/models/GodownShelf";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: "wms-shipment-note-manual-edit-form",
  templateUrl: "../templates/edit-form.component.html",
  styleUrls: ["../styles/shipment-note-manual-form.component.scss"],
})
export class ShipmentNoteManualEditFormComponent extends BaseComponent {
  @ViewChild('modalItemLocation') modalItemLocation;
  private modalRef;

  palletDropdownSettings = {};
  palletList: Pallet[]=[];
  palletKeyPair: DropdownListDto[];
  palletCustomer = {};
  
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};

  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouse = {};

  godownDropdownSettings = {};
  godownKeyPair: DropdownListDto[];
  selectedGodown = {Id:null, Name:null};;

  itemDropdownSettings = {};
  itemKeyPair: DropdownListDto[];
  selectedItem = {};

  status: boolean;
  shipmentNote: ShipmentNote;
  itemInformationByCustomer: any[] = [];

  shelfListForShipment: any[] = [];
  shipmentListToPost:any[]=[];
  selectedWarehouseInfo:any;
  selectedCustomerInfo :any;

  selectedPallet={};

  constructor(injector: Injector, private _shipmentNoteServiceService: ShipmentNoteService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getPalletKeyPair();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
    this.getById();
  }

  private getWarehouseNameFromWarehouseKeyPair(warehouseId: any) {
    let model=this.warehouseKeyPair
    .filter(x => x.Value == warehouseId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getCustomerNameFromCustomerKeyPair(warehouseId: any) {
    let model=this.customerKeyPair
    .filter(x => x.Value == warehouseId);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }

  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let customerByIdUrl: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE + `${Id}`;
      this._shipmentNoteServiceService.getData(customerByIdUrl)
        .subscribe(res => {
          this.shipmentNote = res as ShipmentNote;
        
          this.selectedWarehouseInfo = [{
            "Text": this.getWarehouseNameFromWarehouseKeyPair(this.shipmentNote.WarehouseId),
            "Value": this.shipmentNote.WarehouseId.toString()
          }];
         this.selectedWarehouse = this.shipmentNote.WarehouseId;
        
         this.selectedCustomerInfo = [{
            "Text": this.getCustomerNameFromCustomerKeyPair(this.shipmentNote.CustomerID),
            "Value": this.shipmentNote.CustomerID.toString()
          }];
         this.selectedCustomer = this.shipmentNote.CustomerID;
            console.log(this.shipmentNote)
            this.formGroup.patchValue({
              //  WarehouseId: this.selectedWarehouseInfo,
              //  GodwomTypeId:this.selectedGodwomTypeInfo,
              ShipmentNoteNo: this.shipmentNote.ShipmentNoteNo,
              CargoStatus: this.shipmentNote.CargoStatus,
              ASNNo: this.shipmentNote.ASNNo,
              ASNDate: this.shipmentNote.ASNDate,
              DeliveryNo: this.shipmentNote.DeliveryNo,
              Remarks: this.shipmentNote.Remarks
             
              });

              this.getItemInformationKeyPair(this.shipmentNote.CustomerID);

              this.shipmentNote.AML_ShipmentNoteChild.forEach(element => {

                this.shipmentListToPost.push({
                    Name: element.ItemName,
                    ItemInformationId: element.ItemInformationId,
                    Batch: element.Batch,
                    Status: element.Status,
                    Quantity: element.Quantity,
                    NoOfBoxes: element.NoOfBoxes,
                    PRno: element.PRno,
                    SNno: element.SNno,
                    ExpiryDate: element.ExpiryDate,
                    MfgDate: element.MfgDate,
                    Price: element.Price,
                    TotalCBM:element.Quantity*element.ItemCBM,
                    GatePass:element.GatePass,
                    ServiceRequest:element.ServiceRequest,
                    RMA:element.RMA,
                    RecievedFrom:element.RecievedFrom,
                    ConsignmentNo:element.ConsignmentNo,
                    ICare:element.ICare,
                    BusinessType:element.BusinessType,
                    InboundPool:element.InboundPool,
                    Network:element.Network,
                    DeliveryType:element.DeliveryType,
                    ReceivedStation:element.ReceivedStation,
                    ContractNo:element.ContractNo,
                    PackingListNo:element.PackingListNo,
                    InboundAgainst:element.InboundAgainst,
                    HandlerName:element.HandlerName
                  })
              })
        
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }
  /**
  * The following method is used to add the form validations
  */
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("CustomerId", []);
    this.addFormControlWithValidations("WarehouseId", []);
    this.addFormControlWithValidations("ItemId", []);
    this.addFormControlWithValidations("ItemName", []);
    this.addFormControlWithValidations("ShipmentNoteNo", []);
    this.addFormControlWithValidations("DeliveryNo", []);
    this.addFormControlWithValidations("GodownId", []);
    this.addFormControlWithValidations("CargoStatus", []);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("ASNNo", requiredValidation);
    this.addFormControlWithValidations("ASNDate", []);
    this.addFormControlWithValidations("DriverName", []);
    this.addFormControlWithValidations("VehicleNo", []);
    this.addFormControlWithValidations("VehicleNo", []);
    this.addFormControlWithValidations("Quantity", []);
    this.addFormControlWithValidations("BoxQuantity", []);
    this.addFormControlWithValidations("MFGDate", []);
    this.addFormControlWithValidations("EXPDate", []);
    this.addFormControlWithValidations("Batch", []);
    this.addFormControlWithValidations("Status", []);
    this.addFormControlWithValidations("CBM", []);
    this.addFormControlWithValidations("PRno", []);
    this.addFormControlWithValidations("SNno", []);

    this.addFormControlWithValidations("GatePass", []);
    this.addFormControlWithValidations("ServiceRequest", []);
    this.addFormControlWithValidations("RMA", []);
    this.addFormControlWithValidations("RecievedFrom", []);
    this.addFormControlWithValidations("ConsignmentNo", []);
    this.addFormControlWithValidations("ICare", []);
    this.addFormControlWithValidations("BusinessType", []);
    this.addFormControlWithValidations("InboundPool", []);
    this.addFormControlWithValidations("Network", []);
    this.addFormControlWithValidations("DeliveryType", []);
    this.addFormControlWithValidations("ReceivedStation", []);
    this.addFormControlWithValidations("ContractNo", []);
    this.addFormControlWithValidations("PackingListNo", []);
    this.addFormControlWithValidations("InboundAgainst", []);
    this.addFormControlWithValidations("HandlerName", []);
    
  }

  getPalletKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PALLET_LIST;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        let tempPalletDropdown=[];
        this.palletList = res as Pallet[];
        this.palletList.forEach(element => {
          tempPalletDropdown.push({
            Value: element.PalletId,
            Text:element.Title+" "+element.Size
          })
        });
        this.palletKeyPair=tempPalletDropdown;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getItemInformationKeyPair(customerId: any) {
    let apiAddress: string = this.apiConstant.ITEM_GetItemInformationByCustomerId + `${customerId}`;
    
    this.ngxService.start();
    this._shipmentNoteServiceService.getData(apiAddress)
      .subscribe(res => {
        this.itemInformationByCustomer = res as any[];
        let itemTemDropdown: any[] = [];
        this.itemInformationByCustomer.forEach(element => {
          itemTemDropdown.push({
            Value: element.itemInformation.ItemInformationId,
            Text: element.itemInformation.Description + " | " +element.ItemBrand.Name + " | " + element.itemInformation.Name
          })
        });
        this.itemKeyPair = itemTemDropdown;
        console.log(res);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop()
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getGodownKeyPair(warehouseId: any) {
    let companyBusinessUnitInfo: any = {
      WarehouseId: warehouseId
    }
    let apiAddress: string = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onSelect(item: any, dropDownName: string) {
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
    if (dropDownName === 'selectedCustomer') {
      this.itemKeyPair = [];
      this.getItemInformationKeyPair(item.Value);
    }
    if (dropDownName === 'selectedWarehouse') {
      this.formGroup.get("GodownId").setValue('');
      this.godownKeyPair = [];
      this.getGodownKeyPair(item.Value);
      this.shipmentNote.WarehouseId=item.Value;
    }
    if (dropDownName === 'selectedItem') {
      let itemName = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Name;
        let Width = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Width;
        let Length = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Length;
        let Height = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Height;
        let CBM = (Width*2.54*Length*2.54*Height*2.54)/1000000;
      this.formGroup.get("ItemName").setValue(itemName);
      this.formGroup.get("CBM").setValue(CBM.toFixed(2));
    }
  }

  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
  }

 

  private getItemInformationObject(itemInformationId:any){
    return this.itemInformationByCustomer.filter(x=>x.itemInformation.ItemInformationId == itemInformationId)[0];
  }


  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
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
    this.godownDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.itemDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.warehouseDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.palletDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  /**
   * The following method is used
   * @param {string} formElement
   * @returns {string}
   */
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


  redirectToShipmentNoteList() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
  }

 

  addShipmentItemManualy()
  {
    let batch =this.formGroup.get('Batch').value;
    if(batch=="" || batch==null || !this.selectedItem || !this.selectedItem['Id'])
    {
        this.showToastrWarning("Please Select Item And Add Batch No First...!")
        return false;
    }
    else
    {
      const index = this.shipmentListToPost.findIndex((e) => e.Batch === batch);
      if (index === -1)
      {
        this.shipmentListToPost.push({
          Name: this.selectedItem['Name'],
          ItemInformationId: this.selectedItem["Id"],
          Batch: this.formGroup.get('Batch').value,
          Status: this.formGroup.get('Status').value,
          Quantity: this.formGroup.get('Quantity').value,
          NoOfBoxes: this.formGroup.get('BoxQuantity').value,
          PRno: this.formGroup.get('PRno').value,
          SNno: this.formGroup.get('SNno').value,
          ExpiryDate: this.formGroup.get('EXPDate').value,
          MfgDate: this.formGroup.get('MFGDate').value,
          Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
          TotalCBM:this.formGroup.get('Quantity').value*this.formGroup.get('CBM').value,

          GatePass: this.formGroup.get('GatePass').value,
          ServiceRequest:this.formGroup.get('ServiceRequest').value,
          RMA:this.formGroup.get('RMA').value,
          RecievedFrom:this.formGroup.get('RecievedFrom').value,
          ConsignmentNo:this.formGroup.get('ConsignmentNo').value,
          ICare:this.formGroup.get('ICare').value,
          BusinessType:this.formGroup.get('BusinessType'),
          InboundPool:this.formGroup.get('InboundPool').value,
          Network:this.formGroup.get('Network').value,
          DeliveryType:this.formGroup.get('DeliveryType').value,
          ReceivedStation:this.formGroup.get('ReceivedStation').value,
          ContractNo:this.formGroup.get('ContractNo').value,
          PackingListNo:this.formGroup.get('PackingListNo').value,
          InboundAgainst:this.formGroup.get('InboundAgainst').value,
          HandlerName:this.formGroup.get('HandlerName').value
        })
        this.selectedItem = {};
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("Batch").setValue('');
        this.formGroup.get("Status").setValue('');
        this.formGroup.get("EXPDate").setValue('');
        this.formGroup.get("MFGDate").setValue('');
        this.formGroup.get("Quantity").setValue('');
        this.formGroup.get("BoxQuantity").setValue('');
        this.formGroup.get("CBM").setValue('');
        this.formGroup.get("PRno").setValue('');
        this.formGroup.get("SNno").setValue('');

        this.formGroup.get("GatePass").setValue('');
        this.formGroup.get("ServiceRequest").setValue('');
        this.formGroup.get("RecievedFrom").setValue('');
        this.formGroup.get("ConsignmentNo").setValue('');
        this.formGroup.get("ICare").setValue('');
        this.formGroup.get("RMA").setValue('');
        this.formGroup.get('BusinessType').setValue('');
        this.formGroup.get('InboundPool').setValue('');
        this.formGroup.get('Network').setValue('');
         this.formGroup.get('DeliveryType').setValue('');
         this.formGroup.get('ReceivedStation').setValue('');
         this.formGroup.get('ContractNo').setValue('');
         this.formGroup.get('PackingListNo').setValue('');
         this.formGroup.get('InboundAgainst').setValue('');
        this.formGroup.get('HandlerName').setValue('');
        console.log(this.shipmentListToPost)
      }
      else
      {
        this.showToastrWarning("Not Allowed To Add Same Batch No Again...!")
        return false;
      }
    
    }
   

  }

  CheckDate()
  {
    let mfgDate =this.formGroup.get('MFGDate').value;
    let expDate =this.formGroup.get('EXPDate').value;

    if(mfgDate> expDate)
    {
      this.showToastrWarning("Please Select Date After The Mfg Date");
      this.formGroup.get("EXPDate").setValue('');
    }
  }

 


  deleteFromShipmentListManual(item:any)
  {
    this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1)
  }

 

  public updateShipmentNote(formValue) {
    if (this.formGroup.valid) {
      if (!this.selectedCustomer ) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
      //   this.showToastrWarning("Select Warehouse please.");
      //   return false;
      // }
      this.executeShipmentNoteUpdate(formValue);
    }
  }

  private executeShipmentNoteUpdate(formValue) {
    let shipmentNote: ShipmentNote = {
      ShipmentNoteId:this.shipmentNote.ShipmentNoteId,
      ShipmentNoteNo:formValue.ShipmentNoteNo,
      CustomerID:this.shipmentNote.CustomerID,
      CargoStatus:formValue.CargoStatus,
      WarehouseId:this.shipmentNote.WarehouseId,
      GodownId: this.selectedGodown["Id"],
      Remarks:formValue.Remarks,
      ASNNo:formValue.ASNNo,
      DeliveryNo:formValue.DeliveryNo,
      ASNDate:formValue.ASNDate,
      DriverName:formValue.DriverName,
      VehicleNo:formValue.VehicleNo,
      AML_ShipmentNoteChild: this.shipmentListToPost,
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
     
    }

    let apiUrl = this.apiConstant.SHIPMENT_NOTE_UPDATE_BY_ID+`/${this.shipmentNote.ShipmentNoteId}`;
    this.ngxService.start();
    this._shipmentNoteServiceService.update(apiUrl, shipmentNote)
      .subscribe(res => {
        this.showToastrSuccess("Shipment Note Update Successfully");
        setTimeout(() => {
          this.redirectToShipmentNoteList();
        }, 2000);
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }


}
