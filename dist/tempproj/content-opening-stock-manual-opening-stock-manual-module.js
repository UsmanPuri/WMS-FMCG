(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-opening-stock-manual-opening-stock-manual-module"],{

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

/***/ "./src/app/layout/content/opening-stock-manual/components/opening-stock-manual.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock-manual/components/opening-stock-manual.ts ***!
  \****************************************************************************************/
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
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var opening_stock_manual_service_1 = __webpack_require__(/*! ../services/opening-stock-manual.service */ "./src/app/layout/content/opening-stock-manual/services/opening-stock-manual.service.ts");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var OpeningStockManualComponent = /** @class */ (function (_super) {
    __extends(OpeningStockManualComponent, _super);
    function OpeningStockManualComponent(injector, _openingstockService, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._openingstockService = _openingstockService;
        _this.modalService = modalService;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = { Id: null, Name: null };
        _this.locationDropdownSettings = {};
        _this.selectedLocation = { Id: null, Name: null };
        _this.godownDropdownSettings = {};
        _this.selectedGodown = { Id: null, Name: null };
        _this.itemDropdownSettings = {};
        _this.selectedItem = {};
        _this.itemInformationByCustomer = [];
        _this.shelfListForShipment = [];
        _this.shipmentListToPost = [];
        _this.selectedPallet = {};
        return _this;
    }
    ;
    OpeningStockManualComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
        this.locationSpaceInfo = {};
        this.locationSpaceInfo.CBM = 0;
        this.locationSpaceInfo.UsedCBM = 0;
        this.locationSpaceInfo.FreeCBM = 0;
    };
    /**
  * The following method is used to add the form validations
  */
    OpeningStockManualComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("ItemName", []);
        this.addFormControlWithValidations("ShipmentNoteNo", []);
        this.addFormControlWithValidations("DeliveryNo", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("CargoStatus", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("ASNNo", []);
        this.addFormControlWithValidations("ASNDate", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("CBM", []);
        this.addFormControlWithValidations("Quantity", []);
        this.addFormControlWithValidations("BoxQuantity", []);
        this.addFormControlWithValidations("Batch", []);
        this.addFormControlWithValidations("Status", []);
        this.addFormControlWithValidations("MFGDate", []);
        this.addFormControlWithValidations("EXPDate", []);
        this.addFormControlWithValidations("LocationId", []);
        this.addFormControlWithValidations("PalletNo", []);
        this.addFormControlWithValidations("PRno", []);
        this.addFormControlWithValidations("SNno", []);
    };
    OpeningStockManualComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            var tempPalletDropdown = [];
            _this.palletList = res;
            _this.palletList.forEach(function (element) {
                tempPalletDropdown.push({
                    Value: element.PalletId,
                    Text: element.Title + " " + element.Size
                });
            });
            _this.palletKeyPair = tempPalletDropdown;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this._openingstockService.getData(apiAddress)
            .subscribe(function (res) {
            _this.itemInformationByCustomer = res;
            console.log(_this.itemInformationByCustomer);
            var itemTemDropdown = [];
            _this.itemInformationByCustomer.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.itemInformation.ItemInformationId,
                    Text: element.itemInformation.Description + " |" + element.ItemBrand.Name + " | " + element.itemInformation.Name
                });
            });
            _this.itemKeyPair = itemTemDropdown;
            console.log(res);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.onSelect = function (item, dropDownName) {
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropDownName === 'selectedCustomer') {
            this.itemKeyPair = [];
            this.getItemInformationKeyPair(item.Value);
        }
        if (dropDownName === 'selectedWarehouse') {
            this.formGroup.get("GodownId").setValue('');
            this.godownKeyPair = [];
            this.getGodownKeyPair(item.Value);
            this.formGroup.get("LocationId").setValue('');
            this.locationKeyPair = [];
            this.getLocationKeyPair();
        }
        if (dropDownName === 'selectedItem') {
            var itemName = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Name;
            var Width = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Width;
            var Length = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Length;
            var Height = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Height;
            var CBM = (Width * 2.54 * Length * 2.54 * Height * 2.54) / 1000000;
            this.formGroup.get("ItemName").setValue(itemName);
            this.formGroup.get("CBM").setValue(CBM.toFixed(2));
        }
    };
    OpeningStockManualComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    OpeningStockManualComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    OpeningStockManualComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
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
        this.palletDropdownSettings = {
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
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    OpeningStockManualComponent.prototype.getErrorMessage = function (formElement) {
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
    OpeningStockManualComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.OPENING_STOCK_MANUAL]);
    };
    OpeningStockManualComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    OpeningStockManualComponent.prototype.addShipmentItemManualy = function () {
        this.shipmentListToPost.push({
            Name: this.selectedItem['Name'],
            ItemInformationId: this.selectedItem["Id"],
            // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
            // PalletNo: this.getPalletNoToSet(this.selectedItem["Id"]),
            Batch: this.formGroup.get('Batch').value,
            Status: this.formGroup.get('Status').value,
            Quantity: this.formGroup.get('Quantity').value,
            NoOfBoxes: this.formGroup.get('BoxQuantity').value,
            PalletNo: this.formGroup.get('PalletNo').value,
            Location: this.selectedLocation.Name,
            LocationId: this.selectedLocation.Id,
            PRno: this.formGroup.get('PRno').value,
            SNno: this.formGroup.get('SNno').value,
            //GodownId: element.godown.GodwomId,
            //GodownShelfId: element.godownShelf.GodownShelfId,
            ExpiryDate: this.formGroup.get('EXPDate').value,
            MfgDate: this.formGroup.get('MFGDate').value,
            Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
            TotalCBM: this.formGroup.get('Quantity').value * this.formGroup.get('CBM').value,
        });
        this.selectedItem = {};
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("Batch").setValue('');
        this.formGroup.get("Status").setValue('');
        this.formGroup.get("EXPDate").setValue('');
        this.formGroup.get("MFGDate").setValue('');
        this.formGroup.get("Quantity").setValue('');
        this.formGroup.get("BoxQuantity").setValue('');
        this.formGroup.get("CBM").setValue('');
        this.formGroup.get("PRno").setValue('');
        this.formGroup.get("SNno").setValue('');
        this.formGroup.get("PalletNo").setValue('');
        console.log(this.shipmentListToPost);
    };
    OpeningStockManualComponent.prototype.CheckDate = function () {
        var mfgDate = this.formGroup.get('MFGDate').value;
        var expDate = this.formGroup.get('EXPDate').value;
        if (mfgDate > expDate) {
            this.showToastrWarning("Please Select Date After The Mfg Date");
            this.formGroup.get("EXPDate").setValue('');
        }
    };
    OpeningStockManualComponent.prototype.deleteFromShipmentList = function (location, itemInfoId) {
        var _this = this;
        var dat = this.shipmentListToPost
            .filter(function (y) { return y.ItemInformationId === itemInfoId && y.Location === location; });
        if (dat && dat.length > 0) {
            dat.forEach(function (element) {
                _this.shipmentListToPost.splice(_this.shipmentListToPost.indexOf(element), 1);
            });
        }
    };
    OpeningStockManualComponent.prototype.addShipmentTextField = function (event, fieldName, location, palletNo) {
        var model = this.shipmentListToPost.filter(function (x) { return x.Location === location && x.PalletNo === palletNo; })[0];
        if (model) {
            model[fieldName] = event.target.value;
        }
        if (fieldName === 'Status' || fieldName === 'Batch') {
            this.shipmentListToPost.filter(function (x) { return x.Location === location; }).forEach(function (element) {
                element[fieldName] = event.target.value;
            });
        }
    };
    OpeningStockManualComponent.prototype.createShipmentNote = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
                this.showToastrWarning("Select Warehouse please.");
                return false;
            }
            this.executeShipmentNoteCreation(formValue);
        }
    };
    OpeningStockManualComponent.prototype.executeShipmentNoteCreation = function (formValue) {
        var _this = this;
        var shipmentNote = {
            ShipmentNoteNo: formValue.ShipmentNoteNo,
            CustomerID: this.selectedCustomer["Id"],
            CargoStatus: formValue.CargoStatus,
            WarehouseId: this.selectedWarehouse["Id"],
            GodownId: this.selectedGodown["Id"],
            Remarks: formValue.Remarks,
            ASNNo: formValue.ASNNo,
            DeliveryNo: formValue.DeliveryNo,
            ASNDate: formValue.ASNDate,
            DriverName: formValue.DriverName,
            VehicleNo: formValue.VehicleNo,
            ShipmentNoteChilds: this.shipmentListToPost,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiUrl = this.apiConstant.OPENING_STOCK;
        this._openingstockService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Add Opening Stock successfully");
            setTimeout(function () {
                //this.redirectToShipmentNoteList();
                _this.shipmentListToPost = null;
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    OpeningStockManualComponent.prototype.getLocationKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: this.selectedWarehouse.Id,
        };
        var apiAddress = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.locationKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockManualComponent.prototype.getLocationInfo = function (item) {
        var _this = this;
        this.selectedLocation = {
            Id: item.Value,
            Name: item.Text
        };
        var apiAddress = this.apiConstant.LOCATION_SPACE_STATUS + ("/" + this.selectedLocation.Id);
        this._openingstockService.getData(apiAddress)
            .subscribe(function (res) {
            _this.locationSpaceInfo = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    __decorate([
        core_1.ViewChild('modalItemLocation'),
        __metadata("design:type", Object)
    ], OpeningStockManualComponent.prototype, "modalItemLocation", void 0);
    OpeningStockManualComponent = __decorate([
        core_1.Component({
            selector: "wms-opening-stock",
            template: __webpack_require__(/*! ../templates/opening-stock-manual.html */ "./src/app/layout/content/opening-stock-manual/templates/opening-stock-manual.html"),
            styles: [__webpack_require__(/*! ../styles/opening-stock-manual.scss */ "./src/app/layout/content/opening-stock-manual/styles/opening-stock-manual.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, opening_stock_manual_service_1.OpeningStockService,
            ngb_modal_1.ModalManager])
    ], OpeningStockManualComponent);
    return OpeningStockManualComponent;
}(base_component_1.BaseComponent));
exports.OpeningStockManualComponent = OpeningStockManualComponent;


/***/ }),

/***/ "./src/app/layout/content/opening-stock-manual/opening-stock-manual.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock-manual/opening-stock-manual.module.ts ***!
  \************************************************************************************/
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
var opening_stock_manual_service_1 = __webpack_require__(/*! ./services/opening-stock-manual.service */ "./src/app/layout/content/opening-stock-manual/services/opening-stock-manual.service.ts");
var opening_stock_manual_1 = __webpack_require__(/*! ./components/opening-stock-manual */ "./src/app/layout/content/opening-stock-manual/components/opening-stock-manual.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: opening_stock_manual_1.OpeningStockManualComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var OpeningStockManualModule = /** @class */ (function () {
    function OpeningStockManualModule() {
    }
    OpeningStockManualModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule
            ],
            declarations: [
                opening_stock_manual_1.OpeningStockManualComponent
            ],
            providers: [
                opening_stock_manual_service_1.OpeningStockService
            ],
            entryComponents: []
        })
    ], OpeningStockManualModule);
    return OpeningStockManualModule;
}());
exports.OpeningStockManualModule = OpeningStockManualModule;


/***/ }),

/***/ "./src/app/layout/content/opening-stock-manual/services/opening-stock-manual.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock-manual/services/opening-stock-manual.service.ts ***!
  \**********************************************************************************************/
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
var OpeningStockService = /** @class */ (function (_super) {
    __extends(OpeningStockService, _super);
    function OpeningStockService(injector) {
        return _super.call(this, injector) || this;
    }
    OpeningStockService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], OpeningStockService);
    return OpeningStockService;
}(repository_service_1.RepositoryService));
exports.OpeningStockService = OpeningStockService;


/***/ }),

/***/ "./src/app/layout/content/opening-stock-manual/styles/opening-stock-manual.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock-manual/styles/opening-stock-manual.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/opening-stock-manual/templates/opening-stock-manual.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock-manual/templates/opening-stock-manual.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    OPENING STOCK MANUAL\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <!-- <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment note</a></li>\r\n    <li class=\"active\">Create</li> -->\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createShipmentNote(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <!-- <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Opening Stock Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n\r\n        \r\n\r\n          \r\n        </div>\r\n       \r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKUs</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>SKU</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select One SKU'\" [data]=\"itemKeyPair\"\r\n                          [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                           (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                          (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  \r\n                    <div class=\"form-group\">\r\n                      <label>Item CBM</label>\r\n                      <input class=\"form-control\" placeholder=\"CBM\" formControlName=\"CBM\" type=\"number\" disabled>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.CBM.invalid\">\r\n                        {{getErrorMessage('CBM')}}\r\n                      </span>\r\n                    </div>\r\n                     \r\n                   \r\n                    <!-- <div class=\"form-group shipment-item-add\">\r\n                        <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemLocation()\">\r\n                          Add Location\r\n                        </button>\r\n                      </div> -->\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Godown</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\"\r\n                          [settings]=\"godownDropdownSettings\" formControlName=\"GodownId\"\r\n                          (onDeSelect)=\"onDeSelect('selectedGodown')\" (onSelect)=\"onSelect($event,'selectedGodown')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedGodown || !this.selectedGodown['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div> -->\r\n                   \r\n                </div>\r\n\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Location</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"locationKeyPair\"\r\n                      [settings]=\"locationDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedLocation')\"\r\n                      formControlName=\"LocationId\" \r\n                      (onSelect)=\"getLocationInfo($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedLocation || !this.selectedLocation['Id']\">\r\n                      Required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                  <div class=\"form-group\">\r\n                    <label>Total CBM</label>\r\n                    <p>{{locationSpaceInfo.CBM | number : '1.2-2'}}</p>\r\n                    \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                  <div class=\"form-group\">\r\n                    <label>Occupied CBM</label>\r\n                    <p>{{locationSpaceInfo.UsedCBM - locationSpaceInfo.FreeCBM | number : '1.2-2'}}</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                  <div class=\"form-group\">\r\n                    <label>Empty CBM</label>\r\n                    <p>{{locationSpaceInfo.CBM-(locationSpaceInfo.UsedCBM - locationSpaceInfo.FreeCBM) | number : '1.2-2'}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n               \r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>Quantity</label>\r\n                    <input class=\"form-control\" placeholder=\"Qty\" formControlName=\"Quantity\" type=\"number\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Quantity.invalid\">\r\n                      {{getErrorMessage('Quantity')}}\r\n                    </span>\r\n                  </div>\r\n                   \r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>No. Of Box</label>\r\n                    <input class=\"form-control\" placeholder=\"Enter No. Of Box\" formControlName=\"BoxQuantity\" type=\"number\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.BoxQuantity.invalid\">\r\n                      {{getErrorMessage('BoxQuantity')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch/Serial</label>\r\n                <input type=\"text\" formControlName=\"Batch\" class=\"form-control\" placeholder=\"Enter Batch\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Batch.invalid\">\r\n                  {{getErrorMessage('Batch')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Pallet No</label>\r\n                <input type=\"text\" formControlName=\"PalletNo\" class=\"form-control\" placeholder=\"Enter PalletNo\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.PalletNo.invalid\">\r\n                  {{getErrorMessage('PalletNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Mfg Date</label>\r\n                <input type=\"date\" formControlName=\"MFGDate\" class=\"form-control\" placeholder=\"Enter MFG Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.MFGDate.invalid\">\r\n                  {{getErrorMessage('MFGDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Date</label>\r\n                <input type=\"date\" formControlName=\"EXPDate\" class=\"form-control\" placeholder=\"Enter Expiry Date\" (blur)=\"CheckDate()\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.EXPDate.invalid\">\r\n                  {{getErrorMessage('EXPDate')}}\r\n                </span>\r\n              </div>\r\n              <div>\r\n                \r\n              </div>\r\n            </div>                           \r\n            </div>\r\n\r\n\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>PR No</label>\r\n                    <input type=\"text\" formControlName=\"PRno\" class=\"form-control\" placeholder=\"Enter PR No\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.PRno.invalid\">\r\n                      {{getErrorMessage('PRno')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>SN No</label>\r\n                    <input type=\"text\" formControlName=\"SNno\" class=\"form-control\" placeholder=\"Enter SN No\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.SNno.invalid\">\r\n                      {{getErrorMessage('SNno')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group shipment-item-add pull-right\">\r\n                  <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addShipmentItemManualy()\">\r\n                    Add\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                          <thead>\r\n                            <tr role=\"row\">\r\n                              <th>\r\n                                SKU Id\r\n                              </th>\r\n                              <th>\r\n                               SKU Name\r\n                              </th>\r\n                              <th>\r\n                                Pallet No\r\n                              </th>\r\n                              <th>\r\n                                Batch\r\n                              </th>\r\n                              <!-- <th>\r\n                                Status\r\n                              </th> -->\r\n                              <th>\r\n                                Quantity\r\n                              </th>\r\n                              <th>\r\n                                No Of Boxes\r\n                              </th>\r\n                              <th>\r\n                                Location\r\n                              </th>\r\n                              <th>\r\n                                Total CBM\r\n                              </th>\r\n                              <th>\r\n                                Mfg Date\r\n                              </th>\r\n                              <th>\r\n                                Expiry Date\r\n                              </th>\r\n                              <th>\r\n                                PR #\r\n                              </th>\r\n                              <th>\r\n                                SN #\r\n                              </th>\r\n                              <!-- <th>\r\n                                Price\r\n                              </th>\r\n                              <th>\r\n                                  Actions\r\n                                </th> -->\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                              <td>{{shipment.ItemInformationId}}</td>\r\n                              <td>{{shipment.Name}}</td>\r\n                              <td>{{shipment.PalletNo}}</td>\r\n                              <td>{{shipment.Batch}}</td>\r\n                              <!-- <td>{{shipment.Status}}</td> -->\r\n                              <td>{{shipment.Quantity}}</td>\r\n                              <td>{{shipment.NoOfBoxes}}</td>\r\n                              <td>{{shipment.Location}}</td>\r\n                              <td>{{shipment.TotalCBM}}</td>\r\n                              <td>{{shipment.MfgDate | date}}</td>\r\n                              <td>{{shipment.ExpiryDate | date}}</td>\r\n                              <td>{{shipment.PRno}}</td>\r\n                              <td>{{shipment.SNno}}</td>\r\n                            \r\n                            </tr>\r\n                          </tbody>  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n             \r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Add Opening Stock</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n"

/***/ })

}]);
//# sourceMappingURL=content-opening-stock-manual-opening-stock-manual-module.js.map