"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
//Firebase
var compat_1 = require("@angular/fire/compat");
var auth_1 = require("@angular/fire/compat/auth");
var storage_1 = require("@angular/fire/compat/storage");
var firestore_1 = require("@angular/fire/compat/firestore");
var database_1 = require("@angular/fire/compat/database");
//ENVIRONMENT
var environment_prod_1 = require("../environments/environment.prod");
//AUTH SERVICES
var auth_service_1 = require("./services/auth.service");
//AUTH GUARD
var auth_guard_1 = require("./guards/auth.guard");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                compat_1.AngularFireModule.initializeApp(environment_prod_1.environment.firebaseConfig),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule,
                database_1.AngularFireDatabaseModule
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService,
                {
                    provide: router_1.RouteReuseStrategy,
                    useClass: angular_1.IonicRouteStrategy
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
