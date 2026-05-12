(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-move-stock-move-stock-module"],{

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

/***/ "./src/app/layout/content/move-stock/components/move-stock.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/content/move-stock/components/move-stock.ts ***!
  \********************************************************************/
/*! exports provided: MoveStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStockComponent", function() { return MoveStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _services_move_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/move-stock.service */ "./src/app/layout/content/move-stock/services/move-stock.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
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







var MoveStockComponent = /** @class */ (function (_super) {
    __extends(MoveStockComponent, _super);
    function MoveStockComponent(injector, _movestockService, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._movestockService = _movestockService;
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
    MoveStockComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    MoveStockComponent.prototype.addFormValidations = function () {
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
    };
    MoveStockComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this._movestockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    MoveStockComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._movestockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    MoveStockComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this._movestockService.getData(apiAddress)
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
    MoveStockComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._movestockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    MoveStockComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._movestockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    MoveStockComponent.prototype.onSelect = function (item, dropDownName) {
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
    MoveStockComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    MoveStockComponent.prototype.addItemLocation = function () {
        if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
            this.showToastrWarning("Select Customer first");
            return false;
        }
        if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
            this.showToastrWarning("Select Warehouse first");
            return false;
        }
        if (!this.selectedItem || !this.selectedItem["Id"]) {
            this.showToastrWarning("Select Item first");
            return false;
        }
        this.getShelfForShipment();
    };
    MoveStockComponent.prototype.getShelfForShipment = function () {
        var _this = this;
        var obj = {
            WarehouseId: this.selectedWarehouse["Id"],
            ItemInformationId: this.selectedItem["Id"],
            ItemCBN: this.getItemCBN(this.selectedItem["Id"]),
            CustomerId: this.selectedCustomer["Id"]
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_SearchShelfsForShipment;
        this._movestockService.getKeyPair(apiAddress, obj)
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
    MoveStockComponent.prototype.getQuantityIfAlreadyAddedInLocation = function (itemId, location) {
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
    MoveStockComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    MoveStockComponent.prototype.getItemCBN = function (itemId) {
        var model = this.itemInformationByCustomer
            .filter(function (x) { return x.itemInformation.ItemInformationId == itemId; })[0];
        return (model.itemInformation.Width * model.itemInformation.Height * model.itemInformation.Length);
    };
    MoveStockComponent.prototype.getCalculatedCBN = function (location) {
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
    MoveStockComponent.prototype.openItemLocationModal = function () {
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
    MoveStockComponent.prototype.cancelItemLocationModal = function () {
        this.modalRef.close();
    };
    MoveStockComponent.prototype.palletSelect = function (event, location, selectedPalletId) {
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
                noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0] + 1)));
                model.NoOfPallets = noOfPallets;
            }
        }
    };
    MoveStockComponent.prototype.palletDeSelect = function (location) {
        this.selectedPallet = {};
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        model.NoOfBoxes = 0;
    };
    MoveStockComponent.prototype.getNoOfBoxesPerPallet = function (itemId, location, palletId) {
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
    MoveStockComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    MoveStockComponent.prototype.dropdownSettings = function () {
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
    MoveStockComponent.prototype.getErrorMessage = function (formElement) {
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
    MoveStockComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_LISTING]);
    };
    MoveStockComponent.prototype.QuantityChange = function (event, shelfVacantCapicity, location) {
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
    MoveStockComponent.prototype.addShipmentItem = function () {
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
    MoveStockComponent.prototype.getPalletNoToSet = function (itemId) {
        var countByItem = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId; }).length;
        if (countByItem == 0)
            return 1;
        else
            return (countByItem + 1);
    };
    MoveStockComponent.prototype.deleteFromShipmentList = function (location, itemInfoId) {
        var _this = this;
        var dat = this.shipmentListToPost
            .filter(function (y) { return y.ItemInformationId === itemInfoId && y.Location === location; });
        if (dat && dat.length > 0) {
            dat.forEach(function (element) {
                _this.shipmentListToPost.splice(_this.shipmentListToPost.indexOf(element), 1);
            });
        }
    };
    MoveStockComponent.prototype.addShipmentTextField = function (event, fieldName, location, palletNo) {
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
    MoveStockComponent.prototype.createShipmentNote = function (formValue) {
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
    MoveStockComponent.prototype.executeShipmentNoteCreation = function (formValue) {
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
        this._movestockService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Add Opening Stock successfully");
            // setTimeout(() => {
            //   this.redirectToShipmentNoteList();
            // }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], MoveStockComponent.prototype, "modalItemLocation", void 0);
    MoveStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-move-stock",
            template: __webpack_require__(/*! ../templates/move-stock.html */ "./src/app/layout/content/move-stock/templates/move-stock.html"),
            styles: [__webpack_require__(/*! ../styles/move.stock.scss */ "./src/app/layout/content/move-stock/styles/move.stock.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_move_stock_service__WEBPACK_IMPORTED_MODULE_3__["MoveStockService"],
            ngb_modal__WEBPACK_IMPORTED_MODULE_4__["ModalManager"]])
    ], MoveStockComponent);
    return MoveStockComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/move-stock/move-stock.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/content/move-stock/move-stock.module.ts ***!
  \****************************************************************/
/*! exports provided: MoveStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStockModule", function() { return MoveStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_move_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/move-stock.service */ "./src/app/layout/content/move-stock/services/move-stock.service.ts");
/* harmony import */ var _components_move_stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/move-stock */ "./src/app/layout/content/move-stock/components/move-stock.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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
                component: _components_move_stock__WEBPACK_IMPORTED_MODULE_5__["MoveStockComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var MoveStockModule = /** @class */ (function () {
    function MoveStockModule() {
    }
    MoveStockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"]
            ],
            declarations: [
                _components_move_stock__WEBPACK_IMPORTED_MODULE_5__["MoveStockComponent"]
            ],
            providers: [
                _services_move_stock_service__WEBPACK_IMPORTED_MODULE_4__["MoveStockService"]
            ],
            entryComponents: []
        })
    ], MoveStockModule);
    return MoveStockModule;
}());



/***/ }),

/***/ "./src/app/layout/content/move-stock/services/move-stock.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/move-stock/services/move-stock.service.ts ***!
  \**************************************************************************/
/*! exports provided: MoveStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStockService", function() { return MoveStockService; });
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


var MoveStockService = /** @class */ (function (_super) {
    __extends(MoveStockService, _super);
    function MoveStockService(injector) {
        return _super.call(this, injector) || this;
    }
    MoveStockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], MoveStockService);
    return MoveStockService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/move-stock/styles/move.stock.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/content/move-stock/styles/move.stock.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/move-stock/templates/move-stock.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/move-stock/templates/move-stock.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    MOVE STOCK\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createShipmentNote(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <!-- <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Forward Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Move Stock Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n\r\n        \r\n\r\n          \r\n        </div>\r\n       \r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKUs</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select One SKU'\" [data]=\"itemKeyPair\"\r\n                          [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                           (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                          (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group shipment-item-add\">\r\n                        <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemLocation()\">\r\n                          New Location\r\n                        </button>\r\n                      </div>\r\n                   \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                          <thead>\r\n                            <tr role=\"row\">\r\n                              <th>\r\n                                SKU Id\r\n                              </th>\r\n                              <th>\r\n                               SKU Name\r\n                              </th>\r\n                              <th>\r\n                                Pallet No\r\n                              </th>\r\n                              <th>\r\n                                Batch\r\n                              </th>\r\n                              <th>\r\n                                Status\r\n                              </th>\r\n                              <th>\r\n                                Quantity\r\n                              </th>\r\n                              <th>\r\n                                No Of Boxes\r\n                              </th>\r\n                              <th>\r\n                                Location\r\n                              </th>\r\n                              <th>\r\n                                Mfg Date\r\n                              </th>\r\n                              <th>\r\n                                Expiry Date\r\n                              </th>\r\n                             \r\n                         \r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                              <td>{{shipment.ItemInformationId}}</td>\r\n                              <td>{{shipment.Name}}</td>\r\n                              <td>{{shipment.PalletNo}}</td>\r\n                              <td><input type=\"text\" class=\"form-control\" value=\"{{shipment.Batch}}\" (blur)=\"addShipmentTextField($event,'Batch',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td><input type=\"text\" class=\"form-control\" value=\"{{shipment.Status}}\" (blur)=\"addShipmentTextField($event,'Status',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td>{{shipment.Quantity}}</td>\r\n                              <td>{{shipment.NoOfBoxes}}</td>\r\n                              <td>{{shipment.Location}}</td>\r\n                              <td><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'MfgDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'ExpiryDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                            \r\n                            </tr>\r\n                          </tbody>  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n             \r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Move Stock</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<modal #modalItemLocation>\r\n  <modal-header>\r\n      <div class=\"box-header\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">\r\n                {{this.selectedWarehouse.Name}}\r\n              </h3>\r\n          </div>\r\n        </div>\r\n  </modal-header>\r\n  \r\n  <modal-content>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Chamber Aisle\r\n                  </th>\r\n                  <th>\r\n                    Chamber Rack\r\n                  </th>\r\n                  <th>\r\n                    Chamber Bay\r\n                  </th>\r\n                  <th>\r\n                    Location\r\n                  </th>\r\n                  <th>\r\n                    Vacant Quantity\r\n                  </th>\r\n                  \r\n                  <th>\r\n                    Quantity\r\n                  </th>\r\n                  <th class=\"pallets-dropdown\">\r\n                      Pallet\r\n                    </th>\r\n                    <th>\r\n                        No Of Boxes\r\n                      </th>\r\n                    <th>\r\n                        No Of Pallets\r\n                      </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let godwom of shelfListForShipment\">\r\n                  <td>{{godwom.godownRow.Name}} | {{godwom.godownRow.Alias}}</td>\r\n                  <td>{{godwom.godownRack.Name}} | {{godwom.godownRack.Alias}}</td>\r\n                  <td>{{godwom.godownShelf.Name}} | {{godwom.godownShelf.Alias}}</td>\r\n                  <td>{{godwom.Location}}</td>\r\n                  <td>{{godwom.vacantQuantity}}</td>\r\n                  <td><input (blur)=\"QuantityChange($event,godwom.vacantQuantity,godwom.Location)\" value=\"{{godwom.Quantity}}\" type=\"text\" class=\"form-control\"></td>\r\n                  <td>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"palletKeyPair\" [settings]=\"palletDropdownSettings\"\r\n                        (onDeSelect)=\"palletDeSelect(godwom.Location)\"\r\n                      (onSelect)=\"palletSelect($event,godwom.Location,0)\">\r\n                    </ng-multiselect-dropdown>\r\n                  </td>\r\n                  <td>{{godwom.NoOfBoxes}}</td>\r\n                  <td>{{godwom.NoOfPallets}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n  </modal-content>\r\n  \r\n  <modal-footer>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelItemLocationModal()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-wms\" (click)=\"addShipmentItem()\">Save</button>\r\n        </div>\r\n  </modal-footer>\r\n  </modal>"

/***/ })

}]);
//# sourceMappingURL=content-move-stock-move-stock-module.js.map