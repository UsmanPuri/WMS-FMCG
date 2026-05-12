(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-wms-services-wms-services-module"],{

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

/***/ "./src/app/layout/content/wms-services/components/wms-service-detail-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/components/wms-service-detail-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WMSServiceDetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServiceDetailFormComponent", function() { return WMSServiceDetailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wms-service.service */ "./src/app/layout/content/wms-services/services/wms-service.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var WMSServiceDetailFormComponent = /** @class */ (function (_super) {
    __extends(WMSServiceDetailFormComponent, _super);
    function WMSServiceDetailFormComponent(injector, _wmsServiceService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._wmsServiceService = _wmsServiceService;
        _this.activeRoute = activeRoute;
        _this.wmsServiceList = [];
        return _this;
    }
    WMSServiceDetailFormComponent.prototype.ngOnInit = function () {
        this.getunitKeyPair();
        this.addFormValidations();
        this.getById();
    };
    WMSServiceDetailFormComponent.prototype.getunitKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.UNIT_KEY_PAIR;
        this._wmsServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.unitKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    WMSServiceDetailFormComponent.prototype.getUnitNameFromUnitKeyPair = function (UnitOfMeasurement) {
        var model = this.unitKeyPair
            .filter(function (x) { return x.Value == UnitOfMeasurement; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    WMSServiceDetailFormComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var wmsServiceByIdUrl = this.apiConstant.WMS_SERVICE_GET_ONE + ("" + Id);
            this._wmsServiceService.getData(wmsServiceByIdUrl)
                .subscribe(function (res) {
                _this.wmsService = res;
                _this.status = _this.wmsService.StatusId == "1" ? true : false;
                _this.formGroup.patchValue(_this.wmsService);
                _this.wmsServiceList.push({
                    ServiceName: _this.wmsService.ServiceName,
                    ServiceType: _this.wmsService.ServiceType,
                    Unit: _this.getUnitNameFromUnitKeyPair(_this.wmsService.UnitOfMeasurement),
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    WMSServiceDetailFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    WMSServiceDetailFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("ServiceName", requiredValidation);
        this.addFormControlWithValidations("ServiceType", []);
        this.addFormControlWithValidations("UnitOfMeasurement", []);
    };
    WMSServiceDetailFormComponent.prototype.updateWmsService = function (formValues) {
        if (this.formGroup.valid) {
            this.executeWmsServiceUpdate(formValues);
        }
    };
    WMSServiceDetailFormComponent.prototype.executeWmsServiceUpdate = function (formValues) {
        var _this = this;
        var wmsService = {
            StatusId: this.status ? "1" : "0",
            ServiceName: formValues.ServiceName,
            ServiceType: formValues.ServiceType,
            UnitOfMeasurement: formValues.UnitOfMeasurement,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.WMS_SERVICE_UPDATE + ("/" + this.wmsService.Id);
        this._wmsServiceService.update(apiUrl, wmsService)
            .subscribe(function (res) {
            _this.showToastrSuccess("WMS service updated successfully");
            setTimeout(function () {
                _this.redirectToWmsList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WMSServiceDetailFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    WMSServiceDetailFormComponent.prototype.getErrorMessage = function (formElement) {
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
    WMSServiceDetailFormComponent.prototype.redirectToWmsList = function () {
        this.router.navigate([this.routesList.WMS_SERVICE_LISTING]);
    };
    WMSServiceDetailFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-detail-wms-service-form",
            template: __webpack_require__(/*! ../templates/detail-form.component.html */ "./src/app/layout/content/wms-services/templates/detail-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/wms-service-form.component.scss */ "./src/app/layout/content/wms-services/styles/wms-service-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__["WMSServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WMSServiceDetailFormComponent);
    return WMSServiceDetailFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/wms-services/components/wms-service-edit-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/components/wms-service-edit-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WMSServiceEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServiceEditFormComponent", function() { return WMSServiceEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wms-service.service */ "./src/app/layout/content/wms-services/services/wms-service.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var WMSServiceEditFormComponent = /** @class */ (function (_super) {
    __extends(WMSServiceEditFormComponent, _super);
    function WMSServiceEditFormComponent(injector, _wmsServiceService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._wmsServiceService = _wmsServiceService;
        _this.activeRoute = activeRoute;
        return _this;
    }
    WMSServiceEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getById();
        this.getunitKeyPair();
    };
    WMSServiceEditFormComponent.prototype.getunitKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.UNIT_KEY_PAIR;
        this._wmsServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.unitKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    WMSServiceEditFormComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var wmsServiceByIdUrl = this.apiConstant.WMS_SERVICE_GET_ONE + ("" + Id);
            this._wmsServiceService.getData(wmsServiceByIdUrl)
                .subscribe(function (res) {
                _this.wmsService = res;
                _this.status = _this.wmsService.StatusId == "1" ? true : false;
                _this.formGroup.patchValue(_this.wmsService);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    WMSServiceEditFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    WMSServiceEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("ServiceName", requiredValidation);
        this.addFormControlWithValidations("ServiceType", []);
        this.addFormControlWithValidations("UnitOfMeasurement", []);
    };
    WMSServiceEditFormComponent.prototype.updateWmsService = function (formValues) {
        if (this.formGroup.valid) {
            this.executeWmsServiceUpdate(formValues);
        }
    };
    WMSServiceEditFormComponent.prototype.executeWmsServiceUpdate = function (formValues) {
        var _this = this;
        var wmsService = {
            StatusId: this.status ? "1" : "0",
            ServiceName: formValues.ServiceName,
            ServiceType: formValues.ServiceType,
            UnitOfMeasurement: formValues.UnitOfMeasurement,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.WMS_SERVICE_UPDATE + ("/" + this.wmsService.Id);
        this._wmsServiceService.update(apiUrl, wmsService)
            .subscribe(function (res) {
            _this.showToastrSuccess("WMS service updated successfully");
            setTimeout(function () {
                _this.redirectToWmsList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WMSServiceEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    WMSServiceEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    WMSServiceEditFormComponent.prototype.redirectToWmsList = function () {
        this.router.navigate([this.routesList.WMS_SERVICE_LISTING]);
    };
    WMSServiceEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-edit-wms-service-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/wms-services/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/wms-service-form.component.scss */ "./src/app/layout/content/wms-services/styles/wms-service-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__["WMSServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WMSServiceEditFormComponent);
    return WMSServiceEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/wms-services/components/wms-service-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/components/wms-service-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WMSServiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServiceFormComponent", function() { return WMSServiceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wms-service.service */ "./src/app/layout/content/wms-services/services/wms-service.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var WMSServiceFormComponent = /** @class */ (function (_super) {
    __extends(WMSServiceFormComponent, _super);
    function WMSServiceFormComponent(injector, _wmsServiceService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._wmsServiceService = _wmsServiceService;
        _this.activeRoute = activeRoute;
        return _this;
    }
    WMSServiceFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getunitKeyPair();
    };
    WMSServiceFormComponent.prototype.getunitKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.UNIT_KEY_PAIR;
        this._wmsServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.unitKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    /**
  * The following method is used to add the form validations
  */
    WMSServiceFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("ServiceName", requiredValidation);
        this.addFormControlWithValidations("ServiceType", []);
        this.addFormControlWithValidations("UnitOfMeasurement", []);
    };
    WMSServiceFormComponent.prototype.createWmsService = function (wmsServiceFormValue) {
        if (this.formGroup.valid) {
            this.executeWmsServiceCreation(wmsServiceFormValue);
        }
    };
    WMSServiceFormComponent.prototype.executeWmsServiceCreation = function (formValues) {
        var _this = this;
        var wmsService = {
            StatusId: this.status ? "1" : "0",
            ServiceName: formValues.ServiceName,
            ServiceType: formValues.ServiceType,
            UnitOfMeasurement: formValues.UnitOfMeasurement,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.WMS_SERVICE_CREATE;
        this._wmsServiceService.create(apiUrl, wmsService)
            .subscribe(function (res) {
            _this.showToastrSuccess("WMS service created successfully");
            setTimeout(function () {
                _this.formGroup.get("ServiceName").setValue("");
                _this.formGroup.get("ServiceType").setValue("");
                _this.formGroup.get("UnitOfMeasurement").setValue("");
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WMSServiceFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    WMSServiceFormComponent.prototype.getErrorMessage = function (formElement) {
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
    WMSServiceFormComponent.prototype.redirectToWMSServiceList = function () {
        this.router.navigate([this.routesList.WMS_SERVICE_LISTING]);
    };
    WMSServiceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-wms-service-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/wms-services/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/wms-service-form.component.scss */ "./src/app/layout/content/wms-services/styles/wms-service-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_wms_service_service__WEBPACK_IMPORTED_MODULE_2__["WMSServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WMSServiceFormComponent);
    return WMSServiceFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/wms-services/components/wms-service-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/components/wms-service-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WMSServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServiceListComponent", function() { return WMSServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wms_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/wms-service.service */ "./src/app/layout/content/wms-services/services/wms-service.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
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






var WMSServiceListComponent = /** @class */ (function (_super) {
    __extends(WMSServiceListComponent, _super);
    function WMSServiceListComponent(injector, _wmsServiceService) {
        var _this = _super.call(this, injector) || this;
        _this._wmsServiceService = _wmsServiceService;
        return _this;
    }
    WMSServiceListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    WMSServiceListComponent.prototype.getAll = function () {
        var _this = this;
        var apiAddress = this.apiConstant.WMS_SERVICE_LIST;
        this._wmsServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.wmsServiceList = res;
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
    WMSServiceListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.WMS_SERVICE_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    WMSServiceListComponent.prototype.Detail = function (id) {
        var updateUrl = this.routesList.WMS_SERVICE_DETAIL + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    WMSServiceListComponent.prototype.redirectToCreateWmsService = function () {
        this.router.navigate([this.routesList.WMS_SERVICE_CREATE]);
    };
    WMSServiceListComponent.prototype.print = function () {
        var printContents, popupWin;
        document.getElementById('tbl_length').style.visibility = 'hidden';
        document.getElementById('tbl_filter').style.visibility = 'hidden';
        document.getElementById('tbl_info').style.visibility = 'hidden';
        document.getElementById('tbl_paginate').style.visibility = 'hidden';
        jquery__WEBPACK_IMPORTED_MODULE_3__('#tbl tr > *:nth-child(5)').hide();
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .table{\n              margin:10px;\n              border: 1px solid;\n              border-collapse: collapse;\n            }\n            th,td{\n              border: 1px solid;\n              padding:1px;\n            }\n          </style>\n          <h1 align=\"center\">All Services Info</h1>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        document.getElementById('tbl_length').style.visibility = 'visible';
        document.getElementById('tbl_filter').style.visibility = 'visible';
        document.getElementById('tbl_info').style.visibility = 'visible';
        document.getElementById('tbl_paginate').style.visibility = 'visible';
        jquery__WEBPACK_IMPORTED_MODULE_3__('#tbl tr > *:nth-child(5)').show();
        popupWin.document.close();
    };
    WMSServiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-wms-service-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/wms-services/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/wms-service-form.component.scss */ "./src/app/layout/content/wms-services/styles/wms-service-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_wms_service_service__WEBPACK_IMPORTED_MODULE_1__["WMSServiceService"]])
    ], WMSServiceListComponent);
    return WMSServiceListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/wms-services/services/wms-service.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/services/wms-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: WMSServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServiceService", function() { return WMSServiceService; });
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


var WMSServiceService = /** @class */ (function (_super) {
    __extends(WMSServiceService, _super);
    function WMSServiceService(injector) {
        return _super.call(this, injector) || this;
    }
    WMSServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], WMSServiceService);
    return WMSServiceService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/wms-services/styles/wms-service-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/styles/wms-service-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/wms-services/templates/detail-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/templates/detail-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    WMS SERVICE EDIT\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n      <li><button\r\n        [printStyle]=\"{table : {'font-size': '10px'}}\"\r\n         class=\"btn-wms hidden-print print-btn\" printTitle=\"WMS Service Information\"\r\n          [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n          <span class=\"glyphicon glyphicon-print\" aria-hidden=\"true\">\r\n          </span></button></li>\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.WMS_SERVICE_LISTING]\">WMS Services</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <div id=\"print-section\">\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateWmsService(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"col-md-12\">\r\n          \r\n              <div class=\"col-md-6\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\">\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th>\r\n                            Service Name\r\n                          </th>\r\n                          <th>\r\n                            Service Type\r\n                          </th>\r\n                          <th>\r\n                            UOM\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let service of wmsServiceList\">\r\n                          <td>{{service.ServiceName}}</td>\r\n                          <td>{{service.ServiceType}}</td>\r\n                          <td>{{service.Unit}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n         \r\n              </div>\r\n            </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/wms-services/templates/edit-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/templates/edit-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    WMS SERVICE EDIT\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.WMS_SERVICE_LISTING]\">Wms Services</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateWmsService(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"col-md-12\">\r\n              <!-- <div class=\"col-md-6\">\r\n                <div class=\"pull-left\">\r\n                    <div class=\"col-md-6 toggle-label \">\r\n                        <span *ngIf=\"status == true\">\r\n                          <b>Active</b>\r\n                        </span>\r\n                        <span *ngIf=\"status == false\">\r\n                          <b>InActive</b>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <ui-switch switchColor=\"#fcfcfc\" [checked]=\"status == true\" (change)=\"onStatusChange($event)\"></ui-switch>\r\n                      </div>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"col-md-12\">\r\n                <div class=\"pull-right\">\r\n                    <button type=\"button\" (click)=\"redirectToWmsList()\" class=\"btn-wms\">WMS Service Listing</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Service Name</label>\r\n                  <input type=\"text\" formControlName=\"ServiceName\" class=\"form-control\" placeholder=\"Enter Service Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ServiceName.invalid\">\r\n                    {{getErrorMessage('ServiceName')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Service Type</label>\r\n                  <input type=\"text\" formControlName=\"ServiceType\" class=\"form-control\" placeholder=\"Enter Service Type\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ServiceType.invalid\">\r\n                    {{getErrorMessage('ServiceType')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                      <label>Unit Of Measurement</label>\r\n                    <select formControlName=\"UnitOfMeasurement\" class=\"form-control\">\r\n                      <option selected value=\"\">Select one</option>\r\n                      <option *ngFor=\"let unit of unitKeyPair\"   [value]=\"unit.Value\" >\r\n                        {{unit.Text}}\r\n                        \r\n                      </option>\r\n                    </select>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.UnitOfMeasurement.invalid\">\r\n                      {{getErrorMessage('UnitOfMeasurement')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/wms-services/templates/form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/templates/form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      WMS SERVICE CREATE\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.WMS_SERVICE_LISTING]\">WMS Services</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createWmsService(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToWMSServiceList()\" class=\"btn-wms\">WMS Service Listing</button>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Service Name</label>\r\n                  <input type=\"text\" formControlName=\"ServiceName\" class=\"form-control input-sm\" placeholder=\"Enter Service Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ServiceName.invalid\">\r\n                    {{getErrorMessage('ServiceName')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Service Type</label>\r\n                  <input type=\"text\" formControlName=\"ServiceType\" class=\"form-control input-sm\" placeholder=\"Enter Service Type\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ServiceType.invalid\">\r\n                    {{getErrorMessage('ServiceType')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                      <label>UOM</label>\r\n                    <select formControlName=\"UnitOfMeasurement\" class=\"form-control\">\r\n                      <option selected value=\"\">Select one</option>\r\n                      <option *ngFor=\"let unit of unitKeyPair\"   [value]=\"unit.Value\" >\r\n                        {{unit.Text}}\r\n                        \r\n                      </option>\r\n                    </select>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.UnitOfMeasurement.invalid\">\r\n                      {{getErrorMessage('UnitOfMeasurement')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/wms-services/templates/list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/wms-services/templates/list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section class=\"content\">\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      WMS SERVICE LISTING\r\n      <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateWmsService()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n        <!-- <li><button\r\n          [printStyle]=\"{table : {'font-size': '10px'}}\"\r\n           class=\"btn-genx hidden-print print-btn\" printTitle=\"Fleet Services Information\"\r\n            [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n            <span class=\"glyphicon glyphicon-print\" aria-hidden=\"true\">\r\n            </span></button></li> -->\r\n            <!-- <li><button  class=\"btn-info print-btn\" (click)=\"print()\"><span class=\"glyphicon glyphicon-print\" aria-hidden=\"true\">\r\n            </span></button></li>  -->\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.WMS_SERVICE_LISTING]\">Wms Services</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n <div >\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\" id=\"print-section\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Service Name\r\n                      </th>\r\n                      <th>\r\n                        Service Type\r\n                      </th>\r\n                      <th>\r\n                        UOM\r\n                      </th>\r\n                      <th>\r\n                          Status\r\n                        </th>\r\n                      <th>\r\n                        Actions\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let service of wmsServiceList\">\r\n                      <td>{{service.ServiceName}}</td>\r\n                      <td>{{service.ServiceType}}</td>\r\n                      <td>{{service.AML_Units.Title}}</td>\r\n                      <td>\r\n                          <span *ngIf=\"IsStatisActive(service.StatusId); else inactive_span\" class=\"label label-success\">Active</span>\r\n                          <ng-template #inactive_span>  <span class=\"bg-red label\">In Active</span></ng-template>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"btn-warning editBtn\" (click)=\"Edit(service.Id)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n\r\n                            <button type=\"button\" id=\"update\" class=\"btn-warning editBtn\" (click)=\"Detail(service.Id)\"><i\r\n                              class=\"fa fa-info\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/wms-services/wms-services.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/content/wms-services/wms-services.module.ts ***!
  \********************************************************************/
/*! exports provided: WMSServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSServicesModule", function() { return WMSServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_wms_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/wms-service.service */ "./src/app/layout/content/wms-services/services/wms-service.service.ts");
/* harmony import */ var _components_wms_service_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wms-service-form.component */ "./src/app/layout/content/wms-services/components/wms-service-form.component.ts");
/* harmony import */ var _components_wms_service_edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wms-service-edit-form.component */ "./src/app/layout/content/wms-services/components/wms-service-edit-form.component.ts");
/* harmony import */ var _components_wms_service_detail_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wms-service-detail-form.component */ "./src/app/layout/content/wms-services/components/wms-service-detail-form.component.ts");
/* harmony import */ var _components_wms_service_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/wms-service-list.component */ "./src/app/layout/content/wms-services/components/wms-service-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
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
                component: _components_wms_service_list_component__WEBPACK_IMPORTED_MODULE_8__["WMSServiceListComponent"],
            },
            {
                path: "create",
                component: _components_wms_service_form_component__WEBPACK_IMPORTED_MODULE_5__["WMSServiceFormComponent"],
            }, {
                path: "edit/:Id",
                component: _components_wms_service_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["WMSServiceEditFormComponent"],
            }, {
                path: "detail/:Id",
                component: _components_wms_service_detail_form_component__WEBPACK_IMPORTED_MODULE_7__["WMSServiceDetailFormComponent"],
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var WMSServicesModule = /** @class */ (function () {
    function WMSServicesModule() {
    }
    WMSServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"]
            ],
            declarations: [
                _components_wms_service_list_component__WEBPACK_IMPORTED_MODULE_8__["WMSServiceListComponent"], _components_wms_service_form_component__WEBPACK_IMPORTED_MODULE_5__["WMSServiceFormComponent"], _components_wms_service_detail_form_component__WEBPACK_IMPORTED_MODULE_7__["WMSServiceDetailFormComponent"], _components_wms_service_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["WMSServiceEditFormComponent"]
            ],
            providers: [
                _services_wms_service_service__WEBPACK_IMPORTED_MODULE_4__["WMSServiceService"]
            ],
            entryComponents: []
        })
    ], WMSServicesModule);
    return WMSServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-wms-services-wms-services-module.js.map