"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/share');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.insertContacts = function (newContact) {
        var _this = this;
        return this._http.post('http://localhost:26826/api/contact/InsertContact', newContact)
            .toPromise()
            .then(function (res) { return _this._resp = res; })
            .catch(this.handleError);
    };
    ContactService.prototype.getContacts = function () {
        return this._http.get('http://localhost:26826/api/contact/getcontacts')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=ContactService.js.map