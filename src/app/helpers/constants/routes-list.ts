"use strict";

// Login routes
export const LOGIN = "/auth/login";

// Dashboard routes
export const DASHBOARD = "dashboard";
export const DASHBOARD_AVAILABLESTOCK = "available-stock";
export const DASHBOARD_STOCKREPORT = "stock-report";
export const DASHBOARD_CUSTOMERWISEPRODUCTS = "customer-wise-products";
export const DASHBOARD_ANSPENDING = "ans-pending";
export const DASHBOARD_ASNSTATUS = "asn-status-dashboard";
export const DASHBOARD_ASNPICKUPSCHEDULE = "asn-pickup-schedule";
export const DASHBOARD_INVOICEDASHBOARD = "invoice-dashboard";
export const DASHBOARD_EXPIREDITEM = "expired-item";
export const DASHBOARD_LIVESTOCKREPORT = "livestockreport";
export const DASHBOARD_ONAGGING = "on-agging";
export const DASHBOARD_SLOW_MOVINB = "slow-moving";
export const DASHBOARD_GRAPHIC_DASHBOARD = "graphic-dashboard";
export const DASHBOARD_ANS_PLACING = "ans-placing-activity";

//ASN Search..
export const DASHBOARD_SEARCH_PANEL="sn-search";

// Customers routes
export const CUSTOMER_LISTING="customers";
export const CUSTOMER_CREATE="/customers/create";
export const CUSTOMER_EDIT="/customers/edit";

// Customers routes
export const DISTRIBUTORS_LISTING="distributors";
export const DISTRIBUTORS_CREATE="/distributors/create";
export const DISTRIBUTORS_EDIT="/distributors/edit";

// Province routes
export const PROVINCE_LISTING="provinces";
export const PROVINCE_CREATE="/provinces/create";
export const PROVINCE_EDIT="/provinces/edit";

// City routes
export const CITY_LISTING="cities";
export const CITY_CREATE="/cities/create";
export const CITY_EDIT="/cities/edit";

// City routes
export const AREA_LISTING="areas";
export const AREA_CREATE="/areas/create";
export const AREA_EDIT="/areas/edit";
export const AREA_DELETE="/areas/delete";

// Region routes
export const REGION_LISTING = 'region';
export const REGION_CREATE = '/region/create';
export const REGION_EDIT = '/region/edit';

// Region routes
export const ZONE_LISTING = 'zone';
export const ZONE_CREATE = '/zone/create';
export const ZONE_EDIT = '/zone/edit';

// Warehouse routes
export const WAREHOUSE_LISTING = 'warehouse';
export const WAREHOUSE_CREATE = '/warehouse/create';
export const WAREHOUSE_EDIT = '/warehouse/edit';

// Godwom routes
export const GODWOM_LISTING = 'godown';
export const GODWOM_CREATE = '/godown/create';
export const GODWOM_EDIT = '/godown/edit';

// Godown row
export const GODOWN_ROW_LISTING = 'godown-row';
export const GODOWN_ROW_CREATE = '/godown-row/create';
export const GODOWN_ROW_EDIT = '/godown-row/edit';

// Godown rack
export const GODOWN_RACK_LISTING = 'godown-racks';
export const GODOWN_RACK_CREATE = '/godown-racks/create';
export const GODOWN_RACK_EDIT = '/godown-racks/edit';

// Item Category
export const ITEM_CATEGORY_LISTING = 'item-categories';
export const ITEM_CATEGORY_CREATE = '/item-categories/create';
export const ITEM_CATEGORY_EDIT = '/item-categories/edit';

// Item brand
export const ITEM_BRAND_LISTING = 'item-brands';
export const ITEM_BRAND_CREATE = '/item-brands/create';
export const ITEM_BRAND_EDIT = '/item-brands/edit';

// Items
export const ITEM_LISTING = 'items';
export const ITEM_CREATE = '/items/create';
export const ITEM_EDIT = '/items/edit';

// Godown Shelf
export const GODOWN_SHELF_LISTING = 'godown-shelf';
export const GODOWN_SHELF_CREATE = '/godown-shelf/create';
export const GODOWN_SHELF_EDIT = '/godown-shelf/edit';

// Units routes
export const UNIT_LISTING="units";
export const UNIT_CREATE="/units/create";
export const UNIT_EDIT="/units/edit";

// Pallets routes
export const PALLET_LISTING="pallets";
export const PALLET_CREATE="/pallets/create";
export const PALLET_EDIT="/pallets/edit";

// Parking Stages routes
export const PARKINGSTAGES_LISTING="parkingstages";
export const PARKINGSTAGES_CREATE="/parkingstages/create";
export const PARKINGSTAGES_EDIT="/parkingstages/edit";

// Shipment Note
export const SHIPMENT_NOTE_LISTING = 'shipment-note';
export const SHIPMENT_NOTE_CREATE = '/shipment-note/create';


// Shipment Note Manual
export const SHIPMENT_NOTE_MANUAL_LISTING = 'shipment-note-manual';
export const SHIPMENT_NOTE_MANUAL_CREATE = '/shipment-note-manual/create';
export const SHIPMENT_NOTE_MANUAL_EDIT = '/shipment-note-manual/edit';
export const SHIPMENT_NOTE_MANUAL_DETAIL = '/shipment-note-manual/detail';

// Shipment Note Receiving
export const SHIPMENT_NOTE_RECEIVING_LISTING = 'shipment-note-receiving';
export const SHIPMENT_NOTE_RECEIVING_CREATE = '/shipment-note-receiving/create';
export const SHIPMENT_NOTE_RECEIVING_EDIT = '/shipment-note-receiving/edit';


// Shipment Note Moving
export const SHIPMENT_NOTE_MOVING_LISTING = 'shipment-note-moving';
export const SHIPMENT_NOTE_MOVING_CREATE = '/shipment-note-moving/create';
export const SHIPMENT_NOTE_MOVING_EDIT = '/shipment-note-moving/edit';

// Shipment Note Moving to Warehouse
export const SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING = 'shipment-note-moving-warehouse';
export const SHIPMENT_NOTE_MOVING_WAREHOUSE_CREATE = '/shipment-note-moving-warehouse/create';
export const SHIPMENT_NOTE_MOVING_WAREHOUSE_EDIT = '/shipment-note-moving-warehouse/edit';

export const PICKUP_TRANSFER_ORDER_LISTING = 'pickup-transfer-order';
export const PICKUP_TRANSFER_ORDER_CREATE = '/pickup-transfer-order/create';
export const PICKUP_TRANSFER_ORDER_EDIT = '/pickup-transfer-order/edit';
export const PICKUP_TRANSFER_ORDER_DETAIL = '/pickup-transfer-order/detail';

// Customer Pickup order
export const PICKUP_ORDER_LISTING = 'pickup-customer-order';
export const PICKUP_ORDER_CREATE = '/pickup-customer-order/create';
export const PICKUP_ORDER_EDIT = '/pickup-customer-order/edit';
export const PICKUP_ORDER_DETAIL = '/pickup-customer-order/detail';

// Stock Movement
export const STOCK_MOVEMENT_LISTING = 'stock-movement';
export const STOCK_MOVEMENT_CREATE = '/stock-movement/create';
export const STOCK_MOVEMENT_EDIT = '/stock-movement/edit';
export const STOCK_MOVEMENT_DETAIL = '/stock-movement/detail';
//new-form
export const NEW_FORM_LISTING = 'new-form';
export const NEW_FORM_CREATE = '/new-form/create';
export const NEW_FORM_EDIT = '/new-form/edit';
export const NEW_FORM_DETAIL = '/new-form/detail';
// Transfer Order
export const TRANSFER_ORDER_LISTING = 'transfer-order';
export const TRANSFER_ORDER_CREATE = '/transfer-order/create';
// Dispatch
export const DISPATCH_LISTING = 'dispatch';
export const DISPATCH_CREATE = '/dispatch/create';


// Change Passowrd
export const CHANGE_PASSWORD = "change-password";

// Customer Dispatch
export const DISPATCH_CUSTOMER_LISTING = 'dispatch-customer';
export const DISPATCH_CUSTOMER_CREATE = '/dispatch-customer/create';
export const DISPATCH_CUSTOMER_EDIT = '/dispatch-customer/edit';
export const DISPATCH_CUSTOMER_DETAIL = '/dispatch-customer/detail';

// Transfer Dispatch
export const DISPATCH_TRANSFER_LISTING = 'dispatch-transfer';
export const DISPATCH_TRANSFER_CREATE = '/dispatch-transfer/create';
export const DISPATCH_TRANSFER_EDIT = '/dispatch-transfer/edit';
export const DISPATCH_TRANSFER_DETAIL = '/dispatch-transfer/detail';


// Customer Dispatch complete
export const DELIVERS_CUSTOMER_LISTING = 'delivers-customer';
export const DELIVERS_CUSTOMER_CREATE = '/delivers-customer/create';
export const DELIVERS_CUSTOMER_EDIT = '/delivers-customer/edit';
export const DELIVERS_CUSTOMER_IMAGE="/delivers-customer/imageupload";

// Transfer Dispatch complete
export const DELIVERS_TRANSFER_LISTING = 'delivers-transfer';
export const DELIVERS_TRANSFER_CREATE = '/delivers-transfer/create';
export const DELIVERS_TRANSFER_EDIT = '/delivers-transfer/edit';
export const DELIVERS_TRANSFER_IMAGE="/delivers-transfer/imageupload";

// Transfer Receiving
export const TRANSFER_RECEIVING_LISTING = 'transfer-receiving';
export const TRANSFER_RECEIVING_CREATE = '/transfer-receiving/create';
export const TRANSFER_RECEIVING_EDIT = '/transfer-receiving/edit';
export const TRANSFER_RECEIVING_IMAGE="/transfer-receiving/imageupload";

// Opening Stock
export const OPENING_STOCK = 'opening-stock';
// Opening Stock Manual
export const OPENING_STOCK_MANUAL = 'opening-stock-manual';
// Move stock
export const MOVE_STOCK = 'move-stock';

// Doctor routes
// export const DOCTOR_LISTING = "doctors";
// export const DOCTOR_CREATE = "/doctors/create";

// WMS SERVICE routes
export const WMS_SERVICE_LISTING="wms-services";
export const WMS_SERVICE_CREATE="/wms-services/create";
export const WMS_SERVICE_EDIT="/wms-services/edit";
export const WMS_SERVICE_DETAIL="/wms-services/detail";

// WMS Tender Routes
export const WMS_TENDER_LISTING="wms-tender";
export const WMS_TENDER_CREATE="/wms-tender/create";
export const WMS_TENDER_EDIT="/wms-tender/edit";
export const WMS_TENDER_DETAIL="/wms-tender/detail";

// Daily-Activity
export const DASHBOARD_DAILY_ACTIVITY = "daily-activity";

// Dispatch-Activity
export const DASHBOARD_DISPATCH_ACTIVITY = "dispatch-activity";

