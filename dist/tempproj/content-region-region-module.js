(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-region-region-module"],{

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

/***/ "./src/app/layout/content/region/components/region-edit-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/region/components/region-edit-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegionEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionEditFormComponent", function() { return RegionEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/region.service */ "./src/app/layout/content/region/services/region.service.ts");
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






var RegionEditFormComponent = /** @class */ (function (_super) {
    __extends(RegionEditFormComponent, _super);
    function RegionEditFormComponent(injector, _regionService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._regionService = _regionService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.provinceValue = {};
        _this.provinceDropdownSettings = {};
        return _this;
    }
    RegionEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getProvinceKeyPair();
        this.getById();
        this.provinceDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    RegionEditFormComponent.prototype.getProvinceValue = function (item) {
        this.provinceValue = item.Value;
    };
    RegionEditFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        this._regionService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    RegionEditFormComponent.prototype.getProvinceNameFromProvinceKeyPair = function (provinceId) {
        var model = this.provencesKeyPair
            .filter(function (x) { return x.Value == provinceId; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    RegionEditFormComponent.prototype.getById = function () {
        var _this = this;
        var regionId = this.activeRoute.snapshot.params['Id'];
        if (regionId) {
            var regionByIdUrl = this.apiConstant.REGION_GET_ONE + ("" + regionId);
            this._regionService.getData(regionByIdUrl)
                .subscribe(function (res) {
                _this.region = res;
                _this.status = _this.region.StatusId == "1" ? true : false;
                _this.selectedProvinceInfo = [{
                        "Text": _this.getProvinceNameFromProvinceKeyPair(_this.region.ProvinceId),
                        "Value": _this.region.ProvinceId.toString()
                    }];
                _this.selectedProvinceId = _this.region.ProvinceId;
                _this.provinceValue = _this.region.ProvinceId;
                _this.formGroup.patchValue({
                    ProvinceId: _this.selectedProvinceInfo,
                    Name: _this.region.Name
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    RegionEditFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    RegionEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
    };
    RegionEditFormComponent.prototype.updateRegion = function (regionFormValue) {
        if (this.formGroup.valid) {
            this.executeRegionUpdate(regionFormValue);
        }
    };
    RegionEditFormComponent.prototype.executeRegionUpdate = function (regionFormValue) {
        var _this = this;
        this.ngxService.start();
        var region = {
            StatusId: this.status ? "1" : "0",
            Name: regionFormValue.Name,
            ProvinceId: this.provinceValue,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            AML_Province: undefined
        };
        var apiUrl = this.apiConstant.REGION_UPDATE + ("/" + this.region.RegionId);
        this._regionService.update(apiUrl, region)
            .subscribe(function (res) {
            _this.showToastrSuccess('Region updated successfully');
            setTimeout(function () {
                _this.redirectToRegionList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    RegionEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    RegionEditFormComponent.prototype.getErrorMessage = function (formElement) {
        // if any errors detected else ignore
        var control = this.formGroup.get(formElement);
        if (control.errors) {
            if (control.errors.required) {
                return 'Its required';
            }
            else if (control.errors.pattern) {
                return 'Invalid entry';
            }
            else if (control.errors.minlength) {
                return 'Invalid length';
            }
            else if (control.errors.maxlength) {
                return 'Invalid length';
            }
        }
        else {
            return '';
        }
    };
    RegionEditFormComponent.prototype.redirectToRegionList = function () {
        this.router.navigate([this.routesList.REGION_LISTING]);
    };
    RegionEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wms-edit-region-form',
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/region/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/region-form.component.scss */ "./src/app/layout/content/region/styles/region-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], RegionEditFormComponent);
    return RegionEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/region/components/region-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/region/components/region-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionFormComponent", function() { return RegionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/region.service */ "./src/app/layout/content/region/services/region.service.ts");
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





var RegionFormComponent = /** @class */ (function (_super) {
    __extends(RegionFormComponent, _super);
    function RegionFormComponent(injector, _regionService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._regionService = _regionService;
        _this.activeRoute = activeRoute;
        _this.provinceValue = {};
        _this.provinceDropdownSettings = {};
        return _this;
    }
    RegionFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getProvinceKeyPair();
        this.provinceDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    RegionFormComponent.prototype.getProvinceValue = function (item) {
        this.provinceValue = item.Value;
    };
    RegionFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        this._regionService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    /**
  * The following method is used to add the form validations
  */
    RegionFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
    };
    RegionFormComponent.prototype.createRegion = function (regionFormValue) {
        if (this.formGroup.valid) {
            this.executeRegionCreation(regionFormValue);
        }
    };
    RegionFormComponent.prototype.executeRegionCreation = function (regionFormValue) {
        var _this = this;
        var region = {
            StatusId: this.status ? '1' : '0',
            Name: regionFormValue.Name,
            ProvinceId: this.provinceValue,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_Province: undefined
        };
        var apiUrl = this.apiConstant.REGION_CREATE;
        this._regionService.create(apiUrl, region)
            .subscribe(function (res) {
            _this.showToastrSuccess('Region created successfully');
            setTimeout(function () {
                _this.clearFields();
            }, 1000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    RegionFormComponent.prototype.clearFields = function () {
        this.formGroup.get("ProvinceId").setValue('');
        this.formGroup.get("Name").setValue('');
    };
    RegionFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    RegionFormComponent.prototype.getErrorMessage = function (formElement) {
        // if any errors detected else ignore
        var control = this.formGroup.get(formElement);
        if (control.errors) {
            if (control.errors.required) {
                return 'Its required';
            }
            else if (control.errors.pattern) {
                return 'Invalid entry';
            }
            else if (control.errors.minlength) {
                return 'Invalid length';
            }
            else if (control.errors.maxlength) {
                return 'Invalid length';
            }
        }
        else {
            return '';
        }
    };
    RegionFormComponent.prototype.redirectToRegionList = function () {
        this.router.navigate([this.routesList.REGION_LISTING]);
    };
    RegionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wms-region-form',
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/region/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/region-form.component.scss */ "./src/app/layout/content/region/styles/region-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RegionFormComponent);
    return RegionFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/region/components/region-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/region/components/region-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionListComponent", function() { return RegionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/region.service */ "./src/app/layout/content/region/services/region.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
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








var RegionListComponent = /** @class */ (function (_super) {
    __extends(RegionListComponent, _super);
    function RegionListComponent(injector, _regionService, chRef, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._regionService = _regionService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.RegionListToPost = [];
        return _this;
    }
    RegionListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    RegionListComponent.prototype.getAll = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.REGION_LIST;
        this._regionService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionList = res;
            console.log(_this.regionList);
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 50, 100, 500],
                "iDisplayLength": 100
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    RegionListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.REGION_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    RegionListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.regionList.forEach(function (element) {
            var regionObj = {
                RegionName: element.Name,
                Province: element.AML_Province.Name,
            };
            _this.RegionListToPost.push(regionObj);
        });
        this.exporterService.exportToExcel(this.RegionListToPost, 'RegionList Data');
        this.RegionListToPost = [];
    };
    RegionListComponent.prototype.redirectToCreateRegion = function () {
        this.router.navigate([this.routesList.REGION_CREATE]);
    };
    RegionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wms-region-list',
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/region/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/region-form.component.scss */ "./src/app/layout/content/region/styles/region-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_region_service__WEBPACK_IMPORTED_MODULE_1__["RegionService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], RegionListComponent);
    return RegionListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/region/region.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/content/region/region.module.ts ***!
  \********************************************************/
/*! exports provided: RegionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionModule", function() { return RegionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/region.service */ "./src/app/layout/content/region/services/region.service.ts");
/* harmony import */ var _components_region_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/region-form.component */ "./src/app/layout/content/region/components/region-form.component.ts");
/* harmony import */ var _components_region_edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/region-edit-form.component */ "./src/app/layout/content/region/components/region-edit-form.component.ts");
/* harmony import */ var _components_region_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/region-list.component */ "./src/app/layout/content/region/components/region-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _components_region_list_component__WEBPACK_IMPORTED_MODULE_7__["RegionListComponent"],
            },
            {
                path: 'create',
                component: _components_region_form_component__WEBPACK_IMPORTED_MODULE_5__["RegionFormComponent"],
            }, {
                path: 'edit/:Id',
                component: _components_region_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["RegionEditFormComponent"],
            }, {
                path: '**',
                redirectTo: '',
            }
        ]
    }
];
var RegionModule = /** @class */ (function () {
    function RegionModule() {
    }
    RegionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_region_list_component__WEBPACK_IMPORTED_MODULE_7__["RegionListComponent"], _components_region_form_component__WEBPACK_IMPORTED_MODULE_5__["RegionFormComponent"], _components_region_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["RegionEditFormComponent"]
            ],
            providers: [
                _services_region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__["ExporterService"]
            ],
            entryComponents: []
        })
    ], RegionModule);
    return RegionModule;
}());



/***/ }),

/***/ "./src/app/layout/content/region/services/region.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/content/region/services/region.service.ts ***!
  \******************************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
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


var RegionService = /** @class */ (function (_super) {
    __extends(RegionService, _super);
    function RegionService(injector) {
        return _super.call(this, injector) || this;
    }
    RegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], RegionService);
    return RegionService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/region/styles/region-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/region/styles/region-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/region/templates/edit-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/region/templates/edit-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          Region EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.REGION_LISTING]\">Region</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateRegion(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                <!-- <h3 class=\"box-title\">Quick Example</h3> -->\r\n                <button type=\"button\" (click)=\"redirectToRegionList()\" class=\"btn-wms\">Region Listing</button>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"pull-right\">\r\n                  <div class=\"col-md-6 toggle-label \">\r\n                    <span *ngIf=\"status == true\">\r\n                      <b>Active</b>\r\n                    </span>\r\n                    <span *ngIf=\"status == false\">\r\n                      <b>InActive</b>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <ui-switch switchColor=\"#fcfcfc\" [checked]=\"status == true\" (change)=\"onStatusChange($event)\"></ui-switch>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n            \r\n              <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Province</label>\r\n                  <select formControlName=\"ProvinceId\" class=\"form-control\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let prov of provencesKeyPair\" [value]=\"prov.Value\">\r\n                      {{prov.Text}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                    {{getErrorMessage('ProvinceId')}}\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-4\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <label>Province</label>\r\n                   \r\n                    <ng-multiselect-dropdown  \r\n                    [placeholder]=\"'Select one'\"\r\n                    [data]=\"provencesKeyPair\"\r\n                    [settings]=\"provinceDropdownSettings\"\r\n                    formControlName=\"ProvinceId\"\r\n                    [(ngModel)]=\"selectedProvinceInfo\"\r\n                    (onSelect)=\"getProvinceValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                      {{getErrorMessage('ProvinceId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Region Name</label>\r\n                    <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter region name\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                      {{getErrorMessage('Name')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/region/templates/form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/region/templates/form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          Region CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.REGION_LISTING]\">Region</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createRegion(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToRegionList()\" class=\"btn-wms\">Region Listing</button>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Province</label>\r\n                  <select formControlName=\"ProvinceId\" class=\"form-control\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let prov of provencesKeyPair\" [value]=\"prov.Value\">\r\n                      {{prov.Text}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                    {{getErrorMessage('ProvinceId')}}\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Province</label>\r\n                   \r\n                    <ng-multiselect-dropdown  \r\n                    [placeholder]=\"'Select one'\"\r\n                    [data]=\"provencesKeyPair\"\r\n                    [settings]=\"provinceDropdownSettings\"\r\n                    formControlName=\"ProvinceId\"\r\n                    (onSelect)=\"getProvinceValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                      {{getErrorMessage('ProvinceId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Region Name</label>\r\n                    <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter region name\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                      {{getErrorMessage('Name')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/region/templates/list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/region/templates/list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          Region LISTING\r\n          <small>\r\n            <button class=\"btn-wms\" (click)=\"redirectToCreateRegion()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n          </small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.REGION_LISTING]\">Region</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n      \r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Sr.\r\n                      </th>\r\n                      <th>\r\n                        Region Name\r\n                      </th>\r\n                      <th>\r\n                        Province\r\n                      </th>\r\n                      <th>\r\n                          Status\r\n                        </th>\r\n                      <th>\r\n                        Actions\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let region of regionList; let i = index\">\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{region.Name}}</td>\r\n                      <td>{{region.AML_Province.Name}}</td>\r\n                      <td>\r\n                          <span *ngIf=\"IsStatisActive(region.StatusId); else inactive_span\" class=\"label label-success\">Active</span>\r\n                          <ng-template #inactive_span>  <span class=\"bg-red label\">In Active</span></ng-template>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(region.RegionId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-region-region-module.js.map