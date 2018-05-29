(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <img src=\"assets/logo.png\" alt=\"Logo in a nutshell\">\r\n    <span>in a nutshell</span>\r\n</mat-toolbar>\r\n\r\n<div fxFlex class=\"topics mat-elevation-z4\">\r\n    <app-topic-block\r\n        [topic]=\"topic\"\r\n        *ngFor=\"let topic of topics\"></app-topic-block>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n  :host mat-toolbar {\n    background: transparent;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    font-weight: 500; }\n  :host mat-toolbar img {\n      display: inline-block;\n      padding-right: 4px;\n      width: 30px; }\n  :host .topics {\n    overflow: hidden;\n    background: #fff;\n    border-radius: 16px 16px 0 0; }\n"

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
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics */ "./src/app/topics.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.topics = _topics__WEBPACK_IMPORTED_MODULE_0__["topics"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topic_block_topic_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic-block/topic-block.component */ "./src/app/topic-block/topic-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _topic_block_topic_block_component__WEBPACK_IMPORTED_MODULE_7__["TopicBlockComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot({}),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/topic-block/topic-block.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-block/topic-block.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #content [@popState]=\"popState\" class=\"content\">\r\n    <div matRipple class=\"title\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-icon class=\"close-btn\" (click)=\"close($event)\">arrow_back</mat-icon>\r\n        <span fxFlex>{{topic.title}}</span>\r\n    </div>\r\n    <div class=\"content-stretch\">\r\n        <markdown [data]=\"topic.body || 'Inhalt folgt.'\" class=\"body\"></markdown>\r\n        <div *ngIf=\"topic.children\">\r\n            <app-topic-block\r\n                [topic]=\"topic\"\r\n                *ngFor=\"let topic of topic.children\"></app-topic-block>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topic-block/topic-block.component.scss":
/*!********************************************************!*\
  !*** ./src/app/topic-block/topic-block.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  height: 52px; }\n  :host:last-of-type > .content > .title {\n    border-bottom-color: transparent; }\n  :host.view > .content {\n    z-index: 1;\n    position: absolute; }\n  :host.view > .content > .title {\n      border-bottom-color: rgba(0, 0, 0, 0.2) !important;\n      position: absolute;\n      left: 0;\n      top: 0;\n      background: #fff; }\n  :host.view > .content > .title span {\n        padding-left: 8px; }\n  :host.view > .content > .title .close-btn {\n        display: block; }\n  :host > .content {\n    width: 100%;\n    height: 52px;\n    background: #fff;\n    border-radius: 8px; }\n  :host > .content .title {\n      width: 100%;\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.9);\n      font-weight: 500;\n      padding: 0 16px;\n      height: 52px;\n      position: relative;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n  :host > .content .title span {\n        line-height: 52px;\n        height: 52px; }\n  :host > .content .title .close-btn {\n        display: none; }\n  :host > .content .content-stretch {\n      padding-top: 52px;\n      height: 100%;\n      overflow: auto;\n      box-sizing: border-box; }\n  :host > .content .content-stretch .body {\n        display: block;\n        line-height: 1.5;\n        font-size: 14px;\n        padding: 16px;\n        color: #5f6368; }\n  :host > .content .content-stretch .body /deep/ img {\n          max-width: 100%; }\n  :host > .content .content-stretch .body /deep/ h4 {\n          border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n          margin: 0;\n          padding-bottom: 4px; }\n"

/***/ }),

/***/ "./src/app/topic-block/topic-block.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-block/topic-block.component.ts ***!
  \******************************************************/
/*! exports provided: TopicBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicBlockComponent", function() { return TopicBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicBlockComponent = /** @class */ (function () {
    function TopicBlockComponent(elRef) {
        this.elRef = elRef;
        this.popState = false;
        this.show = false;
    }
    TopicBlockComponent.prototype.onClick = function (e) {
        if (this.show)
            return;
        this.show = true;
        var contentEl = this.content.nativeElement;
        var rootEl = this.elRef.nativeElement;
        contentEl.style.top = rootEl.offsetTop + "px";
        rootEl.classList.toggle('view', true);
        this.popState = true;
    };
    TopicBlockComponent.prototype.close = function (ev) {
        ev.stopPropagation();
        if (!this.show)
            return;
        this.show = false;
        var rootEl = this.elRef.nativeElement;
        rootEl.classList.toggle('view', false);
        this.popState = false;
    };
    TopicBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopicBlockComponent.prototype, "topic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Object)
    ], TopicBlockComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TopicBlockComponent.prototype, "onClick", null);
    TopicBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-block',
            template: __webpack_require__(/*! ./topic-block.component.html */ "./src/app/topic-block/topic-block.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('popState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s ease')
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./topic-block.component.scss */ "./src/app/topic-block/topic-block.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TopicBlockComponent);
    return TopicBlockComponent;
}());



/***/ }),

/***/ "./src/app/topics.ts":
/*!***************************!*\
  !*** ./src/app/topics.ts ***!
  \***************************/
/*! exports provided: topics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topics", function() { return topics; });
var topics = [
    {
        title: 'Biologie',
        children: [
            {
                title: 'Eigenschaften von Lebewesen',
                body: "\n                - Lebewesen k\u00F6nnen Informationen (Reize) aus ihrer Umwelt aufnehmen und auf diese reagieren (Reizbarkeit).\n                - Lebewesen sind in der Lage, sich fortzupflanzen und sich zu vermehren (Fortpflanzung und Vermehrung).\n                - Lebewesen besitzen zum Aufb  au und Aufrechterhaltung ihres K\u00F6rpers und seiner Funktionen einen (eigenen!) Stoffwechsel.\n                - Lebewesen wachsen und entwickeln sich (Wachstum und Entwicklung).\n                - Lebewesen k\u00F6nnen sich selbst bewegen oder zeigen zumindest innerhalb ihres K\u00F6rpers (bzw. innerhalb ihrer Zellen) Bewegungen (Bewegung, Beweglichkeit bzw. Motilit\u00E4t).\n                ",
            },
            {
                title: 'Zellen',
                body: "\n                ",
                children: [
                    {
                        title: 'Protocyte',
                        body: "\n                        - Zelle ohne Zellkern aber mit einer Kernregion.\n                        - Lebewesen mit Protocyten werden Prokaryoten genannt (z.B. Bakterien).\n                        - Besitzt kein ER, keinen Golgi-Apparat, keine Mitochondrien und keine Chloroplasten.\n                        ![bakterienzelle.png](assets/bakterienzelle.png)\n                        ",
                    },
                    {
                        title: 'Pflanzenzelle',
                        body: "\n                        - Zelle mit Zellkern (Eucyte).\n                        - Hat eine st\u00FCtzende und sch\u00FCtzende Zellwand.\n                        - Besitzt Chloroplasten und Mitochondrien.\n                        - Pflanzen sind autotroph (=selbstern\u00E4hrend).\n                        - Pflanzen k\u00F6nnen sich nicht fortbewegen.\n                        ![pflanzenzelle.png](assets/pflanzenzelle.png)\n                        ",
                    },
                    {
                        title: 'Tierische Zelle',
                        body: "\n                        - Zelle mit Zellkern (Eucyte).\n                        - Besitzt keine Zellwand. K\u00F6rper wird daher vom Skelett und Muskeln gehalten.\n                        - Besitzt Mitochondrien, daf\u00FCr keine Chloroplasten\n                        - Tiere sind heterotroph (=sich von anderen ern\u00E4hrend).\n                        - Tiere m\u00FCssen sich bewegen um Nahrung zu finden\n                        ![tierische-zelle.png](assets/tierische-zelle.png)\n                        ",
                    },
                    {
                        title: 'Bausteine der Zellen',
                        body: "\n                        #### Zellwand\n                        - Nur bei Pflanzenzellen.\n                        - Sch\u00FCtzt und st\u00FCtzt.\n\n                        #### Cytoplasma\n                        - Gesamter Bereich, der den Zellkern umgibt.\n                        - Besteht mehrheitlich aus Wasser und vielen Proteinen.\n                        - Somit ist das Cytoplasma dickfl\u00FCssig bis gelartig.\n\n                        #### Zellmembran\n                        - Regelt den Stoffaustausch zwischen den Zellen und ihrer Umgebung.\n                        - Grenzt Cytoplasma ab.\n                        - Erm\u00F6glicht Kommunikation zwischen den Zellen und ihrer Umgebung.\n                        - Besteht aus einer Lipid-Doppelschicht.\n                        ![zellmembran.png](assets/zellmembran.png)\n\n                        #### Zellkern\n                        - Tr\u00E4ger des Erbgutes.\n                        - Bewahrt Informationen f\u00FCr den Bau und Betrieb der Zelle.\n                        - Steuert mit dieser Information die Entwicklung und Aktivit\u00E4t der Zelle.\n                        - Verdoppelt das Erbgut vor der Zellteilung.\n                        ...\n                        ",
                    },
                ]
            },
        ]
    },
    {
        title: 'Chemie',
    },
    {
        title: 'Umwelt',
    }
];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\OneDrive\Desktop\learn\learn-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map