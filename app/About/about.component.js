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
var ContactService_1 = require('../Service/ContactService');
var AboutComponent = (function () {
    function AboutComponent(_contactService) {
        this._contactService = _contactService;
    }
    AboutComponent.prototype.onSelectionChange = function (status) {
        this.newContact.hosting = status;
    };
    AboutComponent.prototype.ngOnInit = function () {
        debugger;
        this.newContact = { firstName: '', lastName: '', eMail: '', state: '', hosting: '' };
    };
    AboutComponent.prototype.onSubmit = function () {
        debugger;
        //  console.log(this.newContact.firstName + ' ' + this.newContact.lastName + ' ' + this.newContact.eMail + '  ' + this.newContact.state + '  ' + this.newContact.hosting);
        this._contactService.insertContacts(this.newContact);
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about-Conf",
            templateUrl: 'app/Templates/AComponent.html',
        }), 
        __metadata('design:paramtypes', [ContactService_1.ContactService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map