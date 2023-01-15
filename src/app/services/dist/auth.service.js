"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
//import firebase from 'firebase/compat/app'
var app_1 = require("firebase/compat/app");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(afs, afauth, router, LoadingCtrl, toastr) {
        var _this = this;
        this.afs = afs;
        this.afauth = afauth;
        this.router = router;
        this.LoadingCtrl = LoadingCtrl;
        this.toastr = toastr;
        this.afauth.authState.pipe(operators_1.switchMap(function (user) {
            if (user) {
                return _this.afs.doc("user/" + user.uid).valueChanges();
            }
            else {
                return rxjs_1.of(null);
            }
        }));
    } //contructor ending
    //SignIn
    AuthService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LoadingCtrl.create({
                            message: 'Authenticating...',
                            spinner: 'crescent',
                            showBackdrop: true
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.afauth.setPersistence(app_1["default"].auth.Auth.Persistence.LOCAL).then(function () {
                            _this.afauth.signInWithEmailAndPassword(email, password).then(function (data) {
                                var _a;
                                if (!((_a = data.user) === null || _a === void 0 ? void 0 : _a.emailVerified)) {
                                    loading.dismiss();
                                    _this.toast('Plase Verify Your Email Address!', 'warning');
                                    _this.afauth.signOut();
                                }
                                else {
                                    loading.dismiss();
                                    _this.router.navigate(['/tab-nav/home']);
                                }
                            })["catch"](function (error) {
                                loading.dismiss();
                                _this.toast(error.message, 'danger');
                            });
                        })["catch"](function (error) {
                            _this.toast(error.message, 'danger');
                        });
                        return [2 /*return*/];
                }
            });
        });
    }; //signIn
    //signOut
    AuthService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LoadingCtrl.create({
                            spinner: 'crescent',
                            showBackdrop: true
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.afauth.signOut()
                            .then(function () {
                            loading.dismiss();
                            _this.router.navigate(['/login']);
                        });
                        return [2 /*return*/];
                }
            });
        });
    }; //end of signOut
    //Toast MEssage
    AuthService.prototype.toast = function (message, status) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastr.create({
                            message: message,
                            color: status,
                            position: 'top',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    }; //end of toast
    AuthService.prototype.update_student = function (userId, user) {
        this.afs.doc(this.user + '/' + userId).update(user);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
