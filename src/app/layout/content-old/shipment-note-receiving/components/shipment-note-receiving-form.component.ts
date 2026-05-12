import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteService } from "../services/shipment-note-receiving.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";

import * as $ from 'jquery';
import { ModalManager } from "ngb-modal";
import { Pallet } from "../../pallet/models/Pallet";
import { GodownShelf } from "../../godown-shelf/models/GodownShelf";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";


@Component({
  selector: "wms-shipment-note-receiving-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/shipment-note-receiving-form.component.scss"],
})
export class ShipmentNoteReceivingFormComponent extends BaseComponent {
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

  selectedPallet={};

  constructor(injector: Injector, private _shipmentNoteServiceService: ShipmentNoteService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getPalletKeyPair();
    this.getCustomerKeyPair();
    this.getWarehouseKeyPair();
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
    this.addFormControlWithValidations("Quantity", []);
    this.addFormControlWithValidations("BoxQuantity", []);
    this.addFormControlWithValidations("MFGDate", []);
    this.addFormControlWithValidations("EXPDate", []);
    this.addFormControlWithValidations("Batch", []);
    this.addFormControlWithValidations("Status", []);
    
    
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
    this._shipmentNoteServiceService.getData(apiAddress)
      .subscribe(res => {
        this.itemInformationByCustomer = res as any[];
        let itemTemDropdown: any[] = [];
        this.itemInformationByCustomer.forEach(element => {
          itemTemDropdown.push({
            Value: element.itemInformation.ItemInformationId,
            Text: element.ItemBrand.Name + " | " + element.itemInformation.Name
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
    }
    if (dropDownName === 'selectedItem') {
      let itemName = this.itemInformationByCustomer
        .filter(x => x.itemInformation.ItemInformationId === item.Value)[0].itemInformation.Name;
      this.formGroup.get("ItemName").setValue(itemName);
    }
  }

  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
  }

  addItemLocation() {
    if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
      this.showToastrWarning("Select Customer first");
      return false;
    }
    // if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
    //   this.showToastrWarning("Select Warehouse first");
    //   return false;
    // }
    if (!this.selectedItem || !this.selectedItem["Id"]) {
      this.showToastrWarning("Select Item first");
      return false;
    }
    this.getShelfForShipment();
  }

  private getShelfForShipment() {
    let obj = {
      WarehouseId: this.selectedWarehouse["Id"],
      ItemInformationId: this.selectedItem["Id"],
      ItemCBN: this.getItemCBN(this.selectedItem["Id"]),
      CustomerId: this.selectedCustomer["Id"]
    };
    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_SearchShelfsForShipment;
    this._shipmentNoteServiceService.getKeyPair(apiAddress, obj)
      .subscribe(res => {
        console.log(res)
        this.shelfListForShipment = res as any[];
        this.shelfListForShipment.forEach(element => {
          element.Location= element.godown.Abbreviation+ element.godownRow.Alias+element.godownRack.Alias+element.godownShelf.Alias,
          element.Quantity=this.getQuantityIfAlreadyAddedInLocation(this.selectedItem["Id"], element.Location),
          element.vacantQuantity=(Number((element.shelfVacantCapicity - this.getCalculatedCBN(element.Location))) / Number(this.getItemCBN(this.selectedItem["Id"]))),
          element.NoOfPallets=0
          element.NoOfBoxes=0
        });
        this.shelfListForShipment= this.shelfListForShipment
        .filter(x=>x.vacantQuantity >=1);
        this.openItemLocationModal();
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getQuantityIfAlreadyAddedInLocation(itemId: string, location: string) {
    let qty=0;
    let model = this.shipmentListToPost.filter(x => x.ItemInformationId === itemId && x.Location === location);
    if (!model && model.length <=0) {
      return 0;
    } else {
     model.forEach(element => {
       qty = (qty + Number(element.Quantity))
     });
     return qty;
    }
  }

  private getItemInformationObject(itemInformationId:any){
    return this.itemInformationByCustomer.filter(x=>x.itemInformation.ItemInformationId == itemInformationId)[0];
  }

  private getItemCBN(itemId: string) {
    let model = this.itemInformationByCustomer
      .filter(x => x.itemInformation.ItemInformationId == itemId)[0];
    return (model.itemInformation.Width * model.itemInformation.Height * model.itemInformation.Length);
  }

  private getCalculatedCBN(location:string){
    let usedCBMToSave=0;
    let model = this.shipmentListToPost.filter(x=>x.Location === location && x.ItemInformationId != this.selectedItem["Id"]);
    if(model && model.length > 0){
      model.forEach(element => {
        let usedItemForCBN = this.getItemCBN(element.ItemInformationId);
        usedCBMToSave = usedCBMToSave + (usedItemForCBN * element.Quantity);
      });
    }
    return usedCBMToSave;
  }

  openItemLocationModal() {
    this.modalRef = this.modalService.open(this.modalItemLocation, {
      size: "lg",
      modalClass: '',
      hideCloseButton: true,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    })
  }

  cancelItemLocationModal() {
    this.modalRef.close();
  }

  palletSelect(event?:any, location?:string, selectedPalletId?: number){
    if(event){
      this.selectedPallet={
        Id:event.Value,
        Name: event.Text
      };
    }
    let selectedPltId=event? event.Value : selectedPalletId;
    let model = this.shelfListForShipment.filter(x=>x.Location === location)[0];
    if(model){
      if(model.Quantity == '' || model.Quantity <= 0){
        this.showToastrWarning('Select Quantity plase.');
      }
      else{
        let noOfBoxes= this.getNoOfBoxesPerPallet(this.selectedItem["Id"],location,selectedPltId);
        model.NoOfBoxes = noOfBoxes;
        let noOfPallets = model.Quantity/noOfBoxes;
        noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0] ))+1);
        model.NoOfPallets = noOfPallets;
      }
    }
  }

  palletDeSelect(location: string) {
    this.selectedPallet = {};
    let model = this.shelfListForShipment.filter(x => x.Location === location)[0];
    model.NoOfBoxes = 0;
  }

  private getNoOfBoxesPerPallet(itemId:string, location:string, palletId:number){
    let itemCBM = this.getItemCBN(itemId);
    let shelfObjFromList = this.shelfListForShipment.filter(x=>x.Location === location)[0];
    let shelfObj = shelfObjFromList['godownShelf'] as GodownShelf
    let palletObj = this.palletList.filter(x=>x.PalletId == palletId)[0];
    if(!itemCBM || !shelfObj || !palletObj){
      return null;
    }else{
      let palletCBM = shelfObj.Height *  palletObj.Width * palletObj.Length;
      return palletCBM / itemCBM;
    }
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


  redirectToShipmentNoteRECList() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
  }

  public QuantityChange(event: any, shelfVacantCapicity, location:string) {
    let ItemCbm = this.getItemCBN(this.selectedItem["Id"]);
    if (!Number(event.target.value) || event.target.value <= 0) {
      event.target.value = '';
      this.shelfListForShipment.filter(x=>x.Location === location)[0].Quantity=event.target.value;
    }
    else if (Number(event.target.value) > shelfVacantCapicity) {
      this.showToastrWarning('Maximum Quantity can be ' + shelfVacantCapicity);
      event.target.value = '';
      this.shelfListForShipment.filter(x=>x.Location === location)[0].Quantity=event.target.value;
    }
    else{
      this.shelfListForShipment.filter(x=>x.Location === location)[0].Quantity=event.target.value;
      if(this.selectedPallet && this.selectedPallet["Id"]){
        this.palletSelect(null,location,this.selectedPallet["Id"]);
      }
    
    }
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
      //Location: element.Location,
      //GodownId: element.godown.GodwomId,
      //GodownShelfId: element.godownShelf.GodownShelfId,
      ExpiryDate: this.formGroup.get('EXPDate').value,
      MfgDate: this.formGroup.get('MFGDate').value,
      Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
    })
    this.selectedItem = {};
    this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("Batch").setValue('');
    this.formGroup.get("Status").setValue('');
    this.formGroup.get("EXPDate").setValue('');
    this.formGroup.get("MFGDate").setValue('');
    this.formGroup.get("Quantity").setValue('');
    this.formGroup.get("BoxQuantity").setValue('');

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

  addShipmentItem() {
    let hasValidQty=false;
    let hasValidQtyPltSelection=true; // checks for both selection on each row.
    this.shelfListForShipment.forEach(element => {
      if(((element.Quantity != 0 && element.Quantity != '') && (element.NoOfBoxes == '' || element.NoOfBoxes == 0))
      || ((element.Quantity == 0 && element.Quantity == '') && (element.NoOfBoxes != '' || element.NoOfBoxes != 0))){
        hasValidQtyPltSelection=false;
        return false;
      }
    });
    if(!hasValidQtyPltSelection){
      this.showToastrWarning("Invalid selection of Quantity and Pallet");
      return;
    }
    this.shelfListForShipment.forEach(element => {
      if((element.Quantity != 0 && element.Quantity != '')){
        hasValidQty=true;
        return false;
      }
    });
    if (!hasValidQty) {
      this.showToastrWarning("Add at lease one item quantity.");
    } else {
      this.shelfListForShipment.filter(x => x.Quantity != 0 && x.Quantity != '').forEach(element => {
        this.deleteFromShipmentList(element.Location, this.selectedItem["Id"]);
        let addedNoOfPallets = Number(element.NoOfPallets);
        let qty = Number(element.Quantity);
        let noOfBox = Number(element.NoOfBoxes);
        if (addedNoOfPallets > 1) {
          for (let i = 0; i < addedNoOfPallets; i++) {
            let x = (qty - noOfBox);
            let qtyPerBox = (qty >= noOfBox) ? noOfBox : qty;
            this.shipmentListToPost.push({
              Name: this.selectedItem['Name'],
              ItemInformationId: this.selectedItem["Id"],
              // PalletNo: i + 1,
              PalletNo: this.getPalletNoToSet(this.selectedItem["Id"]),
              Batch: '',
              Status: '',
              Quantity: qtyPerBox,
              NoOfBoxes: noOfBox,
              Location: element.Location,
              GodownId: element.godown.GodwomId,
              GodownShelfId: element.godownShelf.GodownShelfId,
              ExpiryDate: '',
              MfgDate: '',
              Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
            })
            qty = (qty - noOfBox);
          }
        } else {
          this.shipmentListToPost.push({
            Name: this.selectedItem['Name'],
            ItemInformationId: this.selectedItem["Id"],
            // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
            PalletNo: this.getPalletNoToSet(this.selectedItem["Id"]),
            Batch: '',
            Status: '',
            Quantity: element.Quantity,
            NoOfBoxes: noOfBox,
            Location: element.Location,
            GodownId: element.godown.GodwomId,
            GodownShelfId: element.godownShelf.GodownShelfId,
            ExpiryDate: '',
            MfgDate: '',
            Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
          })
        }

      });
      this.selectedPallet={};
      this.selectedItem = {};
      this.formGroup.get("ItemId").setValue('');
      this.shelfListForShipment = [];
      this.modalRef.close();
    }
 
  }

  private getPalletNoToSet(itemId: string) {
    let countByItem = this.shipmentListToPost.filter(x => x.ItemInformationId === itemId).length;
    if (countByItem == 0)
      return 1;
    else
      return (countByItem + 1)
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

  deleteFromShipmentListManual(item:any)
  {
    this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1)
  }

  addShipmentTextField(event: any, fieldName: string, ItemInformationId: string) {
    let model = this.shipmentListToPost.filter(x => x.ItemInformationId === ItemInformationId)[0];
    if(model){
      model[fieldName] = event.target.value;
    }
    if(fieldName === 'Status' || fieldName === 'Batch'){
      this.shipmentListToPost.filter(x => x.ItemInformationId === ItemInformationId).forEach(function(element){
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
      // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
      //   this.showToastrWarning("Select Warehouse please.");
      //   return false;
      // }
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

    let apiUrl = this.apiConstant.SHIPMENT_NOTE_CREATE;
    this._shipmentNoteServiceService.create(apiUrl, shipmentNote)
      .subscribe(res => {
        this.showToastrSuccess("Shipment Note created successfully");
        setTimeout(() => {
          this.redirectToShipmentNoteRECList();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }


}
