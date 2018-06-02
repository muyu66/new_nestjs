"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongodb_module_1 = require("./mongodb.module");
const dao_1 = require("../dao");
let DaoModule = class DaoModule {
};
DaoModule = __decorate([
    common_1.Module({
        imports: [mongodb_module_1.MongodbModule],
        providers: [dao_1.TestDao],
        exports: [dao_1.TestDao],
    })
], DaoModule);
exports.DaoModule = DaoModule;
//# sourceMappingURL=dao.module.js.map