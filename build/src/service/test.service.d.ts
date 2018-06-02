import { BaseService } from './base.service';
import { TestDao } from '../dao';
import { CreateTestDto } from '../dto';
export declare class TestService extends BaseService {
    private readonly testDao;
    constructor(testDao: TestDao);
    createOne(data: CreateTestDto): Promise<import("../interface/attribute.interface").IAttribute.ITest>;
    findAll(): Promise<import("../interface/attribute.interface").IAttribute.ITest[]>;
}
