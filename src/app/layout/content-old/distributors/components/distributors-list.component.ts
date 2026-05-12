import { Component, Injector, OnInit, ChangeDetectorRef,  ViewChild } from "@angular/core";
import { DistributorsService } from "../services/distributors.service";
import { DistributorsFormComponent } from "./distributors-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { Customer } from "../models/Customer";
import { Distributors } from '../models/Distributors';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalManager } from "ngb-modal";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DropdownListDto } from 'src/app/helpers/models/DropdownListDto';

@Component({
  selector: "wms-distributors-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/distributors-form.component.scss"],
})
export class DistributorsListComponent extends BaseComponent {

  public distributorList: Distributors[];
  public customerList: Customer[];
   // Our future instance of DataTable
   dataTable: any;
   @ViewChild('AllModal') AllModal;
  //exporterService: any;
  CustomerListToPost: any = [];
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer: any;
  CustomerId: any;

  private modalRef;
  constructor(injector: Injector, private _dashboardService: DashboardService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService, 
   private _distributorsService: DistributorsService,private modalService: ModalManager,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  

  ngOnInit() {
    this.getCustomerKeyPair();

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
      LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : false
    }
    let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
    this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.customerKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  customerChange(event:any){
    this.selectedCustomer=event.Value
    this.getAllDistributors(event.Value)
  }


  getAllDistributors(DistributorId) {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId : this.localStorageService.getUserId(),
      IsTransferOrderForm : false,
      CustomerId:this.selectedCustomer
    }
    debugger
    let apiAddress: string = this.apiConstant.DISTRIBUTOR_LIST;
    this._dashboardService.getKeyPair(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.distributorList = res as Distributors[];
        this.chRef.detectChanges();
        this.chRef.reattach();

         // Now you can use jQuery DataTables :
      const table: any = $('table');
     // this.dataTable = table.DataTable();
     this.dataTable = table.DataTable({
      lengthMenu: [100, 500, 1000],
      "iDisplayLength": 500,
      retrieve: true
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

    this.distributorList.forEach(element => {
     let customerObj = {
       Name:element.DistName,
       Address:element.DistAddress,
       ContactPerson:element.ContactPerson,
       Mobile:element.Mobile,
       Email:element.Email,
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
    this._distributorsService.create(apiUrl, companyBusinessUnitInfo)
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
  

  redirectToCreateDistributor() {
      this.router.navigate([this.routesList.DISTRIBUTORS_CREATE]);
    } 


}
