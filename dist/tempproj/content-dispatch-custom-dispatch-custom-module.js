(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-dispatch-custom-dispatch-custom-module"],{

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

/***/ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/components/dispatch-custom-detail.component.ts ***!
  \***********************************************************************************************/
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
var dispatch_custom_service_1 = __webpack_require__(/*! ../services/dispatch-custom.service */ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DispatchCustomDetailComponent = /** @class */ (function (_super) {
    __extends(DispatchCustomDetailComponent, _super);
    function DispatchCustomDetailComponent(injector, _dispatchService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        return _this;
    }
    DispatchCustomDetailComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.getById();
    };
    DispatchCustomDetailComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + Id);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.dispatch = res;
                console.log("dispatch");
                console.log(_this.dispatch);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchCustomDetailComponent.prototype.redirectToListDispatch = function () {
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
        }
        // this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
    };
    DispatchCustomDetailComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-custom-detail",
            template: __webpack_require__(/*! ../templates/detail.component.html */ "./src/app/layout/content/dispatch-custom/templates/detail.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-custom-form.component.scss */ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_custom_service_1.DispatchService,
            router_1.ActivatedRoute])
    ], DispatchCustomDetailComponent);
    return DispatchCustomDetailComponent;
}(base_component_1.BaseComponent));
exports.DispatchCustomDetailComponent = DispatchCustomDetailComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-edit.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/components/dispatch-custom-edit.component.ts ***!
  \*********************************************************************************************/
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
var dispatch_custom_service_1 = __webpack_require__(/*! ../services/dispatch-custom.service */ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var DispatchCustomEditComponent = /** @class */ (function (_super) {
    __extends(DispatchCustomEditComponent, _super);
    function DispatchCustomEditComponent(injector, _dispatchService, activeRoute, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.locationDropdownSettings = {};
        _this.palletDropdownSettings = {};
        _this.batchDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.itemKeyPair = [];
        _this.locationKeyPair = [];
        _this.batchKeyPair = [];
        _this.palletKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        return _this;
    }
    DispatchCustomEditComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.getById();
        this.CompanyInfo();
    };
    DispatchCustomEditComponent.prototype.CompanyInfo = function () {
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
    DispatchCustomEditComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + Id);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.dispatch = res;
                console.log("dispatch");
                console.log(_this.dispatch);
                debugger;
                // this.dispatch["AML_DispatchDetail"].forEach(element=>{
                //     this.itemListToPost.push({
                //         ItemId: element["ItemId"],
                //         Quantity: element["Quantity"],
                //         Name: element["AML_ItemInformation"].Description + "|"+element["AML_ItemInformation"].Name,
                //           Location:element["Location"],
                //           Batch:element["BatchNo"],
                //           PalletNo:element["PalletNo"],
                //       })
                // })
                _this.getItemByCustomer(_this.dispatch);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
  * The following method is used to add the form validations
  */
    DispatchCustomEditComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("DispatchDate", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("LocationId", []);
        this.addFormControlWithValidations("BatchId", []);
        this.addFormControlWithValidations("PalletId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("Agent", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("GatePassNo", []);
        this.addFormControlWithValidations("PhoneNumber", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
    };
    DispatchCustomEditComponent.prototype.getCustomerKeyPair = function () {
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
    DispatchCustomEditComponent.prototype.getPickupOrderKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom + ("" + customerId);
        this._dispatchService.getData(apiAddress)
            .subscribe(function (res) {
            _this.pickupOrderKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomEditComponent.prototype.customerChange = function (event) {
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
    DispatchCustomEditComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    DispatchCustomEditComponent.prototype.getItemByCustomer = function (item) {
        var _this = this;
        var searchItemForDispatchModel = {
            CustomerId: item["CustomerId"],
            PickupOrderId: item["PickupOrderId"],
        };
        var apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
        this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
            .subscribe(function (res) {
            _this.retrivedItemListByPickupOrder = res;
            console.log("Retrieved Item");
            console.log(_this.retrivedItemListByPickupOrder);
            var temp = [];
            debugger;
            _this.retrivedItemListByPickupOrder.forEach(function (element) {
                var existing = temp.filter(function (x) { return x.Value === element.ItemId
                    && x.ParentReferenceId === element.Location; })[0];
                if (!existing) {
                    temp.push({
                        Value: element.ItemId,
                        Text: element.ItemName,
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
    DispatchCustomEditComponent.prototype.PickupOrderChange = function (event) {
        this.selectedPickupOrder = {
            Id: event.Value,
            Name: event.Text
        };
        if (this.selectedCustomer && this.selectedCustomer["Id"]
            && this.selectedPickupOrder && this.selectedPickupOrder["Id"]) {
            //this.getItemByCustomer();
            this.getPickupOrderById();
        }
    };
    DispatchCustomEditComponent.prototype.getPickupOrderById = function () {
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
    DispatchCustomEditComponent.prototype.pickupOrderDeSelect = function () {
        this.selectedPickupOrder = {};
    };
    DispatchCustomEditComponent.prototype.locationChange = function (event) {
        var _this = this;
        console.log(event);
        this.palletKeyPair = null;
        this.selectedPallet = {};
        this.formGroup.get("PalletId").setValue('');
        this.batchKeyPair = null;
        this.selectedBatch = {};
        this.formGroup.get("BatchId").setValue('');
        this.selectedLocation = {
            Value: event,
            Text: event
        };
        console.log(this.selectedLocation);
        var model = {
            ItemId: this.selectedItem["Value"],
            Location: event
        };
        var customerByIdUrl = this.apiConstant.GET_LOCATION_BATCH;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.batchKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomEditComponent.prototype.batchChange = function (event) {
        var _this = this;
        this.palletKeyPair = null;
        this.selectedPallet = {};
        this.formGroup.get("PalletId").setValue('');
        console.log(event);
        this.selectedBatch = {
            Value: event,
            Text: event
        };
        console.log(this.selectedBatch);
        var model = {
            ItemId: this.selectedItem["Value"],
            Location: this.selectedLocation["Value"],
            Batch: this.selectedBatch["Value"],
        };
        var customerByIdUrl = this.apiConstant.GET_LOCATION_BATCH_PALLET;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.palletKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomEditComponent.prototype.palletChange = function (event) {
        var _this = this;
        console.log(event);
        this.formGroup.get('QtyAvailableToAdd').setValue("0");
        this.selectedPallet = {
            Value: event,
            Text: event
        };
        var model = {
            ItemId: this.selectedItem["Value"],
            Location: this.selectedLocation["Value"],
            Batch: this.selectedBatch["Value"],
            PalletNo: this.selectedPallet["Value"],
        };
        var customerByIdUrl = this.apiConstant.GET_LOCATION_QUANTITY;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.availableAmount = res;
            console.log(_this.availableAmount);
            _this.formGroup.get('QtyAvailableToAdd').setValue(_this.availableAmount);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomEditComponent.prototype.itemChange = function (event) {
        // this.itemTempToAddIntoItemPostList["ItemId"]=event.Value;
        // this.itemTempToAddIntoItemPostList["Location"]=event.Text.split('|')[1].trim();
        // this.formGroup.get("QtyAvailableToAdd")
        // .setValue(this.getItemAvailableQty(event.Value,event.Text.split('|')[1].trim()));
        this.selectedItem = {
            Value: event.Value,
            Text: event.Text
        };
        this.locationKeyPair = null;
        this.RequiredQuantity = this.retrivedItemListByPickupOrder.filter(function (a) { return a.ItemId == event.Value; })[0].Quantity;
        this.getLocationsByItemId(event.Value);
    };
    DispatchCustomEditComponent.prototype.getLocationsByItemId = function (itemId) {
        var _this = this;
        if (itemId) {
            var customerByIdUrl = this.apiConstant.LOCATIONS_BY_ITEM_ID + ("" + itemId);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.locationKeyPair = res;
                console.log(_this.locationKeyPair);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchCustomEditComponent.prototype.itemDeSelect = function () {
        this.selectedItem = {};
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
        this.formGroup.get("QtyAvailableToAdd").setValue(0);
        this.formGroup.get('QtyToAdd').setValue(0);
    };
    DispatchCustomEditComponent.prototype.quantityChange = function (event) {
        var _this = this;
        var q = 0;
        this.itemListToPost.forEach(function (element) {
            if (_this.selectedItem["Value"] == element.ItemId) {
                q += element.Quantity;
            }
        });
        console.log(q);
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
        if ((Number(event.target.value) + q) > Number(this.RequiredQuantity)) {
            this.showToastrWarning("Quantity can not longer then " + this.RequiredQuantity);
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    DispatchCustomEditComponent.prototype.getItemAvailableQty = function (itemId, location) {
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
    DispatchCustomEditComponent.prototype.deleteFromitemListToPost = function (item) {
        this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
    };
    DispatchCustomEditComponent.prototype.addItemIntoItemPostList = function () {
        debugger;
        var locationInfo = this.selectedLocation["Text"];
        var batchInfo = this.selectedBatch["Text"];
        var palletInfo = this.selectedPallet["Text"];
        this.itemListToPost.push({
            ItemId: this.selectedItem["Value"],
            Quantity: this.formGroup.get('QtyToAdd').value,
            Name: this.selectedItem["Text"],
            //   UnitId:this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
            //     this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"].UOM,
            // Unit: this.retrivedItemListByPickupOrder.filter(x => x.ItemInformationId ===
            //   this.itemTempToAddIntoItemPostList["ItemId"])[0]["ItemInformation"]["Unit"]["Title"],
            Location: locationInfo,
            Batch: batchInfo,
            PalletNo: palletInfo,
        });
        this.itemTempToAddIntoItemPostList = {};
        this.formGroup.get("QtyToAdd").setValue('');
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("BatchId").setValue('');
        this.formGroup.get("PalletId").setValue('');
        this.RequiredQuantity = null;
        this.selectedItem = null;
        this.selectedLocation = null;
    };
    DispatchCustomEditComponent.prototype.updateDispatch = function (formValue) {
        if (this.formGroup.valid) {
            //   if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
            //     this.showToastrWarning("Select Customer please.");
            //     return false;
            //   }
            //   if(!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]){
            //     this.showToastrWarning("Select Customer Order please.");
            //     return false;
            //   }
            //   if(this.retrivedItemListByPickupOrder.length <= 0){
            //     this.showToastrWarning("Add item please.");
            //     return false;
            //   }
            this.executeDispatchUpdate(formValue);
        }
    };
    DispatchCustomEditComponent.prototype.executeDispatchUpdate = function (formValue) {
        var _this = this;
        var dis = {
            //   Agent: formValue.Agent,
            //   DriverName: formValue.DriverName,
            //   GatePassNo: formValue.GatePassNo,
            //   PhoneNumber: formValue.PhoneNumber,
            //   Address: formValue.Address,
            //   DispatchDate: formValue.DispatchDate,
            CustomerId: this.dispatch["CustomerId"],
            PickupOrderId: this.dispatch["PickupOrderId"],
            //   CustomerId:this.selectedCustomer["Id"],
            //   PickupOrderId:this.selectedPickupOrder["Id"],
            DispatchId: this.dispatch["DispatchId"],
            DispatchDetails: this.itemListToPost,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_Customers: undefined,
            AML_PickupOrder: undefined,
            AML_Warehouse: undefined
        };
        console.log(dis);
        var apiUrl = this.apiConstant.DISPATCH_UPDATE + ("/" + this.dispatch.DispatchId);
        this.ngxService.start();
        this._dispatchService.update(apiUrl, dis)
            .subscribe(function (res) {
            //this.openModal();
            _this.showToastrSuccess("Dispatch Update successfully");
            setTimeout(function () {
                _this.redirectToDispatchCustomList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DispatchCustomEditComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    DispatchCustomEditComponent.prototype.dropdownSettings = function () {
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
        this.locationDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.batchDropdownSettings = {
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
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DispatchCustomEditComponent.prototype.getErrorMessage = function (formElement) {
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
    DispatchCustomEditComponent.prototype.redirectToDispatchCustomList = function () {
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
        }
        // this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
    };
    DispatchCustomEditComponent.prototype.openModal = function () {
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
    ], DispatchCustomEditComponent.prototype, "AllModal", void 0);
    DispatchCustomEditComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-custom-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/dispatch-custom/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-custom-form.component.scss */ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_custom_service_1.DispatchService,
            router_1.ActivatedRoute, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DispatchCustomEditComponent);
    return DispatchCustomEditComponent;
}(base_component_1.BaseComponent));
exports.DispatchCustomEditComponent = DispatchCustomEditComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/components/dispatch-custom-form.component.ts ***!
  \*********************************************************************************************/
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
var dispatch_custom_service_1 = __webpack_require__(/*! ../services/dispatch-custom.service */ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var DispatchCustomFormComponent = /** @class */ (function (_super) {
    __extends(DispatchCustomFormComponent, _super);
    function DispatchCustomFormComponent(injector, _dispatchService, activeRoute, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.locationDropdownSettings = {};
        _this.palletDropdownSettings = {};
        _this.batchDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.itemKeyPair = [];
        _this.locationKeyPair = [];
        _this.batchKeyPair = [];
        _this.palletKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        _this.ReserveQty = 0;
        _this.formType = "customer";
        return _this;
    }
    DispatchCustomFormComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.CompanyName = this.localStorageService.getCompanyName();
        this.CompanyInfo();
    };
    DispatchCustomFormComponent.prototype.CompanyInfo = function () {
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
    DispatchCustomFormComponent.prototype.radioChange = function (e) {
        //debugger
        //this.formType = e.target.value;
        this.customerDeSelect();
        this.getCustomerKeyPair();
        // this.dropdownHideShow =!this.dropdownHideShow 
        // if(this.dropdownHideShow===true)
        // {
        //   this.dropdownHideShow=false;
        // }else
        // {
        //   this.dropdownHideShow=true;
        //   //this.selectedToWarehouse = {};
        // }
        //debugger
    };
    /**
  * The following method is used to add the form validations
  */
    DispatchCustomFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("PickupOrderId", requiredValidation);
        this.addFormControlWithValidations("CustomerId", requiredValidation);
        this.addFormControlWithValidations("DispatchDate", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("LocationId", []);
        this.addFormControlWithValidations("BatchId", []);
        this.addFormControlWithValidations("PalletId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("Agent", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("GatePassNo", []);
        this.addFormControlWithValidations("PhoneNumber", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
        this.addFormControlWithValidations("PRNOs", []);
        this.addFormControlWithValidations("PalletNO", []);
        this.addFormControlWithValidations("SKUStatus", []);
        this.addFormControlWithValidations("InboundPoolName", []);
        this.addFormControlWithValidations("ReserveQty", []);
    };
    DispatchCustomFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            FormType: this.formType
        };
        // let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR_BY_ORDERTYPE;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomFormComponent.prototype.getPickupOrderKeyPair = function (customerId) {
        var _this = this;
        // let apiAddress: string = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom + `${customerId}`;
        var apiAddress = this.apiConstant.DISPATCH_GetCustomerOrderKeyPairByCustomerIdCustom_AndOrderType;
        var requestModel = {
            CustomerId: customerId,
            FormType: this.formType
        };
        this._dispatchService.getKeyPair(apiAddress, requestModel)
            .subscribe(function (res) {
            _this.pickupOrderKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        debugger;
        if (event.Value) {
            this.getPickupOrderKeyPair(Number(event.Value));
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("PickupOrderId").setValue('');
            this.itemListToPost = [];
            this.itemTempToAddIntoItemPostList = [];
        }
    };
    DispatchCustomFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        //this.customerKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.formGroup.get("CustomerId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    DispatchCustomFormComponent.prototype.getItemByCustomer = function () {
        var _this = this;
        var searchItemForDispatchModel = {
            CustomerId: this.selectedCustomer["Id"],
            PickupOrderId: this.selectedPickupOrder["Id"],
        };
        var apiUrl = this.apiConstant.DISPATCH_GetOrderedItem;
        this._dispatchService.getAll(apiUrl, searchItemForDispatchModel)
            .subscribe(function (res) {
            _this.retrivedItemListByPickupOrder = res;
            //console.log("Retrieved Item")
            // console.log(this.retrivedItemListByPickupOrder);
            var temp = [];
            _this.retrivedItemListByPickupOrder.forEach(function (element) {
                var existing = temp.filter(function (x) { return x.Value === element.ItemId
                    && x.ParentReferenceId === element.Location; })[0];
                if (!existing) {
                    temp.push({
                        Value: element.ItemId,
                        Text: element.ItemName,
                        ParentReferenceId: element.Location
                    });
                }
            });
            debugger;
            _this.itemListToPost.forEach(function (element) {
                var filtering = temp.filter(function (x) { return x.Value === element.ItemId; });
                if (!filtering) {
                    temp.push({
                        Value: element.ItemId,
                        Text: element.ItemName,
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
    DispatchCustomFormComponent.prototype.PickupOrderChange = function (event) {
        this.selectedPickupOrder = {
            Id: event.Value,
            Name: event.Text
        };
        if (this.selectedCustomer && this.selectedCustomer["Id"]
            && this.selectedPickupOrder && this.selectedPickupOrder["Id"]) {
            //this.getItemByCustomer();
            this.getPickupOrderById();
        }
    };
    DispatchCustomFormComponent.prototype.getPickupOrderById = function () {
        var _this = this;
        this.TotalQtyReserve = 0;
        this.ReserveQty = 0;
        this.itemListToPost = [];
        var PickupOrderId = this.selectedPickupOrder["Id"];
        if (PickupOrderId) {
            var customerByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + PickupOrderId);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                debugger;
                _this.pickupOrder = res;
                _this.DistCode = _this.pickupOrder.DistCode;
                _this.DistName = _this.pickupOrder.DistName;
                _this.DistAddress = _this.pickupOrder.DistAddress;
                debugger;
                var AvailItemDetail = _this.pickupOrder["ListAvailableStocksItem"];
                _this.pickupOrder["PickupOrderChilds"].forEach(function (element) {
                    _this.pickupOrder["ListAvailableStocksItem"].forEach(function (ele) {
                        if (element.ItemId === ele.ItemId) {
                            if ((ele.Balance - ele.TransitQuantity) > 0) {
                                if (element.Quantity >= ((ele.Balance - ele.TransitQuantity) + _this.ReserveQty)) {
                                    _this.ReserveQty = ((ele.Balance - ele.TransitQuantity) + _this.ReserveQty);
                                    _this.TotalQtyReserve += _this.ReserveQty;
                                    debugger;
                                    _this.itemListToPost.push({
                                        ItemId: ele["ItemId"],
                                        Balance: ele["Balance"],
                                        Quantity: ele["Quantity"],
                                        TransitQuantity: ele["TransitQuantity"],
                                        QtySupply: ele.Balance - ele.TransitQuantity,
                                        Name: ele["Name"],
                                        Description: ele["Description"],
                                        Location: ele["Location"],
                                        Batch: ele["BatchCode"],
                                        PalletNo: ele["PalletNo"],
                                        SNno: ele["SNno"],
                                        PRno: ele["PRno"],
                                        Status: ele["Status"],
                                        InboundPool: ele["InboundPool"],
                                        SlaMode: ele["SlaMode"],
                                        MfgDate: ele["MfgDate"],
                                        ExpDate: ele["ExpDate"]
                                    });
                                }
                                else if (element.Quantity < ((ele.Balance - ele.TransitQuantity) + _this.ReserveQty)) {
                                    _this.TotalQtyReserve = (element.Quantity - _this.ReserveQty);
                                    //this.TotalQty += this.ReserveQty;
                                    if (_this.TotalQtyReserve > 0) {
                                        _this.itemListToPost.push({
                                            ItemId: ele["ItemId"],
                                            Balance: ele["Balance"],
                                            Quantity: ele["Quantity"],
                                            TransitQuantity: ele["TransitQuantity"],
                                            QtySupply: (_this.TotalQtyReserve),
                                            Name: ele["Name"],
                                            Description: ele["Description"],
                                            Location: ele["Location"],
                                            Batch: ele["BatchCode"],
                                            PalletNo: ele["PalletNo"],
                                            SNno: ele["SNno"],
                                            PRno: ele["PRno"],
                                            Status: ele["Status"],
                                            InboundPool: ele["InboundPool"],
                                            SlaMode: ele["SlaMode"],
                                            MfgDate: ele["MfgDate"],
                                            ExpDate: ele["ExpDate"]
                                        });
                                    }
                                    _this.ReserveQty = (_this.ReserveQty + _this.TotalQtyReserve);
                                }
                            }
                        }
                    });
                    _this.ReserveQty = 0;
                    _this.TotalQtyReserve = 0;
                    _this.TotalQty = _this.TotalQty + element["Quantity"];
                });
                console.log(_this.itemListToPost);
                _this.ReserveQty = 0;
                _this.TotalQtyReserve = 0;
                _this.TotalQty = 0;
                debugger;
                _this.itemListToPost.forEach(function (element) {
                    _this.ReserveQty += element.QtySupply;
                });
                _this.pickupOrder.PickupOrderChilds.forEach(function (element) {
                    _this.TotalQty += element.Quantity;
                });
                debugger;
                if (_this.pickupOrder.PickupMethod == 5) {
                    var temp_1 = [];
                    var itemListToPosttemp_1 = [];
                    _this.itemListToPost.forEach(function (element) {
                        if (element.SNno == null || element.SNno == undefined || element.SNno == "") {
                            temp_1.push({
                                Value: element.ItemId,
                                Text: element.Name,
                            });
                            // this.itemListToPost.splice(i,i+1);
                        }
                        else {
                            itemListToPosttemp_1.push({
                                Batch: element.Batch,
                                InboundPool: element.InboundPool,
                                ItemId: element.ItemId,
                                Location: element.Location,
                                Name: element.Name,
                                PRno: element.PRno,
                                PalletNo: element.PalletNo,
                                Quantity: element.Quantity,
                                SNno: element.SNno,
                                Status: element.Status,
                                SlaMode: element.SlaMode
                            });
                        }
                    });
                    _this.itemKeyPair = temp_1;
                    if (_this.itemKeyPair != null) {
                        _this.showToastrError("Pickup Method is CUSTOM Select SKU Dropdown List.. Please Select Manual Location");
                    }
                    _this.itemListToPost = [];
                    _this.itemListToPost = itemListToPosttemp_1;
                }
            }),
                function (error) {
                    _this.errorHandler.handleError(error);
                    _this.errorMessage = _this.errorHandler.errorMessage;
                };
        }
    };
    DispatchCustomFormComponent.prototype.addItemRelOrd = function (event, itemId) {
        var model = this.itemListToPost.filter(function (x) { return x.ItemId === itemId; })[0];
        if (model) {
            model.QtySupply = parseInt(event.target.value);
        }
        this.qtyCount();
    };
    DispatchCustomFormComponent.prototype.pickupOrderDeSelect = function () {
        this.selectedPickupOrder = {};
    };
    DispatchCustomFormComponent.prototype.locationChange = function (event) {
        var _this = this;
        this.selectedLocation = {
            Value: event,
            Text: event
        };
        var model = {
            ItemId: this.selectedItem["Value"],
            Location: (this.selectedLocation["Value"].split(">>")[0]),
            PalletNo: (this.selectedLocation["Value"].split(">>")[1]),
            Batch: this.selectedBatch["Value"],
            WarehouseId: this.pickupOrder.WarehouseId
        };
        debugger;
        var customerByIdUrl = this.apiConstant.GET_LOCATION_QUANTITY;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            var objList = res;
            _this.availableAmount = objList[0]["Balance"],
                _this.selectedPrNo = objList[0]["PRno"],
                _this.selectedSnNo = objList[0]["PalletNo"],
                _this.status = objList[0]["Status"],
                _this.InboundPool = objList[0]["InboundPool"],
                _this.formGroup.get('QtyAvailableToAdd').setValue(_this.availableAmount);
            _this.formGroup.get('PRNOs').setValue(_this.selectedPrNo);
            _this.formGroup.get('PalletNO').setValue(_this.selectedSnNo);
            _this.formGroup.get('SKUStatus').setValue(_this.status);
            _this.formGroup.get('InboundPoolName').setValue(_this.InboundPool);
            _this.CalculateReserveQty();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomFormComponent.prototype.batchChange = function (event) {
        var _this = this;
        this.palletKeyPair = null;
        //this.selectedPallet={};
        this.selectedBatch = {
            Value: event.Value,
            Text: event.Text
        };
        var model = {
            ItemId: this.selectedItem["Value"],
            //  SNno: this.selectedPallet["Value"],
            Batch: this.selectedBatch["Value"],
            WarehouseId: this.pickupOrder.WarehouseId
        };
        debugger;
        this.BatchCode = this.selectedBatch["Text"].substring(0, 10);
        this.ExpDate = this.selectedBatch["Text"].substring(46, 56);
        this.MfgDate = this.selectedBatch["Text"].substring(23, 33);
        var customerByIdUrl = this.apiConstant.LOCATIONS_BY_ITEM_ID;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.locationKeyPair = res;
            var tempList = [];
            _this.locationKeyPair.forEach(function (element) {
                var obj = tempList.find(function (x) { return x.Value === element.Value; });
                if (!obj) {
                    tempList.push(element);
                }
            });
            _this.locationKeyPair = tempList;
            _this.CalculateReserveQty();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
        //this.getLocationsByItemId(model);
        // let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH_PALLET;
        //   this._dispatchService.getAll(customerByIdUrl,model)
        //     .subscribe(res => {
        //       this.palletKeyPair = res as DropdownListDto[];
        //     },
        //       (error) => {
        //         this.errorHandler.handleError(error);
        //         this.errorMessage = this.errorHandler.errorMessage;
        //       })
    };
    DispatchCustomFormComponent.prototype.getLocationsByItemId = function (model) {
        debugger;
        if (model.ItemId) {
        }
    };
    DispatchCustomFormComponent.prototype.palletChange = function (event) {
        var _this = this;
        var eventText = event["Text"];
        var palletText = event.split("-");
        this.batchKeyPair = null;
        this.selectedBatch = {};
        this.formGroup.get("BatchId").setValue('');
        this.locationKeyPair = null;
        this.selectedLocation = {};
        this.formGroup.get("LocationId").setValue('');
        //this.formGroup.get("RequiredQuantity").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
        this.selectedPallet = {
            Value: palletText[0],
            Text: palletText[0]
        };
        this.selectedSnNo = {
            Value: palletText[1],
            Text: palletText[1]
        };
        this.selectedPrNo = {
            Value: palletText[2],
            Text: palletText[2]
        };
        var model = {
            ItemId: this.selectedItem["Value"],
            SNno: this.selectedPallet["Value"],
        };
        var customerByIdUrl = this.apiConstant.GET_LOCATION_BATCH;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.batchKeyPair = res;
            var tempList = [];
            _this.batchKeyPair.forEach(function (element) {
                var obj = tempList.find(function (x) { return x.Value === element.Value; });
                if (!obj) {
                    tempList.push(element);
                }
            });
            _this.batchKeyPair = tempList;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomFormComponent.prototype.itemChange = function (event) {
        var _this = this;
        debugger;
        this.batchKeyPair = null;
        this.selectedBatch = {};
        this.formGroup.get("BatchId").setValue('');
        this.locationKeyPair = null;
        this.selectedLocation = {};
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue(0);
        this.formGroup.get("QtyToAdd").setValue(0);
        this.selectedItem = {
            Value: event.Value,
            Text: event.Text
        };
        this.locationKeyPair = null;
        this.RequiredQuantity = this.pickupOrder.PickupOrderChilds.filter(function (a) { return a.ItemId == event.Value; })[0].Quantity;
        var model = {
            ItemId: this.selectedItem["Value"],
            JobId: this.selectedPickupOrder["Id"],
            WarehouseId: this.pickupOrder.WarehouseId
        };
        //let customerByIdUrl: string = this.apiConstant.GET_LOCATION_BATCH_PALLET;
        var customerByIdUrl = this.apiConstant.GET_LOCATION_BATCH;
        this._dispatchService.getAll(customerByIdUrl, model)
            .subscribe(function (res) {
            _this.batchKeyPair = res;
            debugger;
            if (_this.batchKeyPair[0].Value != '') {
                var tempList_1 = [];
                _this.batchKeyPair.forEach(function (element) {
                    var obj = tempList_1.find(function (x) { return x.Value === element.Value; });
                    if (!obj) {
                        tempList_1.push(element);
                    }
                });
                _this.batchKeyPair = tempList_1;
            }
            else {
                var customerByIdUrl_1 = _this.apiConstant.LOCATIONS_BY_ITEM_ID;
                _this._dispatchService.getAll(customerByIdUrl_1, model)
                    .subscribe(function (res) {
                    _this.locationKeyPair = res;
                    var tempList = [];
                    _this.locationKeyPair.forEach(function (element) {
                        var obj = tempList.find(function (x) { return x.Value === element.Value; });
                        if (!obj) {
                            tempList.push(element);
                        }
                    });
                    _this.locationKeyPair = tempList;
                    console.log(_this.locationKeyPair);
                    _this.CalculateReserveQty();
                }, function (error) {
                    _this.errorHandler.handleError(error);
                    _this.errorMessage = _this.errorHandler.errorMessage;
                });
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomFormComponent.prototype.itemDeSelect = function () {
        this.selectedItem = {};
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
        this.palletKeyPair = null;
        this.selectedPallet = {};
        this.formGroup.get("PalletId").setValue('');
        this.batchKeyPair = null;
        this.selectedBatch = {};
        this.formGroup.get("BatchId").setValue('');
        this.locationKeyPair = null;
        this.selectedLocation = {};
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
    };
    DispatchCustomFormComponent.prototype.palletDeSelect = function () {
        this.batchKeyPair = null;
        this.selectedBatch = {};
        this.formGroup.get("BatchId").setValue('');
        this.locationKeyPair = null;
        this.selectedLocation = {};
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
    };
    DispatchCustomFormComponent.prototype.batchDeSelect = function () {
        this.locationKeyPair = null;
        this.selectedLocation = {};
        this.formGroup.get("LocationId").setValue('');
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
    };
    DispatchCustomFormComponent.prototype.locationDeSelect = function () {
        this.formGroup.get("QtyAvailableToAdd").setValue('');
        this.formGroup.get("QtyToAdd").setValue('');
    };
    DispatchCustomFormComponent.prototype.quantityChange = function (event) {
        debugger;
        var q = 0;
        // this.itemListToPost.forEach(element => {
        //   if (this.selectedItem["Value"] == element.ItemId && this.selectedPallet["Value"] == element.SNno) {
        //     q += element.Quantity;
        //   }
        // })
        // console.log(q)
        q = this.ReserveQty;
        if (!this.selectedItem) {
            this.showToastrWarning('Select item please');
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        if (Number(event.target.value) <= 0 || event.target.value == undefined) {
            this.showToastrWarning("Invalid Quantity");
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        if (Number(event.target.value) > Number(this.formGroup.get("QtyAvailableToAdd").value)) {
            this.showToastrWarning("Quantity can not Greater than " + this.formGroup.get("QtyAvailableToAdd").value);
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        if ((Number(event.target.value) + q) > Number(this.RequiredQuantity)) {
            this.showToastrWarning("Total Quantity can not Greater than : " + this.RequiredQuantity + " - Need More Quantity is : " + Number(this.RequiredQuantity - this.ReserveQty));
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    DispatchCustomFormComponent.prototype.getItemAvailableQty = function (itemId, location) {
        var totalQty = 0;
        //debugger
        var data = this.retrivedItemListByPickupOrder
            .filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (data && data.length > 0) {
            data.forEach(function (element) {
                totalQty = (totalQty + Number(element.Quantity));
            });
        }
        return totalQty;
    };
    DispatchCustomFormComponent.prototype.qtyCount = function () {
        var _this = this;
        debugger;
        this.ReserveQty = 0;
        this.itemListToPost.forEach(function (element) {
            _this.ReserveQty += element.QtySupply;
            //this.TotalWeightInbound += Quantity;
        });
    };
    DispatchCustomFormComponent.prototype.deleteFromitemListToPost = function (item) {
        this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
        this.qtyCount();
    };
    DispatchCustomFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        debugger;
        this.FlagList = false;
        this.itemListToPost.forEach(function (element) {
            if (element.ItemId === _this.selectedItem["Value"] && element.SNno === "" && element.Batch === _this.selectedBatch["Text"] &&
                element.Location === _this.selectedLocation["Text"].split(">>")[0] && element.PalletNo === _this.selectedLocation["Text"].split(">>")[1]) {
                _this.showToastrWarning("Same SKU with Same Location and Pallet No Already Include..");
                _this.FlagList = true;
            }
        });
        if (!this.FlagList) {
            if (this.formGroup.get('QtyToAdd').value === 0 || this.formGroup.get('QtyToAdd').value === '') {
                this.showToastrWarning("Must Enter Valid Quantity Value");
                return false;
            }
            else {
                var locationInfo = this.selectedLocation["Text"].split(">>")[0];
                var batchInfo = this.selectedBatch["Text"];
                var palletInfo = this.selectedSnNo;
                var snInfo = '';
                var prInfo = this.selectedPrNo;
                this.itemListToPost.push({
                    ItemId: this.selectedItem["Value"],
                    Quantity: this.RequiredQuantity,
                    Name: this.selectedItem["Text"],
                    Location: locationInfo,
                    Batch: this.BatchCode,
                    PalletNo: palletInfo,
                    SNno: snInfo,
                    PRno: prInfo,
                    Status: this.status,
                    InboundPool: this.InboundPool,
                    MfgDate: this.MfgDate,
                    ExpDate: this.ExpDate,
                    Balance: this.availableAmount,
                    QtySupply: this.formGroup.get('QtyToAdd').value,
                    ReserveQty: this.ReserveQty,
                });
                this.TotalQty += this.formGroup.get('QtyToAdd').value;
                console.log(this.itemListToPost);
                this.FlagList = 'True';
                this.itemTempToAddIntoItemPostList = {};
                this.formGroup.get("QtyToAdd").setValue('');
                //this.formGroup.get("ItemId").setValue('');
                this.formGroup.get("QtyAvailableToAdd").setValue('');
                this.formGroup.get("LocationId").setValue('');
                this.formGroup.get("BatchId").setValue('');
                this.formGroup.get("PalletId").setValue('');
                //this.RequiredQuantity = null;
                //this.selectedItem = null;
                this.selectedLocation = null;
                this.formGroup.controls["PickupOrderId"].disabled;
                this.CalculateReserveQty();
            }
            //this.formGroup.get("selectedPickupOrder").disabled;      
        }
    };
    DispatchCustomFormComponent.prototype.createDispatch = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]) {
                this.showToastrWarning("Select Customer Order please.");
                return false;
            }
            if (this.itemListToPost.length <= 0) {
                this.showToastrWarning("Add item please.");
                return false;
            }
            this.executeDispatchCreation(formValue);
        }
    };
    DispatchCustomFormComponent.prototype.executeDispatchCreation = function (formValue) {
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
            DispatchDetails: this.itemListToPost,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_Customers: undefined,
            AML_PickupOrder: undefined,
            AML_Warehouse: undefined
        };
        console.log(dispatch);
        var apiUrl = this.apiConstant.DISPATCH_CREATE;
        this.ngxService.start();
        this._dispatchService.create(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.returnDispatch = res;
            console.log(_this.returnDispatch);
            _this.FlagDispatch = 'True';
            if (_this.returnDispatch) {
                _this.openModal();
                _this.showToastrSuccess("Pickup Plan for Dispatch created successfully");
            }
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DispatchCustomFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    DispatchCustomFormComponent.prototype.dropdownSettings = function () {
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
        this.locationDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.batchDropdownSettings = {
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
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DispatchCustomFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DispatchCustomFormComponent.prototype.CalculateReserveQty = function () {
        var _this = this;
        this.ReserveQty = 0;
        this.itemListToPost.forEach(function (element) {
            if (element.ItemId === _this.selectedItem["Value"] && element.SNno === "" && element.Batch === _this.selectedBatch["Text"]) {
                _this.ReserveQty = _this.ReserveQty + element.Quantity;
            }
            else if (element.ItemId === _this.selectedItem["Value"] && element.SNno === _this.selectedBatch["Text"]) {
                _this.ReserveQty = _this.ReserveQty + element.Quantity;
            }
        });
    };
    DispatchCustomFormComponent.prototype.redirectToDispatchCustomList = function () {
        if (this.dropdownHideShow == true) {
            this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
        }
        else {
            this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
        }
    };
    DispatchCustomFormComponent.prototype.openModal = function () {
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
            closeOnOutsideClick: false,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-xl'
        });
    };
    DispatchCustomFormComponent.prototype.CloseModal = function () {
        debugger;
        this.modalService.close(this.AllModal);
        $('#AllModal').hide();
        //this.redirectTo()
        // this.loadComponent = false;
    };
    __decorate([
        core_1.ViewChild('AllModal'),
        __metadata("design:type", Object)
    ], DispatchCustomFormComponent.prototype, "AllModal", void 0);
    DispatchCustomFormComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-custom-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/dispatch-custom/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-custom-form.component.scss */ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_custom_service_1.DispatchService,
            router_1.ActivatedRoute, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DispatchCustomFormComponent);
    return DispatchCustomFormComponent;
}(base_component_1.BaseComponent));
exports.DispatchCustomFormComponent = DispatchCustomFormComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/components/dispatch-custom-list.component.ts ***!
  \*********************************************************************************************/
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
var dispatch_custom_service_1 = __webpack_require__(/*! ../services/dispatch-custom.service */ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var DispatchCustomListComponent = /** @class */ (function (_super) {
    __extends(DispatchCustomListComponent, _super);
    function DispatchCustomListComponent(injector, _dispatchService, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.isCustomerPlan = false;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.hideShowList1 = [];
        _this.hideShowList2 = [];
        _this.TotalQty = 0;
        _this.TotalQtyInPacking = 0;
        return _this;
    }
    DispatchCustomListComponent.prototype.ngOnInit = function () {
        this.isCustomerPlan = this.router.url.includes("customer");
        this.FormType = this.isCustomerPlan == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.CompanyInfo();
        //this.getAllPickupOrders();
        for (var i = 0; i < 13; i++) {
            this.hideShowList1.push({ status: true });
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
        this.hideShowList1[12].status = false;
        for (var i = 0; i < 13; i++) {
            this.hideShowList2.push({ status: true });
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
        this.hideShowList1[12].status = false;
    };
    DispatchCustomListComponent.prototype.CompanyInfo = function () {
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
    //Excel Conversion
    DispatchCustomListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    DispatchCustomListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    DispatchCustomListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    DispatchCustomListComponent.prototype.HideShow1 = function (index) {
        var i = Number(index);
        if (this.hideShowList1[i].status) {
            this.hideShowList1[i].status = false;
        }
        else {
            this.hideShowList1[i].status = true;
        }
    };
    DispatchCustomListComponent.prototype.HideShow2 = function (index) {
        var i = Number(index);
        if (this.hideShowList2[i].status) {
            this.hideShowList2[i].status = false;
        }
        else {
            this.hideShowList2[i].status = true;
        }
    };
    DispatchCustomListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    DispatchCustomListComponent.prototype.onDeSelect = function () {
        this.pickupOrderCompleted = [];
        this.pickupOrderPending = [];
        this.pickupOrderCancel = [];
    };
    DispatchCustomListComponent.prototype.dropdownSettings = function () {
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
    DispatchCustomListComponent.prototype.getCustomerKeyPair = function () {
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
    DispatchCustomListComponent.prototype.customerChange = function (item) {
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
            FormType: this.FormType
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
        this.ngxService.start();
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            _this.idstribution();
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCustomListComponent.prototype.idstribution = function () {
        debugger;
        // console.log(this.dispatchList)
        // this.pickupOrderCompleted = this.dispatchList.filter(x => x.IsCompleted=== false && x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === false);
        this.pickupOrderPending = this.dispatchList.filter(function (x) { return x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false; });
        this.pickupOrderCancel = this.dispatchList.filter(function (x) { return x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === true; });
    };
    DispatchCustomListComponent.prototype.reportmodal = function (pickupId) {
        var _this = this;
        debugger;
        this.ngxService.start();
        var dispatchId = pickupId;
        if (dispatchId) {
            var dischId = {
                DispatchId: pickupId,
            };
            // let dispatchBySKU: string = this.apiConstant.DISPATCH_GetById + `${pickupId}`;
            //     this._dispatchService.getData(dispatchBySKU)
            //     .subscribe(res => {
            //       debugger
            //       this.rep_dispatchDataTemp  = res as any;
            //     },
            //     (error) => {
            //       this.ngxService.stop();
            //       this.errorHandler.handleError(error);
            //       this.errorMessage = this.errorHandler.errorMessage;
            //     })
            var dispatchByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + dispatchId);
            this._dispatchService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                debugger;
                _this.rep_pickupOrder = res;
                console.log(_this.rep_pickupOrder);
                _this.openModal();
                _this.rep_CustomerName = _this.rep_pickupOrder.AML_Customers.Name;
                _this.rep_PickupId = _this.rep_pickupOrder.AML_PickupOrder.PickupOrderId;
                _this.rep_GatePassNo = _this.rep_pickupOrder.GatePassNo;
                _this.rep_CustomerOrderNo = _this.rep_pickupOrder.AML_PickupOrder.CustomerOrderNo;
                // this.rep_CityName=this.rep_pickupOrder.AML_PickupOrder.CityName;
                // this.rep_LoadingDate=this.rep_pickupOrder.AML_PickupOrder.LoadingDate;
                // this.rep_waybill=this.rep_pickupOrder.AML_PickupOrder.waybill;
                _this.rep_deliveryAddress = _this.rep_pickupOrder.AML_PickupOrder.Address;
                _this.rep_DistCode = _this.rep_pickupOrder.RefNo;
                _this.rep_DistAddress = _this.rep_pickupOrder.Remarks;
                _this.rep_DistName = _this.rep_pickupOrder.ProjectName;
                _this.rep_dispatchData = _this.rep_pickupOrder.AML_DispatchDetail;
                _this.TotalQty = 0;
                _this.TotalQtyInPacking = 0;
                _this.rep_dispatchData.forEach(function (element) {
                    _this.TotalQty = element.Quantity + _this.TotalQty;
                });
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchCustomListComponent.prototype.getAllPickupOrders = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST;
        this.ngxService.start();
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            // console.log(this.dispatchList)
            //console.log(this.dispatchList)
            // Now you can use jQuery DataTables :
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
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    DispatchCustomListComponent.prototype.Edit = function (id) {
        var updateUrl = [this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_EDIT : this.routesList.DISPATCH_TRANSFER_EDIT] + ("/" + id);
        // let updateUrl: string = this.routesList.DISPATCH_CUSTOMER_EDIT+`/${id}`;
        this.router.navigate([updateUrl]);
    };
    DispatchCustomListComponent.prototype.Detail = function (id) {
        var updateUrl = [this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_DETAIL : this.routesList.DISPATCH_TRANSFER_DETAIL] + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    DispatchCustomListComponent.prototype.delete = function (id, name) {
        var _this = this;
        debugger;
        if (confirm("Are you sure to delete? ")) {
            var apiAddress = this.apiConstant.PICKUP_ORDER_DELETE + ("/" + id);
            this._dispatchService.delete(apiAddress)
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
    DispatchCustomListComponent.prototype.openModal = function () {
        // this.Agent = this.formGroup.get("Agent").value;
        // this.GatePassNo = this.formGroup.get("GatePassNo").value;
        // this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
        // this.Address = this.formGroup.get("Address").value;
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
    DispatchCustomListComponent.prototype.redirectToCreateDispatch = function () {
        this.router.navigate([this.isCustomerPlan == true ? this.routesList.DISPATCH_CUSTOMER_CREATE : this.routesList.DISPATCH_TRANSFER_CREATE]);
    };
    __decorate([
        core_1.ViewChild('AllModal'),
        __metadata("design:type", Object)
    ], DispatchCustomListComponent.prototype, "AllModal", void 0);
    DispatchCustomListComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-custom-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/dispatch-custom/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-custom-form.component.scss */ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dispatch_custom_service_1.DispatchService, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DispatchCustomListComponent);
    return DispatchCustomListComponent;
}(base_component_1.BaseComponent));
exports.DispatchCustomListComponent = DispatchCustomListComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/components/report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/components/report.component.ts ***!
  \*******************************************************************************/
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
var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'app-report',
            template: __webpack_require__(/*! ../templates/report.component.html */ "./src/app/layout/content/dispatch-custom/templates/report.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-custom-form.component.scss */ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/dispatch-custom.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/dispatch-custom.module.ts ***!
  \**************************************************************************/
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
var dispatch_custom_service_1 = __webpack_require__(/*! ./services/dispatch-custom.service */ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts");
var dispatch_custom_form_component_1 = __webpack_require__(/*! ./components/dispatch-custom-form.component */ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-form.component.ts");
var dispatch_custom_list_component_1 = __webpack_require__(/*! ./components/dispatch-custom-list.component */ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var dispatch_custom_detail_component_1 = __webpack_require__(/*! ./components/dispatch-custom-detail.component */ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-detail.component.ts");
var dispatch_custom_edit_component_1 = __webpack_require__(/*! ./components/dispatch-custom-edit.component */ "./src/app/layout/content/dispatch-custom/components/dispatch-custom-edit.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var report_component_1 = __webpack_require__(/*! ./components/report.component */ "./src/app/layout/content/dispatch-custom/components/report.component.ts");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: dispatch_custom_list_component_1.DispatchCustomListComponent,
            },
            {
                path: "create",
                component: dispatch_custom_form_component_1.DispatchCustomFormComponent,
            },
            {
                path: "detail/:Id",
                component: dispatch_custom_detail_component_1.DispatchCustomDetailComponent,
            },
            {
                path: "edit/:Id",
                component: dispatch_custom_edit_component_1.DispatchCustomEditComponent,
            },
            {
                path: "report/:Id",
                component: report_component_1.ReportComponent
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DispatchCustomModule = /** @class */ (function () {
    function DispatchCustomModule() {
    }
    DispatchCustomModule = __decorate([
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
                dispatch_custom_form_component_1.DispatchCustomFormComponent, dispatch_custom_list_component_1.DispatchCustomListComponent,
                dispatch_custom_detail_component_1.DispatchCustomDetailComponent, dispatch_custom_edit_component_1.DispatchCustomEditComponent, report_component_1.ReportComponent
            ],
            exports: [router_1.RouterModule],
            providers: [
                dispatch_custom_service_1.DispatchService
            ],
            entryComponents: []
        })
    ], DispatchCustomModule);
    return DispatchCustomModule;
}());
exports.DispatchCustomModule = DispatchCustomModule;


/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/services/dispatch-custom.service.ts ***!
  \************************************************************************************/
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

/***/ "./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/styles/dispatch-custom-form.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}.modal-xl .modal-lg{max-width:80%}\n"

/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/templates/detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/templates/detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} DISPATCH DETAILS\r\n      <!-- Dispatch Detail -->\r\n      <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.DISPATCH_CUSTOM_LISTING]\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Pickup Listing</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n          \r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToListDispatch()\" class=\"btn-wms\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Pickup Listing</button>\r\n            </div>\r\n            <h3> \r\n              {{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Dispatch Detail\r\n\r\n            </h3>\r\n          </div>\r\n      \r\n          <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n         \r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n           \r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Customer</b><a class=\"pull-right\">{{dispatch.AML_Customers.Name}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Customer Order No</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Way Bill</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.waybill}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Order Date</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.OrderDate | date}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Loading Date</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.LoadingDate | date}}</a>\r\n                        </li>\r\n                      \r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Warehouse</b><a class=\"pull-right\">{{dispatch.AML_Warehouse.Name}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Contact Person</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.ContactPerson }}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Telephone</b><a class=\"pull-right\">{{dispatch.PhoneNumber}}</a>\r\n                        </li>\r\n                      \r\n                        <li class=\"list-group-item\">\r\n                            <b>Address</b><a class=\"pull-right\">{{dispatch.AML_PickupOrder.Address}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                          <b>PickupMethod</b><a class=\"pull-right\"> \r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p></a>\r\n                      </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n            \r\n           \r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                         <th>\r\n                          SKU \r\n                        </th> \r\n                        <th>\r\n                          SKU Name\r\n                        </th>\r\n                        <th>\r\n                            Unit\r\n                          </th>\r\n                        <th>\r\n                           Quantity\r\n                        </th>\r\n                        <th>\r\n                            Location\r\n                         </th>\r\n                         <th>\r\n                          Batch/Serial\r\n                       </th>\r\n                       <th>\r\n                        Pallet No\r\n                     </th>\r\n                       \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of dispatch.AML_DispatchDetail\">\r\n                         <td>{{item.ItemId}}</td>\r\n                        <td>{{item.AML_ItemInformation.Description}} | {{item.AML_ItemInformation.Name}}</td>\r\n                        <td>{{item.AML_ItemInformation.AML_Units.Title}}</td>\r\n                        <td>{{item.Quantity}}</td>                                          \r\n                        <td>{{item.Location}}</td>\r\n                        <td>{{item.BatchNo}}</td>\r\n                        <td>{{item.PalletNo}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n           \r\n          </div>\r\n        </form>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/templates/edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/templates/edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} PICKUP PLAN EDIT\r\n      <!-- CUSTOM PICKUP PLAN EDIT -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.DISPATCH_LISTING]\">Pickups</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n      <div col-md-12>\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateDispatch(formGroup.value)\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"form-group  pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToDispatchCustomList()\" class=\"btn-wms\">{{dropdownHideShow == true ? 'Customer' : 'Transfer'}} Pickup Listing</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                          <label>Customer</label>\r\n                          <!-- <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                          [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                          (onDeSelect)=\"customerDeSelect()\"\r\n                            (onSelect)=\"customerChange($event)\"\r\n                         \r\n                            >\r\n                          </ng-multiselect-dropdown>\r\n                          <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                            It is required\r\n                          </span> -->\r\n                          <div>\r\n                              <p>{{dispatch.AML_Customers.Name}}</p>\r\n                          </div>\r\n                        </div>\r\n                   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Customer Order</label>\r\n                      <!-- <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                       [data]=\"pickupOrderKeyPair\"\r\n                        [settings]=\"pickupOrderDropdownSettings\" \r\n                        formControlName=\"PickupOrderId\"\r\n                        (onDeSelect)=\"pickupOrderDeSelect()\"\r\n                        (onSelect)=\"PickupOrderChange($event)\">\r\n                      </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"!this.selectedPickupOrder || !this.selectedPickupOrder['Id']\">\r\n                        It is required\r\n                      </span> -->\r\n                      <div>\r\n                          <p>\r\n                            {{dispatch.AML_PickupOrder.CustomerOrderNo}}\r\n                          </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Agent</label>\r\n                      <input type=\"text\" formControlName=\"Agent\" class=\"form-control\" placeholder=\"Enter Agent\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.Agent.invalid\">\r\n                        {{getErrorMessage('Agent')}}\r\n                      </span>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n    \r\n                <div class=\"col-md-12\">\r\n                  <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Gate Pass No</label>\r\n                      <input type=\"text\" formControlName=\"GatePassNo\" class=\"form-control\" placeholder=\"Enter Gate Pass No\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.GatePassNo.invalid\">\r\n                        {{getErrorMessage('GatePassNo')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Phone Number</label>\r\n                      <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" placeholder=\"Enter Phone Number\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.PhoneNumber.invalid\">\r\n                        {{getErrorMessage('PhoneNumber')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                      <textarea formControlName=\"Address\" class=\"form-control\"></textarea>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                        {{getErrorMessage('Address')}}\r\n                      </span>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\" *ngIf=\"pickupOrder!=null\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Warehouse</label>\r\n                      <p>{{pickupOrder.OriginWarehouse}}</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Contact Person</label>\r\n                      <p>{{pickupOrder.ContactPerson}}</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Telephone</label>\r\n                      <p>{{pickupOrder.Telephone}}</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Loading Date</label>\r\n                      <p>{{pickupOrder.LoadingDate | date}}</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>PickupMethod</label>\r\n                      <p *ngIf=\"pickupOrder.PickupMethod==1\">FIFO</p>\r\n                      <p *ngIf=\"pickupOrder.PickupMethod==2\">LIFO</p>\r\n                      <p *ngIf=\"pickupOrder.PickupMethod==3\">LEFO</p>\r\n                      <p *ngIf=\"pickupOrder.PickupMethod==5\">Custom</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>WayBill No</label>\r\n                      <p>{{pickupOrder.waybill}}</p>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                </div>\r\n              \r\n              </div>\r\n             \r\n  \r\n            </div>\r\n  \r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header with-border\">\r\n                  <div class=\"form-group\">\r\n                      <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label>SKU</label>\r\n                                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                                [data]=\"itemKeyPair\"\r\n                                  [settings]=\"itemDropdownSettings\"\r\n                                   formControlName=\"ItemId\"\r\n                                   (onDeSelect)=\"itemDeSelect()\"\r\n                                  (onSelect)=\"itemChange($event)\">\r\n                                </ng-multiselect-dropdown>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>Required Quantity</label>\r\n                           <input type=\"number\" readonly value={{RequiredQuantity}} class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                          <div class=\"form-group\">\r\n                              <label>Locations</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                              [data]=\"locationKeyPair\"\r\n                                [settings]=\"locationDropdownSettings\"\r\n                                 formControlName=\"LocationId\"\r\n                                 (onDeSelect)=\"locationDeSelect()\"\r\n                                (onSelect)=\"locationChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Batch/Serial No</label>\r\n                            <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                            [data]=\"batchKeyPair\"\r\n                              [settings]=\"batchDropdownSettings\"\r\n                               formControlName=\"BatchId\"\r\n                               (onDeSelect)=\"batchDeSelect()\"\r\n                              (onSelect)=\"batchChange($event)\">\r\n                            </ng-multiselect-dropdown>\r\n                          </div>\r\n                    </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"col-md-3\">\r\n                          <div class=\"form-group\">\r\n                              <label>Pallet No</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                              [data]=\"palletKeyPair\"\r\n                                [settings]=\"palletDropdownSettings\"\r\n                                 formControlName=\"PalletId\"\r\n                                 (onDeSelect)=\"palletDeSelect()\"\r\n                                (onSelect)=\"palletChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                            </div>\r\n                      </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>Available Quantity</label>\r\n                           <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                          <div class=\"form-group\">\r\n                              <label>Quantity</label>\r\n                           <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group shipment-item-add\">\r\n                            <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                              Add Items\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                       <div class=\"col-md-12\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-sm-12 table-responsive\">\r\n                                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                                  <thead>\r\n                                    <tr role=\"row\">\r\n                                      <th>\r\n                                        SKU Id\r\n                                      </th>\r\n                                      <th>\r\n                                        SKU Name\r\n                                      </th>\r\n                                      <th>\r\n                                        Location\r\n                                      </th>\r\n                                      <th>\r\n                                        Pallet No\r\n                                      </th>\r\n                                     \r\n                                      <th>\r\n                                        Quantity\r\n                                      </th>\r\n                                      <th>\r\n                                        Batch/Serial\r\n                                      </th>\r\n                                     <th>\r\n                                       Action\r\n                                     </th>\r\n                                     \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr role=\"row\" *ngFor=\"let item of itemListToPost\">\r\n                                      <td>{{item.ItemId}}</td>\r\n                                      <td>{{item.Name}}</td>\r\n                                      <td>{{item.Location}}</td>\r\n                                      <td>{{item.PalletNo}}</td>\r\n                                    \r\n                                      <td>{{item.Quantity}}</td>\r\n                                      <td>{{item.Batch}}</td>\r\n                                      <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                          (click)=\"deleteFromitemListToPost(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                                      </td> \r\n                                     \r\n                                    </tr>\r\n                                  </tbody>  \r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                     \r\n                </div>\r\n              </div>\r\n  \r\n            <div class=\"box-footer\">\r\n                <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update Pickup for Dispatch</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n    <modal #AllModal>\r\n      <modal-header>\r\n         \r\n        \r\n      </modal-header>\r\n    \r\n      <modal-content style=\"padding:20px\">\r\n        <div class=\"box box-primary\" id=\"print-section\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title detail-title\">Dispatch</h3>\r\n            <div class=\"form-group  pull-right\">\r\n  \r\n            </div>\r\n          </div>\r\n          <section class=\"invoice\">\r\n            <!-- title row -->\r\n        \r\n            <!-- info row -->\r\n            <div class=\"col-sm-6 invoice-col\">\r\n              <div class=\"col-xs-12\">\r\n                <h2 class=\"page-header\">\r\n                  <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n                  <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n                </h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"row invoice-info\">\r\n              <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n            \r\n                <address>\r\n                  <strong>{{CompanyName}}</strong>\r\n                  {{CompanyAddress}}\r\n                \r\n                </address>\r\n              </div>\r\n              <!-- /.col -->\r\n            \r\n              <!-- /.col -->\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n                <h4><u>Dispatch Pick List With Pallet No</u></h4>\r\n              </div>\r\n          </div>\r\n       <!-- info row -->\r\n       <div class=\"row invoice-info\">\r\n        <div class=\"col-lg-6 invoice-col\" id=\"invoice-col\">\r\n          <div class=\"col-xs-12 table-responsive\" style=\"min-height: 150px;\">\r\n            <table class=\"table\">\r\n              <tr>\r\n                <td><b>Customer Name :</b></td>\r\n                <td>{{selectedCustomer.Name}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td><b>Agent :</b></td>\r\n                <td>{{Agent}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td><b>Address :</b></td>\r\n                <td>{{Address}}</td>\r\n              </tr>\r\n              <tr>        \r\n                <td><b>Phone No :</b></td>\r\n                <td>{{PhoneNumber}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <!-- /.col -->\r\n        <div class=\"col-lg-6 invoice-col\">\r\n          <div class=\"col-xs-12 table-responsive\" style=\"min-height: 150px;\">\r\n            <table class=\"table\">\r\n              <tr>\r\n                <td><b>Gate Pass No :</b></td>\r\n                <td>{{GatePassNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td><b>Customer Order Ref :</b></td>\r\n                <td>{{selectedPickupOrder.Name}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <!-- /.col -->\r\n       \r\n        <!-- /.col -->\r\n      </div>\r\n      <!-- /.row -->\r\n    \r\n            <!-- Table row -->\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Sr.</th>\r\n                    <th>Pallet#</th>\r\n                    <th>Location</th>\r\n                    <th>Status</th>\r\n                    <th>Quantity</th>\r\n                    <th>Price</th>\r\n                    <th>Boxes</th>\r\n                    <th>Batch#</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody *ngFor=\"let item of itemListToPost; index as i\">\r\n                    <tr><td colspan=\"11\" align=\"center\"><b>{{item.Name}}</b></td></tr>\r\n                  <tr>               \r\n                    <td> {{i+1}}</td>\r\n                  \r\n                    <td>{{item.PalletNo}}</td>\r\n                    <td>{{item.Location}}</td>\r\n                    <td>Ok</td>\r\n                    <td>{{item.Quantity}}</td>\r\n                    <td>Price</td>\r\n                    <td>No. Of Boxes</td>\r\n                    <td>{{item.Batch}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </modal-content>\r\n      <modal-footer>\r\n        <div class=\"row no-print\" id=\"printButton\">\r\n          <div class=\"col-xs-12\">\r\n            <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n            <button\r\n            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n             class=\"btn-wms hidden-print print-btn\" printTitle=\"Job Execution Information\"\r\n              [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n              <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n              </span></button>\r\n          </div>\r\n        </div>\r\n      </modal-footer>\r\n    </modal>\r\n  "

/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/templates/form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/templates/form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} CUSTOM PICKUP PLAN\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_LISTING]\">Pickups</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createDispatch(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToDispatchCustomList()\" class=\"btn-wms\">{{dropdownHideShow == true ?\r\n              'Customer' : 'Transfer'}} Pickups Listing</button>\r\n          </div>\r\n          <!-- <div class=\"form-group pull-left\">\r\n              &nbsp; <input type=\"radio\"   checked=\"true\" value=\"customer\" (change)=\"radioChange($event)\"  name=\"formMode\">&nbsp;\r\n              Customer Oder&nbsp; <input type=\"radio\" value=\"transfer\" (change)=\"radioChange($event)\"  name=\"formMode\" >&nbsp; Transfer Order\r\n            </div> -->\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"customerDeSelect()\"\r\n                    (onSelect)=\"customerChange($event)\" formControlName=\"CustomerId\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    It is required\r\n                  </span>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <!-- <label *ngIf=\"formType=='customer'\">Customer Order</label> -->\r\n                  <label [hidden]=\"!dropdownHideShow\">Customer Order</label> <label [hidden]=\"dropdownHideShow\">Transfer Order</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"pickupOrderKeyPair\"\r\n                    [settings]=\"pickupOrderDropdownSettings\" formControlName=\"PickupOrderId\"\r\n                    (onDeSelect)=\"pickupOrderDeSelect()\" (onSelect)=\"PickupOrderChange($event)\"\r\n                    [disabled]=\"this.FlagList=='True'\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedPickupOrder || !this.selectedPickupOrder['Id']\">Required </span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Agent</label>\r\n                    <input type=\"text\" formControlName=\"Agent\" class=\"form-control\" placeholder=\"Enter Agent\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Agent.invalid\">\r\n                      {{getErrorMessage('Agent')}}\r\n                    </span>\r\n                  </div>\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\" *ngIf=\"pickupOrder!=null\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Warehouse</label>\r\n                  <p>{{pickupOrder.OriginWarehouse}}</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>PickupMethod</label>\r\n                  <p *ngIf=\"pickupOrder.PickupMethod==1\">FIFO</p>\r\n                  <p *ngIf=\"pickupOrder.PickupMethod==2\">LIFO</p>\r\n                  <p *ngIf=\"pickupOrder.PickupMethod==3\">LEFO</p>\r\n                  <p *ngIf=\"pickupOrder.PickupMethod==4\">FEFO</p>\r\n                  <p *ngIf=\"pickupOrder.PickupMethod==5\">Custom</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Loading Date</label>\r\n                  <p>{{pickupOrder.LoadingDate | date}}</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>WayBill No</label>\r\n                  <p>{{pickupOrder.waybill}}</p>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Distributor Name</label>\r\n                  <p>{{pickupOrder.DistName}}</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Code</label>\r\n                  <p>{{pickupOrder.DistCode}}</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Address</label>\r\n                  <p>{{pickupOrder.DistAddress}}</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Contact Person</label>\r\n                  <p>{{pickupOrder.ContactPerson}}</p>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\"><b>Pickup Plan Detail</b></h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n             <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>SKU</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                    [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\" (onDeSelect)=\"itemDeSelect()\"\r\n                    (onSelect)=\"itemChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>SN no</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" \r\n                    [data]=\"palletKeyPair\"\r\n                      [settings]=\"palletDropdownSettings\"\r\n                        formControlName=\"PalletId\"\r\n                        (onDeSelect)=\"palletDeSelect()\"\r\n                      (onSelect)=\"palletChange($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>  -->\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Batch/Serial No</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"batchKeyPair\"\r\n                    [settings]=\"batchDropdownSettings\" formControlName=\"BatchId\" (onDeSelect)=\"batchDeSelect()\"\r\n                    (onSelect)=\"batchChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Locations</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"locationKeyPair\"\r\n                    [settings]=\"locationDropdownSettings\" formControlName=\"LocationId\" (onDeSelect)=\"locationDeSelect()\"\r\n                    (onSelect)=\"locationChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>MFG Date</label>\r\n                  <input type=\"text\" readonly value={{MfgDate}} class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>EXP Date</label>\r\n                  <input type=\"text\" readonly value={{ExpDate}} class=\"form-control\">\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Req.Qty</label>\r\n                  <input type=\"number\" readonly value={{RequiredQuantity}} class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Avail. Stock</label>\r\n                  <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Reserve Qty</label>\r\n                  <input type=\"number\" readonly formControlName=\"ReserveQty\" value={{ReserveQty}} class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <div class=\"form-group\">\r\n                  <label>Quantity</label>\r\n                  <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group shipment-item-add\">\r\n                  <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                    A d d S K U\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div> \r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th style=\"width: 2%;\">Sr.</th>\r\n                        <th style=\"width: 7%;\">System ID</th>\r\n                        <th style=\"width: 7%;\">SKU Code</th>\r\n                        <th style=\"width: 20%;\">SKU Name</th>\r\n                        <th style=\"width: 7%;\">Location</th>\r\n                        <th style=\"width: 7%;\">Pallet No</th>\r\n                        <th style=\"width: 7%;\">Batch/Serial</th>\r\n                        <th style=\"width: 7%;\">MFG Date</th>\r\n                        <th style=\"width: 7%;\">EXP Date</th>\r\n                        <th style=\"width: 7%;\">Avl Stock</th>\r\n                        <th style=\"width: 7%;\">InTransit</th>\r\n                        <th style=\"width: 7%;\">Qty Required</th>\r\n                        <th style=\"width: 12%;\">Qty Supply</th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of itemListToPost; index as i\">\r\n                        <td> {{i+1}}</td>\r\n                        <td>{{item.ItemId}}</td>\r\n                        <td>{{item.Description}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Location}}</td>\r\n                        <td>{{item.PalletNo}}</td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.MfgDate | date}}</td>\r\n                        <td>{{item.ExpDate | date}}</td>\r\n                        <td>{{item.Balance}}</td>\r\n                        <td>{{item.TransitQuantity}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <td><input type=\"number\" value=\"{{item.QtySupply}}\" class=\"form-control\" (change)=\"addItemRelOrd($event,item.ItemId)\"></td>\r\n                        <td>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                            (click)=\"deleteFromitemListToPost(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr role=\"row\">\r\n                        <td colspan=\"9\"></td>\r\n                        <td>TOTAL</td>\r\n                        <td>{{TotalQty}}</td>\r\n                        <td>{{ReserveQty}}</td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n          <button type=\"button\" [disabled]=\"formGroup.invalid || this.FlagDispatch=='True' || this.itemListToPost==null || this.itemListToPost.length==0\"\r\n          (click)=\"createDispatch(formGroup.value)\" class=\"btn btn-success pull-right\">Pickup for Dispatch</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n\r\n\r\n<modal #AllModal>\r\n  <!-- <modal-header>\r\n\r\n  </modal-header> -->\r\n\r\n  <modal-content style=\"padding:1px; width:980px; margin: left -35px;\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-3\" style=\"text-align: left;\">\r\n          <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n        </div>\r\n        <div class=\"col col-sm-8 pull-right\" style=\"margin-top: 10px; text-align: left;\">\r\n          <address>\r\n            <strong>{{CompanyName}}</strong> <br>\r\n            {{CompanyAddress}}\r\n          </address>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n        <h4><b><u>{{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} PICKUP PLAN</u></b></h4>\r\n      </div>\r\n        <!-- info row -->\r\n        <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 80px;\">\r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{selectedCustomer['Name']}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Distributor Info:</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{DistCode}} - {{DistName}}</label> \r\n              </div> \r\n              <!--  -->\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Address :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{DistAddress}}</label>\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <!-- /.col -->\r\n          <div class=\"col-sm-6 invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Pickup Method</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>FEFO</label>\r\n                  <!-- <p *ngIf=\"{{pickupOrder.PickupMethod}}==1\">FIFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==2\">LIFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==3\">LEFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==4\">FEFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==5\">Custom</p> -->\r\n                \r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Gate Pass No :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{GatePassNo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Order Ref :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{selectedPickupOrder['Name']}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table dataTable\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th style=\"border: 1px solid black;\">Sr.</th>\r\n                  <th style=\"border: 1px solid black;\">Code</th>\r\n                  <th style=\"border: 1px solid black;\">SKU Name</th>\r\n                  <!-- <th style=\"border: 1px solid black;\">Location</th> -->\r\n                  <!-- <th style=\"border: 1px solid black;\">Status</th> -->\r\n                  <th style=\"border: 1px solid black;\">Batch#</th>\r\n                  <th style=\"border: 1px solid black;\">MGF Date</th>\r\n                  <th style=\"border: 1px solid black;\">ExpDate</th>\r\n                  <th style=\"border: 1px solid black;\">Order Qty</th>\r\n                  <th style=\"border: 1px solid black;\">Pickup Qty</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of itemListToPost; index as i\">\r\n                <tr>\r\n                  <td style=\"border: 1px solid black;\"> {{i+1}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Description}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Name}}</td>\r\n                  <!-- <td style=\"border: 1px solid black;\">{{item.Location}}</td> -->\r\n                  <!-- <td style=\"border: 1px solid black;\">{{item.Status}}</td> -->\r\n                  <td style=\"border: 1px solid black;\">{{item.Batch}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.ExpDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Quantity}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.QtySupply}}</td>\r\n                </tr>\r\n              </tbody>\r\n               <tfoot>\r\n                <td colspan=\"5\"></td>\r\n                <td>TotalQty:</td>\r\n                <td>{{TotalQty}}</td>\r\n                <td>{{ReserveQty}}</td>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    \r\n      <div class=\"col-sm-10\">\r\n        <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n          class=\"btn-genx hidden-print print-btn\" printTitle=\"Pickup Plan\" [useExistingCss]=\"true\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n          <button type=\"button\" (click)=\"CloseModal()\" class=\"btn btn-success\">Close</button>\r\n      </div>\r\n    \r\n  </modal-footer>\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/templates/list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/templates/list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{isCustomerPlan == true ? 'CUSTOMER' : 'TRANSFER'}} PICKUP PLAN\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_CUSTOM_LISTING]\">Pickup Plan</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <ul class=\"nav nav-tabs\">\r\n                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Pending</a></li>\r\n                  <!-- <li><a data-toggle=\"tab\" href=\"#executed\">Executed</a></li> -->\r\n                  <li><a data-toggle=\"tab\" href=\"#cancel\">Cancel</a></li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                  <div id=\"home\" class=\"tab-pane fade in active\">\r\n                    <h3>Pending</h3>\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                        background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.pickupOrderPending, 'transfer-pickup-plan-pending-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('transfer-pickup-plan-pending-list.xlsx', 'tbl1', 'Transfer Pickup Plan Pending List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('transfer-pickup-plan-pending-list.pdf', '#tbl1')\"\r\n                            style=\"color: white;\">Export To PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"home\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                            width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('0')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Sr #\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('1')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('2')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('3')\" data-column=\"2\"\r\n                              style=\"color: white;\">\r\n                              Address\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Phone Number\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Gate Pass No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('6')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Warehouse\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('7')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Contract Person\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('8')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Waybill\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('9')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Pickup Method\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Order Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Loading Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('12')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a><br>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl1\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList1[0].status\">Sr#</th>\r\n                          <th *ngIf=\"!hideShowList1[1].status\">Customer</th>\r\n                          <th *ngIf=\"!hideShowList1[2].status\">Customer Order No</th>\r\n                          <th *ngIf=\"!hideShowList1[3].status\">Address</th>\r\n                          <th *ngIf=\"!hideShowList1[4].status\">Phone Number</th>\r\n                          <th *ngIf=\"!hideShowList1[5].status\">Gate Pass No</th>\r\n                          <th *ngIf=\"!hideShowList1[6].status\">Warehouse</th>\r\n                          <th *ngIf=\"!hideShowList1[7].status\">Contact Person</th>\r\n                          <th *ngIf=\"!hideShowList1[8].status\">WayBill</th>\r\n                          <th *ngIf=\"!hideShowList1[9].status\">Pickup Method</th>\r\n                          <th *ngIf=\"!hideShowList1[10].status\">Order Date</th>\r\n                          <th *ngIf=\"!hideShowList1[11].status\">Loading Date</th>\r\n                          <th *ngIf=\"!hideShowList1[12].status\">Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of pickupOrderPending; let i = index\">\r\n                          <td *ngIf=\"!hideShowList1[0].status\">{{i+1}}</td>\r\n                          <td *ngIf=\"!hideShowList1[1].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[2].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList1[3].status\">{{dispatch.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList1[4].status\">{{dispatch.PhoneNumber}}</td>\r\n                          <td *ngIf=\"!hideShowList1[5].status\">{{dispatch.GatePassNo}}</td>\r\n                          <td *ngIf=\"!hideShowList1[6].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[7].status\">{{dispatch.AML_Warehouse.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList1[8].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList1[9].status\">\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList1[10].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList1[11].status\">{{dispatch.AML_PickupOrder.LoadingDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList1[12].status\">\r\n                            <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                            (click)=\"Detail(dispatch.DispatchId)\"><i class=\"fa fa-info\"></i></button> -->\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" data-toggle=\"tooltip\"\r\n                              data-placement=\"bottom\" title=\"Edit Order\" (click)=\"Edit(dispatch.DispatchId)\"><i\r\n                                class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                              data-placement=\"bottom\" title=\"Delete Dispatch Plan\" (click)=\"delete(dispatch.PickupOrderId)\"><i\r\n                                class=\"fa fa-times-circle-o\"></i></button>\r\n                            <button type=\"button\" id=\"report\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                              data-placement=\"bottom\" title=\"Print Pickup Plan\" (click)=\"reportmodal(dispatch.DispatchId)\">\r\n                                <i class=\"fa fa-file\"></i>\r\n                             </button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n\r\n                  <div id=\"cancel\" class=\"tab-pane fade\">\r\n                    <h3>Cancel</h3>\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 50%; \r\n                        background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.pickupOrderCancel, 'transfer-pickup-plan-cancelled-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('transfer-pickup-plan-cancelled-list.xlsx', 'tbl2', 'Transfer Pickup Plan Cancelled List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('transfer-pickup-plan-cancelled-list.pdf', '#tbl2')\"\r\n                            style=\"color: white;\">Export To PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"cancel\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                            width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('0')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Sr #\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('1')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('2')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('3')\" data-column=\"2\"\r\n                              style=\"color: white;\">\r\n                              Address\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Phone Number\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Gate Pass No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('6')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Warehouse\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('7')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Contract Person\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('8')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Waybill\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('9')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Pickup Method\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Order Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Loading Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('12')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a><br>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl2\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList2[0].status\">Sr#</th>\r\n                          <th *ngIf=\"!hideShowList2[1].status\">Customer</th>\r\n                          <th *ngIf=\"!hideShowList2[2].status\">Customer Order No</th>\r\n                          <th *ngIf=\"!hideShowList2[3].status\">Address</th>\r\n                          <th *ngIf=\"!hideShowList2[4].status\">Phone Number</th>\r\n                          <th *ngIf=\"!hideShowList2[5].status\">Gate Pass No</th>\r\n                          <th *ngIf=\"!hideShowList2[6].status\">Warehouse</th>\r\n                          <th *ngIf=\"!hideShowList2[7].status\">Contact Person</th>\r\n                          <th *ngIf=\"!hideShowList2[8].status\">WayBill</th>\r\n                          <th *ngIf=\"!hideShowList2[9].status\">Pickup Method</th>\r\n                          <th *ngIf=\"!hideShowList2[10].status\">Order Date</th>\r\n                          <th *ngIf=\"!hideShowList2[11].status\">Loading Date</th>\r\n                          <th *ngIf=\"!hideShowList2[12].status\">Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of pickupOrderCancel; let i = index\">\r\n                          <td *ngIf=\"!hideShowList2[0].status\">{{i+1}}</td>\r\n                          <td *ngIf=\"!hideShowList2[1].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[2].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList2[3].status\">{{dispatch.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList2[4].status\">{{dispatch.PhoneNumber}}</td>\r\n                          <td *ngIf=\"!hideShowList2[5].status\">{{dispatch.GatePassNo}}</td>\r\n                          <td *ngIf=\"!hideShowList2[6].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[7].status\">{{dispatch.AML_Warehouse.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList2[8].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList2[9].status\">\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList2[10].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList2[11].status\">{{dispatch.AML_PickupOrder.LoadingDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList2[12].status\">\r\n                            <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                            (click)=\"Detail(dispatch.DispatchId)\"><i class=\"fa fa-info\"></i></button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                            (click)=\"Edit(dispatch.DispatchId)\"><i class=\"fa fa-edit\"></i></button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\"\r\n                            (click)=\"delete(dispatch.PickupOrderId)\"><i class=\"fa fa-times-circle-o\"></i></button> -->\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n\r\n<modal #AllModal>\r\n  <!-- <modal-header>\r\n\r\n  </modal-header> -->\r\n\r\n  <modal-content style=\"padding:1px; width:980px; margin: left -35px;\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-3\" style=\"text-align: left;\">\r\n          <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n        </div>\r\n        <div class=\"col col-sm-8 pull-right\" style=\"margin-top: 10px; text-align: left;\">\r\n          <address>\r\n            <strong>{{CompanyName}}</strong> <br>\r\n            {{CompanyAddress}}\r\n          </address>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n        <h4><b><u>{{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} PICKUP PLAN</u></b></h4>\r\n      </div>\r\n        <!-- info row -->\r\n        <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 80px;\">\r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_CustomerName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Distributor Info:</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DistCode}} - {{rep_DistName}}</label> \r\n              </div> \r\n              <!--  -->\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Address :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DistAddress}}</label>\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <!-- /.col -->\r\n          <div class=\"col-sm-6 invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Pickup Method</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>FEFO</label>\r\n                  <!-- <p *ngIf=\"{{pickupOrder.PickupMethod}}==1\">FIFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==2\">LIFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==3\">LEFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==4\">FEFO</p>\r\n                  <p *ngIf=\"{{pickupOrder.PickupMethod}}==5\">Custom</p> -->\r\n                \r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Gate Pass No :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_GatePassNo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Order Ref :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_CustomerOrderNo}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table dataTable\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th style=\"border: 1px solid black;\">Sr.</th>\r\n                  <th style=\"border: 1px solid black;\">Code</th>\r\n                  <th style=\"border: 1px solid black;\">SKU Name</th>\r\n                  <!-- <th style=\"border: 1px solid black;\">Location</th> -->\r\n                  <!-- <th style=\"border: 1px solid black;\">Status</th> -->\r\n                  <th style=\"border: 1px solid black;\">Batch#</th>\r\n                  <th style=\"border: 1px solid black;\">MGF Date</th>\r\n                  <th style=\"border: 1px solid black;\">ExpDate</th>\r\n                  <!-- <th style=\"border: 1px solid black;\">Order Qty</th> -->\r\n                  <th style=\"border: 1px solid black;\">Pickup Qty</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of rep_dispatchData; index as i\">\r\n                <tr>\r\n                  <td style=\"border: 1px solid black;\"> {{i+1}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.AML_ItemInformation.Description}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.AML_ItemInformation.Name}}</td>\r\n                  <!-- <td style=\"border: 1px solid black;\">{{item.Location}}</td> -->\r\n                  <!-- <td style=\"border: 1px solid black;\">{{item.Status}}</td> -->\r\n                  <td style=\"border: 1px solid black;\">{{item.BatchNo}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Quantity}}</td>\r\n                  <!-- <td style=\"border: 1px solid black;\">{{item.QtySupply}}</td> -->\r\n                </tr>\r\n              </tbody>\r\n               <tfoot>\r\n                <td colspan=\"5\"></td>\r\n                <td>TotalQty:</td>\r\n                <td>{{TotalQty}}</td>\r\n                <td>{{ReserveQty}}</td>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n          class=\"btn-wms hidden-print print-btn\" printTitle=\"Pickup Plan\" [useExistingCss]=\"true\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-footer>\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/dispatch-custom/templates/report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-custom/templates/report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  report works!\r\n</p>\r\n"

/***/ })

}]);
//# sourceMappingURL=content-dispatch-custom-dispatch-custom-module.js.map