(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-new-form-new-form-module"],{

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

/***/ "./src/app/layout/content/new-form/components/new-form-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/new-form/components/new-form-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewFormFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormFormComponent", function() { return NewFormFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_new_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/new-form.service */ "./src/app/layout/content/new-form/services/new-form.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/services/dashboard.service */ "./src/app/layout/content/dashboard/services/dashboard.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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









var NewFormFormComponent = /** @class */ (function (_super) {
    __extends(NewFormFormComponent, _super);
    function NewFormFormComponent(injector, stockMovementService, _dashboardService, exporterService) {
        var _this = _super.call(this, injector) || this;
        _this.stockMovementService = stockMovementService;
        _this._dashboardService = _dashboardService;
        _this.exporterService = exporterService;
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
    NewFormFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getWarehouseKeyPair();
    };
    NewFormFormComponent.prototype.getAvailablestock = function (warehouseId) {
        var _this = this;
        var apiAddress = this.apiConstant.DASHBOARD_AVAILABLE_STOCK;
        this._dashboardService.getData(apiAddress)
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
            //console.log(this.listAvailableStock)
            _this.itemKeyPair = itemTemDropdown;
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    NewFormFormComponent.prototype.dropdownSettings = function () {
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
    NewFormFormComponent.prototype.onSelectWarehouse = function (item, dropDownName) {
        //debugger
        this.selectedWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
        this.selectedLocation = {
            Id: item.value
        };
        this.getLocationKeyPair(item.Value);
        this.getAvailablestock(item.Value);
    };
    NewFormFormComponent.prototype.onDeSelectWarehouse = function (dropDownName) {
        this.selectedWarehouse = {};
    };
    NewFormFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    NewFormFormComponent.prototype.onSelect = function (item, dropDownName) {
        var _this = this;
        var locationArray = item.Text.split('|');
        this.selectedItemLoc = {
            Id: item.Value,
            Name: locationArray[0].replace(/\s/g, "")
        };
        this.SnKeyPair = [];
        var tempItemList = [];
        var itemTemDropdown = [];
        tempItemList = this.listAvailableStock.filter(function (x) { return x.ItemId == item.Value && x.Location == locationArray[0].replace(/\s/g, "") && x.SNno != null; });
        tempItemList.forEach(function (element) {
            itemTemDropdown.push({
                Value: element.SNno,
                Text: element.SNno + " | " + element.Balance
            });
            _this.SnKeyPair = itemTemDropdown;
        });
    };
    NewFormFormComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    NewFormFormComponent.prototype.onSelectSnDetails = function (item, dropDownName) {
        //debugger
        this.selectedSnDetail = {
            Id: item.Value,
            Name: item.Text
        };
        //this[dropDownName] = {};
    };
    NewFormFormComponent.prototype.onDeSelectSnDetails = function (dropDownName) {
        this[dropDownName] = {};
    };
    NewFormFormComponent.prototype.onSelectItem = function (item, dropDownName) {
        var _this = this;
        //debugger
        this.selectedItem = {
            Id: item.Value,
            Name: item.Text
        };
        this.locKeyPair = [];
        var tempItemList = [];
        var itemTemDropdown = [];
        tempItemList = this.listAvailableStock.filter(function (x) { return x.ItemId == item.Value; });
        tempItemList.forEach(function (element) {
            itemTemDropdown.push({
                Value: element.ItemId,
                Text: element.Location + " | " + element.Balance
            });
            itemTemDropdown = itemTemDropdown.filter(function (element, index, self) {
                return index === self.findIndex(function (x) { return ((element.Text === x.Text)); });
            });
            _this.locKeyPair = itemTemDropdown;
        });
    };
    NewFormFormComponent.prototype.onDeSelectItem = function (dropDownName) {
        if (dropDownName === 'selectedItem') {
            this.locKeyPair = [];
        }
        this.formGroup.get("LocId").setValue('');
        this.formGroup.get("SnId").setValue('');
    };
    NewFormFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
        ];
        this.addFormControlWithValidations("ItemId", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", requiredValidation);
        this.addFormControlWithValidations("LocId", requiredValidation);
        this.addFormControlWithValidations("LocationId", requiredValidation);
        this.addFormControlWithValidations("SnId", []);
        this.addFormControlWithValidations("QtyToAdd", requiredValidation);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
        // this.addFormControlWithValidations("GodownShelfId", []);
    };
    NewFormFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
      * The following method is used
      * @param {string} formElement
      * @returns {string}
      */
    NewFormFormComponent.prototype.getErrorMessage = function (formElement) {
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
    NewFormFormComponent.prototype.getLocationKeyPair = function (item) {
        var _this = this;
        //debugger
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: item,
        };
        //let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
        var apiAddress = this.apiConstant.LOCATION_BYView_BYWarehouse;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
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
            //this.locationKeyPair = ;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    NewFormFormComponent.prototype.redirectToNewFormListing = function () {
        this.router.navigate([this.routesList.NEW_FORM_LISTING]);
    };
    NewFormFormComponent.prototype.addItemIntoItemPostList = function (stockMovementFormValue) {
        //debugger
        var stockmovementObject = {
            WareHouseId: this.selectedWarehouse.Id,
            ItemInformationId: this.selectedItem.Id,
            Location: this.selectedLocation.Name,
            SNno: this.selectedSnDetail.Id,
            ReceivedQuantity: this.formGroup.get("QtyToAdd").value,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        console.log(stockmovementObject);
        this.itemListToPost.push(stockmovementObject);
        this.itemListToPost.push({
            Quantity: this.formGroup.get('QtyToAdd').value,
        });
        this.formGroup.get("QtyToAdd").setValue('');
    };
    NewFormFormComponent.prototype.onSelectLoc = function (item, dropDownName) {
        //debugger
        this.selectedLocation = {
            Id: item,
            Name: item
        };
    };
    NewFormFormComponent.prototype.createStockMovement = function (stockMovementFormValue) {
        if (this.formGroup.valid) {
            this.executeStockMovementCreation(stockMovementFormValue);
        }
    };
    NewFormFormComponent.prototype.executeStockMovementCreation = function (stockMovementFormValue) {
        debugger;
    };
    NewFormFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-new-form-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/new-form/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/new-form-form.component.scss */ "./src/app/layout/content/new-form/styles/new-form-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_new_form_service__WEBPACK_IMPORTED_MODULE_1__["NewFormService"], _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"]])
    ], NewFormFormComponent);
    return NewFormFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/new-form/components/new-form-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/new-form/components/new-form-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewFormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormListComponent", function() { return NewFormListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_new_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/new-form.service */ "./src/app/layout/content/new-form/services/new-form.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var NewFormListComponent = /** @class */ (function (_super) {
    __extends(NewFormListComponent, _super);
    function NewFormListComponent(injector, stockMovementService, router) {
        var _this = _super.call(this, injector) || this;
        _this.stockMovementService = stockMovementService;
        _this.isCustomerOrder = false;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        return _this;
    }
    NewFormListComponent.prototype.ngOnInit = function () {
        //console.log(this.router.url, "Active URL");
        this.isCustomerOrder = this.router.url.includes("customer");
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        //this.getAllPickupOrders();
    };
    NewFormListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
        ];
        this.addFormControlWithValidations("DateFrom", requiredValidation);
        this.addFormControlWithValidations("DateTo", requiredValidation);
    };
    NewFormListComponent.prototype.getErrorMessage = function (formElement) {
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
    NewFormListComponent.prototype.dropdownSettings = function () {
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
    NewFormListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this.stockMovementService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    NewFormListComponent.prototype.customerChange = function (item) {
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
        var apiAddress = this.apiConstant.PICKUP_ORDER_LIST_BY_CUSTOMER;
        this.stockMovementService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.stockMovementlist = res;
            //debugger
            //console.log(this.pickupOrderList)
            // if(this.isCustomerOrder){
            //   this.pickupOrderList = this.pickupOrderList.filter(x=> x.FormType == 'customer');
            // }else{
            //   this.pickupOrderList = this.pickupOrderList.filter(x=> x.FormType == 'transfer');
            // }
            //  Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_3__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    NewFormListComponent.prototype.getAllPickupOrders = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PICKUP_ORDER_LIST;
        this.stockMovementService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.stockMovementlist = res;
            console.log(_this.stockMovementlist);
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_3__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    NewFormListComponent.prototype.Edit = function (id) {
        var updateUrl = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_EDIT : this.routesList.PICKUP_TRANSFER_ORDER_EDIT] + ("/" + id);
        // let updateUrl: string = this.routesList.PICKUP_ORDER_EDIT+`/${id}`;
        this.router.navigate([updateUrl]);
    };
    NewFormListComponent.prototype.Detail = function (id) {
        // let updateUrl: string = this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL])+`/${id}`;
        var updateUrl = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL] + ("/" + id);
        // let updateUrl: string = this.routesList.PICKUP_ORDER_DETAIL+`/${id}`;
        this.router.navigate([updateUrl]);
    };
    NewFormListComponent.prototype.redirectToCreateNewForm = function () {
        this.router.navigate([this.routesList.NEW_FORM_CREATE]);
    };
    NewFormListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-new-form-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/new-form/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/new-form-form.component.scss */ "./src/app/layout/content/new-form/styles/new-form-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_new_form_service__WEBPACK_IMPORTED_MODULE_1__["NewFormService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], NewFormListComponent);
    return NewFormListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/new-form/new-form.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/content/new-form/new-form.module.ts ***!
  \************************************************************/
/*! exports provided: NewFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormModule", function() { return NewFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_new_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/new-form.service */ "./src/app/layout/content/new-form/services/new-form.service.ts");
/* harmony import */ var _components_new_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-form-form.component */ "./src/app/layout/content/new-form/components/new-form-form.component.ts");
/* harmony import */ var _components_new_form_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-form-list.component */ "./src/app/layout/content/new-form/components/new-form-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
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
                component: _components_new_form_list_component__WEBPACK_IMPORTED_MODULE_6__["NewFormListComponent"],
            },
            {
                path: "create",
                component: _components_new_form_form_component__WEBPACK_IMPORTED_MODULE_5__["NewFormFormComponent"],
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
var NewFormModule = /** @class */ (function () {
    function NewFormModule() {
    }
    NewFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"]
            ],
            declarations: [
                _components_new_form_list_component__WEBPACK_IMPORTED_MODULE_6__["NewFormListComponent"],
                _components_new_form_form_component__WEBPACK_IMPORTED_MODULE_5__["NewFormFormComponent"]
                //, UnitFormComponent, UnitEditFormComponent
            ],
            providers: [
                _services_new_form_service__WEBPACK_IMPORTED_MODULE_4__["NewFormService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__["ExporterService"]
            ],
            entryComponents: []
        })
    ], NewFormModule);
    return NewFormModule;
}());



/***/ }),

/***/ "./src/app/layout/content/new-form/services/new-form.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/content/new-form/services/new-form.service.ts ***!
  \**********************************************************************/
/*! exports provided: NewFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormService", function() { return NewFormService; });
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


var NewFormService = /** @class */ (function (_super) {
    __extends(NewFormService, _super);
    function NewFormService(injector) {
        return _super.call(this, injector) || this;
    }
    NewFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], NewFormService);
    return NewFormService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/new-form/styles/new-form-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/new-form/styles/new-form-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/new-form/templates/form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/new-form/templates/form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Stock Movement\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <!-- <li class=\"active\">Create</li> -->\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToNewFormListing()\" class=\"btn-wms\"> Inventory Movement Listing</button>\r\n        </div>\r\n        </div> \r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelectWarehouse('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelectWarehouse($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <!-- <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span> -->\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.WarehouseId.invalid\">\r\n                  {{getErrorMessage('WarehouseId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>SKU Details</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"itemKeyPair\"\r\n                      [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                       (onDeSelect)=\"onDeSelectItem('selectedItem')\"\r\n                      (onSelect)=\"onSelectItem($event,'selectedItem')\">\r\n                    </ng-multiselect-dropdown>\r\n\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ItemId.invalid\">\r\n                      {{getErrorMessage('ItemId')}}\r\n                    </span>\r\n                  </div>\r\n            </div>\r\n               <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Item Current Loction</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"locKeyPair\"\r\n                    [settings]=\"locDropdownSettings\" formControlName=\"LocId\"\r\n                     (onDeSelect)=\"onDeSelect('selectedItemLoc')\"\r\n                    (onSelect)=\"onSelect($event,'selectedItemLoc')\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.LocId.invalid\">\r\n                    {{getErrorMessage('LocId')}}\r\n                  </span>\r\n                </div>\r\n               </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\"> \r\n                <div class=\"form-group\">\r\n                  <label>SN Details</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select'\" [data]=\"SnKeyPair\"\r\n                [settings]=\"SnDropdownSettings\" formControlName=\"SnId\"\r\n                 (onDeSelect)=\"onDeSelectSnDetails('selectedSnDetail')\"\r\n                (onSelect)=\"onSelectSnDetails($event,'selectedSnDetail')\">\r\n               </ng-multiselect-dropdown> \r\n               </div>\r\n             </div>  \r\n              <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                      <label>Available Quantity</label>\r\n                   <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n                  </div>\r\n               </div>\r\n              <div class=\"col-md-3\">\r\n              </div> \r\n              <div class=\"col-md-2\">\r\n              </div> \r\n           </div>  \r\n\r\n        </div>\r\n\r\n      \r\n      </div>\r\n\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <h4>MOVE TO</h4>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Location</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"locationKeyPair\"\r\n                  [settings]=\"locationDropdownSettings\" (onDeSelect)=\"onDeSelectLoc('selectedLocation')\"\r\n                  formControlName=\"LocationId\" \r\n                  (onSelect)=\"onSelectLoc($event,'selectedLocation')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.LocationId.invalid\">\r\n                  {{getErrorMessage('LocationId')}}\r\n                </span>\r\n              </div>\r\n           </div>  \r\n            <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                    <label>Quantity</label>\r\n                 <input type=\"number\" formControlName=\"QtyToAdd\"  class=\"form-control\">\r\n                 <span class=\"help-block\" *ngIf=\"formGroup.controls.QtyToAdd.invalid\">\r\n                  {{getErrorMessage('QtyToAdd')}}\r\n                </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group shipment-item-add\">\r\n                <button style=\"margin-top:20px\" type=\"button\" id=\"add\" class=\"btn btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n            </div>\r\n\r\n            \r\n         </div>\r\n\r\n\r\n            <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Warehouse\r\n                      </th>\r\n                      <th>\r\n                        SKU Details\r\n                      </th>\r\n                      <!-- <th>\r\n                        Item Current Location\r\n                      </th> -->\r\n                      <th>\r\n                        SN Details\r\n                      </th>\r\n                      <th>\r\n                        Location\r\n                      </th>\r\n                      <th>\r\n                       Stock\r\n                      </th>\r\n                                 \r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let Item of itemListToPost\">\r\n      \r\n                      <td>{{Item.WareHouseId}}</td>\r\n                      <td>{{Item.ItemInformationId}}</td>                  \r\n                      <td>{{Item.SNno}}</td>\r\n                      <td>{{Item.Location}}</td>\r\n                      <td>{{Item.ReceivedQuantity}}</td>\r\n                      \r\n      \r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n             </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || itemListToPost.length <=0 || BTN===true\" class=\"btn btn-success pull-right\">Add</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/content/new-form/templates/list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/new-form/templates/list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Stock Movement Listing\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateNewForm()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.STOCK_MOVEMENT_LISTING]\">Stock Movement</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Transaction Date From</label>\r\n                <input type=\"date\" formControlName=\"DateFrom\" class=\"form-control\" placeholder=\"Select Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DateFrom.invalid\">\r\n                  {{getErrorMessage('DateFrom')}}\r\n                </span>\r\n              </div>\r\n            </div> \r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Transaction Date To</label>\r\n                <input type=\"date\" formControlName=\"DateTo\" class=\"form-control\" placeholder=\"Select Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DateTo.invalid\">\r\n                  {{getErrorMessage('DateTo')}}\r\n                </span>\r\n              </div>\r\n            </div> \r\n            </form>       \r\n          </div>\r\n\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Transaction Date\r\n                      </th>\r\n                      <th>\r\n                        Warehouse Name\r\n                      </th>\r\n                      <th>\r\n                        Location From\r\n                      </th> \r\n                      <th>\r\n                        Location To\r\n                      </th>\r\n                      <th>\r\n                        SKU Code\r\n                      </th> \r\n                      <th>\r\n                       SKU Name\r\n                      </th>\r\n                      <th>\r\n                        Status\r\n                      </th>\r\n                      <th>\r\n                        SN No.\r\n                      </th>\r\n                      <th>\r\n                        Batch\r\n                      </th>\r\n                      <th>\r\n                        Quantity Move\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let pickupOrder of pickupOrderList\">\r\n                      <td>{{pickupOrder.Name}}</td>\r\n                      <td>{{pickupOrder.OriginWarehouse}}</td>\r\n                      <td>{{pickupOrder.ContactPerson}}</td>\r\n                      <!-- <td>{{pickupOrder.Consignee}}</td> -->\r\n                      <td>{{pickupOrder.waybill}}</td>\r\n                      <td>{{pickupOrder.CustomerOrderNo}}</td>\r\n                      <td>{{pickupOrder.Method}}</td>\r\n                      <td>{{pickupOrder.OrderDate | date}}</td>\r\n                      <td>{{pickupOrder.LoadingDate | date}}</td>\r\n                      <!-- <td>{{pickupOrder.PCRNo}}</td>\r\n                      <td>{{pickupOrder.Plant}}</td> -->\r\n                      <td>{{pickupOrder.Address}}</td>\r\n                      <td>{{pickupOrder.FormType}}</td>\r\n                        <td>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Detail(pickupOrder.PickupOrderId)\"><i\r\n                            class=\"fa fa-info\"></i></button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(pickupOrder.PickupOrderId)\"><i\r\n                              class=\"fa fa-edit\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-new-form-new-form-module.js.map