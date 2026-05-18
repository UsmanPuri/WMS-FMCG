import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  ItemInformation } from "../models/ItemInformation";
import {  ItemService } from "../services/item.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ItemCategory } from "../../item-categories/models/ItemCategory";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from "@angular/common/http";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { debug } from "console";
import { ModalManager } from "ngb-modal";

@Component({
  selector: "wms-brand-form",
  templateUrl: "../templates/item-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class ItemFormComponent extends BaseComponent {
  @ViewChild('servicePicked') servicePicked;
  customerDropdownSettings = {};
  itemCategoryDropdownSettings = {};
  itemBrandDropdownSettings = {};
  unitOfMeasureBrandDropdownSettings = {};
  @ViewChild('CameraModal') CameraModal: any;
hasDevices: boolean;
hasPermission: boolean;
qrResultString: string;
private modalRef: any;
isScannerOpen: boolean = false;
  status: boolean;
  itemInformation: ItemInformation;
  customerKeyPair: DropdownListDto[];
  categoryKeyPair: DropdownListDto[];
  itemList:any=[];
  brandKeyPair: DropdownListDto[];
  unitOfMeasureKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedCategory={};
  selectedBrand={};
  selectedUnitOfMeasure={};
  categoryTempList:any[]=[];
  SKUListToPost:any[]=[];
  CheckListTOPost:any[]=[];
  brandTempList:any[]=[];
  isCheckSKUCODE = false;
  customerItems: ItemCategory[] = [];
  categoryObjToPushInCategoryKeyPair: DropdownListDto;
  brandObjToPushInCategoryKeyPair: DropdownListDto;
  isEnable: boolean= false;

  constructor(injector: Injector, private _itemService: ItemService,
    private activeRoute: ActivatedRoute,private envUrl: EnvironmentUrlService,private http: HttpClient,private exporterService: ExporterService,private modalService: ModalManager
  ) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
    this.getUnitOfMeasureKeyPair();
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
    this.addFormControlWithValidations("MinStockLevel", []);
    this.addFormControlWithValidations("MaxStockLevel", []);
    this.addFormControlWithValidations("QuantityInPacking", []);
    this.addFormControlWithValidations("Price", []);
    this.addFormControlWithValidations("Remarks", []);
    this.addFormControlWithValidations("CategoryId", []);
    this.addFormControlWithValidations("BrandId",[]);
    this.formGroup.get("Width").setValue(0);
    this.formGroup.get("Height").setValue(0);
    this.formGroup.get("Length").setValue(0);
    this.formGroup.get("Weight").setValue(0);
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
    this.formGroup.get('Description').setValue("");
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
    let code = this.selectedBrand["Id"].substring(0,15);
    this.getBrandInfo(code);
      
    let itemId=customerCode+"-"+categoryCode+"-"+brandCode;
      let byIdUrl: string = this.apiConstant.ITEM_GetItemInformationByItemId + `${itemId}`;
      this._itemService.getData(byIdUrl)
        .subscribe(res => {
          console.log(res);
         let itemListByBrand=res as ItemInformation[];
       debugger
    if(this.SKUListToPost.length>0)
      {  
 
  this.SKUListToPost.forEach((element,index)=>{
    if(index==0)
    {
      //element["ItemId"] = code
      this.SKUListToPost[index].ItemInformationId = itemId+"-"+(1000+itemListByBrand.length+1);
    }else{
        
    let cod=  this.SKUListToPost[index-1].ItemInformationId.substring(11, 15);
    this.SKUListToPost[index].ItemInformationId = itemId+"-"+(Number(cod)+1);
    }
   
  })
}else
{  this.formGroup.get('ItemCode').setValue(itemId+"-"+(1001+itemListByBrand.length+1));}
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }
  getBrandInfo(code)
  {
      
    let obj ={
      BrandCode:code
    }
    let apiAddress: string = this.apiConstant.ITEM_INFORMATION_ByBrandCode;
    this._itemService.getKeyPair(apiAddress, obj)
    .subscribe(res => {
      this.itemList = res as any;
      this.validatBrand();
    },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
  }
   
  validatBrand()
  {
    if(this.SKUListToPost.length > 0)
    {

      let f = false;
      let check;
    this.SKUListToPost.forEach(element => {
      check = this.itemList.find(x=>x.Description===element.Description);
     if(check)
     {
       f= true;
       element.isExist = true;
       this.CheckListTOPost.push(check);
      
     }
    
    });
    var result = this.CheckListTOPost.map(function(val) {
    return val.Description;
    }).join(',');

console.log(result)

    this.showToastrWarning(result);
    if(f){this.isEnable=true}
  }
  
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
  public ValidateCustomerSKUCODE(formValue)
  {
      
    let info = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      Description: formValue.Description,
      Category: formValue.BrandId[0].Value,
    }
    console.log(formValue.BrandId[0].Value)

    let apiUrl = this.apiConstant.Validate_Customer_SKUCODE;
    this._itemService.create(apiUrl, info)
      .subscribe(res => {
        this.isCheckSKUCODE = res as boolean;
         if(res==true)
         {
          this.showToastrError("SKU Code already exist in Selected Category");
         }
        //this.showToastrSuccess("Item Information created successfully");
        // setTimeout(() => {
        //   this.redirectToItemInformationList();
        // }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
  public executeItemInformationCreationLIST()
  {
    let info = {
      list:this.SKUListToPost,
      ItemId:this.selectedBrand["Id"],
      CustomerId: this.selectedCustomer["Id"],
      UOM: this.selectedUnitOfMeasure? this.selectedUnitOfMeasure["Id"] : "0",
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }
    let apiUrl = this.apiConstant.ITEM_INFORMATION_CREATE_LIST;
    this._itemService.create(apiUrl, info)
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
  public exportServiceAsExcel() {
      
    this.SKUListToPost.push({
      ItemInformationId:"Leave Empty",
      ItemId:"Leave Empty",
      Name: "SKU NAME",
      Description: "Customer SKU",
      Height: 0,
      Width: 0,
      Length: 0,
      Weight: 0,
      UOM: "Leave Empty",
      MinStockLevel: 0,
      MaxStockLevel: 0,
      QuantityInPacking: 1,
      Price: 0,
      Remarks: "",
    })
    this.exporterService.exportToExcel(this.SKUListToPost, 'SKUList Data');
    this.SKUListToPost = [];
    }
    onServicePicked() {
        
      const formData = new FormData();
      formData.append('ContractId', this.selectedCustomer.toString());
      formData.append('CustomerId', this.selectedCustomer.toString());
      formData.append('file', this.servicePicked.nativeElement.files[0]);
 
 
     if (formData) {
       this.uploadFile(formData)
       .subscribe(msg => {
           this.SKUListToPost = msg as any[];
          //  this.CatListToPost.forEach(element =>{
          //   if(element.ItemInformationId==="0")
          //   {
          //       this.BTN = true;
          //   }
          //  })
          // this.fleetServiceList = null;
             
           console.log(this.SKUListToPost);
         }
       );
     }
   }
   uploadFile(formData: FormData) {
    if (!formData) { return; }
    let apiUrl = this.apiConstant.FILE_UPLOAD_ItemBrand;
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
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

  Delete(item:any){
   this.SKUListToPost = this.SKUListToPost.filter(x=> x.Description != item.Description);
  }

  redirectToItemInformationList() {
    this.router.navigate([this.routesList.ITEM_LISTING]);
  }
 openScanner() {
    this.isScannerOpen = true; 
    this.modalRef = this.modalService.open(this.CameraModal, {
      size: "md",
      backdrop: 'static', 
      keyboard: false
    });
  }

  
  closeScanner() {
    this.isScannerOpen = false; 
    this.modalRef.close();      
  }

 
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.formGroup.get('Description').setValue(resultString);
    this.ValidateCustomerSKUCODE(this.formGroup.value);

    this.closeScanner(); 
  }

  
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

}
