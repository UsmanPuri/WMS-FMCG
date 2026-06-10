(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pickup-order-pickup-order-module"],{

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

/***/ "./src/app/layout/content/pickup-order/components/pickup-order-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/components/pickup-order-detail.component.ts ***!
  \*****************************************************************************************/
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
var pickup_order_service_1 = __webpack_require__(/*! ../services/pickup-order.service */ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var PickupOrderDetailComponent = /** @class */ (function (_super) {
    __extends(PickupOrderDetailComponent, _super);
    function PickupOrderDetailComponent(injector, _pickupOrderService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._pickupOrderService = _pickupOrderService;
        _this.activeRoute = activeRoute;
        return _this;
    }
    PickupOrderDetailComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.getById();
    };
    PickupOrderDetailComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + Id);
            this._pickupOrderService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.pickupOrder = res;
                console.log("Pickup");
                console.log(_this.pickupOrder);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    PickupOrderDetailComponent.prototype.redirectToListPickupOrder = function () {
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.PICKUP_TRANSFER_ORDER_LISTING]);
        }
        // this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
        // this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_CREATE : this.routesList.PICKUP_TRANSFER_ORDER_CREATE]);
    };
    PickupOrderDetailComponent = __decorate([
        core_1.Component({
            selector: "wms-pickup-order-detail",
            template: __webpack_require__(/*! ../templates/detail.component.html */ "./src/app/layout/content/pickup-order/templates/detail.component.html"),
            styles: [__webpack_require__(/*! ../styles/pickup-order-form.component.scss */ "./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, pickup_order_service_1.PickupOrderService,
            router_1.ActivatedRoute])
    ], PickupOrderDetailComponent);
    return PickupOrderDetailComponent;
}(base_component_1.BaseComponent));
exports.PickupOrderDetailComponent = PickupOrderDetailComponent;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/components/pickup-order-edit-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/components/pickup-order-edit-form.component.ts ***!
  \********************************************************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var pickup_order_service_1 = __webpack_require__(/*! ../services/pickup-order.service */ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var PickupOrderEditComponent = /** @class */ (function (_super) {
    __extends(PickupOrderEditComponent, _super);
    function PickupOrderEditComponent(injector, _pickupOrderService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._pickupOrderService = _pickupOrderService;
        _this.activeRoute = activeRoute;
        _this.customerDropdownSettings = {};
        _this.cityDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = {};
        _this.selectedCustomer = {};
        _this.selectedCity = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByCustomer = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        return _this;
    }
    PickupOrderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownHideShow = this.router.url.includes("customer");
        this.getWarehouseKeyPair();
        this.getCityKeyPair();
        this.getCustomerKeyPair();
        this.addFormValidations();
        this.dropdownSettings();
        this.pick = [{
                "name": "",
                "value": ""
            }];
        setTimeout(function () {
            _this.getById();
        }, 500);
    };
    PickupOrderEditComponent.prototype.getWarehouseNameFromWarehouseKeyPair = function (warehouseId) {
        var model = this.warehouseKeyPair
            .filter(function (x) { return x.Value == warehouseId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    PickupOrderEditComponent.prototype.getCustomerNameFromCustomerKeyPair = function (warehouseId) {
        var model = this.customerKeyPair
            .filter(function (x) { return x.Value == warehouseId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    PickupOrderEditComponent.prototype.getCityNameFromCityKeyPair = function (cityId) {
        var model = this.cityKeyPair
            .filter(function (x) { return x.Value == cityId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    PickupOrderEditComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + Id);
            this._pickupOrderService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.pickupOrder = res;
                console.log("Pickup");
                console.log(_this.pickupOrder);
                _this.selectedWarehouseInfo = [{
                        "Text": _this.getWarehouseNameFromWarehouseKeyPair(_this.pickupOrder.WarehouseId),
                        "Value": _this.pickupOrder.WarehouseId.toString()
                    }];
                //this.selectedWarehouse = this.pickupOrder.WarehouseId;
                _this.selectedWarehouse = {
                    Id: _this.pickupOrder.WarehouseId,
                    Name: _this.getWarehouseNameFromWarehouseKeyPair(_this.pickupOrder.WarehouseId)
                };
                _this.selectedCustomerInfo = [{
                        "Text": _this.getCustomerNameFromCustomerKeyPair(_this.pickupOrder.CustomerId),
                        "Value": _this.pickupOrder.CustomerId.toString()
                    }];
                //this.selectedCustomer = this.pickupOrder.CustomerId;
                _this.selectedCustomer = {
                    Id: _this.pickupOrder.CustomerId,
                    Name: _this.getCustomerNameFromCustomerKeyPair(_this.pickupOrder.CustomerId)
                };
                _this.selectedCityInfo = [{
                        "Text": _this.getCityNameFromCityKeyPair(_this.pickupOrder.CityId),
                        "Value": _this.pickupOrder.CityId.toString()
                    }];
                _this.selectedCity = {
                    Id: _this.pickupOrder.CityId,
                    Name: _this.getCityNameFromCityKeyPair(_this.pickupOrder.CityId)
                };
                _this.formGroup.patchValue({
                    //  WarehouseId: this.selectedWarehouseInfo,
                    //  GodwomTypeId:this.selectedGodwomTypeInfo,
                    OrderDate: _this.formatDate(_this.pickupOrder.OrderDate),
                    waybill: _this.pickupOrder.waybill,
                    CustomerOrderNo: _this.pickupOrder.CustomerOrderNo,
                    LoadingDate: _this.formatDate(_this.pickupOrder.LoadingDate),
                    ContactPerson: _this.pickupOrder.ContactPerson,
                    Address: _this.pickupOrder.Address,
                    Telephone: _this.pickupOrder.Telephone,
                });
                debugger;
                _this.pick = _this.constantList.PICKUP_METHODS.find(function (i) { return i["value"] == _this.pickupOrder.PickupMethod; });
                //  this.formGroup.get('LoadingDate').patchValue(this.formatDate(this.pickupOrder.LoadingDate));
                //this.formGroup.get('PickupMethod').setValue(this.pick["name"]);
                console.log(_this.pick["name"]);
                _this.pickupOrder.PickupOrderChilds.forEach(function (element) {
                    _this.itemListToPost.push({
                        ItemId: element.ItemId,
                        Quantity: element.Quantity,
                        Name: element.ItemName,
                        UnitId: element.UnitId,
                        Unit: element.UnitName,
                        RelOrd: element.RelOrd
                    });
                });
                _this.getItemByCustomer(_this.pickupOrder.CustomerId);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    PickupOrderEditComponent.prototype.formatDate = function (date) {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    /**
  * The following method is used to add the form validations
  */
    PickupOrderEditComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("CustomerOrderNo", requiredValidation);
        this.addFormControlWithValidations("LoadingDate", []);
        //this.addFormControlWithValidations("PCRNo", requiredValidation);
        //this.addFormControlWithValidations("IRNo", []);
        //this.addFormControlWithValidations("Plant", requiredValidation);
        //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", requiredValidation);
        this.addFormControlWithValidations("ContactPerson", []);
        // this.addFormControlWithValidations("Consignee", []);
        //this.addFormControlWithValidations("ConsigneeContact", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("CityId", []);
        //this.addFormControlWithValidations("State", []);
        //this.addFormControlWithValidations("Country", []);
        this.addFormControlWithValidations("Telephone", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupMethod", requiredValidation);
        this.addFormControlWithValidations("OrderDate", []);
        this.addFormControlWithValidations("waybill", []);
    };
    PickupOrderEditComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderEditComponent.prototype.getCityKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CITY_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.cityKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderEditComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getItemByCustomer(event.Value);
        }
    };
    PickupOrderEditComponent.prototype.getItemByCustomer = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.PICKUP_ORDER_GetItemForOrder + ("" + customerId);
        this._pickupOrderService.getData(apiAddress)
            .subscribe(function (res) {
            _this.retrivedItemListByCustomer = res;
            console.log("Item");
            console.log(_this.retrivedItemListByCustomer);
            var temp = [];
            _this.retrivedItemListByCustomer.forEach(function (element) {
                if (!temp.filter(function (x) { return x.Value === element.ItemInformationId; })[0]) {
                    temp.push({
                        Value: element.ItemInformationId,
                        Text: element.AML_ItemInformation.Description + " | " + element.AML_ItemInformation.Name,
                        ParentReferenceId: null
                    });
                }
            });
            _this.itemKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderEditComponent.prototype.cityChange = function (event) {
        this.selectedCity = {
            Id: event.Value,
            Name: event.Text
        };
    };
    PickupOrderEditComponent.prototype.itemChange = function (event) {
        this.itemTempToAddIntoItemPostList["ItemId"] = event.Value;
    };
    PickupOrderEditComponent.prototype.itemDeSelect = function () {
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
    };
    PickupOrderEditComponent.prototype.quantityChange = function (event) {
        if (Number(event.target.value) <= 0) {
            this.showToastrWarning("Invalid Quantity");
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    PickupOrderEditComponent.prototype.addItemRelOrd = function (event, itemId) {
        var model = this.itemListToPost.filter(function (x) { return x.ItemId === itemId; })[0];
        if (model) {
            model.RelOrd = event.target.value;
        }
    };
    PickupOrderEditComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        if (this.itemTempToAddIntoItemPostList && this.itemTempToAddIntoItemPostList["ItemId"] != null
            && this.itemTempToAddIntoItemPostList["Quantity"] !== '0') {
            this.itemListToPost = this.itemListToPost.filter(function (x) { return x.ItemId !== _this.itemTempToAddIntoItemPostList["ItemId"]; });
            this.itemListToPost.push({
                ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                Name: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Description"] + " | " +
                    this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Name"],
                UnitId: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"].UOM,
                Unit: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["AML_Units"]["Title"],
                RelOrd: ''
            });
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            this.itemTempToAddIntoItemPostList["ItemId"] = null;
            this.formGroup.get("QtyToAdd").setValue('');
            this.formGroup.get("ItemId").setValue('');
        }
    };
    PickupOrderEditComponent.prototype.updatePickupOrder = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedCity || !this.selectedCity["Id"]) {
                this.showToastrWarning("Select City please.");
                return false;
            }
            if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
                this.showToastrWarning("Select Warehouse please.");
                return false;
            }
            if (this.itemListToPost.length <= 0) {
                this.showToastrWarning("Add item please.");
                return false;
            }
            this.executePickupOrderUpdate(formValue);
        }
    };
    PickupOrderEditComponent.prototype.executePickupOrderUpdate = function (formValue) {
        var _this = this;
        var order = {
            LoadingDate: formValue.LoadingDate,
            PCRNo: formValue.PCRNo,
            IRNo: formValue.IRNo,
            Plant: formValue.Plant,
            // OriginWarehouse: formValue.OriginWarehouse,
            ContactPerson: formValue.ContactPerson,
            Consignee: formValue.Consignee,
            ConsigneeContact: formValue.ConsigneeContact,
            Address: formValue.Address,
            PickupMethod: formValue.PickupMethod,
            State: formValue.State,
            Country: formValue.Country,
            Telephone: formValue.Telephone,
            CustomerOrderNo: formValue.CustomerOrderNo,
            CustomerId: this.selectedCustomer["Id"],
            CityId: this.selectedCity["Id"],
            PickupOrderChilds: this.itemListToPost,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            WarehouseId: this.selectedWarehouse["Id"],
            OriginWarehouse: this.selectedWarehouse["Name"],
            waybill: formValue.waybill,
            OrderDate: formValue.OrderDate,
            PickupOrderId: this.pickupOrder.PickupOrderId,
            AML_Customers: undefined,
            AML_Warehouse: undefined
        };
        var apiUrl = this.apiConstant.PICKUP_ORDER_UPDATE + ("/" + this.pickupOrder.PickupOrderId);
        this._pickupOrderService.update(apiUrl, order)
            .subscribe(function (res) {
            _this.showToastrSuccess("Pickup order Updated Successfully");
            setTimeout(function () {
                _this.redirectToPickupOrderList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    PickupOrderEditComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    PickupOrderEditComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.cityDropdownSettings = {
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
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    PickupOrderEditComponent.prototype.getErrorMessage = function (formElement) {
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
    PickupOrderEditComponent.prototype.redirectToPickupOrderList = function () {
        // this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.PICKUP_TRANSFER_ORDER_LISTING]);
        }
    };
    PickupOrderEditComponent.prototype.onSelect = function (item, dropDownName) {
        this.selectedWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
    };
    PickupOrderEditComponent.prototype.onDeSelect = function (dropDownName) {
        this.selectedWarehouse = {};
    };
    PickupOrderEditComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: this.dropdownHideShow != true ? true : false
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderEditComponent.prototype.deleteFromitemListToPost = function (item) {
        this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
    };
    PickupOrderEditComponent = __decorate([
        core_1.Component({
            selector: "wms-pickup-order-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/pickup-order/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/pickup-order-form.component.scss */ "./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, pickup_order_service_1.PickupOrderService,
            router_1.ActivatedRoute])
    ], PickupOrderEditComponent);
    return PickupOrderEditComponent;
}(base_component_1.BaseComponent));
exports.PickupOrderEditComponent = PickupOrderEditComponent;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/components/pickup-order-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/components/pickup-order-form.component.ts ***!
  \***************************************************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var pickup_order_service_1 = __webpack_require__(/*! ../services/pickup-order.service */ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var PickupOrderFormComponent = /** @class */ (function (_super) {
    __extends(PickupOrderFormComponent, _super);
    function PickupOrderFormComponent(injector, _pickupOrderService, activeRoute, exporterService, envUrl, http, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._pickupOrderService = _pickupOrderService;
        _this.activeRoute = activeRoute;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.distributorDropdownSettings = {};
        _this.cityDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.serialDropdownSettings = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = {};
        _this.BTN = false;
        _this.SerialKeyPair = [];
        _this.selectedCustomer = {};
        _this.selectedDistributor = {};
        _this.selectedCity = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByCustomer = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.shipmentNoteChildRow = {};
        _this.shipmentNoteChilds = [];
        _this.formMode = "customer";
        _this.ToWarehouseDropdownSettings = {};
        _this.selectedToWarehouse = {};
        _this.TotalQtyDispatch = 0;
        _this.BTNStatus = false;
        return _this;
    }
    PickupOrderFormComponent.prototype.ngOnInit = function () {
        this.hideshow = false;
        this.dropdownHideShow = this.router.url.includes("customer");
        this.radioChange(this.dropdownHideShow);
        this.addFormValidations();
        this.dropdownSettings();
        this.getCityKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
        this.getWarehouseKeyPairAll();
    };
    PickupOrderFormComponent.prototype.onSelectToWarehouse = function (item, dropDownName) {
        this.selectedToWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
    };
    PickupOrderFormComponent.prototype.onDeSelectToWarehouse = function (dropDownName) {
        this.selectedToWarehouse = {};
    };
    PickupOrderFormComponent.prototype.radioChange = function (isCustomer) {
        this.formMode = isCustomer == true ? "customer" : "transfer";
        // this.dropdownHideShow =!this.dropdownHideShow 
        if (this.dropdownHideShow === true) {
            //this.dropdownHideShow=false;
            this.selectedToWarehouse = {};
        }
    };
    /**
  * The following method is used to add the form validations
  */
    PickupOrderFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("CustomerOrderNo", requiredValidation);
        this.addFormControlWithValidations("LoadingDate", []);
        this.addFormControlWithValidations("OrderDate", requiredValidation);
        //this.addFormControlWithValidations("PCRNo", requiredValidation);
        //this.addFormControlWithValidations("IRNo", []);
        //this.addFormControlWithValidations("Plant", requiredValidation);
        //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", requiredValidation);
        this.addFormControlWithValidations("ToWarehouseId");
        this.addFormControlWithValidations("ContactPerson", []);
        // this.addFormControlWithValidations("Consignee", []);
        //this.addFormControlWithValidations("ConsigneeContact", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("CityId", []);
        //this.addFormControlWithValidations("State", []);
        //this.addFormControlWithValidations("Country", []);
        this.addFormControlWithValidations("Telephone", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupMethod", requiredValidation);
        this.addFormControlWithValidations("OrderDate", []);
        this.addFormControlWithValidations("waybill", []);
        this.addFormControlWithValidations("SNno", []);
        this.addFormControlWithValidations("DestinationAddress", []);
        this.addFormControlWithValidations("ICareRef", []);
        this.addFormControlWithValidations("SlaMode", []);
    };
    PickupOrderFormComponent.prototype.PickupMethodChange = function () {
        debugger;
        this.PickupMethod = this.formGroup.get('PickupMethod').value;
        if (this.PickupMethod == "5") {
            this.hideshow = true;
        }
        else {
            this.hideshow = false;
        }
    };
    PickupOrderFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getDistributorKeyPair = function (customerId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: customerId,
        };
        var apiAddress = this.apiConstant.DISTRIBUTOR_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.distributorKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getCityKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CITY_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.cityKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getSerialKeyPair = function (param) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ItemId: param,
            WarehouseId: this.selectedWarehouse['Id'],
            PageRef: 'CreateOrder'
        };
        this.SKUCode = param;
        //let apiAddress: string = this.apiConstant.Serial_KEYPAIR;
        var apiAddress = this.apiConstant.GET_LOCATION_BATCH;
        this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.shipmentNoteChilds = res;
            var temp = [];
            _this.shipmentNoteChilds.forEach(function (element) {
                // if(!temp.filter(x=>x.Value === element.ItemInformationId)[0]){
                temp.push({
                    Value: element.SNno + ":" + element.Status + ":" + element.BatchCode + ":" + element.Balance + ":" + element.TransitQuantity + ":" + element.InboundPool,
                    Text: "Batch:" + element.BatchCode + " | Status:" + element.Status + " | SN#:" + element.SNno + " | Stock:" + element.Balance + " | In-Transit:" + element.TransitQuantity + " | InboundPool: " + element.InboundPool
                });
                // }
            });
            _this.SerialKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getSerialKeyPairSN = function (param) {
        var _this = this;
        debugger;
        this.SKUBalance = Number(param.split(":")[3]) - Number(param.split(":")[4]);
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            SNno: (param.split(":")[0]),
            ItemId: this.SKUCode,
            Batch: (param.split(":")[2]),
            Status: (param.split(":")[1]),
            WarehouseId: this.selectedWarehouse["Id"]
        };
        var apiAddress = this.apiConstant.Serial_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.shipmentNoteChilds = res;
            var temp = [];
            _this.shipmentNoteChilds.forEach(function (element) {
                temp.push({
                    Value: element.SNno,
                    Text: "Batch:" + element.BatchCode + " | Status:" + element.Status + " | SN#:" + element.SNno
                });
                var row = _this.shipmentNoteChilds.filter(function (x) { return x.SNno == element.SNno; });
                _this.shipmentNoteChildRow = row[0];
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getDistributorKeyPair(event.Value);
        }
    };
    PickupOrderFormComponent.prototype.distributorChange = function (event) {
        this.selectedDistributor = {
            Id: event.Value,
            Name: event.Text
        };
        this.BTNStatus = true;
        if (event.Value) {
            this.getDistributorKeyPairId(event.Value);
        }
    };
    PickupOrderFormComponent.prototype.DeSelectdistributorChange = function (event) {
        debugger;
        this.BTNStatus = false;
        this.formGroup.get('ContactPerson').setValue('');
        this.formGroup.get('Address').setValue('');
        this.formGroup.get('Telephone').setValue('');
    };
    PickupOrderFormComponent.prototype.getDistributorKeyPairId = function (id) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            DistId: id,
        };
        var apiAddress = this.apiConstant.DISTRIBUTOR_DETAIL;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.distributorDetail = res;
            debugger;
            _this.formGroup.get('ContactPerson').setValue(_this.distributorDetail[0].ContactPerson);
            _this.formGroup.get('Address').setValue(_this.distributorDetail[0].DistAddress + ' - ' + _this.distributorDetail[0].AML_City['Name']);
            _this.formGroup.get('Telephone').setValue(_this.distributorDetail[0].Mobile);
            _this.selectedCity["Id"] = _this.distributorDetail[0].CityId;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getItemByCustomer = function (customerId) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            CustomerId: customerId,
            WarehouseId: this.selectedWarehouse['Id']
        };
        var apiAddress = this.apiConstant.PICKUP_ORDER_GetItemForOrder;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.retrivedItemListByCustomer = res;
            console.log("Item");
            console.log(_this.retrivedItemListByCustomer);
            var temp = [];
            debugger;
            _this.retrivedItemListByCustomer.forEach(function (element) {
                if (!temp.filter(function (x) { return x.Value === element.ItemId; })[0]) {
                    temp.push({
                        Value: element.ItemId,
                        Text: element.Description + " | " + element.Name,
                        ParentReferenceId: null
                    });
                }
            });
            _this.itemKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.cityChange = function (event) {
        this.selectedCity = {
            Id: event.Value,
            Name: event.Text
        };
    };
    PickupOrderFormComponent.prototype.itemChange = function (event) {
        debugger;
        this.itemTempToAddIntoItemPostList["ItemId"] = event.Value;
        this.formGroup.get('SNno').setValue('');
        this.getSerialKeyPair(event.Value);
    };
    PickupOrderFormComponent.prototype.serialChange = function (event) {
        debugger;
        this.itemTempToAddIntoItemPostList["SNno"] = (event.Value.split(":")[0]);
        this.formGroup.get('QtyToAdd').setValue('1');
        this.itemTempToAddIntoItemPostList["Quantity"] = 1;
        this.itemTempToAddIntoItemPostList["Status"] = (event.Value.split(":")[1]);
        this.itemTempToAddIntoItemPostList["Batch"] = (event.Value.split(":")[2]);
        this.itemTempToAddIntoItemPostList["Location"] = (event.Value.split(":")[3]);
        this.itemTempToAddIntoItemPostList["PalletNo"] = (event.Value.split(":")[4]);
        this.itemTempToAddIntoItemPostList["InboundPool"] = (event.Value.split(":")[5]);
        this.LIBatch = (event.Value.split(":")[2]);
        this.LIStatus = (event.Value.split(":")[1]);
        this.LIInbound = (event.Value.split(":")[5]);
        this.getSerialKeyPairSN(event.Value);
    };
    PickupOrderFormComponent.prototype.itemDeSelect = function () {
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
        this.formGroup.get('SNno').setValue('');
        this.SerialKeyPair = null;
        this.SKUBalance = '';
        this.LIBatch = '';
        this.LIInbound = '';
        this.LIStatus = '';
    };
    PickupOrderFormComponent.prototype.serialDeSelect = function () {
        this.itemTempToAddIntoItemPostList["SNno"] = null;
        this.formGroup.get('QtyToAdd').setValue('');
        this.SKUBalance = '';
        this.LIBatch = '';
        this.LIInbound = '';
        this.LIStatus = '';
    };
    PickupOrderFormComponent.prototype.quantityChange = function (event) {
        if (Number(event.target.value) <= 0) {
            this.showToastrWarning("Invalid Quantity");
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    PickupOrderFormComponent.prototype.addItemRelOrd = function (event, itemId) {
        var model = this.itemListToPost.filter(function (x) { return x.ItemId === itemId; })[0];
        if (model) {
            model.RelOrd = event.target.value;
        }
    };
    PickupOrderFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        debugger;
        var Flag = 'False';
        this.itemListToPost.forEach(function (element) {
            if (element.SystemId === _this.itemTempToAddIntoItemPostList["ItemId"] && element.SNno === "" && element.BatchID === _this.itemTempToAddIntoItemPostList["Batch"]) {
                Flag = 'True';
                _this.showToastrWarning("Same Batch with Non-SN item already push in list");
            }
            else if (element.SystemId === _this.itemTempToAddIntoItemPostList["ItemId"] && element.SNno === _this.itemTempToAddIntoItemPostList["SNno"]) {
                if (element.SNno != "" && element.SNno != " ") {
                    Flag = 'True';
                    _this.showToastrWarning("Same SKU with SN# already push in list");
                }
            }
        });
        if (Flag != 'True') {
            if (this.formGroup.get('QtyToAdd').value == null || this.formGroup.get('QtyToAdd').value == 0) {
                this.showToastrWarning("Select Insert Valid Quantity.");
            }
            else if (this.itemTempToAddIntoItemPostList["ItemId"] != null
                || this.itemTempToAddIntoItemPostList["Quantity"] !== 0
                || this.formGroup.get('QtyToAdd') !== null) {
                // this.itemListToPost = this.itemListToPost.filter(x=>x.ItemId !== this.itemTempToAddIntoItemPostList["ItemId"] && x.SNno !== this.itemTempToAddIntoItemPostList["SNno"]);
                this.itemListToPost.push({
                    SystemId: this.itemTempToAddIntoItemPostList["ItemId"],
                    Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                    ItemSKU: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Description"],
                    Name: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Name"],
                    UnitId: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["UOM"],
                    Unit: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Title"],
                    RelOrd: '',
                    SNno: this.itemTempToAddIntoItemPostList["SNno"],
                    BatchID: this.itemTempToAddIntoItemPostList["Batch"],
                    Status: this.itemTempToAddIntoItemPostList["Status"],
                    DestinationAddress: this.formGroup.get('DestinationAddress').value,
                    ICareRef: this.formGroup.get('ICareRef').value,
                    SlaMode: this.formGroup.get('SlaMode').value,
                    InboundPool: this.itemTempToAddIntoItemPostList["InboundPool"]
                });
                this.qtyCount();
                this.itemTempToAddIntoItemPostList["Quantity"] = 0;
                this.formGroup.get("QtyToAdd").setValue('');
                this.formGroup.get("ItemId").setValue('');
                this.formGroup.get("DestinationAddress").setValue('');
                this.formGroup.get("ICareRef").setValue('');
                this.formGroup.get("SlaMode").setValue('');
                this.formGroup.get("SNno").setValue('');
                this.SKUBalance = '';
                this.LIBatch = '';
                this.LIInbound = '';
                this.LIStatus = '';
            }
        }
    };
    PickupOrderFormComponent.prototype.createPickupOrder = function (formValue) {
        debugger;
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            // if(!this.selectedCity || !this.selectedCity["Id"]){
            //   this.showToastrWarning("Select City Please.");
            //   return false;
            // }
            if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
                this.showToastrWarning("Select Warehouse Please.");
                return false;
            }
            if (!this.PickupMethod) {
                this.showToastrWarning("Select Pickup Method Please.");
                return false;
            }
            if (this.itemListToPost.length <= 0) {
                this.showToastrWarning("Add item please.");
                return false;
            }
            this.executePickupOrderCreation(formValue);
        }
    };
    PickupOrderFormComponent.prototype.executePickupOrderCreation = function (formValue) {
        var _this = this;
        var order = {
            LoadingDate: formValue.LoadingDate,
            PCRNo: formValue.PCRNo,
            IRNo: formValue.IRNo,
            Plant: formValue.Plant,
            WarehouseTo: this.selectedToWarehouse["Id"],
            ContactPerson: formValue.ContactPerson,
            Consignee: formValue.Consignee,
            ConsigneeContact: formValue.ConsigneeContact,
            Address: formValue.Address,
            PickupMethod: formValue.PickupMethod,
            State: formValue.State,
            Country: formValue.Country,
            Telephone: formValue.Telephone,
            CustomerOrderNo: formValue.CustomerOrderNo,
            CustomerId: this.selectedCustomer["Id"],
            DistId: this.selectedDistributor["Id"],
            CityId: this.selectedCity["Id"],
            PickupOrderChilds: this.itemListToPost,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            WarehouseId: this.selectedWarehouse["Id"],
            OriginWarehouse: this.selectedWarehouse["Name"],
            waybill: formValue.waybill,
            OrderDate: formValue.OrderDate,
            AML_Customers: undefined,
            AML_Warehouse: undefined
        };
        console.log(order);
        var apiUrl = this.apiConstant.PICKUP_ORDER_CREATE;
        this._pickupOrderService.create(apiUrl, order)
            .subscribe(function (res) {
            if (_this.dropdownHideShow == true) {
                _this.showToastrSuccess("Pickup order successfully");
            }
            else {
                _this.showToastrSuccess("Transfer order successfully");
            }
            setTimeout(function () {
                _this.redirectToPickupOrderList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    PickupOrderFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    PickupOrderFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.distributorDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.cityDropdownSettings = {
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
        this.serialDropdownSettings = {
            idField: 'Value',
            idField2: 'Value2',
            idField3: 'Value3',
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
        this.ToWarehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    PickupOrderFormComponent.prototype.getErrorMessage = function (formElement) {
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
    PickupOrderFormComponent.prototype.redirectToPickupOrderList = function () {
        //debugger
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.PICKUP_TRANSFER_ORDER_LISTING]);
        }
    };
    PickupOrderFormComponent.prototype.onSelect = function (item, dropDownName) {
        this.selectedWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
        this.getItemByCustomer(this.selectedCustomer['Id']);
    };
    PickupOrderFormComponent.prototype.onDeSelect = function (dropDownName) {
        this.selectedWarehouse = {};
    };
    PickupOrderFormComponent.prototype.getWarehouseKeyPairAll = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            // LoggedUserId : this.localStorageService.getUserId(),
            IsTransferOrderForm: this.dropdownHideShow != true ? true : false
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.ToWarehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: this.dropdownHideShow != true ? true : false
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderFormComponent.prototype.deleteFromitemListToPost = function (item) {
        this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
        this.qtyCount();
    };
    PickupOrderFormComponent.prototype.exportServiceAsExcel = function () {
        this.itemListToPost.push({
            SystemId: '',
            ItemSKU: '',
            Name: '',
            UnitId: '',
            Unit: '',
            Quantity: '',
            // SNno: '',
            BatchID: '',
            Status: '',
        });
        this.exporterService.exportToExcel(this.itemListToPost, 'Orders');
        this.itemListToPost = [];
    };
    PickupOrderFormComponent.prototype.qtyCount = function () {
        var _this = this;
        debugger;
        this.TotalQtyDispatch = 0;
        this.itemListToPost.forEach(function (element) {
            _this.TotalQtyDispatch += element.Quantity;
            //this.TotalWeightInbound += Quantity;
        });
    };
    PickupOrderFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        this.ngxService.start();
        var formData = new FormData();
        //formData.append('ContractId', this.selectedContract.toString());
        formData.append('CompanyId', this.localStorageService.getCompanyId());
        formData.append('CustomerId', this.selectedCustomer['Id'].toString());
        formData.append('WarehouseId', this.selectedWarehouse['Id'].toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.itemListToPost = msg;
                _this.ngxService.stop();
                _this.itemListToPost.forEach(function (element) {
                    debugger;
                    _this.qtyCount();
                    if (element.SystemId === "Invalid SKU") {
                        _this.BTN = true;
                    }
                }, function (error) {
                    _this.ngxService.stop();
                    _this.errorHandler.handleError(error);
                    _this.errorMessage = _this.errorHandler.errorMessage;
                });
            });
        }
    };
    PickupOrderFormComponent.prototype.SONODuplicateChk = function () {
        var _this = this;
        debugger;
        var SONODuplicate = this.formGroup.get('CustomerOrderNo').value;
        if (SONODuplicate != null) {
            var obj = {
                SnNo: SONODuplicate,
                CompanyId: this.localStorageService.getCompanyId(),
                BusinessUnitId: this.localStorageService.getBusinessUnitId()
            };
            var apiUrl = this.apiConstant.CHECK_DUPLICATE_SONO;
            this._pickupOrderService.create(apiUrl, obj)
                .subscribe(function (res) {
                // debugger
                var isExist = res;
                if (isExist) {
                    _this.showToastrError("Customer Order No # Already Available.");
                    _this.formGroup.get('CustomerOrderNo').setValue('');
                }
            }, (function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            }));
        }
    };
    PickupOrderFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = "/File/UploadPickupOrder";
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], PickupOrderFormComponent.prototype, "servicePicked", void 0);
    PickupOrderFormComponent = __decorate([
        core_1.Component({
            selector: "wms-pickup-order-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/pickup-order/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/pickup-order-form.component.scss */ "./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, pickup_order_service_1.PickupOrderService,
            router_1.ActivatedRoute, excel_file_service_1.ExporterService,
            environment_url_service_1.EnvironmentUrlService, http_1.HttpClient, ngx_ui_loader_1.NgxUiLoaderService])
    ], PickupOrderFormComponent);
    return PickupOrderFormComponent;
}(base_component_1.BaseComponent));
exports.PickupOrderFormComponent = PickupOrderFormComponent;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/components/pickup-order-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/components/pickup-order-list.component.ts ***!
  \***************************************************************************************/
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
var pickup_order_service_1 = __webpack_require__(/*! ../services/pickup-order.service */ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var PickupOrderListComponent = /** @class */ (function (_super) {
    __extends(PickupOrderListComponent, _super);
    function PickupOrderListComponent(injector, _pickupOrderService, router, chRef, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._pickupOrderService = _pickupOrderService;
        _this.chRef = chRef;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.hideShowList1 = [];
        _this.hideShowList2 = [];
        _this.hideShowList3 = [];
        _this.isCustomerOrder = false;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        return _this;
    }
    PickupOrderListComponent.prototype.ngOnInit = function () {
        //console.log(this.router.url, "Active URL");
        this.isCustomerOrder = this.router.url.includes("customer");
        this.addFormValidations();
        this.dropdownSettings();
        this.CompanyInfo();
        this.getCustomerKeyPair();
        //this.getAllPickupOrders();
        for (var i = 0; i < 12; i++) {
            this.hideShowList1.push({ status: false });
        }
        this.hideShowList1[0].status = false;
        this.hideShowList1[1].status = false;
        this.hideShowList1[2].status = false;
        this.hideShowList1[3].status = false;
        this.hideShowList1[4].status = false;
        this.hideShowList1[5].status = false;
        this.hideShowList1[6].status = false;
        this.hideShowList1[7].status = false;
        this.hideShowList1[8].status = false;
        this.hideShowList1[9].status = false;
        this.hideShowList1[10].status = false;
        this.hideShowList1[11].status = false;
        for (var i = 0; i < 12; i++) {
            this.hideShowList2.push({ status: false });
        }
        this.hideShowList2[0].status = false;
        this.hideShowList2[1].status = false;
        this.hideShowList2[2].status = false;
        this.hideShowList2[3].status = false;
        this.hideShowList2[4].status = false;
        this.hideShowList2[5].status = false;
        this.hideShowList2[6].status = false;
        this.hideShowList2[7].status = false;
        this.hideShowList2[8].status = false;
        this.hideShowList2[9].status = false;
        this.hideShowList2[10].status = false;
        this.hideShowList2[11].status = false;
        for (var i = 0; i < 12; i++) {
            this.hideShowList3.push({ status: false });
        }
        this.hideShowList3[0].status = false;
        this.hideShowList3[1].status = false;
        this.hideShowList3[2].status = false;
        this.hideShowList3[3].status = false;
        this.hideShowList3[4].status = false;
        this.hideShowList3[5].status = false;
        this.hideShowList3[6].status = false;
        this.hideShowList3[7].status = false;
        this.hideShowList3[8].status = false;
        this.hideShowList3[9].status = false;
        this.hideShowList3[10].status = false;
        this.hideShowList3[11].status = false;
    };
    //Excel Conversion
    PickupOrderListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    PickupOrderListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    PickupOrderListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    PickupOrderListComponent.prototype.HideShow1 = function (index) {
        var i = Number(index);
        if (this.hideShowList1[i].status) {
            this.hideShowList1[i].status = false;
        }
        else {
            this.hideShowList1[i].status = true;
        }
    };
    PickupOrderListComponent.prototype.HideShow2 = function (index) {
        var i = Number(index);
        if (this.hideShowList2[i].status) {
            this.hideShowList2[i].status = false;
        }
        else {
            this.hideShowList2[i].status = true;
        }
    };
    PickupOrderListComponent.prototype.HideShow3 = function (index) {
        var i = Number(index);
        if (this.hideShowList3[i].status) {
            this.hideShowList3[i].status = false;
        }
        else {
            this.hideShowList3[i].status = true;
        }
    };
    PickupOrderListComponent.prototype.CompanyInfo = function () {
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
    PickupOrderListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    PickupOrderListComponent.prototype.dropdownSettings = function () {
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
    PickupOrderListComponent.prototype.onDeSelect = function () {
        this.pickupOrderCompleted = [];
        this.pickupOrderPending = [];
        this.pickupOrderCancel = [];
    };
    PickupOrderListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._pickupOrderService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    PickupOrderListComponent.prototype.customerChange = function (item) {
        var _this = this;
        if (item.Value != undefined) {
            this.selectedCustomer = {
                Id: item.Value,
                Name: item.Text
            };
        }
        else {
            this.selectedCustomer = {
                Id: item.Id,
                Name: item.Name
            };
        }
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: this.selectedCustomer['Id'],
        };
        this.ngxService.start();
        var apiAddress = this.apiConstant.PICKUP_ORDER_LIST_BY_CUSTOMER;
        this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.pickupOrderList = res;
            debugger;
            //console.log(this.pickupOrderList)
            if (_this.isCustomerOrder) {
                _this.pickupOrderList = _this.pickupOrderList.filter(function (x) { return x.FormType == 'customer'; });
            }
            else {
                _this.pickupOrderList = _this.pickupOrderList.filter(function (x) { return x.FormType == 'transfer'; });
            }
            _this.idstribution();
            //  Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [100, 500, 1000],
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
    PickupOrderListComponent.prototype.idstribution = function () {
        this.pickupOrderCompleted = this.pickupOrderList.filter(function (x) { return x.StatusId === 0 && x.IsDeleted === false; });
        this.pickupOrderPending = this.pickupOrderList.filter(function (x) { return x.StatusId === 1 && x.IsDeleted === false; });
        this.pickupOrderCancel = this.pickupOrderList.filter(function (x) { return x.StatusId === 1 && x.IsDeleted === true; });
    };
    PickupOrderListComponent.prototype.getAllPickupOrders = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PICKUP_ORDER_LIST;
        this.ngxService.start();
        this._pickupOrderService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.pickupOrderList = res;
            console.log(_this.pickupOrderList);
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100,
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    PickupOrderListComponent.prototype.Edit = function (id) {
        var updateUrl = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_EDIT : this.routesList.PICKUP_TRANSFER_ORDER_EDIT] + ("/" + id);
        // let updateUrl: string = this.routesList.PICKUP_ORDER_EDIT+`/${id}`;
        this.router.navigate([updateUrl]);
    };
    PickupOrderListComponent.prototype.Detail = function (id) {
        // let updateUrl: string = this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL])+`/${id}`;
        var updateUrl = [this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_DETAIL : this.routesList.PICKUP_TRANSFER_ORDER_DETAIL] + ("/" + id);
        // let updateUrl: string = this.routesList.PICKUP_ORDER_DETAIL+`/${id}`;
        this.router.navigate([updateUrl]);
    };
    PickupOrderListComponent.prototype.delete = function (id) {
        var _this = this;
        debugger;
        //console.log(id);
        debugger;
        if (confirm("Are you sure to delete ")) {
            var apiAddress = this.apiConstant.PICKUP_ORDER_DELETE + ("/" + id);
            this._pickupOrderService.delete(apiAddress)
                .subscribe(function (res) {
                _this.deleteStatus = res;
                debugger;
                if (_this.deleteStatus == true) {
                    _this.showToastrSuccess("Pickup Sales Order Delete Successfully");
                    _this.customerChange(_this.selectedCustomer);
                }
                else {
                    _this.showToastrError("Pickup Sales Order Delete Un-Successfull");
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
            this.router.navigate([]);
        }
    };
    PickupOrderListComponent.prototype.redirectToCreatePickupOrder = function () {
        this.router.navigate([this.isCustomerOrder == true ? this.routesList.PICKUP_ORDER_CREATE : this.routesList.PICKUP_TRANSFER_ORDER_CREATE]);
    };
    PickupOrderListComponent.prototype.reportmodal = function (dispId, type) {
        var _this = this;
        debugger;
        this.ngxService.start();
        var dispatchId = dispId;
        if (dispatchId) {
            var dischId = {
                DispatchId: dispId,
            };
            // let dispatchBySKU: string = this.apiConstant.DISPATCH_DispathcDetailClipSKU;
            //     this._pickupOrderService.getKeyPair(dispatchBySKU,dischId )
            //     .subscribe(res => {
            //       debugger
            //       this.rep_SODataTemp  = res as any;
            //     },
            //     (error) => {
            //       this.ngxService.stop();
            //       this.errorHandler.handleError(error);
            //       this.errorMessage = this.errorHandler.errorMessage;
            //     })
            var dispatchByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + dispatchId);
            this._pickupOrderService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                debugger;
                _this.SOData = res;
                console.log(_this.SOData);
                _this.openModalpickup();
                _this.rep_CustomerName = _this.SOData.CustomerName;
                _this.rep_PickupId = _this.SOData.PickupOrderId;
                _this.rep_DispatchDate = _this.SOData.OrderDate;
                _this.rep_OriginWarehouse = _this.SOData.OriginWarehouse;
                _this.rep_CustomerOrderNo = _this.SOData.CustomerOrderNo;
                _this.rep_CityName = _this.SOData.CityName;
                _this.rep_LoadingDate = _this.SOData.LoadingDate;
                _this.rep_deliveryAddress = _this.SOData.Address;
                _this.rep_DistCode = _this.SOData.DistCode;
                _this.rep_DistAddress = _this.SOData.DistAddress;
                _this.rep_DistName = _this.SOData.DistName;
                _this.rep_SOData = _this.SOData.PickupOrderChilds;
                _this.rep_DriverName = _this.SOData.DriverName;
                _this.rep_PhoneNumber = _this.SOData.PhoneNumber;
                _this.rep_VehicleNo = _this.SOData.VehicleNo;
                _this.TotalQty = 0;
                _this.TotalQtyInPacking = 0;
                _this.rep_SOData.forEach(function (element) {
                    _this.TotalQty = element.Quantity + _this.TotalQty;
                    // this.TotalQtyInPacking = (element.Quantity * element.AML_ItemInformation.QuantityInPacking) + this.TotalQtyInPacking;
                });
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    PickupOrderListComponent.prototype.openModalpickup = function () {
        debugger;
        this.modalRef = this.modalService.open(this.AllModalpickup, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: true,
            backdrop: true,
            animation: true,
            keyboard: true,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-lg'
        });
    };
    __decorate([
        core_1.ViewChild('AllModalpickup'),
        __metadata("design:type", Object)
    ], PickupOrderListComponent.prototype, "AllModalpickup", void 0);
    PickupOrderListComponent = __decorate([
        core_1.Component({
            selector: "wms-pickup-order-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/pickup-order/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/pickup-order-form.component.scss */ "./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, pickup_order_service_1.PickupOrderService, router_1.Router, core_1.ChangeDetectorRef,
            ngb_modal_1.ModalManager, ngx_ui_loader_1.NgxUiLoaderService])
    ], PickupOrderListComponent);
    return PickupOrderListComponent;
}(base_component_1.BaseComponent));
exports.PickupOrderListComponent = PickupOrderListComponent;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/pickup-order.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/pickup-order.module.ts ***!
  \********************************************************************/
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
var pickup_order_service_1 = __webpack_require__(/*! ./services/pickup-order.service */ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts");
var pickup_order_form_component_1 = __webpack_require__(/*! ./components/pickup-order-form.component */ "./src/app/layout/content/pickup-order/components/pickup-order-form.component.ts");
var pickup_order_list_component_1 = __webpack_require__(/*! ./components/pickup-order-list.component */ "./src/app/layout/content/pickup-order/components/pickup-order-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var pickup_order_detail_component_1 = __webpack_require__(/*! ./components/pickup-order-detail.component */ "./src/app/layout/content/pickup-order/components/pickup-order-detail.component.ts");
var pickup_order_edit_form_component_1 = __webpack_require__(/*! ./components/pickup-order-edit-form.component */ "./src/app/layout/content/pickup-order/components/pickup-order-edit-form.component.ts");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: pickup_order_list_component_1.PickupOrderListComponent,
            },
            {
                path: "create",
                component: pickup_order_form_component_1.PickupOrderFormComponent,
            },
            {
                path: "edit/:Id",
                component: pickup_order_edit_form_component_1.PickupOrderEditComponent,
            },
            {
                path: "detail/:Id",
                component: pickup_order_detail_component_1.PickupOrderDetailComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var PickupOrderModule = /** @class */ (function () {
    function PickupOrderModule() {
    }
    PickupOrderModule = __decorate([
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
                pickup_order_form_component_1.PickupOrderFormComponent, pickup_order_list_component_1.PickupOrderListComponent,
                pickup_order_detail_component_1.PickupOrderDetailComponent, pickup_order_edit_form_component_1.PickupOrderEditComponent
            ],
            providers: [
                pickup_order_service_1.PickupOrderService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], PickupOrderModule);
    return PickupOrderModule;
}());
exports.PickupOrderModule = PickupOrderModule;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/services/pickup-order.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/services/pickup-order.service.ts ***!
  \******************************************************************************/
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
var PickupOrderService = /** @class */ (function (_super) {
    __extends(PickupOrderService, _super);
    function PickupOrderService(injector) {
        return _super.call(this, injector) || this;
    }
    PickupOrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], PickupOrderService);
    return PickupOrderService;
}(repository_service_1.RepositoryService));
exports.PickupOrderService = PickupOrderService;


/***/ }),

/***/ "./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/styles/pickup-order-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}\n"

/***/ }),

/***/ "./src/app/layout/content/pickup-order/templates/detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/templates/detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER DETAILS\r\n      <!-- Customer Order Detail -->\r\n      <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.PICKUP_ORDER_LISTING]\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Order </a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n          \r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToListPickupOrder()\" class=\"btn-wms\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Order Listing\r\n              </button>\r\n            </div>\r\n            <h3>  {{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Order Details\r\n\r\n            </h3>\r\n          </div>\r\n      \r\n          <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n         \r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n           \r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Customer</b><a class=\"pull-right\">{{pickupOrder.CustomerName}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Customer Order No</b><a class=\"pull-right\">{{pickupOrder.CustomerOrderNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Way Bill</b><a class=\"pull-right\">{{pickupOrder.waybill}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Order Date</b><a class=\"pull-right\">{{pickupOrder.OrderDate | date}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Loading Date</b><a class=\"pull-right\">{{pickupOrder.LoadingDate | date}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                          <b>PickupMethod</b><a class=\"pull-right\"> \r\n                            <p *ngIf=\"pickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"pickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"pickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"pickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"pickupOrder.PickupMethod==5\">Custom</p></a>\r\n                      </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Warehouse</b><a class=\"pull-right\">{{pickupOrder.WarehouseName}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Contact Person</b><a class=\"pull-right\">{{pickupOrder.ContactPerson }}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Telephone</b><a class=\"pull-right\">{{pickupOrder.Telephone}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>City</b><a class=\"pull-right\">{{pickupOrder.CityName}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Address</b><a class=\"pull-right\">{{pickupOrder.Address}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n            \r\n           \r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                         <th>\r\n                          System Id \r\n                        </th> \r\n                        <th>\r\n                          System Name\r\n                        </th>\r\n                        <th>\r\n                            Unit\r\n                          </th>\r\n                        <th>\r\n                           Quantity\r\n                        </th>\r\n                        <th>\r\n                            Remarks / Instruction\r\n                         </th>\r\n                       \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of pickupOrder.PickupOrderChilds\">\r\n                         <td>{{item.ItemId}}</td>\r\n                        <td>{{item.ItemName}}</td>\r\n                        <td>{{item.UnitName}}</td>\r\n                        <td>{{item.Quantity}}</td>                                          \r\n                        <td>{{item.RelOrd}}</td>\r\n                   \r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n           \r\n          </div>\r\n        </form>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/pickup-order/templates/edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/templates/edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER {{dropdownHideShow == true ? '/ SALES ORDER EDIT' : 'EDIT'}}\r\n      <!-- CUSTOMER ORDER / SALES ORDER EDIT -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.PICKUP_ORDER_LISTING]\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Order</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n      <div col-md-12>\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updatePickupOrder(formGroup.value)\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"form-group  pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToPickupOrderList()\" class=\"btn-wms\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Order Listing</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Customer</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                         [settings]=\"customerDropdownSettings\"\r\n                         formControlName=\"CustomerId\"\r\n                          (onSelect)=\"customerChange($event)\"\r\n                          [(ngModel)]=\"selectedCustomerInfo\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                          It is required\r\n                        </span>\r\n                      </div>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Warehouse</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                      [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                      formControlName=\"WarehouseId\" \r\n                      (onSelect)=\"onSelect($event,'selectedWarehouse')\"\r\n                      [(ngModel)]=\"selectedWarehouseInfo\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                      Required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              \r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Order Date</label>\r\n                    <input type=\"date\" formControlName=\"OrderDate\" class=\"form-control\" placeholder=\"Select OrderDate\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.OrderDate.invalid\">\r\n                      {{getErrorMessage('OrderDate')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>PCR No</label>\r\n                    <input type=\"text\" formControlName=\"PCRNo\" class=\"form-control\" placeholder=\"Enter PCR No\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.PCRNo.invalid\">\r\n                      {{getErrorMessage('PCRNo')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Plant</label>\r\n                    <input type=\"text\" formControlName=\"Plant\" class=\"form-control\" placeholder=\"Enter Plant\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Plant.invalid\">\r\n                      {{getErrorMessage('Plant')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Origin Warehouse</label>\r\n                    <input type=\"text\" formControlName=\"OriginWarehouse\" class=\"form-control\" placeholder=\"Enter Origin Warehouse\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.OriginWarehouse.invalid\">\r\n                      {{getErrorMessage('OriginWarehouse')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Waybill/DN</label>\r\n                    <input type=\"text\" formControlName=\"waybill\" class=\"form-control\" placeholder=\"Enter Waybill/DN\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.waybill.invalid\">\r\n                      {{getErrorMessage('waybill')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Customer Order No</label>\r\n                    <input type=\"text\" formControlName=\"CustomerOrderNo\" value=\"Pakistan\" class=\"form-control\" placeholder=\"Enter Customer Order No\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.CustomerOrderNo.invalid\">\r\n                      {{getErrorMessage('CustomerOrderNo')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Loading Date</label>\r\n                    <input type=\"date\" formControlName=\"LoadingDate\" class=\"form-control\" placeholder=\"Select Loading Date\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.LoadingDate.invalid\">\r\n                      {{getErrorMessage('LoadingDate')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n  \r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Consignee</label>\r\n                    <input type=\"text\" formControlName=\"Consignee\" class=\"form-control\" placeholder=\"Enter Consignee\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Consignee.invalid\">\r\n                      {{getErrorMessage('Consignee')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              \r\n  \r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n                \r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Contact Person</label>\r\n                    <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control\" placeholder=\"Enter Contact Person\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                      {{getErrorMessage('ContactPerson')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Delivery Address</label>\r\n                    <input type=\"text\" formControlName=\"Address\"  class=\"form-control\" placeholder=\"Enter Address\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                      {{getErrorMessage('Address')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>City</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"cityKeyPair\" \r\n                    [settings]=\"cityDropdownSettings\"\r\n                    formControlName=\"CityId\"\r\n                      (onSelect)=\"cityChange($event)\"\r\n                      [(ngModel)]=\"selectedCityInfo\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedCity || !this.selectedCity['Id']\">\r\n                      It is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Consignee Contact</label>\r\n                    <input type=\"text\" formControlName=\"ConsigneeContact\" class=\"form-control\" placeholder=\"Enter Consignee Contact\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ConsigneeContact.invalid\">\r\n                      {{getErrorMessage('ConsigneeContact')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n               \r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>State</label>\r\n                    <input type=\"text\" formControlName=\"State\" class=\"form-control\" placeholder=\"Enter State\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.State.invalid\">\r\n                      {{getErrorMessage('State')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Country</label>\r\n                    <input type=\"text\" formControlName=\"Country\" value=\"Pakistan\" class=\"form-control\" placeholder=\"Enter Country\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Country.invalid\">\r\n                      {{getErrorMessage('Country')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              \r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Telephone</label>\r\n                    <input type=\"text\" formControlName=\"Telephone\" class=\"form-control\" placeholder=\"Enter Telephone\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Telephone.invalid\">\r\n                      {{getErrorMessage('Telephone')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Pickup Method</label>\r\n                    <select class=\"form-control\" formControlName=\"PickupMethod\">\r\n                      <option *ngFor=\"let c of constantList.PICKUP_METHODS\" [ngValue]=\"c.value\">{{ c.name }}</option>\r\n                    </select>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.PickupMethod.invalid\">\r\n                      {{getErrorMessage('PickupMethod')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label></label>\r\n                  <p>{{pick.name}}</p>\r\n                </div>\r\n              \r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n                \r\n               \r\n             \r\n              \r\n              </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header with-border\">\r\n                  <div class=\"form-group\">\r\n                      <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>SKU</label>\r\n                                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                                  [settings]=\"itemDropdownSettings\"\r\n                                   formControlName=\"ItemId\"\r\n                                   (onDeSelect)=\"itemDeSelect()\"\r\n                                  (onSelect)=\"itemChange($event)\">\r\n                                </ng-multiselect-dropdown>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>Quantity</label>\r\n                           <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group shipment-item-add\">\r\n                            <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                              Add SKU\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-sm-12 table-responsive\">\r\n                                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                                  <thead>\r\n                                    <tr role=\"row\">\r\n                                      <th>SKU ID</th>\r\n                                      <th>SKU Name</th>\r\n                                      <th>Unit</th>\r\n                                      <th>Quantity</th>\r\n                                      <th>Remarks / Instructions</th>\r\n                                      <th>Action</th>\r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr role=\"row\" *ngFor=\"let item of itemListToPost\">\r\n                                      <td>{{item.ItemId}}</td>\r\n                                      <td>{{item.Name}}</td>\r\n                                      <td>{{item.Unit}}</td>\r\n                                      <td>{{item.Quantity}}</td>\r\n                                      <td><input type=\"text\" class=\"form-control\" value=\"{{item.RelOrd}}\" (blur)=\"addItemRelOrd($event,item.ItemId)\"></td>\r\n                                      <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                          (click)=\"deleteFromitemListToPost(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                                      </td> \r\n                                    </tr>\r\n                                  </tbody>  \r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                     \r\n                </div>\r\n              </div>\r\n  \r\n            <div class=\"box-footer\">\r\n                <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n  "

/***/ }),

/***/ "./src/app/layout/content/pickup-order/templates/form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/templates/form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n    color: red;\r\n  }\r\n</style>\r\n<section class=\"content-header\">\r\n  <h1>\r\n    {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER {{dropdownHideShow == true ? '/ SALES ORDER' : ''}}\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a\r\n        routerLink=\"[dropdownHideShow == true ? this.routesList.PICKUP_ORDER_LISTING : this.routesList.PICKUP_TRANSFER_ORDER_LISTING]\">{{dropdownHideShow\r\n        == true ? 'Customer' : 'Transfer'}} orders</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToPickupOrderList()\" class=\"btn-wms\">{{dropdownHideShow == true ?\r\n              'Customer' : 'Transfer'}} Order Listing</button>\r\n          </div>\r\n          <!-- <div class=\"form-group pull-left\">\r\n              &nbsp; <input type=\"radio\"   checked=\"true\"  (change)=\"radioChange($event)\"  name=\"formMode\">&nbsp;\r\n              Customer Oder&nbsp; <input type=\"radio\"  (change)=\"radioChange($event)\"  name=\"formMode\" >&nbsp; Transfer Order\r\n            </div> -->\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- there -->\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Pickup Method</label>\r\n                <select class=\"form-control\" formControlName=\"PickupMethod\" (change)=\"PickupMethodChange()\">\r\n                  <option *ngFor=\"let c of constantList.PICKUP_METHODS\" [ngValue]=\"c.value\">{{ c.name }}</option>\r\n                </select>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.PickupMethod.invalid\">\r\n                  {{getErrorMessage('PickupMethod')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label [hidden]=\"!dropdownHideShow\">Warehouse</label> <label [hidden]=\"dropdownHideShow\">Warehouse\r\n                  From</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>{{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER # / DN #</label>\r\n                <input type=\"text\" formControlName=\"CustomerOrderNo\" value=\"Pakistan\" class=\"form-control\"\r\n                  placeholder=\"{{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} Order No\"\r\n                  (blur)=\"SONODuplicateChk()\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CustomerOrderNo.invalid\">\r\n                  {{getErrorMessage('CustomerOrderNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            \r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Order Date</label>\r\n                <input type=\"date\" formControlName=\"OrderDate\" class=\"form-control\" placeholder=\"Select OrderDate\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.OrderDate.invalid\">\r\n                  {{getErrorMessage('OrderDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Bilty#</label>\r\n                <input type=\"text\" formControlName=\"waybill\" class=\"form-control\" placeholder=\"Enter Waybill/DN\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.waybill.invalid\">\r\n                  {{getErrorMessage('waybill')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Loading Date</label>\r\n                <input type=\"date\" formControlName=\"LoadingDate\" class=\"form-control\" placeholder=\"Select Loading Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.LoadingDate.invalid\">\r\n                  {{getErrorMessage('LoadingDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Distributor</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"distributorKeyPair\"\r\n                  [settings]=\"distributorDropdownSettings\" (onSelect)=\"distributorChange($event)\"\r\n                  (onDeSelect)=\"DeSelectdistributorChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedDistributor || !this.selectedDistributor['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>City</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"cityKeyPair\"\r\n                  [settings]=\"cityDropdownSettings\" (onSelect)=\"cityChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <!-- <span class=\"help-block\" *ngIf=\"!this.selectedCity || !this.selectedCity['Id']\">\r\n                    Required\r\n                  </span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Contact Person</label>\r\n                <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control\"\r\n                  placeholder=\"Enter Contact Person\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                  {{getErrorMessage('ContactPerson')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Delivery Address</label>\r\n                <input type=\"text\" formControlName=\"Address\" class=\"form-control\" placeholder=\"Enter Address\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                  {{getErrorMessage('Address')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Telephone</label>\r\n                <input type=\"text\" formControlName=\"Telephone\" class=\"form-control\" placeholder=\"Enter Telephone\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Telephone.invalid\">\r\n                  {{getErrorMessage('Telephone')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\" [hidden]=\"dropdownHideShow\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse To</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"ToWarehouseKeyPair\"\r\n                  [settings]=\"ToWarehouseDropdownSettings\" (onDeSelect)=\"onDeSelectToWarehouse('selectedToWarehouse')\"\r\n                  formControlName=\"ToWarehouseId\" (onSelect)=\"onSelectToWarehouse($event,'selectedToWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <!-- <span class=\"help-block\" *ngIf=\"!this.selectedToWarehouse || !this.selectedToWarehouse['Id']\">\r\n                    Required\r\n                  </span> -->\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKU Detail</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>SKU</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                    [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\" (onDeSelect)=\"itemDeSelect()\"\r\n                    (onSelect)=\"itemChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Quantity</label>\r\n                  <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group shipment-item-add\">\r\n                  <button type=\"button\" ng-disabled=\"\" id=\"add\" class=\"btn btn-sm btn-excel\" style=\"padding: 10px;\"\r\n                    (click)=\"addItemIntoItemPostList()\">\r\n                    Add to List\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>System ID</th>\r\n                        <th>Item SKU</th>\r\n                        <th>SKU Name</th>\r\n                        <th>Unit</th>\r\n                        <th>Quantity</th>\r\n                        <!-- <th>SNno</th>\r\n                        <th>BatchID</th> -->\r\n                        <!-- <th>Status</th> -->\r\n                        <!-- <th>Dest.Address</th>\r\n                                    <th>ICareRef</th>\r\n                                    <th>SlaMode</th>\r\n                                    <th>InboundPool</th> -->\r\n                        <!-- <th>Remarks / Instructions</th> -->\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of itemListToPost\"\r\n                        [ngClass]=\"{ 'border_bottom': item.SystemId==='Invalid SKU' || item.SNno=== 'Invalid SN' || item.SNno=== 'SN Duplicate'}\">\r\n                        <td>{{item.SystemId}}</td>\r\n                        <td>{{item.ItemSKU}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Unit}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <!-- <td>{{item.SNno}}</td>\r\n                        <td>{{item.BatchID}}</td> -->\r\n                        <!-- <td>{{item.Status}}</td> -->\r\n                        <!-- <td>{{item.DestinationAddress}}</td>\r\n                                    <td>{{item.ICareRef}}</td>\r\n                                    <td>{{item.SlaMode}}</td>\r\n                                    <td>{{item.InboundPool}}</td> -->\r\n\r\n                        <!-- <td><input type=\"text\" value=\"{{item.RelOrd}}\" class=\"form-control\" (blur)=\"addItemRelOrd($event,item.ItemId)\"></td> -->\r\n                        <td>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                            (click)=\"deleteFromitemListToPost(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"3\"></td>\r\n                        <td>TOTAL</td>\r\n                        <td>{{TotalQtyDispatch}}</td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <ngx-ui-loader></ngx-ui-loader>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <input type=\"file\" id=\"servicePicked\" #servicePicked [disabled]=\"formGroup.invalid\"\r\n              (click)=\"message='TESTING'\" (change)=\"onServicePicked(servicePicked)\">\r\n          </div>\r\n          <button type=\"button\" [disabled]=\"formGroup.invalid || itemListToPost.length ==0 || BTN===true || BTNStatus===false\"\r\n            class=\"btn btn-success pull-right\" (click)=\"createPickupOrder(formGroup.value)\"> S U B M I T </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/pickup-order/templates/list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/pickup-order/templates/list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{isCustomerOrder == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER LISTING\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreatePickupOrder()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a\r\n        routerLink=\"[isCustomerOrder == true ? this.routesList.PICKUP_ORDER_LISTING : this.routesList.PICKUP_TRANSFER_ORDER_LISTING]\">{{isCustomerOrder\r\n        == true ? 'Customer' : 'Transfer'}} Order</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <ul class=\"nav nav-tabs\">\r\n                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Pending</a></li>\r\n                  <li><a data-toggle=\"tab\" href=\"#executed\">Executed</a></li>\r\n                  <li><a data-toggle=\"tab\" href=\"#cancel\">Cancel</a></li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                  <div id=\"home\" class=\"tab-pane fade in active\">\r\n                    <h3>Pending</h3>\r\n                    <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 table-responsive\" id=\"myTable1\">\r\n                          <nav>\r\n                            <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                                background-color: #6c757d;\">\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"downloadCSV(this.pickupOrderPending, 'pickup-order-pending-list.csv')\"\r\n                                  style=\"color: white;\">\r\n                                  Download CSV</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"exportExcel('pickup-order-pending-list.xlsx', 'tbl1', 'Pickup Order Pending List')\"\r\n                                  style=\"color: white;\">\r\n                                  Download Excel</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"createPdf('pickup-order-pending-list.pdf', '#tbl1')\"\r\n                                  style=\"color: white;\">Export To PDF</a>\r\n                              </li>\r\n                              <li>\r\n                                <button\r\n                                  [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                  class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\"\r\n                                  [useExistingCss]=\"true\" ngxPrint printSectionId=\"myTable1\">\r\n                                  Print\r\n                                </button>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item dropdown\">\r\n                                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                                  Column Hidden\r\n                                </a>\r\n                                <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                                    width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('0')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Sr #\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('1')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Customer\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('2')\" data-column=\"2\"\r\n                                    style=\"color: white;\">\r\n                                    Warehouse\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('3')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Contact Person\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('4')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Waybill/DN\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('5')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Customer Order No\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('6')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Pickup Method\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('7')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Order Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('8')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Loaded Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('9')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Address\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('10')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Type\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow1('11')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Action\r\n                                  </a>\r\n                                </div>\r\n                              </li>\r\n                            </ol>\r\n                          </nav>\r\n                          <table class=\"table table-bordered tabl-hover dataTable\" role=\"grid\" id=\"tbl1\">\r\n                            <thead>\r\n                              <tr role=\"row\">\r\n                                <th *ngIf=\"!hideShowList1[0].status\">Sr#</th>\r\n                                <th *ngIf=\"!hideShowList1[1].status\">Customer</th>\r\n                                <th *ngIf=\"!hideShowList1[2].status\">Warehouse</th>\r\n                                <th *ngIf=\"!hideShowList1[3].status\">ContactPerson</th>\r\n                                <th *ngIf=\"!hideShowList1[4].status\">Waybill/DN</th>\r\n                                <th *ngIf=\"!hideShowList1[5].status\">Customer Order No</th>\r\n                                <th *ngIf=\"!hideShowList1[6].status\">PickUp Method</th>\r\n                                <th *ngIf=\"!hideShowList1[7].status\">Order Date</th>\r\n                                <th *ngIf=\"!hideShowList1[8].status\">Loaded Date</th>\r\n                                <th *ngIf=\"!hideShowList1[9].status\">Address</th>\r\n                                <th *ngIf=\"!hideShowList1[10].status\">Type</th>\r\n                                <th *ngIf=\"!hideShowList1[11].status\">Action</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr role=\"row\" *ngFor=\"let pickupOrder of pickupOrderPending; let i = index\">\r\n                                <td *ngIf=\"!hideShowList1[0].status\">{{i+1}}</td>\r\n                                <td *ngIf=\"!hideShowList1[1].status\">{{pickupOrder.Name}}</td>\r\n                                <td *ngIf=\"!hideShowList1[2].status\">{{pickupOrder.OriginWarehouse}}</td>\r\n                                <td *ngIf=\"!hideShowList1[3].status\">{{pickupOrder.ContactPerson}}</td>\r\n                                <!-- <td>{{pickupOrder.Consignee}}</td> -->\r\n                                <td *ngIf=\"!hideShowList1[4].status\">{{pickupOrder.waybill}}</td>\r\n                                <td *ngIf=\"!hideShowList1[5].status\">{{pickupOrder.CustomerOrderNo}}</td>\r\n                                <td *ngIf=\"!hideShowList1[6].status\">{{pickupOrder.Method}}</td>\r\n                                <td *ngIf=\"!hideShowList1[7].status\">{{pickupOrder.OrderDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList1[8].status\">{{pickupOrder.LoadingDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList1[9].status\">{{pickupOrder.Address}}</td>\r\n                                <td *ngIf=\"!hideShowList1[10].status\">{{pickupOrder.FormType}}</td>\r\n                                <td *ngIf=\"!hideShowList1[11].status\">\r\n                                  <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                                    (click)=\"Detail(pickupOrder.PickupOrderId)\"><i class=\"fa fa-info\"></i></button> -->\r\n                                  <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" data-toggle=\"tooltip\"\r\n                                    data-placement=\"bottom\" title=\"Edit Order\"\r\n                                    (click)=\"Edit(pickupOrder.PickupOrderId)\"><i class=\"fa fa-edit\"></i></button>\r\n                                  <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                                    data-placement=\"bottom\" title=\"Cancel Sales Order\"\r\n                                    (click)=\"delete(pickupOrder.PickupOrderId)\">\r\n                                    <i class=\"fa fa-times-circle-o\"></i>\r\n                                  </button>\r\n                                  <button type=\"button\" id=\"report\" title=\"Print Dispatched Order\" class=\"editBtn btn-danger\"\r\n                                    (click)=\"reportmodal(pickupOrder.PickupOrderId, 'pickup')\">\r\n                                    <i style=\"font-size:14px !important\" class=\"fa fa-file\"></i>\r\n                                  </button>\r\n\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div id=\"executed\" class=\"tab-pane fade\">\r\n                    <h3>Executed</h3>\r\n                    <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 table-responsive\" id=\"myTable2\">\r\n                          <nav>\r\n                            <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                                background-color: #6c757d;\">\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"downloadCSV(this.pickupOrderCompleted, 'pickup-order-completed-list.csv')\"\r\n                                  style=\"color: white;\">\r\n                                  Download CSV</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"exportExcel('pickup-order-completed-list.xlsx', 'tbl2', 'Pickup Order Completed List')\"\r\n                                  style=\"color: white;\">\r\n                                  Download Excel</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"createPdf('pickup-order-completed-list.pdf', '#tbl2')\"\r\n                                  style=\"color: white;\">Export To PDF</a>\r\n                              </li>\r\n                              <li>\r\n                                <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                  class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\"\r\n                                  [useExistingCss]=\"true\" ngxPrint printSectionId=\"myTable2\">\r\n                                  Print\r\n                                </button>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item dropdown\">\r\n                                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                                  Column Hidden\r\n                                </a>\r\n                                <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                                    width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('0')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Sr #\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('1')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Customer\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('2')\" data-column=\"2\"\r\n                                    style=\"color: white;\">\r\n                                    Warehouse\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('3')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Contact Person\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('4')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Waybill/DN\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('5')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Customer Order No\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('6')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Pickup Method\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('7')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Order Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('8')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Loaded Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('9')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Address\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('10')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Type\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow2('11')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Action\r\n                                  </a>\r\n                                </div>\r\n                              </li>\r\n                            </ol>\r\n                          </nav>\r\n                          <table class=\"table table-bordered tabl-hover dataTable\" role=\"grid\" id=\"tbl2\">\r\n                            <thead>\r\n                              <tr role=\"row\">\r\n                                <th *ngIf=\"!hideShowList2[0].status\">Sr#</th>\r\n                                <th *ngIf=\"!hideShowList2[1].status\">Customer</th>\r\n                                <th *ngIf=\"!hideShowList2[2].status\">Warehouse</th>\r\n                                <th *ngIf=\"!hideShowList2[3].status\">ContactPerson</th>\r\n                                <th *ngIf=\"!hideShowList2[4].status\">Waybill/DN</th>\r\n                                <th *ngIf=\"!hideShowList2[5].status\">Customer Order No</th>\r\n                                <th *ngIf=\"!hideShowList2[6].status\">PickUp Method</th>\r\n                                <th *ngIf=\"!hideShowList2[7].status\">Order Date</th>\r\n                                <th *ngIf=\"!hideShowList2[8].status\">Loaded Date</th>\r\n                                <th *ngIf=\"!hideShowList2[9].status\">Address</th>\r\n                                <th *ngIf=\"!hideShowList2[10].status\">Type</th>\r\n                                <th *ngIf=\"!hideShowList2[11].status\">Action</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr role=\"row\" *ngFor=\"let pickupOrder of pickupOrderCompleted; let i = index\">\r\n                                <td *ngIf=\"!hideShowList2[0].status\">{{i+1}}</td>\r\n                                <td *ngIf=\"!hideShowList2[1].status\">{{pickupOrder.Name}}</td>\r\n                                <td *ngIf=\"!hideShowList2[2].status\">{{pickupOrder.OriginWarehouse}}</td>\r\n                                <td *ngIf=\"!hideShowList2[3].status\">{{pickupOrder.ContactPerson}}</td>\r\n                                <!-- <td>{{pickupOrder.Consignee}}</td> -->\r\n                                <td *ngIf=\"!hideShowList2[4].status\">{{pickupOrder.waybill}}</td>\r\n                                <td *ngIf=\"!hideShowList2[5].status\">{{pickupOrder.CustomerOrderNo}}</td>\r\n                                <td *ngIf=\"!hideShowList2[6].status\">{{pickupOrder.Method}}</td>\r\n                                <td *ngIf=\"!hideShowList2[7].status\">{{pickupOrder.OrderDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList2[8].status\">{{pickupOrder.LoadingDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList2[9].status\">{{pickupOrder.Address}}</td>\r\n                                <td *ngIf=\"!hideShowList2[10].status\">{{pickupOrder.FormType}}</td>\r\n                                <td *ngIf=\"!hideShowList2[11].status\">\r\n                                  <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                                    (click)=\"Detail(pickupOrder.PickupOrderId)\"><i class=\"fa fa-info\"></i></button>\r\n                                  <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                                    (click)=\"Edit(pickupOrder.PickupOrderId)\"><i class=\"fa fa-edit\"></i></button> -->\r\n                                    <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                                    data-placement=\"bottom\" title=\"Delete Sales Order\"\r\n                                    (click)=\"delete(pickupOrder.PickupOrderId)\">\r\n                                    <i class=\"fa fa-times-circle-o\"></i>\r\n                                  </button>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div id=\"cancel\" class=\"tab-pane fade\">\r\n                    <h3>Cancel</h3>\r\n                    <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 table-responsive\" id=\"myTable3\">\r\n                          <nav>\r\n                            <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                                background-color: #6c757d;\">\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"downloadCSV(this.pickupOrderCancel, 'pickup-order-cancelled-list.csv')\"\r\n                                  style=\"color: white;\">\r\n                                  Download CSV</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"exportExcel('pickup-order-cancelled-list.xlsx', 'tbl1', 'Pickup Order Cancelled List')\"\r\n                                  style=\"color: white;\">\r\n                                  Download Excel</a>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item\">\r\n                                <a (click)=\"createPdf('pickup-order-cancelled-list.pdf', '#tbl1')\"\r\n                                  style=\"color: white;\">Export To PDF</a>\r\n                              </li>\r\n                              <li>\r\n                                <button\r\n                                  [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                  class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\"\r\n                                  [useExistingCss]=\"true\" ngxPrint printSectionId=\"myTable3\">\r\n                                  Print\r\n                                </button>\r\n                              </li>\r\n                              <li class=\"breadcrumb-item dropdown\">\r\n                                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                                  Column Hidden\r\n                                </a>\r\n                                <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                                    width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('0')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Sr #\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('1')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Customer\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('2')\" data-column=\"2\"\r\n                                    style=\"color: white;\">\r\n                                    Warehouse\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('3')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Contact Person\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('4')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Waybill/DN\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('5')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Customer Order No\r\n                                  </a>\r\n                                  <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('6')\" data-column=\"1\"\r\n                                    style=\"color: white;\">\r\n                                    Pickup Method\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('7')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Order Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('8')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Loaded Date\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('9')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Address\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('10')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Type\r\n                                  </a>\r\n                                  <a class=\"dropdown-item\" (click)=\"HideShow3('11')\" data-column=\"3\"\r\n                                    style=\"color: white; text-align: center\">\r\n                                    Action\r\n                                  </a>\r\n                                </div>\r\n                              </li>\r\n                            </ol>\r\n                          </nav>\r\n                          <table class=\"table table-bordered tabl-hover dataTable\" role=\"grid\" id=\"tbl3\">\r\n                            <thead>\r\n                              <tr role=\"row\">\r\n                                <th *ngIf=\"!hideShowList2[0].status\">Sr#</th>\r\n                                <th *ngIf=\"!hideShowList2[1].status\">Customer</th>\r\n                                <th *ngIf=\"!hideShowList2[2].status\">Warehouse</th>\r\n                                <th *ngIf=\"!hideShowList2[3].status\">ContactPerson</th>\r\n                                <th *ngIf=\"!hideShowList2[4].status\">Waybill/DN</th>\r\n                                <th *ngIf=\"!hideShowList2[5].status\">Customer Order No</th>\r\n                                <th *ngIf=\"!hideShowList2[6].status\">PickUp Method</th>\r\n                                <th *ngIf=\"!hideShowList2[7].status\">Order Date</th>\r\n                                <th *ngIf=\"!hideShowList2[8].status\">Loaded Date</th>\r\n                                <th *ngIf=\"!hideShowList2[9].status\">Address</th>\r\n                                <th *ngIf=\"!hideShowList2[10].status\">Type</th>\r\n                                <th *ngIf=\"!hideShowList2[11].status\">Action</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr role=\"row\" *ngFor=\"let pickupOrder of pickupOrderCancel; let i = index\">\r\n                                <td *ngIf=\"!hideShowList2[0].status\">{{i+1}}</td>\r\n                                <td *ngIf=\"!hideShowList2[1].status\">{{pickupOrder.Name}}</td>\r\n                                <td *ngIf=\"!hideShowList2[2].status\">{{pickupOrder.OriginWarehouse}}</td>\r\n                                <td *ngIf=\"!hideShowList2[3].status\">{{pickupOrder.ContactPerson}}</td>\r\n                                <!-- <td>{{pickupOrder.Consignee}}</td> -->\r\n                                <td *ngIf=\"!hideShowList2[4].status\">{{pickupOrder.waybill}}</td>\r\n                                <td *ngIf=\"!hideShowList2[5].status\">{{pickupOrder.CustomerOrderNo}}</td>\r\n                                <td *ngIf=\"!hideShowList2[6].status\">{{pickupOrder.Method}}</td>\r\n                                <td *ngIf=\"!hideShowList2[7].status\">{{pickupOrder.OrderDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList2[8].status\">{{pickupOrder.LoadingDate | date}}</td>\r\n                                <td *ngIf=\"!hideShowList2[9].status\">{{pickupOrder.Address}}</td>\r\n                                <td *ngIf=\"!hideShowList2[10].status\">{{pickupOrder.FormType}}</td>\r\n                                <td *ngIf=\"!hideShowList2[11].status\">\r\n                                  <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                                    (click)=\"Detail(pickupOrder.PickupOrderId)\"><i class=\"fa fa-info\"></i></button> -->\r\n                                  <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                                    (click)=\"Edit(pickupOrder.PickupOrderId)\"><i class=\"fa fa-edit\"></i></button> -->\r\n                                  <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\"\r\n                                    (click)=\"delete(pickupOrder.PickupOrderId)\">\r\n                                    <i class=\"fa fa-times-circle-o\"></i>\r\n                                  </button> -->\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n              </div>\r\n              <!-- /.box -->\r\n            </div>\r\n            <!-- /.col -->\r\n          </div>\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<modal #AllModalpickup>\r\n\r\n  <!-- <modal-header>\r\n    </modal-header> -->\r\n\r\n    <modal-content style=\"padding:1px\">\r\n      <div class=\"row col col-sm-12\" id=\"print-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-4\">\r\n            <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n          </div>\r\n          <div class=\"col col-sm-8 pull-right\">\r\n            <address>\r\n              <strong>{{CompanyName}}</strong> <br>\r\n              {{CompanyAddress}}\r\n            </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n          <h4><b><u>CUSTOMER PICKUP PLAN</u></b></h4>\r\n        </div>\r\n        <!-- info row -->\r\n        <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 150px;\">\r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_CustomerName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Auto Pickup# :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>Pickup-{{rep_PickupId}}</label>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n           \r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DriverName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Number :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_PhoneNumber}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Vehicle Info:</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_VehicleNo}} - {{rep_VehicleType}} <br> {{rep_Transporter}} - {{rep_SealNo}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Warehouse :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_OriginWarehouse}}</label>\r\n                </div>\r\n              </div>\r\n              \r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Customer SO# :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_CustomerOrderNo}}</label>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Loading Date :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_LoadingDate | date}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Distributor Info :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_DistCode}} | {{rep_DistName}}</label>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Way Bill :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_waybill}}</label>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Address :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_deliveryAddress}}</label>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n        <!-- Table row -->\r\n        <div class=\"row col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table dataTable\" >\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th style=\"border: 1px solid black; width:5%\">Sr.</th>\r\n                  <th style=\"border: 1px solid black; width:15%\">SKU Code</th>\r\n                  <th style=\"border: 1px solid black; width:70%\">SKU Name</th>\r\n                  <th style=\"border: 1px solid black; width:10%\">Quantity</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of rep_SOData; index as i\">\r\n                <tr>\r\n                  <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.SlaMode}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.ItemName}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Quantity}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"2\"></td>\r\n                  <td>Total Qty:</td>\r\n                  <td> {{TotalQty}}</td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </div>\r\n    </modal-content>\r\n  \r\n    <modal-footer>\r\n      <div class=\"row no-print\" id=\"printButton\">\r\n        <div class=\"col-sm-8\">\r\n          <!-- <a  (click)=\"openModal()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n          <button class=\"btn-wms hidden-print print-btn\" printTitle=\"DispatchOrder\" [useExistingCss]=\"true\" ngxPrint\r\n            printSectionId=\"print-section\"\r\n            [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\">\r\n            <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i></span>\r\n          </button>\r\n          <!-- <button (click)=\"createPdfModule('DispatchOrder.pdf', '#printButton')\" style=\"color: rgb(242, 6, 250);\"><i\r\n              class=\"fa fa-file-pdf-o\"></i></button> -->\r\n        </div>\r\n      </div>\r\n    </modal-footer>\r\n\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-pickup-order-pickup-order-module.js.map