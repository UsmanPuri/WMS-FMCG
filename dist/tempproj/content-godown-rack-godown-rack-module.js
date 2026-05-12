(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-godown-rack-godown-rack-module"],{

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

/***/ "./src/app/layout/content/godown-rack/components/godown-rack-edit-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/components/godown-rack-edit-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GodownRackEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownRackEditFormComponent", function() { return GodownRackEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/godown-rack.service */ "./src/app/layout/content/godown-rack/services/godown-rack.service.ts");
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






var GodownRackEditFormComponent = /** @class */ (function (_super) {
    __extends(GodownRackEditFormComponent, _super);
    function GodownRackEditFormComponent(injector, _godownRackServiceService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._godownRackServiceService = _godownRackServiceService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.godownDropdownSettings = {};
        _this.godownRowDropdownSettings = {};
        return _this;
    }
    GodownRackEditFormComponent.prototype.ngOnInit = function () {
        this.getGodownKeyPair();
        this.addFormValidations();
        this.dropdownSettings();
        this.getGodwomRackById();
    };
    GodownRackEditFormComponent.prototype.getGodwomNameFromGodwomKeyPair = function (godwomId) {
        var model = this.godownKeyPair
            .filter(function (x) { return x.Value == godwomId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    GodownRackEditFormComponent.prototype.getGodwomRowNameFromGodwomRowKeyPair = function (godwomId) {
        var model = this.godownRowKeyPair
            .filter(function (x) { return x.Value == godwomId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    GodownRackEditFormComponent.prototype.getGodwomRackById = function () {
        var _this = this;
        var godwomRackId = this.activeRoute.snapshot.params['Id'];
        if (godwomRackId) {
            var byIdUrl = this.apiConstant.GODOWN_RACK_GET_ONE + ("" + godwomRackId);
            this._godownRackServiceService.getData(byIdUrl)
                .subscribe(function (res) {
                _this.godownRack = res;
                _this.selectedGodwomInfo = [{
                        "Text": _this.getGodwomNameFromGodwomKeyPair(_this.godownRack.GodwonId),
                        "Value": _this.godownRack.GodwonId.toString()
                    }];
                _this.selectedGodown = _this.godownRack.GodwonId;
                _this.getGodownRowKeyPair(_this.godownRack.GodwonId, false);
                _this.formGroup.patchValue({
                    Name: _this.godownRack.Name,
                    Alias: _this.godownRack.Alias
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
  * The following method is used to add the form validations
  */
    GodownRackEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Alias", requiredValidation);
        this.addFormControlWithValidations("GodownRowId", []);
        this.addFormControlWithValidations("godownId", []);
    };
    GodownRackEditFormComponent.prototype.getGodownKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.GODWOM_KEYPAIR;
        this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackEditFormComponent.prototype.getGodownRowKeyPair = function (bodownId, triggerdOnClick) {
        var _this = this;
        debugger;
        var apiAddress = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + ("" + bodownId);
        this._godownRackServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRowKeyPair = res;
            if (triggerdOnClick === false) {
                debugger;
                _this.selectedGodwomRowInfo = [{
                        "Text": _this.getGodwomRowNameFromGodwomRowKeyPair(_this.godownRack.GodownRowId),
                        "Value": _this.godownRack.GodownRowId.toString()
                    }];
                _this.selectedgodownRow = _this.godownRack.GodownRowId;
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackEditFormComponent.prototype.godownChange = function (selectedItem) {
        this.selectedGodown = selectedItem.Value;
        this.formGroup.get("GodownRowId").setValue('');
        this.selectedgodownRow = {};
        this.getGodownRowKeyPair(selectedItem.Value, true);
    };
    GodownRackEditFormComponent.prototype.godownRowChange = function (item) {
        this.selectedgodownRow = item.Value;
    };
    GodownRackEditFormComponent.prototype.updateGodownRack = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedGodown) {
                this.showToastrWarning("Select Chamber please.");
                return false;
            }
            else if (!this.selectedgodownRow) {
                this.showToastrWarning("Select Aisle Row please.");
                return false;
            }
            this.executeGodownRackCreation(formValue);
        }
    };
    GodownRackEditFormComponent.prototype.executeGodownRackCreation = function (formValue) {
        var _this = this;
        this.ngxService.start();
        var godwom = {
            GodwonId: this.selectedGodown,
            GodownRowId: this.selectedgodownRow,
            Name: formValue.Name,
            Alias: formValue.Alias,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            AML_Godwom: undefined
        };
        var apiUrl = this.apiConstant.GODOWN_RACK_UPDATE + ("/" + this.godownRack.GodownRackId);
        this._godownRackServiceService.update(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Godown Rack Updated successfully");
            setTimeout(function () {
                _this.redirectToGodownRackList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownRackEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    GodownRackEditFormComponent.prototype.dropdownSettings = function () {
        this.godownDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownRowDropdownSettings = {
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
    GodownRackEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    GodownRackEditFormComponent.prototype.redirectToGodownRackList = function () {
        this.router.navigate([this.routesList.GODOWN_RACK_LISTING]);
    };
    GodownRackEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-rack-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/godown-rack/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-rack-form.component.scss */ "./src/app/layout/content/godown-rack/styles/godown-rack-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_2__["GodownRackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], GodownRackEditFormComponent);
    return GodownRackEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-rack/components/godown-rack-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/components/godown-rack-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GodownRackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownRackFormComponent", function() { return GodownRackFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/godown-rack.service */ "./src/app/layout/content/godown-rack/services/godown-rack.service.ts");
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





var GodownRackFormComponent = /** @class */ (function (_super) {
    __extends(GodownRackFormComponent, _super);
    function GodownRackFormComponent(injector, _godownRackServiceService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._godownRackServiceService = _godownRackServiceService;
        _this.activeRoute = activeRoute;
        _this.godownDropdownSettings = {};
        _this.godownRowDropdownSettings = {};
        _this.warehouseDropdownSettings = {};
        _this.godownRackDropdownSettings = {};
        _this.selectedGodown = {};
        _this.selectedgodownRow = {};
        return _this;
    }
    GodownRackFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        // this.getGodownKeyPair();
        this.getWarehouseKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    GodownRackFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Alias", requiredValidation);
        this.addFormControlWithValidations("GodownRowId", []);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("GodownId", []);
    };
    // getGodownKeyPair() {
    //   let companyBusinessUnitInfo: any = {
    //     CompanyId: this.localStorageService.getCompanyId(),
    //     BusinessUnitId:this.localStorageService.getBusinessUnitId(),
    //   }
    //   let apiAddress: string = this.apiConstant.GODWOM_KEYPAIR;
    //   this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
    //     .subscribe(res => {
    //       this.godownKeyPair = res as DropdownListDto[];
    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       });
    // }
    GodownRackFormComponent.prototype.getGodownRowKeyPair = function (bodownId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + ("" + bodownId);
        this._godownRackServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRowKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackFormComponent.prototype.godownChange = function (selectedItem) {
        this.selectedGodown = {
            Id: selectedItem.Value,
            Name: selectedItem.Text
        };
        this.formGroup.get("GodownRowId").setValue('');
        this.selectedgodownRow = {};
        this.getGodownRowKeyPair(selectedItem.Value);
    };
    GodownRackFormComponent.prototype.godownRowChange = function (item) {
        this.selectedgodownRow = {
            Id: item.Value,
            Name: item.Text
        };
    };
    GodownRackFormComponent.prototype.createGodownRack = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedGodown || !this.selectedGodown["Id"]) {
                this.showToastrWarning("Select Godown please.");
                return false;
            }
            else if (!this.selectedgodownRow || !this.selectedgodownRow["Id"]) {
                this.showToastrWarning("Select Godown Row please.");
                return false;
            }
            this.executeGodownRackCreation(formValue);
        }
    };
    GodownRackFormComponent.prototype.executeGodownRackCreation = function (formValue) {
        var _this = this;
        var godwom = {
            GodwonId: this.selectedGodown["Id"],
            GodownRowId: this.selectedgodownRow["Id"],
            Name: formValue.Name,
            Alias: formValue.Alias,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            AML_Godwom: undefined
        };
        var apiUrl = this.apiConstant.GODOWN_RACK_CREATE;
        this._godownRackServiceService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Godown Rack created successfully");
            setTimeout(function () {
                _this.redirectToGodownRackList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownRackFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    GodownRackFormComponent.prototype.dropdownSettings = function () {
        this.warehouseDropdownSettings = {
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
        this.godownRowDropdownSettings = {
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
    GodownRackFormComponent.prototype.getErrorMessage = function (formElement) {
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
    GodownRackFormComponent.prototype.redirectToGodownRackList = function () {
        this.router.navigate([this.routesList.GODOWN_RACK_LISTING]);
    };
    GodownRackFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackFormComponent.prototype.getGodownKeyPair = function (selectedProject) {
        var _this = this;
        this.selectedWarehouseId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            WarehouseId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._godownRackServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
            _this.formGroup.get("GodownId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-rack-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/godown-rack/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-rack-form.component.scss */ "./src/app/layout/content/godown-rack/styles/godown-rack-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_2__["GodownRackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GodownRackFormComponent);
    return GodownRackFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-rack/components/godown-rack-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/components/godown-rack-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GodownRackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownRackListComponent", function() { return GodownRackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/godown-rack.service */ "./src/app/layout/content/godown-rack/services/godown-rack.service.ts");
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








var GodownRackListComponent = /** @class */ (function (_super) {
    __extends(GodownRackListComponent, _super);
    function GodownRackListComponent(injector, _godownRackService, chRef, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._godownRackService = _godownRackService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.GodownRackListToPost = [];
        return _this;
    }
    GodownRackListComponent.prototype.ngOnInit = function () {
        this.getAllGodownRacks();
    };
    GodownRackListComponent.prototype.getAllGodownRacks = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.GODOWN_RACK_LIST;
        this._godownRackService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownRackList = res;
            console.log(_this.godownRackList);
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 50, 100, 500],
                "iDisplayLength": 500,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownRackListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.GODOWN_RACK_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    GodownRackListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.godownRackList.forEach(function (element) {
            var godownRackObj = {
                Name: element.Name,
                ChamberName: element.AML_Godwom.Name,
                Aisle: element.Alias,
            };
            _this.GodownRackListToPost.push(godownRackObj);
        });
        this.exporterService.exportToExcel(this.GodownRackListToPost, 'GodownRackList Data');
        this.GodownRackListToPost = [];
    };
    GodownRackListComponent.prototype.Delete = function (Item) {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            GodownRackId: Item.GodownRackId,
            GodownRowId: Item.GodownRowId,
            GodwonId: Item.GodwonId,
            Type: "rack"
        };
        var apiUrl = this.apiConstant.WAREHOUSE_DELETE;
        this._godownRackService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Godown Rack deleted successfully');
                _this.getAllGodownRacks();
            }
            else {
                _this.showToastrWarning('Godown Rack Can not be deleted');
            }
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownRackListComponent.prototype.redirectToCreateGodownRack = function () {
        this.router.navigate([this.routesList.GODOWN_RACK_CREATE]);
    };
    GodownRackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-rack-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/godown-rack/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-rack-form.component.scss */ "./src/app/layout/content/godown-rack/styles/godown-rack-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_1__["GodownRackService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], GodownRackListComponent);
    return GodownRackListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-rack/godown-rack.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/godown-rack.module.ts ***!
  \******************************************************************/
/*! exports provided: GodownRackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownRackModule", function() { return GodownRackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/godown-rack.service */ "./src/app/layout/content/godown-rack/services/godown-rack.service.ts");
/* harmony import */ var _components_godown_rack_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/godown-rack-form.component */ "./src/app/layout/content/godown-rack/components/godown-rack-form.component.ts");
/* harmony import */ var _components_godown_rack_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/godown-rack-list.component */ "./src/app/layout/content/godown-rack/components/godown-rack-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _components_godown_rack_edit_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/godown-rack-edit-form.component */ "./src/app/layout/content/godown-rack/components/godown-rack-edit-form.component.ts");
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
        path: "",
        children: [
            {
                path: "",
                component: _components_godown_rack_list_component__WEBPACK_IMPORTED_MODULE_6__["GodownRackListComponent"],
            },
            {
                path: "create",
                component: _components_godown_rack_form_component__WEBPACK_IMPORTED_MODULE_5__["GodownRackFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_godown_rack_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["GodownRackEditFormComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var GodownRackModule = /** @class */ (function () {
    function GodownRackModule() {
    }
    GodownRackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_godown_rack_form_component__WEBPACK_IMPORTED_MODULE_5__["GodownRackFormComponent"], _components_godown_rack_list_component__WEBPACK_IMPORTED_MODULE_6__["GodownRackListComponent"], _components_godown_rack_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["GodownRackEditFormComponent"]
            ],
            providers: [
                _services_godown_rack_service__WEBPACK_IMPORTED_MODULE_4__["GodownRackService"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__["ExporterService"]
            ],
            entryComponents: []
        })
    ], GodownRackModule);
    return GodownRackModule;
}());



/***/ }),

/***/ "./src/app/layout/content/godown-rack/services/godown-rack.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/services/godown-rack.service.ts ***!
  \****************************************************************************/
/*! exports provided: GodownRackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownRackService", function() { return GodownRackService; });
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


var GodownRackService = /** @class */ (function (_super) {
    __extends(GodownRackService, _super);
    function GodownRackService(injector) {
        return _super.call(this, injector) || this;
    }
    GodownRackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GodownRackService);
    return GodownRackService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/godown-rack/styles/godown-rack-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/styles/godown-rack-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/godown-rack/templates/edit-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/templates/edit-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CHAMBER RACK EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_RACK_LISTING]\">Chamber Rack</a></li>\r\n          <li class=\"active\">Edit</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateGodownRack(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToGodownRackList()\" class=\"btn-wms\">Chamber Rack Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Chamber Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Alias</label>\r\n                  <input type=\"text\" formControlName=\"Alias\" class=\"form-control input-sm\" placeholder=\"Enter Chamber Alias\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Alias.invalid\">\r\n                    {{getErrorMessage('Alias')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber</label>\r\n                  <ng-multiselect-dropdown  \r\n                  [placeholder]=\"'Select one'\"\r\n                  [data]=\"godownKeyPair\"\r\n                  [settings]=\"godownDropdownSettings\"\r\n                  (onSelect)=\"godownChange($event)\"\r\n                  formControlName=\"godownId\"\r\n                  [(ngModel)]=\"selectedGodwomInfo\"\r\n                  \r\n                  >\r\n                </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Aisle</label>\r\n                  <ng-multiselect-dropdown  \r\n                  [placeholder]=\"'Select one'\"\r\n                  [data]=\"godownRowKeyPair\"\r\n                  [settings]=\"godownRowDropdownSettings\"\r\n                  formControlName=\"GodownRowId\"\r\n                  (onSelect)=\"godownRowChange($event)\"\r\n                  [(ngModel)]=\"selectedGodwomRowInfo\"\r\n                  >\r\n                </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n               \r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/godown-rack/templates/form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/templates/form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CREATE RACK\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_RACK_LISTING]\">Rack</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createGodownRack(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToGodownRackList()\" class=\"btn-wms\">Rack Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Rack Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Alias</label>\r\n                  <input type=\"text\" formControlName=\"Alias\" class=\"form-control input-sm\" placeholder=\"Enter Rack Alias\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Alias.invalid\">\r\n                    {{getErrorMessage('Alias')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Warehouse</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\" [settings]=\"warehouseDropdownSettings\"\r\n                    formControlName=\"WarehouseId\" (onSelect)=\"getGodownKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouseId\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\" [settings]=\"godownDropdownSettings\"\r\n                    formControlName=\"GodownId\" (onSelect)=\"godownChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownId\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Aisle</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownRowKeyPair\" [settings]=\"godownRowDropdownSettings\"\r\n                  formControlName=\"GodownRowId\" (onSelect)=\"godownRowChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n               \r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/godown-rack/templates/list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/godown-rack/templates/list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CHAMBER RACK LISTING\r\n          <small>\r\n            <button class=\"btn-wms\" (click)=\"redirectToCreateGodownRack()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          </small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_RACK_LISTING]\">Chamber Rack</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>Sr.</th>\r\n                      <th>Warehouse</th>\r\n                      <th>Chamber</th>\r\n                      <th>AISLE</th>\r\n                      <th>Name</th>\r\n                      <th>Alias</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of godownRackList; let i = index\">\r\n                      <td>{{i+1}}</td> \r\n                      <td>{{godwom.AML_Godwom.AML_Warehouse.Name}}</td>\r\n                      <td>{{godwom.AML_Godwom.Name}}</td>\r\n                      <td>{{godwom.AML_GodownRow.Name}}</td>\r\n                      <td>{{godwom.Name}}</td>\r\n                      <td>{{godwom.Alias}}</td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(godwom.GodownRackId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(godwom)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-godown-rack-godown-rack-module.js.map