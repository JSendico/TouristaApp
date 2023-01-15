"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var routes = [
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./register/register.module'); }).then(function (m) { return m.RegisterPageModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'forgot-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forgot-password/forgot-password.module'); }).then(function (m) { return m.ForgotPasswordPageModule; }); }
    },
    {
        path: 'profile/edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./profile-edit/profile-edit.module'); }).then(function (m) { return m.ProfileEditPageModule; }); }
    },
    {
        path: 'change-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./change-password/change-password.module'); }).then(function (m) { return m.ChangePasswordPageModule; }); },
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'splash',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./splash/splash.module'); }).then(function (m) { return m.SplashPageModule; }); }
    },
    {
        path: 'forum',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forum/forum.module'); }).then(function (m) { return m.ForumPageModule; }); }
    },
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./tabnav/tabnav.module'); }).then(function (m) { return m.TabnavPageModule; }); }
    },
    {
        path: '**',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page-not-found/page-not-found.module'); }).then(function (m) { return m.PageNotFoundPageModule; }); }
    },
    {
        path: 'weather',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./weather/weather.module'); }).then(function (m) { return m.WeatherPageModule; }); }
    },
    {
        path: 'forum/edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forum-edit/forum-edit.module'); }).then(function (m) { return m.ForumEditPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
