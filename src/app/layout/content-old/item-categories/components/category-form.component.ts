import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  ItemCategory } from "../models/ItemCategory";
import {  ItemCategoryService } from "../services/item-category.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { HttpClient } from '@angular/common/http';
import { element } from "protractor";


@Component({
  selector: "wms-category-form",
  templateUrl: "../templates/category-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class CategoryFormComponent extends BaseComponent {
  @ViewChild('servicePicked') servicePicked;
  customerDropdownSettings = {};
  statuss=true;
  status: boolean;
  category: ItemCategory;
  customerKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedCustomerLastItem: ItemCategory;
  CatListToPost:any[]=[];
  constructor(injector: Injector, private _itemCategoryService: ItemCategoryService,
    private activeRoute: ActivatedRoute,private exporterService: ExporterService,private envUrl: EnvironmentUrlService,private http: HttpClient) {
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
    this.addFormControlWithValidations("ItemCategoryCode",[]);
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(item:any){
    this.selectedCustomer={
      Id:item.Value,
      Name:item.Text
    }
      let customerByIdUrl: string = this.apiConstant.ITEM_GET_LAST_BY_CUSTOMER + `${item.Value}`;
      this._itemCategoryService.getData(customerByIdUrl)
        .subscribe(res => {
          this.selectedCustomerLastItem = res as ItemCategory;
          debugger
          if(this.selectedCustomerLastItem!=null)
          {
            let customerCode = this.selectedCustomerLastItem.ItemId.substring(0,3);
            let itemcode = this.selectedCustomerLastItem.ItemId.substring(4, 6);
            let code = customerCode+"-"+(Number(itemcode)+1)+"-100-1000";
            

            if(this.CatListToPost.length>0)
            {debugger
              let i = 0;
              this.CatListToPost.forEach((element,index)=>{
                if(index==0)
                {
                  //element["ItemId"] = code
                  this.CatListToPost[index].ItemId = code;
                }else{
                let cod=  this.CatListToPost[index-1].ItemId.substring(4, 6);
                this.CatListToPost[index].ItemId = customerCode+"-"+(Number(cod)+1)+"-100-1000";
                }
               
              })
            }else{this.formGroup.get("ItemCategoryCode").setValue(code);}
          }
          else{
            let apiAddressForItemCategory: string = this.apiConstant.MAX_ITEM_CODE;
            this._itemCategoryService.getData(apiAddressForItemCategory)
              .subscribe(res => {
                this.selectedCustomerLastItem = res as ItemCategory;
                if(this.selectedCustomerLastItem !=null)
                {
                  let customerCode = this.selectedCustomerLastItem.ItemId.substring(0,3);
                  let code = (Number(customerCode)+1)+"-10-100-1000";
                  this.formGroup.get("ItemCategoryCode").setValue(code);
                }
                else{
                  let code = "101-10-100-1000";
                  this.formGroup.get("ItemCategoryCode").setValue(code);
                }
               

              },
                (error) => {
                  this.errorHandler.handleError(error);
                  this.errorMessage = this.errorHandler.errorMessage;
                });

          }
       
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
  }
  onCustomerDeSelect(item:any){
    this.selectedCustomer={};
  }



  public createItemCategory(formValue) {
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      this.executeCategoryCreation(formValue);
    }
  }
  public createItemCategoryLIST() {
    if (this.formGroup.valid) {
      if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
        this.showToastrWarning("Select Customer please.");
        return false;
      }
      //this.executeCategoryCreation(formValue);
    }
    let godwom = {
      // Name: formValue.Name,
      // ItemId:this.formGroup.get("ItemCategoryCode").value,
      // Description: formValue.Description,
      list:this.CatListToPost,
      CustomerId:this.selectedCustomer["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE_LIST;
    this._itemCategoryService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Item Category created successfully");
        setTimeout(() => {
          this.redirectToItemCategoriesList();
        }, 2000);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  private executeCategoryCreation(formValue) {
    let godwom: ItemCategory = {
      Name: formValue.Name,
      ItemId:this.formGroup.get("ItemCategoryCode").value,
      Description: formValue.Description,
      CustomerId:this.selectedCustomer["Id"],
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CreatedBy: this.localStorageService.getUserId(),
      LastModifiedBy:this.localStorageService.getUserId(),
    }

    let apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE;
    this._itemCategoryService.create(apiUrl, godwom)
      .subscribe(res => {
        this.showToastrSuccess("Item Category created successfully");
        setTimeout(() => {
          this.redirectToItemCategoriesList();
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


  redirectToItemCategoriesList() {
    this.router.navigate([this.routesList.ITEM_CATEGORY_LISTING]);
  }
  public exportServiceAsExcel() {
    debugger
    this.CatListToPost.push({
      Name:'',
      Description:'',
      ItemId: ''
      
    })
    this.exporterService.exportToExcel(this.CatListToPost, 'CatList Data');
    this.CatListToPost = [];
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
           this.CatListToPost = msg as any[];
          //  this.CatListToPost.forEach(element =>{
          //   if(element.ItemInformationId==="0")
          //   {
          //       this.BTN = true;
          //   }
          //  })
          // this.fleetServiceList = null;
           debugger
           console.log(this.CatListToPost);
         }
       );
     }
   }
   uploadFile(formData: FormData) {
    if (!formData) { return; }
    let apiUrl = this.apiConstant.FILE_UPLOAD_ItemCat;
    let url = this.envUrl.urlAddress + apiUrl;
    return this.http.post(url, formData);
  }
}
