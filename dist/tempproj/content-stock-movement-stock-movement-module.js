(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-stock-movement-stock-movement-module"],{

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
/*! exports provided: ExporterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExporterService", function() { return ExporterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/octet-stream';
//'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset = UTF-8';
var EXCEL_EXT = '.xlsx';
var ExporterService = /** @class */ (function () {
    function ExporterService() {
    }
    ExporterService.prototype.exportToExcel = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
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
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    ExporterService.prototype.saveAsExcel = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
    };
    ExporterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExporterService);
    return ExporterService;
}());



/***/ }),

/***/ "./src/app/layout/content/stock-movement/components/stock-movement-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/components/stock-movement-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StockMovementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementFormComponent", function() { return StockMovementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/stock-movement.service */ "./src/app/layout/content/stock-movement/services/stock-movement.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/services/dashboard.service */ "./src/app/layout/content/dashboard/services/dashboard.service.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StockMovementFormComponent = /** @class */ (function (_super) {
    __extends(StockMovementFormComponent, _super);
    // formValue: any;
    function StockMovementFormComponent(injector, stockMovementService, _dashboardService) {
        var _this = _super.call(this, injector) || this;
        _this.stockMovementService = stockMovementService;
        _this._dashboardService = _dashboardService;
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = {};
        _this.selectedItemLoc = {};
        _this.selectedSnDetail = {};
        _this.itemDropdownSettings = {};
        _this.locDropdownSettings = {};
        _this.locationDropdownSettings = {};
        _this.selectedLocation = {};
        _this.locationObject = [];
        _this.selectedItem = {};
        _this.itemListToPost = [];
        _this.listAvailableStock = [];
        return _this;
    }
    StockMovementFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getWarehouseKeyPair();
    };
    StockMovementFormComponent.prototype.dropdownSettings = function () {
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.locDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.SnDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.locationDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    StockMovementFormComponent.prototype.getAvailablestock = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: warehouseId,
        };
        var apiAddress = this.apiConstant.DASHBOARD_AVAILABLE_STOCK;
        this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.listAvailableStock = res;
            var itemTemDropdown = [];
            _this.listAvailableStock = _this.listAvailableStock.filter(function (x) { return x.WarehouseId == warehouseId; });
            _this.listAvailableStock.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.ItemId,
                    Text: element.Description + " | " + element.Name + " | " + element.CustomerName
                });
            });
            itemTemDropdown = itemTemDropdown.filter(function (element, index, self) {
                return index === self.findIndex(function (x) { return ((element.Text === x.Text)); });
            });
            _this.itemKeyPair = itemTemDropdown;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    StockMovementFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
            //console.log(this.warehouseKeyPair);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    StockMovementFormComponent.prototype.onSelectWarehouse = function (item, dropDownName) {
        //debugger
        this.selectedWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
        this.getLocationKeyPair(item.Value);
        this.getAvailablestock(item.Value);
        this.SetDefualtValue();
    };
    StockMovementFormComponent.prototype.onDeSelectWarehouse = function (dropDownName) {
        this.selectedWarehouse = {};
    };
    StockMovementFormComponent.prototype.onSelectItem = function (item, dropDownName) {
        this.formGroup.get("LocId").setValue('');
        this.formGroup.get("SnId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.selectedItem = {
            Id: item.Value,
            Name: item.Text
        };
        this.locKeyPair = [];
        var tempItemList = [];
        var itemTemDropdown = [];
        tempItemList = this.listAvailableStock.filter(function (x) { return x.ItemId == item.Value; });
        var i = 0;
        tempItemList.forEach(function (element) {
            itemTemDropdown.push({
                Value: element.ItemId + "-" + i,
                Text: element.Location
            });
            i++;
        });
        itemTemDropdown = itemTemDropdown.filter(function (element, index, self) {
            return index === self.findIndex(function (x) { return ((element.Text === x.Text)); });
        });
        this.locKeyPair = itemTemDropdown;
        //console.log(this.locKeyPair)
    };
    StockMovementFormComponent.prototype.onDeSelectItem = function (dropDownName) {
        if (dropDownName === 'selectedItem') {
            this.locKeyPair = [];
        }
        this.formGroup.get("LocId").setValue('');
        this.formGroup.get("SnId").setValue('');
    };
    StockMovementFormComponent.prototype.onSelectCurrentLocaiton = function (item, dropDownName) {
        var _this = this;
        //debugger
        this.formGroup.get("SnId").setValue('');
        this.selectedItemLoc = {
            Id: item.Value,
            Name: item.Text
        };
        //debugger
        this.SnKeyPair = [];
        var tempItemList = [];
        var itemTemDropdown = [];
        tempItemList = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == item.Text && x.SNno != null; });
        if (tempItemList.length > 0) {
            tempItemList.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.SNno,
                    Text: element.SNno + " | " + element.Balance
                });
                _this.SnKeyPair = itemTemDropdown;
            });
        }
        else {
            //
            this.currentLocaitonQty = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == item.Text; }).map(function (x) { return x.Balance; })[0];
            this.formGroup.get("QtyAvailableToAdd").setValue(this.currentLocaitonQty);
            this.Status = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.Status; })[0];
            this.formGroup.get("StatusToAdd").setValue(this.Status);
            this.PalletNo = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.PalletNo; })[0];
            this.formGroup.get("PalletNoToAdd").setValue(this.PalletNo);
            this.BatchCode = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.BatchCode; })[0];
            this.formGroup.get("BatchCodeToAdd").setValue(this.BatchCode);
            this.InboundPool = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.InboundPool; })[0];
            this.formGroup.get("InboundPoolToAdd").setValue(this.InboundPool);
            this.Price = 0;
            this.formGroup.get("PriceToAdd").setValue(this.Price);
        }
    };
    StockMovementFormComponent.prototype.onDeSelectCurrentLocaiton = function (dropDownName) {
        this[dropDownName] = {};
    };
    StockMovementFormComponent.prototype.onSelectSnDetails = function (item, dropDownName) {
        var _this = this;
        this.selectedSnDetail = {
            Id: item.Value,
            Name: item.Text
        };
        debugger;
        this.currentLocaitonQty = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == item.Value; }).map(function (x) { return x.Balance; })[0];
        this.formGroup.get("QtyAvailableToAdd").setValue(this.currentLocaitonQty);
        this.Status = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.Status; })[0];
        this.formGroup.get("StatusToAdd").setValue(this.Status);
        this.PalletNo = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.PalletNo; })[0];
        this.formGroup.get("PalletNoToAdd").setValue(this.PalletNo);
        this.BatchCode = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.BatchCode; })[0];
        this.formGroup.get("BatchCodeToAdd").setValue(this.BatchCode);
        this.InboundPool = this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.InboundPool; })[0];
        this.formGroup.get("InboundPoolToAdd").setValue(this.InboundPool);
        this.Price = 0;
        this.formGroup.get("PriceToAdd").setValue(this.Price);
    };
    StockMovementFormComponent.prototype.onDeSelectSnDetails = function (dropDownName) {
        this[dropDownName] = {};
    };
    StockMovementFormComponent.prototype.getLocationKeyPair = function (item) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: item,
        };
        var apiAddress = this.apiConstant.LOCATION_BYView_BYWarehouse;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            var tempItemList = [];
            var itemTemDropdown = [];
            tempItemList = res;
            tempItemList.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.Location,
                    Text: element.Location
                });
            });
            _this.locationKeyPair = itemTemDropdown;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    StockMovementFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        debugger;
        if (this.formGroup.get("QtyToAdd").value > this.formGroup.get("QtyAvailableToAdd").value) {
            this.showToastrError('Move Quantity must be Less Then Or Equal to Aailable  Quantity');
        }
        else {
            var stockmovementObject = {
                WarehouseId: this.selectedWarehouse.Id,
                warehouseName: this.warehouseKeyPair.filter(function (x) { return x.Value == _this.selectedWarehouse.Id; }).map(function (x) { return x.Text; })[0],
                ItemId: this.selectedItem.Id,
                itemName: this.itemKeyPair.filter(function (x) { return x.Value == _this.selectedItem.Id; }).map(function (x) { return x.Text; })[0],
                NewLocation: this.selectedLocation.Name,
                OldLocation: this.selectedItemLoc.Name,
                TransctionDate: this.formGroup.get("Date").value,
                SNno: this.selectedSnDetail != undefined ? this.selectedSnDetail.Id : null,
                MoveQuantity: this.formGroup.get("QtyToAdd").value,
                CompanyId: this.localStorageService.getCompanyId(),
                BusinessUnitId: this.localStorageService.getBusinessUnitId(),
                CreatedBy: this.localStorageService.getUserId(),
                LastModifiedBy: this.localStorageService.getUserId(),
                ShipmentNoteId: null,
                Status: this.selectedSnDetail != undefined ? this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.Status; })[0] :
                    this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.Status; })[0],
                BatchCode: this.selectedSnDetail != undefined ? this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.BatchCode; })[0] :
                    this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.BatchCode; })[0],
                PRNo: this.selectedSnDetail != undefined ? this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.PRno; })[0] :
                    this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.PRno; })[0],
                InboundPool: this.selectedSnDetail != undefined ? this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.InboundPool; })[0] :
                    this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.InboundPool; })[0],
                Price: 0,
                RecordReference: "ChangeLocator",
                PalletNo: this.selectedSnDetail != undefined ? this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name && x.SNno == _this.selectedSnDetail.Id; }).map(function (x) { return x.PalletNo; })[0] :
                    this.listAvailableStock.filter(function (x) { return x.ItemId == _this.selectedItem.Id && x.Location == _this.selectedItemLoc.Name; }).map(function (x) { return x.PalletNo; })[0],
            };
            //console.log(stockmovementObject);
            this.itemListToPost.push(stockmovementObject);
            this.SetDefualtValue();
        }
    };
    StockMovementFormComponent.prototype.onSelectLoc = function (item) {
        // 
        this.selectedLocation = {
            Id: item,
            Name: item
        };
    };
    StockMovementFormComponent.prototype.createStockMovement = function () {
        this.executeStockMovementCreation();
    };
    StockMovementFormComponent.prototype.executeStockMovementCreation = function () {
        var _this = this;
        var apiUrl = this.apiConstant.STOCK_MOVEMENT_CREATE;
        this.stockMovementService.create(apiUrl, this.itemListToPost)
            .subscribe(function (res) {
            _this.showToastrSuccess('Stock Movement created successfully');
            setTimeout(function () {
                _this.clearFields();
            }, 1000);
            _this.redirectToStockMovementListing();
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    StockMovementFormComponent.prototype.clearFields = function () {
        this.formGroup.get("WarehouseId").setValue('');
    };
    StockMovementFormComponent.prototype.onDeSelectLoc = function () {
        this.selectedLocation = [];
    };
    StockMovementFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
        ];
        this.addFormControlWithValidations("ItemId", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", requiredValidation);
        this.addFormControlWithValidations("LocId", requiredValidation);
        this.addFormControlWithValidations("LocationId", requiredValidation);
        this.addFormControlWithValidations("SnId", []);
        this.addFormControlWithValidations("QtyToAdd", requiredValidation);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
        this.addFormControlWithValidations("BatchCodeToAdd", []);
        this.addFormControlWithValidations("InboundPoolToAdd", []);
        this.addFormControlWithValidations("StatusToAdd", []);
        this.addFormControlWithValidations("PalletNoToAdd", []);
        this.addFormControlWithValidations("Date", requiredValidation);
        this.addFormControlWithValidations("PriceToAdd", []);
    };
    StockMovementFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
      * The following method is used
      * @param {string} formElement
      * @returns {string}
      */
    StockMovementFormComponent.prototype.getErrorMessage = function (formElement) {
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
    StockMovementFormComponent.prototype.SetDefualtValue = function () {
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("LocId").setValue('');
        this.formGroup.get("SnId").setValue('');
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("BatchCodeToAdd").setValue('');
        this.formGroup.get("InboundPoolToAdd").setValue('');
        this.formGroup.get("StatusToAdd").setValue('');
        this.formGroup.get("PalletNoToAdd").setValue('');
        this.selectedSnDetail = undefined;
        this.locKeyPair = null;
    };
    StockMovementFormComponent.prototype.redirectToStockMovementListing = function () {
        this.router.navigate([this.routesList.STOCK_MOVEMENT_LISTING]);
    };
    StockMovementFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-stock-movement-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/stock-movement/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/stock-movement-form.component.scss */ "./src/app/layout/content/stock-movement/styles/stock-movement-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_1__["StockMovementService"],
            _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], StockMovementFormComponent);
    return StockMovementFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/stock-movement/components/stock-movement-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/components/stock-movement-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StockMovementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementListComponent", function() { return StockMovementListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/stock-movement.service */ "./src/app/layout/content/stock-movement/services/stock-movement.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StockMovementListComponent = /** @class */ (function (_super) {
    __extends(StockMovementListComponent, _super);
    function StockMovementListComponent(injector, stockMovementService, router, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this.stockMovementService = stockMovementService;
        _this.ngxService = ngxService;
        _this.isCustomerOrder = false;
        _this.hideShowList = [];
        return _this;
    }
    StockMovementListComponent.prototype.ngOnInit = function () {
        this.getWarehouseKeyPair();
        this.addFormValidations();
        this.getAllMovementRecord();
        for (var i = 0; i < 10; i++) {
            this.hideShowList.push({ status: false });
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
        this.hideShowList[9].status = false;
    };
    //Excel Conversion
    StockMovementListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    StockMovementListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    StockMovementListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(blob, filename);
    };
    StockMovementListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    StockMovementListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        this.addFormControlWithValidations("DateFrom", requiredValidation);
        this.addFormControlWithValidations("DateTo", requiredValidation);
    };
    StockMovementListComponent.prototype.getErrorMessage = function (formElement) {
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
    StockMovementListComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        //debugger
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
            console.log(_this.warehouseKeyPair);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    StockMovementListComponent.prototype.getAllMovementRecord = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.STOCK_MOVEMENT_LIST;
        this.stockMovementService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.stockMovementlist = res;
            _this.stockMovementlist.forEach(function (element) {
                element.warehouseName = _this.warehouseKeyPair.filter(function (x) { return x.Value == element.WarehouseId; }).map(function (x) { return x.Text; })[0];
            });
            console.log(_this.stockMovementlist);
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    StockMovementListComponent.prototype.redirectToCreateStockMovement = function () {
        this.router.navigate([this.routesList.STOCK_MOVEMENT_CREATE]);
    };
    StockMovementListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-stock-movement-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/stock-movement/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/stock-movement-form.component.scss */ "./src/app/layout/content/stock-movement/styles/stock-movement-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_1__["StockMovementService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], StockMovementListComponent);
    return StockMovementListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/stock-movement/services/stock-movement.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/services/stock-movement.service.ts ***!
  \**********************************************************************************/
/*! exports provided: StockMovementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementService", function() { return StockMovementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/services/repository.service */ "./src/app/helpers/services/repository.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockMovementService = /** @class */ (function (_super) {
    __extends(StockMovementService, _super);
    function StockMovementService(injector) {
        return _super.call(this, injector) || this;
    }
    StockMovementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], StockMovementService);
    return StockMovementService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/stock-movement/stock-movement.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/stock-movement.module.ts ***!
  \************************************************************************/
/*! exports provided: StockMovementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementModule", function() { return StockMovementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/stock-movement.service */ "./src/app/layout/content/stock-movement/services/stock-movement.service.ts");
/* harmony import */ var _components_stock_movement_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stock-movement-form.component */ "./src/app/layout/content/stock-movement/components/stock-movement-form.component.ts");
/* harmony import */ var _components_stock_movement_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stock-movement-list.component */ "./src/app/layout/content/stock-movement/components/stock-movement-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _components_stock_movement_list_component__WEBPACK_IMPORTED_MODULE_6__["StockMovementListComponent"],
            },
            {
                path: "create",
                component: _components_stock_movement_form_component__WEBPACK_IMPORTED_MODULE_5__["StockMovementFormComponent"],
            },
            // //   path: "edit/:Id",
            // //   component: UnitEditFormComponent,
            // // },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var StockMovementModule = /** @class */ (function () {
    function StockMovementModule() {
    }
    StockMovementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintModule"]
            ],
            declarations: [
                _components_stock_movement_list_component__WEBPACK_IMPORTED_MODULE_6__["StockMovementListComponent"],
                _components_stock_movement_form_component__WEBPACK_IMPORTED_MODULE_5__["StockMovementFormComponent"]
                //, UnitFormComponent, UnitEditFormComponent
            ],
            providers: [
                _services_stock_movement_service__WEBPACK_IMPORTED_MODULE_4__["StockMovementService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__["ExporterService"]
            ],
            entryComponents: []
        })
    ], StockMovementModule);
    return StockMovementModule;
}());



/***/ }),

/***/ "./src/app/layout/content/stock-movement/styles/stock-movement-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/styles/stock-movement-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/stock-movement/templates/form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/templates/form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Stock Movement\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <!-- <li class=\"active\">Create</li> -->\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToStockMovementListing()\" class=\"btn-wms\"> Inventory Movement\r\n              Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelectWarehouse('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" (onSelect)=\"onSelectWarehouse($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.WarehouseId.invalid\">\r\n                  {{getErrorMessage('WarehouseId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"form-group\">\r\n                <label>SKU Details</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"itemKeyPair\" [settings]=\"itemDropdownSettings\"\r\n                  formControlName=\"ItemId\" (onDeSelect)=\"onDeSelectItem('selectedItem')\"\r\n                  (onSelect)=\"onSelectItem($event,'selectedItem')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ItemId.invalid\">\r\n                  {{getErrorMessage('ItemId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item Current Loction</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"locKeyPair\" [settings]=\"locDropdownSettings\"\r\n                  formControlName=\"LocId\" (onDeSelect)=\"onDeSelectCurrentLocaiton('selectedItemLoc')\"\r\n                  (onSelect)=\"onSelectCurrentLocaiton($event,'selectedItemLoc')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.LocId.invalid\">\r\n                  {{getErrorMessage('LocId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>SN Details</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"SnKeyPair\" [settings]=\"SnDropdownSettings\"\r\n                  formControlName=\"SnId\" (onDeSelect)=\"onDeSelectSnDetails('selectedSnDetail')\"\r\n                  (onSelect)=\"onSelectSnDetails($event,'selectedSnDetail')\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-1\">\r\n              <div class=\"form-group\">\r\n                <label>Avl.Qty</label>\r\n                <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Status</label>\r\n                <input type=\"string\" readonly formControlName=\"StatusToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n              <div class=\"form-group\">\r\n                <label>Pallet No</label>\r\n                <input type=\"string\" readonly formControlName=\"PalletNoToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n              <div class=\"form-group\">\r\n                <label>Price</label>\r\n                <input type=\"number\" readonly formControlName=\"PriceToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch Code</label>\r\n                <input type=\"string\" readonly formControlName=\"BatchCodeToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Inbound Pool</label>\r\n                <input type=\"string\" readonly formControlName=\"InboundPoolToAdd\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Date</label>\r\n                <input type=\"date\" formControlName=\"Date\" class=\"form-control\" placeholder=\"Select Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Date.invalid\">\r\n                  {{getErrorMessage('Date')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <h4>MOVE TO</h4>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Location</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"locationKeyPair\"\r\n                  [settings]=\"locationDropdownSettings\" (onDeSelect)=\"onDeSelectLoc('selectedLocation')\"\r\n                  formControlName=\"LocationId\" (onSelect)=\"onSelectLoc($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.LocationId.invalid\">\r\n                  {{getErrorMessage('LocationId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n                <input type=\"number\" formControlName=\"QtyToAdd\" class=\"form-control\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.QtyToAdd.invalid\">\r\n                  {{getErrorMessage('QtyToAdd')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group shipment-item-add\">\r\n                <button style=\"margin-top:20px\" type=\"button\" id=\"add\"\r\n                  [disabled]=\"(formGroup.controls.QtyToAdd.invalid || formGroup.controls.LocationId.invalid || formGroup.controls.Date.invalid)\"\r\n                  class=\"btn btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>Warehouse</th>\r\n                      <th>SKU Details</th>\r\n                      <th>Move From</th>\r\n                      <th>SN#</th>\r\n                      <th>PR#</th>\r\n                      <th>Move To</th>\r\n                      <th>Stock</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let Item of itemListToPost\">\r\n                      <td>{{Item.warehouseName}}</td>\r\n                      <td>{{Item.itemName}}</td>\r\n                      <td>{{Item.OldLocation}}</td>\r\n                      <td>{{Item.SNno}}</td>\r\n                      <td>{{Item.PRNo}}</td>\r\n                      <td>{{Item.NewLocation}}</td>\r\n                      <td>{{Item.MoveQuantity}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"createStockMovement()\">Add</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/stock-movement/templates/list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/stock-movement/templates/list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Stock Movement Listing\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateStockMovement()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.STOCK_MOVEMENT_LISTING]\">Stock Movement</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Transaction Date From</label>\r\n                <input type=\"date\" formControlName=\"DateFrom\" class=\"form-control\" placeholder=\"Select Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DateFrom.invalid\">\r\n                  {{getErrorMessage('DateFrom')}}\r\n                </span>\r\n              </div>\r\n            </div> \r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Transaction Date To</label>\r\n                <input type=\"date\" formControlName=\"DateTo\" class=\"form-control\" placeholder=\"Select Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DateTo.invalid\">\r\n                  {{getErrorMessage('DateTo')}}\r\n                </span>\r\n              </div>\r\n            </div> \r\n            </form>       \r\n          </div>\r\n\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                      background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.stockMovementlist, 'stock-movement-list.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('stock-movement-list.xlsx', 'tbl', 'Stock Movement List')\" style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('stock-movement-list.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('0')\" data-column=\"1\" style=\"color: white;\">\r\n                          Transaction Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          Warehouse Name\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"2\" style=\"color: white;\">\r\n                          Location From\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('3')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Location To\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"0\" style=\"color: white;\">\r\n                          SKU Code\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('5')\" data-column=\"1\" style=\"color: white;\">\r\n                          SKU Name\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('6')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Status\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('7')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          SN No.\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"1\" style=\"color: white;\">\r\n                          Batch\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('9')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Quantity Move\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th *ngIf=\"!hideShowList[0].status\">\r\n                        Transaction Date\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[1].status\">\r\n                        Warehouse Name\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[2].status\">\r\n                        Location From\r\n                      </th> \r\n                      <th *ngIf=\"!hideShowList[3].status\">\r\n                        Location To\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[4].status\">\r\n                        SKU Code\r\n                      </th> \r\n                      <th *ngIf=\"!hideShowList[5].status\">\r\n                       SKU Name\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[6].status\">\r\n                        Status\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[7].status\">\r\n                        SN No.\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[8].status\">\r\n                        Batch\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[9].status\">\r\n                        Quantity Move\r\n                      </th>\r\n                      <!-- <th>\r\n                        Action \r\n                      </th> -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let Item of stockMovementlist\">\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{Item.TransctionDate  | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[1].status\">{{Item.warehouseName}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\"> {{Item.Debit == 0 ? Item.Location : \"\"}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\"> {{Item.Credit == 0 ? Item.Location : \"\"}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\"> {{Item.ItemId}}</td>\r\n                      <td *ngIf=\"!hideShowList[5].status\"> {{Item.itemName}}</td>\r\n                      <td *ngIf=\"!hideShowList[6].status\"> {{Item.Status}}</td>\r\n                      <td *ngIf=\"!hideShowList[7].status\"> {{Item.SNno}}</td>\r\n                      <td *ngIf=\"!hideShowList[8].status\"> {{Item.BatchCode}}</td>\r\n                      <td *ngIf=\"!hideShowList[9].status\"> {{Item.Debit == 0 ? Item.Credit : Item.Debit}}</td>\r\n                        <!-- <td>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" [disabled] (click)=\"Detail(pickupOrder.PickupOrderId)\"><i\r\n                            class=\"fa fa-info\"></i></button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" [disabled] (click)=\"Edit(pickupOrder.PickupOrderId)\"><i\r\n                              class=\"fa fa-edit\"></i></button>\r\n                        </td> -->\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-stock-movement-stock-movement-module.js.map