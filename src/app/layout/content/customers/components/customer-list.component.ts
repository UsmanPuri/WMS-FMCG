import { Component, Injector, OnInit,  ViewChild, ChangeDetectorRef } from "@angular/core";
import { CustomerService } from "../services/customer.service";
import { CustomerFormComponent } from "./customer-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { Customer } from "../models/Customer";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalManager } from "ngb-modal";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-customer-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/customer-form.component.scss"],
})
export class CustomerListComponent extends BaseComponent {

  public customerList: Customer[];
   // Our future instance of DataTable
   dataTable: any;
   @ViewChild('AllModal') AllModal;
  //exporterService: any;
  CustomerListToPost: any = [];
  private modalRef;
  constructor(injector: Injector, private _dashboardService: DashboardService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService, 
   private _customerService: CustomerService,private modalService: ModalManager,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  

  ngOnInit() {
    this.getAllModuleCustomers();
   
  }

  getAllModuleCustomers() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : false
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_LIST;
    this._dashboardService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerList = res as Customer[];
        this.chRef.detectChanges();
        this.chRef.reattach();
        

         // Now you can use jQuery DataTables :
      const table: any = $('table');
     // this.dataTable = table.DataTable();
     this.dataTable = table.DataTable({
      lengthMenu: [5, 10, 50, 100, 500],
      "iDisplayLength": 500
    });
    this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(customerId){
    let updateUrl: string = this.routesList.CUSTOMER_EDIT+`/${customerId}`;
    this.router.navigate([updateUrl]);
  }

  printDiv() {
    const printContents = document.getElementById('print-index-invoice').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  public exportServiceAsExcel() {

    this.customerList.forEach(element => {
     let customerObj = {
       Name:element.Name,
       Address:element.Address,
       Abbrevation:element.Abbreviation,
       ContactPerson:element.ContactPerson,
       Mobile:element.Mobile,
       Email:element.Email,
       CustomerType:element.Type

     }

      this.CustomerListToPost.push(customerObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.CustomerListToPost, 'CustomerList Data');
    this.CustomerListToPost = [];
    }

    Delete(Id:any){
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        CustomerId : Id,
        Type : "customer"
      }
      let apiUrl = this.apiConstant.CUSTOMER_DELETE;
    this._customerService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Customer deleted successfully');
        }else{
          this.showToastrWarning('Customer Can not be deleted');
        }
        
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    }
    openModal(){
  this.modalRef = this.modalService.open(this.AllModal, {
    size: "lg",
    modalClass: '',
    hideCloseButton: true,
     centered: false,
     backdrop: true,
     animation: true,
     keyboard: false,
     closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-xl'
    })
}
  

    redirectToCreateCustomer() {
      this.router.navigate([this.routesList.CUSTOMER_CREATE]);
    } 


}
