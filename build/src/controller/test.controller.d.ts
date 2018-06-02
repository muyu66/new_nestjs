import { CreateTestDto } from '../dto/index';
import { TestService } from '../service/index';
import { BaseController } from './base.controller';
export declare class TestController extends BaseController {
    private readonly testService;
    constructor(testService: TestService);
    createOne(body: CreateTestDto): Promise<import("../interface/attribute.interface").IAttribute.ITest>;
    findAll(): Promise<import("../interface/attribute.interface").IAttribute.ITest[]>;
}
