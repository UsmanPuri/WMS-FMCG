(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-cities-cities-module"],{

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

/***/ "./src/app/layout/content/cities/cities.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/content/cities/cities.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ngx_toggle_switch_1 = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var city_service_1 = __webpack_require__(/*! ./services/city.service */ "./src/app/layout/content/cities/services/city.service.ts");
var city_form_component_1 = __webpack_require__(/*! ./components/city-form.component */ "./src/app/layout/content/cities/components/city-form.component.ts");
var city_edit_form_component_1 = __webpack_require__(/*! ./components/city-edit-form.component */ "./src/app/layout/content/cities/components/city-edit-form.component.ts");
var city_list_component_1 = __webpack_require__(/*! ./components/city-list.component */ "./src/app/layout/content/cities/components/city-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: city_list_component_1.CityListComponent,
            },
            {
                path: "create",
                component: city_form_component_1.CityFormComponent,
            }, {
                path: "edit/:Id",
                component: city_edit_form_component_1.CityEditFormComponent,
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                city_list_component_1.CityListComponent, city_form_component_1.CityFormComponent, city_edit_form_component_1.CityEditFormComponent
            ],
            providers: [
                city_service_1.CityService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], CitiesModule);
    return CitiesModule;
}());
exports.CitiesModule = CitiesModule;


/***/ }),

/***/ "./src/app/layout/content/cities/components/city-edit-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/cities/components/city-edit-form.component.ts ***!
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var city_service_1 = __webpack_require__(/*! ../services/city.service */ "./src/app/layout/content/cities/services/city.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var CityEditFormComponent = /** @class */ (function (_super) {
    __extends(CityEditFormComponent, _super);
    function CityEditFormComponent(injector, _cityService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._cityService = _cityService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.regionDropdownSettings = {};
        _this.provinceDropdownSettings = {};
        return _this;
    }
    CityEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getProvinceKeyPair();
        this.getById();
        this.regionDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
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
    CityEditFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityEditFormComponent.prototype.getRegionKeyPair = function (selectedProject, triggerdOnClick) {
        var _this = this;
        this.selectedProvinceId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            ProvinceId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
        this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
            _this.formGroup.get("RegionId").setValue('');
            if (!triggerdOnClick) {
                _this.selectedRegionInfo = [{
                        "Text": _this.getRegionNameFromRegionKeyPair(_this.city.RegionId),
                        "Value": _this.city.RegionId.toString()
                    }];
                _this.selectedRegionId = _this.city.RegionId;
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityEditFormComponent.prototype.getRegionValue = function (item) {
        this.selectedRegionId = {
            Value: item.Value,
            Text: item.Text
        };
    };
    CityEditFormComponent.prototype.getProvinceNameFromProvinceKeyPair = function (provinceId) {
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
    CityEditFormComponent.prototype.getRegionNameFromRegionKeyPair = function (regionId) {
        var model = this.regionKeyPair
            .filter(function (x) { return x.Value == regionId; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    CityEditFormComponent.prototype.getById = function () {
        var _this = this;
        var cityId = this.activeRoute.snapshot.params['Id'];
        if (cityId) {
            var cityByIdUrl = this.apiConstant.CITY_GET_ONE + ("" + cityId);
            this._cityService.getData(cityByIdUrl)
                .subscribe(function (res) {
                _this.city = res;
                _this.getRegionKeyPair({ Value: _this.city.ProvinceId }, false);
                _this.status = _this.city.StatusId == "1" ? true : false;
                _this.selectedProvinceInfo = [{
                        "Text": _this.getProvinceNameFromProvinceKeyPair(_this.city.ProvinceId),
                        "Value": _this.city.ProvinceId.toString()
                    }];
                _this.selectedProvinceId = _this.city.ProvinceId;
                _this.formGroup.patchValue({
                    ProvinceId: _this.selectedProvinceInfo,
                    RegionId: _this.selectedRegionInfo,
                    Name: _this.city.Name
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    CityEditFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    CityEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
        this.addFormControlWithValidations("RegionId", requiredValidation);
    };
    CityEditFormComponent.prototype.updateCity = function (cityFormValue) {
        if (this.formGroup.valid) {
            this.executeCityUpdate(cityFormValue);
        }
    };
    CityEditFormComponent.prototype.executeCityUpdate = function (cityFormValue) {
        var _this = this;
        this.ngxService.start();
        var citylst = {
            CityId: this.city.CityId,
            StatusId: this.status ? "1" : "0",
            Name: cityFormValue.Name,
            ProvinceId: this.selectedProvinceId,
            RegionId: this.selectedRegionId.Value,
            ZoneId: this.selectedRegionId.Value,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            AML_Province: undefined,
            AML_Region: undefined
        };
        var apiUrl = this.apiConstant.CITY_UPDATE + ("/" + this.city.CityId);
        this._cityService.update(apiUrl, citylst)
            .subscribe(function (res) {
            _this.showToastrSuccess("City updated successfully");
            setTimeout(function () {
                _this.redirectToCityList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CityEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CityEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    CityEditFormComponent.prototype.redirectToCityList = function () {
        this.router.navigate([this.routesList.CITY_LISTING]);
    };
    CityEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-edit-city-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/cities/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/city-form.component.scss */ "./src/app/layout/content/cities/styles/city-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, city_service_1.CityService,
            router_1.ActivatedRoute, ngx_ui_loader_1.NgxUiLoaderService])
    ], CityEditFormComponent);
    return CityEditFormComponent;
}(base_component_1.BaseComponent));
exports.CityEditFormComponent = CityEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/cities/components/city-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/cities/components/city-form.component.ts ***!
  \*************************************************************************/
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
var city_service_1 = __webpack_require__(/*! ../services/city.service */ "./src/app/layout/content/cities/services/city.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CityFormComponent = /** @class */ (function (_super) {
    __extends(CityFormComponent, _super);
    function CityFormComponent(injector, _cityService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._cityService = _cityService;
        _this.activeRoute = activeRoute;
        _this.regionDropdownSettings = {};
        _this.provinceDropdownSettings = {};
        _this.zoneDropdownSettings = {};
        _this.regionValue = {};
        return _this;
    }
    CityFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getProvinceKeyPair();
        this.regionDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.provinceDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.zoneDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    CityFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        debugger;
        this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityFormComponent.prototype.getRegionKeyPair = function (selectedProject) {
        var _this = this;
        debugger;
        this.selectedProvinceId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            ProvinceId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
        this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
            _this.formGroup.get("RegionId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityFormComponent.prototype.getZoneKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            ProvinceId: this.selectedProvinceId,
            RegionId: this.regionValue
        };
        var apiAddress = this.apiConstant.ZONE_GET_BY_ID_REGION;
        this._cityService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.zoneKeyPair = res;
            _this.formGroup.get("ZoneId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityFormComponent.prototype.getRegionValue = function (item) {
        this.regionValue = item.Value;
        this.getZoneKeyPair();
    };
    CityFormComponent.prototype.setZoneKey = function (item) {
        this.SelectedZoneId = item.Value;
    };
    /**
  * The following method is used to add the form validations
  */
    CityFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
        this.addFormControlWithValidations("RegionId", requiredValidation);
        this.addFormControlWithValidations("ZoneId", requiredValidation);
    };
    CityFormComponent.prototype.createCity = function (cityFormValue) {
        if (this.formGroup.valid) {
            this.executeCityCreation(cityFormValue);
        }
    };
    CityFormComponent.prototype.executeCityCreation = function (provinceFormValue) {
        var _this = this;
        var city = {
            StatusId: this.status ? "1" : "0",
            Name: provinceFormValue.Name,
            ProvinceId: this.selectedProvinceId,
            RegionId: this.regionValue,
            ZoneId: this.SelectedZoneId,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_Province: undefined,
            AML_Region: undefined
        };
        var apiUrl = this.apiConstant.CITY_CREATE;
        this._cityService.create(apiUrl, city)
            .subscribe(function (res) {
            _this.showToastrSuccess("City Created Successfully");
            setTimeout(function () {
                _this.formGroup.get('ProvinceId').setValue('');
                _this.formGroup.get('RegionId').setValue('');
                _this.formGroup.get('ZoneId').setValue('');
                _this.formGroup.get('Name').setValue('');
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CityFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CityFormComponent.prototype.getErrorMessage = function (formElement) {
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
    CityFormComponent.prototype.redirectToCityList = function () {
        this.router.navigate([this.routesList.CITY_LISTING]);
    };
    CityFormComponent = __decorate([
        core_1.Component({
            selector: "wms-city-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/cities/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/city-form.component.scss */ "./src/app/layout/content/cities/styles/city-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, city_service_1.CityService,
            router_1.ActivatedRoute])
    ], CityFormComponent);
    return CityFormComponent;
}(base_component_1.BaseComponent));
exports.CityFormComponent = CityFormComponent;


/***/ }),

/***/ "./src/app/layout/content/cities/components/city-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/cities/components/city-list.component.ts ***!
  \*************************************************************************/
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
var city_service_1 = __webpack_require__(/*! ../services/city.service */ "./src/app/layout/content/cities/services/city.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var CityListComponent = /** @class */ (function (_super) {
    __extends(CityListComponent, _super);
    function CityListComponent(injector, _cityService, chRef, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._cityService = _cityService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.CityListToPost = [];
        return _this;
    }
    CityListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CityListComponent.prototype.getAll = function () {
        var _this = this;
        this.ngxService.start();
        var apiAddress = this.apiConstant.CITY_LIST;
        this._cityService.getData(apiAddress)
            .subscribe(function (res) {
            _this.cityList = res;
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 100, 500],
                "iDisplayLength": 100
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CityListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.CITY_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    CityListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.cityList.forEach(function (element) {
            var cityObj = {
                Name: element.Name,
                Province: element.AML_Province.Name,
                Region: element.AML_Region.Name,
            };
            _this.CityListToPost.push(cityObj);
        });
        this.exporterService.exportToExcel(this.CityListToPost, 'CityList Data');
        this.CityListToPost = [];
    };
    CityListComponent.prototype.redirectToCreateCity = function () {
        this.router.navigate([this.routesList.CITY_CREATE]);
    };
    CityListComponent = __decorate([
        core_1.Component({
            selector: "wms-city-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/cities/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/city-form.component.scss */ "./src/app/layout/content/cities/styles/city-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, city_service_1.CityService, core_1.ChangeDetectorRef,
            excel_file_service_1.ExporterService,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], CityListComponent);
    return CityListComponent;
}(base_component_1.BaseComponent));
exports.CityListComponent = CityListComponent;


/***/ }),

/***/ "./src/app/layout/content/cities/services/city.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/content/cities/services/city.service.ts ***!
  \****************************************************************/
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
var CityService = /** @class */ (function (_super) {
    __extends(CityService, _super);
    function CityService(injector) {
        return _super.call(this, injector) || this;
    }
    CityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], CityService);
    return CityService;
}(repository_service_1.RepositoryService));
exports.CityService = CityService;


/***/ }),

/***/ "./src/app/layout/content/cities/styles/city-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/cities/styles/city-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}\n"

/***/ }),

/***/ "./src/app/layout/content/cities/templates/edit-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/cities/templates/edit-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CITY EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CITY_LISTING]\">Cities</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateCity(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                <!-- <h3 class=\"box-title\">Quick Example</h3> -->\r\n                <button type=\"button\" (click)=\"redirectToCityList()\" class=\"btn-wms\">City Listing</button>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"pull-right\">\r\n                  <div class=\"col-md-6 toggle-label \">\r\n                    <span *ngIf=\"status == true\">\r\n                      <b>Active</b>\r\n                    </span>\r\n                    <span *ngIf=\"status == false\">\r\n                      <b>InActive</b>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <ui-switch switchColor=\"#fcfcfc\" [checked]=\"status == true\" (change)=\"onStatusChange($event)\"></ui-switch>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Province</label>\r\n                     \r\n                      <ng-multiselect-dropdown  \r\n                      [placeholder]=\"'Select one'\"\r\n                      [data]=\"provencesKeyPair\"\r\n                      [settings]=\"provinceDropdownSettings\"\r\n                      formControlName=\"ProvinceId\"\r\n                      [(ngModel)]=\"selectedProvinceInfo\"\r\n                      (onSelect)=\"getRegionKeyPair($event, true)\">\r\n                    </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                        {{getErrorMessage('ProvinceId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Province</label>\r\n                      <select (change)=\"getRegionKeyPair($event.target.value)\" formControlName=\"ProvinceId\" class=\"form-control\">\r\n                        <option selected value=\"\">Select one</option>\r\n                        <option *ngFor=\"let prov of provencesKeyPair\" [value]=\"prov.Value\">\r\n                          {{prov.Text}}\r\n                        </option>\r\n                      </select>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                        {{getErrorMessage('ProvinceId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  \r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label>Region</label>\r\n                       \r\n                        <ng-multiselect-dropdown  \r\n                        [placeholder]=\"'Select one'\"\r\n                        [data]=\"regionKeyPair\"\r\n                        [settings]=\"regionDropdownSettings\"\r\n                        formControlName=\"RegionId\"\r\n                        [(ngModel)]=\"selectedRegionInfo\"\r\n                        (onSelect)=\"getRegionValue($event)\">\r\n                      </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                          {{getErrorMessage('RegionId')}}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Region</label>\r\n                      <select formControlName=\"RegionId\" class=\"form-control\">\r\n                        <option selected value=\"\">Select one</option>\r\n                        <option *ngFor=\"let region of regionKeyPair\" [value]=\"region.Value\">\r\n                          {{region.Text}}\r\n                        </option>\r\n                      </select>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                        {{getErrorMessage('RegionId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div> -->\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter City name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/cities/templates/form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/cities/templates/form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CITY CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CITY_LISTING]\">Cities</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createCity(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToCityList()\" class=\"btn-wms\">City Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Province</label>\r\n                    <ng-multiselect-dropdown  \r\n                    [placeholder]=\"'Select one'\"\r\n                    [data]=\"provencesKeyPair\"\r\n                    [settings]=\"provinceDropdownSettings\"\r\n                    formControlName=\"ProvinceId\"\r\n                    (onSelect)=\"getRegionKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                      {{getErrorMessage('ProvinceId')}}\r\n                    </span>\r\n                  </div>\r\n              </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Region</label>\r\n                      <ng-multiselect-dropdown  \r\n                      [placeholder]=\"'Select one'\"\r\n                      [data]=\"regionKeyPair\"\r\n                      [settings]=\"regionDropdownSettings\"\r\n                      formControlName=\"RegionId\"\r\n                      (onSelect)=\"getRegionValue($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                        {{getErrorMessage('RegionId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group \">\r\n                      <label>Zone</label>\r\n                      <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                      [data]=\"zoneKeyPair\" [settings]=\"zoneDropdownSettings\"\r\n                      formControlName=\"ZoneId\"\r\n                      (onSelect)=\"setZoneKey($event)\">\r\n                      </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.ZoneId.invalid\">\r\n                        {{getErrorMessage('ZoneId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Name</label>\r\n                      <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter City name\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                        {{getErrorMessage('Name')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/cities/templates/list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/cities/templates/list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CITY LISTING\r\n          <button class=\"btn-wms-head\" (click)=\"redirectToCreateCity()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CITY_LISTING]\">City</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>Sr.</th>\r\n                      <th>Province</th>\r\n                      <th>Region</th>\r\n                      <th>Zone</th>\r\n                      <th>Name</th>\r\n                      <th>Status</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let city of cityList; let i = index\">\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{city.AML_Province.Name}}</td>\r\n                      <td>{{city.AML_Region.Name}}</td>\r\n                      <td>{{city.AML_Zone.ZoneName}}</td>\r\n                      <td>{{city.Name}}</td>\r\n                      <td>\r\n                          <span *ngIf=\"IsStatisActive(city.StatusId); else inactive_span\" class=\"label label-success\">Active</span>\r\n                          <ng-template #inactive_span>  <span class=\"bg-red label\">In Active</span></ng-template>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(city.CityId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-cities-cities-module.js.map