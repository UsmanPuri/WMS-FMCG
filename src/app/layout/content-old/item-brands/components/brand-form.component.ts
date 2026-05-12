import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ItemBrand } from "../models/ItemBrand";
import { ItemBrandService } from "../services/item-brand.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from '@angular/common/http';
import { ExporterService } from "src/app/helpers/services/excel-file.service";


@Component({
  selector: "wms-brand-form",
  templateUrl: "../templates/brand-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class BrandFormComponent extends BaseComponent {
  customerDropdownSettings = {};
  categoryDropdownSettings = {};
  @ViewChild('servicePicked') servicePicked;
  status: boolean;
  brand: ItemBrand;
  customerKeyPair: DropdownListDto[];
  categoryKeyPair: DropdownListDto[]=[];
  categoryObjToPushInCategoryKeyPair: DropdownListDto;
  categoryTempList:any[]=[];
  BrandListToPost:any[]=[];
  selectedCustomer = {};
  selectedCategory = {};
  selectedCustomerLastItem: ItemBrand;
  customerItems: ItemBrand[] = [];


  constructor(injector: Injector, private _itemBrandService: ItemBrandService,
    private activeRoute: ActivatedRoute,private envUrl: EnvironmentUrlService,private http: HttpClient,private exporterService: ExporterService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.dropdownSettings();
    this.getCustomerKeyPair();
  }

  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Description", []);
    this.addFormControlWithValidations("ItemBrandCode", []);
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(item: any) {
    this.selectedCustomer = {
      Id: item.Value,
      Name: item.Text
    }
    let companyBusinessUnitInfo: any = {
      CustomerId: item.Value
    }
    let apiAddress: string = this.apiConstant.ITEM_LIST;
    this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerItems = res as ItemBrand[];
        this.customerItems.forEach(element => {
          this.categoryObjToPushInCategoryKeyPair = {
            Value: element.ItemId,
            Text: element.Name,
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

  categoryChange(item: DropdownListDto) {
    this.selectedCategory={
      Id:item.Value,
      Name:item.Text
    }
    let customerCode=item.Value.substring(0,3);
    let categoryCode=item.Value.substring(4,6);
    let brandCount = this.customerItems
    .filter(x=>x.ItemId.substring(0,3) === customerCode &&
    x.ItemId.substring(4,6) == categoryCode && 
    x.ItemId.substring(7,10) != "100" &&
    x.ItemId.substring(11,15) === "1000").length;
    let newBrandCode=Number(item.Value.substring(7,10))+1;
//new
if(this.BrandListToPost.length>0)
{debugger
 
  this.BrandListToPost.forEach((element,index)=>{
    if(index==0)
    {
      //element["ItemId"] = code
      this.BrandListToPost[index].ItemId = customerCode+"-"+categoryCode+"-"+(brandCount+1+100)+"-"+"1000";
    }else{
    let cod=  this.BrandListToPost[index-1].ItemId.substring(7, 10);
    this.BrandListToPost[index].ItemId = customerCode+"-"+categoryCode+"-"+(Number(cod)+1)+"-"+"1000";
    }
   
  })
}else
{this.formGroup.get("ItemBrandCode").setValue(customerCode+"-"+categoryCode+"-"+(brandCount+1+100)+"-"+"1000");}
//new


    
  }

  public createBrandLIST() {
    if (this.formGroup.valid) {
      if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      if (!this.selectedCategory || !this.selectedCategory["Id"]) {
        this.showToastrWarning("Select Category please.");
        return false;
      }
      //this.executeBrandCreation(formValue);
    }
    let godwom = {
      // Name: formValue.Name,
      // ItemId:this.formGroup.get("ItemCategoryCode").value,
      // Description: formValue.Description,
      list:this.BrandListToPost,
      CustomerId:this.selectedCustomer["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }
    let apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE_LIST;
    this._itemBrandService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Item Category created successfully");
        setTimeout(() => {
          this.redirectToItemBrandList();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  public createBrand(formValue) {
    if (this.formGroup.valid) {
      if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      if (!this.selectedCategory || !this.selectedCategory["Id"]) {
        this.showToastrWarning("Select Category please.");
        return false;
      }
      this.executeBrandCreation(formValue);
    }
  }

  private executeBrandCreation(formValue) {
    let godwom: ItemBrand = {
      Name: formValue.Name,
      Description: formValue.Description,
      ItemId:this.formGroup.get("ItemBrandCode").value,
      CustomerId:this.selectedCustomer["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy: this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE;
    this._itemBrandService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Brand created successfully");
        setTimeout(() => {
          this.redirectToItemBrandList();
        }, 2000);
      },
        (error => {
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
    this.categoryDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  onCategoryDeSelect(item: any) {
    this.selectedCategory = {};
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


  redirectToItemBrandList() {
    this.router.navigate([this.routesList.ITEM_BRAND_LISTING]);
  }

  public exportServiceAsExcel() {
    debugger
    this.BrandListToPost.push({
      Name:'',
      Description:'',
      ItemId: ''
      
    })
    this.exporterService.exportToExcel(this.BrandListToPost, 'BrandList Data');
    this.BrandListToPost = [];
    }
    onServicePicked() {
      debugger
      const formData = new FormData();
      formData.append('ContractId', this.selectedCustomer.toString());
      formData.append('CustomerId', this.selectedCustomer.toString());
      formData.append('file', this.servicePicked.nativeElement.files[0]);
 
 
     if (formData) {
       this.uploadFile(formData)
       .subscribe(msg => {
           this.BrandListToPost = msg as any[];
          //  this.CatListToPost.forEach(element =>{
          //   if(element.ItemInformationId==="0")
          //   {
          //       this.BTN = true;
          //   }
          //  })
          // this.fleetServiceList = null;
           debugger
           console.log(this.BrandListToPost);
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

}
