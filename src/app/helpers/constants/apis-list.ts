"use strict";

// Dashboard
export const MODULE_FORM_GET = `/Dashboard/GetAllModule`;
export const STARTUP_KEY_PAIR = `/dashboard/GetStartupKeyPair`;
// export const USERS_CREATE = `${SERVER_URL}admin/user/store`;
// export const USERS_UPDATE = `${SERVER_URL}admin/user/update`;
// export const USERS_GET_ALL = `${SERVER_URL}admin/user/get-list`;
// export const USER_UPDATE_STATUS = `${SERVER_URL}admin/user/update-status`;
export const CHANGEPASSWOR = '/Login/UpdatePassword';
export const SIGNUPDEMOPROFILE = '/Login/signupProfile';

// Customer
export const CUSTOMER_LIST=`/Customer/GetAllCustomers`;
export const CUSTOMER_GET_ONE=`/Customer/GetById/`;
export const CUSTOMER_CREATE=`/Customer/CreateCustomer`;
export const CUSTOMER_UPDATE=`/Customer/UpdateCustomer`;
export const CUSTOMER_DELETE=`/Customer/DeleteCustomer`;
export const CUSTOMER_KEYPAIR=`/Customer/GetKeyPair/`;
export const CUSTOMER_KEYPAIR_BY_ORDERTYPE = `/Customer/GetKeyPairByOrderType/`;
export const CUSTOMER_BUSINESSLINE_KEYPAIR=`/Customer/GetCustomerBusinessLine/`;
export const CUSTOMER_TENDER_CODE=`/Customer/GetCustomerTenderItemCode/`;

// Customer
export const DISTRIBUTOR_LIST=`/Distributor/GetAllDistributors`;
export const DISTRIBUTOR_GET_ONE=`/Distributor/GetById/`;
export const DISTRIBUTOR_DETAIL=`/Distributor/DistributorDetail`;
export const DISTRIBUTOR_CREATE=`/Distributor/CreateDistributor`;
export const DISTRIBUTOR_UPDATE=`/Distributor/UpdateDistributor`;
export const DISTRIBUTOR_DELETE=`/Distributor/DeleteDistributor`;
export const DISTRIBUTOR_KEYPAIR=`/Distributor/GetKeyPair/`;
export const DISTRIBUTOR_KEYPAIR_BY_ORDERTYPE = `/Distributor/GetKeyPairByOrderType/`;
export const DISTRIBUTOR_BUSINESSLINE_KEYPAIR=`/Distributor/GetCustomerBusinessLine/`;
export const DISTRIBUTOR_TENDER_CODE=`/Distributor/GetCustomerTenderItemCode/`;

// Province
export const PROVINCE_LIST=`/Province/GetAllProvinces`;
export const PROVINCE_GET_ONE=`/Province/GetById/`;
export const PROVINCE_CREATE=`/Province/CreateProvince`;
export const PROVINCE_UPDATE=`/Province/UpdateProvince`;
export const PROVINCE_KEYPAIR=`/Province/GetKeyPair/`;

// City
export const CITY_LIST=`/City/GetAllCities`;
export const CITY_GET_ONE=`/City/GetById/`;
export const CITY_CREATE=`/City/CreateCity`;
export const CITY_UPDATE=`/City/UpdateCity`;
export const CITY_KEYPAIR=`/City/GetKeyPair/`;
export const Serial_KEYPAIR=`/ShipmentNote/getSerialKeyPair/`;
export const CITY_GET_BY_ID_COLLECTION=`/City/GetByIdCollection/`;
export const CITY_GET_BY_ID_REGION=`/City/GetCitiesListByRegionId`;
export const CITY_GET_LIST_OF_CITES = `/City/GetCitiesListForDropdown`;

// Region
export const REGION_LIST = `/Region/GetAllRegions`;
export const REGION_GET_ONE = `/Region/GetById/`;
export const REGION_CREATE = `/Region/CreateRegion`;
export const REGION_UPDATE = `/Region/UpdateRegion`;
export const REGION_DELETE = `/Region/DeleteRegion`;
export const REGION_KEYPAIR = `/Region/GetKeyPair/`;
export const REGION_GET_BY_ID_PROVINCE = `/Region/GetRegionListByProviceId`;

// Zone
export const ZONE_LIST = `/Zone/GetAllZones`;
export const ZONE_GET_ONE = `/Zone/GetById/`;
export const ZONE_CREATE = `/Zone/CreateZone`;
export const ZONE_UPDATE = `/Zone/UpdateZone`;
export const ZONE_DELETE = `/Zone/DeleteZone`;
export const ZONE_KEYPAIR = `/Zone/GetKeyPair/`;
export const ZONE_GET_BY_ID_REGION = `/Zone/GetZoneListByProviceId`;

// Warehouse
export const WAREHOUSE_LIST=`/Warehouse/GetAllWarehouses`;
export const WAREHOUSE_GET_ONE=`/Warehouse/GetById/`;
export const WAREHOUSE_CREATE=`/Warehouse/CreateWarehouse`;
export const WAREHOUSE_UPDATE=`/Warehouse/UpdateWarehouse`;
export const WAREHOUSE_KEYPAIR=`/Warehouse/GetKeyPair`;
export const LOCATION_KEYPAIR=`/Warehouse/LocationGetKeyPair`;
export const LOCATION_KEYPAIR_BY_WAREHOUSE=`/Warehouse/LocationGetKeyPairByWarehouse`;
export const LOCATION_BYView_BYWarehouse=`/Warehouse/LocationByViewByWarehouse`;
export const LOCATION_SPACE_STATUS=`/Warehouse/LocationSpaceStatus/`;

export const WAREHOUSE_GET_ASNID=`/Warehouse/WarehouseASNPallette`;
export const STOCK_MOVEMENT_CREATE=`/Warehouse/CreateStockMovement`;
export const STOCK_MOVEMENT_LIST=`/Warehouse/GetAllMovementStock`;
export const WAREHOUSE_DELETE=`/Warehouse/DeleteWarehouse`;
// Godwom
export const GODWOM_LIST=`/Godwom/GetAllGodwoms`;
export const GODWOM_GET_ONE=`/Godwom/GetById/`;
export const GODWOM_CREATE=`/Godwom/CreateGodwom`;
export const GODWOM_UPDATE=`/Godwom/UpdateGodwom`;
export const GODWOM_GODWOM_TYPE_KEYPAIR=`/Godwom/GetGodwomTypeKeyPair`;
export const GODWOM_KEYPAIR=`/Godwom/GetKeyPair`;
export const GODOWN_GET_BY_WAREHOUSE_ID = `/Godwom/GetKeyPairOnWarehouseId`;
// Godown row
export const GODOWN_ROW_LIST=`/GodownRow/GetAllGodownRows`;
export const GODOWN_ROW_GET_ONE=`/GodownRow/GetById/`;
export const GODOWN_ROW_CREATE=`/GodownRow/CreateGodownRow`;
export const GODOWN_ROW_UPDATE=`/GodownRow/UpdateGodownRow`;
export const GODOWN_ROW_KEYPAIR_BY_GODOWN_ID = `/GodownRow/GetKeyPairOnGodownId/`;

// Godown rack
export const GODOWN_RACK_LIST=`/GodownRack/GetAllGodownRacks`;
export const GODOWN_RACK_GET_ONE=`/GodownRack/GetById/`;
export const GODOWN_RACK_CREATE=`/GodownRack/CreateGodownRack`;
export const GODOWN_RACK_UPDATE=`/GodownRack/UpdateGodownRack`;
export const GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID = `/GodownRack/GetKeyPairByGodownRowId/`;

// Godown shelf
export const GODOWN_SHELF_LIST=`/GodownShelf/GetAllGodownShelfs`;
export const GODOWN_SHELF_GET_ONE=`/GodownShelf/GetById/`;
export const GODOWN_SHELF_CREATE=`/GodownShelf/CreateGodownShelf`;
export const GODOWN_SHELF_KEYPAIR_BY_GODOWN_RACK_ID = `/GodownShelf/GetKeyPairByGodownRackId/`;

// Unit
export const UNIT_LIST=`/Unit/GetAllUnits`;
export const UNIT_GET_ONE=`/Unit/GetById/`;
export const UNIT_CREATE=`/Unit/CreateUnit`;
export const UNIT_UPDATE=`/Unit/UpdateUnit`;
export const UNIT_KEY_PAIR=`/Unit/GetKeyPair`;

// Pallets
export const PALLET_LIST=`/Pallet/GetAllPallets`;
export const PALLET_CREATE=`/Pallet/CreatePallet`;
export const PALLET_GET_BY_ID=`/Pallet/GetById/`;
export const PALLET_UPDATE=`/Pallet/UpdatePallet`;


// Parking Stages
export const PARKINGSTAGES_LIST=`/ParkingStages/GetAllParkingStages`;
export const PARKINGSTAGES_CREATE=`/ParkingStages/CreateParkingStages`;
export const PARKINGSTAGES_KEYPAIR=`/ParkingStages/GetKeyPair`;
export const PARKINGSTAGES_GET_BY_ID=`/ParkingStages/GetById/`;
export const PARKINGSTAGES_UPDATE=`/ParkingStages/UpdateParkingStages`;



// Item
export const ITEM_LIST=`/Item/GetAllItems`;
export const CUSTOMER_ITEM_LIST=`/Item/GetListOfItem`;
export const MAX_ITEM_CODE=`/Item/GetMaxItemCode`;
export const ITEM_CATEGORY_CREATE=`/Item/CreateItem`;
export const ITEM_CATEGORY_CREATE_LIST=`/Item/CreateItemLIST`;
export const ITEM_CATEGORY_GET_BY_ID=`/Item/GetById/`;

export const ITEM_CATEGORY_UPDATE=`/Item/UpdateItemCategory`;

export const ITEM_GET_LAST_BY_CUSTOMER=`/Item/GetLastByCustomerId/`;
export const ITEM_GetItemInformationByItemId=`/Item/GetItemInformationByItemId/`;
export const ITEM_INFORMATION_CREATE = `/Item/CreateItemInformation`;
export const Validate_Customer_SKUCODE = `/Item/ValidateCustomerSKUCODE`;
export const ITEM_INFORMATION_CREATE_LIST = `/Item/CreateItemInformationLIST`;
export const ITEM_INFORMATION_BY_ID = `/Item/GetByIdItemInformation/`;
export const ITEM_INFORMATION_UPDATE = `/Item/UpdateItemInformation`;
export const ITEM_GetItemInformationByCustomerId=`/Item/GetItemInformationByCustomerId/`;
export const ITEM_INFORMATION_ByBrandCode = `/Item/GetIteminfoByBrandId`;
export const DAILY_ACTIVITY=`/Warehouse/DailyActivity/`;
export const DISPATCH_ACTIVITY=`/Warehouse/DispatchActivity/`;
export const OUTWARD_MOVEMENT_ACTIVITY=`/Warehouse/OutwardMovementActivity/`;
// Shipment note
export const SHIPMENT_NOTE_LIST=`/ShipmentNote/GetAllShipmentNotes`;
export const SHIPMENT_NOTE_LIST_BY_CUSTOMER=`/ShipmentNote/GetAllShipmentNotesByCustomer`;
export const SHIPMENT_NOTE_CREATE=`/ShipmentNote/CreateShipmentNote`;
export const SHIPMENT_NOTE_UPDATE_BY_ID=`/ShipmentNote/UpdateShipmentNote`;
export const SHIPMENT_NOTE_SearchShelfsForShipment=`/ShipmentNote/SearchShelfsForShipment`;
export const SHIPMENT_NOTE_GET_ONE=`/ShipmentNote/GetById/`;
export const SHIPMENT_NOTE_UPDATE=`/ShipmentNote/UpdateASN`;
export const SHIPMENT_NOTE_MOVE=`/ShipmentNote/MoveASN`;
export const SHIPMENT_NOTE_MOVE_WAREHOUSE=`/ShipmentNote/MoveASNWarehouse`;
export const SHIPMENT_NOTE_LOCATOR_WAREHOUSE=`/ShipmentNote/LocatorASNWarehouse`;
export const SHIPMENT_NOTE_BY_PARKING_ID=`/ShipmentNote/GetAllShipmentNotesByParkingingId`;
export const CHECK_DUPLICATE_SN=`/ShipmentNote/CheckDuplicateSN`;
export const CHECK_DUPLICATE_ASN=`/ShipmentNote/CheckDuplicateASN`;
export const SHIPMENT_NOTE_DELETE=`/ShipmentNote/Delete`;

// Pickup orders
export const PICKUP_ORDER_LIST=`/PickupOrder/GetAllPickupOrders`;
export const PICKUP_ORDER_LIST_BY_CUSTOMER=`/PickupOrder/GetAllPickupOrdersByCustomer`;
export const PICKUP_ORDER_BY_ID=`/PickupOrder/GetById/`;
export const PICKUP_ORDER_CREATE=`/PickupOrder/CreatePickupOrder`;
export const PICKUP_ORDER_GetItemForOrder=`/PickupOrder/GetItemForOrder/`;
export const PICKUP_ORDER_UPDATE=`/PickupOrder/UpdatePickupOrder`;
export const CHECK_DUPLICATE_SONO=`/PickupOrder/CheckDuplicateSONO`;
//transfer order
export const Transfer_ORDER_CREATE=`/PickupOrder/CreateTransferOrder`;

export const PICKUP_ORDER_DELETE=`/PickupOrder/Delete`;
export const DISPATCH_ORDER_DELETE=`/Dispatch/Delete`;


// Dispatch
export const DISPATCH_LIST=`/Dispatch/GetAllDispatches`;
export const DISPATCH_LIST_BY_CUSTOMER=`/Dispatch/GetAllDispatchesByCustomer`;
export const DISPATCH_CREATE=`/Dispatch/CreateDispatch`;
export const DISPATCH_UPDATE=`/Dispatch/UpdateDispatch`;
export const DISPATCH_GetCustomerOrderKeyPairByCustomerId=`/Dispatch/GetCustomerOrderKeyPairByCustomerId/`;
export const DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom=`/Dispatch/GetCustomerOrderKeyPairByCustomerIdCustom/`;
export const DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom_AndOrderType=`/Dispatch/GetCustomerOrderKeyPairByCustomerIdAndOrderType/`;

export const DISPATCH_GetOrderedItem=`/Dispatch/GetOrderedItem`;
export const DISPATCH_COMPLETED_LIST=`/Dispatch/GetAllCompletedDispatches`;
export const DISPATCH_PENDING_LIST=`/Dispatch/GetAllPendingDispatches`;
export const DISPATCH_GetDispatchKeyPair=`/Dispatch/GetDispatchKeyPair/`;
export const DISPATCH_GetById=`/Dispatch/GetById/`;
export const DISPATCH_CompleteDispatch=`/Dispatch/CompleteDispatch/`;
export const  DISPATCH_GetDetailOfOrder=`/Dispatch/GetDetailOfOrder`;
export const DISPATCH_CONFIRMPICKUP=`/Dispatch/ConfirmDispatch`;
export const LOCATIONS_BY_ITEM_ID=`/Dispatch/LocationGetKeyPairByItemId/`;
export const GET_LOCATION_QUANTITY=`/Dispatch/GetLocationAvailableQuantity`;
export const GET_LOCATION_BATCH=`/Dispatch/GetLocationBatch`;
export const GET_LOCATION_BATCH_PALLET=`/Dispatch/GetLocationBatchPallet`;
export const DISPATCH_DispathcDetailClipSKU=`/Dispatch/DispathcDetailClipSKU/`;

//Transfer Receiving
export const TRANSFER_RECEIVE_CONFIRM=`/Dispatch/TransferReceiveConfirm`;

// General
export const COMMON_KEYPAIR_CURRENCY_BUSINESSTYPE_BUSINESSNATURE=`/Vendor/GetKeyPairCurrencyBusinessTypeBusinessNature`;

// Dashboard Reports
export const DASHBOARD_AVAILABLE_STOCK =`/Dashboard/GetAvailableStock`;
export const DASHBOARD_STOCK_REPORT =`/Dashboard/GetStockReport`;
export const DASHBOARD_AVAILABLE_STOCK_WAREHOUSE_CUSTOMER =`/Dashboard/GetSpAavailableStockWithWarehouseAndCustomer`;
export const DASHBOARD_FRESHNESS_REPORT =`/Dashboard/GetSpAavailableStockFreshnessReport`;
export const DASHBOARD_ALL_PRODUCTS =`/Dashboard/GetAllProducts`;
 export const DASHBOARD_EXPIREDPRODUCTS =`/Dashboard/GetAllExpiredItem`;
 export const DASHBOARD_NEAREXPIRYPRODUCTS =`/Dashboard/GetAllNearExpiryItem`;
 export const DASHBOARD_ONAGGING =`/Dashboard/GetTotalDaysOfItem`;
 export const DASHBOARD_STOCKMOVEMENT =`/Dashboard/StockmovementActivity`;
 export const DASHBOARD_SLOW_MOVING =`/Dashboard/GetSlowMovingItems`;
 export const SHIPMENT_NOTE_ASN_TRACKING =`/ShipmentNote/GetASNtracking`;
 export const DASHBOARD_LOCATION_TRACKING =`/Warehouse/AllLocationSpaceStatus`;
 export const DASHBOARD_ANS_PLACING =`/Dashboard/GetAnsPlacingLocation`;
 export const DASHBOARD_ANS_PLACING_SUMMERY =`/Dashboard/GetAnsPlacingSummery`;
 export const DASHBOARD_GRAPHICAL =`/Dashboard/GraphicalDashboard`;
 export const DASHBOARD_SEARCH_PANEL =`/Dashboard/GetSearchPanelAvailableStock`;
 
 //Inventory
export const OPENING_STOCK =`/ShipmentNote/AddOpeningStock`

// WMS service
export const WMS_SERVICE_LIST=`/WmsService/GetAllWmsServices`;
export const WMS_SERVICE_GET_ONE=`/WmsService/GetById/`;
export const WMS_SERVICE_CREATE=`/WmsService/CreateWmsService`;
export const WMS_SERVICE_UPDATE=`/WmsService/UpdateWmsService`;
export const WMS_SERVICE_KEYPAIR=`/WmsService/WmsServiceGetKeyPair/`;
export const WMS_SERVICE_GET_BY_ID_COLLECTION=`/WmsService/GetByIdCollection/`;

export const FILE_UPLOAD=`/File/Upload`;
export const FILE_UPLOAD_VENDOR=`/File/UploadVendor`;
export const FILE_UPLOAD_ItemCat=`/File/UploadItemCat`;
export const FILE_UPLOAD_ItemBrand=`/File/UploadItemBrand`;
export const FILE_GET_ON_JOB_ID=`/File/GetById/`;