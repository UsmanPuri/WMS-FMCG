import { Component, Injector, OnInit } from "@angular/core";
import { AreaService } from "../services/area.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { Area } from "../models/Area";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-area-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/area-form.component.scss"],
})
export class AreaListComponent extends BaseComponent {

  public cityList: Area[];
   // Our future instance of DataTable
   dataTable: any;
  CityListToPost: any=[];

  constructor(injector: Injector, private _cityService: AreaService,
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
        this.cityList = res as Area[];
        

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
   //    Province:element.AML_Province.Name,



     }

      this.CityListToPost.push(cityObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.CityListToPost, 'CityList Data');
    this.CityListToPost = [];
    }

  redirectToCreateArea(){
    this.router.navigate([this.routesList.AREA_CREATE]);
  }


}
