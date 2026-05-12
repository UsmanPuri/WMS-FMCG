import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { Dashboard } from "../models/Dashboard";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";

import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';

@Component({
  selector: "wms-graphic-dasboard",
  templateUrl: "../templates/graphic-dasboard.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class GraphicDashboardComponent extends BaseComponent{
    title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;

   // Bar charts

   Bartitle = 'Population (in millions)';
   Bartype = 'BarChart';
   Bardata = [
      ["2012", 900],
      ["2013", 1000],
      ["2014", 1170],
      ["2015", 1250],
      ["2016", 1530]
   ];
   BarcolumnNames = ['Year', 'Asia'];
   
   Baroptions = {   
    hAxis: {
       title: 'Year'
    },
    Axis:{
       minValue:0
    }  
 };
   Barwidth = 550;
   Barheight = 400;
//    constructor(injector: Injector, private _dashboardService: DashboardService,
//     ) {
//       super(injector);
  }

//   ngOnInit() {
   
//   }

//   getListOnAgging() {
//     let apiAddress: string = this.apiConstant.DASHBOARD_SLOW_MOVING;
//     this._dashboardService.getData(apiAddress)
//       .subscribe(res => { 
//         this.listOfItem = res as any[];
//         console.log(this.listOfItem)
//         
//          // Now you can use jQuery DataTables :
//       const table: any = $('table');
//      // this.dataTable = table.DataTable();
//      this.dataTable = table.DataTable({
//       lengthMenu: [5, 10, 20, 50, 100],
//       "iDisplayLength": 100
//     });
//       },
//         (error) => {
//           this.errorHandler.handleError(error);
//           this.errorMessage = this.errorHandler.errorMessage;
//         })
//   }
  
//}
