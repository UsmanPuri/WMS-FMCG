import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { CityService } from "../services/city.service";
import { CityFormComponent } from "./city-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { City } from "../models/City";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-city-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/city-form.component.scss"],
})
export class CityListComponent extends BaseComponent {

  public cityList: City[];
   // Our future instance of DataTable
   dataTable: any;
  CityListToPost: any=[];

  constructor(injector: Injector, private _cityService: CityService, private chRef: ChangeDetectorRef,
    private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService	) {
    super(injector);
  }

  

  ngOnInit() {
    this.getAll();
  }
 

  getAll() {
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.CITY_LIST;
    this._cityService.getData(apiAddress)
      .subscribe(res => {
        this.cityList = res as City[];
        this.chRef.detectChanges();
        this.chRef.reattach();

         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 20, 100, 500],
        "iDisplayLength": 100
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
    let updateUrl: string = this.routesList.CITY_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  
  public exportServiceAsExcel() {

    this.cityList.forEach(element => {
     let cityObj = {
       Name:element.Name,
       Province:element.AML_Province.Name,
       Region:element.AML_Region.Name,


     }

      this.CityListToPost.push(cityObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.CityListToPost, 'CityList Data');
    this.CityListToPost = [];
    }

  redirectToCreateCity(){
    this.router.navigate([this.routesList.CITY_CREATE]);
  }


}
