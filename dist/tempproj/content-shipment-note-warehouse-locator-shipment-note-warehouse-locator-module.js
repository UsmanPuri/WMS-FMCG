(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-warehouse-locator-shipment-note-warehouse-locator-module"],{

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-edit.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-edit.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var shipment_note_warehouse_locator_service_1 = __webpack_require__(/*! ../services/shipment-note-warehouse-locator.service */ "./src/app/layout/content/shipment-note-warehouse-locator/services/shipment-note-warehouse-locator.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var ShipmentNoteWarehouseLocatorEditComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteWarehouseLocatorEditComponent, _super);
    function ShipmentNoteWarehouseLocatorEditComponent(injector, _shipmentNoteService, activeRoute, ngxService, exporterService, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.parkingStageDropdownSettings = {};
        _this.selectedParkingStage = {};
        // Naye variables Global Scanning ke liye
        _this.globalPalletNo = '';
        _this.globalLocation = '';
        _this.currentActiveItem = null; // Jo pallet scan hoga, wo yahan save ho jayega
        _this.asnListToPost = [];
        // asnListToPostTemp: any[] = [];
        _this.locationStatusList = [];
        _this.itemBalanceList = [];
        _this.warehouseDropdownSettings = {};
        _this.warehouseDropdownSettings2 = {};
        //selectedWarehouse = {Id:null, Name:null};
        _this.selectedWarehouse = {};
        _this.godownDropdownSettings = {};
        _this.selectedGodown = { Id: null, Name: null };
        _this.godownRowDropdownSettings = {};
        _this.selectedGodownRow = { Id: null, Name: null };
        _this.godownRackDropdownSettings = {};
        _this.selectedGodownRack = { Id: null, Name: null };
        _this.listAvailableStock = [];
        _this.godownShelfDropdownSettings = {};
        _this.selectedGodownShelf = { Id: null, Name: null };
        _this.BTN = false;
        _this.ListStatusErr = false;
        _this.ShipmentNoteId = null;
        _this.TotalQtyPallet = 0;
        _this.QtyRequired = 0;
        _this.chkList = false;
        _this.TotalQtyReceived = 0;
        return _this;
    }
    ShipmentNoteWarehouseLocatorEditComponent.prototype.ngOnInit = function () {
        this.getById();
        this.addFormValidations();
        this.dropdownSettings();
        //this.getParkingStagesKeyPair();
        // this.getWarehouseKeyPair();
        //this.getLocationKeyPair();
        this.locationSpaceInfo = {};
        this.locationSpaceInfo.CBM = 0;
        this.locationSpaceInfo.UsedCBM = 0;
        this.locationSpaceInfo.FreeCBM = 0;
        this.CompanyInfo();
        this.formGroup.get("QtyPallet").setValue('40');
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.getById = function () {
        var _this = this;
        this.ngxService.start();
        var Id = this.activeRoute.snapshot.params["Id"];
        if (Id) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteService.getData(apiAddress)
                .subscribe(function (res) {
                _this.shipmentNoteMain = res;
                _this.shipmentNote = res;
                if (_this.shipmentNote.AML_ShipmentNoteChild) {
                    _this.asnListToPost = _this.shipmentNote.AML_ShipmentNoteChild.map(function (obj) { return (__assign({}, obj)); });
                }
                _this.selectedWarehouse.Id = _this.shipmentNoteMain.WarehouseId;
                _this.getPallettInfo(_this.shipmentNoteMain.ShipmentNoteId);
                _this.getLocationKeyPair(_this.shipmentNoteMain.WarehouseId);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
        this.ngxService.stop();
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.getLocationKeyPair = function (item) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: item,
        };
        //let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
        var apiAddress = this.apiConstant.LOCATION_BYView_BYWarehouse;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            // this.warehouseKeyPair = res as DropdownListDto[];
            _this.warehouseKeyPair = res;
            _this.warehouseKeyPairTemp = _this.warehouseKeyPair;
            console.log(_this.warehouseKeyPair);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.getPallettInfo = function (item) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ShipmentNoteId: item,
        };
        var apiAddress = this.apiConstant.WAREHOUSE_GET_ASNID;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.WarehouseTrans = res;
            console.log("Pallette List");
            console.log(_this.WarehouseTrans);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.CompanyInfo = function () {
        debugger;
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 2) {
            this.CompanyName = "LaBaih";
            this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645";
            this.LogoPath = "assets/images/labaih-logo.png";
        }
        if (this.CompanyID == 3) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 4) {
            this.CompanyName = "Maersk Warehousing and Distribution";
            this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775";
            this.LogoPath = "assets/images/Maersk_Logo.png";
        }
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("ParkingStageIdFrom", []);
        this.addFormControlWithValidations("ParkingStageIdTo", []);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("GodownRowId", []);
        this.addFormControlWithValidations("GodownRackId", []);
        this.addFormControlWithValidations("GodownShelfId", []);
        this.addFormControlWithValidations("ReceiveDate", requiredValidation);
        this.addFormControlWithValidations("TotalCBM", []);
        this.addFormControlWithValidations("OccupiedCBM", []);
        this.addFormControlWithValidations("EmptyCBM", []);
        this.addFormControlWithValidations("QtyPallet", []);
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.getErrorMessage = function (formElement) {
        // if any errors detected else ignore
        var control = this.formGroup.get(formElement);
        if (control.errors) {
            if (control.errors.required) {
                return "Its required";
            }
            else if (control.errors.pattern) {
                return "Invalid entry";
            }
            else if (control.errors.minlength) {
                return "Invalid length";
            }
            else if (control.errors.maxlength) {
                return "Invalid length";
            }
        }
        else {
            return "";
        }
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.dropdownSettings = function () {
        this.parkingStageDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.warehouseDropdownSettings2 = {
            idField: 'GodownShelfId',
            textField: 'Location',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownRowDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownRackDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownShelfDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.onSelectWH = function (event, item) {
        //debugger
        var WHName = event.Location;
        if (WHName == undefined || WHName == null) {
            this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
        }
        else {
            item.Location = event.Location;
            this.LocationId = event.GodownShelfId;
        }
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.moveASN = function () {
        var _this = this;
        debugger;
        this.WarehouseTrans.forEach(function (element) {
            element.WarehouseId = _this.shipmentNote.WarehouseId;
            element.CreatedBy = _this.localStorageService.getUserId();
            element.CompanyId = _this.localStorageService.getCompanyId();
            element.BusinessUnitId = _this.localStorageService.getBusinessUnitId();
            _this.TotalQtyReceived += element.MoveQuantity;
        });
        console.log(this.WarehouseTrans);
        this.ngxService.start();
        //console.log(ASN);
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_LOCATOR_WAREHOUSE;
        this._shipmentNoteService.update(apiUrl, +this.WarehouseTrans)
            .subscribe(function (res) {
            //this.OpenModal();
            _this.showToastrSuccess("ASN Moved Successfully");
            _this.ngxService.stop();
            // setTimeout(() => {
            //  this.redirectToListShipmentNote();
            // }, 2000);
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.onDeSelect = function (item) {
        //debugger
        // item={};
        // this.shipmentNote.ParkingStageIdFrom = null;
        item.selected = false;
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.redirectToListShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_WAREHOUSE_LOCATOR_LISTING]);
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.onSelect = function (item) {
        var _this = this;
        //  debugger
        var itm = this.warehouseKeyPair.find(function (x) { return x.GodownShelfId === item.GodownShelfId; });
        this.selectedWarehouse = {
            Id: itm.WarehouseId,
            Name: itm.Location,
            GodownId: itm.GodwomId,
            GodownRowId: itm.GodownRowId,
            GodownRackId: itm.GodownRackId,
            GodownShelfId: itm.GodownShelfId
        };
        var apiAddress = this.apiConstant.LOCATION_SPACE_STATUS + ("/" + this.selectedWarehouse.Id);
        this._shipmentNoteService.getData(apiAddress)
            .subscribe(function (res) {
            _this.locationSpaceInfo = res;
            console.log(_this.locationSpaceInfo);
            _this.formGroup.get('TotalCBM').setValue(_this.locationSpaceInfo.CBM);
            _this.formGroup.get('OccupiedCBM').setValue(_this.locationSpaceInfo.UsedCBM - _this.locationSpaceInfo.FreeCBM);
            _this.formGroup.get('EmptyCBM').setValue(_this.locationSpaceInfo.CBM - (_this.locationSpaceInfo.UsedCBM - _this.locationSpaceInfo.FreeCBM));
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.addItemIntoAsnToPostList = function (item) {
        var _this = this;
        debugger;
        if (item.Location == undefined || item.Location == null) {
            this.showToastrWarning("Please Select Move Location for All Selected Line Items");
            this.ListStatusErr = true;
            return false;
        }
        var indexItem = this.itemBalanceList.indexOf(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; });
        //debugger
        this.itemBalanceList.push({
            ItemInformationId: item.ItemInformationId,
            ItemTotalQuantity: parseInt(item.MoveQuantity),
            Batch: item.Batch,
            InboundPool: item.InboundPool,
            Status: item.Status,
        });
        var i = 0;
        this.itemBalanceList.forEach(function (element) {
            if (element.ItemInformationId == item.ItemInformationId && element.Batch == item.Batch) {
                if (item.ItemRemainQuantity == 0 || item.ItemRemainQuantity == undefined || item.ItemRemainQuantity == null) {
                    item.ItemRemainQuantity = item.Balance - parseInt(item.MoveQuantity);
                }
                else {
                    if (i == 0) {
                        item.ItemRemainQuantity = item.Balance - element.ItemTotalQuantity;
                    }
                    else {
                        item.ItemRemainQuantity = item.ItemRemainQuantity - element.ItemTotalQuantity;
                    }
                }
                i++;
            }
        });
        var index = this.locationStatusList.findIndex(function (e) { return e.LocationId == parseInt(_this.LocationId); });
        if (index === -1) {
            this.locationStatusList.push({
                Location: this.selectedWarehouse.Name,
                LocationId: parseInt(this.selectedWarehouse.Id),
                TotalCBMinList: item.ItemCBM * item.MoveQuantity / 61023.8
            });
        }
        else {
            // if ((this.locationSpaceInfo.CBM-(this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM) < (this.locationStatusList.filter(a=> a.LocationId==this.selectedWarehouse.Id)[0].TotalCBMinList)+((item.ItemCBM*item.MoveQuantity)/ 61023.8)))
            // {
            //   this.showToastrWarning("No More Space Left In this Location Please Select Another Location.");
            //   return false;
            // }
            // else
            // {
            this.locationStatusList.filter(function (a) { return a.LocationId == _this.selectedWarehouse.Id; })[0].TotalCBMinList += (item.ItemCBM * item.MoveQuantity) / 61023.8;
            //this.itemBalanceList.filter(a => a.ItemInformationId == item.ItemInformationId)[0].ItemTotalQuantity += parseInt(item.MoveQuantity);
            //}
        }
        //debugger
        var asnListToPostTemp = {
            Location: item.Location,
            LocationId: 1,
            TrasactionDate: this.formGroup.get('ReceiveDate').value,
            ItemInformationId: item.ItemInformationId,
            Batch: item.Batch,
            Status: item.Status,
            MoveQuantity: item.MoveQuantity,
            ExpiryDate: item.ExpiryDate,
            MfgDate: item.MfgDate,
            ParkingStageIdFrom: this.shipmentNote.ParkingStageIdFrom,
            SKU: item.Description,
            Name: item.Name,
            ShipmentNoteChildId: item.ShipmentNoteChildId,
            ShipmentNoteId: item.ShipmentNoteId,
            ASNNo: item.ASNNo,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            TotalCBM: item.ItemCBM * item.MoveQuantity,
            SNno: item.SNno,
            InboundPool: item.InboundPool,
            PRno: item.PRno,
            SRno: item.ServiceRequest,
            WarehouseId: this.shipmentNote.WarehouseId,
            PalletNo: item.PalletNo,
            GatePass: item.GatePass,
            RMA: item.RMA,
            GodownId: this.selectedWarehouse.GodownId,
            GodownRowId: this.selectedWarehouse.GodownRowId,
            GodownRackId: this.selectedWarehouse.GodownRackId,
            GodownShelfId: this.selectedWarehouse.GodownShelfId
        };
        this.asnListToPost.push(asnListToPostTemp);
        this.ListStatusErr = false;
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.addItemRelOrd = function (event, itemId, Batch) {
        debugger;
        var model = this.asnListToPost.filter(function (x) { return x.ItemInformationId === itemId && x.Batch === Batch; })[0];
        if (model) {
            model.MoveQuantity = parseInt(event.target.value);
            // if(parseInt(event.target.value) > model.AvailableStock){
            //   this.showToastrError("AvailableStock for Specific Line-Item is not Enough");
            //   event.target.value = model.AvailableStock;
            // }
            // else {
            //   model.Quantity=parseInt(event.target.value);
            // }
        }
        //this.qtyCount();
    };
    //  // Jab Scanner Pallet scan karega toh yeh chalega
    //   updatePallet(event: any, item: any) {
    //     let scannedValue = event.target.value.trim(); // Trim spaces agar scanner ne daal di hon
    //     // 1. Validation: Check karein ke kya yeh Pallet hamari list (WarehouseTrans) mein mojood hai?
    //     // Note: Agar array mein pallet ka property name 'PalletNo' ke ilawa kuch aur hai toh usay yahan change kar lein
    //     let isValidPallet = this.WarehouseTrans.some((p: any) => p.PalletNo === scannedValue);
    //     if (isValidPallet) {
    //       item.PalletNo = scannedValue; // Save kar liya
    //       this.showToastrSuccess(`Pallet ${scannedValue} Verified!`);
    //       console.log("Pallet Verified: ", scannedValue);
    //     } else {
    //       // Agar ghalat hai toh box ko khali kar dein aur error dain
    //       event.target.value = ''; 
    //       item.PalletNo = null;
    //       this.showToastrError(`Invalid Pallet! '${scannedValue}' is not in the list.`);
    //     }
    //   }
    //   // Jab Scanner Location/Rack scan karega toh yeh chalega
    //   updateLocation(event: any, item: any) {
    //     let scannedValue = event.target.value.trim();
    //     // 1. Validation: Check karein ke kya yeh Location hamari list (warehouseKeyPair) mein mojood hai?
    //     // Note: warehouseKeyPair mein property name 'Location' ya 'Text' ho sakta hai, apne array ke hisab se set karein
    //     let isValidLocation = this.warehouseKeyPair.some((loc: any) => loc.Location === scannedValue);
    //     if (isValidLocation) {
    //       item.Location = scannedValue; // Save kar liya
    //       this.showToastrSuccess(`Location ${scannedValue} Verified!`);
    //       console.log("Location Verified: ", scannedValue);
    //     } else {
    //       // Agar ghalat hai toh box ko khali kar dein aur error dain
    //       event.target.value = '';
    //       item.Location = null;
    //       this.showToastrError(`Invalid Location! '${scannedValue}' is not in the list.`);
    //     }
    //   }
    // 1. Jab Top wale box mein Pallet Scan hoga
    ShipmentNoteWarehouseLocatorEditComponent.prototype.onGlobalPalletScan = function (event) {
        var scannedValue = event.target.value.trim();
        if (!scannedValue)
            return;
        // Check karein kya yeh pallet hamari list mein hai?
        var foundItem = this.WarehouseTrans.find(function (p) { return p.PalletNo === scannedValue; });
        if (foundItem) {
            this.currentActiveItem = foundItem; // Row ko "Active" mark kar diya
            this.globalPalletNo = scannedValue;
            this.showToastrSuccess("Pallet " + scannedValue + " Verified!");
            // Jadoo: Automatic Location wale box ko focus kar do taake operator direct location scan kare
            // Jadoo: Automatic Location wale box ko focus kar do
            setTimeout(function () {
                var el = document.getElementById('globalLocationInput');
                if (el) {
                    el.focus();
                }
            }, 100);
        }
        else {
            this.globalPalletNo = '';
            event.target.value = '';
            this.currentActiveItem = null;
            this.showToastrError("Invalid Pallet! '" + scannedValue + "' is not in the expected list.");
        }
    };
    // 2. Jab Top wale box mein Location Scan hogi
    ShipmentNoteWarehouseLocatorEditComponent.prototype.onGlobalLocationScan = function (event) {
        var scannedValue = event.target.value.trim();
        if (!scannedValue)
            return;
        // Validation: Check karein ke Pallet scan hua wa hai ya nahi?
        if (!this.currentActiveItem) {
            this.showToastrWarning("Please scan a valid Pallet first!");
            this.globalLocation = '';
            event.target.value = '';
            return;
        }
        // Validation: Check karein ke kya Location sahi hai?
        var isValidLocation = this.warehouseKeyPair.some(function (loc) { return loc.Location === scannedValue; });
        if (isValidLocation) {
            // Us Active Pallet ke samne location update kar do (Override bhi ho jayega agar pehle se tha)
            this.currentActiveItem.Location = scannedValue;
            this.showToastrSuccess("Location Assigned to Pallet " + this.currentActiveItem.PalletNo + "!");
            // Agle scan ke liye dono boxes khali kar do
            this.globalPalletNo = '';
            this.globalLocation = '';
            event.target.value = '';
            this.currentActiveItem = null;
            setTimeout(function () {
                var el = document.getElementById('globalPalletInput');
                if (el) {
                    el.focus();
                }
            }, 100);
        }
        else {
            this.globalLocation = '';
            event.target.value = '';
            this.showToastrError("Invalid Location! '" + scannedValue + "' is not in the list.");
        }
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.addItemIntoAsnToPostList2 = function (item) {
        //console.log(item)
        var _this = this;
        var indexItem = this.itemBalanceList.findIndex(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; });
        if (indexItem === -1) {
            this.itemBalanceList.push({
                ItemInformationId: item.ItemInformationId,
                ItemTotalQuantity: parseInt(item.MoveQuantity),
                Batch: item.Batch,
                InboundPool: item.InboundPool
            });
        }
        else {
            // debugger
            // if ((item.Balance) < ((this.itemBalanceList.filter(a=> a.ItemInformationId ==item.ItemInformationId && a.Batch == item.Batch)[0].ItemTotalQuantity)+parseInt(item.MoveQuantity)))
            // {
            //   this.showToastrWarning("Not Allowed...Item Move Quantity Will Exceed The Actual Quantity.");
            //   return false;
            // }
        }
        var index = this.locationStatusList.findIndex(function (e) { return e.LocationId == parseInt(_this.selectedWarehouse.Id); });
        if (index === -1) {
            this.locationStatusList.push({
                Location: this.selectedWarehouse.Name,
                LocationId: parseInt(this.selectedWarehouse.Id),
                TotalCBMinList: item.ItemCBM * item.MoveQuantity / 61023.8
            });
        }
        else {
            // if ((this.locationSpaceInfo.CBM-(this.locationSpaceInfo.UsedCBM - this.locationSpaceInfo.FreeCBM) < (this.locationStatusList.filter(a=> a.LocationId==this.selectedWarehouse.Id)[0].TotalCBMinList)+((item.ItemCBM*item.MoveQuantity)/ 61023.8)))
            // {
            //   this.showToastrWarning("No More Space Left In this Location Please Select Another Location.");
            //   return false;
            // }
            // else
            // {
            this.locationStatusList.filter(function (a) { return a.LocationId == _this.selectedWarehouse.Id; })[0].TotalCBMinList += (item.ItemCBM * item.MoveQuantity) / 61023.8;
            this.itemBalanceList.filter(function (a) { return a.ItemInformationId == item.ItemInformationId; })[0].ItemTotalQuantity += parseInt(item.MoveQuantity);
            //}
        }
        //debugger
        this.asnListToPost.push({
            Location: "",
            LocationId: "",
            TrasactionDate: this.formGroup.get('ReceiveDate').value,
            ItemInformationId: item.ItemInformationId,
            Batch: item.Batch,
            Status: item.Status,
            MoveQuantity: item.MoveQuantity,
            ExpiryDate: item.ExpiryDate,
            MfgDate: item.MfgDate,
            ParkingStageIdFrom: this.shipmentNote.ParkingStageIdFrom,
            SKU: item.Description,
            Name: item.Name,
            ShipmentNoteChildId: item.ShipmentNoteChildId,
            ShipmentNoteId: item.ShipmentNoteId,
            ASNNo: item.ASNNo,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            TotalCBM: item.ItemCBM * item.MoveQuantity,
            SNno: item.SNno,
            PRno: item.PRno,
            WarehouseId: this.shipmentNote.WarehouseId,
            PalletNo: item.PalletNo,
            InboundPool: item.InboundPool
        });
        //console.log(this.locationStatusList)
        //console.log(this.itemBalanceList)
    };
    ShipmentNoteWarehouseLocatorEditComponent.prototype.deleteItemFromAsnListToPost = function (item) {
        this.asnListToPost.splice(this.asnListToPost.indexOf(item), 1);
        this.locationStatusList.filter(function (a) { return a.LocationId == item.LocationId; })[0].TotalCBMinList = this.locationStatusList.filter(function (a) { return a.LocationId == item.LocationId; })[0].TotalCBMinList - item.TotalCBM;
        this.itemBalanceList.filter(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; })[0].ItemTotalQuantity = this.itemBalanceList.filter(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; })[0].ItemTotalQuantity - item.MoveQuantity;
        //console.log(this.locationStatusList)
        //console.log(this.itemBalanceList)
    };
    // Submit button ko Enable/Disable karne ka Smart Logic
    ShipmentNoteWarehouseLocatorEditComponent.prototype.isSubmitDisabled = function () {
        // 1. Check karein kya koi aisi row hai jiska Pallet scan ho gaya par Location khali hai?
        // Ya Location scan ho gayi par Pallet khali hai?
        var hasIncompletePair = this.WarehouseTrans.some(function (item) {
            return (item.PalletNo && !item.Location) || (!item.PalletNo && item.Location);
        });
        //  Check karein kya kam az kam kisi 1 item ka mukammal Pair (Pallet + Location) scan hua hai?
        var hasAtLeastOneComplete = this.WarehouseTrans.some(function (item) {
            return item.PalletNo && item.Location;
        });
        // Agar koi Incomplete Pair mila, YA ek bhi pair mukammal nahi hai, toh Button band (Disable) kar do
        if (hasIncompletePair || !hasAtLeastOneComplete) {
            return true;
        }
        return false;
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], ShipmentNoteWarehouseLocatorEditComponent.prototype, "servicePicked", void 0);
    ShipmentNoteWarehouseLocatorEditComponent = __decorate([
        core_1.Component({
            selector: "wms-shipment-note-warehouse-locator-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/shipment-note-warehouse-locator/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-warehouse-locator-form.component.scss */ "./src/app/layout/content/shipment-note-warehouse-locator/styles/shipment-note-warehouse-locator-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, shipment_note_warehouse_locator_service_1.ShipmentNoteLocatorService,
            router_1.ActivatedRoute,
            ngx_ui_loader_1.NgxUiLoaderService,
            excel_file_service_1.ExporterService,
            environment_url_service_1.EnvironmentUrlService, http_1.HttpClient])
    ], ShipmentNoteWarehouseLocatorEditComponent);
    return ShipmentNoteWarehouseLocatorEditComponent;
}(base_component_1.BaseComponent));
exports.ShipmentNoteWarehouseLocatorEditComponent = ShipmentNoteWarehouseLocatorEditComponent;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-list.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-list.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var shipment_note_warehouse_locator_service_1 = __webpack_require__(/*! ../services/shipment-note-warehouse-locator.service */ "./src/app/layout/content/shipment-note-warehouse-locator/services/shipment-note-warehouse-locator.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ShipmentNoteWarehouseLocatorListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteWarehouseLocatorListComponent, _super);
    function ShipmentNoteWarehouseLocatorListComponent(injector, _shipmentNoteLocatorService, ngxService, chRef, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteLocatorService = _shipmentNoteLocatorService;
        _this.ngxService = ngxService;
        _this.chRef = chRef;
        _this.modalService = modalService;
        _this.hideShowList = [];
        _this.palletBarcodeList = [];
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.TotalQtyReceived = 0;
        return _this;
    }
    ShipmentNoteWarehouseLocatorListComponent.prototype.ngOnInit = function () {
        this.CompanyInfo();
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        for (var i = 0; i < 11; i++) {
            this.hideShowList.push({ status: true });
        }
        this.hideShowList[0].status = false;
        this.hideShowList[1].status = false;
        this.hideShowList[2].status = false;
        this.hideShowList[3].status = false;
        this.hideShowList[4].status = false;
        this.hideShowList[5].status = false;
        this.hideShowList[6].status = false;
        this.hideShowList[7].status = false;
        this.hideShowList[8].status = false;
        this.hideShowList[9].status = true;
        this.hideShowList[10].status = false;
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.CompanyInfo = function () {
        debugger;
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "Opposite Gate# 2, Sunder Industrial Estate, Lahore ";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 2) {
            this.CompanyName = "LaBaih";
            this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645";
            this.LogoPath = "assets/images/labaih-logo.png";
        }
        if (this.CompanyID == 3) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "36-D Sundar Industrial Estate, Lahore. Phone: 042-35297539";
            this.LogoPath = "Opposite Gate# 2, Sunder Industrial Estate, Lahore";
        }
        if (this.CompanyID == 4) {
            this.CompanyName = "Maersk Warehousing and Distribution";
            this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775";
            this.LogoPath = "assets/images/Maersk_Logo.png";
        }
    };
    //Excel Conversion
    ShipmentNoteWarehouseLocatorListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    ShipmentNoteWarehouseLocatorListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    ShipmentNoteWarehouseLocatorListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.reportmodal = function (shipId) {
        var _this = this;
        debugger;
        this.ngxService.start();
        var shipmentId = shipId;
        if (shipmentId) {
            var apiUrl = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + shipmentId);
            this._shipmentNoteLocatorService.getData(apiUrl)
                .subscribe(function (res) {
                debugger;
                _this.shipmentNote = res;
                console.log(_this.shipmentNote);
                _this.OpenModal();
                _this.TotalQtyReceived = 0;
                _this.rep_ANSID = _this.shipmentNote.ShipmentNoteId;
                _this.rep_ShipmentNo = _this.shipmentNote.ShipmentNoteNo;
                _this.rep_ASNno = _this.shipmentNote.ASNNo;
                _this.rep_ASNDate = _this.shipmentNote.ASNDate;
                _this.rep_Vehicle_Rece_DateTM = _this.shipmentNote.ReceivingDate;
                _this.rep_Cargo_Status = _this.shipmentNote.CargoStatus;
                _this.rep_TempIn = _this.shipmentNote.TempIn;
                _this.rep_Temp_Out = _this.shipmentNote.TempOut;
                _this.rep_OffLoad_Start_DateTM = _this.shipmentNote.OffLoadingStartTime;
                _this.rep_OffLoad_End_DateTM = _this.shipmentNote.OffLoadingEndTime;
                _this.rep_DeliveryNo = _this.shipmentNote.DeliveryNo;
                _this.rep_DriverName = _this.shipmentNote.DriverName;
                _this.rep_VehicleNo = _this.shipmentNote.VehicleNo;
                _this.rep_MobileNo = _this.shipmentNote.MobileNo;
                _this.rep_CNICNo = _this.shipmentNote.CNICNo;
                _this.asnListToPost = _this.shipmentNote.AML_ShipmentNoteChild;
                _this.asnListToPost.forEach(function (element) {
                    _this.TotalQtyReceived += element.MoveQuantity;
                });
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteLocatorService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.onDeSelect = function (id) {
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: item.Value,
            FormType: "Locator"
        };
        this.ngxService.start();
        debugger;
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
        this._shipmentNoteLocatorService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            console.log(_this.shipmentNoteList);
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            // this.dataTable = table.DataTable({
            //   lengthMenu: [500, 1000],
            //   "iDisplayLength": 500,
            //   retrieve: true
            // });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // getAllShipmentNotes() {
    //   let companyBusinessUnitInfo = {
    //     CompanyId: this.localStorageService.getCompanyId(),
    //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    //   }
    //   let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST;
    //   this.ngxService.start();
    //   this._shipmentNoteLocatorService.getAll(apiAddress, companyBusinessUnitInfo)
    //     .subscribe(res => {
    //       this.shipmentNoteList = res as ShipmentNote[];
    //       //console.log(this.shipmentNoteList)
    //       // Now you can use jQuery DataTables :
    //       const table: any = $('table');
    //       this.dataTable = table.DataTable({
    //         lengthMenu: [500, 1000],
    //         "iDisplayLength": 500,
    //         retrieve: true
    //       });
    //       this.ngxService.stop();
    //     },
    //       (error) => {
    //         this.ngxService.stop();
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       })
    // }
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteWarehouseLocatorListComponent.prototype.redirectToCreateShipmentNote = function () {
        //this.router.navigate([this.routesList.SHIPMENT_NOTE_LOCATOR_CREATE]);
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.OpenModal = function () {
        $('#shipModal').show();
        //this.loadComponent = true;
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.CloseModal = function () {
        debugger;
        $('#shipModal').hide();
        //this.redirectToListShipmentNote()
        // this.loadComponent = false;
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.Details = function (id) {
        debugger;
        var updateUrl = this.routesList.SHIPMENT_NOTE_WAREHOUSE_LOCATOR_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.openPalletBarcodeModal = function (shipmentNoteId) {
        var _this = this;
        this.ngxService.start();
        // Dono zaroori parameters jo backend demand kar raha hai
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ShipmentNoteId: shipmentNoteId // Row se uthai hui ID
        };
        // let apiAddress: string = this.apiConstant.WAREHOUSE_GET_ASNID;
        var apiAddress = this.apiConstant.WAREHOUSE_GET_ASNID;
        this._shipmentNoteLocatorService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.palletBarcodeList = res; // Saare pallets array mein save ho gaye
            _this.ngxService.stop();
            // Modal ko zinda (Open) karna
            _this.palletModalRef = _this.modalService.open(_this.PalletBarcodeModal, {
                size: "lg",
                backdrop: true,
                animation: true,
                keyboard: true,
                closeOnOutsideClick: true,
                windowClass: 'modal-xl'
            });
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.closePalletModal = function () {
        if (this.palletModalRef) {
            this.palletModalRef.close(this.palletModalRef);
        }
    };
    ShipmentNoteWarehouseLocatorListComponent.prototype.delete = function (id) {
        var _this = this;
        debugger;
        //console.log(id);
        debugger;
        if (confirm("Are you sure to delete Complete Shipment Note")) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_DELETE + ("/" + id);
            this._shipmentNoteLocatorService.delete(apiAddress)
                .subscribe(function (res) {
                _this.deleteStatus = res;
                debugger;
                if (_this.deleteStatus == true) {
                    _this.showToastrSuccess("Shipment Note Delete Successfully");
                    _this.customerChange(_this.selectedCustomer);
                }
                else {
                    _this.showToastrError("Shipment Note Delete Un-Successfull");
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
            this.router.navigate([]);
        }
    };
    __decorate([
        core_1.ViewChild('PalletBarcodeModal'),
        __metadata("design:type", Object)
    ], ShipmentNoteWarehouseLocatorListComponent.prototype, "PalletBarcodeModal", void 0);
    ShipmentNoteWarehouseLocatorListComponent = __decorate([
        core_1.Component({
            selector: "wms-shipment-note-warehouse-locator-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note-warehouse-locator/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-warehouse-locator-form.component.scss */ "./src/app/layout/content/shipment-note-warehouse-locator/styles/shipment-note-warehouse-locator-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, shipment_note_warehouse_locator_service_1.ShipmentNoteLocatorService,
            ngx_ui_loader_1.NgxUiLoaderService, core_1.ChangeDetectorRef, ngb_modal_1.ModalManager])
    ], ShipmentNoteWarehouseLocatorListComponent);
    return ShipmentNoteWarehouseLocatorListComponent;
}(base_component_1.BaseComponent));
exports.ShipmentNoteWarehouseLocatorListComponent = ShipmentNoteWarehouseLocatorListComponent;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/services/shipment-note-warehouse-locator.service.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/services/shipment-note-warehouse-locator.service.ts ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var repository_service_1 = __webpack_require__(/*! src/app/helpers/services/repository.service */ "./src/app/helpers/services/repository.service.ts");
var ShipmentNoteLocatorService = /** @class */ (function (_super) {
    __extends(ShipmentNoteLocatorService, _super);
    function ShipmentNoteLocatorService(injector) {
        return _super.call(this, injector) || this;
    }
    ShipmentNoteLocatorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], ShipmentNoteLocatorService);
    return ShipmentNoteLocatorService;
}(repository_service_1.RepositoryService));
exports.ShipmentNoteLocatorService = ShipmentNoteLocatorService;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/shipment-note-warehouse-locator.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/shipment-note-warehouse-locator.module.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ngx_toggle_switch_1 = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var shipment_note_warehouse_locator_service_1 = __webpack_require__(/*! ./services/shipment-note-warehouse-locator.service */ "./src/app/layout/content/shipment-note-warehouse-locator/services/shipment-note-warehouse-locator.service.ts");
var shipment_note_warehouse_locator_list_component_1 = __webpack_require__(/*! ./components/shipment-note-warehouse-locator-list.component */ "./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var shipment_note_warehouse_locator_edit_component_1 = __webpack_require__(/*! ./components/shipment-note-warehouse-locator-edit.component */ "./src/app/layout/content/shipment-note-warehouse-locator/components/shipment-note-warehouse-locator-edit.component.ts");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var ngx_barcode_1 = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: shipment_note_warehouse_locator_list_component_1.ShipmentNoteWarehouseLocatorListComponent,
            },
            // {
            //   path: "create",
            //   component: ShipmentNoteReceivingFormComponent,
            // },
            {
                path: "edit/:Id",
                component: shipment_note_warehouse_locator_edit_component_1.ShipmentNoteWarehouseLocatorEditComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteWarehouseLocatorModule = /** @class */ (function () {
    function ShipmentNoteWarehouseLocatorModule() {
    }
    ShipmentNoteWarehouseLocatorModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_print_1.NgxPrintModule,
                ngx_barcode_1.NgxBarcodeModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                shipment_note_warehouse_locator_list_component_1.ShipmentNoteWarehouseLocatorListComponent, shipment_note_warehouse_locator_edit_component_1.ShipmentNoteWarehouseLocatorEditComponent
            ],
            providers: [
                shipment_note_warehouse_locator_service_1.ShipmentNoteLocatorService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], ShipmentNoteWarehouseLocatorModule);
    return ShipmentNoteWarehouseLocatorModule;
}());
exports.ShipmentNoteWarehouseLocatorModule = ShipmentNoteWarehouseLocatorModule;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/styles/shipment-note-warehouse-locator-form.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/styles/shipment-note-warehouse-locator-form.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{z-index:1050;overflow:auto;-webkit-overflow-scrolling:auto;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}.modal-dialog{margin-left:350px;margin-top:100px}\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/templates/edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/templates/edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  #tbl1 {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  table.mytbl tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n  }\r\n</style>\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Inbound Locator into Warehouse\r\n    <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]\">ASN Moving Warehouse</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToListShipmentNote()\" class=\"btn-wms\">ASN Moving Listing</button>\r\n          </div>\r\n          <h3>Inbound Receiving into Warehouse</h3>\r\n        </div>\r\n\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"moveASN()\">\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN ID</b><a class=\"pull-right\">{{shipmentNoteMain?.ShipmentNoteId}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNoteMain?.ShipmentNoteNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN No.</b><a class=\"pull-right\">{{shipmentNoteMain?.ASNNo}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN Date</b><a class=\"pull-right\">{{shipmentNoteMain?.ASNDate | date}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Delivery No</b><a class=\"pull-right\">{{shipmentNoteMain?.DeliveryNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNoteMain?.CargoStatus}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>Driver Name</b><a class=\"pull-right\">{{shipmentNoteMain?.DriverName}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>Vehicle No</b><a class=\"pull-right\">{{shipmentNoteMain?.VehicleNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>CNIC No</b><a class=\"pull-right\">{{shipmentNoteMain?.CNICNo}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\"\r\n              style=\"margin-bottom: 20px; background-color: #f8f9fa; padding: 15px; border-radius: 5px; border: 1px solid #ddd;\">\r\n              <div class=\"col-md-6\">\r\n                <label style=\"font-weight: bold; color: #333;\">1. Scan Pallet Barcode</label>\r\n                <input type=\"text\" id=\"globalPalletInput\" class=\"form-control input-lg\"\r\n                  placeholder=\"Scan Pallet Here...\" [value]=\"globalPalletNo\" (change)=\"onGlobalPalletScan($event)\"\r\n                  style=\"border: 2px solid #007bff; font-size: 18px;\" autofocus>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <label style=\"font-weight: bold; color: #333;\">2. Scan Location Barcode</label>\r\n                <input type=\"text\" id=\"globalLocationInput\" class=\"form-control input-lg\"\r\n                  placeholder=\"Scan Location Here...\" [value]=\"globalLocation\" (change)=\"onGlobalLocationScan($event)\"\r\n                  style=\"border: 2px solid #28a745; font-size: 18px;\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable mytbl\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>#</th>\r\n                        <th>SKU Name</th>\r\n                        <th>Move Quantity</th>\r\n                        <th>Scan Pallet</th>\r\n                        <th>Scan Location</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of WarehouseTrans index as i\"\r\n                        [ngStyle]=\"{'background-color': currentActiveItem?.PalletNo === item.PalletNo ? '#d4edda' : ''}\">\r\n\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.Name}} </td>\r\n                        <td>{{item.Debit}}</td>\r\n\r\n                        <td style=\"font-weight: bold; color: #007bff;\">\r\n                          {{ item.PalletNo === 'Pending...' ? '' : item.PalletNo }}\r\n                        </td>\r\n\r\n                        <td style=\"font-weight: bold; color: #28a745;\">\r\n                          {{ item.Location === 'Pending...' ? '' : item.Location }}\r\n                        </td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-footer\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-wms pull-right\" [disabled]=\"isSubmitDisabled()\"\r\n              title=\"riht pallet should assign their location\">\r\n              S U B M I T\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-warehouse-locator/templates/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-warehouse-locator/templates/list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    ASN WAREHOUSE LOCATOR PLACING LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\">\r\n            <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                  <nav>\r\n                    <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                      background-color: #6c757d;\">\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"downloadCSV(this.shipmentNoteList, 'asn-moving-to-warehouse-list.csv')\"\r\n                          style=\"color: white;\">\r\n                          Download CSV</a>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"exportExcel('asn-moving-to-warehouse-list.xlsx', 'tbl', 'ASN Moving To Warehouse List')\"\r\n                          style=\"color: white;\">\r\n                          Download Excel</a>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"createPdf('asn-moving-to-warehouse-list.pdf', '#tbl')\" style=\"color: white;\">Export\r\n                          To PDF</a>\r\n                      </li>\r\n                      <li>\r\n                        <button\r\n                          [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                          class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                          ngxPrint printSectionId=\"myTable\">\r\n                          Print\r\n                        </button>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item dropdown\">\r\n                        <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                          Column Hidden\r\n                        </a>\r\n                        <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                            Sr #\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                            Customer Name\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                            ASN No\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                            Warehouse\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                            style=\"color: white; text-align: center\">\r\n                            ASN Ref No\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"0\" style=\"color: white;\">\r\n                            ASN Date\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\" data-column=\"1\" style=\"color: white;\">\r\n                            Delivery No\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\" data-column=\"1\" style=\"color: white;\">\r\n                            Receiving Date\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"2\" style=\"color: white;\">\r\n                            Status\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('9')\" data-column=\"0\" style=\"color: white;\">\r\n                            System ID\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('10')\" data-column=\"3\"\r\n                            style=\"color: white; text-align: center\">\r\n                            Action\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                    </ol>\r\n                  </nav>\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th *ngIf=\"!hideShowList[0].status\">Sr#</th>\r\n                        <th *ngIf=\"!hideShowList[1].status\">Customer Name</th>\r\n                        <th *ngIf=\"!hideShowList[2].status\">ASN No</th>\r\n                        <th *ngIf=\"!hideShowList[3].status\">Warehouse</th>\r\n                        <th *ngIf=\"!hideShowList[4].status\">ASN Ref No</th>\r\n                        <th *ngIf=\"!hideShowList[5].status\">ASN Date</th>\r\n                        <th *ngIf=\"!hideShowList[6].status\">Delivery No</th>\r\n                        <th *ngIf=\"!hideShowList[7].status\">Receiving Date</th>\r\n                        <th *ngIf=\"!hideShowList[8].status\">Status</th>\r\n                        <th *ngIf=\"!hideShowList[9].status\">System ID</th>\r\n                        <th *ngIf=\"!hideShowList[10].status\">Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList index as i\">\r\n                        <!-- <td *ngIf=\"!hideShowList[0].status\">{{godwom.ShipmentNoteId}}</td> -->\r\n                        <td *ngIf=\"!hideShowList[0].status\">{{i+1}}</td>\r\n                        <td *ngIf=\"!hideShowList[1].status\">{{godwom.Name}}</td>\r\n                        <td *ngIf=\"!hideShowList[2].status\">{{godwom.ASNNo}}</td>\r\n                        <td *ngIf=\"!hideShowList[3].status\">{{godwom.WarehouseName}}</td>\r\n                        <td *ngIf=\"!hideShowList[4].status\">{{godwom.ShipmentNoteNo}}</td>\r\n                        <td *ngIf=\"!hideShowList[5].status\">{{godwom.ASNDate | date}}</td>\r\n                        <td *ngIf=\"!hideShowList[6].status\">{{godwom.DeliveryNo}}</td>\r\n                        <td *ngIf=\"!hideShowList[7].status\">{{godwom.ReceivingDate | date}}</td>\r\n                        <td *ngIf=\"!hideShowList[8].status\">\r\n                          <span *ngIf=\"godwom.WHStatus == true; else inactive_span\"\r\n                            class=\"label label-success\">Received</span>\r\n                          <ng-template #inactive_span> <span class=\"bg-red label\">Pending</span></ng-template>\r\n                        </td>\r\n                        <td *ngIf=\"!hideShowList[9].status\">{{godwom.ShipmentNoteId}}</td>\r\n                        <td *ngIf=\"!hideShowList[10].status\">\r\n                          <button type=\"button\" *ngIf=\"godwom.WHStatus != true\" class=\"btn-warining editBtn\"\r\n                            (click)=\"Details(godwom.ShipmentNoteId)\">\r\n                            <i class=\"fa fa-info\"></i>\r\n                          </button>\r\n                          <button type=\"button\" id=\"report\" title=\"Print Shipment Receiving\"\r\n                            class=\"editBtn btn-warining\" (click)=\"reportmodal(godwom.ShipmentNoteId)\">\r\n                            <i style=\"font-size:14px !important\" class=\"fa fa-file\"></i>\r\n                          </button>\r\n                          <button type=\"button\" class=\"editBtn btn-success\"\r\n                            (click)=\"openPalletBarcodeModal(godwom.ShipmentNoteId)\" style=\"margin-left: 5px;\">\r\n                            <i style=\"font-size:14px !important\"class=\"fa fa-barcode\"></i>\r\n                          </button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                            data-placement=\"bottom\" title=\"Delete Shipment Note\"\r\n                            (click)=\"delete(godwom.ShipmentNoteId)\"><i style=\"font-size:14px !important\"\r\n                              class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n\r\n      </form>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n<div class=\"modal\" id=\"shipModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\" style=\"width: 900px;\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"modal-body\" id=\"print\">\r\n          <div class=\"row col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-3\" style=\"text-align: center;\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              </div>\r\n              <div class=\"col col-sm-8 pull-left\" style=\"margin-top: 10px;\">\r\n                <address>\r\n                  <strong>{{CompanyName}}</strong> <br>\r\n                  {{CompanyAddress}}\r\n                </address>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n              <h4><u>SHIPMENT RECEIVING INTO WAREHOUSE</u></h4>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row col col-sm-12\" style=\"min-height: 150px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN ID</b><a class=\"pull-right\">{{rep_ANSID}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Shipment Note No</b><a class=\"pull-right\">{{rep_ShipmentNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN No.</b><a class=\"pull-right\">{{rep_ASNno}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN Date</b><a class=\"pull-right\">{{rep_ASNDate | date}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle Rece. Date-TM</b><a class=\"pull-right\">{{rep_Vehicle_Rece_DateTM | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Cargo Status</b><a class=\"pull-right\">{{rep_Cargo_Status}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature In</b><a class=\"pull-right\">{{rep_TempIn}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature Out</b><a class=\"pull-right\">{{rep_Temp_Out}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Off-Load Start Date-TM</b><a class=\"pull-right\">{{rep_OffLoad_Start_DateTM | date:'short'}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Off-Load END Date-TM</b><a class=\"pull-right\">{{rep_OffLoad_End_DateTM | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Delivery No</b><a class=\"pull-right\">{{rep_DeliveryNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Driver Name.</b><a class=\"pull-right\">{{rep_DriverName}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle No.</b><a class=\"pull-right\">{{rep_VehicleNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Mobile No.</b><a class=\"pull-right\">{{rep_MobileNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>CNIC No.</b><a class=\"pull-right\">{{rep_CNICNo}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-body\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table dataTable\">\r\n                <thead>\r\n                  <tr role=\"row\">\r\n                    <th style=\"border: 1px solid black;\">#</th>\r\n                    <th style=\"border: 1px solid black;\">SKU</th>\r\n                    <th style=\"border: 1px solid black;\">Batch / Serial</th>\r\n                    <th style=\"border: 1px solid black;\">Status</th>\r\n                    <!-- <th>SN #</th> -->\r\n                    <th style=\"border: 1px solid black;\">Mfg Date</th>\r\n                    <th style=\"border: 1px solid black;\">Expiry Date</th>\r\n                    <th style=\"border: 1px solid black;\">Rec.Qty</th>\r\n                    <!-- <th>Pallet#</th>\r\n                      <th>Location</th> -->\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of asnListToPost index as i\">\r\n                    <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                    <td style=\"border: 1px solid black;\">{{item.ItemName}}</td>\r\n                    <td style=\"border: 1px solid black;\">{{item.Batch}}</td>\r\n                    <td style=\"border: 1px solid black;\">{{item.Status}}</td>\r\n                    <!-- <td>{{item.SNno}}</td> -->\r\n                    <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                    <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                    <td style=\"border: 1px solid black;\">{{item.MoveQuantity}}</td>\r\n                    <!-- <td>{{item.PalletNo}}</td>\r\n                      <td>{{item.Location}}</td> -->\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"5\"></td>\r\n                    <td>Total Qty</td>\r\n                    <td>{{TotalQtyReceived}}</td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!-- //calculator Modal  End-->\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"col-sm-6\">\r\n            <button class=\"pull-left\" [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n              class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\" ngxPrint\r\n              printSectionId=\"print\">\r\n              <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n              </span></button>\r\n            <button type=\"submit\" (click)=\"CloseModal()\" class=\"btn btn-success\">Close</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- \r\n<modal #PalletBarcodeModal>\r\n  <modal-header>\r\n    <h4 class=\"modal-title\">Pallet Barcode </h4>\r\n  </modal-header>\r\n\r\n  <modal-content>\r\n    <div id=\"print-all-pallets\" style=\"padding: 20px; text-align: center;\">\r\n      <div *ngFor=\"let plt of palletBarcodeList\" style=\"margin-bottom: 50px; padding: 20px; page-break-after: always;\">\r\n     \r\n        <ngx-barcode [bc-value]=\"plt.PalletNo\" [bc-display-value]=\"true\" [bc-format]=\"'CODE128'\"></ngx-barcode>\r\n        <hr style=\"border-top: 2px dashed #000; margin-top: 20px;\" />\r\n      </div>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <button class=\"btn btn-success\" [printStyle]=\"{body : {'text-align': 'center'}}\" printSectionId=\"print-all-pallets\"\r\n      ngxPrint>\r\n      <i class=\"fa fa-print\"></i> Print All Barcodes\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closePalletModal()\">Close</button>\r\n  </modal-footer>\r\n</modal> -->\r\n<modal #PalletBarcodeModal>\r\n  <modal-header>\r\n    <h4 class=\"modal-title\">Pallet & Item Barcode Stickers</h4>\r\n  </modal-header>\r\n  \r\n  <modal-content>\r\n    <div id=\"print-all-pallets\" style=\"padding: 20px; text-align: center;\">\r\n      \r\n      <div *ngFor=\"let plt of palletBarcodeList\" style=\"margin-bottom: 40px; padding: 20px; border: 2px dashed #000; page-break-inside: avoid;\">\r\n        \r\n     \r\n        \r\n        <div style=\"display: flex; justify-content: space-around; align-items: center;\">\r\n          \r\n          <div style=\"text-align: center;\">\r\n            <h5 style=\"margin-bottom: 5px; font-weight: bold; color: #333;\">Pallet No</h5>\r\n            <ngx-barcode [bc-value]=\"plt.PalletNo\" [bc-display-value]=\"true\" [bc-format]=\"'CODE128'\"></ngx-barcode>\r\n          </div>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <h5 style=\"margin-bottom: 5px; font-weight: bold; color: #333;\">Item: {{plt.Name}}</h5>\r\n            <ngx-barcode [bc-value]=\"plt.ItemId\" [bc-display-value]=\"true\" [bc-format]=\"'CODE128'\"></ngx-barcode>\r\n          </div>\r\n\r\n        </div>\r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </modal-content>\r\n  \r\n  <modal-footer>\r\n    <button class=\"btn btn-success\" \r\n            [printStyle]=\"{body : {'text-align': 'center'}}\" \r\n            printSectionId=\"print-all-pallets\" \r\n            ngxPrint>\r\n      <i class=\"fa fa-print\"></i> Print All Barcodes\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closePalletModal()\">Close</button>\r\n  </modal-footer>\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-warehouse-locator-shipment-note-warehouse-locator-module.js.map