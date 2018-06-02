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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const index_1 = require("../dto/index");
const index_2 = require("../service/index");
const index_3 = require("../pipe/index");
const index_4 = require("../decorator/index");
const index_5 = require("../guard/index");
const base_controller_1 = require("./base.controller");
let TestController = class TestController extends base_controller_1.BaseController {
    constructor(testService) {
        super();
        this.testService = testService;
    }
    createOne(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.testService.createOne(body);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.testService.findAll();
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(index_5.GuardLimit),
    index_4.DLimit(10),
    __param(0, common_1.Body(new index_3.PipeValidation())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.CreateTestDto]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "createOne", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "findAll", null);
TestController = __decorate([
    common_1.Controller('tests'),
    __metadata("design:paramtypes", [index_2.TestService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map