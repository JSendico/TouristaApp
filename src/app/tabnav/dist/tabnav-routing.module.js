"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabnavPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var tabnav_page_1 = require("./tabnav.page");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'tab-nav',
        component: tabnav_page_1.TabnavPage,
        children: [
            {
                path: 'home',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
            },
            {
                path: 'weather',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../weather/weather.module'); }).then(function (m) { return m.WeatherPageModule; }); }
            },
            {
                path: 'forum',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../forum/forum.module'); }).then(function (m) { return m.ForumPageModule; }); }
            },
            {
                path: 'profile',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../profile/profile.module'); }).then(function (m) { return m.ProfilePageModule; }); }
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tab-nav/home',
        pathMatch: 'full'
    }
];
var TabnavPageRoutingModule = /** @class */ (function () {
    function TabnavPageRoutingModule() {
    }
    TabnavPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabnavPageRoutingModule);
    return TabnavPageRoutingModule;
}());
exports.TabnavPageRoutingModule = TabnavPageRoutingModule;
