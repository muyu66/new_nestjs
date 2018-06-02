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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const const_1 = require("../../const");
const base_entity_1 = require("./base.entity");
let TestEntity = class TestEntity extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TestEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: const_1.ConstEntity.NAME_LENGTH }),
    __metadata("design:type", String)
], TestEntity.prototype, "name", void 0);
TestEntity = __decorate([
    typeorm_1.Entity()
], TestEntity);
exports.TestEntity = TestEntity;
//# sourceMappingURL=test.entity.js.map