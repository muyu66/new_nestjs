"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config = require("config");
const entity_1 = require("database/entity");
const { host, port, username, password, database } = config.get('database.mysql');
const Typeorm = [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        logging: ['error'],
        logger: 'advanced-console',
    }),
    typeorm_1.TypeOrmModule.forFeature([entity_1.TestEntity]),
];
let TypeormModule = class TypeormModule {
};
TypeormModule = __decorate([
    common_1.Module({
        imports: Typeorm,
        exports: Typeorm,
    })
], TypeormModule);
exports.TypeormModule = TypeormModule;
//# sourceMappingURL=typeorm.module.js.map