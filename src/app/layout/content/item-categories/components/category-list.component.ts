import { Component, Injector, OnInit } from "@angular/core";
import { ItemCategoryService } from "../services/item-category.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ItemCategory } from "../models/ItemCategory";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-category-list",
  templateUrl: "../templates/category-list.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class CategoryListComponent extends BaseComponent {
  customerDropdownSettings = {};

  customerKeyPair: DropdownListDto[];
  selectedCustomer={};

  public categoryList: ItemCategory[];
   // Our future instance of DataTable
   dataTable: any;
  CategoryListToPost: any=[];
  CustomerId : any;

  constructor(injector: Injector, private _itemCategoryService: ItemCategoryService,
   private exporterService: ExporterService) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownSettings();
    this.getCustomerKeyPair();
    // this.getAllItems();
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        debugger
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(item: any) {
    this.selectedCustomer ={
      Id:item.Value,
      Name: item.Text
    };
    this.CustomerId = item.Value;
   this.getItems(this.CustomerId);
  }
 
getItems(item:any){
  let companyBusinessUnitInfo: any = {
    CustomerId: item
  }
  let apiAddress: string = this.apiConstant.ITEM_LIST;
  this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
    .subscribe(res => {
      this.categoryList = res as ItemCategory[];
      this.categoryList=this.categoryList
      .filter(x=>x.ItemId.substring(7,15) == "100-1000");
    },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
}
  // getAllItems() {
  //   let companyBusinessUnitInfo = {
  //     CompanyId: this.localStorageService.getCompanyId(),
  //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
  //   }
  //   let apiAddress: string = this.apiConstant.ITEM_LIST;
  //   this._itemCategoryService.getAll(apiAddress,companyBusinessUnitInfo)
  //     .subscribe(res => {
  //       this.categoryList = res as ItemCategory[];
  //       

  //        // Now you can use jQuery DataTables :
  //     const table: any = $('table');
  //     this.dataTable = table.DataTable({
  //       lengthMenu: [5, 10, 20, 50, 100],
  //       "iDisplayLength": 100
  //     });
  //     },
  //       (error) => {
  //         this.errorHandler.handleError(error);
  //         this.errorMessage = this.errorHandler.errorMessage;
  //       })
  // }

  Edit(id){
    let updateUrl: string = this.routesList.ITEM_CATEGORY_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  
  public exportServiceAsExcel() {

    this.categoryList.forEach(element => {
     let categoryObj = {
      CategoryID:element.ItemId,
      Name:element.Name,
      Description:element.Description

     }

      this.CategoryListToPost.push(categoryObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.CategoryListToPost, 'CategoryList Data');
    this.CategoryListToPost = [];
    }
		 

  redirectToCreateCategory(){
    this.router.navigate([this.routesList.ITEM_CATEGORY_CREATE]);
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

  Delete(Id:any){
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ItemId : Id,
      Type : "category"
    }
    let apiUrl = this.apiConstant.CUSTOMER_DELETE;
  this._itemCategoryService.create(apiUrl, companyBusinessUnitInfo)
    .subscribe(res => {
      //debugger
      let isDeleted = res;
      if(isDeleted){
        this.showToastrSuccess('Category deleted successfully');
        this.getItems(this.CustomerId);
      }else{
        this.showToastrWarning('Category Can not be deleted');
      }
      
    },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }


}
