(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-receiving-shipment-note-receiving-module"],{

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

/***/ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-edit.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-edit.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ShipmentNoteReceivingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteReceivingEditComponent", function() { return ShipmentNoteReceivingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-receiving.service */ "./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts");
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








var ShipmentNoteReceivingEditComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteReceivingEditComponent, _super);
    function ShipmentNoteReceivingEditComponent(injector, _shipmentNoteService, fb, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.fb = fb;
        _this.activeRoute = activeRoute;
        // formGroup: FormGroup;
        // myData: any[];
        _this.parkingStageDropdownSettings = {};
        _this.selectedParkingStage = {};
        _this.isSelected = false;
        _this.formGroup = fb.group({
            tempIn: [''],
            tempOut: [''],
            cnicNo: [''],
            mobileNo: [''],
            driverName: [''],
            vehicleNo: ['']
        });
        return _this;
    }
    ShipmentNoteReceivingEditComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getById();
        this.getParkingStagesKeyPair();
        this.CompanyInfo();
    };
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "tempIn", {
        get: function () { return this.formGroup.get('tempIn'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "tempOut", {
        get: function () { return this.formGroup.get('tempOut'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "cnicNo", {
        get: function () { return this.formGroup.get('cnicNo'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "mobileNo", {
        get: function () { return this.formGroup.get('mobileNo'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "driverName", {
        get: function () { return this.formGroup.get('cnicNo'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShipmentNoteReceivingEditComponent.prototype, "vehicleNo", {
        get: function () { return this.formGroup.get('mobileNo'); },
        enumerable: true,
        configurable: true
    });
    ;
    ShipmentNoteReceivingEditComponent.prototype.CompanyInfo = function () {
        debugger;
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "Opposite Gate# 2, Sunder Industrial Estate, Lahore ";
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
    ShipmentNoteReceivingEditComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
        ];
        this.addFormControlWithValidations("ParkingStageId", requiredValidation);
        this.addFormControlWithValidations("ReceiveDate", requiredValidation);
        this.addFormControlWithValidations("OffLoadStartDate", []);
        this.addFormControlWithValidations("OffLoadEndDate", []);
    };
    ShipmentNoteReceivingEditComponent.prototype.dropdownSettings = function () {
        this.parkingStageDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    ShipmentNoteReceivingEditComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params["Id"];
        if (Id) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteService.getData(apiAddress)
                .subscribe(function (res) {
                _this.shipmentNote = res;
                debugger;
                if (_this.shipmentNote.ParkingStageId == null) {
                    _this.isSelected = true;
                }
                console.log(_this.shipmentNote);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
    };
    ShipmentNoteReceivingEditComponent.prototype.addReceivedQuantity = function (event, item) {
        var recQty = event.target.value;
        if (recQty > item.Quantity) {
            this.showToastrWarning("Received Quantity Must Be Equal or Less Tha Quantity");
        }
        else {
            item.ReceivedQuantity = event.target.value;
            console.log(this.shipmentNote);
        }
    };
    ShipmentNoteReceivingEditComponent.prototype.updateASN = function () {
        var _this = this;
        if (!this.selectedParkingStage || !this.selectedParkingStage["Id"]) {
            this.showToastrWarning("Please Select Parking Stage First...!");
            return false;
        }
        else {
            debugger;
            this.shipmentNote['CNICNo'] = this.formGroup.value.cnicNo;
            this.shipmentNote['MobileNo'] = this.formGroup.value.mobileNo;
            this.shipmentNote['TempIn'] = this.formGroup.value.tempIn;
            this.shipmentNote['TempOut'] = this.formGroup.value.tempOut;
            this.shipmentNote['DriverName'] = this.formGroup.value.driverName;
            this.shipmentNote['VehicleNo'] = this.formGroup.value.vehicleNo;
            this.shipmentNote['ReceiveDate'] = this.formGroup.value.ReceiveDate;
            this.shipmentNote['OffLoadStartDate'] = this.formGroup.value.OffLoadStartDate;
            this.shipmentNote['OffLoadEndDate'] = this.formGroup.value.OffLoadEndDate;
            var ASN = this.shipmentNote;
            console.log(ASN);
            var apiUrl = this.apiConstant.SHIPMENT_NOTE_UPDATE + ("/" + this.shipmentNote.ShipmentNoteId);
            this._shipmentNoteService.update(apiUrl, ASN)
                .subscribe(function (res) {
                // this.postASN();
                _this.OpenModal();
                _this.showToastrSuccess("ASN Updated Successfully");
                // setTimeout(() => {
                //   this.redirectToListShipmentNote();
                // }, 2000);
            }, (function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            }));
        }
    };
    ShipmentNoteReceivingEditComponent.prototype.getParkingStagesKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PARKINGSTAGES_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.parkingStageKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingEditComponent.prototype.parkingStageChange = function (item) {
        this.selectedParkingStage = {
            Id: item.Value,
            Name: item.Text
        };
        this.shipmentNote.ParkingStageId = item.Value;
    };
    ShipmentNoteReceivingEditComponent.prototype.ReceivingDateChange = function (item) {
        debugger;
        this.shipmentNote.ReceivingDate = item.target.value;
    };
    ShipmentNoteReceivingEditComponent.prototype.OffLoadStartDateChange = function (item) {
        debugger;
        this.shipmentNote.OffLoadingStartTime = item.target.value;
    };
    ShipmentNoteReceivingEditComponent.prototype.OffLoadEndDateChange = function (item) {
        debugger;
        this.shipmentNote.OffLoadingEndTime = item.target.value;
    };
    ShipmentNoteReceivingEditComponent.prototype.onDeSelect = function (item) {
        item = {};
        this.shipmentNote.ParkingStageId = null;
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteReceivingEditComponent.prototype.redirectToListShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
    };
    ShipmentNoteReceivingEditComponent.prototype.getErrorMessage = function (formElement) {
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
    ShipmentNoteReceivingEditComponent.prototype.redirectToShipmentNoteReceiving = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
    };
    ShipmentNoteReceivingEditComponent.prototype.OpenModal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#shipNoteReceivingModal').show();
        //this.loadComponent = true;
    };
    ShipmentNoteReceivingEditComponent.prototype.closeModal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#shipNoteReceivingModal').hide();
        this.redirectToShipmentNoteReceiving();
    };
    ShipmentNoteReceivingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-receiving-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/shipment-note-receiving/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-receiving-form.component.scss */ "./src/app/layout/content/shipment-note-receiving/styles/shipment-note-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ShipmentNoteReceivingEditComponent);
    return ShipmentNoteReceivingEditComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-form.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-form.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ShipmentNoteReceivingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteReceivingFormComponent", function() { return ShipmentNoteReceivingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shipment-note-receiving.service */ "./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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






var ShipmentNoteReceivingFormComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteReceivingFormComponent, _super);
    function ShipmentNoteReceivingFormComponent(injector, _shipmentNoteServiceService, activeRoute, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteServiceService = _shipmentNoteServiceService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = { Id: null, Name: null };
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
    ShipmentNoteReceivingFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
    };
    /**
    * The following method is used to add the form validations
    */
    ShipmentNoteReceivingFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
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
        this.addFormControlWithValidations("Quantity", []);
        this.addFormControlWithValidations("BoxQuantity", []);
        this.addFormControlWithValidations("MFGDate", []);
        this.addFormControlWithValidations("EXPDate", []);
        this.addFormControlWithValidations("Batch", []);
        this.addFormControlWithValidations("Status", []);
    };
    ShipmentNoteReceivingFormComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    ShipmentNoteReceivingFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this._shipmentNoteServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.itemInformationByCustomer = res;
            var itemTemDropdown = [];
            _this.itemInformationByCustomer.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.itemInformation.ItemInformationId,
                    Text: element.ItemBrand.Name + " | " + element.itemInformation.Name
                });
            });
            _this.itemKeyPair = itemTemDropdown;
            console.log(res);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.onSelect = function (item, dropDownName) {
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
        }
        if (dropDownName === 'selectedItem') {
            var itemName = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Name;
            this.formGroup.get("ItemName").setValue(itemName);
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    ShipmentNoteReceivingFormComponent.prototype.addItemLocation = function () {
        if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
            this.showToastrWarning("Select Customer first");
            return false;
        }
        // if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
        //   this.showToastrWarning("Select Warehouse first");
        //   return false;
        // }
        if (!this.selectedItem || !this.selectedItem["Id"]) {
            this.showToastrWarning("Select Item first");
            return false;
        }
        this.getShelfForShipment();
    };
    ShipmentNoteReceivingFormComponent.prototype.getShelfForShipment = function () {
        var _this = this;
        var obj = {
            WarehouseId: this.selectedWarehouse["Id"],
            ItemInformationId: this.selectedItem["Id"],
            ItemCBN: this.getItemCBN(this.selectedItem["Id"]),
            CustomerId: this.selectedCustomer["Id"]
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_SearchShelfsForShipment;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, obj)
            .subscribe(function (res) {
            console.log(res);
            _this.shelfListForShipment = res;
            _this.shelfListForShipment.forEach(function (element) {
                element.Location = element.godown.Abbreviation + element.godownRow.Alias + element.godownRack.Alias + element.godownShelf.Alias,
                    element.Quantity = _this.getQuantityIfAlreadyAddedInLocation(_this.selectedItem["Id"], element.Location),
                    element.vacantQuantity = (Number((element.shelfVacantCapicity - _this.getCalculatedCBN(element.Location))) / Number(_this.getItemCBN(_this.selectedItem["Id"]))),
                    element.NoOfPallets = 0;
                element.NoOfBoxes = 0;
            });
            _this.shelfListForShipment = _this.shelfListForShipment
                .filter(function (x) { return x.vacantQuantity >= 1; });
            _this.openItemLocationModal();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.getQuantityIfAlreadyAddedInLocation = function (itemId, location) {
        var qty = 0;
        var model = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (!model && model.length <= 0) {
            return 0;
        }
        else {
            model.forEach(function (element) {
                qty = (qty + Number(element.Quantity));
            });
            return qty;
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    ShipmentNoteReceivingFormComponent.prototype.getItemCBN = function (itemId) {
        var model = this.itemInformationByCustomer
            .filter(function (x) { return x.itemInformation.ItemInformationId == itemId; })[0];
        return (model.itemInformation.Width * model.itemInformation.Height * model.itemInformation.Length);
    };
    ShipmentNoteReceivingFormComponent.prototype.getCalculatedCBN = function (location) {
        var _this = this;
        var usedCBMToSave = 0;
        var model = this.shipmentListToPost.filter(function (x) { return x.Location === location && x.ItemInformationId != _this.selectedItem["Id"]; });
        if (model && model.length > 0) {
            model.forEach(function (element) {
                var usedItemForCBN = _this.getItemCBN(element.ItemInformationId);
                usedCBMToSave = usedCBMToSave + (usedItemForCBN * element.Quantity);
            });
        }
        return usedCBMToSave;
    };
    ShipmentNoteReceivingFormComponent.prototype.openItemLocationModal = function () {
        this.modalRef = this.modalService.open(this.modalItemLocation, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: false,
            backdropClass: "modal-backdrop"
        });
    };
    ShipmentNoteReceivingFormComponent.prototype.cancelItemLocationModal = function () {
        this.modalRef.close();
    };
    ShipmentNoteReceivingFormComponent.prototype.palletSelect = function (event, location, selectedPalletId) {
        if (event) {
            this.selectedPallet = {
                Id: event.Value,
                Name: event.Text
            };
        }
        var selectedPltId = event ? event.Value : selectedPalletId;
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        if (model) {
            if (model.Quantity == '' || model.Quantity <= 0) {
                this.showToastrWarning('Select Quantity plase.');
            }
            else {
                var noOfBoxes = this.getNoOfBoxesPerPallet(this.selectedItem["Id"], location, selectedPltId);
                model.NoOfBoxes = noOfBoxes;
                var noOfPallets = model.Quantity / noOfBoxes;
                noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0])) + 1);
                model.NoOfPallets = noOfPallets;
            }
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.palletDeSelect = function (location) {
        this.selectedPallet = {};
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        model.NoOfBoxes = 0;
    };
    ShipmentNoteReceivingFormComponent.prototype.getNoOfBoxesPerPallet = function (itemId, location, palletId) {
        var itemCBM = this.getItemCBN(itemId);
        var shelfObjFromList = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        var shelfObj = shelfObjFromList['godownShelf'];
        var palletObj = this.palletList.filter(function (x) { return x.PalletId == palletId; })[0];
        if (!itemCBM || !shelfObj || !palletObj) {
            return null;
        }
        else {
            var palletCBM = shelfObj.Height * palletObj.Width * palletObj.Length;
            return palletCBM / itemCBM;
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ShipmentNoteReceivingFormComponent.prototype.dropdownSettings = function () {
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
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    ShipmentNoteReceivingFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ShipmentNoteReceivingFormComponent.prototype.redirectToShipmentNoteRECList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]);
    };
    ShipmentNoteReceivingFormComponent.prototype.QuantityChange = function (event, shelfVacantCapicity, location) {
        var ItemCbm = this.getItemCBN(this.selectedItem["Id"]);
        if (!Number(event.target.value) || event.target.value <= 0) {
            event.target.value = '';
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
        }
        else if (Number(event.target.value) > shelfVacantCapicity) {
            this.showToastrWarning('Maximum Quantity can be ' + shelfVacantCapicity);
            event.target.value = '';
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
        }
        else {
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
            if (this.selectedPallet && this.selectedPallet["Id"]) {
                this.palletSelect(null, location, this.selectedPallet["Id"]);
            }
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.addShipmentItemManualy = function () {
        this.shipmentListToPost.push({
            Name: this.selectedItem['Name'],
            ItemInformationId: this.selectedItem["Id"],
            // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
            // PalletNo: this.getPalletNoToSet(this.selectedItem["Id"]),
            Batch: this.formGroup.get('Batch').value,
            Status: this.formGroup.get('Status').value,
            Quantity: this.formGroup.get('Quantity').value,
            NoOfBoxes: this.formGroup.get('BoxQuantity').value,
            //Location: element.Location,
            //GodownId: element.godown.GodwomId,
            //GodownShelfId: element.godownShelf.GodownShelfId,
            ExpiryDate: this.formGroup.get('EXPDate').value,
            MfgDate: this.formGroup.get('MFGDate').value,
            Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
        });
        this.selectedItem = {};
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("Batch").setValue('');
        this.formGroup.get("Status").setValue('');
        this.formGroup.get("EXPDate").setValue('');
        this.formGroup.get("MFGDate").setValue('');
        this.formGroup.get("Quantity").setValue('');
        this.formGroup.get("BoxQuantity").setValue('');
        console.log(this.shipmentListToPost);
    };
    ShipmentNoteReceivingFormComponent.prototype.CheckDate = function () {
        var mfgDate = this.formGroup.get('MFGDate').value;
        var expDate = this.formGroup.get('EXPDate').value;
        if (mfgDate > expDate) {
            this.showToastrWarning("Please Select Date After The Mfg Date");
            this.formGroup.get("EXPDate").setValue('');
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.addShipmentItem = function () {
        var _this = this;
        var hasValidQty = false;
        var hasValidQtyPltSelection = true; // checks for both selection on each row.
        this.shelfListForShipment.forEach(function (element) {
            if (((element.Quantity != 0 && element.Quantity != '') && (element.NoOfBoxes == '' || element.NoOfBoxes == 0))
                || ((element.Quantity == 0 && element.Quantity == '') && (element.NoOfBoxes != '' || element.NoOfBoxes != 0))) {
                hasValidQtyPltSelection = false;
                return false;
            }
        });
        if (!hasValidQtyPltSelection) {
            this.showToastrWarning("Invalid selection of Quantity and Pallet");
            return;
        }
        this.shelfListForShipment.forEach(function (element) {
            if ((element.Quantity != 0 && element.Quantity != '')) {
                hasValidQty = true;
                return false;
            }
        });
        if (!hasValidQty) {
            this.showToastrWarning("Add at lease one item quantity.");
        }
        else {
            this.shelfListForShipment.filter(function (x) { return x.Quantity != 0 && x.Quantity != ''; }).forEach(function (element) {
                _this.deleteFromShipmentList(element.Location, _this.selectedItem["Id"]);
                var addedNoOfPallets = Number(element.NoOfPallets);
                var qty = Number(element.Quantity);
                var noOfBox = Number(element.NoOfBoxes);
                if (addedNoOfPallets > 1) {
                    for (var i = 0; i < addedNoOfPallets; i++) {
                        var x = (qty - noOfBox);
                        var qtyPerBox = (qty >= noOfBox) ? noOfBox : qty;
                        _this.shipmentListToPost.push({
                            Name: _this.selectedItem['Name'],
                            ItemInformationId: _this.selectedItem["Id"],
                            // PalletNo: i + 1,
                            PalletNo: _this.getPalletNoToSet(_this.selectedItem["Id"]),
                            Batch: '',
                            Status: '',
                            Quantity: qtyPerBox,
                            NoOfBoxes: noOfBox,
                            Location: element.Location,
                            GodownId: element.godown.GodwomId,
                            GodownShelfId: element.godownShelf.GodownShelfId,
                            ExpiryDate: '',
                            MfgDate: '',
                            Price: _this.getItemInformationObject(_this.selectedItem["Id"]).Price,
                        });
                        qty = (qty - noOfBox);
                    }
                }
                else {
                    _this.shipmentListToPost.push({
                        Name: _this.selectedItem['Name'],
                        ItemInformationId: _this.selectedItem["Id"],
                        // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
                        PalletNo: _this.getPalletNoToSet(_this.selectedItem["Id"]),
                        Batch: '',
                        Status: '',
                        Quantity: element.Quantity,
                        NoOfBoxes: noOfBox,
                        Location: element.Location,
                        GodownId: element.godown.GodwomId,
                        GodownShelfId: element.godownShelf.GodownShelfId,
                        ExpiryDate: '',
                        MfgDate: '',
                        Price: _this.getItemInformationObject(_this.selectedItem["Id"]).Price,
                    });
                }
            });
            this.selectedPallet = {};
            this.selectedItem = {};
            this.formGroup.get("ItemId").setValue('');
            this.shelfListForShipment = [];
            this.modalRef.close();
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.getPalletNoToSet = function (itemId) {
        var countByItem = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId; }).length;
        if (countByItem == 0)
            return 1;
        else
            return (countByItem + 1);
    };
    ShipmentNoteReceivingFormComponent.prototype.deleteFromShipmentList = function (location, itemInfoId) {
        var _this = this;
        var dat = this.shipmentListToPost
            .filter(function (y) { return y.ItemInformationId === itemInfoId && y.Location === location; });
        if (dat && dat.length > 0) {
            dat.forEach(function (element) {
                _this.shipmentListToPost.splice(_this.shipmentListToPost.indexOf(element), 1);
            });
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.deleteFromShipmentListManual = function (item) {
        this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1);
    };
    ShipmentNoteReceivingFormComponent.prototype.addShipmentTextField = function (event, fieldName, ItemInformationId) {
        var model = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === ItemInformationId; })[0];
        if (model) {
            model[fieldName] = event.target.value;
        }
        if (fieldName === 'Status' || fieldName === 'Batch') {
            this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === ItemInformationId; }).forEach(function (element) {
                element[fieldName] = event.target.value;
            });
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.createShipmentNote = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
            //   this.showToastrWarning("Select Warehouse please.");
            //   return false;
            // }
            this.executeShipmentNoteCreation(formValue);
        }
    };
    ShipmentNoteReceivingFormComponent.prototype.executeShipmentNoteCreation = function (formValue) {
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
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_CREATE;
        this._shipmentNoteServiceService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Shipment Note created successfully");
            setTimeout(function () {
                _this.redirectToShipmentNoteRECList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], ShipmentNoteReceivingFormComponent.prototype, "modalItemLocation", void 0);
    ShipmentNoteReceivingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-receiving-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/shipment-note-receiving/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-receiving-form.component.scss */ "./src/app/layout/content/shipment-note-receiving/styles/shipment-note-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_2__["ShipmentNoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_5__["ModalManager"]])
    ], ShipmentNoteReceivingFormComponent);
    return ShipmentNoteReceivingFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ShipmentNoteReceivingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteReceivingListComponent", function() { return ShipmentNoteReceivingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-receiving.service */ "./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);
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












var ShipmentNoteReceivingListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteReceivingListComponent, _super);
    function ShipmentNoteReceivingListComponent(injector, _shipmentNoteService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.hideShowList = [];
        return _this;
    }
    ShipmentNoteReceivingListComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        // this.getAllShipmentNotes();
        for (var i = 0; i < 10; i++) {
            this.hideShowList.push({ status: true });
        }
        this.hideShowList[0].status = false;
        this.hideShowList[1].status = false;
        this.hideShowList[2].status = false;
        this.hideShowList[3].status = false;
        this.hideShowList[4].status = false;
        this.hideShowList[5].status = false;
        this.hideShowList[6].status = false;
        this.hideShowList[7].status = false;
        this.hideShowList[8].status = false;
        this.hideShowList[9].status = false;
    };
    //Excel Conversion
    ShipmentNoteReceivingListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    ShipmentNoteReceivingListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    ShipmentNoteReceivingListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(blob, filename);
    };
    ShipmentNoteReceivingListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    ShipmentNoteReceivingListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    ShipmentNoteReceivingListComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteReceivingListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: item.Value,
            FormType: "ASNRECEIVE"
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            console.log(_this.shipmentNoteList);
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            // this.dataTable = table.DataTable({
            //   lengthMenu: [5, 10, 20, 50, 100],
            //   "iDisplayLength": 100,
            //   retrieve: true
            // });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteReceivingListComponent.prototype.getAllShipmentNotes = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST;
        this.ngxService.start();
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            //console.log(this.shipmentNoteList)
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
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
    ShipmentNoteReceivingListComponent.prototype.redirectToCreateShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_RECEIVING_CREATE]);
    };
    ShipmentNoteReceivingListComponent.prototype.Details = function (id) {
        debugger;
        var updateUrl = this.routesList.SHIPMENT_NOTE_RECEIVING_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteReceivingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-receiving-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note-receiving/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-receiving-form.component.scss */ "./src/app/layout/content/shipment-note-receiving/styles/shipment-note-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], ShipmentNoteReceivingListComponent);
    return ShipmentNoteReceivingListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: ShipmentNoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteService", function() { return ShipmentNoteService; });
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


var ShipmentNoteService = /** @class */ (function (_super) {
    __extends(ShipmentNoteService, _super);
    function ShipmentNoteService(injector) {
        return _super.call(this, injector) || this;
    }
    ShipmentNoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ShipmentNoteService);
    return ShipmentNoteService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/shipment-note-receiving.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/shipment-note-receiving.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ShipmentNoteReceivingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteReceivingModule", function() { return ShipmentNoteReceivingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shipment-note-receiving.service */ "./src/app/layout/content/shipment-note-receiving/services/shipment-note-receiving.service.ts");
/* harmony import */ var _components_shipment_note_receiving_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shipment-note-receiving-form.component */ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-form.component.ts");
/* harmony import */ var _components_shipment_note_receiving_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shipment-note-receiving-list.component */ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var _components_shipment_note_receiving_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shipment-note-receiving-edit.component */ "./src/app/layout/content/shipment-note-receiving/components/shipment-note-receiving-edit.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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
                component: _components_shipment_note_receiving_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteReceivingListComponent"],
            },
            {
                path: "create",
                component: _components_shipment_note_receiving_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteReceivingFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_shipment_note_receiving_edit_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentNoteReceivingEditComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteReceivingModule = /** @class */ (function () {
    function ShipmentNoteReceivingModule() {
    }
    ShipmentNoteReceivingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_shipment_note_receiving_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteReceivingFormComponent"], _components_shipment_note_receiving_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteReceivingListComponent"], _components_shipment_note_receiving_edit_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentNoteReceivingEditComponent"]
            ],
            providers: [
                _services_shipment_note_receiving_service__WEBPACK_IMPORTED_MODULE_4__["ShipmentNoteService"]
            ],
            entryComponents: []
        })
    ], ShipmentNoteReceivingModule);
    return ShipmentNoteReceivingModule;
}());



/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/styles/shipment-note-receiving-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/styles/shipment-note-receiving-form.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n.shipment-item-add {\n  margin-top: 17px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n\n.fc-input {\n  width: 350px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n\n.modal {\n  position: fixed; }\n\n.modal-dialog {\n  overflow-y: initial !important;\n  margin-left: 350px;\n  margin-top: 30px; }\n\n.modal-body {\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/templates/edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/templates/edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n</style>\r\n<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT RECEIVING\r\n    <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]\">Shipment Receiving</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToListShipmentNote()\" class=\"btn-wms\">ASN Receiving Listing</button>\r\n          </div>\r\n          <h3>SHIPMENT RECEIVING</h3>\r\n        </div>\r\n\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateASN()\">\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"box-body box-profile\">\r\n                  <ul class=\"list-group list-group-unbordered\">\r\n                    <li class=\"list-group-item\">\r\n                      <b>ASN ID</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                    </li>\r\n                    \r\n                    <li class=\"list-group-item\">\r\n                      <b>PO / Material No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"box-body box-profile\">\r\n                  <ul class=\"list-group list-group-unbordered\">\r\n                    <li class=\"list-group-item\">\r\n                      <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                    </li>\r\n\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"driverName\">Driver Name</label>\r\n                  <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\r\n                    placeholder=\"Enter Driver Name\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"vehicleNo\">Vehicle No</label>\r\n                  <input type=\"text\" id=\"vehicleNo\" formControlName=\"vehicleNo\" class=\"form-control\"\r\n                    placeholder=\"Enter Vehicle No\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"cnicNo\">CNIC No.</label>\r\n                  <input type=\"text\" id=\"cnicNo\" formControlName=\"cnicNo\" class=\"form-control\"\r\n                    placeholder=\"Enter CNIC No.\">\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"mobileNo\">Mobile No</label>\r\n                  <input type=\"text\" id=\"mobileNo\" formControlName=\"mobileNo\" class=\"form-control\"\r\n                    placeholder=\"Enter Mobile No\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"tempIn\">Temperature In</label>\r\n                  <input type=\"text\" id=\"tempIn\" formControlName=\"tempIn\" class=\"form-control\"\r\n                    placeholder=\"Enter Temperature In\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"tempOut\">Temperature Out</label>\r\n                  <input type=\"text\" id=\"tempOut\" formControlName=\"tempOut\" class=\"form-control\"\r\n                    placeholder=\"Enter Temperature Out\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Vehicle Receiving Date-Time</label>\r\n                  <input type=\"datetime-local\" formControlName=\"ReceiveDate\" #ReceiveDate class=\"form-control\"\r\n                    (change)=\"ReceivingDateChange($event)\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiveDate.invalid\">\r\n                    {{getErrorMessage('ReceiveDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Off Load Start Date-Time</label>\r\n                  <input type=\"datetime-local\" formControlname=\"OffLoadStartDate\" #OffLoadStartDate class=\"form-control\" \r\n                  (change)=\"OffLoadStartDateChange($event)\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.OffLoadStartDate.invalid\">\r\n                    {{getErrorMessage('OffLoadStartDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Off Load End Date-Time</label>\r\n                  <input type=\"datetime-local\" formControlname=\"OffLoadEndDate\" #OffLoadEndDate \r\n                  class=\"form-control\" (change)=\"OffLoadEndDateChange($event)\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.OffLoadEndDate.invalid\">\r\n                    {{getErrorMessage('OffLoadEndDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"col col-lg-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Select Parking Stage</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"parkingStageKeyPair\"\r\n                    [settings]=\"parkingStageDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedParkingStage')\"\r\n                    formControlName=\"ParkingStageId\" (onSelect)=\"parkingStageChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th style=\"width:250px;\">SKU Name</th>\r\n                        <th>SKU CBM</th>\r\n                        <th style=\"width:100px;\">MFG Date</th>\r\n                        <th style=\"width:100px;\">Expiry Date</th>\r\n                        <th style=\"width:100px;\">Batch / Serial</th>\r\n                        <th style=\"width:40px;\">SN #</th>\r\n                        <th style=\"width:40px;\">PR #</th>\r\n                        <th tyle=\"width:100px;\">Status</th>\r\n                        <th>Quantity</th>\r\n                        <th>Received Quantity</th>\r\n                        <th>GatePass</th>\r\n                        <th>RecievedFrom</th>\r\n                        <th>Business Type</th>\r\n                        <th>Handler Name</th>\r\n                        <th>Inbound Pool</th>\r\n                        <th>Received Station</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of shipmentNote.AML_ShipmentNoteChild\">\r\n                        <td>{{item.Description}}{{item.ItemName}}</td>\r\n                        <td>{{item.ItemCBM | number:'1.2-2'}}</td>\r\n                        <td>{{item.MfgDate | date}}</td>\r\n                        <td>{{item.ExpiryDate | date}}</td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td>{{item.Status}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <td><input style=\"width:100px;\" type=\"number\" value={{item.ReceivedQuantity}}\r\n                          (blur)=\"addReceivedQuantity($event,item)\" class=\"form-control\"></td>\r\n                        <!-- <td>{{item.NoOfBoxes}}</td>\r\n                        <td>{{item.ServiceRequest}}</td> -->\r\n                        <td>{{item.GatePass}}</td>\r\n                        <!-- <td>{{item.RMA}}</td> -->\r\n                        <td>{{item.RecievedFrom}}</td>\r\n                        <!-- <td>{{item.ConsignmentNo}}</td> -->\r\n                        <!-- <td>{{item.ICare}}</td> -->\r\n                        <td>{{item.BusinessType}}</td>\r\n                        <td>{{item.HandlerName}}</td>\r\n                        <td>{{item.InboundPool}}</td>\r\n                        <!-- <td>{{item.Network}}</td>\r\n                        <td>{{item.PackingListNo}}</td> -->\r\n                        <td>{{item.ReceivedStation}}</td>\r\n                        <!-- <td>{{item.ContractNo}}</td>\r\n                        <td>{{item.DeliveryType}}</td>\r\n                        <td>{{item.InboundAgainst}}</td> -->\r\n                        \r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-wms pull-right\">S U B M I T</button>\r\n          </div>\r\n      </form>\r\n    </div>\r\n    <!-- /.box -->\r\n  </div>\r\n  <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n\r\n<div class=\"modal\" id=\"shipNoteReceivingModal\">\r\n  <div class=\"modal-dialog \">\r\n    <div class=\"modal-content\" style=\"width: 900px;\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n        <!-- Modal Header -->\r\n        <!-- /.row -->\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\" id=\"print\">\r\n          <div class=\"row col-lg-12\" >\r\n            <div class=\"row\">\r\n              <div class=\"col col-lg-3\" style=\"text-align: center;\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              </div>\r\n              <div class=\"col col-lg-8 pull-left\" style=\"margin-top: 20px;\">\r\n                <address>\r\n                  <strong>{{CompanyName}}</strong> <br>\r\n                  {{CompanyAddress}}\r\n                </address>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-lg-12\" style=\"text-align: center; padding-top: 30px;\">\r\n              <h2><u>SHIPMENT RECEIVING NOTE</u></h2>\r\n            </div>\r\n        </div>\r\n          <div class=\"row col col-lg-12\" style=\"min-height: 150px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\" style=\"text-align: left;\">\r\n                <div class=\"col-md-12\">\r\n                  <b>ASN ID</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>ASN No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Vehicle Rec. Date-TM</b><a class=\"pull-right\">{{shipmentNote.ReceivingDate | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\" style=\"text-align: left;\">\r\n                <div class=\"col-md-12\">\r\n                  <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Temperature In</b><a class=\"pull-right\">{{shipmentNote.TempIn}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Temperature Out</b><a class=\"pull-right\">{{shipmentNote.TempOut}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Off-Load Start Date-TM</b><a class=\"pull-right\">{{shipmentNote.OffLoadingStartTime | date:'short'}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                      <b>Off-Load END Date-TM</b><a class=\"pull-right\">{{shipmentNote.OffLoadingEndTime | date:'short'}}</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\" style=\"text-align: left;\">\r\n                <div class=\"col-md-12\">\r\n                  <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Driver Name.</b><a class=\"pull-right\">{{shipmentNote.DriverName}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Vehicle No.</b><a class=\"pull-right\">{{shipmentNote.VehicleNo}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>Mobile No.</b><a class=\"pull-right\">{{shipmentNote.MobileNo}}</a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <b>CNIC No.</b><a class=\"pull-right\">{{shipmentNote.CNICNo}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-body\">\r\n            <div class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>SKU Name</th>\r\n                        <th>SKU CBM</th>\r\n                        <th>Batch / Serial</th>\r\n                        <th>SN #</th>\r\n                        <!-- <th>PR #</th> -->\r\n                        <th>Status</th>\r\n                        <th>Mfg Date</th>\r\n                        <th>Expiry Date</th>\r\n                        <th>Quantity</th>\r\n                        <th>No of Boxes</th>\r\n                        <th>Received Quantity</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of shipmentNote.AML_ShipmentNoteChild\">\r\n                        <td>{{item.Description}}{{item.ItemName}}</td>\r\n                        <td>{{item.ItemCBM | number:'1.2-2'}}</td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <!-- <td>{{item.PRno}}</td> -->\r\n                        <td>{{item.Status}}</td>\r\n                        <td>{{item.MfgDate | date}}</td>\r\n                        <td>{{item.ExpiryDate | date}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <td>{{item.NoOfBoxes}}</td>\r\n                        <td>{{item.ReceivedQuantity}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- //calculator Modal  End-->\r\n        <!-- Modal footer -->\r\n        \r\n        <div class=\"modal-footer\">\r\n          <div class=\"col-md-10\">\r\n            <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '10px','font-size': '10px'}}\"\r\n              class=\"btn-excel hidden-print print-btn\" printTitle=\"Shipment Receiving Note\" [useExistingCss]=\"true\" ngxPrint\r\n              printSectionId=\"print\">\r\n              <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n              </span></button>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button type=\"submit\" (click)=\"closeModal()\" class=\"btn btn-success\">Close</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/templates/form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/templates/form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT NOTE MANUAL CREATE\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_RECEIVING_LISTING]\">Shipment Note Receiving</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createShipmentNote(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToShipmentNoteRECList()\" class=\"btn-wms\">ASN Receving Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-md-4\">\r\n               \r\n             \r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <label>Shipment Note Reference</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Shipment Note No\" formControlName=\"ShipmentNoteNo\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Cargo Status</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Cargo Status\" formControlName=\"CargoStatus\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CargoStatus.invalid\">\r\n                  {{getErrorMessage('CargoStatus')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>ASN No</label>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"Enter ASN No\" formControlName=\"ASNNo\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNNo.invalid\">\r\n                  {{getErrorMessage('ASNNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>ASN Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Delivery No</label>\r\n                <input type=\"text\" formControlName=\"DeliveryNo\" class=\"form-control\" placeholder=\"Enter Delivery No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DeliveryNo.invalid\">\r\n                  {{getErrorMessage('DeliveryNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label>Remarks</label>\r\n                  <textarea class=\"form-control\" placeholder=\"Enter Remarks\" formControlName=\"Remarks\"></textarea>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                    {{getErrorMessage('Remarks')}}\r\n                  </span>\r\n                </div>\r\n          </div>\r\n        \r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Name</label>\r\n                <input type=\"text\" formControlName=\"DriverName\" class=\"form-control\" placeholder=\"Enter Driver Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DriverName.invalid\">\r\n                  {{getErrorMessage('DriverName')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle No</label>\r\n                <input type=\"text\" formControlName=\"VehicleNo\" class=\"form-control\" placeholder=\"Enter Vehicle No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleNo.invalid\">\r\n                  {{getErrorMessage('VehicleNo')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n           \r\n           \r\n          </div>\r\n          \r\n        </div>\r\n       \r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label>SKU</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                    [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                     (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                    (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n          </div>\r\n           \r\n          </div>\r\n            <div class=\"col-md-12\">\r\n               \r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>Quantity</label>\r\n                    <input class=\"form-control\" placeholder=\"Qty\" formControlName=\"Quantity\" type=\"number\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Quantity.invalid\">\r\n                      {{getErrorMessage('Quantity')}}\r\n                    </span>\r\n                  </div>\r\n                   \r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>No. Of Box</label>\r\n                    <input class=\"form-control\" placeholder=\"Enter No. Of Box\" formControlName=\"BoxQuantity\" type=\"number\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.BoxQuantity.invalid\">\r\n                      {{getErrorMessage('BoxQuantity')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch</label>\r\n                <input type=\"text\" formControlName=\"Batch\" class=\"form-control\" placeholder=\"Enter Batch\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Batch.invalid\">\r\n                  {{getErrorMessage('Batch')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Status</label>\r\n                <input type=\"text\" formControlName=\"Status\" class=\"form-control\" placeholder=\"Enter Status\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Status.invalid\">\r\n                  {{getErrorMessage('Status')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Mfg Date</label>\r\n                <input type=\"date\" formControlName=\"MFGDate\" class=\"form-control\" placeholder=\"Enter MFG Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.MFGDate.invalid\">\r\n                  {{getErrorMessage('MFGDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Date</label>\r\n                <input type=\"date\" formControlName=\"EXPDate\" class=\"form-control\" placeholder=\"Enter Expiry Date\" (blur)=\"CheckDate()\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.EXPDate.invalid\">\r\n                  {{getErrorMessage('EXPDate')}}\r\n                </span>\r\n              </div>\r\n              <div>\r\n                \r\n              </div>\r\n            </div>                           \r\n            </div>\r\n\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group shipment-item-add pull-right\">\r\n                  <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addShipmentItemManualy()\">\r\n                    Add\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                          <thead>\r\n                            <tr role=\"row\">\r\n                              <th>SKU ID</th>\r\n                              <th>SKU Name</th>\r\n                              <th>Batch</th>\r\n                              <th>Status</th>\r\n                              <th>Quantity</th>\r\n                              <th>No Of Boxes</th>\r\n                              <th>Mfg Date</th>\r\n                              <th>Expiry Date</th>\r\n                              <th>Actions</th> \r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                              <td>{{shipment.ItemInformationId}}</td>\r\n                              <td>{{shipment.Name}}</td>\r\n                              <!-- <td>{{shipment.PalletNo}}</td> -->\r\n                              <td>{{shipment.Batch}}</td>\r\n                              <td>{{shipment.Status}}</td>\r\n                              <td>{{shipment.Quantity}}</td>\r\n                              <td>{{shipment.NoOfBoxes}}</td>\r\n                              <!-- <td>{{shipment.Location}}</td> -->\r\n                              <td>{{shipment.MfgDate | date}}</td>\r\n                              <td>{{shipment.ExpiryDate | date}}</td>\r\n                              <!-- <td>{{shipment.Price}}</td>-->\r\n                              <td>\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                    (click)=\"deleteFromShipmentListManual(shipment)\"><i class=\"fa fa-trash\"></i></button>\r\n                                </td> \r\n                            </tr>\r\n                          </tbody>  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n             \r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Add Shipment</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-receiving/templates/list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-receiving/templates/list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    ASN RECEIVING LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n   \r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" \r\n                  formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n        \r\n           \r\n          </div>\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                    background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.shipmentNoteList, 'asn-recieving-list.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('asn-recieving-list.xlsx', 'tbl', 'Shipment Note Manual List')\"\r\n                        style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('asn-recieving-list.pdf', '#tbl')\" style=\"color: white;\">Export To\r\n                        PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                        width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                          Sr #\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          Tr. #\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                          Customer Name\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                          ASN No\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Warehouse\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"0\" style=\"color: white;\">\r\n                          ASN Ref No\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\" data-column=\"1\" style=\"color: white;\">\r\n                          ASN Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\" data-column=\"1\" style=\"color: white;\">\r\n                          Delivery No\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"1\" style=\"color: white;\">\r\n                          Receiving Status\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('9')\" data-column=\"1\" style=\"color: white;\">\r\n                          Action\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable\"  role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                  <tr role=\"row\">\r\n                      <th *ngIf=\"!hideShowList[0].status\">Sr #</th>\r\n                      <th *ngIf=\"!hideShowList[1].status\">Tr. #</th>\r\n                      <th *ngIf=\"!hideShowList[2].status\">Customer Name</th>\r\n                      <th *ngIf=\"!hideShowList[3].status\">ASN No</th>\r\n                      <th *ngIf=\"!hideShowList[4].status\">Warehouse</th>\r\n                      <th *ngIf=\"!hideShowList[5].status\">ASN Ref No</th>\r\n                      <th *ngIf=\"!hideShowList[6].status\">ASN Date</th>\r\n                      <th *ngIf=\"!hideShowList[7].status\">Delivery No</th> \r\n                      <!-- <th>\r\n                        Driver Name\r\n                      </th> -->\r\n                      <th *ngIf=\"!hideShowList[8].status\">Receiving Status</th> \r\n                      <th *ngIf=\"!hideShowList[9].status\">Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList; let i = index\">\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{i+1}}</td> \r\n                      <td *ngIf=\"!hideShowList[1].status\">{{godwom.Id}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\">{{godwom.Name}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\">{{godwom.ASNNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\">{{godwom.WarehouseName}}</td>\r\n                      <td *ngIf=\"!hideShowList[5].status\">{{godwom.ShipmentNoteNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[6].status\">{{godwom.ASNDate | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[7].status\">{{godwom.DeliveryNo}}</td>\r\n                      <!-- <td>{{godwom.DriverName}}</td>-->\r\n                      <td *ngIf=\"!hideShowList[8].status\">\r\n                        <span *ngIf=\"godwom.ParkingStageId != null; else inactive_span\" class=\"label label-success\">Received</span>\r\n                        <ng-template #inactive_span>  <span class=\"bg-red label\">Pending</span></ng-template>\r\n                      </td> \r\n                      <td *ngIf=\"!hideShowList[9].status\">\r\n                        <button type=\"button\" class=\"btn-warining editBtn\" (click)=\"Details(godwom.ShipmentNoteId)\">\r\n                            <i class=\"fa fa-info\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n\r\n    </form>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-receiving-shipment-note-receiving-module.js.map