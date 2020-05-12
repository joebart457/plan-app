(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
/* harmony import */ var _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-list/tag-list.component */ "./src/app/tag-list/tag-list.component.ts");






var routes = [
    { path: 'terminal', component: _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__["TerminalComponent"] },
    { path: 'tag-list', component: _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_3__["TagListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-test-app';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[2, "display", "flex"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-menu.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-menubar.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-treetable.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-panel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tag-list/tag-list.component */ "./src/app/tag-list/tag-list.component.ts");
/* harmony import */ var _tag_list_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tag-list/edit-tag/edit-tag.component */ "./src/app/tag-list/edit-tag/edit-tag.component.ts");
/* harmony import */ var _shared_services_tag_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/tag.service */ "./src/app/shared/services/tag.service.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/file.service */ "./src/app/shared/services/file.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _shared_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"],
            _shared_services_file_service__WEBPACK_IMPORTED_MODULE_14__["FileService"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
                primeng_treetable__WEBPACK_IMPORTED_MODULE_6__["TreeTableModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_9__["TerminalComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
        _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__["TagListComponent"],
        _tag_list_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_12__["EditTagComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_6__["TreeTableModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_9__["TerminalComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                    _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__["TagListComponent"],
                    _tag_list_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_12__["EditTagComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
                    primeng_treetable__WEBPACK_IMPORTED_MODULE_6__["TreeTableModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
                ],
                providers: [
                    _shared_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"],
                    _shared_services_file_service__WEBPACK_IMPORTED_MODULE_14__["FileService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-menu.js");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.menuItems = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.menuItems.push({ label: '', icon: 'pi pi-list', routerLink: ['/tag-list'] });
        this.menuItems.push({ label: '', icon: 'pi pi-plus', routerLink: ['/terminal'] });
        this.menuItems.push({ label: '', icon: 'pi pi-sort-alt', routerLink: ['/Item2'] });
    };
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 2, vars: 1, consts: [[1, "main-nav-menu", 3, "model"], ["menu", ""]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-menu", 0, 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.menuItems);
        } }, directives: [primeng_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"]], styles: [".main-nav-menu[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 10vw;\n  justify-self: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcV0lQXFxuZy1zdGFuZGFsb25lLWFwcFxcbXktdGVzdC1hcHAvc3JjXFxhcHBcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW5hdi1tZW51IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxufSIsIi5tYWluLW5hdi1tZW51IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwdnc7XG4gIGp1c3RpZnktc2VsZjogbGVmdDtcbn0iXX0= */"] });
    return NavigationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FileService = /** @class */ (function () {
    function FileService() {
        this.fs = window.fs;
    }
    FileService.prototype.getFileAsObject = function (path) {
        try {
            return JSON.parse(this.fs.readFileSync(path));
        }
        catch (err) {
            console.error("Error retrieving file: " + path);
        }
    };
    FileService.prototype.readDirectory = function (path) {
        this.fs.readdir(path, function (err, items) {
            console.log(items);
        });
    };
    FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
    FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
    return FileService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/tag.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/tag.service.ts ***!
  \************************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TagService = /** @class */ (function () {
    function TagService() {
    }
    TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(); };
    TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });
    return TagService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tag-list/edit-tag/edit-tag.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tag-list/edit-tag/edit-tag.component.ts ***!
  \*********************************************************/
/*! exports provided: EditTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTagComponent", function() { return EditTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-panel.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-api.js");




var EditTagComponent = /** @class */ (function () {
    function EditTagComponent() {
    }
    EditTagComponent.prototype.ngOnInit = function () {
    };
    EditTagComponent.ɵfac = function EditTagComponent_Factory(t) { return new (t || EditTagComponent)(); };
    EditTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTagComponent, selectors: [["app-edit-tag"]], decls: 3, vars: 0, template: function EditTagComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Tag ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_1__["Panel"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1saXN0L2VkaXQtdGFnL2VkaXQtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EditTagComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-tag',
                templateUrl: './edit-tag.component.html',
                styleUrls: ['./edit-tag.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tag-list/tag-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/tag-list/tag-list.component.ts ***!
  \************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-panel.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-api.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-treetable.js");
/* harmony import */ var _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-tag/edit-tag.component */ "./src/app/tag-list/edit-tag/edit-tag.component.ts");







function TagListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-treeTableToggler", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var rowNode_r2 = ctx.$implicit;
    var rowData_r3 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowNode", rowNode_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowData_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowData_r3.type);
} }
var TagListComponent = /** @class */ (function () {
    function TagListComponent(fileService) {
        this.fileService = fileService;
        this.tags = [];
    }
    TagListComponent.prototype.ngOnInit = function () {
        this.fileService.readDirectory('./');
        this.tags.push({
            "data": {
                "name": "Pictures",
                "size": "150kb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "barcelona.jpg",
                        "size": "90kb",
                        "type": "Picture"
                    }
                },
                {
                    "data": {
                        "name": "primeui.png",
                        "size": "30kb",
                        "type": "Picture"
                    }
                },
                {
                    "data": {
                        "name": "optimus.jpg",
                        "size": "30kb",
                        "type": "Picture"
                    }
                }
            ]
        });
    };
    TagListComponent.ɵfac = function TagListComponent_Factory(t) { return new (t || TagListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"])); };
    TagListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagListComponent, selectors: [["app-tag-list"]], decls: 8, vars: 1, consts: [[1, "tags-panel-content"], [1, "tag-table", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "tag-edit-panel"], [3, "rowNode"]], template: function TagListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-treeTable", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TagListComponent_ng_template_5_Template, 7, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TagListComponent_ng_template_6_Template, 8, 4, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-edit-tag", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tags);
        } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], primeng_treetable__WEBPACK_IMPORTED_MODULE_4__["TreeTable"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_5__["EditTagComponent"], primeng_treetable__WEBPACK_IMPORTED_MODULE_4__["TreeTableToggler"]], styles: ["[_nghost-%COMP%]  .tags-panel-content {\n  height: 100vh !important;\n  width: 90vw;\n  display: flex;\n}\n[_nghost-%COMP%]  .tag-table {\n  height: 60vh !important;\n  overflow: auto;\n  width: 40vw;\n  padding-left: 2.5vw;\n  padding-right: 2.5vw;\n}\n[_nghost-%COMP%]  .tag-edit-panel {\n  height: 60vh !important;\n  overflow: auto;\n  width: 40vw;\n  padding-left: 2.5vw;\n  padding-right: 2.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnLWxpc3QvQzpcXFdJUFxcbmctc3RhbmRhbG9uZS1hcHBcXG15LXRlc3QtYXBwL3NyY1xcYXBwXFx0YWctbGlzdFxcdGFnLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhZy1saXN0L3RhZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0RSO0FESUk7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvdGFnLWxpc3QvdGFnLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCB7XHJcbiAgICAudGFncy1wYW5lbC1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAudGFnLXRhYmxlIHtcclxuICAgICAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFnLWVkaXQtcGFuZWwge1xyXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMi41dnc7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMi41dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIjpob3N0OjpuZy1kZWVwIC50YWdzLXBhbmVsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3Q6Om5nLWRlZXAgLnRhZy10YWJsZSB7XG4gIGhlaWdodDogNjB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDQwdnc7XG4gIHBhZGRpbmctbGVmdDogMi41dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXZ3O1xufVxuOmhvc3Q6Om5nLWRlZXAgLnRhZy1lZGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogNDB2dztcbiAgcGFkZGluZy1sZWZ0OiAyLjV2dztcbiAgcGFkZGluZy1yaWdodDogMi41dnc7XG59Il19 */"] });
    return TagListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag-list',
                templateUrl: './tag-list.component.html',
                styleUrls: ['./tag-list.component.scss']
            }]
    }], function () { return [{ type: _shared_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/terminal/terminal.component.ts":
/*!************************************************!*\
  !*** ./src/app/terminal/terminal.component.ts ***!
  \************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TerminalComponent = /** @class */ (function () {
    function TerminalComponent() {
        this.terminalString = '';
        this.blinkOn = false;
        this.blinkLocked = false;
    }
    TerminalComponent.prototype.ngOnInit = function () {
        window.onkeydown = function (e) {
            if (e.keyCode == 32 && e.target.className !== 'terminal-wrapper') {
                console.log(e.target);
                e.preventDefault();
            }
        };
        window.onkeyup = function (e) {
            if (e.keyCode == 8 && e.target.className !== 'terminal-wrapper') {
                e.preventDefault();
            }
        };
        this.toggleBlink();
    };
    TerminalComponent.prototype.toggleBlink = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.blinkLocked) {
                _this.blinkOn = _this.blinkOn ? false : true;
            }
            _this.toggleBlink();
        }, 1000);
    };
    TerminalComponent.prototype.onUserInput = function (event) {
        if (event) {
            console.log(event);
            if (event.keyCode === 32) {
                event.preventDefault();
            }
            if (event.keyCode === 13) {
                this.terminalString += '\n';
            }
            else if (event.keyCode === 8) {
                if (this.terminalString.length > 0) {
                    this.terminalString = this.terminalString.substr(0, this.terminalString.length - 1);
                }
            }
            else if (event.keyCode === 16) {
            }
            else {
                this.terminalString += event.key;
            }
            this.blinkOn = true;
            this.blinkLocked = true;
            if (this.lastResetBlink) {
                clearTimeout(this.lastResetBlink);
            }
            this.lastResetBlink = setTimeout(this.resetBlinkLock, 500, this);
        }
    };
    TerminalComponent.prototype.resetBlinkLock = function (comp) {
        comp.blinkLocked = false;
    };
    TerminalComponent.prototype.getTerminalString = function () {
        // console.log(this.blinkOn);
        return this.terminalString + (this.blinkOn ? '\u2588' : '');
    };
    TerminalComponent.ɵfac = function TerminalComponent_Factory(t) { return new (t || TerminalComponent)(); };
    TerminalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminalComponent, selectors: [["app-terminal"]], decls: 4, vars: 1, consts: [["tabindex", "0", 1, "terminal-wrapper", 3, "keydown"]], template: function TerminalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TerminalComponent_Template_div_keydown_0_listener($event) { return ctx.onUserInput($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "output");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTerminalString());
        } }, styles: [".terminal-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  background-image: radial-gradient(rgba(75, 0, 75, 0.75), black 120%);\n  height: 50vh;\n  width: 50vw;\n  margin: 0;\n  overflow: hidden;\n  padding: 2rem;\n  color: white;\n  font: 1.3rem Inconsolata, monospace;\n  text-shadow: 0 0 5px #C8C8C8;\n}\n.terminal-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px);\n  pointer-events: none;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #0080FF;\n  text-shadow: none;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #0080FF;\n  text-shadow: none;\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluYWwvQzpcXFdJUFxcbmctc3RhbmRhbG9uZS1hcHBcXG15LXRlc3QtYXBwL3NyY1xcYXBwXFx0ZXJtaW5hbFxcdGVybWluYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rlcm1pbmFsL3Rlcm1pbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9FQUFBO0VBR0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJIQUFBO0VBT0Esb0JBQUE7QUNOTjtBRFNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ05KO0FESUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDTko7QURRRTtFQUNFLFNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbmFsL3Rlcm1pbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1pbmFsLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoNzUsIDAsIDc1LCAwLjc1KSwgYmxhY2sgMTIwJVxyXG4gICAgKTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250OiAxLjNyZW0gSW5jb25zb2xhdGEsIG1vbm9zcGFjZTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNDOEM4Qzg7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMGRlZyxcclxuICAgICAgICByZ2JhKGJsYWNrLCAwLjE1KSxcclxuICAgICAgICByZ2JhKGJsYWNrLCAwLjE1KSAxcHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgMXB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDJweFxyXG4gICAgICApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwODBGRjtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBwcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0iLCIudGVybWluYWwtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDc1LCAwLCA3NSwgMC43NSksIGJsYWNrIDEyMCUpO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udDogMS4zcmVtIEluY29uc29sYXRhLCBtb25vc3BhY2U7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNDOEM4Qzg7XG59XG4udGVybWluYWwtd3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xNSksIHJnYmEoMCwgMCwgMCwgMC4xNSkgMXB4LCB0cmFuc3BhcmVudCAxcHgsIHRyYW5zcGFyZW50IDJweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDgwRkY7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG59Il19 */"] });
    return TerminalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminal',
                templateUrl: './terminal.component.html',
                styleUrls: ['./terminal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WIP\ng-standalone-app\my-test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map