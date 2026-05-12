(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-items-items-module"],{

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

/***/ "./src/app/layout/content/items/components/item-edit-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/items/components/item-edit-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditFormComponent", function() { return ItemEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/layout/content/items/services/item.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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






var ItemEditFormComponent = /** @class */ (function (_super) {
    __extends(ItemEditFormComponent, _super);
    function ItemEditFormComponent(injector, _itemService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._itemService = _itemService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.itemCategoryDropdownSettings = {};
        _this.itemBrandDropdownSettings = {};
        _this.unitOfMeasureBrandDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.selectedCategory = {};
        _this.selectedBrand = {};
        _this.selectedUnitOfMeasure = {};
        _this.categoryTempList = [];
        _this.brandTempList = [];
        _this.customerItems = [];
        return _this;
    }
    ItemEditFormComponent.prototype.ngOnInit = function () {
        this.getUnitOfMeasureKeyPair();
        this.addFormValidations();
        this.dropdownSettings();
        // this.getCustomerKeyPair();
        this.getById();
    };
    ItemEditFormComponent.prototype.getById = function () {
        var _this = this;
        var itemId = this.activeRoute.snapshot.params['Id'];
        if (itemId) {
            var byIdUrl = this.apiConstant.ITEM_INFORMATION_BY_ID + ("" + itemId);
            this._itemService.getData(byIdUrl)
                .subscribe(function (res) {
                _this.item = res;
                _this.selectedUnitInfo = [{
                        "Text": _this.getUOMNameFromUOMKeyPair(_this.item.UOM),
                        "Value": _this.item.UOM.toString()
                    }];
                _this.selectedUnitOfMeasure = {
                    Id: _this.item.UOM.toString(),
                    Name: _this.getUOMNameFromUOMKeyPair(_this.item.UOM)
                };
                _this.formGroup.patchValue(_this.item);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    ItemEditFormComponent.prototype.getUOMNameFromUOMKeyPair = function (regionId) {
        var model = this.unitOfMeasureKeyPair
            .filter(function (x) { return x.Value == regionId; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    /**
  * The following method is used to add the form validations
  */
    ItemEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("ItemCode", []);
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", requiredValidation);
        this.addFormControlWithValidations("Height", requiredValidation);
        this.addFormControlWithValidations("Width", requiredValidation);
        this.addFormControlWithValidations("Length", requiredValidation);
        this.addFormControlWithValidations("Weight", requiredValidation);
        this.addFormControlWithValidations("unitId", requiredValidation);
        this.addFormControlWithValidations("MinStockLevel", []);
        this.addFormControlWithValidations("MaxStockLevel", []);
        this.addFormControlWithValidations("QuantityInPacking", []);
        this.addFormControlWithValidations("Price", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("CategoryId", []);
        this.addFormControlWithValidations("BrandId", []);
    };
    ItemEditFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemEditFormComponent.prototype.getUnitOfMeasureKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.UNIT_KEY_PAIR;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.unitOfMeasureKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemEditFormComponent.prototype.onDropDownSelect = function (item, dropdownName) {
        this[dropdownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropdownName === "selectedCustomer") {
            this.customerChange(item);
        }
        if (dropdownName === "selectedCategory") {
            this.categoryChange(item);
        }
        if (dropdownName === "selectedBrand") {
            this.brandChange(item);
        }
        if (dropdownName !== 'selectedUnitOfMeasure') {
            this.formGroup.get('ItemCode').setValue('');
        }
    };
    ItemEditFormComponent.prototype.onDropDownDeSelect = function (item, dropdownName) {
        this[dropdownName] = {};
        if (dropdownName === "selectedCustomer") {
            this.formGroup.get("CategoryId").setValue('');
            this.categoryKeyPair = [];
            this.categoryTempList = [];
            this.formGroup.get("BrandId").setValue('');
            this.brandKeyPair = [];
            this.brandTempList = [];
        }
        if (dropdownName === "selectedCategory") {
            this.formGroup.get("BrandId").setValue('');
            this.brandKeyPair = [];
            this.brandTempList = [];
        }
        this.formGroup.get('ItemCode').setValue('');
    };
    ItemEditFormComponent.prototype.customerChange = function (item) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CustomerId: item.Value
        };
        var apiAddress = this.apiConstant.ITEM_LIST;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.formGroup.get("CategoryId").setValue('');
            _this.categoryKeyPair = [];
            _this.categoryTempList = [];
            _this.formGroup.get("BrandId").setValue('');
            _this.brandKeyPair = [];
            _this.brandTempList = [];
            _this.customerItems = res;
            _this.customerItems.forEach(function (element) {
                _this.categoryObjToPushInCategoryKeyPair = {
                    Value: element.ItemId,
                    Text: element.ItemId + " | " + element.Name,
                    ParentReferenceId: null
                };
                _this.categoryTempList.push(_this.categoryObjToPushInCategoryKeyPair);
            });
            _this.categoryKeyPair = _this.categoryTempList
                .filter(function (x) { return Number(x.Value.substring(4, 6) > 10) && x.Value.substring(7, 15) == "100-1000"; });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemEditFormComponent.prototype.categoryChange = function (item) {
        var _this = this;
        this.formGroup.get("BrandId").setValue('');
        this.brandKeyPair = [];
        this.brandTempList = [];
        this.customerItems
            .filter(function (x) { return x.ItemId.substring(4, 6) === item.Value.substring(4, 6); })
            .forEach(function (element) {
            _this.brandObjToPushInCategoryKeyPair = {
                Value: element.ItemId,
                Text: element.ItemId + " | " + element.Name,
                ParentReferenceId: null
            };
            _this.brandTempList.push(_this.brandObjToPushInCategoryKeyPair);
        });
        this.brandKeyPair = this.brandTempList
            .filter(function (x) { return Number(x.Value.substring(7, 10) > 100) && x.Value.substring(11, 15) == "1000"; });
    };
    ItemEditFormComponent.prototype.brandChange = function (item) {
        var _this = this;
        var customerCode = this.selectedCategory["Id"].substring(0, 3);
        var categoryCode = this.selectedCategory["Id"].substring(4, 6);
        var brandCode = this.selectedBrand["Id"].substring(7, 10);
        var itemId = customerCode + "-" + categoryCode + "-" + brandCode;
        var byIdUrl = this.apiConstant.ITEM_GetItemInformationByItemId + ("" + itemId);
        this._itemService.getData(byIdUrl)
            .subscribe(function (res) {
            console.log(res);
            var itemListByBrand = res;
            _this.formGroup.get('ItemCode').setValue(itemId + "-" + (1000 + itemListByBrand.length + 1));
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemEditFormComponent.prototype.createItemInformation = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedCategory || !this.selectedCategory["Id"]) {
                this.showToastrWarning("Select Category please.");
                return false;
            }
            if (!this.selectedBrand || !this.selectedBrand["Id"]) {
                this.showToastrWarning("Select Brand please.");
                return false;
            }
            this.executeItemInformationCreation(formValue);
        }
    };
    ItemEditFormComponent.prototype.executeItemInformationCreation = function (formValue) {
        var _this = this;
        var itemInfo = {
            ItemInformationId: this.formGroup.get("ItemCode").value,
            ItemId: this.selectedBrand["Id"],
            Name: formValue.Name,
            Description: formValue.Description,
            CustomerId: this.selectedCustomer["Id"],
            Height: formValue.Height,
            Width: formValue.Width,
            Length: formValue.Length,
            Weight: formValue.Weight,
            UOM: this.selectedUnitOfMeasure ? this.selectedUnitOfMeasure["Id"] : "0",
            MinStockLevel: formValue.MinStockLevel,
            MaxStockLevel: formValue.MaxStockLevel,
            QuantityInPacking: formValue.QuantityInPacking,
            Price: formValue.Price,
            Remarks: formValue.Remarks,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_INFORMATION_CREATE;
        this._itemService.create(apiUrl, itemInfo)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Information created successfully");
            setTimeout(function () {
                _this.redirectToItemInformationList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemEditFormComponent.prototype.updateItemInformation = function (formValue) {
        if (this.formGroup.valid) {
            this.executeItemInformationUpdate(formValue);
        }
    };
    ItemEditFormComponent.prototype.executeItemInformationUpdate = function (formValue) {
        var _this = this;
        var itemInfo = {
            //ItemInformationId:this.formGroup.get("ItemCode").value,
            //ItemId:this.selectedBrand["Id"],
            Name: formValue.Name,
            Description: formValue.Description,
            //CustomerId: this.selectedCustomer["Id"],
            Height: formValue.Height,
            Width: formValue.Width,
            Length: formValue.Length,
            Weight: formValue.Weight,
            UOM: this.selectedUnitOfMeasure ? this.selectedUnitOfMeasure["Id"] : "0",
            MinStockLevel: formValue.MinStockLevel,
            MaxStockLevel: formValue.MaxStockLevel,
            QuantityInPacking: formValue.QuantityInPacking,
            Price: formValue.Price,
            Remarks: formValue.Remarks,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_INFORMATION_UPDATE + ("/" + this.item.ItemInformationId);
        this.ngxService.start();
        this._itemService.update(apiUrl, itemInfo)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Updated successfully");
            setTimeout(function () {
                _this.redirectToItemInformationList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ItemEditFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemCategoryDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemBrandDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.unitOfMeasureBrandDropdownSettings = {
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
    ItemEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ItemEditFormComponent.prototype.redirectToItemInformationList = function () {
        this.router.navigate([this.routesList.ITEM_LISTING]);
    };
    ItemEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-item-edit-form",
            template: __webpack_require__(/*! ../templates/item-edit-form.component.html */ "./src/app/layout/content/items/templates/item-edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/items/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], ItemEditFormComponent);
    return ItemEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/items/components/item-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/items/components/item-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/layout/content/items/services/item.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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









var ItemFormComponent = /** @class */ (function (_super) {
    __extends(ItemFormComponent, _super);
    function ItemFormComponent(injector, _itemService, ngxService, activeRoute, envUrl, http, exporterService) {
        var _this = _super.call(this, injector) || this;
        _this._itemService = _itemService;
        _this.ngxService = ngxService;
        _this.activeRoute = activeRoute;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.exporterService = exporterService;
        _this.customerDropdownSettings = {};
        _this.itemCategoryDropdownSettings = {};
        _this.itemBrandDropdownSettings = {};
        _this.unitOfMeasureBrandDropdownSettings = {};
        _this.itemList = [];
        _this.selectedCustomer = {};
        _this.selectedCategory = {};
        _this.selectedBrand = {};
        _this.selectedUnitOfMeasure = {};
        _this.categoryTempList = [];
        _this.SKUListToPost = [];
        _this.CheckListTOPost = [];
        _this.brandTempList = [];
        _this.isCheckSKUCODE = false;
        _this.customerItems = [];
        _this.isEnable = false;
        return _this;
    }
    ItemFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.getUnitOfMeasureKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    ItemFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("ItemCode", []);
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", requiredValidation);
        this.addFormControlWithValidations("Height", requiredValidation);
        this.addFormControlWithValidations("Width", requiredValidation);
        this.addFormControlWithValidations("Length", requiredValidation);
        this.addFormControlWithValidations("Weight", requiredValidation);
        this.addFormControlWithValidations("MinStockLevel", []);
        this.addFormControlWithValidations("MaxStockLevel", []);
        this.addFormControlWithValidations("QuantityInPacking", []);
        this.addFormControlWithValidations("Price", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("CategoryId", []);
        this.addFormControlWithValidations("BrandId", requiredValidation);
        this.addFormControlWithValidations("UOMId", []);
        this.formGroup.get("Width").setValue(0);
        this.formGroup.get("Height").setValue(0);
        this.formGroup.get("Length").setValue(0);
        this.formGroup.get("Weight").setValue(0);
    };
    ItemFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemFormComponent.prototype.getUnitOfMeasureKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.UNIT_KEY_PAIR;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.unitOfMeasureKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemFormComponent.prototype.onDropDownSelect = function (item, dropdownName) {
        this[dropdownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropdownName === "selectedCustomer") {
            this.customerChange(item);
        }
        if (dropdownName === "selectedCategory") {
            this.categoryChange(item);
        }
        if (dropdownName === "selectedBrand") {
            this.brandChange(item);
        }
        if (dropdownName !== 'selectedUnitOfMeasure') {
            this.formGroup.get('ItemCode').setValue('');
        }
    };
    ItemFormComponent.prototype.onDropDownDeSelect = function (item, dropdownName) {
        this[dropdownName] = {};
        if (dropdownName === "selectedCustomer") {
            this.formGroup.get("CategoryId").setValue('');
            this.categoryKeyPair = [];
            this.categoryTempList = [];
            this.formGroup.get("BrandId").setValue('');
            this.brandKeyPair = [];
            this.brandTempList = [];
        }
        if (dropdownName === "selectedCategory") {
            this.formGroup.get("BrandId").setValue('');
            this.brandKeyPair = [];
            this.brandTempList = [];
        }
        this.formGroup.get('ItemCode').setValue('');
    };
    ItemFormComponent.prototype.customerChange = function (item) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CustomerId: item.Value
        };
        var apiAddress = this.apiConstant.ITEM_LIST;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.formGroup.get("CategoryId").setValue('');
            _this.categoryKeyPair = [];
            _this.categoryTempList = [];
            _this.formGroup.get("BrandId").setValue('');
            _this.brandKeyPair = [];
            _this.brandTempList = [];
            _this.customerItems = res;
            _this.customerItems.forEach(function (element) {
                _this.categoryObjToPushInCategoryKeyPair = {
                    Value: element.ItemId,
                    Text: element.ItemId + " | " + element.Name,
                    ParentReferenceId: null
                };
                _this.categoryTempList.push(_this.categoryObjToPushInCategoryKeyPair);
            });
            _this.categoryKeyPair = _this.categoryTempList
                .filter(function (x) { return Number(x.Value.substring(4, 6) > 10) && x.Value.substring(7, 15) == "100-1000"; });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemFormComponent.prototype.categoryChange = function (item) {
        var _this = this;
        this.formGroup.get('Description').setValue("");
        this.formGroup.get("BrandId").setValue('');
        this.brandKeyPair = [];
        this.brandTempList = [];
        this.customerItems
            .filter(function (x) { return x.ItemId.substring(4, 6) === item.Value.substring(4, 6); })
            .forEach(function (element) {
            _this.brandObjToPushInCategoryKeyPair = {
                Value: element.ItemId,
                Text: element.ItemId + " | " + element.Name,
                ParentReferenceId: null
            };
            _this.brandTempList.push(_this.brandObjToPushInCategoryKeyPair);
        });
        this.brandKeyPair = this.brandTempList
            .filter(function (x) { return Number(x.Value.substring(7, 10) > 100) && x.Value.substring(11, 15) == "1000"; });
    };
    ItemFormComponent.prototype.brandChange = function (item) {
        var _this = this;
        var customerCode = this.selectedCategory["Id"].substring(0, 3);
        var categoryCode = this.selectedCategory["Id"].substring(4, 6);
        var brandCode = this.selectedBrand["Id"].substring(7, 10);
        var code = this.selectedBrand["Id"].substring(0, 15);
        this.getBrandInfo(code);
        var itemId = customerCode + "-" + categoryCode + "-" + brandCode;
        var byIdUrl = this.apiConstant.ITEM_GetItemInformationByItemId + ("" + itemId);
        this._itemService.getData(byIdUrl)
            .subscribe(function (res) {
            console.log(res);
            var itemListByBrand = res;
            debugger;
            if (_this.SKUListToPost.length > 0) {
                _this.SKUListToPost.forEach(function (element, index) {
                    if (index == 0) {
                        if (itemListByBrand.length == 0) {
                            var i = 0;
                            _this.SKUListToPost[index].ItemInformationId = itemId + "-" + (Number(1000) + 1);
                        }
                        else {
                            var i = itemListByBrand.length;
                            var cod = itemListByBrand[i - 1].ItemInformationId.substring(11, 16);
                            _this.SKUListToPost[index].ItemInformationId = itemId + "-" + (Number(cod) + 1);
                        }
                    }
                    else {
                        var cod = _this.SKUListToPost[index - 1].ItemInformationId.substring(11, 16);
                        _this.SKUListToPost[index].ItemInformationId = itemId + "-" + (Number(cod) + 1);
                    }
                });
            }
            else {
                if (itemListByBrand.length > 0) {
                    itemListByBrand.forEach(function (element, index) {
                        // if (index == 0) {
                        //   let cod = itemListByBrand[index].ItemInformationId.substring(11, 15);
                        //   this.formGroup.get('ItemCode').setValue(itemId + "-" + (1001 + (Number(cod) + 1)));
                        // }
                        // else {
                        var cod = itemListByBrand[index].ItemInformationId.substring(11, 16);
                        _this.formGroup.get('ItemCode').setValue(itemId + "-" + ((Number(cod) + 1)));
                        // }
                    }
                    //this.formGroup.get('ItemCode').setValue(itemId + "-" + (1001 + itemListByBrand.length + 1)); }
                    );
                }
                else {
                    debugger;
                    _this.formGroup.get('ItemCode').setValue(itemId + "-" + (1001));
                }
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemFormComponent.prototype.getBrandInfo = function (code) {
        var _this = this;
        var obj = {
            BrandCode: code
        };
        var apiAddress = this.apiConstant.ITEM_INFORMATION_ByBrandCode;
        this._itemService.getKeyPair(apiAddress, obj)
            .subscribe(function (res) {
            _this.itemList = res;
            _this.validatBrand();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemFormComponent.prototype.validatBrand = function () {
        var _this = this;
        if (this.SKUListToPost.length > 0) {
            var f_1 = false;
            var check_1;
            this.SKUListToPost.forEach(function (element) {
                check_1 = _this.itemList.find(function (x) { return x.Description === element.Description; });
                if (check_1) {
                    f_1 = true;
                    element.isExist = true;
                    _this.CheckListTOPost.push(check_1);
                }
            });
            var result = this.CheckListTOPost.map(function (val) {
                return val.Description;
            }).join(',');
            console.log(result);
            this.showToastrWarning(result);
            if (f_1) {
                this.isEnable = true;
            }
        }
    };
    ItemFormComponent.prototype.createItemInformation = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedCategory || !this.selectedCategory["Id"]) {
                this.showToastrWarning("Select Category please.");
                return false;
            }
            if (!this.selectedBrand || !this.selectedBrand["Id"]) {
                this.showToastrWarning("Select Brand please.");
                return false;
            }
            this.executeItemInformationCreation(formValue);
        }
    };
    ItemFormComponent.prototype.executeItemInformationCreation = function (formValue) {
        var _this = this;
        var itemInfo = {
            ItemInformationId: this.formGroup.get("ItemCode").value,
            ItemId: this.selectedBrand["Id"],
            Name: formValue.Name,
            Description: formValue.Description,
            CustomerId: this.selectedCustomer["Id"],
            Height: formValue.Height,
            Width: formValue.Width,
            Length: formValue.Length,
            Weight: formValue.Weight,
            UOM: this.selectedUnitOfMeasure ? this.selectedUnitOfMeasure["Id"] : "0",
            MinStockLevel: formValue.MinStockLevel,
            MaxStockLevel: formValue.MaxStockLevel,
            QuantityInPacking: formValue.QuantityInPacking,
            Price: formValue.Price,
            Remarks: formValue.Remarks,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        debugger;
        var apiUrl = this.apiConstant.ITEM_INFORMATION_CREATE;
        this.ngxService.start();
        this._itemService.getKeyPair(apiUrl, itemInfo)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Information created successfully");
            setTimeout(function () {
                _this.redirectToItemInformationList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemFormComponent.prototype.ValidateCustomerSKUCODE = function (formValue) {
        var _this = this;
        var info = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            Description: formValue.Description,
            Category: formValue.BrandId[0].Value,
        };
        // console.log(formValue.BrandId[0].Value)
        var apiUrl = this.apiConstant.Validate_Customer_SKUCODE;
        this._itemService.create(apiUrl, info)
            .subscribe(function (res) {
            _this.isCheckSKUCODE = res;
            if (res == true) {
                _this.showToastrError("SKU Code already exist in Selected Category");
            }
            //this.showToastrSuccess("Item Information created successfully");
            // setTimeout(() => {
            //   this.redirectToItemInformationList();
            // }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemFormComponent.prototype.executeItemInformationCreationLIST = function () {
        var _this = this;
        debugger;
        var info = {
            list: this.SKUListToPost,
            ItemId: this.selectedBrand["Id"],
            CustomerId: this.selectedCustomer["Id"],
            UOM: this.selectedUnitOfMeasure ? this.selectedUnitOfMeasure["Id"] : "0",
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_INFORMATION_CREATE_LIST;
        this._itemService.create(apiUrl, info)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Information created successfully");
            setTimeout(function () {
                _this.redirectToItemInformationList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemFormComponent.prototype.exportServiceAsExcel = function () {
        this.SKUListToPost.push({
            ItemInformationId: "Leave Empty",
            ItemId: "Leave Empty",
            Name: "SKU NAME",
            Description: "Customer SKU",
            Height: 0,
            Width: 0,
            Length: 0,
            Weight: 0,
            UOM: "Leave Empty",
            MinStockLevel: 0,
            MaxStockLevel: 0,
            QuantityInPacking: 1,
            Price: 0,
            Remarks: "",
        });
        this.exporterService.exportToExcel(this.SKUListToPost, 'SKUList Data');
        this.SKUListToPost = [];
    };
    ItemFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('ContractId', this.selectedCustomer.toString());
        formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.SKUListToPost = msg;
                //  this.CatListToPost.forEach(element =>{
                //   if(element.ItemInformationId==="0")
                //   {
                //       this.BTN = true;
                //   }
                //  })
                // this.fleetServiceList = null;
                console.log(_this.SKUListToPost);
            });
        }
    };
    ItemFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = this.apiConstant.FILE_UPLOAD_ItemBrand;
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    ItemFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ItemFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemCategoryDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemBrandDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.unitOfMeasureBrandDropdownSettings = {
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
    ItemFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ItemFormComponent.prototype.Delete = function (item) {
        this.SKUListToPost = this.SKUListToPost.filter(function (x) { return x.Description != item.Description; });
    };
    ItemFormComponent.prototype.redirectToItemInformationList = function () {
        this.router.navigate([this.routesList.ITEM_LISTING]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('servicePicked'),
        __metadata("design:type", Object)
    ], ItemFormComponent.prototype, "servicePicked", void 0);
    ItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-brand-form",
            template: __webpack_require__(/*! ../templates/item-form.component.html */ "./src/app/layout/content/items/templates/item-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/items/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_5__["EnvironmentUrlService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"]])
    ], ItemFormComponent);
    return ItemFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/items/components/item-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/items/components/item-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/item.service */ "./src/app/layout/content/items/services/item.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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









var ItemListComponent = /** @class */ (function (_super) {
    __extends(ItemListComponent, _super);
    function ItemListComponent(injector, _itemService, chRef, exporterService, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._itemService = _itemService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.ItemList = [];
        _this.ItemListToPost = [];
        return _this;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        //this.getAllItems();
        this.dropdownSettings();
        this.getCustomerKeyPair();
    };
    ItemListComponent.prototype.getAllItems = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.GODWOM_LIST;
        this._itemService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.itemList = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemListComponent.prototype.customerChange = function (item) {
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        this.CustomerId = item.Value;
        this.getItems(this.CustomerId);
    };
    ItemListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.ITEM_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ItemListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.ItemList.forEach(function (element) {
            var itemObj = {
                SystemCode: element.Description,
                Name: element.Category + "|" + element.Brand + "|" + element.ItemName,
                Height: element.Height,
                Width: element.Width,
                Length: element.Length,
                CBM: (((element.Width * 2.54) * (element.Height * 2.54) * (element.Length * 2.54)) / 1000000),
                MinStock: element.MinStockLevel,
                MaxStock: element.MaxStockLevel,
                Price: element.Price,
            };
            _this.ItemListToPost.push(itemObj);
        });
        this.exporterService.exportToExcel(this.ItemListToPost, 'ItemList Data');
        this.ItemListToPost = [];
    };
    ItemListComponent.prototype.redirectToCreateItem = function () {
        this.router.navigate([this.routesList.ITEM_CREATE]);
    };
    ItemListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemListComponent.prototype.dropdownSettings = function () {
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
    ItemListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ItemId: Id,
            Type: "sku"
        };
        this.ngxService.start();
        var apiUrl = this.apiConstant.CUSTOMER_DELETE;
        this._itemService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('SKU deleted successfully');
                _this.getItems(_this.CustomerId);
            }
            else {
                _this.showToastrWarning('SKU Can not be deleted');
            }
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ItemListComponent.prototype.getItems = function (item) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CustomerId: item
        };
        this.ngxService.start();
        var apiAddress = this.apiConstant.CUSTOMER_ITEM_LIST;
        this._itemService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.ItemList = res;
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [500, 1000, 2000],
                "iDisplayLength": 1000,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ItemListComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.open(this.AllModal, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-dialog'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "AllModal", void 0);
    ItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-item-list",
            template: __webpack_require__(/*! ../templates/item-list.component.html */ "./src/app/layout/content/items/templates/item-list.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/items/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"],
            ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalManager"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], ItemListComponent);
    return ItemListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/items/items.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/content/items/items.module.ts ***!
  \******************************************************/
/*! exports provided: ItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/item.service */ "./src/app/layout/content/items/services/item.service.ts");
/* harmony import */ var _components_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-form.component */ "./src/app/layout/content/items/components/item-form.component.ts");
/* harmony import */ var _components_item_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item-list.component */ "./src/app/layout/content/items/components/item-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _components_item_edit_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/item-edit-form.component */ "./src/app/layout/content/items/components/item-edit-form.component.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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
                component: _components_item_list_component__WEBPACK_IMPORTED_MODULE_6__["ItemListComponent"],
            },
            {
                path: "create",
                component: _components_item_form_component__WEBPACK_IMPORTED_MODULE_5__["ItemFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_item_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["ItemEditFormComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_12__["NgxPrintModule"],
                ngb_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_item_form_component__WEBPACK_IMPORTED_MODULE_5__["ItemFormComponent"], _components_item_list_component__WEBPACK_IMPORTED_MODULE_6__["ItemListComponent"], _components_item_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["ItemEditFormComponent"]
            ],
            providers: [
                _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__["ExporterService"]
            ],
            entryComponents: []
        })
    ], ItemsModule);
    return ItemsModule;
}());



/***/ }),

/***/ "./src/app/layout/content/items/services/item.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/content/items/services/item.service.ts ***!
  \***************************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
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


var ItemService = /** @class */ (function (_super) {
    __extends(ItemService, _super);
    function ItemService(injector) {
        return _super.call(this, injector) || this;
    }
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ItemService);
    return ItemService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/items/styles/item-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/content/items/styles/item-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n@media (min-width: 992px) {\n  modal-lg {\n    width: 80% !important; } }\n"

/***/ }),

/***/ "./src/app/layout/content/items/templates/item-edit-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/items/templates/item-edit-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      SKU INFORMATION EDIT\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.ITEM_LISTING]\">Sku Information</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateItemInformation(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToItemInformationList()\" class=\"btn-wms\">Sku Information\r\n              Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n\r\n          <!-- <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                  (onDeSelect)=\"onDropDownDeSelect($event,'selectedCustomer')\"\r\n                  (onSelect)=\"onDropDownSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Category</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                formControlName=\"CategoryId\"\r\n                [data]=\"categoryKeyPair\" [settings]=\"itemCategoryDropdownSettings\"\r\n                  (onDeSelect)=\"onDropDownDeSelect($event,'selectedCategory')\"\r\n                  (onSelect)=\"onDropDownSelect($event,'selectedCategory')\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Brand</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                formControlName=\"BrandId\"\r\n                [data]=\"brandKeyPair\" [settings]=\"itemBrandDropdownSettings\"\r\n                  (onDeSelect)=\"onDropDownDeSelect($event,'selectedBrand')\"\r\n                   (onSelect)=\"onDropDownSelect($event,'selectedBrand')\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-12\">\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Sku Code</label>\r\n                <input type=\"text\" formControlName=\"ItemCode\" class=\"form-control input-sm\" placeholder=\"Sku Code\" readonly>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Unit of Measure</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"unitOfMeasureKeyPair\"\r\n                  [settings]=\"unitOfMeasureBrandDropdownSettings\"\r\n                  (onDeSelect)=\"onDropDownDeSelect($event,'selectedUnitOfMeasure')\"\r\n                  (onSelect)=\"onDropDownSelect($event,'selectedUnitOfMeasure')\" formControlName=\"unitId\"\r\n                  [(ngModel)]=\"selectedUnitInfo\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.unitId.invalid\">\r\n                  {{getErrorMessage('unitId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Height (Inch)</label>\r\n                <input type=\"text\" formControlName=\"Height\" class=\"form-control input-sm\" placeholder=\"Enter Height\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Height.invalid\">\r\n                  {{getErrorMessage('Height')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Width (Inch)</label>\r\n                <input type=\"text\" formControlName=\"Width\" class=\"form-control input-sm\" placeholder=\"Enter Width\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Width.invalid\">\r\n                  {{getErrorMessage('Width')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Length (Inch)</label>\r\n                <input type=\"text\" formControlName=\"Length\" class=\"form-control input-sm\" placeholder=\"Enter Length\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Length.invalid\">\r\n                  {{getErrorMessage('Length')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Weight (KG)</label>\r\n                <input type=\"text\" formControlName=\"Weight\" class=\"form-control input-sm\" placeholder=\"Enter Weight\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Weight.invalid\">\r\n                  {{getErrorMessage('Weight')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Min Stock Level</label>\r\n                <input type=\"text\" formControlName=\"MinStockLevel\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Min Stock Level\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.MinStockLevel.invalid\">\r\n                  {{getErrorMessage('MinStockLevel')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Max Stock Level</label>\r\n                <input type=\"text\" formControlName=\"MaxStockLevel\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Max Stock Level\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.MaxStockLevel.invalid\">\r\n                  {{getErrorMessage('MaxStockLevel')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity In Packing</label>\r\n                <input type=\"text\" formControlName=\"QuantityInPacking\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Quantity In Packing\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.QuantityInPacking.invalid\">\r\n                  {{getErrorMessage('QuantityInPacking')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Price</label>\r\n                <input type=\"text\" formControlName=\"Price\" class=\"form-control input-sm\" placeholder=\"Enter Price\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Price.invalid\">\r\n                  {{getErrorMessage('Price')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer Sku Code </label>\r\n                <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Description\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                  {{getErrorMessage('Description')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Remarks</label>\r\n                <textarea formControlName=\"Remarks\" class=\"form-control input-sm\"></textarea>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                  {{getErrorMessage('Remarks')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n      </div>\r\n    </form>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/items/templates/item-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/items/templates/item-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  #tbl1 {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\ntable.mytbl tr.border_bottom td {\r\n  border-bottom: 1px solid red;\r\n}\r\n</style>\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU INFORMATION CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_LISTING]\">SKU Information</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n      <ul class=\"nav nav-tabs\">\r\n        <!-- <li class=\"active\"><a data-toggle=\"tab\" href=\"#menu3\">Other Expense</a></li> -->\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Single</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu1\">Multiple</a></li>\r\n          <!-- <li><a data-toggle=\"tab\" href=\"#menu2\">Services Invoice</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu3\">Other vendor Invoice </a></li> -->\r\n         \r\n        </ul>\r\n        <div class=\"tab-content\" >\r\n          <div id=\"menu1\" class=\"tab-pane fade in\">\r\n            <div col-md-12>\r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"executeItemInformationCreationLIST()\">\r\n                <div class=\"box box-primary\">\r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                      <button type=\"button\" (click)=\"redirectToItemInformationList()\" class=\"btn-wms\">Sku Information Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Customer</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedCustomer')\"\r\n                            (onSelect)=\"onDropDownSelect($event,'selectedCustomer')\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Category</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          formControlName=\"CategoryId\"\r\n                          [data]=\"categoryKeyPair\" [settings]=\"itemCategoryDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedCategory')\"\r\n                            (onSelect)=\"onDropDownSelect($event,'selectedCategory')\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Brand</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          formControlName=\"BrandId\"\r\n                          [data]=\"brandKeyPair\" [settings]=\"itemBrandDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedBrand')\"\r\n                             (onSelect)=\"onDropDownSelect($event,'selectedBrand')\">\r\n                          </ng-multiselect-dropdown>\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.BrandId.invalid\">\r\n                            {{getErrorMessage('BrandId')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-12\">\r\n                     \r\n                     \r\n                      <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                              <label>Unit of Measure</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" formControlName=\"UOMId\"\r\n                              [data]=\"unitOfMeasureKeyPair\"\r\n                                [settings]=\"unitOfMeasureBrandDropdownSettings\" (onDeSelect)=\"onDropDownDeSelect($event,'selectedUnitOfMeasure')\"\r\n                                (onSelect)=\"onDropDownSelect($event,'selectedUnitOfMeasure')\">\r\n                              </ng-multiselect-dropdown>\r\n                              <span class=\"help-block\" *ngIf=\"formGroup.controls.UOMId.invalid\">\r\n                                {{getErrorMessage('UOMId')}}\r\n                              </span>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <input  type=\"file\" id=\"servicePicked\" #servicePicked \r\n                        (click)=\"message=''\"\r\n                        (change)=\"onServicePicked(servicePicked)\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable disp1\" role=\"grid\" id=\"tbl\">\r\n                          <thead>\r\n                          <tr>\r\n                            <th style=\"min-width:10px\">Sr.</th>\r\n                           \r\n                            <th>Name</th>\r\n                            <!-- <th>Unit of Measure\r\n                            </th> -->\r\n                            <th>Customer SKU Code</th>\r\n                            <th>Height (Inch)</th>\r\n                            <th>Width (Inch)</th>\r\n                            <th>Length (Inch)</th>\r\n                            <th>Weight (KG)</th>\r\n                            <th>Min Stock Level</th>\r\n                            <th>Max Stock Level</th>\r\n                            <th>Quantity In Packing</th>\r\n                            <th>Price</th>\r\n                            <th>System Code</th>\r\n                            <th>Remarks</th>\r\n                            <th>Actions</th>\r\n                          </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                          <tr *ngFor=\"let item of SKUListToPost; index as i\" [ngClass]=\"{ 'border_bottom': item.unvalid }\">\r\n                           <td>{{i+1}}</td>\r\n                           <td>{{item.Name}}</td>\r\n                           <!-- <td>{{item.UOM}}</td> -->\r\n                        \r\n                         <td>{{item.Description}}</td>\r\n                         <td>{{item.Height}}</td>\r\n                         <td>{{item.Width}}</td>\r\n                         <td>{{item.Length}}</td>\r\n                         <td>{{item.Weight}}</td>\r\n                         <td>{{item.MinStockLevel}}</td>\r\n                         <td>{{item.MaxStockLevel}}</td>\r\n                         <td>{{item.QuantityInPacking}}</td>\r\n                         <td>{{item.Price}}</td>\r\n                         <td>{{item.ItemInformationId}}</td>\r\n                         <td>{{item.Remarks}}</td>\r\n                         <td>\r\n                          <button type=\"button\" id=\"delete\" class=\"editBtn btn-danger\" (click)=\"Delete(item)\"><i\r\n                            class=\"fa fa-trash\"></i></button>\r\n                         </td>\r\n                         \r\n                          </tr>\r\n                         \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n        \r\n                      <!-- /.col -->\r\n                    </div>\r\n                   \r\n          \r\n                  </div>\r\n          \r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" [disabled]=\"isEnable\" class=\"btn btn-success pull-right\">Add</button>\r\n                </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n          <div id=\"home\" class=\"tab-pane fade in active\">\r\n            <div col-md-12>\r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createItemInformation(formGroup.value)\">\r\n                <div class=\"box box-primary\">\r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                      <button type=\"button\" (click)=\"redirectToItemInformationList()\" class=\"btn-wms\">Sku Information Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Customer</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedCustomer')\"\r\n                            (onSelect)=\"onDropDownSelect($event,'selectedCustomer')\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Category</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          formControlName=\"CategoryId\"\r\n                          [data]=\"categoryKeyPair\" [settings]=\"itemCategoryDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedCategory')\"\r\n                            (onSelect)=\"onDropDownSelect($event,'selectedCategory')\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Brand</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          formControlName=\"BrandId\"\r\n                          [data]=\"brandKeyPair\" [settings]=\"itemBrandDropdownSettings\"\r\n                            (onDeSelect)=\"onDropDownDeSelect($event,'selectedBrand')\"\r\n                             (onSelect)=\"onDropDownSelect($event,'selectedBrand')\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Customer SKU Code </label>\r\n                          <input type=\"text\" formControlName=\"Description\" (change)=\"ValidateCustomerSKUCODE(formGroup.value)\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                            {{getErrorMessage('Description')}}\r\n                          </span>\r\n                          <span class=\"help-block\" *ngIf=\"isCheckSKUCODE\">\r\n                            <!-- SKU Code already exist in Selected Category. -->\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Name</label>\r\n                          <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                            {{getErrorMessage('Name')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                              <label>Unit of Measure</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"unitOfMeasureKeyPair\" \r\n                                [settings]=\"unitOfMeasureBrandDropdownSettings\" (onDeSelect)=\"onDropDownDeSelect($event,'selectedUnitOfMeasure')\"\r\n                                (onSelect)=\"onDropDownSelect($event,'selectedUnitOfMeasure')\">\r\n                              </ng-multiselect-dropdown>\r\n                              <span class=\"help-block\" *ngIf=\"!this.selectedUnitOfMeasure || !this.selectedUnitOfMeasure['Id']\">\r\n                                Required\r\n                              </span>\r\n                            </div>\r\n                      </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Height (Inch)</label>\r\n                            <input type=\"number\" min=\"0\"  formControlName=\"Height\" class=\"form-control input-sm\" placeholder=\"Enter Height\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.Height.invalid\">\r\n                              {{getErrorMessage('Height')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Width (Inch)</label>\r\n                            <input type=\"number\" min=\"0\" formControlName=\"Width\" class=\"form-control input-sm\" placeholder=\"Enter Width\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.Width.invalid\">\r\n                              {{getErrorMessage('Width')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Length (Inch)</label>\r\n                            <input type=\"number\" min=\"0\" formControlName=\"Length\" class=\"form-control input-sm\" placeholder=\"Enter Length\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.Length.invalid\">\r\n                              {{getErrorMessage('Length')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n          \r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Weight (KG)</label>\r\n                            <input type=\"number\" formControlName=\"Weight\" class=\"form-control input-sm\" placeholder=\"Enter Weight\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.Weight.invalid\">\r\n                              {{getErrorMessage('Weight')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Min Stock Level</label>\r\n                            <input type=\"text\" formControlName=\"MinStockLevel\" class=\"form-control input-sm\" placeholder=\"Enter Min Stock Level\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.MinStockLevel.invalid\">\r\n                              {{getErrorMessage('MinStockLevel')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label>Max Stock Level</label>\r\n                            <input type=\"text\" formControlName=\"MaxStockLevel\" class=\"form-control input-sm\" placeholder=\"Enter Max Stock Level\">\r\n                            <span class=\"help-block\" *ngIf=\"formGroup.controls.MaxStockLevel.invalid\">\r\n                              {{getErrorMessage('MaxStockLevel')}}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n          \r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                              <label>Quantity In Packing</label>\r\n                              <input type=\"text\" formControlName=\"QuantityInPacking\" class=\"form-control input-sm\" placeholder=\"Enter Quantity In Packing\">\r\n                              <span class=\"help-block\" *ngIf=\"formGroup.controls.QuantityInPacking.invalid\">\r\n                                {{getErrorMessage('QuantityInPacking')}}\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                              <label>Price</label>\r\n                              <input type=\"text\" formControlName=\"Price\" class=\"form-control input-sm\" placeholder=\"Enter Price\">\r\n                              <span class=\"help-block\" *ngIf=\"formGroup.controls.Price.invalid\">\r\n                                {{getErrorMessage('Price')}}\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                              <label>System Code</label>\r\n                              <input type=\"text\" formControlName=\"ItemCode\" class=\"form-control input-sm\" placeholder=\"System Code\" readonly>\r\n                            </div>\r\n                             \r\n                          </div>\r\n                        </div>\r\n          \r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Remarks</label>\r\n                                    <textarea formControlName=\"Remarks\" class=\"form-control input-sm\"></textarea>\r\n                                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                                      {{getErrorMessage('Remarks')}}\r\n                                    </span>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                            </div>\r\n                          </div>\r\n          \r\n                  </div>\r\n          \r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"submit\" [disabled]=\"formGroup.invalid || isCheckSKUCODE || !this.selectedUnitOfMeasure['Id']\" class=\"btn btn-success pull-right\">Add</button>\r\n                </div>\r\n            </form>\r\n            </div>\r\n          </div> \r\n        </div>\r\n  \r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/items/templates/item-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/items/templates/item-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      PRODUCT SKU LISTING\r\n      <small>\r\n        <button class=\"btn-wms-head\" (click)=\"redirectToCreateItem()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n      </small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.ITEM_LISTING]\">Customer SKU Brand</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div class=\"pull-right\">\r\n                <button type=\"submit\" [disabled]=\"formGroup.invalid\" (click)=\"openModal()\"\r\n                  class=\"btn btn-default\">Print</button>\r\n                <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>Sr.</th>\r\n                      <th>System Code</th>\r\n                      <th class=\"col-sm-2\">Name</th>\r\n                      <th>Height</th>\r\n                      <th>Width</th>\r\n                      <th>Length</th>\r\n                      <th>CBM</th>\r\n                      <th>Weight</th>\r\n                      <th>Min Stock</th>\r\n                      <th>Max Stock</th>\r\n                      <th>Price</th>\r\n                      <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let Item of ItemList; let i = index\">\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{Item.Description}}</td>\r\n                      <td>{{Item.Category}} | {{Item.Brand}} | {{Item.ItemName}}</td>\r\n                      <td>{{Item.Height}}</td>\r\n                      <td>{{Item.Width}}</td>\r\n                      <td>{{Item.Length}}</td>\r\n                      <td>{{((Item.Width*2.54) * (Item.Height * 2.54) * (Item.Length * 2.54))/1000000 | number :\r\n                        '1.2-2'}}</td>\r\n                        <td>{{Item.Weight}}</td>\r\n                      <td>{{Item.MinStockLevel}}</td>\r\n                      <td>{{Item.MaxStockLevel}}</td>\r\n                      <td>{{Item.Price}}</td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                          (click)=\"Edit(Item.ItemInformationId)\"><i class=\"fa fa-edit\"></i></button>\r\n                        <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\"\r\n                          (click)=\"Delete(Item.ItemInformationId)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n<modal #AllModal>\r\n\r\n  <modal-header>\r\n\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n          class=\"btn-wms hidden-print pull-right print-btn\" printTitle=\"Customer\" [useExistingCss]=\"true\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:2%\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title detail-title\">Customer SKU</h3>\r\n        <div class=\"form-group  pull-right\">\r\n\r\n        </div>\r\n      </div>\r\n      <section class=\"invoice\">\r\n        <!-- title row -->\r\n\r\n        <!-- info row -->\r\n        <div class=\"col-sm-6 invoice-col\">\r\n          <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n              <img id=\"logo\" src=\"assets/images/aml-png-logo-web-1.png\" height=\"70\" width=\"160\"\r\n                style=\"background-color: white;\">\r\n              <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row invoice-info\">\r\n          <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n\r\n            <address>\r\n              <strong>AML,Logistics</strong>\r\n              Head Office Address: Plot No. 193, 1st Floor,\r\n              Street No.1, Sector I/10,\r\n              Industrial Area, Islamabad.\r\n              Phone: +92-51-4102361-62\r\n\r\n            </address>\r\n          </div>\r\n          <!-- /.col -->\r\n\r\n          <!-- /.col -->\r\n          <!-- /.col -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n            <h4><u>Customer SKU</u></h4>\r\n          </div>\r\n        </div>\r\n        <!-- info row -->\r\n\r\n        <!-- /.row -->\r\n\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Sr.\r\n                  </th>\r\n                  <th>\r\n                    System Code\r\n                  </th>\r\n                  <th class=\"col-sm-1\">\r\n                    Name\r\n                  </th>\r\n\r\n\r\n                  <th>\r\n                    Height\r\n                  </th>\r\n                  <th>\r\n                    Width\r\n                  </th>\r\n                  <th>\r\n                    Length\r\n                  </th>\r\n                  <th>\r\n                    CBM\r\n                  </th>\r\n                  <th>\r\n                    Min Stock\r\n                  </th>\r\n                  <th>\r\n                    Max Stock\r\n                  </th>\r\n                  <th>\r\n                    Price\r\n                  </th>\r\n\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let Item of ItemList; let i = index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{Item.Description}}</td>\r\n                  <td>{{Item.Category}} | {{Item.Brand}} | {{Item.ItemName}}</td>\r\n\r\n\r\n                  <td>{{Item.Height}}</td>\r\n                  <td>{{Item.Width}}</td>\r\n                  <td>{{Item.Length}}</td>\r\n                  <td>{{((Item.Width*2.54) * (Item.Height * 2.54) * (Item.Length * 2.54))/1000000 | number : '1.2-2'}}\r\n                  </td>\r\n                  <td>{{Item.MinStockLevel}}</td>\r\n                  <td>{{Item.MaxStockLevel}}</td>\r\n                  <td>{{Item.Price}}</td>\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n\r\n\r\n      </section>\r\n\r\n\r\n\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n\r\n  </modal-footer>\r\n\r\n\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-items-items-module.js.map