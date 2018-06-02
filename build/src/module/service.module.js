"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const index_1 = require("../service/index");
const dao_module_1 = require("./dao.module");
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    common_1.Module({
        imports: [dao_module_1.DaoModule],
        providers: [index_1.TestService],
        exports: [index_1.TestService],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map