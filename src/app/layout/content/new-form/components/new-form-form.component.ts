import { Component, Injector, OnInit } from "@angular/core";
import { NewFormService } from "../services/new-form.service"
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { NewForm } from "../models/NewForm";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { element } from "protractor";
import { ValidatorFn, Validators } from "@angular/forms";
import { ShipmentNoteService } from "../../shipment-note/services/shipment-note.service";


@Component({
  selector: "genx-new-form-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/new-form-form.component.scss"],
})
export class NewFormFormComponent extends BaseComponent {

  public unitList: NewForm[];
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


  public listAvailableStock:any[]=[];
  itemTemDropdown: any;

  constructor(injector: Injector,private stockMovementService: NewFormService,private _dashboardService: DashboardService,
    private exporterService: ExporterService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getWarehouseKeyPair();
  }
  

  getAvailablestock(warehouseId:any) {
    let apiAddress: string = this.apiConstant.DASHBOARD_AVAILABLE_STOCK;
    this._dashboardService.getData(apiAddress)
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
        //console.log(this.listAvailableStock)
        this.itemKeyPair = itemTemDropdown;
        
      const table: any = $('table');
     this.dataTable = table.DataTable({
      lengthMenu: [5, 10, 20, 50, 100],
      "iDisplayLength": 100
    });
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
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

  onSelectWarehouse(item: any, dropDownName: string) {
   //debugger
    this.selectedWarehouse = {
      Id: item.Value,
      Name: item.Text
    }
    this.selectedLocation = {
      Id: item.value
    };
    this.getLocationKeyPair(item.Value)
    this.getAvailablestock(item.Value)
  }

  onDeSelectWarehouse(dropDownName: string) {
    this.selectedWarehouse = {};
  }

  getWarehouseKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onSelect(item: any, dropDownName: string) {
  
  let locationArray = item.Text.split('|');


    this.selectedItemLoc = {
      Id: item.Value,
      Name: locationArray[0].replace(/\s/g, "")
    }
    this.SnKeyPair = [];
    let tempItemList: any[] = [];
    let itemTemDropdown: any[] = [];
    tempItemList = this.listAvailableStock.filter(x=> x.ItemId == item.Value && x.Location == locationArray[0].replace(/\s/g, "") && x.SNno != null);
    tempItemList.forEach(element => {
      itemTemDropdown.push({
        Value: element.SNno,
        Text: element.SNno + " | " + element.Balance
        
      })
    this.SnKeyPair = itemTemDropdown;
     
     
    });

  }


  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
  }


  onSelectSnDetails(item: any, dropDownName: string) {
  //debugger
    this.selectedSnDetail = {
      Id: item.Value,
      Name: item.Text
    }
    //this[dropDownName] = {};
  }

  onDeSelectSnDetails(dropDownName: string) {
    this[dropDownName] = {};
  }

  onSelectItem(item:any, dropDownName: string){
    //debugger
    this.selectedItem = {
      Id: item.Value,
      Name: item.Text
    }
    this.locKeyPair = [];
    let tempItemList: any[] = [];
    let itemTemDropdown: any[] = [];
    tempItemList = this.listAvailableStock.filter(x=> x.ItemId == item.Value);
    tempItemList.forEach(element => {
      itemTemDropdown.push({
        Value: element.ItemId,
        Text: element.Location +" | "+  element.Balance 
        
      })

      itemTemDropdown = itemTemDropdown.filter((element, index, self) => {
        return index === self.findIndex((x) => (
          (element.Text === x.Text) 
        ))
      }
      )
    this.locKeyPair = itemTemDropdown;
     
     
    });
  }


  onDeSelectItem(dropDownName: any){

 
    if (dropDownName === 'selectedItem') {
      this.locKeyPair = [];
      
    }
    this.formGroup.get("LocId").setValue('');   
    this.formGroup.get("SnId").setValue('');
    
    
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
    // this.addFormControlWithValidations("GodownShelfId", []);
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



  getLocationKeyPair(item:any) {
    //debugger
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId:item,
    }
    //let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
    let apiAddress: string = this.apiConstant.LOCATION_BYView_BYWarehouse;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
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
        
        //this.locationKeyPair = ;
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }



  redirectToNewFormListing(){
    this.router.navigate([this.routesList.NEW_FORM_LISTING]);
    
  }


  addItemIntoItemPostList(stockMovementFormValue) {
    //debugger
   let stockmovementObject = {
    WareHouseId : this.selectedWarehouse.Id,
    ItemInformationId : this.selectedItem.Id,
    Location : this.selectedLocation.Name,
    SNno : this.selectedSnDetail.Id,
    ReceivedQuantity: this.formGroup.get("QtyToAdd").value,
    CompanyId: this.localStorageService.getCompanyId(),
    BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    CreatedBy: this.localStorageService.getUserId(),
    LastModifiedBy:this.localStorageService.getUserId(),
  }  
  console.log(stockmovementObject);
  this.itemListToPost.push(stockmovementObject)

      this.itemListToPost.push({   
        Quantity: this.formGroup.get('QtyToAdd').value,
      }) 
       this.formGroup.get("QtyToAdd").setValue('')
    
  }
  onSelectLoc(item: any, dropDownName: string) {
  //debugger
    this.selectedLocation = {
      Id: item,
      Name: item
    }
    }


  

    public createStockMovement(stockMovementFormValue) {
      if (this.formGroup.valid) {
        this.executeStockMovementCreation(stockMovementFormValue);
      }
    }
    private executeStockMovementCreation(stockMovementFormValue) {
      debugger
     
    }

  // redirectToCreateUnit(){
  //   this.router.navigate([this.routesList.UNIT_CREATE]);
  // }




}
