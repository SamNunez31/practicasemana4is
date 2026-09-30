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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const productos_model_1 = require("./productos.model");
let ProductosResolver = class ProductosResolver {
    catalogo = [
        { id: 1, nombre: 'Teclado mecánico', precio: 45.9 },
        { id: 3, nombre: 'Teclado inalámbrico hp', precio: 75.5 },
        { id: 4, nombre: 'MacBook Pro', precio: 3500 },
    ];
    productos() {
        return this.catalogo;
    }
    productoPorId(id) {
        return this.catalogo.find((p) => p.id === id);
    }
};
exports.ProductosResolver = ProductosResolver;
__decorate([
    (0, graphql_1.Query)(() => [productos_model_1.Producto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductosResolver.prototype, "productos", null);
__decorate([
    (0, graphql_1.Query)(() => productos_model_1.Producto, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ProductosResolver.prototype, "productoPorId", null);
exports.ProductosResolver = ProductosResolver = __decorate([
    (0, graphql_1.Resolver)(() => productos_model_1.Producto)
], ProductosResolver);
//# sourceMappingURL=productos.resolver.js.map