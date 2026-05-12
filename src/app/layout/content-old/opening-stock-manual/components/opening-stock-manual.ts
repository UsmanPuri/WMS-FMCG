import { Component, Injector, OnInit, Input ,ViewChild} from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";
import { ShipmentNote } from "../models/ShipmentNote";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { OpeningStockService } from "../services/opening-stock-manual.service";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { ModalManager } from "ngb-modal";
import { Pallet } from "../../pallet/models/Pallet";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { GodownShelf } from "../../godown-shelf/models/GodownShelf";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { LocationSpace } from "../../shipment-note-moving-warehouse/models/LocationSpace";

@Component({
  selector: "wms-opening-stock",
  templateUrl: "../templates/opening-stock-manual.html",
  styleUrls: ["../styles/opening-stock-manual.scss"],
})
export class OpeningStockManualComponent extends BaseComponent {
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
  selectedWarehouse = {Id:null, Name:null};

  locationDropdownSettings = {};
  locationKeyPair: DropdownListDto[];
  selectedLocation = {Id:null, Name:null};

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

  locationSpaceInfo: LocationSpace;

selectedPallet={};
  constructor(injector: Injector, private _openingstockService: OpeningStockService,
    private modalService: ModalManager) {
      super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getPalletKeyPair();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
    this.locationSpaceInfo={};
    this.locationSpaceInfo.CBM=0;
    this.locationSpaceInfo.UsedCBM=0;
    this.locationSpaceInfo.FreeCBM=0;
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
    this.addFormControlWithValidations("ASNNo", []);
    this.addFormControlWithValidations("ASNDate", []);
    this.addFormControlWithValidations("DriverName", []);
    this.addFormControlWithValidations("VehicleNo", []);
    this.addFormControlWithValidations("VehicleNo", []);
    this.addFormControlWithValidations("CBM", []);
    this.addFormControlWithValidations("Quantity", []);
    this.addFormControlWithValidations("BoxQuantity", []);
    this.addFormControlWithValidations("Batch", []);
    this.addFormControlWithValidations("Status", []);
    this.addFormControlWithValidations("MFGDate", []);
    this.addFormControlWithValidations("EXPDate", []);
    this.addFormControlWithValidations("LocationId", []);
    this.addFormControlWithValidations("PalletNo", []);
    this.addFormControlWithValidations("PRno", []);
    this.addFormControlWithValidations("SNno", []);
    
  }

  getPalletKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PALLET_LIST;
    this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    this._openingstockService.getData(apiAddress)
      .subscribe(res => {
        this.itemInformationByCustomer = res as any[];
        console.log( this.itemInformationByCustomer)
        let itemTemDropdown: any[] = [];
        this.itemInformationByCustomer.forEach(element => {
          itemTemDropdown.push({
            Value: element.itemInformation.ItemInformationId,
            Text: element.itemInformation.Description+" |"+ element.ItemBrand.Name + " | " + element.itemInformation.Name
          })
        });
        this.itemKeyPair = itemTemDropdown;
        console.log(res);
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
      this.formGroup.get("LocationId").setValue('');
      this.locationKeyPair = [];
      this.getLocationKeyPair();
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
    this.locationDropdownSettings = {
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
    this.router.navigate([this.routesList.OPENING_STOCK_MANUAL]);
  }

  private getItemInformationObject(itemInformationId:any){
    return this.itemInformationByCustomer.filter(x=>x.itemInformation.ItemInformationId == itemInformationId)[0];
  }

  addShipmentItemManualy()
  {
    this.shipmentListToPost.push({
      Name: this.selectedItem['Name'],
      ItemInformationId: this.selectedItem["Id"],
      // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
     // PalletNo: this.getPalletNoToSet(this.selectedItem["Id"]),
      Batch: this.formGroup.get('Batch').value,
      Status: this.formGroup.get('Status').value,
      Quantity: this.formGroup.get('Quantity').value,
      NoOfBoxes: this.formGroup.get('BoxQuantity').value,
      PalletNo: this.formGroup.get('PalletNo').value,
      Location: this.selectedLocation.Name,
      LocationId:this.selectedLocation.Id,
      PRno: this.formGroup.get('PRno').value,
      SNno: this.formGroup.get('SNno').value,
      //GodownId: element.godown.GodwomId,
      //GodownShelfId: element.godownShelf.GodownShelfId,
      ExpiryDate: this.formGroup.get('EXPDate').value,
      MfgDate: this.formGroup.get('MFGDate').value,
      Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
      TotalCBM:this.formGroup.get('Quantity').value*this.formGroup.get('CBM').value,
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
    this.formGroup.get("PalletNo").setValue('');
    console.log(this.shipmentListToPost)

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
 


  deleteFromShipmentList(location:string, itemInfoId:string){
    let dat=this.shipmentListToPost
        .filter(y=>y.ItemInformationId === itemInfoId && y.Location === location);
       if(dat && dat.length > 0){
         dat.forEach(element => {
          this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(element), 1)
         });
       
       }
  }

  addShipmentTextField(event: any, fieldName: string, location: string, palletNo:string) {
    let model = this.shipmentListToPost.filter(x => x.Location === location && x.PalletNo === palletNo)[0];
    if(model){
      model[fieldName] = event.target.value;
    }
    if(fieldName === 'Status' || fieldName === 'Batch'){
      this.shipmentListToPost.filter(x => x.Location === location).forEach(function(element){
         element[fieldName]=event.target.value;
      });
    }
  }

  public createShipmentNote(formValue) {
    if (this.formGroup.valid) {
      if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
        this.showToastrWarning("Select Warehouse please.");
        return false;
      }
      this.executeShipmentNoteCreation(formValue);
    }
  }

  private executeShipmentNoteCreation(formValue) {
    let shipmentNote: ShipmentNote = {
      ShipmentNoteNo:formValue.ShipmentNoteNo,
      CustomerID: this.selectedCustomer["Id"],
      CargoStatus:formValue.CargoStatus,
      WarehouseId:this.selectedWarehouse["Id"],
      GodownId: this.selectedGodown["Id"],
      Remarks:formValue.Remarks,
      ASNNo:formValue.ASNNo,
      DeliveryNo:formValue.DeliveryNo,
      ASNDate:formValue.ASNDate,
      DriverName:formValue.DriverName,
      VehicleNo:formValue.VehicleNo,
      ShipmentNoteChilds: this.shipmentListToPost,
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }

    let apiUrl = this.apiConstant.OPENING_STOCK;
    this._openingstockService.create(apiUrl, shipmentNote)
      .subscribe(res => {
        this.showToastrSuccess("Add Opening Stock successfully");
        setTimeout(() => {
          //this.redirectToShipmentNoteList();
          this.shipmentListToPost = null;
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  getLocationKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId:this.selectedWarehouse.Id,
    }
    let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
    this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.locationKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getLocationInfo(item:any) {
     
    this.selectedLocation = {
      Id: item.Value,
      Name: item.Text
    };
      let apiAddress: string = this.apiConstant.LOCATION_SPACE_STATUS+`/${this.selectedLocation.Id}`;
      this._openingstockService.getData(apiAddress)
        .subscribe(res => {
          this.locationSpaceInfo = res as LocationSpace;
   
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    


  }

}
