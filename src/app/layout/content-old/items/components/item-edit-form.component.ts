import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  ItemInformation } from "../models/ItemInformation";
import {  ItemService } from "../services/item.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ItemCategory } from "../../item-categories/models/ItemCategory";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-item-edit-form",
  templateUrl: "../templates/item-edit-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class ItemEditFormComponent extends BaseComponent {
  customerDropdownSettings = {};
  itemCategoryDropdownSettings = {};
  itemBrandDropdownSettings = {};
  unitOfMeasureBrandDropdownSettings = {};
  selectedUnitInfo:any;
  status: boolean;
  itemInformation: ItemInformation;
  customerKeyPair: DropdownListDto[];
  categoryKeyPair: DropdownListDto[];
  brandKeyPair: DropdownListDto[];
  unitOfMeasureKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedCategory={};
  selectedBrand={};
  selectedUnitOfMeasure={};
  categoryTempList:any[]=[];
  brandTempList:any[]=[];
  customerItems: ItemCategory[] = [];
  categoryObjToPushInCategoryKeyPair: DropdownListDto;
  brandObjToPushInCategoryKeyPair: DropdownListDto;
    item: ItemInformation;

  constructor(injector: Injector, private _itemService: ItemService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getUnitOfMeasureKeyPair();
    this.addFormValidations();
    this.dropdownSettings();
   // this.getCustomerKeyPair();
    
    this.getById();
  }


  private getById() {
    let itemId: string = this.activeRoute.snapshot.params['Id'];
    if(itemId){
      let byIdUrl: string = this.apiConstant.ITEM_INFORMATION_BY_ID + `${itemId}`;
      this._itemService.getData(byIdUrl)
        .subscribe(res => {
          this.item = res as ItemInformation;
          this.selectedUnitInfo = [{
            "Text": this.getUOMNameFromUOMKeyPair(this.item.UOM),
            "Value": this.item.UOM.toString()
          }];
          
          this.selectedUnitOfMeasure={
            Id:this.item.UOM.toString(),
            Name:this.getUOMNameFromUOMKeyPair(this.item.UOM)
          };
          this.formGroup.patchValue(this.item);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  private getUOMNameFromUOMKeyPair(regionId: any) {
    let model=this.unitOfMeasureKeyPair
    .filter(x => x.Value == regionId);
    console.log(model);
    if(model && model[0] && model[0].Text) {
      return model[0].Text;
    }else{
      return 0;
    }
  }
  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("ItemCode",[]);
    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Description", requiredValidation);
    this.addFormControlWithValidations("Height", requiredValidation);
    this.addFormControlWithValidations("Width", requiredValidation);
    this.addFormControlWithValidations("Length", requiredValidation);
    this.addFormControlWithValidations("Weight", requiredValidation);
    this.addFormControlWithValidations("unitId", requiredValidation);
    this.addFormControlWithValidations("MinStockLevel", []);
    this.addFormControlWithValidations("MaxStockLevel", []);
    this.addFormControlWithValidations("QuantityInPacking", []);
    this.addFormControlWithValidations("Price", []);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("CategoryId", []);
    this.addFormControlWithValidations("BrandId",[]);
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  getUnitOfMeasureKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.UNIT_KEY_PAIR;
    this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.unitOfMeasureKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  onDropDownSelect(item:any,dropdownName:string){
    this[dropdownName]={
      Id:item.Value,
      Name:item.Text
    };
    if(dropdownName === "selectedCustomer"){
      this.customerChange(item);
    }
    if(dropdownName === "selectedCategory"){
      this.categoryChange(item);
    }
    if(dropdownName === "selectedBrand"){
      this.brandChange(item);
    }
    if(dropdownName !== 'selectedUnitOfMeasure'){
      this.formGroup.get('ItemCode').setValue('');
    }
    
  }

  onDropDownDeSelect(item:any,dropdownName:string){
    this[dropdownName]={};
    if(dropdownName === "selectedCustomer"){
      this.formGroup.get("CategoryId").setValue('');
      this.categoryKeyPair=[];
      this.categoryTempList=[];
      this.formGroup.get("BrandId").setValue('');
      this.brandKeyPair=[];
      this.brandTempList=[];
    }
    if(dropdownName === "selectedCategory"){
      this.formGroup.get("BrandId").setValue('');
      this.brandKeyPair=[];
      this.brandTempList=[];
    }
    this.formGroup.get('ItemCode').setValue('');
  }

  customerChange(item: any) {
    let companyBusinessUnitInfo: any = {
      CustomerId: item.Value
    }
    let apiAddress: string = this.apiConstant.ITEM_LIST;
    this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.formGroup.get("CategoryId").setValue('');
        this.categoryKeyPair=[];
        this.categoryTempList=[];
        this.formGroup.get("BrandId").setValue('');
        this.brandKeyPair=[];
        this.brandTempList=[];
        this.customerItems = res as ItemCategory[];
        this.customerItems.forEach(element => {
          this.categoryObjToPushInCategoryKeyPair = {
            Value: element.ItemId,
            Text: element.ItemId+" | "+element.Name,
            ParentReferenceId: null
          };
          this.categoryTempList.push(this.categoryObjToPushInCategoryKeyPair);
        });
        this.categoryKeyPair=this.categoryTempList
        .filter(x=>Number(x.Value.substring(4,6) > 10) && x.Value.substring(7,15) == "100-1000");
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  categoryChange(item: any) {
    this.formGroup.get("BrandId").setValue('');
    this.brandKeyPair=[];
    this.brandTempList=[];
    this.customerItems
    .filter(x=>x.ItemId.substring(4,6) === item.Value.substring(4,6))
    .forEach(element => {
      this.brandObjToPushInCategoryKeyPair = {
        Value: element.ItemId,
        Text: element.ItemId+" | "+element.Name,
        ParentReferenceId: null
      };
      this.brandTempList.push(this.brandObjToPushInCategoryKeyPair);
    });
    this.brandKeyPair=this.brandTempList
    .filter(x=>Number(x.Value.substring(7,10) > 100) && x.Value.substring(11,15) == "1000");
  }

  brandChange(item: any) {
    let customerCode = this.selectedCategory["Id"].substring(0,3);
    let categoryCode = this.selectedCategory["Id"].substring(4,6);
    let brandCode = this.selectedBrand["Id"].substring(7,10);
    let itemId=customerCode+"-"+categoryCode+"-"+brandCode;
      let byIdUrl: string = this.apiConstant.ITEM_GetItemInformationByItemId + `${itemId}`;
      this._itemService.getData(byIdUrl)
        .subscribe(res => {
          console.log(res);
         let itemListByBrand=res as ItemInformation[];
         this.formGroup.get('ItemCode').setValue(itemId+"-"+(1000+itemListByBrand.length+1));
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }

  public createItemInformation(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      if(!this.selectedCategory || !this.selectedCategory["Id"]){
        this.showToastrWarning("Select Category please.");
        return false;
      }
      if(!this.selectedBrand || !this.selectedBrand["Id"]){
        this.showToastrWarning("Select Brand please.");
        return false;
      }
      this.executeItemInformationCreation(formValue);
    }
  }

  private executeItemInformationCreation(formValue) {
    let itemInfo: ItemInformation = {
      ItemInformationId:this.formGroup.get("ItemCode").value,
      ItemId:this.selectedBrand["Id"],
      Name: formValue.Name,
      Description: formValue.Description,
      CustomerId: this.selectedCustomer["Id"],
      Height: formValue.Height,
      Width: formValue.Width,
      Length: formValue.Length,
      Weight: formValue.Weight,
      UOM: this.selectedUnitOfMeasure? this.selectedUnitOfMeasure["Id"] : "0",
      MinStockLevel: formValue.MinStockLevel,
      MaxStockLevel: formValue.MaxStockLevel,
      QuantityInPacking: formValue.QuantityInPacking,
      Price: formValue.Price,
      Remarks: formValue.Remarks,
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.ITEM_INFORMATION_CREATE;
    this._itemService.create(apiUrl, itemInfo)
      .subscribe(res => {
        this.showToastrSuccess("Item Information created successfully");
        setTimeout(() => {
          this.redirectToItemInformationList();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  updateItemInformation(formValue){
    if (this.formGroup.valid) {
      this.executeItemInformationUpdate(formValue);
    }
  }

  private executeItemInformationUpdate(formValue) {
    let itemInfo: ItemInformation = {
        //ItemInformationId:this.formGroup.get("ItemCode").value,
        //ItemId:this.selectedBrand["Id"],
        Name: formValue.Name,
        Description: formValue.Description,
        //CustomerId: this.selectedCustomer["Id"],
        Height: formValue.Height,
        Width: formValue.Width,
        Length: formValue.Length,
        Weight: formValue.Weight,
        UOM: this.selectedUnitOfMeasure? this.selectedUnitOfMeasure["Id"] : "0",
        MinStockLevel: formValue.MinStockLevel,
        MaxStockLevel: formValue.MaxStockLevel,
        QuantityInPacking: formValue.QuantityInPacking,
        Price: formValue.Price,
        Remarks: formValue.Remarks,
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        CreatedBy: this.localStorageService.getUserId(),
        LastModifiedBy:this.localStorageService.getUserId(),
      }

    let apiUrl = this.apiConstant.ITEM_INFORMATION_UPDATE+`/${this.item.ItemInformationId}`;
    this.ngxService.start();
    this._itemService.update(apiUrl, itemInfo)
      .subscribe(res => {
        this.showToastrSuccess("Item Updated successfully");
        setTimeout(() => {
          this.redirectToItemInformationList();
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

  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
  }
   
private dropdownSettings(){
  this.customerDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.itemCategoryDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.itemBrandDropdownSettings = {
    idField: 'Value',
    textField: 'Text',
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  this.unitOfMeasureBrandDropdownSettings = {
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

  redirectToItemInformationList() {
    this.router.navigate([this.routesList.ITEM_LISTING]);
  }

}
