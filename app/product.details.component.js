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
var product_1 = require("./product");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductDetailsComponent.prototype, "product", void 0);
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            template: " \n        <div *ngIf=\"product\">\n        <h2>{{product.name}}</h2>\n        <div><label>id: </label>{{product.id}}</div>\n        <div><label>title: </label><input [(ngModel)]=\"product.calories\"/></div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product.details.component.js.map