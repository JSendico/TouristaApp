"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarRatingComponent = void 0;
var core_1 = require("@angular/core");
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.stars = [];
        this.rateNumber = 0;
        this.addStart = 1;
        this.countStarFive = 0;
        this.countStarFour = 0;
        this.countStarThree = 0;
        this.countStarTwo = 0;
        this.countStarOne = 0;
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        // initialize empty
        for (var x = 1; x <= 5; x++) {
            this.stars.push({ filled: false, key: x });
            //console.log(x);
        }
    };
    StarRatingComponent.prototype.rate = function (e) {
        this.reset();
        this.rateNumber = Number(e.target.id);
        for (var x = 0; x <= this.rateNumber - 1; x++) {
            this.stars[x].filled = true;
        }
        if (this.rateNumber == 5) {
            this.countStarFive++;
            localStorage.setItem('rating', JSON.stringify(this.countStarFive));
        }
        if (this.rateNumber == 4) {
            this.countStarFour++;
            localStorage.setItem('rating', JSON.stringify(this.countStarFour));
        }
        if (this.rateNumber == 3) {
            this.countStarThree++;
            localStorage.setItem('rating', JSON.stringify(this.countStarThree));
        }
        if (this.rateNumber == 2) {
            this.countStarTwo++;
            localStorage.setItem('rating', JSON.stringify(this.countStarTwo));
        }
        if (this.rateNumber == 1) {
            this.countStarOne++;
            localStorage.setItem('rating', JSON.stringify(this.countStarOne));
        }
    };
    StarRatingComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var x = _a[_i];
            x.filled = false;
        }
        this.rateNumber = 0;
        this.countStarFive = 0;
        this.countStarFour = 0;
        this.countStarThree = 0;
        this.countStarTwo = 0;
        this.countStarOne = 0;
    };
    StarRatingComponent = __decorate([
        core_1.Component({
            selector: 'app-star-rating',
            templateUrl: './star-rating.component.html',
            styleUrls: ['./star-rating.component.scss']
        })
    ], StarRatingComponent);
    return StarRatingComponent;
}());
exports.StarRatingComponent = StarRatingComponent;
