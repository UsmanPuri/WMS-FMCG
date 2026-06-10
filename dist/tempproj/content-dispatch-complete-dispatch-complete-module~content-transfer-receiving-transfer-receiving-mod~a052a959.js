(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-dispatch-complete-dispatch-complete-module~content-transfer-receiving-transfer-receiving-mod~a052a959"],{

/***/ "./node_modules/@wkoza/ngx-upload/components/inputfile.component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/components/inputfile.component.js ***!
  \**************************************************************************/
/*! exports provided: InputfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputfileComponent", function() { return InputfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/@wkoza/ngx-upload/index.js");



var InputfileComponent = /** @class */ (function () {
    function InputfileComponent(injector, uploader, renderer, ngForm, formGroupDirective) {
        this.injector = injector;
        this.uploader = uploader;
        this.renderer = renderer;
        this.ngForm = ngForm;
        this.formGroupDirective = formGroupDirective;
        this.files = new Set();
        if (this.ngForm) {
            this.formGroup = ngForm.form;
        }
        else if (this.formGroupDirective) {
            this.formGroup = formGroupDirective.form;
        }
        else {
            this.formGroup = null;
        }
    }
    InputfileComponent.prototype.onFilesAdded = function () {
        this.uploader.addToQueue(this.file.nativeElement.files, this.formGroup);
    };
    InputfileComponent.prototype.ngOnInit = function () {
        if (this.options.multiple !== false)
            this.renderer.setProperty(this.file.nativeElement, 'multiple', 'multiple');
        if (this.options.accept)
            this.renderer.setProperty(this.file.nativeElement, 'accept', this.options.accept.join());
        if (this.options.capture)
            this.renderer.setProperty(this.file.nativeElement, 'capture', this.options.capture);
    };
    InputfileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-upload-inputfile',
                    template: "\n      <label class=\"input-file\">\n          <input type=\"file\" #file (change)=\"onFilesAdded()\">\n          <ng-content></ng-content>\n      </label>",
                    styles: ['input[type="file"] { display: none; } .input-file { width: 100%; }']
                },] },
    ];
    /** @nocollapse */
    InputfileComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: ___WEBPACK_IMPORTED_MODULE_2__["HttpClientUploadService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    InputfileComponent.propDecorators = {
        file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['file',] }]
    };
    return InputfileComponent;
}());

//# sourceMappingURL=inputfile.component.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/directives/dropzone.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/directives/dropzone.directive.js ***!
  \*************************************************************************/
/*! exports provided: NgxDragAndDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDragAndDropDirective", function() { return NgxDragAndDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_configuration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.model */ "./node_modules/@wkoza/ngx-upload/utils/configuration.model.js");
/* harmony import */ var _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/logger.model */ "./node_modules/@wkoza/ngx-upload/utils/logger.model.js");




/**
 * Transforms a node into a drag and drop zone.
 */
var NgxDragAndDropDirective = /** @class */ (function () {
    function NgxDragAndDropDirective(el, renderer, injector, logger, dropOptions, strategy, ngForm, formGroupDirective) {
        this.el = el;
        this.renderer = renderer;
        this.injector = injector;
        this.logger = logger;
        this.dropOptions = dropOptions;
        this.strategy = strategy;
        this.ngForm = ngForm;
        this.formGroupDirective = formGroupDirective;
        if (this.ngForm) {
            this.formGroup = ngForm.form;
        }
        else if (this.formGroupDirective) {
            this.formGroup = formGroupDirective.form;
        }
        else {
            this.formGroup = null;
        }
    }
    Object.defineProperty(NgxDragAndDropDirective.prototype, "ngxDragAndDrop", {
        set: function (dropOptions) {
            if (dropOptions) {
                this.logger.debug(JSON.stringify(dropOptions));
                this.dropOptions = dropOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxDragAndDropDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, this.dropOptions.color);
        this.logger.info('strategy : ' + this.strategy.toString());
        this.uploader = this.injector.get(this.strategy);
    };
    NgxDragAndDropDirective.prototype.onDragLeave = function (event) {
        this.logger.debug('dragleave event');
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.colorDrag);
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.colorDrop);
        this.renderer.addClass(this.el.nativeElement, this.dropOptions.color);
        this.stopAndPrevent(event);
    };
    NgxDragAndDropDirective.prototype.dropEvent = function (event) {
        this.logger.debug('drop event');
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.color);
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.colorDrag);
        this.renderer.addClass(this.el.nativeElement, this.dropOptions.colorDrop);
        var transfer = this.getTransfer(event);
        if (!transfer) {
            return;
        }
        transfer.dropEffect = 'copy';
        this.stopAndPrevent(event);
        this.uploader.addToQueue(transfer.files, this.formGroup, this.dropOptions);
    };
    NgxDragAndDropDirective.prototype.onDragOver = function (event) {
        this.logger.debug('dragover event');
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.color);
        this.renderer.removeClass(this.el.nativeElement, this.dropOptions.colorDrop);
        this.renderer.addClass(this.el.nativeElement, this.dropOptions.colorDrag);
        var transfer = this.getTransfer(event);
        if (!this.haveFiles(transfer.types)) {
            return;
        }
        this.stopAndPrevent(event);
    };
    NgxDragAndDropDirective.prototype.stopAndPrevent = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    NgxDragAndDropDirective.prototype.getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    NgxDragAndDropDirective.prototype.haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    NgxDragAndDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngxDragAndDrop]',
                    exportAs: 'ngxDragAndDrop'
                },] },
    ];
    /** @nocollapse */
    NgxDragAndDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__["NgxUploadLogger"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_utils_configuration_model__WEBPACK_IMPORTED_MODULE_2__["NGX_DROP_TARGET_OPTIONS"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_utils_configuration_model__WEBPACK_IMPORTED_MODULE_2__["NGX_UPLOAD_STRATEGY"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    NgxDragAndDropDirective.propDecorators = {
        ngxDragAndDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }],
        dropEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }]
    };
    return NgxDragAndDropDirective;
}());

//# sourceMappingURL=dropzone.directive.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/directives/inputfile.directive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/directives/inputfile.directive.js ***!
  \**************************************************************************/
/*! exports provided: NgxInputFileDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxInputFileDirective", function() { return NgxInputFileDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_inputfile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputfile.component */ "./node_modules/@wkoza/ngx-upload/components/inputfile.component.js");
/* harmony import */ var _utils_configuration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.model */ "./node_modules/@wkoza/ngx-upload/utils/configuration.model.js");



var NgxInputFileDirective = /** @class */ (function () {
    function NgxInputFileDirective(resolver, injector, vcRef, templateRef) {
        this.resolver = resolver;
        this.injector = injector;
        this.vcRef = vcRef;
        this.templateRef = templateRef;
    }
    NgxInputFileDirective.prototype.ngOnInit = function () {
        var _contentViewRef = this.templateRef.createEmbeddedView(null);
        var factory = this.resolver.resolveComponentFactory(_components_inputfile_component__WEBPACK_IMPORTED_MODULE_1__["InputfileComponent"]);
        var component = this.vcRef.createComponent(factory, 0, this.injector, [_contentViewRef.rootNodes]);
        component.instance.options = (this.ngxInputFile) ? this.ngxInputFile : _utils_configuration_model__WEBPACK_IMPORTED_MODULE_2__["ngxInputFileOptions"];
        _contentViewRef.detectChanges();
    };
    NgxInputFileDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngxInputFile]'
                },] },
    ];
    /** @nocollapse */
    NgxInputFileDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    NgxInputFileDirective.propDecorators = {
        ngxInputFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxInputFileDirective;
}());

//# sourceMappingURL=inputfile.directive.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/directives/thumbnail.directive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/directives/thumbnail.directive.js ***!
  \**************************************************************************/
/*! exports provided: NgxThumbnailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxThumbnailDirective", function() { return NgxThumbnailDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fileItem_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fileItem.model */ "./node_modules/@wkoza/ngx-upload/services/fileItem.model.js");


/**
 * Transforms a node into a thumbnail zone.
 */
var NgxThumbnailDirective = /** @class */ (function () {
    function NgxThumbnailDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    NgxThumbnailDirective.prototype.ngOnInit = function () {
        var _this = this;
        // must be used only with image file
        if (this.fileItem.file.type.indexOf('image/jpeg') !== 0 &&
            this.fileItem.file.type.indexOf('image/png') !== 0) {
            return;
        }
        else {
            var imgEl_1 = this.renderer.createElement('img');
            this.renderer.appendChild(this.el.nativeElement, imgEl_1);
            this.renderer.setStyle(imgEl_1, 'width', '100px');
            this._getOrientation(this.fileItem.file, function (srcOrientation) {
                var img = new Image();
                var reader = new FileReader();
                reader.onload = function (evt) {
                    img.onload = function () {
                        var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                        // set proper canvas dimensions before transform & export
                        if (4 < srcOrientation && srcOrientation < 9) {
                            canvas.width = height;
                            canvas.height = width;
                        }
                        else {
                            canvas.width = width;
                            canvas.height = height;
                        }
                        // transform context before drawing image
                        switch (srcOrientation) {
                            case 2:
                                ctx.transform(-1, 0, 0, 1, width, 0);
                                break;
                            case 3:
                                ctx.transform(-1, 0, 0, -1, width, height);
                                break;
                            case 4:
                                ctx.transform(1, 0, 0, -1, 0, height);
                                break;
                            case 5:
                                ctx.transform(0, 1, 1, 0, 0, 0);
                                break;
                            case 6:
                                ctx.transform(0, 1, -1, 0, height, 0);
                                break;
                            case 7:
                                ctx.transform(0, -1, -1, 0, height, width);
                                break;
                            case 8:
                                ctx.transform(0, -1, 1, 0, 0, width);
                                break;
                            default:
                                break;
                        }
                        // draw image
                        ctx.drawImage(img, 0, 0);
                        _this.renderer.setProperty(imgEl_1, 'src', canvas.toDataURL());
                    };
                    img.src = evt.target['result'];
                };
                reader.readAsDataURL(_this.fileItem.file);
            });
        }
    };
    /*
    * getOrientation computes the real orientation of the image
    *
    */
    NgxThumbnailDirective.prototype._getOrientation = function (file, callback) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var view = new DataView(event.target['result']);
            if (view.getUint16(0, false) !== 0xFFD8)
                return callback(-2);
            var length = view.byteLength;
            var offset = 2;
            while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xFFE1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) {
                        return callback(-1);
                    }
                    var little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) === 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                }
                else if ((marker & 0xFF00) !== 0xFF00)
                    break;
                else
                    offset += view.getUint16(offset, false);
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    };
    ;
    NgxThumbnailDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngxThumbnail]',
                    exportAs: 'ngxThumbnail'
                },] },
    ];
    /** @nocollapse */
    NgxThumbnailDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgxThumbnailDirective.propDecorators = {
        fileItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngxThumbnail',] }]
    };
    return NgxThumbnailDirective;
}());

//# sourceMappingURL=thumbnail.directive.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/index.js ***!
  \*************************************************/
/*! exports provided: FileItem, XhrUploadService, HttpClientUploadService, _loggerFactory, NgxUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_loggerFactory", function() { return _loggerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUploadModule", function() { return NgxUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/configuration.model */ "./node_modules/@wkoza/ngx-upload/utils/configuration.model.js");
/* harmony import */ var _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/dropzone.directive */ "./node_modules/@wkoza/ngx-upload/directives/dropzone.directive.js");
/* harmony import */ var _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/logger.model */ "./node_modules/@wkoza/ngx-upload/utils/logger.model.js");
/* harmony import */ var _services_xhrUpload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/xhrUpload.service */ "./node_modules/@wkoza/ngx-upload/services/xhrUpload.service.js");
/* harmony import */ var _services_httpClientUpload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/httpClientUpload.service */ "./node_modules/@wkoza/ngx-upload/services/httpClientUpload.service.js");
/* harmony import */ var _directives_thumbnail_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/thumbnail.directive */ "./node_modules/@wkoza/ngx-upload/directives/thumbnail.directive.js");
/* harmony import */ var _directives_inputfile_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/inputfile.directive */ "./node_modules/@wkoza/ngx-upload/directives/inputfile.directive.js");
/* harmony import */ var _components_inputfile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inputfile.component */ "./node_modules/@wkoza/ngx-upload/components/inputfile.component.js");
/* harmony import */ var _services_fileItem_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/fileItem.model */ "./node_modules/@wkoza/ngx-upload/services/fileItem.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return _services_fileItem_model__WEBPACK_IMPORTED_MODULE_9__["FileItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XhrUploadService", function() { return _services_xhrUpload_service__WEBPACK_IMPORTED_MODULE_4__["XhrUploadService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientUploadService", function() { return _services_httpClientUpload_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientUploadService"]; });













var ngxDeclarations = [
    _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_2__["NgxDragAndDropDirective"], _directives_thumbnail_directive__WEBPACK_IMPORTED_MODULE_6__["NgxThumbnailDirective"], _directives_inputfile_directive__WEBPACK_IMPORTED_MODULE_7__["NgxInputFileDirective"], _components_inputfile_component__WEBPACK_IMPORTED_MODULE_8__["InputfileComponent"]
];
/**
 * Factory associated with internal logger
 * @param options
 * @returns {any}
 * @private
 */
function _loggerFactory(options) {
    var enabled = options.enabled != null ? options.enabled : Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])();
    if (enabled) {
        var _console = typeof console === 'object' ? console : {};
        var debug = options.debug != null ? options.debug : true;
        return new _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__["ConsoleLogger"](_console, debug);
    }
    return new _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__["NoOpLogger"]();
}
var NgxUploadModule = /** @class */ (function () {
    function NgxUploadModule() {
    }
    NgxUploadModule.forRoot = function (dropTargetOptions, loggerOptions) {
        return {
            ngModule: NgxUploadModule,
            providers: [
                { provide: _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["NGX_LOGGER_OPTIONS"], useValue: (loggerOptions) ? loggerOptions : _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["ngxloggerOptions"] },
                {
                    provide: _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["NGX_DROP_TARGET_OPTIONS"],
                    useValue: (dropTargetOptions) ? dropTargetOptions : _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["ngxDropTargetOptions"]
                },
                { provide: _utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["NGX_UPLOAD_STRATEGY"], useValue: _services_httpClientUpload_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientUploadService"] },
                {
                    provide: _utils_logger_model__WEBPACK_IMPORTED_MODULE_3__["NgxUploadLogger"],
                    useFactory: _loggerFactory,
                    deps: [_utils_configuration_model__WEBPACK_IMPORTED_MODULE_1__["NGX_LOGGER_OPTIONS"]]
                },
                _services_xhrUpload_service__WEBPACK_IMPORTED_MODULE_4__["XhrUploadService"],
                _services_httpClientUpload_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientUploadService"]
            ]
        };
    };
    ;
    NgxUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: ngxDeclarations.slice(),
                    exports: ngxDeclarations.slice(),
                    entryComponents: [_components_inputfile_component__WEBPACK_IMPORTED_MODULE_8__["InputfileComponent"]]
                },] },
    ];
    return NgxUploadModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/services/abstractUpload.service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/services/abstractUpload.service.js ***!
  \***************************************************************************/
/*! exports provided: AbstractUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractUploadService", function() { return AbstractUploadService; });
/* harmony import */ var _fileItem_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileItem.model */ "./node_modules/@wkoza/ngx-upload/services/fileItem.model.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var AbstractUploadService = /** @class */ (function () {
    function AbstractUploadService(logger) {
        this.logger = logger;
        this.progressTotal = 0;
        this.onCancel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onDropError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // TODO headers isn't `any` but `Array`
        this.onBeforeUploadItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onAddToQueue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.queue = new Array();
        this.headers = new Map();
        this.disableMultipart = false;
    }
    /**
     * Adds files to the queue
     */
    AbstractUploadService.prototype.addToQueue = function (files, formGroup, dropOptions) {
        this.logger.info('add to queue');
        if (dropOptions && !dropOptions.multiple) {
            if (files.length > 1) {
                this.logger.error('there is more than one file.');
                this.onDropError$.next({ errorAccept: false, errorMultiple: true });
                return;
            }
        }
        var _loop_1 = function (i) {
            var file = files.item(i);
            this_1.logger.debug(files.item(i));
            if (dropOptions && dropOptions.accept) {
                var accepted = dropOptions.accept.some(function (type) { return type === file.type; });
                if (!accepted) {
                    this_1.logger.error('this file is not accepted because of its type', file);
                    this_1.onDropError$.next({ item: file, errorAccept: true, errorMultiple: false });
                    return "continue";
                }
            }
            var fileItem = new _fileItem_model__WEBPACK_IMPORTED_MODULE_0__["FileItem"](file, this_1, this_1.logger);
            if (formGroup) {
                Object.keys(formGroup.controls).forEach(function (key) {
                    fileItem.formData.append(key, formGroup.get(key).value);
                });
            }
            this_1.queue.push(fileItem);
            this_1.onAddToQueue$.next(fileItem);
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * Uploads all not uploaded items of queue
     */
    AbstractUploadService.prototype.uploadAll = function (endpoint, options) {
        var items = this.queue.filter(function (item) { return (item.isReady); });
        if (!items.length) {
            return;
        }
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item.upload(endpoint, options);
        }
    };
    /**
     * Uploads all not uploaded items of queue
     */
    AbstractUploadService.prototype.cancelAll = function () {
        var items = this.queue.filter(function (item) { return (item.uploadInProgress); });
        if (!items.length) {
            return;
        }
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            item.cancel();
        }
        this.progressTotal = this.computeTotalProgress();
    };
    /**
     * Uploads all not uploaded items of queue
     */
    AbstractUploadService.prototype.removeAllFromQueue = function () {
        var items = this.queue.filter(function (item) { return (!item.uploadInProgress && !item.isSuccess); });
        if (!items.length) {
            return;
        }
        for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
            var item = items_3[_i];
            this.removeFromQueue(item);
        }
    };
    AbstractUploadService.prototype.removeFromQueue = function (fileItem) {
        var index = this.queue.indexOf(fileItem);
        var item = this.queue[index];
        if (item.uploadInProgress) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progressTotal = this.computeTotalProgress();
    };
    /**
     * Returns the total progress
     * @param {Number} [value]
     * @returns {Number}
     * @private
     */
    AbstractUploadService.prototype.computeTotalProgress = function () {
        var totalCurrent = 0;
        var total = 0;
        for (var _i = 0, _a = this.queue; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.uploadInProgress || item.isSuccess) {
                totalCurrent += (item.file.size / 100) * item.progress || 0;
                total += item.file.size;
                console.log(totalCurrent + ' / ' + total);
            }
        }
        return Math.round((totalCurrent * 100) / total);
    };
    /**
     * Prepares file status before upload
     * @param item
     */
    AbstractUploadService.prototype.onBeforeUploadItem = function (item) {
        this.logger.info('enter uploadService.ɵonBeforeUploadItem()');
        item.ɵonBeforeUploadItem();
        this.onBeforeUploadItem$.next(item);
    };
    /**
     * Update status during upload progress
     * @param item
     * @param progress
     */
    AbstractUploadService.prototype.onProgressItem = function (item, progress) {
        this.logger.info("call onProgressItem " + item + " " + progress);
        this.progressTotal = this.computeTotalProgress();
        item.ɵonProgress(progress);
        this.onProgress$.next({ item: item, progress: progress });
    };
    /**
     * Callback called when an upload error occurs
     * @param item
     * @param xhr
     */
    AbstractUploadService.prototype.onError = function (item, body, status, headers) {
        this.logger.info("call onError " + item + " " + body + " " + status + " " + headers);
        item.ɵonError();
        this.onError$.next({ item: item, body: body, status: status, headers: headers });
    };
    /**
     * Callback called when an upload success occurs
     * @param item
     * @param xhr
     */
    AbstractUploadService.prototype.onSuccess = function (item, body, status, headers) {
        this.logger.info("call onSuccess " + item + " " + body + " " + status + " " + headers);
        this.progressTotal = this.computeTotalProgress();
        item.ɵonSuccess();
        this.onSuccess$.next({ item: item, body: body, status: status, headers: headers });
    };
    return AbstractUploadService;
}());

//# sourceMappingURL=abstractUpload.service.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/services/fileItem.model.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/services/fileItem.model.js ***!
  \*******************************************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(file, uploadService, logger) {
        this.file = file;
        this.uploadService = uploadService;
        this.logger = logger;
        this.isReady = true;
        this.progress = 0;
        this.formData = new FormData();
        this.alias = 'file';
    }
    FileItem.prototype.upload = function (endpoint, options) {
        if (endpoint) {
            this.uploadService.uploadFileItem(this, endpoint, options);
        }
        else {
            this.logger.error('You must define a UploadEndPoint object.');
        }
    };
    FileItem.prototype.cancel = function () {
        this.logger.debug('upload cancel');
        if (this.uploadInProgress) {
            this.ɵonCancel();
            this.uploadService.cancelFileItem(this);
        }
    };
    FileItem.prototype.remove = function () {
        this.logger.debug('upload remove');
        this.uploadService.removeFromQueue(this);
    };
    FileItem.prototype.ɵonBeforeUploadItem = function () {
        this.isReady = true;
        this.uploadInProgress = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
    };
    FileItem.prototype.ɵonProgress = function (progress) {
        this.isReady = false;
        this.progress = progress;
    };
    FileItem.prototype.ɵonSuccess = function () {
        this.isReady = false;
        this.uploadInProgress = false;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
    };
    FileItem.prototype.ɵonError = function () {
        this.isReady = false;
        this.uploadInProgress = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
    };
    FileItem.prototype.ɵonCancel = function () {
        this.isReady = true;
        this.uploadInProgress = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.sub.unsubscribe();
    };
    return FileItem;
}());

//# sourceMappingURL=fileItem.model.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/services/httpClientUpload.service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/services/httpClientUpload.service.js ***!
  \*****************************************************************************/
/*! exports provided: HttpClientUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientUploadService", function() { return HttpClientUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_logger_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger.model */ "./node_modules/@wkoza/ngx-upload/utils/logger.model.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _abstractUpload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstractUpload.service */ "./node_modules/@wkoza/ngx-upload/services/abstractUpload.service.js");
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




// send an event for each upload event. These events can be catched by the user for call a callback
var HttpClientUploadService = /** @class */ (function (_super) {
    __extends(HttpClientUploadService, _super);
    function HttpClientUploadService(logger, httpClient) {
        var _this = _super.call(this, logger) || this;
        _this.logger = logger;
        _this.httpClient = httpClient;
        return _this;
    }
    HttpClientUploadService.prototype.uploadFileItem = function (fileItem, endpoint, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.logger.info('enter uploadService.uploadFileItem()');
        var method = endpoint.method;
        var url = endpoint.url;
        var index = this.queue.indexOf(fileItem);
        var item = this.queue[index];
        this.onBeforeUploadItem(item);
        if (item.isCancel) {
            return;
        }
        item.uploadInProgress = true;
        var sendable = item.formData;
        sendable.append(item.alias, item.file, item.file.name);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](method, url, sendable, Object.assign(options, { reportProgress: true }));
        fileItem.sub = this.httpClient.request(req).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                var percentDone = Math.round(event.loaded * 100 / (event.total ? event.total : event.loaded));
                _this.logger.debug("File is " + percentDone + "% uploaded.");
                fileItem.ɵonProgress(percentDone);
                _this.onProgressItem(item, percentDone);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // A successful response is delivered on the event stream.
                item.ɵonSuccess();
                _this.onSuccess(item, event.body, event.status, event.headers);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (url === 'ngx_upload_mock') {
                    item.ɵonSuccess();
                    _this.onSuccess(item, err.message, err.status, err.headers);
                }
                else if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    item.ɵonError();
                    _this.onError(item, err.error.message, err.status, err.headers);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    item.ɵonError();
                    _this.onError(item, err.error, err.status, err.headers);
                }
            }
        });
    };
    HttpClientUploadService.prototype.cancelFileItem = function (fileItem) {
        this.progressTotal = this.computeTotalProgress();
        this.onCancel$.next(fileItem);
    };
    HttpClientUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpClientUploadService.ctorParameters = function () { return [
        { type: _utils_logger_model__WEBPACK_IMPORTED_MODULE_1__["NgxUploadLogger"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    return HttpClientUploadService;
}(_abstractUpload_service__WEBPACK_IMPORTED_MODULE_3__["AbstractUploadService"]));

//# sourceMappingURL=httpClientUpload.service.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/services/xhrUpload.service.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/services/xhrUpload.service.js ***!
  \**********************************************************************/
/*! exports provided: XhrUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrUploadService", function() { return XhrUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_logger_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger.model */ "./node_modules/@wkoza/ngx-upload/utils/logger.model.js");
/* harmony import */ var _abstractUpload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractUpload.service */ "./node_modules/@wkoza/ngx-upload/services/abstractUpload.service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




// send an event for each upload event. These events can be catched by the user for call a callback
/*
  @Deprecated since 6.1.0
 */
var XhrUploadService = /** @class */ (function (_super) {
    __extends(XhrUploadService, _super);
    function XhrUploadService(logger) {
        var _this = _super.call(this, logger) || this;
        _this.logger = logger;
        return _this;
    }
    XhrUploadService.prototype.uploadFileItem = function (fileItem, endpoint, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.logger.info('enter uploadService.uploadFileItem()');
        var method = endpoint.method;
        var url = endpoint.url;
        var index = this.queue.indexOf(fileItem);
        var item = this.queue[index];
        this.onBeforeUploadItem(item);
        if (item.isCancel) {
            return;
        }
        item.uploadInProgress = true;
        fileItem.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (responseObserver) {
            _this.xhr = new XMLHttpRequest();
            _this.xhr.open(method, url, true);
            if (!!_this.withCredentials) {
                _this.xhr.withCredentials = true;
            }
            // Add all the requested headers.
            _this.headers.forEach(function (values, name) {
                _this.xhr.setRequestHeader(name, values.join(','));
            });
            /** load event */
            var onLoad = function () {
                var ok = _this.xhr.status >= 200 && _this.xhr.status < 300;
                if (url === 'ngx_upload_mock') {
                    // A successful response is delivered on the event stream.
                    responseObserver.next(_this.xhr.response);
                    _this.onSuccess(item, _this.xhr.response, _this.xhr.status, _this.xhr.getAllResponseHeaders());
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    responseObserver.complete();
                }
                else if (ok) {
                    // A successful response is delivered on the event stream.
                    responseObserver.next(_this.xhr.response);
                    _this.onSuccess(item, _this.xhr.response, _this.xhr.status, _this.xhr.getAllResponseHeaders());
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    responseObserver.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    responseObserver.error(_this.xhr.response);
                    _this.onError(item, _this.xhr.response, _this.xhr.status, _this.xhr.getAllResponseHeaders());
                }
            };
            // error event handler
            var onError = function (err) {
                responseObserver.error(_this.xhr.response);
                _this.onError(item, _this.xhr.response, _this.xhr.status, _this.xhr.getAllResponseHeaders());
            };
            /**
             * Les évènements d'envoi (upload) sont lancés sur l'objet XMLHttpRequest.upload
             * @param event
             */
            var onProgress = function (event) {
                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
                _this.logger.debug('progress : ' + progress);
                _this.onProgressItem(item, progress);
            };
            // By default, register for load and error events.
            _this.xhr.addEventListener('load', onLoad);
            _this.xhr.addEventListener('error', onError);
            _this.xhr.upload.addEventListener('progress', onProgress);
            var sendable;
            if (!_this.disableMultipart) {
                sendable = item.formData;
                sendable.append(item.alias, item.file, item.file.name);
            }
            else {
                _this.logger.debug(item.file);
                sendable = item.file;
            }
            _this.xhr.send(sendable);
            return function () {
                // On a cancellation, remove all registered event listeners.
                console.log('stop !!!!@');
                _this.xhr.removeEventListener('error', onError);
                _this.xhr.removeEventListener('load', onLoad);
                _this.xhr.upload.removeEventListener('progress', onProgress);
                // Finally, abort the in-flight request.
                _this.xhr.abort();
            };
        }).subscribe();
    };
    XhrUploadService.prototype.cancelFileItem = function (fileItem) {
        this.progressTotal = this.computeTotalProgress();
        this.onCancel$.next(fileItem);
    };
    XhrUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    XhrUploadService.ctorParameters = function () { return [
        { type: _utils_logger_model__WEBPACK_IMPORTED_MODULE_1__["NgxUploadLogger"] }
    ]; };
    return XhrUploadService;
}(_abstractUpload_service__WEBPACK_IMPORTED_MODULE_2__["AbstractUploadService"]));

//# sourceMappingURL=xhrUpload.service.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/utils/configuration.model.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/utils/configuration.model.js ***!
  \*********************************************************************/
/*! exports provided: NGX_DROP_TARGET_OPTIONS, NGX_UPLOAD_STRATEGY, NGX_LOGGER_OPTIONS, ngxDropTargetOptions, ngxloggerOptions, ngxInputFileOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_DROP_TARGET_OPTIONS", function() { return NGX_DROP_TARGET_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_UPLOAD_STRATEGY", function() { return NGX_UPLOAD_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_LOGGER_OPTIONS", function() { return NGX_LOGGER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxDropTargetOptions", function() { return ngxDropTargetOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxloggerOptions", function() { return ngxloggerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxInputFileOptions", function() { return ngxInputFileOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NGX_DROP_TARGET_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Ngx drop Zone Options');
var NGX_UPLOAD_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Ngx Upload Strategy');
var NGX_LOGGER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Ngx Logger Options');
var ngxDropTargetOptions = {
    color: '',
    colorDrag: '',
    colorDrop: '',
    multiple: true
};
var ngxloggerOptions = {
    enabled: false,
    debug: true
};
var ngxInputFileOptions = {
    multiple: true
};
//# sourceMappingURL=configuration.model.js.map

/***/ }),

/***/ "./node_modules/@wkoza/ngx-upload/utils/logger.model.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wkoza/ngx-upload/utils/logger.model.js ***!
  \**************************************************************/
/*! exports provided: NgxUploadLogger, ConsoleLogger, NoOpLogger, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUploadLogger", function() { return NgxUploadLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpLogger", function() { return NoOpLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/**
 * Simple service for logging the module.
 */
var NgxUploadLogger = /** @class */ (function () {
    function NgxUploadLogger() {
    }
    return NgxUploadLogger;
}());

var noop = function () { return undefined; };
var ɵ0 = noop;
/**
 * Default implementation of Logger that safely writes the message into the console.
 *
 */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(_console, _debugEnabled) {
        if (_debugEnabled === void 0) { _debugEnabled = true; }
        this._console = _console;
        this._debugEnabled = _debugEnabled;
    }
    ConsoleLogger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._invokeConsoleMethod('log', args);
    };
    ConsoleLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._invokeConsoleMethod('info', args);
    };
    ConsoleLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._invokeConsoleMethod('warn', args);
    };
    ConsoleLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._invokeConsoleMethod('error', args);
    };
    ConsoleLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._debugEnabled) {
            this._invokeConsoleMethod('debug', args);
        }
    };
    ConsoleLogger.prototype._invokeConsoleMethod = function (type, args) {
        var logFn = this._console[type] || this._console.log || noop;
        // console methods in IE9 don't have 'apply' method, polyfill it
        if (!logFn.apply) {
            logFn = Function.prototype.bind.call(logFn, this._console);
        }
        logFn.apply(this._console, args);
    };
    return ConsoleLogger;
}());

/**
 * No op implementation of Logger.
 *
 */
var NoOpLogger = /** @class */ (function () {
    function NoOpLogger() {
    }
    NoOpLogger.prototype.log = function () { };
    NoOpLogger.prototype.info = function () { };
    NoOpLogger.prototype.warn = function () { };
    NoOpLogger.prototype.error = function () { };
    NoOpLogger.prototype.debug = function () { };
    return NoOpLogger;
}());


//# sourceMappingURL=logger.model.js.map

/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=content-dispatch-complete-dispatch-complete-module~content-transfer-receiving-transfer-receiving-mod~a052a959.js.map