import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./layout.component";
import * as ROUTE_LIST from "../helpers/constants/routes-list";
import { CanActivateGuard } from "../helpers/guards/can-activate.guard";

// noinspection TypeScriptValidateTypes
const protectedRoutes: Routes = [
  {
    path: "", component: MainComponent, children: [
      {
        path: ROUTE_LIST.DASHBOARD,
        loadChildren: "./content/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: ROUTE_LIST.DASHBOARD_GRAPHIC_DASHBOARD,
        loadChildren: "./content/graphical-dashboard/graphical-dashboard.module#GraphicalDashboardModule"
      },
      {
        path: ROUTE_LIST.DASHBOARD_SEARCH_PANEL,
        loadChildren: "./content/SN-Search/SN-Search.module#SNSearchModule"
      },
      {
        path: ROUTE_LIST.CUSTOMER_LISTING,
        loadChildren: "./content/customers/customers.module#CustomersModule"
      },
      {
        path: ROUTE_LIST.DISTRIBUTORS_LISTING,
        loadChildren: "./content/distributors/distributors.module#DistributorsModule"
      },
      {
        path: ROUTE_LIST.UNIT_LISTING,
        loadChildren: "./content/units/units.module#UnitsModule"
      },
      {
        path: ROUTE_LIST.PROVINCE_LISTING,
        loadChildren: "./content/provinces/provinces.module#ProvincesModule"
      },
      {
        path: ROUTE_LIST.CITY_LISTING,
        loadChildren: "./content/cities/cities.module#CitiesModule"
      },
      {
        path: ROUTE_LIST.AREA_LISTING,
        loadChildren: "./content/areas/areas.module#AreasModule"
      },
      {
        path: ROUTE_LIST.REGION_LISTING,
        loadChildren: "./content/region/region.module#RegionModule"
      },
      {
        path: ROUTE_LIST.ZONE_LISTING,
        loadChildren: "./content/zone/zone.module#ZoneModule"
      },
      {
        path: ROUTE_LIST.WAREHOUSE_LISTING,
        loadChildren: "./content/warehouse/warehouses.module#WarehousesModule"
      },
      {
        path: ROUTE_LIST.GODWOM_LISTING,
        loadChildren: "./content/godwoms/godwoms.module#GodwomsModule"
      },
      {
        path: ROUTE_LIST.GODOWN_ROW_LISTING,
        loadChildren: "./content/godown-row/godown-row.module#GodownRowModule"
      },
      {
        path: ROUTE_LIST.GODOWN_RACK_LISTING,
        loadChildren: "./content/godown-rack/godown-rack.module#GodownRackModule"
      },
      {
        path: ROUTE_LIST.GODOWN_SHELF_LISTING,
        loadChildren: "./content/godown-shelf/godown-shelf.module#GodownShelfModule"
      },
      {
        path: ROUTE_LIST.ITEM_LISTING,
        loadChildren: "./content/items/items.module#ItemsModule"
      },
      {
        path: ROUTE_LIST.ITEM_CATEGORY_LISTING,
        loadChildren: "./content/item-categories/items-category.module#ItemCategoriesModule"
      },
      {
        path: ROUTE_LIST.ITEM_BRAND_LISTING,
        loadChildren: "./content/item-brands/items-brand.module#ItemBrandsModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_LISTING,
        loadChildren: "./content/shipment-note/shipment-note.module#ShipmentNoteModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_MANUAL_LISTING,
        loadChildren: "./content/shipment-note-manual/shipment-note-manual.module#ShipmentNoteManualModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_RECEIVING_LISTING,
        loadChildren: "./content/shipment-note-receiving/shipment-note-receiving.module#ShipmentNoteReceivingModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_MOVING_LISTING,
        loadChildren: "./content/shipment-note-moving/shipment-note-moving.module#ShipmentNoteMovingModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING,
        loadChildren: "./content/shipment-note-moving-warehouse/shipment-note-moving-warehouse.module#ShipmentNoteMovingWarehouseModule"
      },
      {
        path: ROUTE_LIST.SHIPMENT_NOTE_WAREHOUSE_LOCATOR_LISTING,
        loadChildren: "./content/shipment-note-warehouse-locator/shipment-note-warehouse-locator.module#ShipmentNoteWarehouseLocatorModule"
      },
      {
        path: ROUTE_LIST.PALLET_LISTING,
        loadChildren: "./content/pallet/pallets.module#PalletsModule"
      },
      {
        path: ROUTE_LIST.PARKINGSTAGES_LISTING,
        loadChildren: "./content/parking-stages/parking-stages.module#ParkingStagesModule"
      },
      {
        path: ROUTE_LIST.STOCK_MOVEMENT_LISTING,
        loadChildren: "./content/stock-movement/stock-movement.module#StockMovementModule"
      },
      {
        path: ROUTE_LIST.NEW_FORM_LISTING,
        loadChildren: "./content/new-form/new-form.module#NewFormModule"
      },
      {
        path: ROUTE_LIST.PICKUP_ORDER_LISTING,
        loadChildren: "./content/pickup-order/pickup-order.module#PickupOrderModule"
      },
      {
        path: ROUTE_LIST.PICKUP_TRANSFER_ORDER_LISTING,
        loadChildren: "./content/pickup-order/pickup-order.module#PickupOrderModule"
      },
      {
        path: ROUTE_LIST.TRANSFER_ORDER_LISTING,
        loadChildren: "./content/transfer-order/transfer-order.module#TransferOrderModule"
      },
      {
        path: ROUTE_LIST.DISPATCH_LISTING,
        loadChildren: "./content/dispatch/dispatch.module#DispatcModule"
      },
      {
        path: ROUTE_LIST.DISPATCH_CUSTOMER_LISTING,
        loadChildren: "./content/dispatch-custom/dispatch-custom.module#DispatchCustomModule"
      },
      {
        path: ROUTE_LIST.DISPATCH_TRANSFER_LISTING,
        loadChildren: "./content/dispatch-custom/dispatch-custom.module#DispatchCustomModule"
      },
      {
        path: ROUTE_LIST.DELIVERS_CUSTOMER_LISTING,
        loadChildren: "./content/dispatch-complete/dispatch-complete.module#DispatchCompleteModule"
      },
      {
        path: ROUTE_LIST.DELIVERS_TRANSFER_LISTING,
        loadChildren: "./content/dispatch-complete/dispatch-complete.module#DispatchCompleteModule"
      },
      {
        path: ROUTE_LIST.TRANSFER_RECEIVING_LISTING,
        loadChildren: "./content/transfer-receiving/transfer-receiving.module#TransferReceivingModule"
      },
      {
        path: ROUTE_LIST.OPENING_STOCK,
        loadChildren: "./content/opening-stock/opening-stock.module#OpeningStockModule"
      },
      {
        path: ROUTE_LIST.OPENING_STOCK_MANUAL,
        loadChildren: "./content/opening-stock-manual/opening-stock-manual.module#OpeningStockManualModule"
      },
      {
        path: ROUTE_LIST.MOVE_STOCK,
        loadChildren: "./content/move-stock/move-stock.module#MoveStockModule"
      },
      {
        path: ROUTE_LIST.CHANGE_PASSWORD,
        loadChildren: "./content/Change-Password/Change-Password.module#ChangeuserPasswordModule"
      },
      {
        path: ROUTE_LIST.WMS_SERVICE_LISTING,
        loadChildren: "./content/wms-services/wms-services.module#WMSServicesModule"
      },
      {
        path: ROUTE_LIST.WMS_TENDER_LISTING,
        loadChildren: "./content/wms-tender/wms-tender.module#WMSTenderModule"
      },
      {
        path: ROUTE_LIST.DASHBOARD_DAILY_ACTIVITY,
        loadChildren: "./content/daily-activity/daily-activity.module#DailyActivityModule"
      },
      {
        path: ROUTE_LIST.DASHBOARD_DISPATCH_ACTIVITY,
        loadChildren: "./content/dispatch-activity/dispatch-activity.module#DispatchActivityModule"
      }
    ]
    ,  canActivate: [CanActivateGuard]
  },
];
export const ROUTES = RouterModule.forChild(protectedRoutes);
