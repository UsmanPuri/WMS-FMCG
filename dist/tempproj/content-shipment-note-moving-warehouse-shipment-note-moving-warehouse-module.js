(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-moving-warehouse-shipment-note-moving-warehouse-module"],{

/***/ "./node_modules/ngx-toggle-switch/ui-switch.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-toggle-switch/ui-switch.es5.js ***!
  \*********************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
        this.labelOn = '';
        this.labelOff = '';
        this.onTouchedCallback = function (v) { };
        this.onChangeCallback = function (v) { };
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reverse;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} flag
     * @return {?}
     */
    UiSwitchComponent.prototype.getColor = /**
     * @param {?=} flag
     * @return {?}
     */
    function (flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    };
    /**
     * @return {?}
     */
    UiSwitchComponent.prototype.onToggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    UiSwitchComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    UiSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    UiSwitchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ui-switch',
                    template: "\n    <span class=\"switch\"\n    [class.checked]=\"checked\"\n    [class.disabled]=\"disabled\"\n    [class.switch-large]=\"size === 'large'\"\n    [class.switch-medium]=\"size === 'medium'\"\n    [class.switch-small]=\"size === 'small'\"\n    [class.switch-labeled]=\"!!labelOn || !!labelOff\"\n    [style.background-color]=\"getColor()\"\n    [style.border-color]=\"getColor('borderColor')\"\n    >\n    <input type=\"checkbox\" id=\"enabled\" name=\"enabled\" [checked]=\"checked\" style=\"display: none;\" aria-invalid=\"false\">\n    <small [style.background]=\"getColor('switchColor')\">\n    </small>\n    <span class=\"switch-text\" *ngIf=\"!!labelOn || !!labelOff\">\n      <span class=\"on\" [innerHtml]=\"labelOn\"></span>\n      <span class=\"off\" [innerHtml]=\"labelOff\"></span>\n    </span>\n    </span>\n  ",
                    styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium.switch-labeled {\n      width: 60px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .switch-labeled {\n      cursor: pointer;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-medium.switch-labeled.checked small {\n      left: 30px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n\n    .switch .switch-text {\n      font-size: 13px;\n    }\n\n    .switch .off {\n      opacity: 1;\n      position: absolute;\n      right: 10%;\n      top: 25%;\n      z-index: 0;\n      color:#A9A9A9;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch .on {\n      opacity:0;\n      z-index: 0;\n      color:#fff;\n      position: absolute;\n      top: 25%;\n      left: 9%;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch.checked .off {\n      opacity:0;\n    }\n\n    .switch.checked .on {\n      opacity:1;\n    }\n\n    "],
                    providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    UiSwitchComponent.ctorParameters = function () { return []; };
    UiSwitchComponent.propDecorators = {
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "switchOffColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "switchColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "defaultBgColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "defaultBoColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelOn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelOff": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "reverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onToggle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return UiSwitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    UiSwitchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        UiSwitchComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                    ],
                    exports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        UiSwitchComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    UiSwitchModule.ctorParameters = function () { return []; };
    return UiSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ui-switch.es5.js.map


/***/ }),

/***/ "./src/app/helpers/services/excel-file.service.ts":
/*!********************************************************!*\
  !*** ./src/app/helpers/services/excel-file.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var EXCEL_TYPE = 'application/octet-stream';
//'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset = UTF-8';
var EXCEL_EXT = '.xlsx';
var ExporterService = /** @class */ (function () {
    function ExporterService() {
    }
    ExporterService.prototype.exportToExcel = function (json, excelFileName) {
        var worksheet = XLSX.utils.json_to_sheet(json);
        var workbook = {
            Sheets: { 'data': worksheet },
            SheetNames: ['data']
        };
        var fmt = '@';
        var i = 1;
        debugger;
        while (i < 3) {
            workbook.Sheets['data']['C' + i].z = fmt;
            console.log(i);
            i++;
        }
        var excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    ExporterService.prototype.saveAsExcel = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
    };
    ExporterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ExporterService);
    return ExporterService;
}());
exports.ExporterService = ExporterService;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-edit.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-edit.component.ts ***!
  \***************************************************************************************************************************/
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
var shipment_note_moving_warehouse_service_1 = __webpack_require__(/*! ../services/shipment-note-moving-warehouse.service */ "./src/app/layout/content/shipment-note-moving-warehouse/services/shipment-note-moving-warehouse.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var ShipmentNoteMovingWarehouseEditComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteMovingWarehouseEditComponent, _super);
    function ShipmentNoteMovingWarehouseEditComponent(injector, _shipmentNoteService, activeRoute, ngxService, exporterService, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.parkingStageDropdownSettings = {};
        _this.selectedParkingStage = {};
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getById();
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.CompanyInfo = function () {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.addFormValidations = function () {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.getErrorMessage = function (formElement) {
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
    // getWarehouseKeyPair() {
    //   let companyBusinessUnitInfo: any = {
    //     CompanyId: this.localStorageService.getCompanyId(),
    //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    //   }
    //   let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    //   this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
    //     .subscribe(res => {
    //         debugger
    //       this.warehouseKeyPair = res as DropdownListDto[];
    //       this.warehouseKeyPairTemp = this.warehouseKeyPair;
    //       this.getAvailablestock();
    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       });
    // }
    ShipmentNoteMovingWarehouseEditComponent.prototype.getLocationKeyPair = function (item) {
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
            _this.getAvailablestock();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.getAvailablestock = function () {
        var _this = this;
        debugger;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            WarehouseId: this.selectedWarehouse.Id
        };
        this.listAvailableStock = [];
        var apiAddress = this.apiConstant.DASHBOARD_AVAILABLE_STOCK_WAREHOUSE_CUSTOMER;
        this._shipmentNoteService.create(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.listAvailableStock = res;
            // this.listAvailableStock.forEach(element => {
            //     this.warehouseKeyPair.splice(x => x.Location === element.Location,1)
            // });
            debugger;
            _this.warehouseKeyPair.sort(function (a, b) {
                return a.Aging - b.Aging;
            });
            _this.ngxService.stop();
            debugger;
            // this.chRef.detectChanges();
            // this.chRef.reattach();
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            //  this.dataTable = table.DataTable();
            // this.dataTable = table.DataTable({
            //   lengthMenu: [1000, 2000, 5000],
            //   "iDisplayLength": 1000,
            //   retrieve: true
            // });
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params["Id"];
        if (Id) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteService.getData(apiAddress)
                .subscribe(function (res) {
                _this.shipmentNote = res;
                _this.selectedWarehouse.Id = _this.shipmentNote.WarehouseId;
                console.log(_this.shipmentNote);
                _this.parkingStageChange();
                //this.shipmentNote.AML_ShipmentNoteChild = 
                debugger;
                _this.getLocationKeyPair(_this.shipmentNote.WarehouseId);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.onSelectWH = function (event, item) {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.addMoveQuantity = function (event, item) {
        // debugger
        var movQty = event.target.value;
        if (movQty > item.Balance) {
            this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
        }
        else {
            // let model = this.shipmentNote.AML_ShipmentNoteChild.filter(a=> a.ShipmentNoteChildId == item.ShipmentNoteChildId);
            // model[0].MoveQuantity = event.target.value;
            item.MoveQuantity = parseInt(event.target.value);
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.addPalletNo = function (event, item) {
        var PalletNo = event.target.value;
        item.PalletNo = event.target.value;
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.moveASN = function () {
        var _this = this;
        debugger;
        this.asnListToPost.forEach(function (element) {
            element.TrasactionDate = _this.formGroup.get('ReceiveDate').value;
            element.WarehouseId = _this.shipmentNote.WarehouseId;
            element.CreatedBy = _this.localStorageService.getUserId();
            element.CompanyId = _this.localStorageService.getCompanyId();
            element.BusinessUnitId = _this.localStorageService.getBusinessUnitId();
            _this.TotalQtyReceived += element.MoveQuantity;
        });
        console.log(this.asnListToPost);
        var ASN = this.asnListToPost;
        this.ngxService.start();
        //console.log(ASN);
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_MOVE_WAREHOUSE + ("/" + this.shipmentNote.ShipmentNoteId);
        this._shipmentNoteService.update(apiUrl, ASN)
            .subscribe(function (res) {
            _this.OpenModal();
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.getParkingStagesKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PARKINGSTAGES_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.parkingStageKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.parkingStageChange = function () {
        var _this = this;
        debugger;
        this.shipmentNote.ParkingStageIdFrom = this.shipmentNote.ParkingStageId;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ParkingStageId: this.shipmentNote.ParkingStageId,
            ShipmentNoteId: this.shipmentNote.ShipmentNoteId
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_BY_PARKING_ID;
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.asnListToPost = res;
            debugger;
            for (var j = 0; j < _this.asnListToPost.length; j++) {
                _this.asnListToPost[j].selected = false;
                _this.asnListToPost[j].Location = 'H1R1RK1P1';
            }
            //console.log(this.shipmentNoteChild)
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.onDeSelect = function (item) {
        //debugger
        // item={};
        // this.shipmentNote.ParkingStageIdFrom = null;
        item.selected = false;
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.parkingStageToChange = function (item) {
        this.shipmentNote.ParkingStageIdTo = item.Value;
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.onDeSelectparkingStageTo = function (item) {
        item = {};
        this.shipmentNote.ParkingStageIdTo = null;
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteMovingWarehouseEditComponent.prototype.redirectToListShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]);
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.onSelect = function (item) {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.getGodownRowKeyPair = function (godownId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + ("/" + godownId);
        this._shipmentNoteService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRowKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.getGodownRackKeyPair = function (godownRowId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID + ("/" + godownRowId);
        this._shipmentNoteService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRackKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.getGodownShelfKeyPair = function (godownRackId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_SHELF_KEYPAIR_BY_GODOWN_RACK_ID + ("/" + godownRackId);
        this._shipmentNoteService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownShelfKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.addItemIntoAsnToPostList = function (item) {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.addItemRelOrd = function (event, itemId, Batch) {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.addItemIntoAsnToPostList2 = function (item) {
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
    ShipmentNoteMovingWarehouseEditComponent.prototype.deleteItemFromAsnListToPost = function (item) {
        this.asnListToPost.splice(this.asnListToPost.indexOf(item), 1);
        this.locationStatusList.filter(function (a) { return a.LocationId == item.LocationId; })[0].TotalCBMinList = this.locationStatusList.filter(function (a) { return a.LocationId == item.LocationId; })[0].TotalCBMinList - item.TotalCBM;
        this.itemBalanceList.filter(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; })[0].ItemTotalQuantity = this.itemBalanceList.filter(function (e) { return e.ItemInformationId == item.ItemInformationId && e.Batch == item.Batch; })[0].ItemTotalQuantity - item.MoveQuantity;
        //console.log(this.locationStatusList)
        //console.log(this.itemBalanceList)
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.autofiller = function (e, i, item) {
        var _this = this;
        debugger;
        var TransDate = this.formGroup.get('ReceiveDate').value;
        if (TransDate == undefined || TransDate == null || TransDate == "") {
            this.showToastrWarning("Please Select Receiving Date First then Proceed");
            return false;
        }
        else {
            var z = 0;
            this.asnListToPost.forEach(function (element) {
                _this.warehouseKeyPairTemp.splice(function (x) { return x.GodownShelfId === element.LocationId; }, 1);
            });
            this.TotalQtyPallet = 0;
            this.QtyPallet = this.formGroup.get("QtyPallet").value;
            z = item.Balance / parseInt(this.QtyPallet);
            for (var j = 0; j < z; j++) {
                this.TotalQtyPallet += parseInt(this.QtyPallet);
                if (this.TotalQtyPallet > item.Balance) {
                    //debugger
                    this.QtyPallet = this.TotalQtyPallet - item.Balance;
                }
                var asnListToPostTemp = {
                    Location: this.warehouseKeyPairTemp[j].Location,
                    LocationId: this.warehouseKeyPairTemp[j].GodownShelfId,
                    TrasactionDate: this.formGroup.get('ReceiveDate').value,
                    ItemInformationId: item.ItemInformationId,
                    Batch: item.Batch,
                    Status: item.Status,
                    MoveQuantity: this.QtyPallet,
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
            }
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.CheckBoxChange = function (e, i, item) {
        //debugger
        // if (item.Location == undefined || item.Location == null) {
        //   this.showToastrWarning("Please Select Move Location for This Line Item");
        //   e.target.checked = false;
        //   return false;
        // }
        if (e.target.checked) {
            this.shipmentNoteChild[i].selected = true;
        }
        else {
            this.shipmentNoteChild[i].selected = false;
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.pushAllChecked = function () {
        var _this = this;
        debugger;
        var TransDate = this.formGroup.get('ReceiveDate').value;
        if (TransDate == undefined || TransDate == null || TransDate == "") {
            this.showToastrWarning("Please Select Receiving Date First then Proceed");
            return false;
        }
        else {
            debugger;
            this.TotalQtyReceived = 0;
            this.shipmentNoteChild.forEach(function (element) {
                _this.QtyRequired = 0;
                _this.chkList = false;
                if (element.selected && element.MoveQuantity > 0) {
                    _this.asnListToPost.forEach(function (ele) {
                        if (element.ItemInformationId === ele.ItemInformationId) {
                            _this.QtyRequired += parseInt(ele.MoveQuantity);
                        }
                    });
                    _this.QtyRequired = _this.QtyRequired + element.MoveQuantity;
                    if (_this.QtyRequired > element.Balance) {
                        _this.showToastrWarning(element.Name + " : Move Quantity is greaterthan Received Qty");
                        _this.chkList = true;
                        return false;
                    }
                }
                _this.TotalQtyReceived += element.MoveQuantity;
            });
            if (!this.chkList) {
                this.shipmentNoteChild.forEach(function (element) {
                    if (element.selected) {
                        _this.addItemIntoAsnToPostList(element);
                        if (_this.ListStatusErr == true) {
                            debugger;
                            _this.asnListToPost = null;
                            return false;
                        }
                    }
                });
            }
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.AllCheckBoxBehaviour = function (param) {
        if (param == "selectAll") {
            for (var j = 0; j < this.shipmentNoteChild.length; j++) {
                this.shipmentNoteChild[j].selected = true;
            }
        }
        else if (param == "deSelectAll") {
            for (var j = 0; j < this.shipmentNoteChild.length; j++) {
                this.shipmentNoteChild[j].selected = false;
            }
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.OpenModal = function () {
        $('#shipModal').show();
        //this.loadComponent = true;
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.CloseModal = function () {
        $('#shipModal').hide();
        this.redirectToListShipmentNote();
        // this.loadComponent = false;
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        debugger;
        var templist = [];
        templist = this.shipmentNoteChild;
        templist.forEach(function (item) {
            //   let templist :any =[];
            _this.addItemIntoAsnToPostList2(item);
            //  this.asnListToPost.push({
            //     Location: this.selectedWarehouse.Name,
            //     LocationId:parseInt(this.selectedWarehouse.Id),
            //     TrasactionDate:this.formGroup.get('ReceiveDate').value,
            //     ItemInformationId:item.ItemInformationId,
            //     Batch:item.Batch,
            //     MoveQuantity:item.MoveQuantity,
            //     ExpiryDate:item.ExpiryDate,
            //     MfgDate:item.MfgDate,
            //     ParkingStageIdFrom:this.shipmentNote.ParkingStageIdFrom, 
            //     Name:item.Description, 
            //     ShipmentNoteChildId:item.ShipmentNoteChildId, 
            //     ShipmentNoteId:item.ShipmentNoteId,
            //     ASNNo:item.ASNNo  ,
            //     CompanyId: this.localStorageService.getCompanyId(),
            //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),      
            //     CreatedBy: this.localStorageService.getUserId(),
            //     LastModifiedBy: this.localStorageService.getUserId(),
            //     TotalCBM :item.ItemCBM*item.MoveQuantity,
            //     SNno:item.SNno,
            //     PRno:item.PRno,
            //     WarehouseId:this.shipmentNote.WarehouseId,
            //     PalletNo:'',
            //   });    
        });
        this.exporterService.exportToExcel(this.asnListToPost, 'Inbound Receiving to Warehouse');
        this.asnListToPost = [];
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.onServicePicked = function () {
        var _this = this;
        var formData = new FormData();
        //formData.append('ContractId', this.selectedContract.toString());
        //formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        var errorList = "";
        var errorList1 = "";
        this.shipmentNote.Flag = false;
        if (formData) {
            debugger;
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.asnListToPost = msg;
                _this.warehouseKeyPair;
                _this.shipmentNoteChild;
                var i = 0;
                debugger;
                _this.asnListToPost.forEach(function (element) {
                    var ShipmentIDCheck = _this.shipmentNoteChild.find(function (x) { return x.ShipmentNoteId === element.ShipmentNoteId; });
                    if (!ShipmentIDCheck) {
                        element.unvalid = true;
                        _this.shipmentNote.Flag = true;
                        _this.showToastrError("INVALID SHIPMENT NOTE INFORMATION");
                        _this.asnListToPost = null;
                        return;
                    }
                    var Locationcheck = _this.warehouseKeyPair.find(function (x) { return x.Location === element.Location; });
                    var SKUCheck = _this.shipmentNoteChild.find(function (x) { return x.Description === element.SKU && x.ItemInformationId === element.ItemInformationId; });
                    if (!Locationcheck || !SKUCheck) {
                        element.unvalid = true;
                        _this.shipmentNote.Flag = true;
                        if (!Locationcheck) {
                            errorList = errorList + "\n" + element.Location;
                        }
                        else
                            errorList1 = errorList1 + "\n" + element.SKU;
                    }
                    else {
                        element.LocationId = Locationcheck.WarehouseId;
                        element.GodownId = Locationcheck.GodwomId;
                        element.GodownRowId = Locationcheck.GodownRowId;
                        element.GodownRackId = Locationcheck.GodownRackId;
                        element.GodownShelfId = Locationcheck.GodownShelfId;
                        element.InboundPool = _this.asnListToPost[i].InboundPool;
                        element.TrasactionDate = _this.formGroup.get('ReceiveDate').value;
                    }
                    i++;
                });
                //    debugger
                if (errorList != "" || errorList1 != "") {
                    _this.showToastrError("Wrong Location - " + "\n" + errorList + "\n" + " Wrong SKU Information - " + "\n" + errorList1);
                }
                console.log(_this.shipmentNote.Flag);
            });
        }
    };
    ShipmentNoteMovingWarehouseEditComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        //let apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
        var apiUrl = '/File/UploadAsnToWarehouse';
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], ShipmentNoteMovingWarehouseEditComponent.prototype, "servicePicked", void 0);
    ShipmentNoteMovingWarehouseEditComponent = __decorate([
        core_1.Component({
            selector: "wms-shipment-note-moving-warehouse-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/shipment-note-moving-warehouse/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-moving-warehouse-form.component.scss */ "./src/app/layout/content/shipment-note-moving-warehouse/styles/shipment-note-moving-warehouse-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, shipment_note_moving_warehouse_service_1.ShipmentNoteService,
            router_1.ActivatedRoute,
            ngx_ui_loader_1.NgxUiLoaderService,
            excel_file_service_1.ExporterService,
            environment_url_service_1.EnvironmentUrlService, http_1.HttpClient])
    ], ShipmentNoteMovingWarehouseEditComponent);
    return ShipmentNoteMovingWarehouseEditComponent;
}(base_component_1.BaseComponent));
exports.ShipmentNoteMovingWarehouseEditComponent = ShipmentNoteMovingWarehouseEditComponent;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-list.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-list.component.ts ***!
  \***************************************************************************************************************************/
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
var shipment_note_moving_warehouse_service_1 = __webpack_require__(/*! ../services/shipment-note-moving-warehouse.service */ "./src/app/layout/content/shipment-note-moving-warehouse/services/shipment-note-moving-warehouse.service.ts");
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
var ShipmentNoteMovingWarehouseListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteMovingWarehouseListComponent, _super);
    function ShipmentNoteMovingWarehouseListComponent(injector, _shipmentNoteService, ngxService, chRef) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.ngxService = ngxService;
        _this.chRef = chRef;
        _this.hideShowList = [];
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.TotalQtyReceived = 0;
        return _this;
    }
    ShipmentNoteMovingWarehouseListComponent.prototype.ngOnInit = function () {
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
    ShipmentNoteMovingWarehouseListComponent.prototype.CompanyInfo = function () {
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
    ShipmentNoteMovingWarehouseListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    ShipmentNoteMovingWarehouseListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    ShipmentNoteMovingWarehouseListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteMovingWarehouseListComponent.prototype.reportmodal = function (shipId) {
        var _this = this;
        debugger;
        this.ngxService.start();
        var shipmentId = shipId;
        if (shipmentId) {
            var apiUrl = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + shipmentId);
            this._shipmentNoteService.getData(apiUrl)
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
    ShipmentNoteMovingWarehouseListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.onDeSelect = function (id) {
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: item.Value
        };
        this.ngxService.start();
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
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
    //   this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
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
    ShipmentNoteMovingWarehouseListComponent.prototype.redirectToCreateShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_CREATE]);
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.OpenModal = function () {
        $('#shipModal').show();
        //this.loadComponent = true;
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.CloseModal = function () {
        debugger;
        $('#shipModal').hide();
        //this.redirectToListShipmentNote()
        // this.loadComponent = false;
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.Details = function (id) {
        debugger;
        var updateUrl = this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteMovingWarehouseListComponent.prototype.delete = function (id) {
        var _this = this;
        debugger;
        //console.log(id);
        debugger;
        if (confirm("Are you sure to delete Complete Shipment Note")) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_DELETE + ("/" + id);
            this._shipmentNoteService.delete(apiAddress)
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
    ShipmentNoteMovingWarehouseListComponent = __decorate([
        core_1.Component({
            selector: "wms-shipment-note-moving-warehouse-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note-moving-warehouse/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-moving-warehouse-form.component.scss */ "./src/app/layout/content/shipment-note-moving-warehouse/styles/shipment-note-moving-warehouse-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, shipment_note_moving_warehouse_service_1.ShipmentNoteService,
            ngx_ui_loader_1.NgxUiLoaderService, core_1.ChangeDetectorRef])
    ], ShipmentNoteMovingWarehouseListComponent);
    return ShipmentNoteMovingWarehouseListComponent;
}(base_component_1.BaseComponent));
exports.ShipmentNoteMovingWarehouseListComponent = ShipmentNoteMovingWarehouseListComponent;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/services/shipment-note-moving-warehouse.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/services/shipment-note-moving-warehouse.service.ts ***!
  \******************************************************************************************************************/
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
var ShipmentNoteService = /** @class */ (function (_super) {
    __extends(ShipmentNoteService, _super);
    function ShipmentNoteService(injector) {
        return _super.call(this, injector) || this;
    }
    ShipmentNoteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], ShipmentNoteService);
    return ShipmentNoteService;
}(repository_service_1.RepositoryService));
exports.ShipmentNoteService = ShipmentNoteService;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/shipment-note-moving-warehouse.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/shipment-note-moving-warehouse.module.ts ***!
  \********************************************************************************************************/
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
var shipment_note_moving_warehouse_service_1 = __webpack_require__(/*! ./services/shipment-note-moving-warehouse.service */ "./src/app/layout/content/shipment-note-moving-warehouse/services/shipment-note-moving-warehouse.service.ts");
var shipment_note_moving_warehouse_list_component_1 = __webpack_require__(/*! ./components/shipment-note-moving-warehouse-list.component */ "./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var shipment_note_moving_warehouse_edit_component_1 = __webpack_require__(/*! ./components/shipment-note-moving-warehouse-edit.component */ "./src/app/layout/content/shipment-note-moving-warehouse/components/shipment-note-moving-warehouse-edit.component.ts");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: shipment_note_moving_warehouse_list_component_1.ShipmentNoteMovingWarehouseListComponent,
            },
            // {
            //   path: "create",
            //   component: ShipmentNoteReceivingFormComponent,
            // },
            {
                path: "edit/:Id",
                component: shipment_note_moving_warehouse_edit_component_1.ShipmentNoteMovingWarehouseEditComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteMovingWarehouseModule = /** @class */ (function () {
    function ShipmentNoteMovingWarehouseModule() {
    }
    ShipmentNoteMovingWarehouseModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_print_1.NgxPrintModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                shipment_note_moving_warehouse_list_component_1.ShipmentNoteMovingWarehouseListComponent, shipment_note_moving_warehouse_edit_component_1.ShipmentNoteMovingWarehouseEditComponent
            ],
            providers: [
                shipment_note_moving_warehouse_service_1.ShipmentNoteService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], ShipmentNoteMovingWarehouseModule);
    return ShipmentNoteMovingWarehouseModule;
}());
exports.ShipmentNoteMovingWarehouseModule = ShipmentNoteMovingWarehouseModule;


/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/styles/shipment-note-moving-warehouse-form.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/styles/shipment-note-moving-warehouse-form.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{z-index:1050;overflow:auto;-webkit-overflow-scrolling:auto;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}.modal-dialog{margin-left:350px;margin-top:100px}\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/templates/edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/templates/edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  #tbl1 {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  table.mytbl tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n  }\r\n</style>\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Inbound Receiving into Warehouse\r\n    <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]\">ASN Moving Warehouse</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToListShipmentNote()\" class=\"btn-wms\">ASN Moving Listing</button>\r\n          </div>\r\n          <h3>Inbound Receiving into Warehouse</h3>\r\n        </div>\r\n\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"moveASN()\">\r\n\r\n\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN ID</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item\">\r\n                    <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                    <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>Driver Name</b><a class=\"pull-right\">{{shipmentNote.DriverName}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>Vehicle No</b><a class=\"pull-right\">{{shipmentNote.VehicleNo}}</a>\r\n                  </li>\r\n                  <li class=\"list-group-item list-group-unbordered\">\r\n                    <b>CNIC No</b><a class=\"pull-right\">{{shipmentNote.CNICNo}}</a>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <!-- <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Moved From</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"parkingStageKeyPair\"\r\n                    [settings]=\"parkingStageDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedParkingStage')\"\r\n                    formControlName=\"ParkingStageIdFrom\" (onSelect)=\"parkingStageChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"col-md-4\"> -->\r\n                <!-- <div class=\"form-group\">\r\n                  <label>Location</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                    [settings]=\"warehouseDropdownSettings2\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                    formControlName=\"WarehouseId\" \r\n                    (onSelect)=\"onSelect($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>-->\r\n              <!-- </div> -->\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Receiving Date</label>\r\n                  <input type=\"date\" formControlName=\"ReceiveDate\" class=\"form-control\"\r\n                    placeholder=\"Enter Receive Date\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiveDate.invalid\">\r\n                    {{getErrorMessage('ReceiveDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Total CBM</label>\r\n                  <p>{{locationSpaceInfo.CBM | number:'1.2-2'}}</p>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Occupied CBM</label>\r\n                  <p>{{locationSpaceInfo.UsedCBM - locationSpaceInfo.FreeCBM | number:'1.2-2'}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Empty CBM</label>\r\n                  <p>{{locationSpaceInfo.CBM-(locationSpaceInfo.UsedCBM - locationSpaceInfo.FreeCBM) | number:'1.2-2'}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n              \r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-genx  pull-right\"\r\n                  (click)=\"AllCheckBoxBehaviour('selectAll')\">Select All</button>\r\n\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-genx\"\r\n                  (click)=\"AllCheckBoxBehaviour('deSelectAll')\">De Select All</button>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n\r\n              </div>\r\n            </div> -->\r\n            \r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable mytbl\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>#</th>\r\n                        <th>Customer SKU</th>\r\n                        <th>SKU Name</th>\r\n                        <th>Batch / Serial</th>\r\n                        <th>Status</th>\r\n                        <th [hidden]=\"true\">SN #</th>\r\n                        <th [hidden]=\"true\">PR #</th>\r\n                        <th [hidden]=\"false\">Mfg Date</th>\r\n                        <th [hidden]=\"false\">Expiry Date</th>\r\n                        <th>Move Quantity</th>\r\n                        <th [hidden]=\"false\">Pallet No</th>\r\n                        <th>Location</th>\r\n                        <th>InboundPool</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of asnListToPost index as i\"\r\n                        [ngClass]=\"{ 'border_bottom': item.unvalid }\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.Description}} </td>\r\n                        <td>{{item.Name}} </td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.Status}}</td>\r\n                        <td [hidden]=\"true\">{{item.SNno}}</td>\r\n                        <td [hidden]=\"true\">{{item.PRno}}</td>\r\n                        <td [hidden]=\"false\">{{item.MfgDate | date}}\r\n                          <!-- <span *ngIf=\"item.MfgDate=='3020-03-12T00:00:00'; else inactive_span\">Null</span>\r\n                          <ng-template #inactive_span> <span>{{item.MfgDate | date}}</span></ng-template> -->\r\n                        </td>\r\n                        <td [hidden]=\"false\">{{item.ExpiryDate | date}}\r\n                          <!-- <span *ngIf=\"item.ExpiryDate=='3020-03-12T00:00:00'; else inactive_span\">Null</span>\r\n                          <ng-template #inactive_span> <span> {{item.ExpiryDate | date}}</span></ng-template> -->\r\n                        </td>\r\n                        <!-- <td>{{item.MoveQuantity}}</td> -->\r\n                        <td><input type=\"number\" value=\"{{item.MoveQuantity}}\" (change)=\"addItemRelOrd($event,item.ItemInformationId,item.Batch)\"></td>\r\n                        <td [hidden]=\"false\">{{item.PalletNo}}</td>\r\n                        <td>{{item.Location}}</td>\r\n                        <td>{{item.InboundPool}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-footer\">\r\n            <div class=\"col-md-2\">\r\n              <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <input type=\"file\" id=\"servicePicked\" #servicePicked (click)=\"message=''\"\r\n                (change)=\"onServicePicked(servicePicked)\">\r\n            </div>\r\n            <!-- [disabled]=\"formGroup.invalid || asnListToPost.length<=0\" -->\r\n            <button type=\"submit\" class=\"btn btn-wms pull-right\"\r\n              [disabled]=\" this.shipmentNote.Flag || asnListToPost.length == 0 \">\r\n              S U B M I T\r\n            </button>\r\n            <!-- <a href=\"#\" (click)=\"OpenModal();\" data-toggle=\"control-sidebar\"><i class=\"fa fa-plus\"></i></a> -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<div class=\"col-md-2\">\r\n\r\n</div>\r\n<div class=\"modal\" id=\"shipModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\" style=\"width: 900px;\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"modal-body\" id=\"print\">\r\n          <div class=\"row col-sm-12\" >\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-3\" style=\"text-align: left;\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"50\" width=\"160\" style=\"background-color: white;\">\r\n              </div>\r\n              <div class=\"col col-sm-8 pull-left\" style=\"margin-top: 10px; text-align: left;\">\r\n                <address>\r\n                  <strong>{{CompanyName}}</strong> <br>\r\n                  {{CompanyAddress}}\r\n                </address>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n              <h4><b><u>SHIPMENT NOTE RECEIVING WAREHOUSE</u></b></h4>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row col col-sm-12\" style=\"min-height: 150px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN ID</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle Rece. Date-TM</b><a class=\"pull-right\">{{shipmentNote.ReceivingDate | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature In</b><a class=\"pull-right\">{{shipmentNote.TempIn}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature Out</b><a class=\"pull-right\">{{shipmentNote.TempOut}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Off-Load Start Date-TM</b><a class=\"pull-right\">{{shipmentNote.OffLoadingStartTime | date:'short'}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                      <b>Off-Load END Date-TM</b><a class=\"pull-right\">{{shipmentNote.OffLoadingEndTime | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Driver Name.</b><a class=\"pull-right\">{{shipmentNote.DriverName}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle No.</b><a class=\"pull-right\">{{shipmentNote.VehicleNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Mobile No.</b><a class=\"pull-right\">{{shipmentNote.MobileNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>CNIC No.</b><a class=\"pull-right\">{{shipmentNote.CNICNo}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <table class=\"table dataTable\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th style=\"border: 1px solid black;\">#</th>\r\n                        <th style=\"border: 1px solid black;\">SKU</th>\r\n                        <th style=\"border: 1px solid black;\">Batch / Serial</th>\r\n                        <!-- <th style=\"border: 1px solid black;\">Status</th>\r\n                        <th style=\"border: 1px solid black;\">SN #</th> -->\r\n                        <th style=\"border: 1px solid black;\">Mfg Date</th> \r\n                        <th style=\"border: 1px solid black;\">Expiry Date</th>\r\n                        <th style=\"border: 1px solid black;\">Rec.Qty</th>\r\n\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of asnListToPost index as i\" [ngClass]=\"{ 'border_bottom': true }\">\r\n                        <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                        <td style=\"border: 1px solid black;\">{{item.Description}} | {{item.Name}}</td>\r\n                        <td style=\"border: 1px solid black;\">{{item.Batch}}</td>\r\n                        <!-- <td style=\"border: 1px solid black;\">{{item.Status}}</td>\r\n                        <td style=\"border: 1px solid black;\">{{item.SNno}}</td> -->\r\n                        <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                        <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                        <td style=\"border: 1px solid black;\">{{item.MoveQuantity}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"4\"></td>\r\n                        <td>Total Qty</td>\r\n                        <td>{{TotalQtyReceived}}</td>\r\n                      </tr>\r\n                    </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- //calculator Modal  End-->\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"col-sm-12\">\r\n            <button [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n              class=\"btn-genx hidden-print print-btn\" printTitle=\"ShipmentNote Receiving\" [useExistingCss]=\"true\" ngxPrint\r\n              printSectionId=\"print\">\r\n              <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n              </span></button>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <button type=\"submit\" (click)=\"CloseModal()\" class=\"btn btn-success\">Close</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving-warehouse/templates/list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving-warehouse/templates/list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    ASN MOVING TO WAREHOUSE LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_WAREHOUSE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n   \r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n        \r\n           \r\n          </div>\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                      background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.shipmentNoteList, 'asn-moving-to-warehouse-list.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('asn-moving-to-warehouse-list.xlsx', 'tbl', 'ASN Moving To Warehouse List')\" style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('asn-moving-to-warehouse-list.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                          Sr #\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          Customer Name\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                          ASN No\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                          Warehouse\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          ASN Ref No\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"0\" style=\"color: white;\">\r\n                          ASN Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\" data-column=\"1\" style=\"color: white;\">\r\n                          Delivery No\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\" data-column=\"1\" style=\"color: white;\">\r\n                          Receiving Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"2\" style=\"color: white;\">\r\n                          Status\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('9')\" data-column=\"0\" style=\"color: white;\">\r\n                          System ID\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('10')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Action\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th *ngIf=\"!hideShowList[0].status\">Sr#</th>\r\n                      <th *ngIf=\"!hideShowList[1].status\">Customer Name</th>\r\n                      <th *ngIf=\"!hideShowList[2].status\">ASN No</th>\r\n                      <th *ngIf=\"!hideShowList[3].status\">Warehouse</th>\r\n                      <th *ngIf=\"!hideShowList[4].status\">ASN Ref No</th>\r\n                      <th *ngIf=\"!hideShowList[5].status\">ASN Date</th>\r\n                      <th *ngIf=\"!hideShowList[6].status\">Delivery No</th> \r\n                      <th *ngIf=\"!hideShowList[7].status\">Receiving Date</th>\r\n                      <th *ngIf=\"!hideShowList[8].status\">Status</th> \r\n                      <th *ngIf=\"!hideShowList[9].status\">System ID</th>\r\n                      <th *ngIf=\"!hideShowList[10].status\">Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList index as i\">\r\n                      <!-- <td *ngIf=\"!hideShowList[0].status\">{{godwom.ShipmentNoteId}}</td> -->\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{i+1}}</td>\r\n                      <td *ngIf=\"!hideShowList[1].status\">{{godwom.Name}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\">{{godwom.ASNNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\">{{godwom.WarehouseName}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\">{{godwom.ShipmentNoteNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[5].status\">{{godwom.ASNDate | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[6].status\">{{godwom.DeliveryNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[7].status\">{{godwom.ReceivingDate | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[8].status\">\r\n                        <span *ngIf=\"godwom.WHStatus == true; else inactive_span\" class=\"label label-success\">Received</span>\r\n                        <ng-template #inactive_span>  <span class=\"bg-red label\">Pending</span></ng-template>\r\n                      </td> \r\n                      <td *ngIf=\"!hideShowList[9].status\">{{godwom.ShipmentNoteId}}</td>\r\n                      <td *ngIf=\"!hideShowList[10].status\">\r\n                        <button type=\"button\" *ngIf=\"godwom.WHStatus != true\" class=\"btn-warining editBtn\" (click)=\"Details(godwom.ShipmentNoteId)\">\r\n                            <i class=\"fa fa-info\"></i>\r\n                        </button>\r\n                        <button type=\"button\" id=\"report\" title=\"Print Shipment Receiving\" class=\"editBtn btn-warining\"\r\n                              (click)=\"reportmodal(godwom.ShipmentNoteId)\">\r\n                              <i style=\"font-size:14px !important\" class=\"fa fa-file\"></i>\r\n                            </button>\r\n                            <button type=\"button\" id=\"update\"\r\n                            class=\"editBtn btn-danger\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n                            title=\"Delete Shipment Note\" (click)=\"delete(godwom.ShipmentNoteId)\"><i\r\n                            style=\"font-size:14px !important\" class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n\r\n    </form>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n<div class=\"modal\" id=\"shipModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\" style=\"width: 900px;\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"modal-body\" id=\"print\">\r\n          <div class=\"row col-sm-12\" >\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-3\" style=\"text-align: center;\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              </div>\r\n              <div class=\"col col-sm-8 pull-left\" style=\"margin-top: 10px;\">\r\n                <address>\r\n                  <strong>{{CompanyName}}</strong> <br>\r\n                  {{CompanyAddress}}\r\n                </address>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n              <h4><u>SHIPMENT RECEIVING INTO WAREHOUSE</u></h4>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row col col-sm-12\" style=\"min-height: 150px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN ID</b><a class=\"pull-right\">{{rep_ANSID}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Shipment Note No</b><a class=\"pull-right\">{{rep_ShipmentNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN No.</b><a class=\"pull-right\">{{rep_ASNno}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>ASN Date</b><a class=\"pull-right\">{{rep_ASNDate | date}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle Rece. Date-TM</b><a class=\"pull-right\">{{rep_Vehicle_Rece_DateTM | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Cargo Status</b><a class=\"pull-right\">{{rep_Cargo_Status}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature In</b><a class=\"pull-right\">{{rep_TempIn}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Temperature Out</b><a class=\"pull-right\">{{rep_Temp_Out}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Off-Load Start Date-TM</b><a class=\"pull-right\">{{rep_OffLoad_Start_DateTM | date:'short'}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                      <b>Off-Load END Date-TM</b><a class=\"pull-right\">{{rep_OffLoad_End_DateTM | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\" style=\"text-align: left;\">\r\n                <div class=\"col-sm-12\">\r\n                  <b>Delivery No</b><a class=\"pull-right\">{{rep_DeliveryNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Driver Name.</b><a class=\"pull-right\">{{rep_DriverName}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Vehicle No.</b><a class=\"pull-right\">{{rep_VehicleNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>Mobile No.</b><a class=\"pull-right\">{{rep_MobileNo}}</a>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <b>CNIC No.</b><a class=\"pull-right\">{{rep_CNICNo}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-body\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table dataTable\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th style=\"border: 1px solid black;\">#</th>\r\n                      <th style=\"border: 1px solid black;\">SKU</th>\r\n                      <th style=\"border: 1px solid black;\">Batch / Serial</th>\r\n                      <th style=\"border: 1px solid black;\">Status</th>\r\n                      <!-- <th>SN #</th> -->\r\n                      <th style=\"border: 1px solid black;\">Mfg Date</th> \r\n                      <th style=\"border: 1px solid black;\">Expiry Date</th>\r\n                      <th style=\"border: 1px solid black;\">Rec.Qty</th>\r\n                      <!-- <th>Pallet#</th>\r\n                      <th>Location</th> -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of asnListToPost index as i\">\r\n                      <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                      <td style=\"border: 1px solid black;\">{{item.ItemName}}</td>\r\n                      <td style=\"border: 1px solid black;\">{{item.Batch}}</td>\r\n                      <td style=\"border: 1px solid black;\">{{item.Status}}</td>\r\n                      <!-- <td>{{item.SNno}}</td> -->\r\n                      <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                      <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                      <td style=\"border: 1px solid black;\">{{item.MoveQuantity}}</td>\r\n                      <!-- <td>{{item.PalletNo}}</td>\r\n                      <td>{{item.Location}}</td> -->\r\n                    </tr>\r\n                  </tbody>\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"5\"></td>\r\n                      <td>Total Qty</td>\r\n                      <td>{{TotalQtyReceived}}</td>\r\n                    </tr>\r\n                  </tfoot>\r\n              </table>\r\n            </div>\r\n              \r\n            \r\n          </div>\r\n\r\n        </div>\r\n        <!-- //calculator Modal  End-->\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"col-sm-6\">\r\n            <button class=\"pull-left\" [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n              class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\" ngxPrint\r\n              printSectionId=\"print\">\r\n              <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n              </span></button>\r\n              <button type=\"submit\" (click)=\"CloseModal()\" class=\"btn btn-success\">Close</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-moving-warehouse-shipment-note-moving-warehouse-module.js.map