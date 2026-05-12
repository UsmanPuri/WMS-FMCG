import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModalModule } from "ngb-modal";
import {CommonModule} from '@angular/common';
import {DashboardFormComponent} from "./components/dashboard-form.component";
import {AvailableStockComponent} from "./components/available-stock";
import {StockReportComponent} from "./components/stock-report";
import {CustomerWiseProductsComponent} from "./components/customer-wise-products";
import {ANSPendingComponent} from "./components/ans-pending";
import{AsnStatusDashboardComponent} from "./components/asn-status-dashboard";
import{AsnPickUpScheduleComponent} from "./components/asn-pickup-schedule";
import{InvoiceDashboardComponent} from "./components/invoice-dashboard";
import{ExpiredItemComponent} from "./components/expired-item";
import{OnAggingComponent} from "./components/on-agging";
import{SlowMovingComponent}from "./components/slow-moving"
import{GraphicDashboardComponent}from"./components/graphic-dashboard";
import { GoogleChartsModule } from 'angular-google-charts';
import { ANSTrackingComponent } from "./components/asn-tracking";
import { LocationTrackingComponent } from "./components/location-tracking";
import { NearExpiryItemComponent } from "./components/near-expiry-item";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxPrintModule } from "ngx-print";
import { ANSPlacingActivityComponent } from "./components/ans-placing-activity";
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormComponent } from './form/form.component';
import { SortByPipe } from './Pipe/sort-by.pipe';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardFormComponent,
      }, 
      {
        path: "list/available-stock",
        component: AvailableStockComponent,
      },
      {
        path: "list/stock-report",
        component: StockReportComponent,
      },
      {
        path: "list/customer-wise-products",
        component: CustomerWiseProductsComponent,
      },
      {
        path: "list/ans-pending",
        component: ANSPendingComponent,
      },
      {
        path: "list/asn-status-dashboard",
        component: AsnStatusDashboardComponent,
      },
      {
        path: "list/asn-pickup-schedule",
        component: AsnPickUpScheduleComponent,
      },
      {
        path: "list/invoice-dashboard",
        component: InvoiceDashboardComponent,
      },
      {
        path: "list/expired-item",
        component: ExpiredItemComponent,
      },
      {
        path: "list/on-agging",
        component: OnAggingComponent,
      },
      {
        path: "list/slow-moving",
        component: SlowMovingComponent,
      },
      {
        path: "list/graphic-dashboard",
        component: GraphicDashboardComponent,
      },
      {
        path: "list/asn-tracking",
        component: ANSTrackingComponent,
      },
      {
        path: "list/location-tracking",
        component: LocationTrackingComponent,
      },
      {
        path: "list/near-expiry-item",
        component: NearExpiryItemComponent,
      },
      {
        path: "list/ans-placing-activity",
        component: ANSPlacingActivityComponent,
      },
     {
        path: "**",
        redirectTo: "",
      },
     
    ]
  } 
];

@NgModule( {
  imports: [
    ModalModule,
    RouterModule.forChild( routes ),CommonModule,GoogleChartsModule,NgxPrintModule,
    NgxUiLoaderModule,
    NgMultiSelectDropDownModule,FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardFormComponent,
    AvailableStockComponent,
    StockReportComponent,
    CustomerWiseProductsComponent,
    ANSPendingComponent,
    AsnStatusDashboardComponent,
    AsnPickUpScheduleComponent,
    InvoiceDashboardComponent,
    ExpiredItemComponent,
    OnAggingComponent,
    SlowMovingComponent,
    GraphicDashboardComponent,
    ANSTrackingComponent,
    LocationTrackingComponent,
    NearExpiryItemComponent,
    ANSPlacingActivityComponent,
    FormComponent,
    SortByPipe,
    SearchFilterPipe
    
  ],
  providers: [
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class DashboardModule {
}
