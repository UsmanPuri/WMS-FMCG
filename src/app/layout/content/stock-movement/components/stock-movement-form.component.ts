import { Component, Injector, OnInit } from "@angular/core";
import { StockMovementService } from "../services/stock-movement.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { StockMovement } from "../models/StockMovement";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: "genx-stock-movement-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/stock-movement-form.component.scss"],
})
export class StockMovementFormComponent extends BaseComponent {

  public unitList: StockMovement[];
   // Our future instance of DataTable
   dataTable: any;
   warehouseDropdownSettings = {};
   warehouseKeyPair: DropdownListDto[];
   selectedWarehouse:any = {};
   selectedItemLoc:any = {};
   selectedSnDetail:any ={};
   itemDropdownSettings = {};
   itemKeyPair: DropdownListDto[];
   locDropdownSettings = {};
   locKeyPair: DropdownListDto[];
   SnKeyPair: DropdownListDto[];
   SnDropdownSettings:{};
   locationDropdownSettings={};
   locationKeyPair:DropdownListDto[];
   selectedLocation:any = {};
   locationObject:any =[];
   selectedItem:any = {};
   itemListToPost: any[]=[];
   currentLocaitonQty: number;
   Price: number;
   Status: string;
   PalletNo: string;
   BatchCode:string;
   InboundPool:string;


  public listAvailableStock:any[]=[];
  itemTemDropdown: any;
  // formValue: any;
 

  constructor(injector: Injector,private stockMovementService: StockMovementService,
    private _dashboardService: DashboardService,) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getWarehouseKeyPair();
  }

  private dropdownSettings() {

    this.warehouseDropdownSettings={
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

    this.locDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    
    this.SnDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    this.locationDropdownSettings={
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  

  getAvailablestock(warehouseId:any) {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId : warehouseId,
    }

    let apiAddress: string = this.apiConstant.DASHBOARD_AVAILABLE_STOCK;
    this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => { 
        this.listAvailableStock = res as any[];
        let itemTemDropdown: any[] = [];
        this.listAvailableStock = this.listAvailableStock.filter(x=> x.WarehouseId == warehouseId);
        this.listAvailableStock.forEach(element => {
          itemTemDropdown.push({
            Value: element.ItemId,
            Text: element.Description + " | " + element.Name + " | " + element.CustomerName
            
          })
        });
        itemTemDropdown = itemTemDropdown.filter((element, index, self) => {
          return index === self.findIndex((x) => (
            (element.Text === x.Text) 
          ))
        }
        )
        this.itemKeyPair = itemTemDropdown;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
        //console.log(this.warehouseKeyPair);
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  onSelectWarehouse(item: any, dropDownName: string) {
   //debugger
       this.selectedWarehouse = {
      Id: item.Value,
      Name: item.Text
    }
    this.getLocationKeyPair(item.Value);
    this.getAvailablestock(item.Value);
    this.SetDefualtValue();
  }

  onDeSelectWarehouse(dropDownName: string) {
    this.selectedWarehouse = {};
  }

 

  onSelectItem(item:any, dropDownName: string){
    this.formGroup.get("LocId").setValue('');
    this.formGroup.get("SnId").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.selectedItem = {
      Id: item.Value,
      Name: item.Text
    }
    this.locKeyPair = [];
    let tempItemList: any[] = [];
    let itemTemDropdown: any[] = [];
    tempItemList = this.listAvailableStock.filter(x=> x.ItemId == item.Value);
    let i : number = 0;
    tempItemList.forEach(element => {
      itemTemDropdown.push({
        Value: element.ItemId + "-" + i ,
        Text:  element.Location  
        
      })
      i++
     
    });
    itemTemDropdown = itemTemDropdown.filter((element, index, self) => {
      return index === self.findIndex((x) => (
        (element.Text === x.Text) 
      ))
    }
    )
  this.locKeyPair = itemTemDropdown;
    //console.log(this.locKeyPair)
  }


  onDeSelectItem(dropDownName: any){
    if (dropDownName === 'selectedItem') {
      this.locKeyPair = [];
    }
    this.formGroup.get("LocId").setValue('');   
    this.formGroup.get("SnId").setValue('');
  }

  onSelectCurrentLocaiton(item: any, dropDownName: string) {
    //debugger
    this.formGroup.get("SnId").setValue('');
    this.selectedItemLoc = {
      Id: item.Value,
      Name: item.Text
    }
    //debugger
    this.SnKeyPair = [];
    let tempItemList: any[] = [];
    let itemTemDropdown: any[] = [];
    tempItemList = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == item.Text && x.SNno != null);
    if (tempItemList.length > 0) {
      tempItemList.forEach(element => {
        itemTemDropdown.push({
          Value: element.SNno,
          Text: element.SNno + " | " + element.Balance
        })
      this.SnKeyPair = itemTemDropdown;
      });
    }else{
      //
      this.currentLocaitonQty = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == item.Text).map(x=> x.Balance)[0];
      this.formGroup.get("QtyAvailableToAdd").setValue(this.currentLocaitonQty);
      this.Status =this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.Status)[0];
      this.formGroup.get("StatusToAdd").setValue(this.Status);
      this.PalletNo =this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.PalletNo)[0];
      this.formGroup.get("PalletNoToAdd").setValue(this.PalletNo);
      this.BatchCode = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.BatchCode)[0];
      this.formGroup.get("BatchCodeToAdd").setValue(this.BatchCode);
      this.InboundPool = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.InboundPool)[0];
      this.formGroup.get("InboundPoolToAdd").setValue(this.InboundPool);
      this.Price = 0;
      this.formGroup.get("PriceToAdd").setValue(this.Price);
    }
   
  }

  onDeSelectCurrentLocaiton(dropDownName: string) {
    this[dropDownName] = {};
  }
  onSelectSnDetails(item: any, dropDownName: string) {
    this.selectedSnDetail = {
      Id: item.Value,
      Name: item.Text
    }
    debugger
    this.currentLocaitonQty = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == item.Value).map(x=> x.Balance)[0];
    this.formGroup.get("QtyAvailableToAdd").setValue(this.currentLocaitonQty);
    this.Status = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.Status)[0];
    this.formGroup.get("StatusToAdd").setValue(this.Status);
    this.PalletNo = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.PalletNo)[0];
    this.formGroup.get("PalletNoToAdd").setValue(this.PalletNo);
    this.BatchCode = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.BatchCode)[0];
    this.formGroup.get("BatchCodeToAdd").setValue(this.BatchCode);
    this.InboundPool = this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.InboundPool)[0];
    this.formGroup.get("InboundPoolToAdd").setValue(this.InboundPool);
    this.Price = 0;
    this.formGroup.get("PriceToAdd").setValue(this.Price);
    
  
  }

  onDeSelectSnDetails(dropDownName: string) {
    this[dropDownName] = {};
  }



  getLocationKeyPair(item:any) {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId:item,
    }
    let apiAddress: string = this.apiConstant.LOCATION_BYView_BYWarehouse;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        let tempItemList: any[] = [];
        let itemTemDropdown: any[] = [];
        tempItemList = res as any;
        tempItemList.forEach(element => {
          itemTemDropdown.push({
            Value: element.Location,
            Text: element.Location
            
          })
        })
    this.locationKeyPair = itemTemDropdown;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
 


  addItemIntoItemPostList() {
debugger
if (this.formGroup.get("QtyToAdd").value > this.formGroup.get("QtyAvailableToAdd").value) {
  this.showToastrError('Move Quantity must be Less Then Or Equal to Aailable  Quantity');
}else {
  let stockmovementObject = {
    WarehouseId : this.selectedWarehouse.Id,
    warehouseName : this.warehouseKeyPair.filter(x=> x.Value == this.selectedWarehouse.Id).map(x=> x.Text)[0],
    ItemId : this.selectedItem.Id,
    itemName : this.itemKeyPair.filter(x=> x.Value == this.selectedItem.Id).map(x=> x.Text)[0],
    NewLocation : this.selectedLocation.Name,
    OldLocation : this.selectedItemLoc.Name,
    TransctionDate : this.formGroup.get("Date").value,
    SNno : this.selectedSnDetail != undefined ? this.selectedSnDetail.Id : null,
    MoveQuantity: this.formGroup.get("QtyToAdd").value,
    CompanyId: this.localStorageService.getCompanyId(),
    BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    CreatedBy: this.localStorageService.getUserId(),
    LastModifiedBy:this.localStorageService.getUserId(),
    ShipmentNoteId:null,
    Status : this.selectedSnDetail != undefined ? this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.Status)[0] :
    this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.Status)[0],
    BatchCode : this.selectedSnDetail != undefined ? this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.BatchCode)[0] :
    this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.BatchCode)[0],
    PRNo : this.selectedSnDetail != undefined ? this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.PRno)[0] :
    this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.PRno)[0],
    InboundPool : this.selectedSnDetail != undefined ? this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.InboundPool)[0] :
    this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.InboundPool)[0],
    Price : 0,
    RecordReference : "ChangeLocator",
    PalletNo : this.selectedSnDetail != undefined ? this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name && x.SNno == this.selectedSnDetail.Id).map(x=> x.PalletNo)[0] :
    this.listAvailableStock.filter(x=> x.ItemId == this.selectedItem.Id && x.Location == this.selectedItemLoc.Name).map(x=> x.PalletNo)[0],
  }  
  //console.log(stockmovementObject);
  this.itemListToPost.push(stockmovementObject)
  this.SetDefualtValue();
}
  
    
  }
  onSelectLoc(item: any) {
  // 
    this.selectedLocation = {
      Id: item,
      Name: item
    }
    }

    public createStockMovement() {
        this.executeStockMovementCreation();
    }
    private executeStockMovementCreation() {
  
      let apiUrl = this.apiConstant.STOCK_MOVEMENT_CREATE;
    this.stockMovementService.create(apiUrl, this.itemListToPost)
      .subscribe(res =>{
        this.showToastrSuccess('Stock Movement created successfully');

        setTimeout(() => {
      
       this.clearFields();
        }, 1000);
        this.redirectToStockMovementListing();
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
     
    }
    public clearFields() {
      this.formGroup.get("WarehouseId").setValue('');
    }
    onDeSelectLoc(){
      this.selectedLocation=[];
    }

    addFormValidations(): void {
      const requiredValidation: ValidatorFn[] = [
        Validators.required,
      ];
  
      this.addFormControlWithValidations("ItemId", requiredValidation);   
      this.addFormControlWithValidations("WarehouseId", requiredValidation);
      this.addFormControlWithValidations("LocId", requiredValidation);
      this.addFormControlWithValidations("LocationId", requiredValidation);
      this.addFormControlWithValidations("SnId", []);
      this.addFormControlWithValidations("QtyToAdd",requiredValidation);  
      this.addFormControlWithValidations("QtyAvailableToAdd",[]);
      this.addFormControlWithValidations("BatchCodeToAdd",[]);
      this.addFormControlWithValidations("InboundPoolToAdd",[]);
      this.addFormControlWithValidations("StatusToAdd",[]);
      this.addFormControlWithValidations("PalletNoToAdd",[]);
      this.addFormControlWithValidations("Date",requiredValidation);
      this.addFormControlWithValidations("PriceToAdd",[]);
      
    }
  
  
    public validateControl(controlName: string) {
      if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
        return true;
  
      return false;
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

    SetDefualtValue(){
      this.formGroup.get("ItemId").setValue('');
    this.formGroup.get("LocId").setValue('');
    this.formGroup.get("SnId").setValue('');
    this.formGroup.get("LocationId").setValue('');
    this.formGroup.get("QtyToAdd").setValue('');
    this.formGroup.get("QtyAvailableToAdd").setValue('');
    this.formGroup.get("BatchCodeToAdd").setValue('');
    this.formGroup.get("InboundPoolToAdd").setValue('');
    this.formGroup.get("StatusToAdd").setValue('');
    this.formGroup.get("PalletNoToAdd").setValue('');
    
    this.selectedSnDetail = undefined;
    this.locKeyPair = null;
    }

    redirectToStockMovementListing(){
      this.router.navigate([this.routesList.STOCK_MOVEMENT_LISTING]);
      
    }
}
