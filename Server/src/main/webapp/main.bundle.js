webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>New Project</h1>\r\n\r\n<form class=\"add-project\" (ngSubmit)=\"addProject()\" *ngIf=\"project\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"project.name\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <select name=\"category\" class=\"form-control\" [(ngModel)]=\"project.category\">\r\n      <option *ngFor=\"let item of categories\" [(ngValue)] =\"item.value\">{{item.name}}</option>\r\n    </select>\r\n    </div>\r\n\r\n\r\n\r\n    <input type=\"file\" name=\"file\" (change)=\"setFile($event)\" placeholder=\"Upload file\" accept=\".jpeg,.bmp,.png,.jpg\">\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <label>Goal</label>\r\n        <input type=\"text\" name=\"goal\" class=\"form-control\" [(ngModel)]=\"project.goal\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>About</label>\r\n        <textarea name=\"about\" class=\"form-control\" [(ngModel)]=\"project.about\"></textarea>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"save\" />\r\n    </div>\r\n    <br/>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProjectComponent = (function () {
    function AddProjectComponent(projectService, router, http) {
        this.projectService = projectService;
        this.router = router;
        this.http = http;
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.resetProjectToAdd();
        this.categories = [
            { name: "Art", value: "ART" },
            { name: "Comics", value: "COMICS" },
            { name: "Design", value: "DESIGN" },
            { name: "Fashion", value: "FASHION" },
            { name: "Food", value: "FOOD" },
            { name: "Games", value: "GAMES" },
            { name: "Music", value: "MUSIC" },
            { name: "Techonology", value: "TECHNOLOGY" }
        ];
    };
    AddProjectComponent.prototype.setFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
        }
    };
    AddProjectComponent.prototype.addProject = function () {
        var _this = this;
        this.uploadImage(this.file).subscribe(function (imagePath) {
            _this.project.image = imagePath.text();
            _this.projectService.saveProject(_this.project).subscribe(function (data) {
                _this.resetProjectToAdd();
                _this.router.navigate(['/main']);
            }, function (err) { return console.error(err); });
        }, function (error) {
            console.error(error);
        });
    };
    AddProjectComponent.prototype.uploadImage = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post('http://localhost:8080/upload', formData);
    };
    AddProjectComponent.prototype.resetProjectToAdd = function () {
        this.project = {
            name: '',
            category: '',
            image: '',
            goal: 0,
            raised: 0,
            about: '',
            createDateTime: null
        };
    };
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-project',
            template: __webpack_require__("../../../../../src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul .active a{\r\n    border-right: 2px solid #333;\r\n}\r\n\r\nul .active a:hover{\r\n    color: white;\r\n    background-color: #333;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li *ngIf=\"!isLoggedIn()\" class=\"active\"><a href=\"login\">Login</a></li>\r\n                <li *ngIf=\"!isLoggedIn()\" class=\"active\"><a href=\"register\">Register</a></li>\r\n                <li *ngIf=\"isLoggedIn()\" class=\"active\"><a href=\"addProject\">New Project</a></li>\r\n                <li>\r\n                    <div>\r\n                        <h4>Crowdfund</h4>\r\n                        <p><em>This is crowdfund app that lets you interact with project owner once you support projects...</em></p>\r\n\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n                <li *ngIf=\"isLoggedIn()\" class=\"active\"><a (click)=\"logout()\">Logout</a></li>\r\n                <li class=\"active\"><a href=\"main\">Home</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container theme-showcase\" role=\"main\">\r\n    <!-- <div class=\"jumbotron\">\r\n        <h1>Crowdfund</h1>\r\n        <p>This is crowdfund app that lets you interact with project owner once you support project</p>\r\n    </div> -->\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_token_interceptor_service__ = __webpack_require__("../../../../../src/app/service/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_can_activate_auth_guard__ = __webpack_require__("../../../../../src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_main_component_service__ = __webpack_require__("../../../../../src/app/main/main-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__project_preview_project_preview_component__ = __webpack_require__("../../../../../src/app/project-preview/project-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__chat_item_chat_item_component__ = __webpack_require__("../../../../../src/app/chat-item/chat-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_19__project_preview_project_preview_component__["a" /* ProjectPreviewComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: 'addProject', component: __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__["a" /* AddProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */]] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__["a" /* AddProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */]] },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_19__project_preview_project_preview_component__["a" /* ProjectPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__chat_item_chat_item_component__["a" /* ChatItemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__service_token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_12__service_authentication_service_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_13__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__service_jwt_utils_service__["a" /* JwtUtilsService */],
                __WEBPACK_IMPORTED_MODULE_17__main_main_component_service__["a" /* MainComponentService */],
                __WEBPACK_IMPORTED_MODULE_14__service_project_service__["a" /* ProjectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-success{\r\n    display: block;\r\n    height: 30px;\r\n    padding: 5px;\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 15px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"add-message\" (ngSubmit)=\"addChatItem()\">\r\n    <div class=\"form-group\">\r\n        <label>Message</label>\r\n        <textarea name=\"message\" class=\"form-control\" [(ngModel)]=\"chatText\"></textarea>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Add comment\" />\r\n    </div>\r\n</form>\r\n<br/>\r\n\r\n<br/>\r\n<div>\r\n    <div *ngIf=\"chatItems\">\r\n        <div *ngFor=\"let item of chatItems\">\r\n            <p class=\"bg-success\">{{item.message}}</p>\r\n            <!-- <p>{{item.date}}</p> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatItemComponent = (function () {
    function ChatItemComponent(route, http) {
        this.route = route;
        this.http = http;
        this.chatToAdd = {
            message: ''
        };
    }
    ChatItemComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ChatItemComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/projects/" + _this.id + "/chat").subscribe(function (res) {
                _this.chatItems = res;
                console.log(res);
            });
        });
    };
    ChatItemComponent.prototype.addChatItem = function () {
        var _this = this;
        this.chatToAdd.message = this.chatText;
        console.log(this.chatToAdd);
        this.http.post("api/projects/" + this.id + "/chat", this.chatToAdd).subscribe(function (res) {
            _this.resetChatText();
            _this.loadData();
        });
    };
    ChatItemComponent.prototype.resetChatText = function () {
        this.chatText = '';
    };
    ChatItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-item',
            template: __webpack_require__("../../../../../src/app/chat-item/chat-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-item/chat-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ChatItemComponent);
    return ChatItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \r\n  <div class=\"row\"> \r\n    <div class=\"col-md-3\"></div> \r\n    <div class=\"col-md-6\"> \r\n      <form class=\"form-signin\" (ngSubmit)=\"login()\"> \r\n        <h2 class=\"form-signin-heading\">Please sign in</h2> \r\n        <label for=\"username\" class=\"sr-only\">Username</label> \r\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" \r\n          required autofocus> \r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label> \r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" \r\n          required> \r\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button> \r\n      </form> \r\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\"> \r\n        Wrong username or password. \r\n      </div> \r\n    </div> \r\n    <div class=\"col-md-3\"></div> \r\n  </div> \r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main-component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponentService = (function () {
    function MainComponentService(httpClient) {
        this.httpClient = httpClient;
        this.path = 'api/projects';
    }
    MainComponentService.prototype.getProjects = function () {
        return this.httpClient.get(this.path);
    };
    MainComponentService.prototype.getProject = function (id) {
        return this.httpClient.get(this.path);
    };
    MainComponentService.prototype.deleteProject = function (p) {
        return this.httpClient.delete(this.path + '/' + p.id);
    };
    MainComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MainComponentService);
    return MainComponentService;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let project of projects\">\r\n    <app-project [data]=\"project\"></app-project>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component_service__ = __webpack_require__("../../../../../src/app/main/main-component.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(projectService, authenticationService) {
        this.projectService = projectService;
        this.authenticationService = authenticationService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    MainComponent.prototype.loadData = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    MainComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__main_main_component_service__["a" /* MainComponentService */],
            __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Page not found 404\r\n</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-preview/project-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    max-width: 300px;\r\n    height: 300px;\r\n    float: right;\r\n    margin: 2%;\r\n}\r\n\r\n.alert {\r\n    float: center;\r\n    /* border: width border-style color; */\r\n    max-width: 83%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-preview/project-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"project\">\r\n\r\n        <img class=\"img-rounded\" [src]=\"project.image\">\r\n        <h1>{{project.name}}</h1>\r\n        <h3>Category: {{project.category}}</h3>\r\n        <h5>About: {{project.about}}</h5>\r\n        <p>Start date:{{project.createDateTime | date : \"MM/dd/yyyy HH:mm\"}}</p>\r\n        <h4>Goal: {{project.goal}} €</h4>\r\n        <p>Collected: {{project.raised}} €</p>\r\n\r\n\r\n        <div class=\"progress\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"project.percentage + '%'\" [attr.aria-valuenow]=\"project.raised\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"project.goal\">\r\n            </div>\r\n        </div>\r\n        <div class=\"alert\">\r\n            <div *ngIf=\"goalComplited\" class=\"alert alert-success\" role=\"alert\"> Goal successful, thank you!!!\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Amount</label>\r\n            <input min=\"1\" type=\"number\" oninput=\"validity.valid||(value='');\" name=\" amount \" class=\"form-control \" [(ngModel)]=\"amount \" placeholder=\"Help us, donate some money here,and click on button \" />\r\n        </div>\r\n        <button [disabled]=\"!amount \" (click)=\"updateRaised() \" (click)=\"reset() \" class=\"btn btn-success \">Donate</button>\r\n        <br/>\r\n        <app-chat-item></app-chat-item>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-preview/project-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPreviewComponent = (function () {
    function ProjectPreviewComponent(route, http) {
        this.route = route;
        this.http = http;
        this.goalComplited = false;
    }
    ProjectPreviewComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ProjectPreviewComponent.prototype.reset = function () {
        this.amount = 0;
    };
    ProjectPreviewComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/projects/" + _this.id).subscribe(function (res) {
                _this.project = res;
                _this.project.percentage = _this.project.raised / _this.project.goal * 100;
                _this.rised = _this.project.raised;
                if (_this.rised >= _this.project.goal) {
                    _this.goalComplited = true;
                }
            });
        });
    };
    ProjectPreviewComponent.prototype.updateRaised = function () {
        var _this = this;
        this.project.raised += this.amount;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.put("api/projects/" + _this.id, _this.project).subscribe(function (res) {
                _this.loadData();
            });
        });
    };
    ProjectPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-preview',
            template: __webpack_require__("../../../../../src/app/project-preview/project-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-preview/project-preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ProjectPreviewComponent);
    return ProjectPreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    padding-left: 5px;\r\n}\r\n\r\nimg {\r\n    max-width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n/* p {\r\n    margin: 2%;\r\n} */\r\n\r\n.card-body {\r\n    margin: 2%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card  col-md-4\">\r\n\r\n    <div class=\"card-body\">\r\n        <div *ngIf=\"project.image\">\r\n            <img [src]=\"project.image\" class=\"img-thumbnail\">\r\n        </div>\r\n\r\n        <h4 class=\"card-title\">{{project.name}}</h4>\r\n        <ul>\r\n            <li>Category: {{project.category}}</li>\r\n            <li>Goal: {{project.goal}}</li>\r\n            <li>Raised: {{project.raised}}</li>\r\n            <p>About: {{project.about}}</p>\r\n        </ul>\r\n        <a [routerLink]=\"['/project/', project.id]\" class=\"btn btn-primary\">View project</a>\r\n        <button *ngIf=\"isAdmin()\" class=\"btn btn-danger\" (click)=\"delete(project)\">Delete</button>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(authenticationService, httpClient, projectService) {
        this.authenticationService = authenticationService;
        this.httpClient = httpClient;
        this.projectService = projectService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    ProjectComponent.prototype.delete = function (project) {
        var _this = this;
        this.projectService.delete(project).subscribe(function () { _this.loadData(); });
    };
    ProjectComponent.prototype.loadData = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("data"),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__service_project_service__["a" /* ProjectService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\r\n\r\n<form class=\"add-project\" (ngSubmit)=\"addUser()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"userToAdd.username\" placeholder=\"username\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"userToAdd.password\" placeholder=\"password\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"firstName\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"userToAdd.firstName\" placeholder=\"firstname\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>LastName</label>\r\n    <input type=\"lastName\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"userToAdd.lastName\" placeholder=\"lastname\"/>\r\n  </div>\r\n  <input class=\"btn btn-success\" type=\"submit\" value=\"Register\"/>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.path = 'api/user';
        this.userToAdd = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            role: 'USER'
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.resetUser();
    };
    RegisterComponent.prototype.addUser = function () {
        var _this = this;
        console.log(this.userToAdd);
        this.http.post(this.path, this.userToAdd).subscribe(function (res) {
            _this.router.navigate(['/login']);
            _this.resetUser();
        });
    };
    RegisterComponent.prototype.resetUser = function () {
        this.userToAdd = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            role: 'USER'
        };
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    role: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().role.indexOf('ADMINISTRATOR') > -1;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/service/can-activate-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/service/jwt-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtUtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/service/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.path = "api/projects";
    }
    ProjectService.prototype.saveProject = function (project) {
        return this.httpClient.post(this.path, project);
    };
    ProjectService.prototype.delete = function (project) {
        return this.httpClient.delete(this.path + '/' + project.id);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__authentication_service_service__["a" /* AuthenticationService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/service/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map