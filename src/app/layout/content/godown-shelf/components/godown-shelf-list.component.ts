import { Component, Injector, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { GodownShelfService } from "../services/godown-shelf.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { GodownShelf } from "../models/GodownShelf";
import { NgxUiLoaderService } from 'ngx-ui-loader';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalManager } from "ngb-modal";

@Component({
  selector: "wms-godown-shelf-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/godown-shelf-form.component.scss"],
})
export class GodownShelfListComponent extends BaseComponent {

  public godownShelfList: GodownShelf[];
  @ViewChild('AllBarcodesModal') AllBarcodesModal: any;
   // Our future instance of DataTable
   dataTable: any;
  GodownShelfListToPost: any=[];
  @ViewChild('BarcodeModal') BarcodeModal: any;
  selectedBarcodeValue: string = '';
  @ViewChild('AllModal') AllModal;
  private modalRef;
  constructor(injector: Injector, private _godownRowService: GodownShelfService,private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
   private modalService: ModalManager, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllGodownRows();
  }
 

  getAllGodownRows() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODOWN_SHELF_LIST;
    this._godownRowService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownShelfList = res as GodownShelf[];
      //  debugger
      //   console.log(this.godownShelfList);
       this.chRef.detectChanges();
       this.chRef.reattach();

         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [500, 1000, 2000, 5000],
        "iDisplayLength": 2000
      });
      this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(id){
    let updateUrl: string = this.routesList.GODOWN_SHELF_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }


  public exportServiceAsExcel() {

    this.godownShelfList.forEach(element => {
     let godownshelfObj = {
      BayName:element.Name,
      Warehouse:element.AML_Warehouse.Name,
      Chamber:element.AML_Godwom.Name,
      ChamberAisle:element.AML_GodownRack.AML_GodownRow.Name,
      Rack:element.AML_GodownRack.Alias,
      Height:element.Height,
      Widht:element.Width,
      Depth:element.Depth,
      Alias:element.Alias,

     }

      this.GodownShelfListToPost.push(godownshelfObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.GodownShelfListToPost, 'Godown-ShelfList Data');
    this.GodownShelfListToPost = [];
    }
		  
    Delete(Item:any){
      this.ngxService.start();
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        GodownRackId : Item.GodownRackId,
        GodownRowId : Item.GodownRowId,
        GodwonId : Item.GodwonId,
        WarehouseId: Item.WarehouseId,
        GodownShelfId : Item.GodownShelfId,
        Type : "shelf"
      }
      let apiUrl = this.apiConstant.WAREHOUSE_DELETE;
    this._godownRowService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Godown Shelf deleted successfully');
          this.getAllGodownRows();
        }else{
          this.showToastrWarning('Godown Shelf Can not be deleted');
        }
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
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
      
  redirectToCreateGodownShelf(){
    this.router.navigate([this.routesList.GODOWN_SHELF_CREATE]);
  }
  // Barcode Modal Open karne ka function
  openBarcodeModal(locationText: string) {
    this.selectedBarcodeValue = locationText; 
    
    this.modalRef = this.modalService.open(this.BarcodeModal, {
      size: "md",
      backdrop: 'static',
      keyboard: false
    });
  }

  // Sab Barcodes ek sath open karne ka function
  openAllBarcodesModal() {
    this.modalRef = this.modalService.open(this.AllBarcodesModal, {
      size: "lg", // 'lg' yani Large modal kyunke barcodes zyada hongy
      backdrop: 'static',
      keyboard: false
    });
  }

}
