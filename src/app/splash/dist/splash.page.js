"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SplashPage = void 0;
var core_1 = require("@angular/core");
var SplashPage = /** @class */ (function () {
    function SplashPage(router) {
        var _this = this;
        this.router = router;
        setTimeout(function () {
            _this.router.navigateByUrl('login');
        }, 2000);
    }
    SplashPage.prototype.ngOnInit = function () {
    };
    SplashPage = __decorate([
        core_1.Component({
            selector: 'app-splash',
            templateUrl: './splash.page.html',
            styleUrls: ['./splash.page.scss']
        })
    ], SplashPage);
    return SplashPage;
}());
exports.SplashPage = SplashPage;
