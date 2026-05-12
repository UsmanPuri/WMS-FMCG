import { Component, Injector, OnInit } from "@angular/core";
import { NewFormService } from "../services/new-form.service"
import { BaseComponent } from "src/app/helpers/components/base.component";
import { NewForm } from "../models/NewForm";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "genx-new-form-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/new-form-form.component.scss"],
})
export class NewFormListComponent extends BaseComponent {

  public stockMovementlist: NewForm[];
   // Our future instance of DataTable
   dataTable: any;
   isCustomerOrder :boolean = false;
   
   customerDropdownSettings = {};
   customerKeyPair: DropdownListDto[];
   selectedCustomer = {};
  constructor(injector: Injector, private stockMovementService: NewFormService, router : Router,
  ) {
    super(injector);
  }

  ngOnInit() {
    //console.log(this.router.url, "Active URL");
    this.isCustomerOrder = this.router.url.includes("customer");
    this.addFormValidations();
    this.dropdownSettings();
  
    this.getCustomerKeyPair();
    //this.getAllPickupOrders();
  }
 
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];
    this.addFormControlWithValidations("DateFrom",requiredValidation);
    this.addFormControlWithValidations("DateTo",requiredValidation);
   
    
  }

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
  }

  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  customerChange(item:any)
  {
    this.selectedCustomer ={
      Id:item.Value,
      Name:item.Text
    };

    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      CustomerId:item.Value
    }
    
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_LIST_BY_CUSTOMER;
    this.stockMovementService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.stockMovementlist = res as NewForm[];
        //debugger
        //console.log(this.pickupOrderList)
        
        // if(this.isCustomerOrder){
        //   this.pickupOrderList = this.pickupOrderList.filter(x=> x.FormType == 'customer');
        // }else{
        //   this.pickupOrderList = this.pickupOrderList.filter(x=> x.FormType == 'transfer');
        // }
        
        //  Now you can use jQuery DataTables :
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
  getAllPickupOrders() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PICKUP_ORDER_LIST;
    this.stockMovementService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.stockMovementlist = res as NewForm[];
        console.log(this.stockMovementlist)
        

         // Now you can use jQuery DataTables :
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

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  Edit(id){
    let updateUrl: string = [this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_EDIT : this.routesList.PICKUP_TRANSFER_ORDER_EDIT]+`/${id}`;
    // let updateUrl: string = this.routesList.PICKUP_ORDER_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  Detail(id){
    // let updateUrl: string = this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL])+`/${id}`;
    let updateUrl: string = [this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL]+`/${id}`;
    // let updateUrl: string = this.routesList.PICKUP_ORDER_DETAIL+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  redirectToCreateNewForm(){
    this.router.navigate([this.routesList.NEW_FORM_CREATE]);
    
  }

}
