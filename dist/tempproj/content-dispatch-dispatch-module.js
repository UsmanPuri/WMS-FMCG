(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-dispatch-dispatch-module"],{

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

/***/ "./src/app/layout/content/dispatch/components/dispatch-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch/components/dispatch-form.component.ts ***!
  \*******************************************************************************/
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
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var dispatch_service_1 = __webpack_require__(/*! ../services/dispatch.service */ "./src/app/layout/content/dispatch/services/dispatch.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var DispatchFormComponent = /** @class */ (function (_super) {
    __extends(DispatchFormComponent, _super);
    function DispatchFormComponent(injector, _dispatchService, activeRoute, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        return _this;
    }
    DispatchFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    DispatchFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("DispatchDate", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("Agent", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("GatePassNo", []);
        this.addFormControlWithValidations("PhoneNumber", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
    };
    DispatchFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchFormComponent.prototype.getPickupOrderKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerId + ("" + customerId);
        this._dispatchService.getData(apiAddress)
            .subscribe(function (res) {
            _this.pickupOrderKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getPickupOrderKeyPair(Number(event.Value));
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("PickupOrderId").setValue('');
            this.itemListToPost = [];
            this.itemTempToAddIntoItemPostList = [];
        }
    };
    DispatchFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    DispatchFormComponent.prototype.getItemByCustomer = function () {
        var _this = this;
        var searchItemForDispatchModel = {
            CustomerId: this.selectedCustomer["Id"],
            PickupOrderId: this.selectedPickupOrder["Id"],
        };
        var apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
        this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
            .subscribe(function (res) {
            _this.retrivedItemListByPickupOrder = res;
            console.log(_this.retrivedItemListByPickupOrder);
            debugger;
            var temp = [];
            _this.retrivedItemListByPickupOrder.forEach(function (element) {
                var existing = temp.filter(function (x) { return x.Value === element.ItemId
                    && x.ParentReferenceId === element.Location; })[0];
                if (!existing) {
                    temp.push({
                        Value: element.ItemId,
                        Text: element.ItemName + "   |   " + element.Location,
                        ParentReferenceId: element.Location
                    });
                }
            });
            _this.itemKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchFormComponent.prototype.PickupOrderChange = function (event) {
        this.selectedPickupOrder = {
            Id: event.Value,
            Name: event.Text
        };
        if (this.selectedCustomer && this.selectedCustomer["Id"]
            && this.selectedPickupOrder && this.selectedPickupOrder["Id"]) {
            this.getItemByCustomer();
            this.getPickupOrderById();
        }
    };
    DispatchFormComponent.prototype.getPickupOrderById = function () {
        var _this = this;
        var PickupOrderId = this.selectedPickupOrder["Id"];
        if (PickupOrderId) {
            var customerByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + PickupOrderId);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.pickupOrder = res;
                console.log(_this.pickupOrder);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchFormComponent.prototype.pickupOrderDeSelect = function () {
        this.selectedPickupOrder = {};
    };
    DispatchFormComponent.prototype.itemChange = function (event) {
        this.itemTempToAddIntoItemPostList["ItemId"] = event.Value;
        this.itemTempToAddIntoItemPostList["Location"] = event.Text.split('|')[1].trim();
        this.formGroup.get("QtyAvailableToAdd")
            .setValue(this.getItemAvailableQty(event.Value, event.Text.split('|')[1].trim()));
    };
    DispatchFormComponent.prototype.itemDeSelect = function () {
        this.selectedItem = {};
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
        this.formGroup.get("QtyAvailableToAdd").setValue(0);
        this.formGroup.get('QtyToAdd').setValue(0);
    };
    DispatchFormComponent.prototype.quantityChange = function (event) {
        if (!this.selectedItem) {
            this.showToastrWarning('Select item please');
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        if (Number(event.target.value) <= 0) {
            this.showToastrWarning("Invalid Quantity");
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        if (Number(event.target.value) > Number(this.formGroup.get("QtyAvailableToAdd").value)) {
            this.showToastrWarning("Quantity can not longer then " + this.formGroup.get("QtyAvailableToAdd").value);
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    DispatchFormComponent.prototype.getItemAvailableQty = function (itemId, location) {
        var totalQty = 0;
        var data = this.retrivedItemListByPickupOrder
            .filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (data && data.length > 0) {
            data.forEach(function (element) {
                totalQty = (totalQty + Number(element.Quantity));
            });
        }
        return totalQty;
    };
    DispatchFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        if (this.itemTempToAddIntoItemPostList &&
            this.itemTempToAddIntoItemPostList["ItemId"] != ''
            && Number(this.itemTempToAddIntoItemPostList["Quantity"] != 0)) {
            this.itemListToPost = this.itemListToPost.filter(function (x) { return x.ItemId !== _this.itemTempToAddIntoItemPostList["ItemId"]; });
            this.itemListToPost.push({
                ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                Name: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Name"],
                UnitId: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"].UOM,
                Unit: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Unit"]["Title"],
                Location: this.itemTempToAddIntoItemPostList["Location"],
                Batch: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Batch"]
            });
            this.itemTempToAddIntoItemPostList = {};
            this.formGroup.get("QtyToAdd").setValue('');
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("QtyAvailableToAdd").setValue('');
        }
    };
    DispatchFormComponent.prototype.createDispatch = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]) {
                this.showToastrWarning("Select Customer Order please.");
                return false;
            }
            if (this.retrivedItemListByPickupOrder.length <= 0) {
                this.showToastrWarning("Add item please.");
                return false;
            }
            this.executeDispatchCreation(formValue);
        }
    };
    DispatchFormComponent.prototype.executeDispatchCreation = function (formValue) {
        var _this = this;
        var dispatch = {
            Agent: formValue.Agent,
            DriverName: formValue.DriverName,
            GatePassNo: formValue.GatePassNo,
            PhoneNumber: formValue.PhoneNumber,
            Address: formValue.Address,
            DispatchDate: formValue.DispatchDate,
            CustomerId: this.selectedCustomer["Id"],
            PickupOrderId: this.selectedPickupOrder["Id"],
            DispatchDetails: this.retrivedItemListByPickupOrder,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        console.log(dispatch);
        var apiUrl = this.apiConstant.DISPATCH_CREATE;
        this.ngxService.start();
        this._dispatchService.create(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.returnDispatch = res;
            console.log(_this.returnDispatch);
            _this.openModal();
            _this.showToastrSuccess("Dispatch created successfully");
            // setTimeout(() => {
            //   this.redirectToDispatchList();
            // }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DispatchFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    DispatchFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.pickupOrderDropdownSettings = {
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
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DispatchFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DispatchFormComponent.prototype.redirectToDispatchList = function () {
        this.router.navigate([this.routesList.DISPATCH_LISTING]);
    };
    DispatchFormComponent.prototype.openModal = function () {
        this.Agent = this.formGroup.get("Agent").value;
        this.GatePassNo = this.formGroup.get("GatePassNo").value;
        this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
        this.Address = this.formGroup.get("Address").value;
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
            windowClass: 'modal-xl'
        });
    };
    __decorate([
        core_1.ViewChild('AllModal'),
        __metadata("design:type", Object)
    ], DispatchFormComponent.prototype, "AllModal", void 0);
    DispatchFormComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/dispatch/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-form.component.scss */ "./src/app/layout/content/dispatch/styles/dispatch-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_service_1.DispatchService,
            router_1.ActivatedRoute, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DispatchFormComponent);
    return DispatchFormComponent;
}(base_component_1.BaseComponent));
exports.DispatchFormComponent = DispatchFormComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch/components/dispatch-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch/components/dispatch-list.component.ts ***!
  \*******************************************************************************/
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
var dispatch_service_1 = __webpack_require__(/*! ../services/dispatch.service */ "./src/app/layout/content/dispatch/services/dispatch.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var DispatchListComponent = /** @class */ (function (_super) {
    __extends(DispatchListComponent, _super);
    function DispatchListComponent(injector, _dispatchService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.ngxService = ngxService;
        _this.hideShowList = [];
        return _this;
    }
    DispatchListComponent.prototype.ngOnInit = function () {
        this.getAllPickupOrders();
        for (var i = 0; i < 5; i++) {
            this.hideShowList.push({ status: true });
        }
        this.hideShowList[0].status = false;
        this.hideShowList[1].status = false;
        this.hideShowList[2].status = false;
        this.hideShowList[3].status = false;
        this.hideShowList[4].status = false;
    };
    //Excel Conversion
    DispatchListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    DispatchListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    DispatchListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    DispatchListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    DispatchListComponent.prototype.getAllPickupOrders = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST;
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            //console.log(this.dispatchList)
            // Now you can use jQuery DataTables :
            var table = $('table');
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
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    DispatchListComponent.prototype.redirectToCreateDispatch = function () {
        this.router.navigate([this.routesList.DISPATCH_CREATE]);
    };
    DispatchListComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/dispatch/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-form.component.scss */ "./src/app/layout/content/dispatch/styles/dispatch-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_service_1.DispatchService,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DispatchListComponent);
    return DispatchListComponent;
}(base_component_1.BaseComponent));
exports.DispatchListComponent = DispatchListComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch/dispatch.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/content/dispatch/dispatch.module.ts ***!
  \************************************************************/
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
var dispatch_service_1 = __webpack_require__(/*! ./services/dispatch.service */ "./src/app/layout/content/dispatch/services/dispatch.service.ts");
var dispatch_form_component_1 = __webpack_require__(/*! ./components/dispatch-form.component */ "./src/app/layout/content/dispatch/components/dispatch-form.component.ts");
var dispatch_list_component_1 = __webpack_require__(/*! ./components/dispatch-list.component */ "./src/app/layout/content/dispatch/components/dispatch-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: dispatch_list_component_1.DispatchListComponent,
            },
            {
                path: "create",
                component: dispatch_form_component_1.DispatchFormComponent,
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DispatcModule = /** @class */ (function () {
    function DispatcModule() {
    }
    DispatcModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                ngx_print_1.NgxPrintModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                dispatch_form_component_1.DispatchFormComponent, dispatch_list_component_1.DispatchListComponent
            ],
            providers: [
                dispatch_service_1.DispatchService
            ],
            entryComponents: []
        })
    ], DispatcModule);
    return DispatcModule;
}());
exports.DispatcModule = DispatcModule;


/***/ }),

/***/ "./src/app/layout/content/dispatch/services/dispatch.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/content/dispatch/services/dispatch.service.ts ***!
  \**********************************************************************/
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
var DispatchService = /** @class */ (function (_super) {
    __extends(DispatchService, _super);
    function DispatchService(injector) {
        return _super.call(this, injector) || this;
    }
    DispatchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], DispatchService);
    return DispatchService;
}(repository_service_1.RepositoryService));
exports.DispatchService = DispatchService;


/***/ }),

/***/ "./src/app/layout/content/dispatch/styles/dispatch-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/dispatch/styles/dispatch-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}.modal-xl .modal-lg{max-width:80%}\n"

/***/ }),

/***/ "./src/app/layout/content/dispatch/templates/form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/dispatch/templates/form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    PICKUP CREATE\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_LISTING]\">Pickups</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createDispatch(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToDispatchList()\" class=\"btn-wms\">Pickups Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Customer</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                        [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                        (onDeSelect)=\"customerDeSelect()\"\r\n                          (onSelect)=\"customerChange($event)\"\r\n                       \r\n                          >\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                          It is required\r\n                        </span>\r\n                      </div>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Customer Order</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                     [data]=\"pickupOrderKeyPair\"\r\n                      [settings]=\"pickupOrderDropdownSettings\" \r\n                      formControlName=\"PickupOrderId\"\r\n                      (onDeSelect)=\"pickupOrderDeSelect()\"\r\n                      (onSelect)=\"PickupOrderChange($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedPickupOrder || !this.selectedPickupOrder['Id']\">\r\n                      It is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Agent</label>\r\n                    <input type=\"text\" formControlName=\"Agent\" class=\"form-control\" placeholder=\"Enter Agent\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Agent.invalid\">\r\n                      {{getErrorMessage('Agent')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n                <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Gate Pass No</label>\r\n                    <input type=\"text\" formControlName=\"GatePassNo\" class=\"form-control\" placeholder=\"Enter Gate Pass No\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.GatePassNo.invalid\">\r\n                      {{getErrorMessage('GatePassNo')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Phone Number</label>\r\n                    <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" placeholder=\"Enter Phone Number\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.PhoneNumber.invalid\">\r\n                      {{getErrorMessage('PhoneNumber')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Address</label>\r\n                    <textarea formControlName=\"Address\" class=\"form-control\"></textarea>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                      {{getErrorMessage('Address')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"pickupOrder!=null\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Warehouse</label>\r\n                    <p>{{pickupOrder.OriginWarehouse}}</p>\r\n                  </div>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Contact Person</label>\r\n                    <p>{{pickupOrder.ContactPerson}}</p>\r\n                  </div>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Telephone</label>\r\n                    <p>{{pickupOrder.Telephone}}</p>\r\n                  </div>\r\n                 \r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Loading Date</label>\r\n                    <p>{{pickupOrder.LoadingDate | date}}</p>\r\n                  </div>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>PickupMethod</label>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==1\">FIFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==2\">LIFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==3\">LEFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==4\">FEFO</p>\r\n                  </div>\r\n                 \r\n                </div>\r\n              </div>\r\n            \r\n            </div>\r\n           \r\n\r\n          </div>\r\n\r\n          <div class=\"box box-primary\">\r\n              <div class=\"box-header with-border\">\r\n                <div class=\"form-group\">\r\n                    <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"box-body\">\r\n                  <!-- <div class=\"col-md-12\">\r\n                      <div class=\"col-md-5\">\r\n                          <div class=\"form-group\">\r\n                              <label>Item</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                              [data]=\"itemKeyPair\"\r\n                                [settings]=\"itemDropdownSettings\"\r\n                                 formControlName=\"ItemId\"\r\n                                 (onDeSelect)=\"itemDeSelect()\"\r\n                                (onSelect)=\"itemChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                            </div>\r\n                      </div>\r\n                     \r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label>Available Quantity</label>\r\n                         <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label>Quantity</label>\r\n                         <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group shipment-item-add\">\r\n                          <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                            Add Items\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 table-responsive\">\r\n                              <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                                <thead>\r\n                                  <tr role=\"row\">\r\n                                    <th>\r\n                                      System Id\r\n                                    </th>\r\n                                    <th>\r\n                                      SKU Name\r\n                                    </th>\r\n                                    <th>\r\n                                      Location\r\n                                    </th>\r\n                                    <th>\r\n                                      Pallet No\r\n                                    </th>\r\n                                    <th>\r\n                                      Unit\r\n                                    </th>\r\n                                    <th>\r\n                                      Quantity\r\n                                    </th>\r\n                                    <th>\r\n                                      Batch/Serial\r\n                                    </th>\r\n                                   \r\n                                    <th>\r\n                                      Expiry\r\n                                    </th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr role=\"row\" *ngFor=\"let item of retrivedItemListByPickupOrder\">\r\n                                    <td>{{item.ItemId}}</td>\r\n                                    <td>{{item.ItemName}}</td>\r\n                                    <td>{{item.Location}}</td>\r\n                                    <td>{{item.PalletNo}}</td>\r\n                                    <td>{{item.Unit}}</td>\r\n                                    <td>{{item.Quantity}}</td>\r\n                                    <td>{{item.BatchNo}}</td>\r\n                                    \r\n                                    <td>{{item.ExpiryDate | date}}</td>\r\n                                  </tr>\r\n                                </tbody>  \r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                   \r\n              </div>\r\n            </div>\r\n\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Pickup for Dispatch</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n  <modal #AllModal>\r\n    <modal-header>\r\n       \r\n      \r\n    </modal-header>\r\n  \r\n    <modal-content style=\"padding:20px\">\r\n      <div class=\"box box-primary\" id=\"print-section\">\r\n        <div class=\"box-header with-border\">\r\n          <h3 class=\"box-title detail-title\">Dispatch</h3>\r\n          <div class=\"form-group  pull-right\">\r\n\r\n          </div>\r\n        </div>\r\n        <section class=\"invoice\">\r\n          <!-- title row -->\r\n      \r\n          <!-- info row -->\r\n          <div class=\"col-sm-6 invoice-col\">\r\n            <div class=\"col-xs-12\">\r\n              <h2 class=\"page-header\">\r\n                <img id=\"logo\" src=\"assets/images/aml-png-logo-web-1.png\" height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n                <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n              </h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row invoice-info\">\r\n            <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n          \r\n              <address>\r\n                <strong>AML,Logistics</strong>\r\n                Head Office Address: Plot No. 193, 1st Floor, \r\n                Street No.1, Sector I/10,\r\n                Industrial Area, Islamabad. \r\n                Phone: +92-51-4102361-62\r\n              \r\n              </address>\r\n            </div>\r\n            <!-- /.col -->\r\n          \r\n            <!-- /.col -->\r\n            <!-- /.col -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n              <h4><u>Dispatch Pick List With Pallet No</u></h4>\r\n            </div>\r\n        </div>\r\n     <!-- info row -->\r\n     <div class=\"row invoice-info\">\r\n      <div class=\"col-lg-6 invoice-col\" id=\"invoice-col\">\r\n        <div class=\"col-xs-12 table-responsive\" style=\"min-height: 150px;\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <td><b>Customer Name :</b></td>\r\n              <td>{{selectedCustomer.Name}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td><b>Agent :</b></td>\r\n              <td>{{Agent}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td><b>Address :</b></td>\r\n              <td>{{Address}}</td>\r\n            </tr>\r\n            <tr>        \r\n              <td><b>Phone No :</b></td>\r\n              <td>{{PhoneNumber}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <!-- /.col -->\r\n      <div class=\"col-lg-6 invoice-col\">\r\n        <div class=\"col-xs-12 table-responsive\" style=\"min-height: 150px;\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <td><b>Gate Pass No :</b></td>\r\n              <td>{{GatePassNo}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td><b>Customer Order Ref :</b></td>\r\n              <td>{{selectedPickupOrder.Name}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <!-- /.col -->\r\n     \r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  \r\n          <!-- Table row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 table-responsive\">\r\n              <table class=\"table table-striped\">\r\n                <thead>\r\n                <tr>\r\n                  <th>Sr.</th>\r\n                  <th>Pallet#</th>\r\n                  <th>Location</th>\r\n                  <th>\r\n                    Status\r\n                  </th>\r\n                  <th>\r\n                    Quantity\r\n                  </th>\r\n                  <th>\r\n                    Price\r\n                  </th>\r\n                  \r\n                  <th>UOM</th>\r\n                  <th>Boxes</th>\r\n                  <th>Batch#</th>\r\n                  <th>Expiry</th>\r\n            \r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let item of retrivedItemListByPickupOrder; index as i\">\r\n                  <tr><td colspan=\"11\" align=\"center\"><b>{{item.ItemName}}</b></td></tr>\r\n                <tr>               \r\n                  <td> {{i+1}}</td>\r\n                \r\n                  <td>{{item.PalletNo}}</td>\r\n                  <td>{{item.Location}}</td>\r\n                  <td>Ok</td>\r\n                  <td>{{item.Quantity}}</td>\r\n                  <td>Price</td>\r\n                  <td>{{item.Unit}}</td>\r\n                  <td>No. Of Boxes</td>\r\n                  <td>{{item.BatchNo}}</td>\r\n                 \r\n                  <td style=\"min-width:80px;\">{{item.ExpiryDate |date}}</td>\r\n                </tr>\r\n               \r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- /.col -->\r\n          </div>\r\n        \r\n          \r\n        </section>\r\n       \r\n\r\n       \r\n      </div>\r\n    </modal-content>\r\n  \r\n    <modal-footer>\r\n      <div class=\"row no-print\" id=\"printButton\">\r\n        <div class=\"col-xs-12\">\r\n          <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n          <button\r\n          [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n           class=\"btn-wms hidden-print print-btn\" printTitle=\"Job Execution Information\"\r\n            [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n            <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n            </span></button>\r\n        </div>\r\n      </div>\r\n    </modal-footer>\r\n  </modal>\r\n"

/***/ }),

/***/ "./src/app/layout/content/dispatch/templates/list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/dispatch/templates/list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    PICKUP LISTING\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_LISTING]\">Pickups</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                      background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.dispatchList, 'dispatch-list.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('dispatch-list.xlsx', 'tbl', 'Dispatch List')\" style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('dispatch-list.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                          Customer\r\n                        </a><br>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          Customer Order No\r\n                        </a><br>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                          Address\r\n                        </a><br>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                          Phone Number\r\n                        </a><br>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Gate Pass No\r\n                        </a><br>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th *ngIf=\"!hideShowList[0].status\">\r\n                        Customer\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[1].status\">\r\n                        Customer Order No\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[2].status\">\r\n                        Address\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[3].status\">\r\n                        Phone Number\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[4].status\">\r\n                        Gate Pass No\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let dispatch of dispatchList\">\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                      <td *ngIf=\"!hideShowList[1].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\">{{dispatch.Address}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\">{{dispatch.PhoneNumber}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\">{{dispatch.GatePassNo}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-dispatch-dispatch-module.js.map