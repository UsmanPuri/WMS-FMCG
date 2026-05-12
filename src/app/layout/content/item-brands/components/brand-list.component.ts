import { Component, Injector, OnInit } from "@angular/core";
import { ItemBrandService } from "../services/item-brand.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ItemBrand } from "../models/ItemBrand";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-brand-list",
  templateUrl: "../templates/brand-list.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class BrandListComponent extends BaseComponent {
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};
  CustomerId: any;

  public brandList: ItemBrand[];
  // Our future instance of DataTable
  dataTable: any;
  BrandListToPost: any = [];

  constructor(injector: Injector, private _itemBrandService: ItemBrandService,
    private exporterService: ExporterService,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownSettings();
    this.getCustomerKeyPair();
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
    };
    this.CustomerId = item.Value;
    this.getbrands(this.CustomerId);
  }

  Edit(id) {
    let updateUrl: string = this.routesList.ITEM_BRAND_EDIT + `/${id}`;
    this.router.navigate([updateUrl]);
  }


  public exportServiceAsExcel() {

    this.brandList.forEach(element => {
      let brandListObj = {
        BrandID: element.ItemId,
        Name: element.Name,
        Description: element.Description


      }

      this.BrandListToPost.push(brandListObj);

    });


    this.exporterService.exportToExcel(this.BrandListToPost, 'BrandList Data');
    this.BrandListToPost = [];
  }

  redirectToCreateBrand() {
    this.router.navigate([this.routesList.ITEM_BRAND_CREATE]);
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
      Type: "brand"
    }
    let apiUrl = this.apiConstant.CUSTOMER_DELETE;
    this.ngxService.start();
    this._itemBrandService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if (isDeleted) {
          this.showToastrSuccess('Brand deleted successfully');
          this.getbrands(this.CustomerId);
        } else {
          this.showToastrWarning('Brand Can not be deleted');
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

  getbrands(item: any) {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CustomerId: item
    }

    let apiAddress: string = this.apiConstant.ITEM_LIST;
    this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.brandList = res as ItemBrand[];
        this.brandList = this.brandList
          .filter(x => Number(x.ItemId.substring(7, 10)) > 100);
        this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

}
