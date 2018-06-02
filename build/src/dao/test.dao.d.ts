import { BaseDao } from './base.dao';
import { IAttribute } from 'interface';
import { Model } from 'mongoose';
export declare class TestDao extends BaseDao {
    private readonly testModel;
    constructor(testModel: Model<IAttribute.ITest>);
    createOne(data: Partial<IAttribute.ITest>): Promise<IAttribute.ITest>;
    findAll(): Promise<IAttribute.ITest[]>;
    findOne(where: Partial<IAttribute.ITest>): Promise<IAttribute.ITest>;
    findMany(where: Partial<IAttribute.ITest>): Promise<IAttribute.ITest[]>;
}
