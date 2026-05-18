import { Component, Injector, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { ItemService } from "../services/item.service";

import { BaseComponent } from "src/app/helpers/components/base.component";
import { ItemInformation } from "../models/ItemInformation";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalManager } from "ngb-modal";

@Component({
  selector: "wms-item-list",
  templateUrl: "../templates/item-list.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class ItemListComponent extends BaseComponent {


  selectedBarcodeValue: string = '';
@ViewChild('BarcodeModal') BarcodeModal: any;

  public itemList: ItemInformation[];
  // Our future instance of DataTable
  dataTable: any;
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  public ItemList: any[] = [];
  ItemListToPost: any = [];
  CustomerId: any;
  @ViewChild('AllModal') AllModal;
  private modalRef;
  constructor(injector: Injector, private _itemService: ItemService,
    private chRef: ChangeDetectorRef, private exporterService: ExporterService,
    private modalService: ModalManager, private ngxService: NgxUiLoaderService
  ) {
    super(injector);
  }

  ngOnInit() {
    //this.getAllItems();
    this.dropdownSettings();
    this.getCustomerKeyPair();
  }


  getAllItems() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODWOM_LIST;
    this._itemService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.itemList = res as ItemInformation[];
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable({
          lengthMenu: [5, 10, 50, 100, 500],
          "iDisplayLength": 500
        });

      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }
  customerChange(item: any) {
    this.selectedCustomer = {
      Id: item.Value,
      Name: item.Text
    };
    this.CustomerId = item.Value;
    this.getItems(this.CustomerId);
  }
  Edit(id) {
    let updateUrl: string = this.routesList.ITEM_EDIT + `/${id}`;
    this.router.navigate([updateUrl]);
  }


  public exportServiceAsExcel() {

    this.ItemList.forEach(element => {
      let itemObj = {
        SystemCode: element.Description,
        Name: element.Category + "|" + element.Brand + "|" + element.ItemName,
        Height: element.Height,
        Width: element.Width,
        Length: element.Length,
        CBM: (((element.Width * 2.54) * (element.Height * 2.54) * (element.Length * 2.54)) / 1000000),
        MinStock: element.MinStockLevel,
        MaxStock: element.MaxStockLevel,
        Price: element.Price,

      }

      this.ItemListToPost.push(itemObj);

    });


    this.exporterService.exportToExcel(this.ItemListToPost, 'ItemList Data');
    this.ItemListToPost = [];
  }




  redirectToCreateItem() {
    this.router.navigate([this.routesList.ITEM_CREATE]);
  }
  getCustomerKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
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

  Delete(Id: any) {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ItemId: Id,
      Type: "sku"
    }
    this.ngxService.start();
    let apiUrl = this.apiConstant.CUSTOMER_DELETE;
    this._itemService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if (isDeleted) {
          this.showToastrSuccess('SKU deleted successfully');
          this.getItems(this.CustomerId);
        } else {
          this.showToastrWarning('SKU Can not be deleted');
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

 getItems(item: any) {
    let companyBusinessUnitInfo: any = {
      CustomerId: item
    }
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.CUSTOMER_ITEM_LIST;
    this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.ItemList = res as any[];
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  } 

  openModal() {
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
      windowClass: 'modal-dialog'
    });
  }

 
  openBarcodeModal(systemCode: string) {
    
    this.selectedBarcodeValue = systemCode; 
    
    
    this.modalRef = this.modalService.open(this.BarcodeModal, {
      size: "md",
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: 'modal-dialog'
    });
  }

} 